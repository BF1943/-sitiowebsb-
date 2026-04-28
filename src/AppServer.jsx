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

// Eager imports for all static / prerendered routes
import Home from './pages/Home.jsx';
import Inventory from './pages/Inventory.jsx';
import SellCar from './pages/SellCar.jsx';
import ConsignCar from './pages/ConsignCar.jsx';
import ConsignaDesdeTijuana from './pages/ConsignaDesdeTijuana.jsx';
import Financing from './pages/Financing.jsx';
import EarnMoney from './pages/EarnMoney.jsx';
import Contact from './pages/Contact.jsx';
import AboutUs from './pages/AboutUs.jsx';
import Blog from './pages/Blog.jsx';
import Terms from './pages/Terms.jsx';
import CarDetailPage from './pages/CarDetailPage.jsx';

import BlogPost from './pages/blog/MejoresSeminuevos2025.jsx';
import GuiaSeminuevosEnsenada from './pages/blog/GuiaSeminuevosEnsenada.jsx';
import ComprarSinEstafa from './pages/blog/ComprarSinEstafa.jsx';
import AutosChocolateVsNacionales from './pages/blog/AutosChocolateVsNacionales.jsx';
import RutaDelVinoValleDeGuadalupe from './pages/blog/RutaDelVinoValleDeGuadalupe.jsx';
import AutosPorDecretoSeguro from './pages/blog/AutosPorDecretoSeguro.jsx';
import YardasCarrosEnsenada from './pages/blog/YardasCarrosEnsenada.jsx';
import VentaCarrosEnsenadaBlog from './pages/blog/VentaCarrosEnsenadaBlog.jsx';
import SeminuevosArticle from './pages/blog/SeminuevosArticle.jsx';
import VenderAutoFinanciado from './pages/blog/VenderAutoFinanciado.jsx';
import ConsignacionAutosSegura from './pages/blog/ConsignacionAutosSegura.jsx';

// Keep only genuinely non-prerendered / backoffice routes lazy
const AdminPage = React.lazy(() => import('./pages/AdminPage.jsx'));
const Login = React.lazy(() => import('./pages/Login.jsx'));

import RequireAuth from './components/RequireAuth';

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

              <Route
                path="/login"
                element={
                  <Suspense fallback={<LoadingFallback />}>
                    <Login />
                  </Suspense>
                }
              />

              <Route
                path="/admin"
                element={
                  <RequireAuth requireAdmin>
                    <Layout>
                      <Suspense fallback={<LoadingFallback />}>
                        <AdminPage />
                      </Suspense>
                    </Layout>
                  </RequireAuth>
                }
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
          </ErrorBoundary>
        </div>
      </AuthProvider>
    </>
  );
}

export default App;