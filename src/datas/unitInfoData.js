let introText = [
  `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;睿德教育成立于2009年,是一家致力于小初高K12教育的培训机构，多年来，秉承着睿德人作为教育者的初心——“一百年只为做好一件事，让优秀的孩子更优秀”，全心全意做教育。</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;作为一家品牌教育机构，睿德教育拥有专业的教学服务体系、强大的师资教研团队，同时积极加强与省内外知名院校及教育研究院合作，及时了解最新中高考动态，把握命题方向。成立九年以来，先后帮助万余名学员顺利升学，考入理想学府，得到了广大家长和社会各界人士的广泛赞誉！</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;睿德教育旗下小学项目、中高考个性化一对一、励优精品小班组教学、励优大班组教学、高考项目等作为主流业务领跑包头市场。中高考研究院、家庭教育研究与指导中心、学业规划指导中心的建立，为全方位帮助学生成长提供了有力支撑，形成了业内良好的教育市场口碑。</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp睿德教育正以雄壮的姿态屹立于包头教育培训的前沿，截至今日，已拥有十一家分校，学业生涯规划院，领冠英语等多个子品牌，在职员工300余人，占地面积逾7000平米，睿德已经发展成为综合性的大型教育培训基地。展望未来，睿德教育绝不止步于现有的成就，让更多的学员受益于优质的课堂，让更多的家长受益于优质的教学服务，让更多的家庭受益于优质的教育资源，我们致力于更全方位地给家长和学生提供服务，这是睿德人的使命。</p>`

];

let unitInfos = [
    {
        id:'1',
        logo:'',
        name:'小区超市集团',
        industry:'批发和零售业',//行业
        type:'民营企业',//单位性质
        scale:'0-50人',//单位规模
        homePage:'www.baidu.com',//单位网址
        introduction:''
    },
    {
        id:'2',
        logo:'',
        name:'世界石油化工联合集团',
        industry:'采矿业',
        type:'国有企业',
        scale:'50000人以上',
        homePage:'www.baidu.com',
        introduction:''
    },
    {
        id:'3',
        logo:'',
        name:'新世纪英语',
        industry:'教育',
        type:'教育/科研/咨询/法律类',
        scale:'1000-2000',
        homePage:'www.baidu.com',
        introduction:introText[0]
    },
    {
        id:'4',
        logo:'',
        name:'中国人寿保险',
        industry:'保险',
        type:'国有企业',
        scale:'3000',
        homePage:'',
        introduction:''
    }
]

export function getUnitInfo(id) {
    return unitInfos.find(info=>info.id==id);
}