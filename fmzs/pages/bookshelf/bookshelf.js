const app = getApp()
Page({
  data: {
    key:123
  },
  onLoad: function() {
    //一个页面只会触发一次
  },
  onShow: function() {
    //每次页面发开触发
  },
  onReady: function() {
    //页面初次渲染完成，一个页面调用一次
  },
  onHide: function() {
    //当navigateTo或者底部Tab切换时调用
  },
  onPullDownRefresh: function() {
    //下拉刷新
  },
  onShareAppMessage: function() {
    //只有定义次函数，右上角才会显示"分享"按钮，此事件需要return一个object，用于自定义分享内容
    return {
      title:"分享标题",
      desc:"分享描述",
      path:"/pages/bookshelf"

    }
  },
  clickMe:function(){
    console.log("click me")

    this.setData({
      key:789
    })
  }
})