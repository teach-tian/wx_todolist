//logs.js
const util = require('../../utils/util.js')
var app=getApp(); //全局app实例
Page({
  data: {
    info:'hello word!',

id:1,
foo:'orange',

arr:[1,2,3,4,5,6,'hello'],

array:[{name:'appale'},{name:'banana'}],
val:'',
obj:{firstName:'张',lastName:'三'},
list:[]


  },
  getinfo(){
    app.globalData.fn();
  },
  onLoad: function () {


    console.log(app.globalData.msg)
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },
  getval(e){
    // console.log(e.detail.value)

    this.setData({ val: e.detail.value})

},

imageErr: function(e) { //  图片加载错误
  console.log("图片加载错误")
  console.log(e);
},
imageLoad: function(e) { //  图片加载完成
  console.log("图片加载完成")
  console.log(e);
},


add(){
  
    var data1 = this.data.list;

    data1.push(this.data.val)

    this.setData({list:data1,val:''})

},

del(e){
    // console.log(e.target.dataset.index)

    var i = e.target.dataset.index;

    var data2 = this.data.list;

    data2.splice(i,1)

    this.setData({list:data2})

},


})
