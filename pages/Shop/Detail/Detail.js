Page({
    data: {
        id: '',
        detailInfo: {},
        number: 1
    },
    onLoad: function (options) {
        this.setData({
            id: options.id
        })
        this.catchData()
    },
    catchData(){
        wx.productApi.getProductInfo({
            id: this.data.id
        }).then(res=>{
            this.setData({
                detailInfo: res.data
            })
        })
    },
    decrease(){
        if (this.data.number >= 2){
            this.setData({
                number: this.data.number - 1
            })
        }
    },
    increase(){
        if (this.data.number <= 4){
            this.setData({
                number: this.data.number + 1
            })
        }
    },
    tapBuy(){
        wx.productApi.buy({
            productId: this.data.id,
            number: this.data.number
        }).then(res=>{
            if (res.success) this.resultPage(false)
            else this.resultPage(true, res.msg)
        }).catch(res=>{
            this.resultPage(true, '网路错误')
        })
    },
    resultPage(isFail, msg = ''){
        wx.navigateTo({
            url: `/pages/Shop/PayTips/PayTips?isFail=${isFail}&msg=${msg}`
        })
    },
    back(){
        wx.navigateBack({
            delta: 1
        })
    }
});
