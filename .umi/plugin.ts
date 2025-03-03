import { IApi } from 'dumi';

export default (api: IApi) => {
  api.chainWebpack((config) => {
    // 让原有 CSS 处理保持不变
    config.module
      .rule('scss')
      .test(/\.scss$/)
      .use('sass-loader')
      .loader('sass-loader')
      .before('css-loader');

    return config;
  });
};
