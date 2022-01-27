# Sass Performance Benchmark

Test code:

```js
import "@alifd/next/index.scss";
```

Test device: a Macbook Pro 16 (2019)

Test method: `rm -rf node_modules/.cache && time -p npm run build`

Test result:

Use the last number in the output `npm run build 24.99s user 2.43s system 130% cpu 21.011 total`

| Build Tool       | Bundler   | Transpiler     | Build Time (no cache) |
| ---------------- | --------- | -------------- | --------------------- |
| Create React App | Webpack 5 | Dart Sass 1.49 | 15.645s               |
| Create React App | Webpack 5 | Node Sass 7.0  | 12.638s               |
| JUST             | Webpack 4 | Node Sass 4.14 | 8.259s                |
| ICE (Vite)       | Rollup    | Dart Sass 1.32 | 9.329s                |
| ICE (Webpack)    | Webpack 5 | Dart Sass 1.32 | 21.011s               |
