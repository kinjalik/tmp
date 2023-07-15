module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('static');
    eleventyConfig.addWatchTarget('static');
    eleventyConfig.addPassthroughCopy('/flag/flag_RANDOM.txt')
  };
