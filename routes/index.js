const combineRouters = require('koa-combine-routers');

const index = require('./index/index.js');
const unreadMessages = require('./messages/index.js');

const router = combineRouters(
  index,
  unreadMessages,
);

module.exports = router;