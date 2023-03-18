const utileObj = {}

utileObj.dbArrToObj = (arr) => {
  for (i in arr) {
    arr[i] = arr[i][0];
  }
  return arr;
}
//运行测试
utileObj.startTopic = (startObj) => {
  //startObj.code 代码
  //startObj.topic 题目

  //生成容器文件
  //新建文件夹 时间戳 题目id 用户id
  //保存内存树 时间戳 对应题目 
  //获取运行结果
  //保存记录
  //返回前端
}
utileObj.humpToUnderline = (data) => {
  if (typeof data !== 'object' || !data) return data
  if (Array.isArray(data)) {
    return data.map((item) => utileObj.humpToUnderline(item))
  }

  let newObj = {}
  for (let key in data) {
    let newKey = key.replace(/([A-Z])/g, (res) => {
      return '_' + res.toLowerCase()
    })
    newObj[newKey] = utileObj.humpToUnderline(data[key])
  }
  return newObj
}

module.exports = utileObj