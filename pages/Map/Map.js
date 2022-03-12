// pages/Map/Map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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

  tap: function(){
    // wx.mapApi.addMap({
      // pattern: "GUIDE",
      // mapList: [1,2,3],
      // memo: "memo"
    // }).then(res=>{
      // console.log(res);
    // })
    // wx.groupApi.addIntoGroup({
      groupId: "1646970095616"
    // }).then(res=>{
      // console.log(res)
    // })
      wx.groupApi.deleteGroupMember({
        id: "54ad1eea6229c86c155acfdf3a12b658",
        removeId: "ooMCS5RKBAm06BLM66u6brl1YNgg"
      }).then(res=>{
        console.log(res);
      })
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

  }
})
