import { defineConfig } from 'father';

export function createBaseConfig() {
  return defineConfig({
    esm: {
      input: 'src',
      output: 'dist/esm',
      transformer: 'babel',
      platform: 'browser',
      ignores: ['**/demo/**', '**/*.md'],
    },
    cjs: {
      input: 'src',
      output: 'dist/lib',
      transformer: 'babel',
      platform: 'node',
      ignores: ['**/demo/**', '**/*.md'],
    },
    targets: { chrome: 79, ie: 11, firefox: 72 },
    sourcemap: true,
  });
}
