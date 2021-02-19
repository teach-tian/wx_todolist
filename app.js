//app.js
const http=require('./http/http')
App({
  onLaunch: function () {
    console.log('小程序初始化')
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  onShow: function(options) {
    // 监听小程序显示。小程序启动，或从后台进入前台显示时
    console.log("小程序显示")
  },
  onHide: function() {
    // 监听小程序隐藏。小程序从前台进入后台时。
    console.log("小程序隐藏")
  },
  onError: function(msg) {
    console.log("调用微信api错误")
    console.log(msg) // 错误监听函数。小程序发生脚本错误，或者 api 调用失败时触发，会带上错误信息
  },
  onPageNotFound: function(res) {
    console.log('页面不存在');
    console.log(res)
    // 页面不存在监听函数。小程序要打开的页面不存在时触发，会带上页面信息回调该函数
  },
  globalData: {
    userInfo: null,
    msg:'全局变量',
    fn(){console.log('全局方法')}
  },
  http:http
})