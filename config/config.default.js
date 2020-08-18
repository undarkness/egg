/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {
    // mysql: {
    //   // 单数据库信息配置
    //   client: {
    //     // host
    //     host: 'localhost',
    //     // 端口号
    //     port: '3306',
    //     // 用户名
    //     user: 'root',
    //     // 密码
    //     password: 'cjx0812',
    //     // 数据库名
    //     database: 'game_test',
    //   },
    //   // 是否加载到 app 上，默认开启
    //   app: true,
    //   // 是否加载到 agent 上，默认关闭
    //   agent: false,
    // },
    sequelize: {
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'cjx0812',
      database: 'game_test',
    },
    middleware: ['errorHandler'],
    // 只对 /api 前缀的 url 路径生效
    errorHandler: {
      match: '/api',
    },
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1597658390757_2464';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};

