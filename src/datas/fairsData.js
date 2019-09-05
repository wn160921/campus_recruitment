let faris = [
    {
        id:'1',
        unitNums:'1',
        positionNums:'5',
        focusNum:'1',
        title:'湖南2019年授课毕业生专场招聘会',
        start:'2019-11-11',
        end:'2020-11-11',
        organizer:'湖南省就业指导中心',
        coSponsor:'湖南******科技公司',
        unitList:[
            {
                id:'1',
                name:'测试公司',
                positions:[
                    {
                        id:'1',
                        name:'初级测试',
                        money:'1000-2000'
                    },{
                        id:'2',
                        name:'中级测试',
                        money:'2000-4000'
                    },{
                        id:'3',
                        name:'高级测试',
                        money:'4000-8000'
                    },{
                        id:'4',
                        name:'特级测试',
                        money:'1-20000'
                    },{
                        id:'5',
                        name:'甲方',
                        money:'20000-30000'
                    }
                ]
            }

        ]
    }
]

export function getDataById(id) {
    return faris.find(p=>p.id == id);
}