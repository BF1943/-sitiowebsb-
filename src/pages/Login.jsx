import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navigate, useLocation } from 'react-router-dom';
import { Loader2, Mail, ShieldCheck } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { useAuth, ADMIN_EMAIL } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

export default function Login() {
  const { user, loading: authLoading } = useAuth();
  const { toast } = useToast();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="w-10 h-10 animate-spin text-brand-blue" />
      </div>
    );
  }

  if (user) {
    const from = location.state?.from?.pathname || '/admin';
    return <Navigate to={from} replace />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const normalized = email.trim().toLowerCase();

    if (normalized !== ADMIN_EMAIL) {
      toast({
        variant: 'destructive',
        title: 'Acceso denegado',
        description: 'Este email no tiene permisos de administrador.',
      });
      return;
    }

    setSending(true);
    const { error } = await supabase.auth.signInWithOtp({
      email: ADMIN_EMAIL,
      options: {
        emailRedirectTo: `${window.location.origin}/admin`,
      },
    });
    setSending(false);

    if (error) {
      toast({
        variant: 'destructive',
        title: 'No se pudo enviar el link',
        description: error.message,
      });
      return;
    }

    setSent(true);
  };

  return (
    <>
      <Helmet>
        <title>Acceso administrador | Seminuevos Baja</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-brand-blue p-2 rounded-lg">
              <ShieldCheck className="w-8 h-8 text-amber-500" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Acceso administrador</h1>
              <p className="text-sm text-gray-500">Panel de gestión de inventario</p>
            </div>
          </div>

          {sent ? (
            <div className="text-center space-y-4 py-6">
              <Mail className="w-14 h-14 text-brand-blue mx-auto" />
              <p className="text-gray-700">
                Te enviamos un link de acceso a <strong>{email}</strong>.
              </p>
              <p className="text-sm text-gray-500">
                Ábrelo en este mismo navegador. El link expira en 1 hora.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Correo electrónico
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu-email@example.com"
                  required
                  autoFocus
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none"
                />
              </div>
              <Button type="submit" disabled={sending} className="w-full bg-brand-blue hover:bg-blue-800 text-white">
                {sending ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Enviando...
                  </>
                ) : (
                  <>
                    <Mail className="w-4 h-4 mr-2" /> Enviar link de acceso
                  </>
                )}
              </Button>
              <p className="text-xs text-gray-400 text-center">
                Solo el email autorizado puede recibir el link.
              </p>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
