'use strict';

/** @type Egg.EggPlugin */
// module.exports = {
//   // had enabled by egg
//   // static: {
//   //   enable: true,
//   // }
// };

// 配置egg连接mysql数据库
exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};