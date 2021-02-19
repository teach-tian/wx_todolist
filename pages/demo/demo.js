// pages/demo/demo.js]
//获取全局app实例
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    txt:'',
    arr:[],
    imgList:[]
  },
  msg(e){
   console.log(e.detail.value);
   //如何设置data数据
   this.setData({
     txt:e.detail.value
   })

  },
  add(){
   console.log(this.data.txt) 
   let list=this.data.arr;
   list.push(this.data.txt)
   this.setData({
     arr:list
   })
   console.log(this.data.arr);
   this.setData({
    txt:''
  })

  },
  remove(e){
    let _id=e.target.dataset.index;
    let list=this.data.arr;
    list.splice(_id,1);
    this.setData({
      arr:list
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    wx.setStorageSync('key', 'token')
      // let that=this;
      // wx.request({
      //   url: 'http://123.207.32.32:8000/api/h8/home/multidata',
      //   method:'get',
      //   data:{},
      //   success(res){
      //     console.log(res.data.data.banner.list);
      //     let {data:{data:{banner:{list}}} }=res
      //     console.log(list);
      //     that.setData({
      //       imgList:list
      //     })
      //   }
      // })

      app.http.banner().then(res=>{
          let {data:{data:{banner:{list}}} }=res
          console.log(list);
          this.setData({
            imgList:list
          })
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})