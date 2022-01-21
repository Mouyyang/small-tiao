module.exports = {
    async search({key = ''} = {}){
        return await wx.cloud.callFunction({
            name: 'product',
            data: {
                type: "search",
                key
            }
        }).then(res => res.result)
    },
    async slideInfo({size = 5} = {}){
        return await wx.cloud.callFunction({
            name: 'product',
            data: {
                type: "slideInfo",
                size
            }
        }).then(res => res.result)
    },
    async homeInfo(){
        return await wx.cloud.callFunction({
            name: 'product',
            data: {
                type: "homeInfo"
            }
        }).then(res => res.result)
    },
    async getSort(){
        return await wx.cloud.callFunction({
            name: 'product',
            data: {
                type: "getSort"
            }
        }).then(res => res.result)
    },
    async getSortProduct({id} = {}){
        return await wx.cloud.callFunction({
            name: 'product',
            data: {
                type: "getSortProduct",
                id
            }
        }).then(res => res.result)
    },
    async getProductInfo({id} = {}){
        return await wx.cloud.callFunction({
            name: 'product',
            data: {
                type: "getProductInfo",
                id
            }
        }).then(res => res.result)
    },
    async buy({productId, number} = {}){
        return await wx.cloud.callFunction({
            name: 'product',
            data: {
                type: "buy",
                productId,
                number
            }
        }).then(res => res.result)
    },
    async getAllOrder(){
        return await wx.cloud.callFunction({
            name: 'product',
            data: {
                type: "getAllOrder"
            }
        }).then(res => res.result)
    },
    async getOrderInfo({id} = {}){
        return await wx.cloud.callFunction({
            name: 'product',
            data: {
                type: "getOrderInfo",
                id
            }
        }).then(res => res.result)
    }
}