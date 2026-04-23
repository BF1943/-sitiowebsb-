import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SiteContext } from '../context/SiteContext.jsx';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
function FooterComponent() {
  const {
    siteName
  } = useContext(SiteContext);
  const logoUrl = "/logo.png";
  return <footer className="bg-gray-900/50 border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="col-span-1 md:col-span-2 flex flex-col items-center md:items-start text-center md:text-left">
            <Link to="/" className="flex items-center justify-center md:justify-start space-x-3 mb-4 w-full">
               <img src={logoUrl} alt={`${siteName} logo`} className="h-10 w-auto" /* Added w-auto to ensure natural width based on h-10 */ loading="lazy" width="160" /* Explicit width for CLS */ height="40" /* Explicit height for CLS */ />
               <span className="text-white font-bold text-xl">{siteName}</span>
            </Link>
            <p className="text-gray-300 mb-4 font-bold max-w-md">Agencia líder en venta de autos seminuevos nacionales en Ensenada. Garantía mecánica de 12 meses, crédito automotriz y consignación segura en Baja California.</p>
            <div className="space-y-2 text-left">
              <div className="flex items-center space-x-2 text-gray-300 font-bold">
                <MapPin className="h-4 w-4 text-amber-500 flex-shrink-0" />
                <span>Calle Delante #200, Fracc. Costa Azul, Ensenada, B.C.</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300 font-bold">
                <Phone className="h-4 w-4 text-amber-500 flex-shrink-0" />
                <span>+52 646 977 8808</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300 font-bold">
                <Mail className="h-4 w-4 text-amber-500 flex-shrink-0" />
                <span>info@seminuevosbaja.com.mx</span>
              </div>
            </div>
          </div>

          <div className="col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
            <span className="text-lg font-semibold text-white mb-4 block">Enlaces Rápidos</span>
            <ul className="space-y-2">
              <li><Link to="/inventario" className="text-gray-300 hover:text-amber-500 transition-colors font-bold">Inventario</Link></li>
              <li><Link to="/vender" className="text-gray-300 hover:text-amber-500 transition-colors font-bold">Vender mi Auto</Link></li>
              <li><Link to="/consigna" className="text-gray-300 hover:text-amber-500 transition-colors font-bold">Consigna tu Auto</Link></li>
              <li><Link to="/financiamiento" className="text-gray-300 hover:text-amber-500 transition-colors font-bold">Financiamiento</Link></li>
              <li><Link to="/quienes-somos" className="text-gray-300 hover:text-amber-500 transition-colors font-bold">Quiénes Somos</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-amber-500 transition-colors font-bold">Blog</Link></li>
              <li><Link to="/gana-dinero" className="text-gray-300 hover:text-amber-500 transition-colors font-bold">Gana Dinero</Link></li>
              <li><Link to="/contacto" className="text-gray-300 hover:text-amber-500 transition-colors font-bold">Contacto</Link></li>
              <li><Link to="/terminos" className="text-gray-300 hover:text-amber-500 transition-colors font-bold">Términos y Condiciones</Link></li>
            </ul>
          </div>

          <div className="col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
            <span className="text-lg font-semibold text-white mb-4 block">Horarios</span>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-amber-500 flex-shrink-0" />
                <span className="font-bold">Lun - Vie: 9:00 - 17:00</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-amber-500 flex-shrink-0" />
                <span className="font-bold">Sábado: 10:00 - 15:00</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-amber-500 flex-shrink-0" />
                <span className="font-bold">Domingo: Cerrado</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-300 font-bold">
            © {new Date().getFullYear()} {siteName}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>;
}
const Footer = React.memo(FooterComponent);
export default Footer;