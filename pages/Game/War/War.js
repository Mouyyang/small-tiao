// pages/Game/SelectWar/game1-1.js
Page({
    data: {
        showPop: false,
        animationData: {},
        isIntroduceShow: false,
        currentIndex: 0,
        currentImage: "",
        choices: [],
        choiceIndex: 0,
        currentIntroduce: "",
        isSuccess: false,
        tip: "失败",
        warData: [],
        viewHeight: 0,
        viewWidth: 0,
        showTip: false,
        item: 0,
        game: 0,
        itemNumber: 0,
        gameData: [
            // 游戏1
            [
                // 第一关
                [
                    {
                        "type": "image",
                        "image": "cloud://cloud1-9g0ua85lf5864afc.636c-cloud1-9g0ua85lf5864afc-1309106846/game/1/图片0.jpg",
                        "choice": [
                            {
                                "text": "下一步",
                                "cb": function () {
                                    this.next()
                                }
                            }
                        ]
                    },
                    {
                        "type": "introduce",
                        "content": "我核心纵队占领遵义，遵义以北的娄山关、桐梓、松坎镇一线为红一军团，红九军团在绥阳附近，红五军团在团溪镇附近，红三军团在遵义以南，以上四个军团构成了保卫遵义的完整防线",
                    },
                    {
                        "type": "introduce",
                        "content": "国军方面有七股势力",
                    },
                    {
                        "type": "image",
                        "image": "cloud://cloud1-9g0ua85lf5864afc.636c-cloud1-9g0ua85lf5864afc-1309106846/game/1/图片1.jpg",
                        "choice": [
                            {
                                "text": "下一步",
                                "cb": function () {
                                    this.next()
                                }
                            }
                        ]
                    },
                    {
                        "type": "introduce",
                        "content": "在我军周边是贵州军阀王家烈的黔军，在乌江南岸薛岳的八个师已占领贵阳，其前锋已进逼乌江，在今天的都匀一代为广东广西的联军，在乌江以东的湘黔边界有湘军四个师正在努力修筑碉堡防线，地图再往北蒋介石的上官云相部2个师正在随时朝重庆开进准备随时加入对我军的战斗。四川方面川军大致出动了四个旅已经占据了进入四川的各个要道，且有重兵防守长江一线，其可谓不惜血本的在江面上布置了大量舰队，云南方面五个团的滇军正在加紧修筑横江防线，在毕节附近有滇军三个旅，云南腹地也有大量防守部队，所以当时敌我双方的形式大致是这样的 ：北有长江天堑，东有乌江天险及湘军堡垒线，南有薛岳大军、西有川、滇防守兵团，四周有黔军团团围困且我军兵力三万敌军大约四十万",
                    },
                    {
                        "type": "image",
                        "image": "cloud://cloud1-9g0ua85lf5864afc.636c-cloud1-9g0ua85lf5864afc-1309106846/game/1/图片2-no.png",
                        "choice": [
                            {
                                "text": "下一步",
                                "cb": function () {
                                    this.next()
                                }
                            }
                        ]
                    },
                    {
                        "type": "introduce",
                        "content": "我军还有两个亲戚，第一个是红二、六军团，此时他们正在湘西一带但兵力不多，第二个是红四方面军在川、陕边界，据说有10万人的兵力。并且蒋介石准备做出如下计划：\n" +
                            "湘军构成东部防线并派一部西进，防止我们过乌江。部分黔军紧守赤水河一线，黔军主力与薛岳一起准备进攻遵义\n" +
                            "所以我们当时有且只有三个战略选择",
                    },
                    {
                        "type": "image",
                        "image": "cloud://cloud1-9g0ua85lf5864afc.636c-cloud1-9g0ua85lf5864afc-1309106846/game/1/图片2-no.png",
                        "choice": [
                            {
                                "text": "找一个地方稳定下来，发展成根据地",
                                "cb": function () {
                                    this.next()
                                }
                            },
                            {
                                "text": "去找红二、六军团",
                                "cb": function () {
                                    this.next()
                                }
                            },
                            {
                                "text": "去找红四方面军",
                                "cb": function () {
                                    this.next()
                                }
                            }
                        ]
                    },
                    {
                        "type": "introduce",
                        "content": "由于兵力悬殊并且第一次反围剿的教训还在提醒我们，在这种情况下固守根据地是不可能的，且因为红二、六兵团兵力不多，所以最好的选择是去找红四方面军",
                    },
                    {
                        "type": "image",
                        "image": "cloud://cloud1-9g0ua85lf5864afc.636c-cloud1-9g0ua85lf5864afc-1309106846/game/1/图片2.jpg",
                        "choice": [
                            {
                                "text": "下一步",
                                "cb": function () {
                                    this.next()
                                }
                            }
                        ]
                    },
                    {
                        "type": "introduce",
                        "content": "红四方面军派兵南下，调动川军北上。根据现在的情况，你可以选择",
                    },
                    {
                        "type": "image",
                        "image": "cloud://cloud1-9g0ua85lf5864afc.636c-cloud1-9g0ua85lf5864afc-1309106846/game/1/图片2.jpg",
                        "choice": [
                            {
                                "text": "从水流较缓的泸州-宜宾段渡过长江",
                                "cb": function () {
                                    this.setData({
                                        isSuccess: true
                                    })
                                    this.next()
                                }
                            },
                            {
                                "text": "从綦江方向渡江",
                                "cb": function () {
                                    this.setData({
                                        isSuccess: false
                                    })
                                    this.next()
                                }
                            }
                        ]
                    },
                    {
                        "type": "introduce",
                        "content": ["红二、红六派一部往川东南活动调动川军往东，而我军则前出至赤水河，占领赤水县城，从水流较缓的泸州-宜宾段渡过长江，如果渡江不顺利，则转至金沙江，而后沿着四川西部边缘的山地北上", "这一段水流较急，渡江不太方便，且重庆为敌重镇兵力雄厚即便我们从这里渡过了长江马上直面我们的是坦坦荡荡的四川盆地，危险系数实在是太高了，所以不宜做出这个选择"]
                    },
                    {
                        "type": "end"
                    }
                ],
                // 第二关
                [
                    {
                        "type": "image",
                        "image": "cloud://cloud1-9g0ua85lf5864afc.636c-cloud1-9g0ua85lf5864afc-1309106846/game/1/图片3.jpg",
                        "choice": [
                            {
                                "text": "下一步",
                                "cb": function () {
                                    this.next()
                                }
                            }
                        ]
                    },
                    {
                        "type": "introduce",
                        "content": "红一军团按照计划攻下土城，猿猴场（今元厚），随即兵分两路，朝赤水县城推进，我核心纵队红五军团到达土城，红九军团进占习水，随即沿着鳛水山谷前进，准备协助夺取赤水县城，红三军团在大队左侧前进，跟进的黔军随即占领遵义-娄山关-松坎一线",
                    },
                    {
                        "type": "image",
                        "image": "cloud://cloud1-9g0ua85lf5864afc.636c-cloud1-9g0ua85lf5864afc-1309106846/game/1/图片4.jpg",
                        "choice": [
                            {
                                "text": "下一步",
                                "cb": function () {
                                    this.next()
                                }
                            }
                        ]
                    },
                    {
                        "type": "introduce",
                        "content": "占领赤水县城的攻击并不顺利，红一军团两个师，分别在复兴场与旺隆场与川军陷入对峙，九军团在箭滩遭遇川军，交战不利，向后撤退，并准备向一军团靠拢，敌人一个团已经占领了习水",
                    },
                    {
                        "type": "introduce",
                        "content": "占领赤水县城的攻击并不顺利，红一军团两个师，分别在复兴场与旺隆场与川军陷入对峙，九军团在箭滩遭遇川军，交战不利，向后撤退，并准备向一军团靠拢，敌人一个团已经占领了习水",
                    },
                    {
                        "type": "image",
                        "image": "cloud://cloud1-9g0ua85lf5864afc.636c-cloud1-9g0ua85lf5864afc-1309106846/game/1/图片5.jpg",
                        "choice": [
                            {
                                "text": "下一步",
                                "cb": function () {
                                    this.next()
                                }
                            }
                        ]
                    },
                    {

                        "type": "introduce",
                        "content": "背后的川军已经压了上来\n" +
                            "此时决定：",
                    },
                    {
                        "type": "image",
                        "image": "cloud://cloud1-9g0ua85lf5864afc.636c-cloud1-9g0ua85lf5864afc-1309106846/game/1/图片5.jpg",
                        "choice": [
                            {
                                "text": "全军向前突击",
                                "cb": function () {
                                    this.setData({
                                        isSuccess: true
                                    })
                                    this.next()
                                }
                            },
                            {
                                "text": "阻击前来支援的敌军",
                                "cb": function () {
                                    this.setData({
                                        isSuccess: true
                                    })
                                    this.next()
                                }
                            }
                        ]
                    },
                    {

                        "type": "introduce",
                        "content": "因为前方已经陷入了拉锯战一时无法决出胜负，所以应该利用青冈坡地形的优势（这个地形周围有两个高地是适合打伏击的，而且根据我们的情报显示这一路川军只有3-4个团）集中红三红五两个军团在青冈坡伏击这一路川军，只要打破这一路情况即可好转",
                    },
                    {
                        "type": "end"
                    }
                ],
                // 第三关
                [
                    {
                        "type": "image",
                        "image": "cloud://cloud1-9g0ua85lf5864afc.636c-cloud1-9g0ua85lf5864afc-1309106846/game/1/图片5.jpg",
                        "choice": [
                            {
                                "text": "下一步",
                                "cb": function () {
                                    this.next()
                                }
                            }
                        ]
                    },
                    {
                        "type": "introduce",
                        "content": "可事情出现了意外，我们的情报有误，这一路川军不是3-4个团，而是6个团，而且这只川军没有从谷底走，而是往山上的制高点去了，于是一场伏击战变成了争夺制高点的拉锯战和消耗战，更危险的是还有川军正赶来支援，战况越来越焦灼，川军几乎都快打到土城了（而我核心领导层基本都在土城）于是朱总司令亲自上前线指挥，于是在全军用命的情况下，我们打退了川军的进攻，等到了回援的红一军2师，战斗陷入对峙",
                    },
                    {
                        "type": "image",
                        "image": "cloud://cloud1-9g0ua85lf5864afc.636c-cloud1-9g0ua85lf5864afc-1309106846/game/1/图片5.jpg",
                        "choice": [
                            {
                                "text": "全军向前突击",
                                "cb": function () {
                                    this.next()
                                }
                            },
                            {
                                "text": "启用备用计划：渡过金沙江",
                                "cb": function () {
                                    this.next()
                                }
                            }
                        ]
                    },
                    {
                        "type": "introduce",
                        "content": "战斗陷入对峙状态对我们是不利的，赤水县城以及鳛水河谷的敌军如果南下，同时叙永一线的敌军迂回我们背后，整个局势就危险了，所以此时决策：不能再打下去了，占领赤水县城北渡长江的计划已经无法实现，启用备用计划：准备渡过金沙江。于是我军发布命令：全军渡过赤水河朝金沙江前进。想要北渡金沙江首先要占领一个重要的据点：叙永，可我们刚刚经历了土城大战，根本无力再战，所以叙永一直没有拿下，北出金沙江的计划也无法实现，无奈之下我们朝着川滇黔的边界地带-扎西前进，敌人也很快围了上来，在扎西周围形成新的包围圈"
                    },
                    {
                        "type": "image",
                        "image": "cloud://cloud1-9g0ua85lf5864afc.636c-cloud1-9g0ua85lf5864afc-1309106846/game/1/图片6.jpg",
                        "choice": [
                            {
                                "text": "下一步",
                                "cb": function () {
                                    this.setData({
                                        isSuccess: true
                                    })
                                    this.next()
                                }
                            }
                        ]
                    },
                    {
                        "type": "introduce",
                        "content": "战役已经结束"
                    },
                    {
                        "type": "end"
                    }
                ]
            ],
            // 游戏2
            [
            ]
        ]
    },
    onLoad(options){
        console.log(options.game, options.item)
          this.setData({
              item: options.game,
              game: options.item,
              itemNumber: options.itemNumber,
              warData: this.data.gameData[options.game][options.item]
          })
    },
    onReady() {
        this.setData({
            showTip: false,
            currentIndex: 0
        })
        this.next()
    },
    dealImage(){
        let currentInfo = this.data.warData[this.data.currentIndex];
        this.updateViewWidthAndHeight(currentInfo.image)
        this.setData({
            currentImage: currentInfo.image,
            isIntroduceShow: false,
            currentIndex: this.data.currentIndex + 1
        })
        console.log(this.data.currentImage)
        this.dealChoices(currentInfo)
    },
    dealChoices(currentInfo){
        this.setData({
            choices: []
        })
        if (currentInfo.choice){
            this.setData({
                choices: currentInfo.choice
            })
        }
    },
    interval: null,
    dealIntroduce(){
        let currentInfo = this.data.warData[this.data.currentIndex];
        this.setData({
            isIntroduceShow: true,
            currentIndex: this.data.currentIndex + 1,
            currentIntroduce: typeof currentInfo.content == 'string' ? currentInfo.content : currentInfo.content[this.data.choiceIndex],
            interval: setInterval(()=>{
                this.next()
            },5000)
        })
    },
    clearIntroduceInterval(){
        clearInterval(this.data.interval)
        this.setData({
            interval: null
        })
    },
    next(){
        if (this.data.interval){
            this.clearIntroduceInterval()
        }
        console.log(this.data.currentIndex)
        switch (this.data.warData[this.data.currentIndex].type) {
            case "image":
                this.dealImage()
                break
            case "introduce":
                this.dealIntroduce()
                break
            case "end":
                this.dealEnd()
                break
        }
    },
    nextLevel(){
        wx.redirectTo({
            url: `/pages/Game/War/War?game=${this.data.item}&item=${parseInt(this.data.game) + 1}&itemNumber=${this.data.itemNumber}`
        })
    },
    dealEnd(){
        let successChoice = [
            {
                "text": "退出通关",
                "cb": function () {
                    wx.navigateBack({
                        delta: 1
                    })
                }
            }
        ]
        if (this.data.game < this.data.itemNumber - 1){
            successChoice.push({
                "text": "下一关",
                "cb": function () {
                    this.nextLevel()
                }
            })
        }
        let failChoice = [
            {
                "text": "退出通关",
                "cb": function () {
                    wx.navigateBack({
                        delta: 1
                    })
                }
            },
            {
                "text": "继续尝试",
                "cb": function () {
                    this.onReady()
                }
            }
        ]
        this.setData({
            isIntroduceShow: false,
            choices: this.data.isSuccess ? successChoice : failChoice,
            showTip: true,
            tip: this.data.isSuccess ? "成功" : "失败"
        })
        // 上报游戏通关信息
        this.uploadSuccess()
    },
    updateViewWidthAndHeight(url){
        wx.getSystemInfo({
            success: res => {
                this.setData({
                    viewHeight: res.windowHeight,
                    viewWidth: res.windowWidth/2,
                    imgSrc: url
                })
            }
        })
    },
    callFunc(event){
        let index = event.currentTarget.dataset.choiceIndex;
        this.setData({
            choiceIndex: index
        })
        this.data.choices[index].cb.call(this)
    },
    uploadSuccess(){
        wx.gameApi.gamePass({
            level: parseInt(this.data.game),
            item: parseInt(this.data.item)
        }).then(res=>{
            console.log(res)
        })
    },
    back(){
        wx.navigateBack({
            delta: 1
        })
    }
})
