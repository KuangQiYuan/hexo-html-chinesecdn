var assign = require('object-assign');

hexo.config.html_chinesecdn = assign({
  exclude: []
}, hexo.config.html_chinesecdn);

hexo.extend.filter.register('after_render:html', require('./lib/filter'));
