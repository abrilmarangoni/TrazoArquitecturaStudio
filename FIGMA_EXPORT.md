# Guía para Exportar tu Web a Figma

## Opción 1: Screenshots Manuales (Más Rápido)

1. **Abre tu web en el navegador** (http://localhost:3110)
2. **Toma screenshots de cada sección:**
   - Hero Section
   - Proyectos (Residencial y Comercial)
   - Servicios
   - Contacto
   - Footer

3. **En Figma:**
   - Crea un nuevo archivo
   - Importa las imágenes (drag & drop)
   - Organiza cada sección en un Frame
   - Agrega anotaciones con colores, tipografías, etc.

## Opción 2: Plugin de Figma "html.to.design"

1. **Instala el plugin en Figma:**
   - Abre Figma Desktop
   - Ve a Plugins → Browse plugins
   - Busca "html.to.design"
   - Instálalo

2. **Usa el plugin:**
   - Abre tu web en el navegador
   - Copia la URL (http://localhost:3110)
   - En Figma, ejecuta el plugin "html.to.design"
   - Pega la URL
   - El plugin convertirá tu HTML/CSS en elementos de Figma

## Opción 3: Script Automatizado

1. **Instala las dependencias:**
   ```bash
   pnpm add -D playwright
   npx playwright install chromium
   ```

2. **Asegúrate de que el servidor esté corriendo:**
   ```bash
   pnpm dev
   ```

3. **Ejecuta el script:**
   ```bash
   node scripts/export-to-figma.js
   ```

4. **Los screenshots se guardarán en:** `./figma-exports/`

5. **Importa los screenshots a Figma**

## Opción 4: Documentación de Diseño Manual

Crea un documento en Figma con:

### Paleta de Colores
- `#f3f2f3` - Gris claro (fondo)
- `#ded7cd` - Beige cálido
- `#b4a66d` - Dorado/mostaza
- `#3d555b` - Teal oscuro
- `#212f35` - Charcoal oscuro

### Tipografía
- **Fuente:** Geist Sans
- **Pesos:** Light (300), Regular (400), Medium (500)

### Componentes Principales
1. **Header** - Fixed, transparente con blur
2. **Hero** - Full screen con slider de imágenes
3. **Proyectos** - Grid 2x2 con toggle Residencial/Comercial
4. **Servicios** - Sección con DynamicFrameLayout
5. **Contacto** - Formulario de contacto
6. **Footer** - Footer animado que aparece al final

### Espaciado
- Padding horizontal: `150px` (desktop)
- Padding vertical: `150px` entre secciones

## Recomendación

Para empezar rápido, usa la **Opción 1** (screenshots manuales) y luego refina el diseño en Figma agregando:
- Componentes reutilizables
- Sistema de diseño completo
- Especificaciones de espaciado y tipografía

