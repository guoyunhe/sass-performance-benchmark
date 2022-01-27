# Sass Performance Benchmark

Test code:

```js
import "@alifd/next/index.scss";
```

Test device: a Macbook Pro 16 (2019)

Test result:

| Build Tool       | Build Time |
| ---------------- | ---------- |
| Create React App | 15.88s     |
| ICE (Vite)       | 9.71s      |
| ICE (Webpack)    | 24.16s     |

ICE's Vite mode is faster than Create React App, showing Rollup's advantage over webpack.

ICE's Webpack mode is slower than Create React App, which uses the same webpack + sass backend.
