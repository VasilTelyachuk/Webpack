//npm install webpack webpack-cli --save-dev
//npm install --save-dev babel-loader @babel/core
//npm install @babel/preset-env --save-dev  ,назвать файл babel.config.json   и положить в него
// {"presets": ["@babel/preset-env"]}
// npm install style-loader css-loader --save-dev
//npm install --save-dev mini-css-extract-plugin
//npm install sass-loader sass webpack --save-dev
//npm install --save-dev html-webpack-plugin
//npm install webpack-dev-server --save-dev

const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  //   mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"), // создает папку куда все модули выкидуются
    filename: "vasya.js", //что бы сменить название файла
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: [
          // "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      }, // $ говорит что файл должен заканчиваться на .js ,загрусчики применяються с права на лево
      {
        test: /\.hbs$/,
        use: 'handlebars-loader',
      }    
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "styles.css" }), // можно переименовать main.css файл
    new HtmlWebpackPlugin({ template: "./src/index.html" }),
  ], // делает копию и добавляет инфу в  файл индекс.хтмл в папке сборки.
};
