import React from 'react';
import Header from './Header';
import { DEFAULT_MENU_ITEMS } from './Header.constants';

/**
 * Ejemplos de uso del componente Header
 */

// Ejemplo básico
export const BasicHeader = () => <Header />;

// Ejemplo con logo personalizado
export const CustomLogoHeader = () => (
  <Header
    logo="/ruta/a/mi-logo.svg"
    logoAlt="Mi Empresa"
  />
);

// Ejemplo con menú personalizado
export const CustomMenuHeader = () => {
  const customMenu = [
    {
      label: 'Inicio',
      url: '/',
      subItems: [
        { label: 'Dashboard', url: '/dashboard' },
        { label: 'Perfil', url: '/perfil' }
      ]
    },
    {
      label: 'Productos',
      url: '/productos',
      subItems: [
        { label: 'Catálogo', url: '/productos/catalogo' },
        { label: 'Nuevos', url: '/productos/nuevos' }
      ]
    }
  ];

  return (
    <Header
      menuItems={customMenu}
      primaryButtonText="Contactar"
      primaryButtonUrl="/contacto"
    />
  );
};

// Ejemplo con estilos personalizados
export const StyledHeader = () => (
  <Header
    className="custom-header"
    style={{ 
      backgroundColor: '#2c3e50',
      color: 'white'
    }}
    primaryButtonText="Registrarse"
    primaryButtonUrl="/registro"
  />
);

// Ejemplo para e-commerce
export const EcommerceHeader = () => {
  const ecommerceMenu = [
    {
      label: 'Categorías',
      url: '/categorias',
      subItems: [
        { label: 'Electrónicos', url: '/categorias/electronicos' },
        { label: 'Ropa', url: '/categorias/ropa' },
        { label: 'Hogar', url: '/categorias/hogar' }
      ]
    },
    {
      label: 'Ofertas',
      url: '/ofertas'
    },
    {
      label: 'Mi Cuenta',
      url: '/cuenta',
      subItems: [
        { label: 'Mis Pedidos', url: '/cuenta/pedidos' },
        { label: 'Favoritos', url: '/cuenta/favoritos' },
        { label: 'Configuración', url: '/cuenta/config' }
      ]
    }
  ];

  return (
    <Header
      logo="/logo-ecommerce.svg"
      logoAlt="Mi Tienda"
      menuItems={ecommerceMenu}
      primaryButtonText="Carrito (3)"
      primaryButtonUrl="/carrito"
    />
  );
};

// Ejemplo para aplicación empresarial
export const EnterpriseHeader = () => {
  const enterpriseMenu = [
    {
      label: 'Dashboard',
      url: '/dashboard',
      subItems: [
        { label: 'Resumen', url: '/dashboard/resumen' },
        { label: 'Métricas', url: '/dashboard/metricas' },
        { label: 'Reportes', url: '/dashboard/reportes' }
      ]
    },
    {
      label: 'Usuarios',
      url: '/usuarios',
      subItems: [
        { label: 'Gestionar', url: '/usuarios/gestionar' },
        { label: 'Permisos', url: '/usuarios/permisos' },
        { label: 'Auditoría', url: '/usuarios/auditoria' }
      ]
    },
    {
      label: 'Configuración',
      url: '/configuracion',
      subItems: [
        { label: 'General', url: '/configuracion/general' },
        { label: 'Seguridad', url: '/configuracion/seguridad' },
        { label: 'Integraciones', url: '/configuracion/integraciones' }
      ]
    }
  ];

  return (
    <Header
      logo="/logo-empresa.svg"
      logoAlt="Mi Empresa"
      menuItems={enterpriseMenu}
      primaryButtonText="Cerrar Sesión"
      primaryButtonUrl="/logout"
    />
  );
};

export default Header;
