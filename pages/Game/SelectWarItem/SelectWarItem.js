// pages/Game/game1.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        gameIndex: 0,
        depend: [false, true],
        currentDepend: true,
        openList: [],
        openStatus: [],
        warItemData: [
            // 游戏一
            [
                {
                    cover: "cloud://cloud1-9g0ua85lf5864afc.636c-cloud1-9g0ua85lf5864afc-1309106846/photo/gameSelect.jpg",
                    coverOff: "cloud://cloud1-9g0ua85lf5864afc.636c-cloud1-9g0ua85lf5864afc-1309106846/photo/gameSelect-off.jpg",
                    warName: "背景介绍",
                    warIntroduce: "了解战役背景和对战情况"
                },
                {
                    cover: "cloud://cloud1-9g0ua85lf5864afc.636c-cloud1-9g0ua85lf5864afc-1309106846/photo/gameSelect.jpg",
                    coverOff: "cloud://cloud1-9g0ua85lf5864afc.636c-cloud1-9g0ua85lf5864afc-1309106846/photo/gameSelect-off.jpg",
                    warName: "战役开始",
                    warIntroduce: "不知战斗能否像计划中的进行"
                },
                {
                    cover: "cloud://cloud1-9g0ua85lf5864afc.636c-cloud1-9g0ua85lf5864afc-1309106846/photo/gameSelect.jpg",
                    coverOff: "cloud://cloud1-9g0ua85lf5864afc.636c-cloud1-9g0ua85lf5864afc-1309106846/photo/gameSelect-off.jpg",
                    warName: "土城大战",
                    warIntroduce: "临场应变，请做出你的选择"
                }
            ],
            // 游戏二
            [

            ]
        ]
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            gameIndex: parseInt(options.game)
        })
    },
    load(){
        let list = []
        let that = this
        this.getOpenList(this.data.depend[parseInt(this.data.gameIndex)], parseInt(this.data.gameIndex)).then(res=>{
            list = res
            let sta = []
            for (let i = 0; i < that.data.warItemData[that.data.gameIndex].length; i++) {
                sta.push(i in list)
            }
            that.setData({
                openList: list,
                openStatus: sta
            })
        })
    },
    async getOpenList(depend, item) {
        let list = []
        await wx.gameApi.getGameInfo({
            item
        }).then(res=>{
            list = res.data.list
        })
        let complete = false
        await this.dependComplete(item).then(res=>{
            complete = res
        })
        if (list.length >= 1){
            list.push(Math.max.call(null, list) + 1)
        }else if (!depend || complete){
            return [0]
        }else {
            return []
        }
        return list
    },
    async dependComplete(item) {
        if (item === 0) return true
        let list = []
        await wx.gameApi.getGameInfo({
            item: item - 1
        }).then(res => {
            list = res.data.list
        })
        return Math.max.call(null, ...list) + 1 === this.data.warItemData[this.data.gameIndex - 1].length
    },
    //  not depend
    //  null => 0
    //  0 1 => 0 1 2
    //  has depend
    //  null: ok => 0 | not ok => null
    //  0 => 0 1

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        this.load()
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
    entryGame(e) {
        let {gameIndex, item, itemNumber} = e.currentTarget.dataset
        if (!this.data.openStatus[item]) return
        wx.navigateTo({
            url: `/pages/Game/War/War?game=${gameIndex}&item=${item}&itemNumber=${itemNumber}`
        })
    },
    back(){
        wx.navigateBack({
            delta: 1
        })
    }
})
