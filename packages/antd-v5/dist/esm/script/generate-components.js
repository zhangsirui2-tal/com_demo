var fs = require('fs');
var path = require('path');

// 组件列表
var components = ['Affix', 'Alert', 'Anchor', 'App', 'AutoComplete', 'Avatar', 'BackTop', 'Badge', 'Breadcrumb', 'Button', 'Calendar', 'Card', 'Carousel', 'Cascader', 'Checkbox', 'Col', 'Collapse', 'ColorPicker', 'DatePicker', 'Descriptions', 'Divider', 'Drawer', 'Dropdown', 'Empty', 'Flex', 'FloatButton', 'Form', 'Grid', 'Image', 'Input', 'InputNumber', 'Layout', 'List', 'Mentions', 'Menu', 'message', 'Modal', 'notification', 'Pagination', 'Popconfirm', 'Popover', 'Progress', 'QRCode', 'Radio', 'Rate', 'Result', 'Row', 'Segmented', 'Select', 'Skeleton', 'Slider', 'Space', 'Spin', 'Statistic', 'Steps', 'Switch', 'Table', 'Tabs', 'Tag', 'TimePicker', 'Timeline', 'Tooltip', 'Tour', 'Transfer', 'Tree', 'TreeSelect', 'Typography', 'Upload', 'Watermark'];
var componentsDir = path.join(__dirname, '../components');
if (!fs.existsSync(componentsDir)) {
  fs.mkdirSync(componentsDir, {
    recursive: true
  });
}

// 组件模板
var componentTemplate = function componentTemplate(name) {
  return "import { ".concat(name, " as Antd").concat(name, " } from 'antd-v5';\nimport { withTheme } from '../../withTheme';\n\nconst ").concat(name, " = withTheme(Antd").concat(name, ");\n\nexport default ").concat(name, ";\nexport type { ").concat(name, "Props } from 'antd-v5';\n");
};
components.forEach(function (name) {
  var componentDir = path.join(componentsDir, name);
  if (!fs.existsSync(componentDir)) {
    fs.mkdirSync(componentDir, {
      recursive: true
    });
  }
  fs.writeFileSync(path.join(componentDir, 'index.tsx'), componentTemplate(name), 'utf-8');
  console.log("\u2705 Generated component: ".concat(name));
});

// 生成主入口文件
var indexImports = components.map(function (name) {
  return "export { default as ".concat(name, " } from './components/").concat(name, "';");
}).join('\n');
var indexTypes = components.map(function (name) {
  return "export type { ".concat(name, "Props } from './components/").concat(name, "';");
}).join('\n');
fs.writeFileSync(path.join(__dirname, '../index.ts'), "".concat(indexImports, "\n\n").concat(indexTypes, "\n"), 'utf-8');
console.log('✅ Generated index file');
console.log('🎉 All components generated successfully!');
//# sourceMappingURL=generate-components.js