import React, { useState, useEffect, useContext } from 'react';
import { SiteContext } from '@/context/SiteContext';
import { Loader2, Car, ChevronDown } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import PhotoGallery from './PhotoGallery';
import PhotoUploader from './PhotoUploader';

export default function AdminPhotoManager() {
  const { supabase } = useContext(SiteContext);
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCarId, setSelectedCarId] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    fetchCars();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [supabase]);

  const fetchCars = async () => {
    if (!supabase) return;
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('fotos_de_autos')
        .select('*')
        .order('marca', { ascending: true });

      if (error) throw error;
      setCars(data || []);
    } catch (error) {
      console.error('Error fetching cars:', error);
      toast({
        variant: 'destructive',
        title: 'Error de carga',
        description: 'No se pudieron cargar los vehículos.',
      });
    } finally {
      setLoading(false);
    }
  };

  const refreshCarData = async (carId) => {
    if (!supabase || !carId) return;
    try {
      const { data, error } = await supabase
        .from('fotos_de_autos')
        .select('*')
        .eq('id', carId)
        .single();
        
      if (error) throw error;
      
      if (data) {
        setCars(prevCars => prevCars.map(c => c.id === carId ? data : c));
        toast({
          title: 'Datos sincronizados',
          description: 'La información del vehículo se ha actualizado desde la base de datos.',
        });
      }
    } catch (error) {
      console.error('Error refreshing car:', error);
    }
  };

  const handleUpdateCarFotos = (newFotosUrlString) => {
    setCars(prevCars => 
      prevCars.map(c => 
        c.id === selectedCarId ? { ...c, foto_url: newFotosUrlString } : c
      )
    );
  };

  const selectedCar = cars.find(c => c.id === selectedCarId);

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      
      <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 transition-all duration-300">
        <div className="flex items-center gap-2 mb-4">
          <Car className="w-6 h-6 text-blue-600" />
          <label htmlFor="car-selector" className="text-lg font-bold text-gray-900 tracking-tight">
            Seleccionar Vehículo
          </label>
        </div>
        
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
            {loading ? (
              <Loader2 className="h-5 w-5 text-blue-400 animate-spin" />
            ) : (
              <Car className={`h-5 w-5 transition-colors duration-200 ${selectedCarId ? 'text-blue-400' : 'text-gray-400'}`} />
            )}
          </div>
          
          <select
            id="car-selector"
            value={selectedCarId}
            onChange={(e) => setSelectedCarId(e.target.value)}
            disabled={loading}
            className={`
              appearance-none block w-full pl-12 pr-12 py-4 
              text-base font-semibold transition-all duration-300
              bg-slate-900 text-white rounded-xl border-2 shadow-md
              cursor-pointer outline-none
              ${selectedCarId ? 'border-blue-500 ring-2 ring-blue-500/20' : 'border-slate-700 hover:border-slate-500'}
              focus:ring-4 focus:ring-blue-400/30 focus:border-blue-500
              hover:bg-slate-800
              disabled:opacity-50 disabled:cursor-not-allowed
            `}
          >
            <option value="" className="bg-slate-900 text-gray-400">-- Elige un vehículo del inventario --</option>
            {cars.map(car => (
              <option 
                key={car.id} 
                value={car.id} 
                className="bg-slate-900 text-white py-2"
              >
                {car.marca} {car.modelo} ({car.año}) {car.color ? `• ${car.color}` : ''}
              </option>
            ))}
          </select>
          
          <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
            <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${selectedCarId ? 'text-blue-400' : 'text-gray-400'}`} />
          </div>
        </div>

        {selectedCar && (
          <div className="mt-4 flex items-center justify-between animate-in fade-in slide-in-from-left-2 duration-300">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
              <p className="text-sm font-medium text-slate-600">
                Editando: <span className="text-blue-600 font-bold">{selectedCar.marca} {selectedCar.modelo}</span>
              </p>
            </div>
            <button 
              onClick={() => refreshCarData(selectedCar.id)}
              className="text-xs text-blue-500 hover:text-blue-700 font-medium underline"
            >
              Refrescar datos
            </button>
          </div>
        )}
      </div>

      {selectedCar ? (
        <div className="space-y-6 animate-in fade-in zoom-in-95 duration-500">
          <PhotoUploader 
            car={selectedCar} 
            supabase={supabase} 
            onUpdate={handleUpdateCarFotos}
            onRefresh={refreshCarData}
          />
          <PhotoGallery 
            car={selectedCar} 
            supabase={supabase} 
            onUpdate={handleUpdateCarFotos}
            onRefresh={refreshCarData}
          />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 px-4 text-center border-2 border-dashed border-gray-200 rounded-2xl bg-gray-50/50">
          <div className="bg-white p-4 rounded-full shadow-sm mb-4">
            <Car className="w-12 h-12 text-gray-300" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Sin vehículo seleccionado</h3>
          <p className="text-gray-500 max-w-xs mx-auto">
            Por favor, selecciona un auto del menú superior para comenzar a gestionar sus fotografías.
          </p>
        </div>
      )}

    </div>
  );
}