import React, { useState, useContext, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { SiteContext } from '../context/SiteContext.jsx';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'Inventario', href: '/inventario/' },
  {
    name: 'Vende tu Auto',
    dropdown: [
      { name: 'Vender mi Auto', href: '/vender/' },
      { name: 'Consigna tu Auto', href: '/consigna/' },
    ]
  },
  { name: 'Financiamiento', href: '/financiamiento/' },
  { name: 'Quiénes Somos', href: '/quienes-somos/' },
  { name: 'Blog', href: '/blog/' },
  { name: 'Contacto', href: '/contacto/' },
];

const NavLink = ({ href, children, currentPath, onClick }) => (
  <Link
    to={href}
    onClick={onClick}
    className={`text-sm font-medium transition-colors hover:text-amber-500 ${currentPath === href ? 'text-amber-500' : 'text-gray-300'
      }`}
  >
    {children}
  </Link>
);

const MobileNavLink = ({ href, children, currentPath, onClick }) => (
  <Link
    to={href}
    onClick={onClick}
    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors hover:text-amber-500 hover:bg-white/10 ${currentPath === href ? 'text-amber-500 bg-white/5' : 'text-gray-300'
      }`}
  >
    {children}
  </Link>
);

function HeaderComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { siteName } = useContext(SiteContext);
  const logoUrl = "/logo.png";

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-brand-blue/80 border-b border-white/10 sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-3" onClick={closeMenu}>
              <img
                src={logoUrl}
                alt="Seminuevos Ensenada — Seminuevos Baja logo"
                className="h-14 w-auto"
                width="200"
                height="56"
              />
              <span className="text-white font-bold text-xl hidden sm:inline">{siteName}</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              item.dropdown ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger className="flex items-center text-sm font-medium transition-colors hover:text-amber-500 text-gray-300 focus:outline-none">
                    {item.name}
                    <ChevronDown className="h-4 w-4 ml-1" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-brand-blue border-white/10 text-gray-300">
                    {item.dropdown.map((subItem) => (
                      <DropdownMenuItem key={subItem.name} asChild>
                        <Link to={subItem.href} className="hover:bg-white/10 focus:bg-white/10">
                          {subItem.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <NavLink key={item.name} href={item.href} currentPath={location.pathname}>
                  {item.name}
                </NavLink>
              )
            ))}

          </div>

          <div className="hidden md:block">
            <Button asChild>
              <Link to="/vender/">Vender mi Auto</Link>
            </Button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Abrir menú principal</span>
              {isMenuOpen ? <X className="block h-6 w-6" aria-hidden="true" /> : <Menu className="block h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'calc(100vh - 5rem)' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-y-auto"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                item.dropdown ? (
                  <div key={item.name} className="px-3 py-2">
                    <p className="text-gray-400 font-medium">{item.name}</p>
                    <div className="pl-4 mt-1 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <MobileNavLink
                          key={subItem.name}
                          href={subItem.href}
                          currentPath={location.pathname}
                          onClick={closeMenu}
                        >
                          {subItem.name}
                        </MobileNavLink>
                      ))}
                    </div>
                  </div>
                ) : (
                  <MobileNavLink
                    key={item.name}
                    href={item.href}
                    currentPath={location.pathname}
                    onClick={closeMenu}
                  >
                    {item.name}
                  </MobileNavLink>
                )
              ))}
              <div className="pt-4 px-2">
                <Button asChild className="w-full">
                  <Link to="/vender/" onClick={closeMenu}>Vender mi Auto</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

const Header = React.memo(HeaderComponent);
export default Header;
