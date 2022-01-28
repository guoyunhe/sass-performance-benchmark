# Sass Performance Benchmark

Test code:

```js
import "@alifd/next/index.scss";
```

Test device: a Macbook Pro 16 (2019)

Test method: `rm -rf node_modules/.cache && time npm run build`

Test result:

Use the last number in the output `npm run build 24.99s user 2.43s system 130% cpu 21.011 total`

| #   | Build Tool                                   | Bundler   | Transpiler     | Build Time |
| --- | -------------------------------------------- | --------- | -------------- | ---------- |
| 1   | Create React App                             | Webpack 5 | Dart Sass 1.49 | 15.645s    |
| 2   | Create React App with node-sass              | Webpack 5 | Node Sass 7.0  | 12.638s    |
| 3   | JUST                                         | Webpack 4 | Node Sass 4.14 | 8.259s     |
| 4   | ICE (Vite)                                   | Rollup    | Dart Sass 1.32 | 9.329s     |
| 5   | ICE (Webpack)                                | Webpack 5 | Dart Sass 1.32 | 21.011s    |
| 6   | ICE (Webpack) with sass fix                  | Webpack 5 | Dart Sass 1.49 | 16.976s    |
| 7   | ICE (Webpack) with node-sass                 | Webpack 5 | Node Sass 7.0  | 16.857s    |
| 8   | ICE (Webpack) with sass fix & minimizer fix  | Webpack 5 | Dart Sass 1.49 | 14.022s    |
| 9   | ICE (Webpack) with node-sass & minimizer fix | Webpack 5 | Node Sass 7.0  | 12.120s    |
