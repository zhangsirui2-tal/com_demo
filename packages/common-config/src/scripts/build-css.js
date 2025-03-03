#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const sass = require('node-sass');
const glob = require('glob');

console.log('开始处理SCSS文件...');

const scssFiles = glob.sync('src/**/*.scss');
let processedFiles = 0;

scssFiles.forEach(file => {
  
  try {
    // 编译SCSS
    const result = sass.renderSync({
      file: path.resolve(file),
      outputStyle: 'compressed',
    });
    
    // 确定目标路径
    const relativePath = path.relative('src', file);
    const esmPath = path.join('dist/esm', relativePath).replace('.scss', '.css');
    const libPath = path.join('dist/lib', relativePath).replace('.scss', '.css');
    
    // 确保目录存在
    fs.mkdirSync(path.dirname(esmPath), { recursive: true });
    fs.mkdirSync(path.dirname(libPath), { recursive: true });
    
    // 写入CSS文件
    fs.writeFileSync(esmPath, result.css);
    fs.writeFileSync(libPath, result.css);
    
    processedFiles++;
  } catch (error) {
    console.error(`SCSS编译错误 ${file}:`, error.message);
  }
});


// 找到所有JS/TS文件
const jsFiles = glob.sync('dist/**/*.{js,jsx,ts,tsx}');
let modifiedFiles = 0;

jsFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // 替换SCSS导入为CSS导入
  const originalContent = content;
  
  // 处理import语句
  content = content.replace(
    /import\s+(['"])(.+?)\.scss\1;?/g, 
    'import $1$2.css$1;'
  );
  
  // 处理require语句
  content = content.replace(
    /require\(\s*(['"])(.+?)\.scss\1\s*\)/g,
    'require($1$2.css$1)'
  );
  
  if (content !== originalContent) {
    fs.writeFileSync(file, content);
    modifiedFiles++;
  }
});

console.log('\n全部处理完成！');
