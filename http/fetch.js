//封装wx.request()网络模块

module.exports=(url,method,data)=>{
  let p=new Promise((resolve,reject)=>{
    wx.request({
      url: url,
      method:method,
      data:Object.assign({},data),
      header:{'Content-Type': 'application/text' },
      success(res){
        resolve(res)
      },
      fail(err){
        reject(err)
      }
    })
  })
  return p;
}