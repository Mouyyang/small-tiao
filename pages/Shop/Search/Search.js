Page({
    data: {
        inputValue: "",
        searchData: [],
        showKeyword: true,
        timeout: null
    },
    onLoad: function (options) {

    },
    clearInputValue(){
        this.setData({
            inputValue: "",
            searchData: []
        })
    },
    onFocus(){
        this.setData({
            showKeyword: true
        })
    },
    search(){
        this.setData({
            showKeyword: false
        })
    },
    inputData(event){
        console.log(event)
        let key = event.detail.value
        if (key === ''){
            this.setData({
                searchData: []
            })
            return
        }
        if (this.data.timeout !== null){
            clearInterval(this.data.timeout)
            this.data.timeout = null
        }
        this.data.timeout = setTimeout(()=>{
            this.catchData(key)
        }, 1000)
    },
    catchData(key){
        wx.productApi.search({
            key
        }).then(res=>{
            console.log(res.data)
            this.setData({
                searchData: res.data
            })
        })
    },
    toDetail(e){
        wx.navigateTo({
            url: `/pages/Shop/Detail/Detail?id=${e.currentTarget.dataset.id}`
        })
    },
    back(){
        wx.navigateBack({
            delta: 1
        })
    }
});
