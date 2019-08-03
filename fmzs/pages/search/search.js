const app = getApp()
Page({
  data: {
    key: "value",
    systemInfo:null,
    inputName: null,
    hotSearchArr:[],
  },
  onLoad: function () {
    //一个页面只会触发一次
    var array = this.initData();
    this.setData({
      hotSearchArr: array,
      systemInfo: app.globalData.systemInfo
    })
  },
  onShow: function () {
    //每次页面发开触发
  },
  onReady: function () {
    //页面初次渲染完成，一个页面调用一次
  },
  onHide: function () {
    //当navigateTo或者底部Tab切换时调用
  },
  onPullDownRefresh: function () {
    //下拉刷新
  },
  onShareAppMessage: function () {
    //只有定义次函数，右上角才会显示"分享"按钮，此事件需要return一个object，用于自定义分享内容
    return {
      title: "分享标题",
      desc: "分享描述",
      path: "/pages/bookshelf"

    }
  },
  /**
   * 输入框搜索
   */
  search: function(){ 
    console.log(this.data.inputName)
    //TODO 
  },
  /**
   * 点击热词搜索
   */
  hotSearch:function(event){
    var searchname = event.currentTarget.dataset.searchname;
    console.log(searchname);
  },
  /**
   * 输入触发
   */
  inputName: function(event){
    this.setData({
      inputName: event.detail.value
    })
  },
  /**
   * 清除搜索框
   */
  clearInput:function(){
    this.setData({
      inputName: null
    })
  },
  initData:function(){
    var array = [];
    var obj1 = new Object();
    obj1.name = "九星霸体诀";
    array[0] = obj1;
    var obj2 = new Object();
    obj2.name = "三国新天子";
    array[1] = obj2;
    var obj3 = new Object();
    obj3.name = "遮天";
    array[2] = obj3;
    var obj4 = new Object();
    obj4.name = "锦衣夜行";
    array[3] = obj4;
    return array;
  },
})