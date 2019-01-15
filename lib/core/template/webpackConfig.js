"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Author: AK-12
 * @Date: 2019-01-15 13:03:17
 * @Last Modified by:   AK-12
 * @Last Modified time: 2019-01-15 13:03:17
 */
exports.webpackConfig = "const path = require('path');\n\nmodule.exports = {\n  entry: './lib/test/test.js',\n  resolve: {\n    extensions: ['.js']\n  },\n  output: {\n    filename: 'bundle.js',\n    path: path.resolve(__dirname, 'build')\n  },\n  watchOptions: {\n    aggregateTimeout: 300,\n    poll: 1000,\n    ignored: /node_modules/\n  }\n};";