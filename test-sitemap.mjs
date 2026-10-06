import fs from 'fs';
import path from 'path';

const __dirname = path.resolve();

// Parse AppRoutes.tsx to map paths to file paths
const appRoutesPath = path.join(__dirname, 'src/AppRoutes.tsx');
const appRoutesContent = fs.readFileSync(appRoutesPath, 'utf-8');

// Build component to file path map from imports
const componentToFileMap = {};
const importRegex = /import\s+([A-Za-z0-9_]+)\s+from\s+['"]([^'"]+)['"]/g;
let match;
while ((match = importRegex.exec(appRoutesContent)) !== null) {
  const component = match[1];
  const relativePath = match[2];
  if (relativePath.startsWith('.')) {
    componentToFileMap[component] = path.join(__dirname, 'src', relativePath) + '.tsx';
  }
}

// Build route to component map from <Route path="..." element={<Component />} />
const routeToComponentMap = {};
const routeRegex = /<Route\s+path=['"]([^'"]+)['"]\s+element=\{<([A-Za-z0-9_]+)\s*\/>\}/g;
while ((match = routeRegex.exec(appRoutesContent)) !== null) {
  routeToComponentMap[match[1]] = match[2];
}

function getFileLastMod(routePath) {
  const component = routeToComponentMap[routePath];
  if (component && componentToFileMap[component]) {
    let filePath = componentToFileMap[component];
    // fallback if it's .tsx or /index.tsx
    if (!fs.existsSync(filePath) && fs.existsSync(filePath.replace('.tsx', '/index.tsx'))) {
       filePath = filePath.replace('.tsx', '/index.tsx');
    }
    if (fs.existsSync(filePath)) {
      return fs.statSync(filePath).mtime.toISOString().split('T')[0];
    } else {
      console.log('Not found:', filePath);
    }
  }
  return null;
}

const manifestPath = path.join(__dirname, 'src/routes-manifest.json');
const routes = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
const sitemapRoutes = routes.filter(route => route.sitemapInclusion && route.isIndexable);

sitemapRoutes.forEach(route => {
    const dynamicLastMod = getFileLastMod(route.path);
    console.log(route.path, dynamicLastMod);
});
