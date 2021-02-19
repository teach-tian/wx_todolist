//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    list:[{value:"xxx"}],
    msg:''
  },
  //双向绑定
  bindKeyInput: function (e) {
    this.setData({
      msg: e.detail.value
    })
  },
  //添加
  add(e){
    if(this.data.msg.length>0){
      let obj={};
      obj.value=this.data.msg;
      this.data.list.push(obj);
      console.log(this.data.list)
      this.setData({
        list:this.data.list
      })
    }
  },
  del(e){
    console.log(e.currentTarget.dataset);
    let { index } = e.currentTarget.dataset;
    this.data.list.splice(index,1);
    let arr=this.data.list;
    this.setData({
      list:arr
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
