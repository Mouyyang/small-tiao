// pages/Game/SelectWar/game1-1.js
Page({
  data: {
      showPop: false,
      animationData: {},
  },
  // 显示遮罩层
  ShowModal() {
      var animation = wx.createAnimation({
          duration: 500,
          timingFunction: 'ease'
      })
      animation.translateY(500).step()
      this.setData({
          animationData: animation.export(),
          showPop: true
      })
      setTimeout(() => {
          animation.translateY(0).step()
          this.setData({
              animationData: animation.export(),
          })
      }, 50)
  },

  // 隐藏遮罩层
  hideModal() {
      var animation = wx.createAnimation({
          duration: 500,
          timingFunction: 'linear'
      })
      animation.translateY(500).step()
      this.setData({
          animationData: animation.export()
      })
      setTimeout(() => {
          animation.translateY(0).step()
          this.setData({
              animationData: animation.export(),
              showPop: false
          })
      }, 400)
  },
})