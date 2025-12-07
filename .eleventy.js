export default function(eleventyConfig) {
  // Copy content images to output
  eleventyConfig.addPassthroughCopy("content/**/*.{jpg,jpeg,png,gif,svg,webp}");

  // Add CSS
  eleventyConfig.addPassthroughCopy("src/css");

  // Add date filter for post dates
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return new Date(dateObj).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  });

  // Add year filter for grouping
  eleventyConfig.addFilter("year", (dateObj) => {
    return new Date(dateObj).getFullYear();
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
}
