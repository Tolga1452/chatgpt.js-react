import { readdirSync, writeFileSync } from 'fs';

const functions = readdirSync('src/functions').filter(file => file.endsWith('.ts'));
const types = readdirSync('src/types').filter(file => file.endsWith('.ts'));

let exports = "import React from 'react';";

console.log('Exporting functions:', functions);

exports += `\n\n// Functions\n${functions.map(file => `export * from './functions/${file.replace('.ts', '.js')}';`).join('\n')}`;

console.log('Exporting types...');

exports += "\n\n// Types\n" + types.map(file => `export * from './types/${file.replace('.ts', '.js')}';`).join('\n') + '\n';

exports += "\n\nexport default React;\n"

writeFileSync('src/index.ts', exports);

console.log(`Exported ${functions.length} functions and ${types.length} types to src/index.ts`);
