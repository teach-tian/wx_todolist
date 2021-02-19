// components/my-component/my-component.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    msg:{
      type:Array,
      value:[]
    },
    str:String
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    send(){
      this.setData({
        str:'asdfghj'
      })
   },
  }
})
