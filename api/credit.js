module.exports = {
    async getCredit(){
        return await wx.cloud.callFunction({
            name: 'credit',
            data: {
                type: "getCredit"
            }
        }).then(res => res.result)
    },
    async getCreditItem(){
        return await wx.cloud.callFunction({
            name: 'credit',
            data: {
                type: "getCreditItem"
            }
        }).then(res => res.result)
    }
}