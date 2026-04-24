import React, { useState } from 'react';
import { Upload, Loader2, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { getImageUrl, FALLBACK_IMAGE } from '@/lib/getImageUrl';

export default function PhotoUploader({ car, supabase, onUpdate, onRefresh }) {
  const [files, setFiles] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const validFiles = selectedFiles.filter(file => 
      file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/webp'
    );

    setFiles(validFiles);

    const newPreviews = validFiles.map(file => URL.createObjectURL(file));
    setPreviews(newPreviews);
  };

  const removeFile = (index) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);

    const newPreviews = [...previews];
    URL.revokeObjectURL(newPreviews[index]);
    newPreviews.splice(index, 1);
    setPreviews(newPreviews);
  };

  const handleUpload = async () => {
    if (files.length === 0) return;
    
    setIsUploading(true);
    try {
      const uploadedUrls = [];

      for (const file of files) {
        const fileExt = file.name.split('.').pop();
        const fileName = `inventario/${car.id}-${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
        
        const { error: uploadError } = await supabase.storage
          .from('autos-inventario')
          .upload(fileName, file, { cacheControl: '3600', upsert: false });

        if (uploadError) {
          console.error('Storage Upload Error:', uploadError);
          throw new Error(`Error al subir imagen a Storage: ${uploadError.message}`);
        }

        const { data: { publicUrl } } = supabase.storage
          .from('autos-inventario')
          .getPublicUrl(fileName);

        const validatedUrl = await getImageUrl(publicUrl, supabase);
        
        if (validatedUrl !== FALLBACK_IMAGE) {
          uploadedUrls.push(validatedUrl);
        } else {
          console.warn(`URL validation failed for newly uploaded file: ${publicUrl}, saving unvalidated URL anyway.`);
          uploadedUrls.push(publicUrl);
        }
      }

      const currentUrls = car.foto_url ? car.foto_url.split(',').map(u => u.trim()).filter(Boolean) : [];
      const newUrlsString = [...currentUrls, ...uploadedUrls].join(',');

      console.log('Updating DB for car ID:', car.id, 'with URLs:', newUrlsString);

      const { error: dbError } = await supabase
        .from('fotos_de_autos')
        .update({ foto_url: newUrlsString })
        .eq('id', car.id);

      if (dbError) {
        console.error('Database Update Error:', dbError);
        throw new Error(`Error al actualizar base de datos: ${dbError.message}`);
      }

      toast({
        title: '¡Subida exitosa!',
        description: `Se subieron y validaron ${files.length} fotos correctamente.`,
      });

      setFiles([]);
      setPreviews([]);
      
      if (onUpdate) onUpdate(newUrlsString);
      if (onRefresh) await onRefresh(car.id);
      
      const fileInput = document.getElementById('photo-upload-input');
      if (fileInput) fileInput.value = '';

    } catch (error) {
      console.error('Upload process failed:', error);
      toast({
        variant: 'destructive',
        title: 'Error de operación',
        description: error.message || 'No se pudieron subir las fotos. Revisa la consola para más detalles.',
      });
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Subir Nuevas Fotos</h3>
      
      <div className="space-y-4">
        <div className="flex items-center justify-center w-full">
          <label htmlFor="photo-upload-input" className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <Upload className="w-8 h-8 mb-3 text-gray-400" />
              <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Haz clic para subir</span> o arrastra y suelta</p>
              <p className="text-xs text-gray-500">PNG, JPG, WEBP (Múltiples archivos permitidos)</p>
            </div>
            <input 
              id="photo-upload-input" 
              type="file" 
              className="hidden" 
              multiple 
              accept=".jpg,.jpeg,.png,.webp"
              onChange={handleFileChange}
              disabled={isUploading}
            />
          </label>
        </div>

        {previews.length > 0 && (
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-gray-700">Vista Previa ({previews.length})</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {previews.map((preview, idx) => (
                <div key={idx} className="relative aspect-square rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                  <img src={preview} alt={`Preview ${idx}`} className="w-full h-full object-cover" />
                  <button
                    onClick={() => removeFile(idx)}
                    className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                    disabled={isUploading}
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
            
            <div className="flex justify-end pt-2 border-t">
              <Button onClick={handleUpload} disabled={isUploading || files.length === 0} className="bg-brand-blue hover:bg-blue-800 text-white">
                {isUploading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Procesando...
                  </>
                ) : (
                  <>
                    <Upload className="w-4 h-4 mr-2" /> Subir y Guardar
                  </>
                )}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}