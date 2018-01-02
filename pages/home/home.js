
//获取 APP 实例
const appInstance = getApp

Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: "这是个页面",
    array: [{ msg: '1' }, { msg: '2' }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(appInstance.globalData)
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
    // sent data change to view
    this.setData({
      name: 'MINA'
    })
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
   * 页面滚动触发事件的处理函数
   */
  onPageScroll: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '欢迎推荐阿狸婚纱摄影',
      path: 'pages/mall/mall'
    }
  },

  viewTap: function () {
    console.log("view tap")
  },

  WXScan: function () {
    this.setData({ msg: "Hello World" })
    //微信扫一扫
    wx.scanCode({
      success: (res) => {
        console.log(res)
      }
    })
    //获取位置信息
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        var latitude = res.latitude // 经度
        var longitude = res.longitude // 纬度
      }
    })
    console.log("打印输出")
  },

})