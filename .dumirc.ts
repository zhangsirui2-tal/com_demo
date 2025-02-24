import { defineConfig } from 'dumi';
import path from 'path';

const basePath = '/docs/';

console.log(
  '-------',
  path.resolve(__dirname, 'packages/components/src/index.tsx'),
);
// console.log('-------', join(__dirname, 'packages/components/src/index.tsx'));

export default defineConfig({
  themeConfig: {
    name: '组件库demo',
    // mode:'site',
    //头部菜单栏
    // nav: [
    //   {
    //     title: '规范',
    //     link: '/spec',
    //   },
    //   {
    //     title: 'components',
    //     link: '/packages/components',
    //     children: [
    //       { title: 'Button 按钮', link: '/packages/components/src/index.md' },
    //       // { title: 'Input 输入框', path: '/packages/components/input' },
    //     ],
    //   },
    //   {
    //     title: 'hooks',
    //     link: '/hooks',
    //   },
    // ],
    // group: [{ title: '基础', order: 1 }],
    prefersColor: { default: 'light', switch: true }, //主题色
    // socialLinks: {
    //   github: 'https://github.com/cwjbjy?tab=repositories',
    // },
  },
  outputPath: 'docs-dist', //打包后文档的包名
  base: basePath,
  publicPath: basePath,
  hash: true, //文档包名是否生成hash，防止浏览器缓存
  //解析目录
  resolve: {
    docDirs: ['docs'], //配置 Markdown 文档的解析目录
    atomDirs: [
      //配置子项目（例如组件、函数、工具等）Markdown 的解析目录。
      { type: 'components', dir: 'packages/components/src' },
      // { type: 'hooks', dir: 'packages/hooks/src' },
      // { type: 'tools', dir: 'packages/tools/src' },
    ],
  },
  //别名：dumi 2不再感知 monorepo,需要手动配置包名到 src 的 alias。
  alias: {
    // console.log(require.resolve(path.resolve(__dirname, 'packages/components/src/index.tsx')))
    '@zsrcom/components': path.resolve(__dirname, 'packages/components/src'),
    // '@zsrcom/components': join(__dirname, 'packages/components/src/index.tsx'),
    // '@zsrcom/hooks': join(__dirname, 'packages/hooks/src'),
    // '@zsrcom/utils': join(__dirname, 'packages/tools/src'),
  },
  // 默认重定向到子包的 src 文件夹
  // 在子包中寻找，优先定向到 libs 文件夹
  monorepoRedirect: {
    peerDeps: true,
    srcDir: ['libs', 'src'],
  },
});
