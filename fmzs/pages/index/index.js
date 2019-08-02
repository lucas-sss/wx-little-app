const app = getApp()
Page({
  data: {
    isSelected: false,
    imgUrls: ["http://static.zongheng.com/upload/recommend/bf/d9/bfd932880e339a2f866ab74aee523f05.jpeg", "http://static.zongheng.com/upload/recommend/3d/e1/3de17f75c19809757c843db62ba6cf0d.jpeg", "http://static.zongheng.com/upload/recommend/3e/55/3e55dd278e26e84297dce468d13b7c08.jpeg"],
    array: []
  },
  onLoad: function() {
    //一个页面只会触发一次
    var array = this.initData();
    this.setData({
      array: array
    });
  },
  onShow: function() {
    //每次页面发开触发
  },
  onReady: function() {
    //页面初次渲染完成，一个页面调用一次

  },
  onHide: function() {
    //当navigateTo或者底部Tab切换时调用
    this.setData({
      isSelected: false
    })
  },
  // onPullDownRefresh: function() {
  //   //下拉刷新
  // },
  onShareAppMessage: function() {
    //只有定义次函数，右上角才会显示"分享"按钮，此事件需要return一个object，用于自定义分享内容
    return {
      title: "分享标题",
      desc: "分享描述",
      path: "/pages/bookshelf"
    }
  },
  initData: function() {
    var array = [];

    var obj1 = new Object();
    obj1.id = "1";
    obj1.img = "https://www.biquger.com/files/article/image/67/67198/67198s.jpg";
    obj1.title = "三国新天子";
    obj1.desc = "历史是由胜利者书写的，但事实的真相只有亲历者才知道。作为无意回到了华夏历史当中最波澜壮阔一个时代的现代人...";
    obj1.author = "隐于深秋";
    obj1.finished = true;
    obj1.flag = "历史穿越";
    array[0] = obj1;

    var obj2 = new Object();
    obj2.id = "2";
    obj2.img = "https://www.xbiquge6.com/cover/75/75933/75933s.jpg";
    obj2.title = "九星霸体诀";
    obj2.desc = "是丹帝重生？是融合灵魂？被盗走灵根、灵血、灵骨的三无少年——龙尘，凭借着记忆中的炼丹神术，修行神秘功法九星霸体诀，拨开重重迷雾，解开惊天之局...";
    obj2.author = "平凡魔术师";
    obj2.finished = false;
    obj2.flag = "玄幻奇幻";
    array[1] = obj2;

    var obj3 = new Object();
    obj3.id = "3";
    obj3.img = "http://static.zongheng.com/upload/cover/bd/74/bd742f87bd8c0b06786a72678d4a6ca4.jpeg";
    obj3.title = "我有一个冒险屋";
    obj3.desc = "偶得恐怖系统，它改变了我的人生，每天不断做日常任务，恐怖屋一夜爆红，当我将自古代就传说至今的恐怖禁地移入屋内，系统赠与我的好处变多，可我也因此卷入到了一个...";
    obj3.author = "杨大神";
    obj3.finished = false;
    obj3.flag = "都市生活";
    array[2] = obj3;
    return array;
  },
  goSearch: function() {
    this.setData({
      isSelected: true
    });
    setTimeout(function() {
      wx.navigateTo({
        url: '../search/search',
        success: function(res) {

        },
        complete: function() {

        }
      })
    }, 100);

  },
})