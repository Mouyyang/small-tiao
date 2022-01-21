module.exports = {
    async getSimpleInfo(){
        return await wx.cloud.callFunction({
            name: 'stadium',
            data: {
                type: "getSimpleInfo"
            }
        }).then(res => res.result)
    },
    async getInfo({id = -1} = {}){
        return await wx.cloud.callFunction({
            name: 'stadium',
            data: {
                type: "getInfo",
                id
            }
        }).then(res => res.result)
    }
}