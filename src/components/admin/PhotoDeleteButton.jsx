import React, { useState } from 'react';
import { X, Loader2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';

export default function PhotoDeleteButton({ url, car, supabase, onUpdate, onRefresh }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const { toast } = useToast();

  const handleDelete = async () => {
    if (!window.confirm('¿Estás seguro de que deseas eliminar esta foto?')) return;
    
    setIsDeleting(true);
    try {
      let filePath = '';
      
      try {
        const urlObj = new URL(url);
        const bucketPathStr = '/fotos-interesados-venta/';
        if (urlObj.pathname.includes(bucketPathStr)) {
          const pathParts = urlObj.pathname.split(bucketPathStr);
          filePath = pathParts[1];
        } else {
          filePath = url.split('/').pop();
        }
      } catch (e) {
        filePath = url.split('/').pop();
      }

      console.log('Attempting to delete from storage:', filePath);

      if (filePath) {
        const { error: storageError } = await supabase.storage
          .from('fotos-interesados-venta')
          .remove([filePath]);

        if (storageError) {
          console.error('Storage deletion error:', storageError);
          toast({
            variant: 'destructive',
            title: 'Advertencia de Storage',
            description: `No se pudo eliminar el archivo físico del servidor: ${storageError.message}. Intentando actualizar base de datos...`,
          });
        }
      }

      const currentUrls = car.foto_url ? car.foto_url.split(',').map(u => u.trim()) : [];
      const newUrls = currentUrls.filter(u => u !== url);
      const newUrlsString = newUrls.length > 0 ? newUrls.join(',') : null;

      console.log('Updating DB to remove photo URL for car ID:', car.id);

      const { error: dbError } = await supabase
        .from('fotos_de_autos')
        .update({ foto_url: newUrlsString })
        .eq('id', car.id);

      if (dbError) {
        console.error('Database Update Error on Delete:', dbError);
        throw new Error(`Error al actualizar base de datos: ${dbError.message}`);
      }

      toast({
        title: 'Foto eliminada',
        description: 'La foto se ha eliminado correctamente.',
      });
      
      if (onUpdate) onUpdate(newUrlsString);
      if (onRefresh) await onRefresh(car.id);
      
    } catch (error) {
      console.error('Delete process failed:', error);
      toast({
        variant: 'destructive',
        title: 'Error al eliminar',
        description: error.message || 'No se pudo completar la eliminación. Revisa la consola para más detalles.',
      });
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <Button
      variant="destructive"
      size="icon"
      className="absolute top-2 right-2 h-8 w-8 rounded-full transition-opacity opacity-0 group-hover:opacity-100"
      onClick={handleDelete}
      disabled={isDeleting}
      title="Eliminar foto"
    >
      {isDeleting ? <Loader2 className="h-4 w-4 animate-spin" /> : <X className="h-4 w-4" />}
    </Button>
  );
}