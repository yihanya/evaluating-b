const Router = require("koa-router");
const router = new Router();
const userRouter = require("./userRouter");
const noticeRouter = require("./noticeRouter");
const adminRouter = require("./adminRouter");
const tagRouter = require("./tagRouter");
const topicRouter = require("./topicRouter");
const sampleRouter = require("./sampleRouter");
const ojRouter = require('./ojRouter');
router.get('/', async (ctx) => {
  ctx.body = "oj-koa2-接口"
})
router.get('/api', async (ctx) => {
  ctx.body = "oj-koa2-接口"
})
router.use('/user', userRouter.routes(), userRouter.allowedMethods());
router.use('/notice', noticeRouter.routes(), noticeRouter.allowedMethods());
router.use('/admin', adminRouter.routes(), adminRouter.allowedMethods());
router.use('/tag', tagRouter.routes(), tagRouter.allowedMethods());
router.use('/topic', topicRouter.routes(), topicRouter.allowedMethods());
router.use('/sample', sampleRouter.routes(), sampleRouter.allowedMethods());
router.use('/oj', ojRouter.routes(), ojRouter.allowedMethods());

module.exports = router;