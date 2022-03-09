module.exports = {
    async gamePass({level, item}){
        console.log(level)
        return await wx.cloud.callFunction({
            name: 'game',
            data: {
                type: "gamePass",
                level,
                item
            }
        }).then(res => res.result)
    },
    async getGameInfo({item}){
        return await wx.cloud.callFunction({
            name: 'game',
            data: {
                type: "getGameInfo",
                item
            }
        }).then(res => res.result)
    }
}