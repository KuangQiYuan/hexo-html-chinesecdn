module.exports = function(str, data) {
  function type(variable) {
    return Object.prototype.toString.call(variable).slice(8,-1).toLowerCase();
  };

  var options = this.config.html_chinesecdn;
  var cdn = {}, chosen_cdn = null;
  cdn.qihu = function(str) {
    return str.replace(/\.googleapis\.com\//ig, ".useso.com/");
  };


  if (provider in options && type(options.provider) === "string" && options.provider in cdn) {
    chosen_cdn = cdn[options.provider];
  } else {
    return str;
  }

  console.log("Chosen CDN is: ", options.provider);

  return chosen_cdn(str);
};
