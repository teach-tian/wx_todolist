Page({
  onShareAppMessage() {
    return {
      title: 'swiper',
      path: 'page/component/pages/swiper/swiper'
    }
  },

  data: {
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500,
    list:[]
  },
  onLoad(){  //生命周期，钩子函数，加载。。。
    var that=this;
    wx.request({
      url: 'http://123.207.32.32:8000/api/h8/home/multidata', //仅为示例，并非真实的接口地址
      data: {
       
      },
      method:'GET',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        console.log(res.data)
        var arr=res.data.data.banner.list;
        console.log(arr);
        that.setData({list:arr})
      }
    })
    
  },

  changeIndicatorDots() {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },

  changeAutoplay() {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },

  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },

  durationChange(e) {
    this.setData({
      duration: e.detail.value
    })
  }
})