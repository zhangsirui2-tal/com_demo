import { defineConfig } from 'dumi';
import path from 'path';

const basePath = '/docs/';

export default defineConfig({
  themeConfig: {
    name: '组件库demo',
    prefersColor: { default: 'light', switch: true }, //主题色
  },
  outputPath: 'docs-dist',
  base: basePath,
  publicPath: basePath,
  hash: true,
  resolve: {
    docDirs: ['docs'],
    atomDirs: [
      { type: 'components', dir: 'packages/components/src' },
      { type: 'example-com', dir: 'packages/example-com/src' },
      { type: 'antd-v5', dir: 'packages/antd-v5/src' },
    ],
  },
  alias: {
    '@zsrcom/components': path.resolve(__dirname, 'packages/components/src'),
    '@zsrcom/example-com': path.resolve(__dirname, 'packages/example-com/src'),
    '@zsrcom/antd-v5': path.resolve(__dirname, 'packages/antd-v5/src'),
    '@zsrcom/common-config': path.resolve(
      __dirname,
      'packages/common-config/src',
    ),
  },
  monorepoRedirect: {
    peerDeps: true,
    srcDir: ['libs', 'src'],
  },
});
