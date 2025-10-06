import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default async function (eleventyConfig) {
    eleventyConfig.addPlugin(eleventyImageTransformPlugin);
    eleventyConfig.addPassthroughCopy("style");
    eleventyConfig.addPassthroughCopy("src/assets");

    return {
        dir: {
            input: "src",
            output: "_site",
            data: "_data",
            includes: "_includes",
            layouts: "_layouts"
        }
    };
}
