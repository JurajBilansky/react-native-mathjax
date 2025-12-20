const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const config = getDefaultConfig(__dirname);

const parentDir = path.resolve(__dirname, '..');

// Watch the parent directory for changes
config.watchFolders = [parentDir];

// Make Metro resolve modules from both the local node_modules and parent
config.resolver.nodeModulesPaths = [
  path.resolve(__dirname, 'node_modules'),
  path.resolve(parentDir, 'node_modules'),
];

// Ensure extraNodeModules includes parent modules
config.resolver.extraNodeModules = {
  ...config.resolver.extraNodeModules,
  'html-entities': path.resolve(parentDir, 'node_modules/html-entities'),
  'speech-rule-engine': path.resolve(parentDir, 'node_modules/speech-rule-engine'),
  'mhchemparser': path.resolve(parentDir, 'node_modules/mhchemparser'),
  // Force React to use local version
  'react': path.resolve(__dirname, 'node_modules/react'),
  'react-native': path.resolve(__dirname, 'node_modules/react-native'),
};

// Suppress known safe require cycle warnings from MathJax
const originalLogWarn = console.warn;
console.warn = (...args) => {
  const msg = args[0];
  if (typeof msg === 'string' && msg.includes('Require cycle:')) {
    const cyclePaths = [
      'mjs/input/tex/MapHandler.js',
      'mjs/components/package.js',
      'mjs/input/tex/mathtools/MathtoolsMethods.js',
      'mjs/output/svg.js',
    ];
    if (cyclePaths.some(p => msg.includes(p))) {
      return; // Suppress these specific warnings
    }
  }
  originalLogWarn.apply(console, args);
};

module.exports = config;
