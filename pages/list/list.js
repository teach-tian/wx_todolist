// pages/list/list.js
let app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
   listData:[],//数据列表
   isPage:false,//false第一页
   type:'pop',
   page:1,
   loading:false,//上拉开个 false-->开
   noMore:false,//没有更多数据
   loadingFailed:false,//加载失败
   showBackTop: true, //默认隐藏 返回顶部按钮
   showTabControl: true,
   topPosition:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
      // .scrollOffset((res) => {
      //   console.log(res);

      //   // this.setData({
      //   //   scrollTop: event.detail.scrollTop,
      //   //   offsetTop: res.top,
      //   // });
      // })
    
    this.getData(this.data.isPage);
  },
  //到达底部
  scrollToLower: function (e) {
    if (!this.data.loading&&!this.data.noMore){
      this.setData({
        loading: true,
        page: this.data.page + 1
      })
      this.getData(true);
    }
},
  //请求数据
  getData(isPage) {
    console.log("需要拼接数据：",);
    let params = {
      type:this.data.type,
      page:this.data.page}
    //请求
    // Network.pageData(params,(res,err)=>{
    //   if (isPage) {
    //       //下一页的数据拼接在原有数据后面
    //       this.setData({
    //         listData: this.data.listData.concat(res.result)
    //       })
    //     } else {
    //       //第一页数据直接赋值
    //       this.setData({
    //         listData: res.result
    //       })
    //     }
    // })
    app.http.list(params).then(res=>{
      console.log(res);
      let {list}=res.data.data;
      console.log(list);
      if(res.statusCode==200){
        this.setData({
          loading: false
        })
        if (isPage) {
                //下一页的数据拼接在原有数据后面
                this.setData({
                  listData: this.data.listData.concat(list)
                })
              } else {
                //第一页数据直接赋值
                this.setData({
                  listData: list
                })
              }
  
                      //如果返回的数据为空，那么就没有下一页了
          if (list.length == 0) {
            this.setData({
              noMore: true
            })
          }
      }else{
        this.setData({
          loadingFailed: true
        })
      }
     

    }).catch(err=>{
      this.setData({
        loadingFailed: true
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

  },
  onBackTop() {
    // wx.pageScrollTo({
    //   scrollTop: 0,
    //   duration: 0
    // })
    this.setData({
      showBackTop: true,
      topPosition: 0
    })
  },
  scrollPosition(e) {
    // 1.获取滚动的顶部
    const position = e.detail.scrollTop;
   console.log(position)
    // 2.设置是否显示
    if(position>1000){
      this.setData({
        showBackTop: false,
      })
    }else{
      this.setData({
        showBackTop: true,
      })
    }

    

    let query=wx.createSelectorQuery()//创建节点查询器
    query.select('.xiding').boundingClientRect()//通过节点插叙器，获取指定节点，调用api
    query.exec((rect) => {  //在回调函数中，获取查询器的相关数据 []
      const show = rect[0].top > 0
      // console.log(rect[0].width)
      this.setData({
        showTabControl: show
      })
    })
  },
  //跳转详情页
  go(e){
    console.log(e);
    let iid=e.target.dataset.id;
    wx.navigateTo({
      url: `/pages/my/my?id=${iid}`,
    })
  }

})