let positionInfo = [
    {
        id:'1',
        unitId:'3',
        name:'小学数学项目负责人',
        money:'2000-3999',
        publishTime:'2019-09-03 10:59',
        scanNum:'25',
        require:{
            city:'内蒙古 - 包头市',
            type:'全职',//职位性质
            experience:'不限',
            major:"不限",
            num:'10',//招聘人数
            education:'不限',
            language:'不限',
            ptype:'教育/科研/咨询/法律类'//职能类别
        },
        description:'年薪百万,马畜弥山'
    },
    {
        id:'3',
        unitId:'3',
        name:'中学语文项目负责人',
        money:'4000-5999',
        publishTime:'2019-09-03 10:59',
        scanNum:'25',
        require:{
            city:'内蒙古 - 包头市',
            type:'全职',//职位性质
            experience:'不限',
            major:"不限",
            num:'10',//招聘人数
            education:'不限',
            language:'不限',
            ptype:'教育/科研/咨询/法律类'//职能类别
        },
        description:'中学语文你值得拥有'
    },
    {
        id:'4',
        unitId:'3',
        name:'大学英语项目负责人',
        money:'8000-9999',
        publishTime:'2019-09-03 10:59',
        scanNum:'25',
        require:{
            city:'天南 - 得到',
            type:'全职',//职位性质
            experience:'不限',
            major:"不限",
            num:'10',//招聘人数
            education:'不限',
            language:'不限',
            ptype:'教育/科研/咨询/法律类'//职能类别
        },
        description:'大学英语,要求开朗大方,能与学生充分互动'
    },
    {
        id:'2',
        unitId:'1',
        name:'会议接待',
        money:'2000-9999',
        publishTime:'2019-09-23 10:59',
        scanNum:'30',
        require:{
            city:'北京 - 北门',
            type:'全职',//职位性质
            experience:'不限',
            major:"不限",
            num:'11',//招聘人数
            education:'不限',
            language:'不限',
            ptype:'酒店/餐饮/旅游/社会服务类'//职能类别
        },
        description:'年薪百万,马畜弥山'
    },
]

export function getUnitAllPosition(unitId) {
    return positionInfo.filter(a=>a.unitId==unitId)
}

export function getPositionInfo(id) {
    return positionInfo.find(p=>p.id==id)
}

export function getMorePositionInfo(id,unitId) {
    return positionInfo.filter(a=>a.id!=id && a.unitId == unitId)
}
