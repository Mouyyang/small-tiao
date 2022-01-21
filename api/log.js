module.exports = {
    async login(){
        let id = ''
        return new Promise((resolve,reject)=>{
            wx.getUserProfile({
                desc: "获取用户信息",
                success: (res) => {
                  id = res.cloudID
                  resolve()
                },
                error(res){
                    console.log(res)
                }
            })
        }).then(function(){
            return wx.cloud.callFunction({
                name: 'log',
                data: {
                    type: "login",
                    userInfo: wx.cloud.CloudID(id)
                }
            }).then(res => res.result)
        })
    }
}