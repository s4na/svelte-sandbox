// Jest向けに設定追加
// 参考: https://tech.actindi.net/2021/03/18/144317

const sveltePreprocess = require('svelte-preprocess');

module.exports = {
  preprocess: sveltePreprocess({ sourceMap: true }),
};
