module.exports = {
    async gamePass({level}){
        console.log(level)
        return await wx.cloud.callFunction({
            name: 'game',
            data: {
                type: "gamePass",
                level
            }
        }).then(res => res.result)
    },
    async getGameInfo(){
        return await wx.cloud.callFunction({
            name: 'game',
            data: {
                type: "getGameInfo"
            }
        }).then(res => res.result)
    }
}