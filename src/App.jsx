import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from './components/ui/toaster';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import ScrollToTop from './components/ScrollToTop';
import ErrorBoundary from './components/ErrorBoundary';
import { AuthProvider } from '../contexts/SupabaseAuthContext.jsx';
import { Loader2 } from 'lucide-react';

// Eager: Home es el entry point del LCP. Todo lo demás se carga bajo demanda.
import Home from './pages/Home.jsx';

// Lazy: rutas prerenderizadas pero no críticas para el primer paint del home.
// El SSR usa AppServer.jsx (imports eager) para que el HTML prerenderizado
// quede completo. Este App.jsx sólo se ejecuta en el cliente.
const Inventory = React.lazy(() => import('./pages/Inventory.jsx'));
const SellCar = React.lazy(() => import('./pages/SellCar.jsx'));
const ConsignCar = React.lazy(() => import('./pages/ConsignCar.jsx'));
const ConsignaDesdeTijuana = React.lazy(() => import('./pages/ConsignaDesdeTijuana.jsx'));
const Financing = React.lazy(() => import('./pages/Financing.jsx'));
const EarnMoney = React.lazy(() => import('./pages/EarnMoney.jsx'));
const Contact = React.lazy(() => import('./pages/Contact.jsx'));
const AboutUs = React.lazy(() => import('./pages/AboutUs.jsx'));
const Blog = React.lazy(() => import('./pages/Blog.jsx'));
const Terms = React.lazy(() => import('./pages/Terms.jsx'));
const CarDetailPage = React.lazy(() => import('./pages/CarDetailPage.jsx'));

const BlogPost = React.lazy(() => import('./pages/blog/MejoresSeminuevos2025.jsx'));
const GuiaSeminuevosEnsenada = React.lazy(() => import('./pages/blog/GuiaSeminuevosEnsenada.jsx'));
const ComprarSinEstafa = React.lazy(() => import('./pages/blog/ComprarSinEstafa.jsx'));
const AutosChocolateVsNacionales = React.lazy(() => import('./pages/blog/AutosChocolateVsNacionales.jsx'));
const RutaDelVinoValleDeGuadalupe = React.lazy(() => import('./pages/blog/RutaDelVinoValleDeGuadalupe.jsx'));
const AutosPorDecretoSeguro = React.lazy(() => import('./pages/blog/AutosPorDecretoSeguro.jsx'));
const YardasCarrosEnsenada = React.lazy(() => import('./pages/blog/YardasCarrosEnsenada.jsx'));
const VentaCarrosEnsenadaBlog = React.lazy(() => import('./pages/blog/VentaCarrosEnsenadaBlog.jsx'));
const SeminuevosArticle = React.lazy(() => import('./pages/blog/SeminuevosArticle.jsx'));
const VenderAutoFinanciado = React.lazy(() => import('./pages/blog/VenderAutoFinanciado.jsx'));
const ConsignacionAutosSegura = React.lazy(() => import('./pages/blog/ConsignacionAutosSegura.jsx'));

const Login = React.lazy(() => import('./pages/Login.jsx'));
const AdminRoute = React.lazy(async () => {
  const [{ default: RequireAuth }, { default: AdminPage }] = await Promise.all([
    import('./components/RequireAuth.jsx'),
    import('./pages/AdminPage.jsx'),
  ]);

  return {
    default: function LazyAdminRoute() {
      return (
        <RequireAuth requireAdmin>
          <Layout>
            <AdminPage />
          </Layout>
        </RequireAuth>
      );
    },
  };
});

const LoadingFallback = () => (
  <div className="flex min-h-screen items-center justify-center bg-brand-blue">
    <Loader2 className="h-12 w-12 animate-spin text-amber-500" />
  </div>
);

function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <WhatsAppFloat />
      <Toaster />
    </>
  );
}

function App() {
  return (
    <>
      <ScrollToTop />

      <AuthProvider>
        <div className="min-h-screen bg-brand-blue">
          <ErrorBoundary>
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
                <Route path="/" element={<Layout><Home /></Layout>} />
                <Route path="/inventario" element={<Layout><Inventory /></Layout>} />
                <Route path="/vender" element={<Layout><SellCar /></Layout>} />
                <Route path="/consigna" element={<Layout><ConsignCar /></Layout>} />
                <Route path="/consigna-desde-tijuana" element={<Layout><ConsignaDesdeTijuana /></Layout>} />
                <Route path="/financiamiento" element={<Layout><Financing /></Layout>} />
                <Route path="/gana-dinero" element={<Layout><EarnMoney /></Layout>} />
                <Route path="/quienes-somos" element={<Layout><AboutUs /></Layout>} />
                <Route path="/blog" element={<Layout><Blog /></Layout>} />
                <Route path="/contacto" element={<Layout><Contact /></Layout>} />
                <Route path="/terminos" element={<Layout><Terms /></Layout>} />

                <Route
                  path="/auto/:slug"
                  element={
                    <Layout>
                      <CarDetailPage />
                    </Layout>
                  }
                />

                <Route path="/login" element={<Login />} />

                <Route
                  path="/admin"
                  element={<AdminRoute />}
                />

                <Route
                  path="/blog/mejores-seminuevos-tijuana-ensenada-2025"
                  element={<Layout><BlogPost /></Layout>}
                />
                <Route
                  path="/blog/guia-seminuevos-ensenada"
                  element={<Layout><GuiaSeminuevosEnsenada /></Layout>}
                />
                <Route
                  path="/blog/comprar-auto-seminuevo-sin-ser-estafado"
                  element={<Layout><ComprarSinEstafa /></Layout>}
                />
                <Route
                  path="/blog/autos-chocolate-vs-nacionales"
                  element={<Layout><AutosChocolateVsNacionales /></Layout>}
                />
                <Route
                  path="/blog/ruta-del-vino-valle-de-guadalupe-auto-ideal"
                  element={<Layout><RutaDelVinoValleDeGuadalupe /></Layout>}
                />
                <Route
                  path="/blog/autos-por-decreto-seguro-punto-ciego"
                  element={<Layout><AutosPorDecretoSeguro /></Layout>}
                />
                <Route
                  path="/blog/yardas-carros-ensenada"
                  element={<Layout><YardasCarrosEnsenada /></Layout>}
                />
                <Route
                  path="/blog/venta-carros-ensenada"
                  element={<Layout><VentaCarrosEnsenadaBlog /></Layout>}
                />
                <Route
                  path="/blog/seminuevos"
                  element={<Layout><SeminuevosArticle /></Layout>}
                />
                <Route
                  path="/blog/vender-auto-financiado"
                  element={<Layout><VenderAutoFinanciado /></Layout>}
                />
                <Route
                  path="/blog/consignacion-autos-segura"
                  element={<Layout><ConsignacionAutosSegura /></Layout>}
                />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </div>
      </AuthProvider>
    </>
  );
}

export default App;
