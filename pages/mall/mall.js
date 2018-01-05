Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        image: "../../resources/IMG_4021.JPG",
        msg: "展示内容",
        title: "标题一",
        id: "1"
      },
      {
        image: "http://html51.com/data/attachment/portal/201705/24/083559vdzddwdlaa96nnlt.jpg",
        msg: "展示内容",
        title: "标题二",
        id: "2"
      },
      {
        image: "http://p0.ifengimg.com/a/2018_01/45a79988e5b4c93_size59_w896_h598.jpg",
        msg: "展示内容",
        title: "标题三",
        id: "3"
      },
      {
        image: "http://static.googleadsserving.cn/pagead/imgad?id=CICAgKDr6cOvWhDKBxj6ATIIHhKdyOqk4Nw",
        msg: "展示内容",
        title: "标题四",
        id: "4"
      },
      {
        image: "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2855062820,2328259604&fm=173&s=1C626982CEB2ACDE1C69B10A0300C0C3&w=550&h=477&img.JPEG",
        msg: "展示内容",
        title: "标题五",
        id: "5"
      }, {
        image: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1094615868,509985425&fm=173&s=5E06176427174E641CA6A9D1030040BB&w=640&h=320&img.JPEG",
        msg: "展示内容",
        title: "标题六",
        id: "6"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  goToCinemaDetailPage: function (e) {
    console.log("========{{e.current}}")
    wx.navigateTo({
      url: '../../pages/mall/mallDetail/mallDetail?name=' + e.currentTarget.dataset.title + "&id=" + e.currentTarget.dataset.id
    })
  }
})