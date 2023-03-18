
const Router = require("koa-router");
const noticeRouter = new Router();
const noticeService = require("../service/noticeService")
const bodyParser = require('koa-bodyparser');
const logsFile = require("../utile/logs.js").logHandle

//接口
noticeRouter.use(bodyParser())
/**
 * 
 * @api {post} /notice/add-notice 发布公告
 * @apiName 发布公告
 * @apiGroup 公告(notice)
 * @apiDescription  返回公告信息
 * @apiVersion  1.0.0
 * 
 * @apiParam {String} noticeTitle=''  公告标题
 * @apiParam {String} noticeText=''  公告内容
 * @apiParamExample  {type} Request-Example:
 * {
 *     noticeTitle:"第一次发公告",
 *     noticeText:"暂无.",
 * }
 * 
 * @apiSuccess {Number} code 200
 * @apiSuccess {Object} data 公告信息
 * @apiSuccess {String} msg  发布成功
 * @apiSuccessExample {type} Response-Example:
 * {
 *  code: 200,
 *  msg: "发布成功"
 *  data: {
 *    name: '',
 *    age: '',
 *    sex: '',
 *    ...
 *  }
 * }
 * 
 */
noticeRouter.post('/add-notice', async (ctx) => {
  let returnData = { code: "200", msg: "发布成功", data: "" };
  let noticeData = ctx.request.body;
  try {
    //执行业务
    let serviceData = await noticeService.addNotice(noticeData);
    returnData.data = serviceData.data;
    returnData.code = serviceData.code;
    returnData.msg = serviceData.msg;
  } catch (error) {
    console.log(error);
    returnData.code = '600'
    returnData.msg = '执行业务发生异常';
    logsFile("执行业务发生异常")
  }
  ctx.body = returnData;
})

/**
 * 
 * @api {get} /notice/get-notice-item 获取公告内容
 * @apiName 获取公告内容
 * @apiGroup 公告(notice)
 * @apiDescription  返回公告信息
 * @apiVersion  1.0.0
 * 
 * @apiParam {String} noticeId='1'  公告标题
 * @apiParamExample  {type} Request-Example:
 * {
 *     noticeId:"第一次发公告",
 * }
 * 
 * @apiSuccess {Number} code 200
 * @apiSuccess {Object} data 公告信息
 * @apiSuccess {String} msg  获取成功
 * @apiSuccessExample {type} Response-Example:
 * {
 *  code: 200,
 *  msg: "获取成功"
 *  data: {
 *    name: '',
 *    age: '',
 *    sex: '',
 *    ...
 *  }
 * }
 * 
 */
noticeRouter.post('/get-notice-item', async (ctx) => {
  let returnData = { code: "200", msg: "获取成功", data: "" };
  let noticeData = ctx.request.body;
  try {
    //执行业务
    let serviceData = await noticeService.getNoticeItem(noticeData);
    returnData.data = serviceData.data;
    returnData.code = serviceData.code;
    returnData.msg = serviceData.msg;
  } catch (error) {
    console.log(error);
    returnData.code = '600'
    returnData.msg = '执行业务发生异常';
    logsFile("执行业务发生异常")
  }
  ctx.body = returnData;
})

/**
 * 
 * @api {get} /notice/get-all-notice 获取所有公告
 * @apiName 获取所有公告
 * @apiGroup 公告(notice)
 * @apiDescription  返回公告信息
 * @apiVersion  1.0.0
 * 
 * @apiParamExample  {type} Request-Example:
 * {
 * }
 * 
 * @apiSuccess {Number} code 200
 * @apiSuccess {Object} data 公告信息
 * @apiSuccess {String} msg  获取成功
 * @apiSuccessExample {type} Response-Example:
 * {
 *  code: 200,
 *  msg: "获取成功"
 *  data: {
 *    name: '',
 *    age: '',
 *    sex: '',
 *    ...
 *  }
 * }
 * 
 */
noticeRouter.post('/get-all-notice', async (ctx) => {
  let returnData = { code: "200", msg: "发布成功", data: "" };
  let noticeData = ctx.request.body;
  try {
    //执行业务
    let serviceData = await noticeService.getAllNotice(noticeData);
    returnData.data = serviceData.data;
    returnData.code = serviceData.code;
    returnData.msg = serviceData.msg;
  } catch (error) {
    console.log(error);
    returnData.code = '600'
    returnData.msg = '执行业务发生异常';
    logsFile("执行业务发生异常")
  }
  ctx.body = returnData;
})

/**
 * 
 * @api {get} /notice/get-notice-page 分页公告
 * @apiName 分页公告
 * @apiGroup 公告(notice)
 * @apiDescription  返回公告列表
 * @apiVersion  1.0.0
 * 
 * @apiParamExample  {type} Request-Example:
 * {
 *     page:1,
 *     limit:10,
 * }
 * 
 * @apiSuccess {Number} code 200
 * @apiSuccess {Object} data 公告信息
 * @apiSuccess {String} msg  获取成功
 * @apiSuccessExample {type} Response-Example:
 * {
 *  code: 200,
 *  msg: "获取成功"
 *  data: {
 *    name: '',
 *    age: '',
 *    sex: '',
 *    ...
 *  }
 * }
 * 
 */
noticeRouter.get('/get-notice-page', async (ctx) => {
  let returnData = { code: "200", msg: "获取成功", data: "" };
  let noticeData = ctx.request.query;
  console.log("******************************************************");
  try {
    //执行业务
    let serviceData = await noticeService.getNoticePage(noticeData);
    returnData.data = serviceData.data;
    returnData.code = serviceData.code;
    returnData.msg = serviceData.msg;
  } catch (error) {
    console.log(error);
    returnData.code = '600'
    returnData.msg = '执行业务发生异常';
    logsFile("执行业务发生异常")
  }
  ctx.body = returnData;
})


/**
 * 
 * @api {get} /notice/get-notice-length 获取数据库公告数量
 * @apiName 公告数量
 * @apiGroup 公告(notice)
 * @apiDescription  返回公告数量
 * @apiVersion  1.0.0
 * 
 * @apiParamExample  {type} Request-Example:
 * {
 * 
 * }
 * 
 * @apiSuccess {Number} code 200
 * @apiSuccess {Object} data 公告信息
 * @apiSuccess {String} msg  获取成功
 * @apiSuccessExample {type} Response-Example:
 * {
 *  code: 200,
 *  msg: "获取成功"
 *  data: {
 *    name: '',
 *    age: '',
 *    sex: '',
 *    ...
 *  }
 * }
 * 
 */
noticeRouter.get('/get-notice-length', async (ctx) => {
  let returnData = { code: "200", msg: "获取成功", data: "" };
  let noticeData = ctx.request.query;
  console.log("******************************************************");
  try {
    //执行业务
    let serviceData = await noticeService.getNoticeLength();
    returnData.data = serviceData.data;
    returnData.code = serviceData.code;
    returnData.msg = serviceData.msg;
  } catch (error) {
    console.log(error);
    returnData.code = '600'
    returnData.msg = '执行业务发生异常';
    logsFile("执行业务发生异常")
  }
  ctx.body = returnData;
})

module.exports = noticeRouter;