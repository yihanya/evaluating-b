
const Router = require("koa-router");
const adminRouter = new Router();
const adminService = require("../service/adminService")
const bodyParser = require('koa-bodyparser');
const logsFile = require("../utile/logs.js").logHandle

//接口
adminRouter.use(bodyParser())
/**
 * 
 * @api {post} /admin/login 管理员登录
 * @apiName 管理员登录
 * @apiGroup 管理员(admin)
 * @apiDescription 登录管理员返回token和管理员信息
 * @apiVersion  1.0.0
 * 
 * @apiParam {String} adminName=''  用户名
 * @apiParam {String} adminPassword=''  密码
 * @apiParam {String} authority=''  权限
 * @apiParamExample  {type} Request-Example:
 * {
 *     adminName:"yihanya",
 *     admin_password:"LYX@2415.",
 *     authority:0,
 * }
 * 
 * @apiSuccess {Number} code 200
 * @apiSuccess {Object} data 管理员信息
 * @apiSuccess {String} msg  登录成功
 * @apiSuccessExample {type} Response-Example:
 * {
 *  code: 200,
 *  msg: "登录成功"
 *  data: {
 *    name: '',
 *    age: '',
 *    sex: '',
 *    ...
 *  }
 * }
 * 
 */
adminRouter.post('/login', async (ctx) => {
  let returnData = { code: "200", msg: "登录成功", data: "" };
  let loginData = ctx.request.body;
  try {
    //执行业务
    let serviceData = await adminService.adminLogin(loginData);
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


module.exports = adminRouter;