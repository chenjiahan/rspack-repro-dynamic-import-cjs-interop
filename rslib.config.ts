import { defineConfig } from '@rslib/core';

export default defineConfig({
  lib: [{ format: 'esm' }, { format: 'cjs' }],
  output: { target: 'node' },
});
