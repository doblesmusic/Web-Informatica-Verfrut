# Header Component

Un componente de header reutilizable y configurable para aplicaciones web empresariales.

## Características

- ✅ **Responsive** - Se adapta a diferentes tamaños de pantalla
- ✅ **Configurable** - Props para personalizar logo, menú y botones
- ✅ **Dropdowns** - Menús desplegables con hover
- ✅ **Accesible** - Atributos ARIA y navegación por teclado
- ✅ **Tema personalizable** - Variables SASS para colores y tipografías

## Instalación

```bash
# Copiar la carpeta Header a tu proyecto
cp -r src/components/Header/ ./tu-proyecto/src/components/

# Copiar los estilos SASS
cp src/styles/_variables.scss ./tu-proyecto/src/styles/
cp src/styles/_mixins.scss ./tu-proyecto/src/styles/
cp src/styles/_dropdown-override.scss ./tu-proyecto/src/styles/
```

## Uso Básico

```jsx
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      {/* Resto de tu aplicación */}
    </div>
  );
}
```

## Uso Avanzado

```jsx
import Header from './components/Header';
import { DEFAULT_MENU_ITEMS } from './components/Header/Header.constants';

function App() {
  const customMenuItems = [
    {
      label: 'Mi Menú',
      url: '/mi-menu',
      subItems: [
        { label: 'Opción 1', url: '/opcion-1' },
        { label: 'Opción 2', url: '/opcion-2' }
      ]
    }
  ];

  return (
    <Header
      logo="/ruta/a/mi-logo.svg"
      logoAlt="Mi Empresa"
      menuItems={customMenuItems}
      primaryButtonText="Contactar"
      primaryButtonUrl="/contacto"
    />
  );
}
```

## Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `logo` | `string` | Logo por defecto | URL del logo de la empresa |
| `logoAlt` | `string` | "Verfrut Logo" | Texto alternativo del logo |
| `menuItems` | `MenuItem[]` | `DEFAULT_MENU_ITEMS` | Array de elementos del menú |
| `primaryButtonText` | `string` | "Iniciar Sesión" | Texto del botón principal |
| `primaryButtonUrl` | `string` | "#" | URL del botón principal |
| `className` | `string` | - | Clases CSS adicionales |
| `style` | `object` | - | Estilos inline adicionales |

## Estructura de MenuItem

```javascript
{
  label: 'Nombre del Menú',
  url: '/ruta',
  subItems: [
    {
      label: 'Submenú 1',
      url: '/submenu-1',
      icon: 'icon-name',
      isDisabled: false
    }
  ],
  isActive: false
}
```

## Personalización de Estilos

### Variables SASS

```scss
// En _variables.scss
$primary-color: #184289;
$secondary-color: #000000;
$background-color: #EFF1F9;
$font-family-primary: 'Montserrat', sans-serif;
```

### Clases CSS

```scss
.th-header {
  // Estilos del header
}

.th-header .dropdown-menu {
  // Estilos del dropdown
}

.th-header .nav-link {
  // Estilos de los enlaces
}
```

## Dependencias

- React 18+
- Bootstrap 5.3+
- SASS

## Compatibilidad

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## Licencia

MIT License - Libre para uso comercial y personal.

## Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request
