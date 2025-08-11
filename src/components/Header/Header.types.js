/**
 * @typedef {Object} HeaderProps
 * @property {string} [logo] - URL del logo de la empresa
 * @property {string} [logoAlt] - Texto alternativo del logo
 * @property {Array<MenuItem>} [menuItems] - Array de elementos del menú
 * @property {string} [primaryButtonText] - Texto del botón principal
 * @property {string} [primaryButtonUrl] - URL del botón principal
 * @property {string} [className] - Clases CSS adicionales
 * @property {Object} [style] - Estilos inline adicionales
 */

/**
 * @typedef {Object} MenuItem
 * @property {string} label - Etiqueta del menú
 * @property {string} [url] - URL del enlace
 * @property {Array<SubMenuItem>} [subItems] - Subelementos del menú
 * @property {boolean} [isActive] - Si el elemento está activo
 */

/**
 * @typedef {Object} SubMenuItem
 * @property {string} label - Etiqueta del subelemento
 * @property {string} [url] - URL del enlace
 * @property {string} [icon] - Icono del elemento
 * @property {boolean} [isDisabled] - Si el elemento está deshabilitado
 */

export default {};
