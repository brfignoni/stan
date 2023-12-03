module.exports = function (eleventyConfig) {
  // Return your Object options:
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addWatchTarget("./src/orden");
  //   return {
  //     markdownTemplateEngine: "njk",
  //     htmlTemplateEngine: "njk",
  //     dir: {
  //       input: "src",
  //     },
  //   };
  return {
    markdownTemplateEngine: "njk",
    dir: {
      input: "src",
    },
  };
};
