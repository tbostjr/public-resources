/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ["**/.*"],
  browserNodeBuiltinsPolyfill: { modules: { util: true, path: true, fs: true, os: true, child_process: true, https: true, querystring: true, url: true, net: true, tls: true, assert: true, http: true, crypto: true, stream: true , buffer: true, events: true}},
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  //publicPath: "./app/assets/",
  // serverBuildPath: "build/index.js",
};
