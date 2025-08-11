# SASS Configuration

## Estructura de archivos

```
src/styles/
├── main.scss          # Archivo principal que importa todo
├── _variables.scss    # Variables globales (colores, espaciado, etc.)
├── _mixins.scss      # Mixins reutilizables
└── README.md         # Esta documentación
```

## Cómo usar

### 1. Variables
```scss
// En cualquier archivo .scss
.my-class {
  background-color: $primary-color;
  padding: $spacing-md;
}
```

### 2. Mixins
```scss
.my-container {
  @include flex-center;
  @include transition(all, 0.3s, ease);
}

.my-button {
  @include button-base;
}
```

### 3. Media Queries
```scss
.my-component {
  // Estilos base
  
  @include mobile {
    // Estilos para móvil
  }
  
  @include tablet {
    // Estilos para tablet
  }
  
  @include desktop {
    // Estilos para desktop
  }
}
```

### 4. Anidamiento
```scss
.header {
  background: $background-color;
  
  .nav {
    @include flex-between;
    
    .nav-item {
      padding: $spacing-sm;
      
      &:hover {
        background: $hover-bg;
      }
    }
  }
}
```

## Comandos útiles

- **Compilación automática**: Vite compila SASS automáticamente
- **Variables**: Usa `$` para definir variables
- **Mixins**: Usa `@mixin` para crear y `@include` para usar
- **Anidamiento**: Puedes anidar selectores
- **&**: Referencia al selector padre

## Agregar nuevos estilos

1. Crea un nuevo archivo `.scss` en `src/styles/`
2. Importa las variables y mixins: `@import 'variables'; @import 'mixins';`
3. Importa tu archivo en `main.scss`
4. ¡Listo! Vite compilará automáticamente

## Ejemplo de archivo de componente

```scss
// _button.scss
@import 'variables';
@import 'mixins';

.btn {
  @include button-base;
  
  &--primary {
    background-color: $primary-color;
    color: white;
  }
  
  &--secondary {
    background-color: $secondary-color;
    color: white;
  }
}
```
