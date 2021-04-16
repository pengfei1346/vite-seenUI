const path = require("path");

// todo 解决dev警告
const isProduction = process.env.NODE_ENV === "production";
module.exports = {
  plugins: [
    require("postcss-import"),
    require("tailwindcss"),
    require("autoprefixer"),
    // PostCSS plugin to unwrap nested rules like how Sass does it.
    require("postcss-nested"),

    ...(isProduction
      ? [
          require("@fullhuman/postcss-purgecss")({
            // Specify the paths to all of the template files in your project
            content: [
              path.resolve(__dirname, "./packages/components/**/style/*.css"),
              path.resolve(__dirname, "./packages/seen-ui/style/*.css"),
            ],

            // Include any special characters you're using in this regular expression
            defaultExtractor: (content) =>
              content.match(/[\w-/:]+(?<!:)/g) || [],
          }),
        ]
      : []),
  ],
};
