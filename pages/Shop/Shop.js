// pages/Shop/Shop.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "swiperList": [],
    "category":[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.productApi.slideInfo({
      size: 2
      })
      .then(res=>{
        this.setData({swiperList:res.data})
      console.log(res)
      }).catch(res=>{
      console.log(res)
      })

      wx.productApi.homeInfo()
      .then(res=>{
        this.setData({category:res.data})
        console.log(res)
      }).catch(res=>{
        console.log(res)
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
  search(){
    wx.navigateTo({
      url: "/pages/Shop/Search/Search"
    })
  },
  more(){
    wx.navigateTo({
      url: "subordinate/classify"
    })
  },
  toDetail(e){
    wx.navigateTo({
      url: `/pages/Shop/Detail/Detail?id=${e.currentTarget.dataset.id}`
    })
  }
})
