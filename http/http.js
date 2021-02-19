const evn=require('../env/index.js')
const api=require('./api')
const fetch = require('./fetch')


//确定开发环境
let baseUrl=evn.devBaseUrl;
//如果接口需要token鉴权，获取token
let token=wx.getStorageSync('token');

//轮播请求函数
function banner(){
  return fetch(baseUrl+api.banner,'get',{})
}
//list列表函数
function list(obj){
  return fetch(baseUrl+api.list,'get',obj)
}

//分类接口函数

module.exports={
  banner,
  list
}
