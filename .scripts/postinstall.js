#!/usr/bin/env node

/**
 * Symlink components to the root dir so that they can be required using:
 *   require('resin-components/TextInput')
 */
const fs = require('fs');
const path = require('path');

if (process.env.NODE_ENV === 'dev') {
  process.exit();
}

const rootPath = process.cwd();
const distDir = path.join(rootPath, 'dist', 'components');

fs.readdirSync(distDir).forEach((file) => {
  fs.symlinkSync(path.join(distDir, file), path.join(rootPath, file), 'dir');
});

// Symlink main.less so that it can be imported easily
fs.symlinkSync(path.join(rootPath, 'dist', 'styles', 'main.less'), path.join(rootPath, 'main.less'), 'file');