hexo.extend.filter.register('theme_inject', function(injects) {
  injects.bodyBegin.file('video-background', 
    'source/_inject/video-bg.ejs', 
    {}, 
    { cache: true }, 
    -99 // 确保优先加载
  );
});