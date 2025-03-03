const fs = require('fs');
const path = require('path');

// 组件列表
const components = [
  'Affix', 'Alert', 'Anchor', 'App', 'AutoComplete', 'Avatar',
'BackTop', 'Badge', 'Breadcrumb', 'Button',
'Calendar', 'Card', 'Carousel', 'Cascader', 'Checkbox', 'Col', 'Collapse', 'ColorPicker',
'DatePicker', 'Descriptions', 'Divider', 'Drawer', 'Dropdown',
'Empty',
'Flex', 'FloatButton', 'Form',
'Grid',
'Image', 'Input', 'InputNumber',
'Layout', 'List',
'Mentions', 'Menu', 'message', 'Modal',
'notification', 
'Pagination', 'Popconfirm', 'Popover', 'Progress',
'QRCode',
'Radio', 'Rate', 'Result', 'Row',
'Segmented', 'Select', 'Skeleton', 'Slider', 'Space', 'Spin', 'Statistic', 'Steps', 'Switch',
'Table', 'Tabs', 'Tag', 'TimePicker', 'Timeline', 'Tooltip', 'Tour', 'Transfer', 'Tree', 'TreeSelect', 'Typography',
'Upload',
'Watermark',

];

const componentsDir = path.join(__dirname, '../components');
if (!fs.existsSync(componentsDir)) {
  fs.mkdirSync(componentsDir, { recursive: true });
}

// 组件模板
const componentTemplate = (name) => `import { ${name} as Antd${name} } from 'antd-v5';
import { withTheme } from '../../withTheme';

const ${name} = withTheme(Antd${name});

export default ${name};
export type { ${name}Props } from 'antd-v5';
`;

components.forEach(name => {
  const componentDir = path.join(componentsDir, name);
  
  if (!fs.existsSync(componentDir)) {
    fs.mkdirSync(componentDir, { recursive: true });
  }
  
  fs.writeFileSync(
    path.join(componentDir, 'index.tsx'),
    componentTemplate(name),
    'utf-8'
  );
  
  console.log(`✅ Generated component: ${name}`);
});

// 生成主入口文件
const indexImports = components
  .map(name => `export { default as ${name} } from './components/${name}';`)
  .join('\n');

const indexTypes = components
  .map(name => `export type { ${name}Props } from './components/${name}';`)
  .join('\n');

fs.writeFileSync(
  path.join(__dirname, '../index.ts'),
  `${indexImports}\n\n${indexTypes}\n`,
  'utf-8'
);

console.log('✅ Generated index file');
console.log('🎉 All components generated successfully!');
