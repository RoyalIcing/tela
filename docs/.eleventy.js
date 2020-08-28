const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
module.exports = function (eleventyConfig) {
  eleventyConfig.htmlTemplateEngine = "njk";
  eleventyConfig.markdownTemplateEngine = "njk";

  // eleventyConfig.setTemplateFormats([
  //   "md",
  //   "css" // css is not yet a recognized template extension in Eleventy
  // ]);
  // eleventyConfig.addPassthroughCopy("_content/main.css");

  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.addFilter("makeUppercase", function(value) { `${value}`.toUpperCase() });

  return {
    dir: {
      input: "_content",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data",
    },
    markdownTemplateEngine: "njk",
    passthroughFileCopy: true,
  };
};
