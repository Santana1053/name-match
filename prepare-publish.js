#!/usr/bin/env node

/**
 * Prepare the package for publishing to npm
 * This script sets up the necessary files and directories
 */
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure lib directory exists
const libDir = path.join(__dirname, 'lib');
if (!fs.existsSync(libDir)) {
  console.log('Creating lib directory...');
  fs.mkdirSync(libDir, { recursive: true });
}

// Run tests
try {
  console.log('Running tests...');
  execSync('npm test', { stdio: 'inherit' });
} catch (error) {
  console.error('Tests failed. Please fix failing tests before publishing.');
  process.exit(1);
}

// Build the package
try {
  console.log('Building the package...');
  execSync('npm run build', { stdio: 'inherit' });
} catch (error) {
  console.error('Build failed. Please fix build issues before publishing.');
  process.exit(1);
}

console.log('\nPackage is ready for publishing. To publish, run:');
console.log('npm publish');
