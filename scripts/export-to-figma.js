/**
 * Script para exportar screenshots de la web a Figma
 * Requiere: playwright o puppeteer
 */

const fs = require('fs');
const path = require('path');

// Instrucciones para usar:
// 1. Instalar playwright: npm install -D playwright
// 2. Ejecutar: npx playwright install chromium
// 3. Correr el servidor: pnpm dev
// 4. Ejecutar este script: node scripts/export-to-figma.js

const sections = [
  { name: 'hero', selector: 'section:first-of-type', scroll: false },
  { name: 'proyectos', selector: '#nuestros-proyectos', scroll: true },
  { name: 'servicios', selector: '#servicios', scroll: true },
  { name: 'contacto', selector: '#contacto', scroll: true },
  { name: 'footer', selector: 'footer', scroll: true },
];

console.log(`
📸 Exportador de Screenshots para Figma

Para usar este script:
1. Instala playwright: pnpm add -D playwright
2. Instala el navegador: npx playwright install chromium
3. Asegúrate de que el servidor esté corriendo en http://localhost:3110
4. Ejecuta: node scripts/export-to-figma.js

Los screenshots se guardarán en: ./figma-exports/
`);

// Este es un template - necesitarás instalar playwright para que funcione
// Descomenta y ajusta según necesites:

/*
const { chromium } = require('playwright');

async function exportScreenshots() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  await page.goto('http://localhost:3110');
  await page.setViewportSize({ width: 1920, height: 1080 });
  
  const exportDir = path.join(__dirname, '../figma-exports');
  if (!fs.existsSync(exportDir)) {
    fs.mkdirSync(exportDir, { recursive: true });
  }
  
  for (const section of sections) {
    if (section.scroll) {
      await page.evaluate((selector) => {
        const element = document.querySelector(selector);
        if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, section.selector);
      await page.waitForTimeout(1000);
    }
    
    const element = await page.$(section.selector);
    if (element) {
      await element.screenshot({ path: path.join(exportDir, `${section.name}.png`) });
      console.log(`✅ Capturado: ${section.name}.png`);
    }
  }
  
  // Screenshot completo de la página
  await page.screenshot({ 
    path: path.join(exportDir, 'full-page.png'),
    fullPage: true 
  });
  
  await browser.close();
  console.log('\n✨ Screenshots exportados a ./figma-exports/');
}

exportScreenshots().catch(console.error);
*/

