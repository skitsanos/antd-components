Using with [Umijs](https://umijs.org/), .umirc.js example:
  
```js
// ref: https://umijs.org/config/
export default {
  treeShaking: true,

  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react', {
      locale: 'en-GB',
      fastClick: true,
      antd: false, //set to true if you are using Ant.Design
      dva: true,
      //dynamicImport: false,
      dynamicImport: {
        webpackChunkName: true,
        loadingComponent: './components/Loading/index.js',
      },
      title: 'Demo app',
      dll: false,

      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    },
    ]
  ]
};

```
