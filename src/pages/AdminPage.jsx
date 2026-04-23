import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ShieldAlert, LogOut } from 'lucide-react';
import AdminPhotoManager from '@/components/admin/AdminPhotoManager';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';

export default function AdminPage() {
  const { user, signOut } = useAuth();

  return (
    <>
      <Helmet>
        <title>Panel de Administración | Seminuevos Baja</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-gray-50 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-8 border-b border-gray-200 pb-5 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="bg-brand-blue p-2 rounded-lg">
                <ShieldAlert className="w-8 h-8 text-amber-500" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Gestor de Fotos de Autos</h1>
                <p className="mt-1 text-sm text-gray-500">
                  Administra las galerías de imágenes del inventario de vehículos.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="hidden sm:inline text-sm text-gray-700 font-medium">{user?.email}</span>
              <Button
                size="sm"
                onClick={signOut}
                className="bg-brand-blue text-white border border-brand-blue hover:bg-blue-900 hover:text-white shadow-sm"
              >
                <LogOut className="w-4 h-4 mr-2" /> Cerrar sesión
              </Button>
            </div>
          </div>

          <AdminPhotoManager />

        </div>
      </div>
    </>
  );
}