let faris = [
    {
        id: '1',
        poster: 'https://job.nmbys.cn/attachment/university/adv/d4/1d/0d8ae58b7295b5367fa5b035a66b852a.png',//海报地址
        unitNum: 1123,
        positionNum: 1222,
        focusNum: 11234,
        title: '湖南2019年授课毕业生专场招聘会',
        start: '2019-11-11',
        end: '2020-11-11',
        organizer: '湖南省就业指导中心',
        coSponsor: '湖南科技公司',
        unitList: [
            {
                id: '1',
                name: '测试测试测试测试测试测试呃呃得到的得到dd公司',
                positions: [
                    {
                        id: '1',
                        name: '初级测试',
                        money: '1000-2000'
                    }, {
                        id: '2',
                        name: '中级测试',
                        money: '2000-4000'
                    }, {
                        id: '3',
                        name: '高级测试',
                        money: '4000-8000'
                    }, {
                        id: '4',
                        name: '特级测试',
                        money: '1-20000'
                    }, {
                        id: '5',
                        name: '甲方',
                        money: '20000-30000'
                    }
                ]
            },
            {
                id: '2',
                name: '测试公司2',
                positions: [
                    {
                        id: '1',
                        name: '初级测试',
                        money: '1000-2000'
                    }, {
                        id: '2',
                        name: '中级测试',
                        money: '2000-4000'
                    }, {
                        id: '23',
                        name: '高级测试',
                        money: '4000-8000'
                    }, {
                        id: '24',
                        name: '特级测试',
                        money: '1-20000'
                    }, {
                        id: '25',
                        name: '甲方',
                        money: '20000-30000'
                    }
                ]
            }

        ]
    }
]

export function getDataById(id) {
    return faris.find(p => p.id == id);
}