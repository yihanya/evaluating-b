
const Router = require("koa-router");
const tagRouter = new Router();
const tagService = require("../service/tagService")
const bodyParser = require('koa-bodyparser');
const logsFile = require("../utile/logs.js").logHandle

//接口
tagRouter.use(bodyParser())
/**
 * 
 * @api {post} /tag/add-tag 增加标签
 * @apiName 增加标签
 * @apiGroup 标签(tag)
 * @apiDescription  返回标签信息
 * @apiVersion  1.0.0
 * 
 * @apiParam {String} tagName=''  标签名称
 * @apiParamExample  {type} Request-Example:
 * {
 *     tagName:"数论", 
 * }
 * 
 * @apiSuccess {Number} code 200
 * @apiSuccess {Object} data 标签名称
 * @apiSuccess {String} msg  增加成功
 * @apiSuccessExample {type} Response-Example:
 * {
 *  code: 200,
 *  msg: "增加成功"
 *  data: {
 *    name: '',
 *    age: '',
 *    sex: '',
 *    ...
 *  }
 * }
 * 
 */
tagRouter.post('/add-tag', async (ctx) => {
  let returnData = { code: "200", msg: "增加成功", data: "" };
  let tagData = ctx.request.body;
  try {
    //执行业务
    let serviceData = await tagService.addTag(tagData);
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
 * @api {get} /tag/get-tag-item 获取标签内容
 * @apiName 获取标签内容
 * @apiGroup 标签(tag)
 * @apiDescription  返回标签信息
 * @apiVersion  1.0.0
 * 
 * @apiParam {String} tagId='1'  标签标题
 * @apiParamExample  {type} Request-Example:
 * {
 *     tagId:"第一次发标签",
 * }
 * 
 * @apiSuccess {Number} code 200
 * @apiSuccess {Object} data 标签信息
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
tagRouter.post('/get-tag-item', async (ctx) => {
  let returnData = { code: "200", msg: "获取成功", data: "" };
  let tagData = ctx.request.body;
  try {
    //执行业务
    let serviceData = await tagService.getTagItem(tagData);
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
 * @api {get} /tag/get-all-tag 获取所有标签
 * @apiName 获取所有标签
 * @apiGroup 标签(tag)
 * @apiDescription  返回标签信息
 * @apiVersion  1.0.0
 * 
 * @apiParamExample  {type} Request-Example:
 * {
 * }
 * 
 * @apiSuccess {Number} code 200
 * @apiSuccess {Object} data 标签信息
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
tagRouter.get('/get-all-tag', async (ctx) => {
  let returnData = { code: "200", msg: "发布成功", data: "" };
  let tagData = ctx.request.body;
  try {
    //执行业务
    let serviceData = await tagService.getAllTag(tagData);
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
 * @api {get} /tag/get-tag-page 分页标签
 * @apiName 分页标签
 * @apiGroup 标签(tag)
 * @apiDescription  返回标签列表
 * @apiVersion  1.0.0
 * 
 * @apiParamExample  {type} Request-Example:
 * {
 *     page:1,
 *     limit:10,
 * }
 * 
 * @apiSuccess {Number} code 200
 * @apiSuccess {Object} data 标签信息
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
tagRouter.get('/get-tag-page', async (ctx) => {
  let returnData = { code: "200", msg: "获取成功", data: "" };
  let tagData = ctx.request.query;
  console.log("***********************");
  console.log(tagData.page);
  console.log(tagData.limit);
  try {
    //执行业务
    let serviceData = await tagService.getTagPage(tagData);
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
 * @api {get} /tag/get-tag-length 获取数据库标签数量
 * @apiName 标签数量
 * @apiGroup 标签(tag)
 * @apiDescription  返回标签数量
 * @apiVersion  1.0.0
 * 
 * @apiParamExample  {type} Request-Example:
 * {
 * 
 * }
 * 
 * @apiSuccess {Number} code 200
 * @apiSuccess {Object} data 标签信息
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
tagRouter.get('/get-tag-length', async (ctx) => {
  let returnData = { code: "200", msg: "获取成功", data: "" };
  let tagData = ctx.request.query;
  console.log("******************************************************");
  try {
    //执行业务
    let serviceData = await tagService.getTagLength();
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

module.exports = tagRouter;