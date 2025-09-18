import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default async function (eleventyConfig) {
    eleventyConfig.addPlugin(eleventyImageTransformPlugin);
    eleventyConfig.addPassthroughCopy("style");

    return {
        dir: {
            input: "src",
            output: "dist",
            data: "_data",
            includes: "_includes",
            layouts: "_layouts"
        }
    };
}
