import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default async function (eleventyConfig) {
    eleventyConfig.addPlugin(eleventyImageTransformPlugin);
    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addPassthroughCopy("bundle.css");

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
