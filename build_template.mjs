// Encode le CERFA officiel en base64 et écrit cerfa_template.js
// (chargé en <script> par index.html pour fonctionner en file://).
import { readFileSync, writeFileSync, statSync } from 'node:fs';

const bytes = readFileSync('cerfa_10103.pdf');
const b64 = bytes.toString('base64');
const js = `// Modèle officiel CERFA 10103*14 — Contrat d'apprentissage
// Source : https://www.formulaires.service-public.gouv.fr/gf/cerfa_10103.do
// Encodé en base64 pour fonctionner sans serveur HTTP.
window.CERFA_PDF_B64 = "${b64}";
`;
writeFileSync('cerfa_template.js', js);
const kb = (statSync('cerfa_template.js').size / 1024).toFixed(1);
console.log(`✓ cerfa_template.js écrit (${kb} KB, ${b64.length} chars b64)`);
