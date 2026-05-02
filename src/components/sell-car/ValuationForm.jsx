import React, { useState, useRef } from 'react';
import { Button } from '../ui/button';
import { Upload, Loader2, X } from 'lucide-react';
import { useToast } from '../ui/use-toast';
import { supabase } from '../../lib/customSupabaseClient';

const ValuationForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', brand: '', model: '', year: '', mileage: '', condition: '', description: ''
  });
  const [files, setFiles] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFiles(prev => [...prev, ...Array.from(e.target.files)]);
  };

  const removeFile = (index) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const photoUrls = [];
      if (files.length > 0) {
        for (const file of files) {
          const fileName = `${Date.now()}-${file.name}`;
          const { data: uploadData, error: uploadError } = await supabase.storage
            .from('fotos-interesados-venta')
            .upload(fileName, file);

          if (uploadError) throw uploadError;

          const { data: urlData } = supabase.storage
            .from('fotos-interesados-venta')
            .getPublicUrl(fileName);
          
          photoUrls.push(urlData.publicUrl);
        }
      }

      const leadData = {
        nombre: formData.name,
        telefono: formData.phone,
        email: formData.email,
        marca: formData.brand,
        modelo: formData.model,
        año: formData.year,
        kilometraje: formData.mileage,
        estado_gener: formData.condition,
        descripcion_a: formData.description,
        fotos_url: photoUrls.length > 0 ? JSON.stringify(photoUrls) : null,
      };

      const { error: insertError } = await supabase
        .from('tabla_de_interesados_en_vender_su_auto')
        .insert([leadData]);

      if (insertError) throw insertError;

      toast({
        title: "¡Éxito!",
        description: "Gracias por tu solicitud, te contactaremos pronto.",
        className: 'bg-brand-green-success text-white',
      });

      supabase.functions.invoke('send-sell-car-lead-email', {
        body: leadData,
      }).catch(error => {
        console.error('Error sending email notification:', error);
      });

      setFormData({ name: '', phone: '', email: '', brand: '', model: '', year: '', mileage: '', condition: '', description: '' });
      setFiles([]);

    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Hubo un problema al enviar tu solicitud, inténtalo de nuevo.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="valuation-name" className="block text-sm font-medium text-brand-gray-title mb-2">Nombre completo *</label>
          <input id="valuation-name" type="text" name="name" value={formData.name} onChange={handleInputChange} required autoComplete="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white text-brand-gray-title" />
        </div>
        <div>
          <label htmlFor="valuation-phone" className="block text-sm font-medium text-brand-gray-title mb-2">Teléfono *</label>
          <input id="valuation-phone" type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required autoComplete="tel-national" inputMode="tel" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white text-brand-gray-title" />
        </div>
      </div>
      <div>
        <label htmlFor="valuation-email" className="block text-sm font-medium text-brand-gray-title mb-2">Email</label>
        <input id="valuation-email" type="email" name="email" value={formData.email} onChange={handleInputChange} autoComplete="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white text-brand-gray-title" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label htmlFor="valuation-brand" className="block text-sm font-medium text-brand-gray-title mb-2">Marca *</label>
          <input id="valuation-brand" type="text" name="brand" value={formData.brand} onChange={handleInputChange} required autoComplete="off" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white text-brand-gray-title" />
        </div>
        <div>
          <label htmlFor="valuation-model" className="block text-sm font-medium text-brand-gray-title mb-2">Modelo *</label>
          <input id="valuation-model" type="text" name="model" value={formData.model} onChange={handleInputChange} required autoComplete="off" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white text-brand-gray-title" />
        </div>
        <div>
          <label htmlFor="valuation-year" className="block text-sm font-medium text-brand-gray-title mb-2">Año *</label>
          <input id="valuation-year" type="number" name="year" value={formData.year} onChange={handleInputChange} required min="1990" max={new Date().getFullYear() + 1} inputMode="numeric" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white text-brand-gray-title" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="valuation-mileage" className="block text-sm font-medium text-brand-gray-title mb-2">Kilometraje *</label>
          <input id="valuation-mileage" type="number" name="mileage" value={formData.mileage} onChange={handleInputChange} required min="0" inputMode="numeric" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white text-brand-gray-title" />
        </div>
        <div>
          <label htmlFor="valuation-condition" className="block text-sm font-medium text-brand-gray-title mb-2">Estado general *</label>
          <select id="valuation-condition" name="condition" value={formData.condition} onChange={handleInputChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white text-brand-gray-title">
            <option value="">Seleccionar</option>
            <option value="excelente">Excelente</option>
            <option value="bueno">Bueno</option>
            <option value="regular">Regular</option>
            <option value="necesita_reparacion">Necesita reparación</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="valuation-description" className="block text-sm font-medium text-brand-gray-title mb-2">Descripción adicional</label>
        <textarea id="valuation-description" name="description" value={formData.description} onChange={handleInputChange} rows={4} placeholder="Cuéntanos más detalles sobre tu auto..." className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white text-brand-gray-title" />
      </div>
      <div>
        <label htmlFor="valuation-photos" className="block text-sm font-medium text-brand-gray-title mb-2">Fotos del vehículo</label>
        <div
          onClick={() => fileInputRef.current.click()}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              fileInputRef.current.click();
            }
          }}
          role="button"
          tabIndex={0}
          aria-controls="valuation-photos"
          className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:bg-gray-100 transition"
        >
          <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 mb-2">Arrastra y suelta fotos o haz clic para seleccionar</p>
          <p className="text-sm text-gray-500">Puedes subir varias imágenes</p>
          <input id="valuation-photos" type="file" ref={fileInputRef} onChange={handleFileChange} multiple accept="image/*" className="sr-only" />
        </div>
        {files.length > 0 && (
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {files.map((file, index) => (
              <div key={index} className="relative">
                <img alt={`Vista previa ${index + 1}`} className="w-full h-24 object-cover rounded-md" src={URL.createObjectURL(file)} />
                <button type="button" onClick={() => removeFile(index)} className="absolute top-1 right-1 bg-red-600 text-white rounded-full p-1 hover:bg-red-700">
                  <X className="h-3 w-3" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      <Button type="submit" disabled={isSubmitting} className="w-full py-3 text-lg">
        {isSubmitting ? (<><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Enviando...</>) : ('Enviar solicitud de avalúo')}
      </Button>
    </form>
  );
};

export default ValuationForm;
