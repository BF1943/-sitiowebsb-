import React, { useState, useEffect, useContext, useMemo } from 'react';
import { SiteContext } from '@/context/SiteContext';
import { Loader2, Save, Trash2, Plus, Car, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { generateCarSlug } from '@/lib/generateCarSlug';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

const STORAGE_BUCKET = 'autos-inventario';
const CURRENT_YEAR = new Date().getFullYear();

const emptyForm = () => ({
  marca: '',
  modelo: '',
  'año': CURRENT_YEAR,
  precio: '',
  kilometraje: '',
  color: '',
  'transmisión': 'Automática',
  cilindros: '',
  'garantía': 'Garantía de 12 meses',
  propietarios: 'Propietarios 1',
  origen: 'Origen BC',
  destacado: false,
});

function sanitizeFileName(name) {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9.-]+/g, '-')
    .replace(/-+/g, '-');
}

export default function AdminCarEditor() {
  const { supabase } = useContext(SiteContext);
  const { toast } = useToast();
  const [cars, setCars] = useState([]);
  const [loadingCars, setLoadingCars] = useState(true);
  const [selectedCarId, setSelectedCarId] = useState('new');
  const [form, setForm] = useState(emptyForm());
  const [imageFile, setImageFile] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [deleteConfirmText, setDeleteConfirmText] = useState('');

  const isEditMode = selectedCarId !== 'new';
  const selectedCar = useMemo(
    () => cars.find((c) => c.id === selectedCarId),
    [cars, selectedCarId]
  );

  useEffect(() => {
    fetchCars();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [supabase]);

  useEffect(() => {
    if (selectedCar) {
      setForm({
        marca: selectedCar.marca ?? '',
        modelo: selectedCar.modelo ?? '',
        'año': selectedCar['año'] ?? CURRENT_YEAR,
        precio: selectedCar.precio ?? '',
        kilometraje: selectedCar.kilometraje ?? '',
        color: selectedCar.color ?? '',
        'transmisión': selectedCar['transmisión'] ?? 'Automática',
        cilindros: selectedCar.cilindros ?? '',
        'garantía': selectedCar['garantía'] ?? 'Garantía de 12 meses',
        propietarios: selectedCar.propietarios ?? 'Propietarios 1',
        origen: selectedCar.origen ?? 'Origen BC',
        destacado: selectedCar.destacado ?? false,
      });
    } else {
      setForm(emptyForm());
    }
    setImageFile(null);
  }, [selectedCar]);

  async function fetchCars() {
    if (!supabase) return;
    try {
      setLoadingCars(true);
      const { data, error } = await supabase
        .from('fotos_de_autos')
        .select('*')
        .order('marca', { ascending: true });
      if (error) throw error;
      setCars(data || []);
    } catch (error) {
      console.error(error);
      toast({
        variant: 'destructive',
        title: 'Error de carga',
        description: 'No se pudo cargar el inventario.',
      });
    } finally {
      setLoadingCars(false);
    }
  }

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }

  function handleFileChange(e) {
    const file = e.target.files?.[0];
    if (!file) {
      setImageFile(null);
      return;
    }
    if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) {
      toast({
        variant: 'destructive',
        title: 'Formato inválido',
        description: 'La foto debe ser JPG, PNG o WEBP.',
      });
      return;
    }
    setImageFile(file);
  }

  function validate() {
    const required = ['marca', 'modelo', 'año', 'precio', 'kilometraje'];
    for (const key of required) {
      const value = form[key];
      if (value === '' || value === null || value === undefined) {
        toast({
          variant: 'destructive',
          title: 'Campo obligatorio',
          description: `El campo "${key}" no puede estar vacío.`,
        });
        return false;
      }
    }
    if (!isEditMode && !imageFile) {
      toast({
        variant: 'destructive',
        title: 'Foto obligatoria',
        description: 'Al crear un auto nuevo necesitás subir al menos una foto.',
      });
      return false;
    }
    return true;
  }

  async function uploadInitialPhoto(slug) {
    const ext = imageFile.name.split('.').pop();
    const fileName = `${slug}-${Date.now()}.${sanitizeFileName(ext)}`;
    const { error: uploadError } = await supabase.storage
      .from(STORAGE_BUCKET)
      .upload(fileName, imageFile, { cacheControl: '3600', upsert: false });
    if (uploadError) throw new Error(`Error al subir foto: ${uploadError.message}`);
    const { data: { publicUrl } } = supabase.storage
      .from(STORAGE_BUCKET)
      .getPublicUrl(fileName);
    return publicUrl;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validate() || !supabase) return;
    setSubmitting(true);

    try {
      const marca = form.marca.trim();
      const modelo = form.modelo.trim();
      const año = Number(form['año']);
      const slug = generateCarSlug(marca, modelo, año);

      const basePayload = {
        marca,
        modelo,
        'año': año,
        precio: Number(form.precio),
        kilometraje: Number(form.kilometraje),
        color: form.color.trim() || null,
        'transmisión': form['transmisión'],
        cilindros: form.cilindros.trim() || null,
        'garantía': form['garantía'].trim() || null,
        propietarios: form.propietarios.trim() || null,
        origen: form.origen.trim() || null,
        destacado: Boolean(form.destacado),
        slug,
      };

      if (isEditMode) {
        const { error: updateError } = await supabase
          .from('fotos_de_autos')
          .update(basePayload)
          .eq('id', selectedCarId);
        if (updateError) throw updateError;
        toast({
          title: '✅ Auto actualizado',
          description: `${marca} ${modelo} ${año} guardado correctamente.`,
        });
      } else {
        const publicUrl = await uploadInitialPhoto(slug);
        const insertPayload = {
          ...basePayload,
          foto_url: publicUrl,
          fecha_alta: new Date().toISOString(),
        };
        const { data: inserted, error: insertError } = await supabase
          .from('fotos_de_autos')
          .insert(insertPayload)
          .select()
          .single();
        if (insertError) throw insertError;
        toast({
          title: '🚗 Auto creado',
          description: `${marca} ${modelo} ${año} añadido al inventario.`,
        });
        await fetchCars();
        setSelectedCarId(inserted.id);
        return;
      }

      await fetchCars();
    } catch (error) {
      console.error(error);
      toast({
        variant: 'destructive',
        title: 'Error al guardar',
        description: error.message || 'Revisa la consola para más detalles.',
      });
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDelete() {
    if (!selectedCar || !supabase) return;
    setSubmitting(true);
    try {
      const { error } = await supabase
        .from('fotos_de_autos')
        .delete()
        .eq('id', selectedCarId);
      if (error) throw error;
      toast({
        title: '🗑️ Auto eliminado',
        description: `${selectedCar.marca} ${selectedCar.modelo} ${selectedCar['año']} borrado del inventario.`,
      });
      await fetchCars();
      setSelectedCarId('new');
      setDeleteConfirmText('');
    } catch (error) {
      console.error(error);
      toast({
        variant: 'destructive',
        title: 'Error al eliminar',
        description: error.message,
      });
    } finally {
      setSubmitting(false);
    }
  }

  const deleteConfirmRequired = selectedCar
    ? `${selectedCar.marca.trim()} ${selectedCar.modelo.trim()}`
    : '';

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
        <label htmlFor="car-mode-selector" className="block text-lg font-bold text-gray-900 mb-3">
          ¿Qué quieres hacer?
        </label>
        <select
          id="car-mode-selector"
          value={selectedCarId}
          onChange={(e) => setSelectedCarId(e.target.value)}
          disabled={loadingCars || submitting}
          className="w-full px-4 py-3 bg-slate-900 text-white rounded-xl border-2 border-slate-700 hover:border-slate-500 font-semibold cursor-pointer"
        >
          <option value="new">➕ Crear auto nuevo</option>
          <optgroup label="Editar auto existente">
            {cars.map((car) => (
              <option key={car.id} value={car.id}>
                {car.marca} {car.modelo} ({car['año']})
                {car.color ? ` • ${car.color}` : ''}
              </option>
            ))}
          </optgroup>
        </select>
      </div>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 space-y-6">
        <div className="flex items-center gap-2 border-b border-gray-200 pb-4">
          {isEditMode ? (
            <>
              <Car className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-bold text-gray-900">
                Editando: {selectedCar?.marca} {selectedCar?.modelo} {selectedCar?.['año']}
              </h3>
            </>
          ) : (
            <>
              <Plus className="w-6 h-6 text-green-600" />
              <h3 className="text-xl font-bold text-gray-900">Nuevo auto</h3>
            </>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Field label="Marca *" name="marca" value={form.marca} onChange={handleChange} placeholder="Chevrolet" required />
          <Field label="Modelo *" name="modelo" value={form.modelo} onChange={handleChange} placeholder="Beat LTZ" required />
          <Field label="Año *" name="año" type="number" value={form['año']} onChange={handleChange} min="1990" max={CURRENT_YEAR + 1} required />
          <Field label="Precio MXN *" name="precio" type="number" value={form.precio} onChange={handleChange} placeholder="155000" min="0" required />
          <Field label="Kilometraje *" name="kilometraje" type="number" value={form.kilometraje} onChange={handleChange} placeholder="50000" min="0" required />
          <Field label="Color" name="color" value={form.color} onChange={handleChange} placeholder="Rojo" />

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Transmisión</label>
            <select
              name="transmisión"
              value={form['transmisión']}
              onChange={handleChange}
              className="w-full px-3 py-2 !bg-white !text-gray-900 border border-gray-300 rounded-lg placeholder:!text-gray-400 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none"
            >
              <option value="Automática">Automática</option>
              <option value="Manual">Manual</option>
            </select>
          </div>

          <Field label="Cilindros" name="cilindros" value={form.cilindros} onChange={handleChange} placeholder="4 Cil 1.6 L" />
          <Field label="Garantía" name="garantía" value={form['garantía']} onChange={handleChange} placeholder="Garantía de 12 meses" />
          <Field label="Propietarios" name="propietarios" value={form.propietarios} onChange={handleChange} />
          <Field label="Origen" name="origen" value={form.origen} onChange={handleChange} />

          <div className="md:col-span-2 flex items-center gap-2 pt-2">
            <input
              type="checkbox"
              id="destacado"
              name="destacado"
              checked={form.destacado}
              onChange={handleChange}
              className="w-5 h-5 text-brand-blue rounded focus:ring-brand-blue"
            />
            <label htmlFor="destacado" className="text-sm font-medium text-gray-700">
              Destacado en home (aparece en la sección "Autos destacados")
            </label>
          </div>

          {!isEditMode && (
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Foto inicial * (JPG, PNG o WEBP)
              </label>
              <input
                type="file"
                accept=".jpg,.jpeg,.png,.webp"
                onChange={handleFileChange}
                className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-brand-blue file:text-white hover:file:bg-blue-900 cursor-pointer"
              />
              {imageFile && (
                <p className="mt-1 text-xs text-gray-500">
                  Seleccionado: {imageFile.name} ({Math.round(imageFile.size / 1024)} KB)
                </p>
              )}
              <p className="mt-1 text-xs text-gray-400">
                Podrás añadir más fotos después desde el tab "Gestor de Fotos".
              </p>
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
          <Button
            type="submit"
            disabled={submitting || loadingCars}
            className="bg-brand-blue hover:bg-blue-900 text-white flex-1"
          >
            {submitting ? (
              <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Guardando...</>
            ) : isEditMode ? (
              <><Save className="w-4 h-4 mr-2" /> Guardar cambios</>
            ) : (
              <><Plus className="w-4 h-4 mr-2" /> Crear auto</>
            )}
          </Button>

          {isEditMode && (
            <AlertDialog onOpenChange={() => setDeleteConfirmText('')}>
              <AlertDialogTrigger asChild>
                <Button
                  type="button"
                  variant="destructive"
                  disabled={submitting}
                  className="bg-red-600 hover:bg-red-700 text-white"
                >
                  <Trash2 className="w-4 h-4 mr-2" /> Eliminar auto
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-600" /> Eliminar auto del inventario
                  </AlertDialogTitle>
                  <AlertDialogDescription asChild>
                    <div>
                      Esta acción <strong>no se puede deshacer</strong>. El auto{' '}
                      <strong>{deleteConfirmRequired}</strong> se borrará de la base de datos.
                      Las fotos ya subidas quedan en el storage (huérfanas, ocupan espacio pero
                      no son visibles).
                      <div className="mt-3">
                        Para confirmar, escribe exactamente: <code className="bg-gray-100 px-1 py-0.5 rounded">{deleteConfirmRequired}</code>
                      </div>
                      <input
                        type="text"
                        value={deleteConfirmText}
                        onChange={(e) => setDeleteConfirmText(e.target.value)}
                        placeholder={deleteConfirmRequired}
                        className="mt-2 w-full px-3 py-2 !bg-white !text-gray-900 border border-gray-300 rounded-lg placeholder:!text-gray-400"
                      />
                    </div>
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancelar</AlertDialogCancel>
                  <AlertDialogAction
                    disabled={deleteConfirmText.trim() !== deleteConfirmRequired}
                    onClick={handleDelete}
                    className="bg-red-600 hover:bg-red-700 text-white"
                  >
                    Eliminar definitivamente
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          )}
        </div>
      </form>
    </div>
  );
}

function Field({ label, name, type = 'text', value, onChange, placeholder, required, min, max }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        min={min}
        max={max}
        className="w-full px-3 py-2 !bg-white !text-gray-900 border border-gray-300 rounded-lg placeholder:!text-gray-400 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none"
      />
    </div>
  );
}
