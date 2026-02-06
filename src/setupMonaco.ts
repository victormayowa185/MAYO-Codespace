// src/setupMonaco.ts
import { loader } from '@monaco-editor/react';

// Configure Monaco to load from CDN (faster)
loader.config({
  paths: {
    vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.45.0/min/vs'
  }
});