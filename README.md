# Sass Performance Benchmark

Test code:

```js
import "@alifd/next/index.scss";
```

Test device: a Macbook Pro 16 (2019)

Test result:

| Build Tool       | Bundler   | Transpiler     | Build Time (no cache) |
| ---------------- | --------- | -------------- | --------------------- |
| Create React App | Webpack 5 | Dart Sass 1.49 | 15.88s                |
| JUST             | Webpack 4 | Node Sass 4.14 | 7.20s                 |
| ICE (Vite)       | Rollup    | Dart Sass 1.32 | 9.71s                 |
| ICE (Webpack)    | Webpack 5 | Dart Sass 1.32 | 24.16s                |
