import { copyFile, mkdir } from 'node:fs/promises';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
process.chdir(fileURLToPath(new URL('.', import.meta.url)));
const decoders = ['draco_decoder.js', 'draco_decoder.wasm', 'draco_wasm_wrapper.js'];
await mkdir('static/draco', {recursive: true});
for (const file of decoders) {
  await copyFile('node_modules/three/examples/jsm/libs/draco/gltf/' + file, 'static/draco/' + file);
}
const assets = [
  ...decoders.map(name => 'static/draco/' + name),
  'index.html', 'site.webmanifest', 'meta.jpg', 'apple-touch-icon.png', 'favicon-32x32.png', 'favicon-16x16.png', 'vercel.json',
  'static/portfolio/portfolio.js', 'static/css/main.cbce85ef.css', 'static/css/engineering.css',
  'static/media/SofiaSansCondensed-SemiBold.5dd1068d7811d649e8bd.woff2', 'static/media/SofiaSansCondensed-Bold.aaede6389f871aa6d438.woff2',
  'static/media/SplineSansMono-Regular.847e21281e9bbe6cda7b.woff2', 'static/media/SplineSansMono-Light.3da0fba3453a62aa562a.woff2',
  'img/texture.png', 'img/texture-services.png', 'img/beam_linear_1024x2048.png', 'img/karthik.jpg', 'img/signature.png',
  'models/final-scene.glb', ...['ai-mobile-agent', 'bharat-monitor', 'hand-gesture-controller'].map(slug => 'img/projects/' + slug + '.png')
];
for (const asset of assets) {
  const output = 'dist/' + asset;
  await mkdir(dirname(output), { recursive: true });
  await copyFile(asset, output);
}

