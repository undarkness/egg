'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.resources('users', '/users', controller.users);
  app.router.resources('topics', '/api/v2/topics', app.controller.topics);
};
