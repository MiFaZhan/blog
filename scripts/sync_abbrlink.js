// blog/scripts/sync_abbrlink.js
const fs = require('fs');
const path = require('path');

hexo.on('generateAfter', () => {
  // 获取所有文章数据
  const posts = hexo.locals.get('posts').data;

  posts.forEach(post => {
    // 跳过已存在 abbrlink 的文章
    if (post.abbrlink) return;

    // 源文件路径（例如：source/_posts/example.md）
    const sourcePath = path.join(hexo.base_dir, post.source);
    
    // 读取源文件内容
    let content = fs.readFileSync(sourcePath, 'utf-8');
    
    // 在 Front Matter 中添加 abbrlink
    if (content.startsWith('---')) {
      const frontMatterEnd = content.indexOf('---', 3);
      const frontMatter = content.slice(0, frontMatterEnd + 3);
      const updatedFrontMatter = frontMatter + `\nabbrlink: ${post.abbrlink}\n`;
      
      // 更新内容并写回文件
      const newContent = updatedFrontMatter + content.slice(frontMatterEnd + 3);
      fs.writeFileSync(sourcePath, newContent, 'utf-8');
    }
  });
});