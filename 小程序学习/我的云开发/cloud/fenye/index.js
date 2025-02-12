// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env:cloud.DYNAMIC_CURRENT_ENV
})

// 云函数入口函数
exports.main = async (event, context) => {
 return await cloud.database().collection("number")
 .skip(event.curlen)//分页
 .limit(event.pagenum)//每页加载多少条
 .get()
}