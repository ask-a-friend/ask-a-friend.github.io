module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy("js");
    eleventyConfig.addPassthroughCopy("**/*.css");
    eleventyConfig.addPassthroughCopy("**/*.woff");
    eleventyConfig.addPassthroughCopy("**/*.woff2");
    eleventyConfig.addPassthroughCopy("**/*.zip");
    eleventyConfig.addPassthroughCopy("**/*.jpg");
    eleventyConfig.addPassthroughCopy("**/*.JPG");
    eleventyConfig.addPassthroughCopy("**/*.jpeg");
    eleventyConfig.addPassthroughCopy("**/*.png");
    eleventyConfig.addPassthroughCopy("**/*.webp");
    eleventyConfig.addPassthroughCopy("**/*.ttf");
    eleventyConfig.addPassthroughCopy("**/*.otf");

eleventyConfig.addFilter("addTargetBlank", function(content) {
    const { JSDOM } = require("jsdom");
    const dom = new JSDOM(content);
    const links = dom.window.document.querySelectorAll("a");

    links.forEach(link => {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    });

    return dom.serialize();
  });

  eleventyConfig.addCollection("post", function(collectionApi) {
    return collectionApi.getFilteredByTag("post");
  });

  return {
    dir: {
      input: '.',  
      includes: '_includes',    // Quelldateien
      output: '_site',      // Generierter Output
    },
  templateFormate: [ 'md', 'njk', 'html'],
  markdownTemplateEnginge: 'njk',
  htmlTemplateEnginge: 'njk',
  dataTemplateEnginge: 'njk',
};

};
