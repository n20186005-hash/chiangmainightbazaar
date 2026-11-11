// Editorial description of the *kind* of manager responsible for each stop.
// Do not invent a named operator for individual private markets or businesses.
type Three = [string,string,string];
const mixed:Three = [
 'ย่านไนท์บาซาร์เชียงใหม่ไม่ได้อยู่ภายใต้ผู้จัดการสถานที่รายเดียว ถนนและพื้นที่สาธารณะอยู่ในความรับผิดชอบของหน่วยงานท้องถิ่น ส่วนร้านค้า ศูนย์อาหาร และตลาดภายในอาคารมีผู้ประกอบการดูแลแยกกัน ผู้เดินทางควรสอบถามแต่ละร้านสำหรับเวลาเปิดและบริการ',
 'Chiang Mai Night Bazaar is a district, not a single venue with one operator. Local authorities oversee public streets and spaces, while shops, food courts and individual market premises have their own operators. Confirm opening times and services with the relevant business.',
 '清迈夜市是一片商业街区，并非由单一机构统一经营。公共道路与空间由当地主管部门负责，各店铺、美食广场及市场建筑则分别运营。具体营业时间和服务以相关商家为准。'
];
const publicSpace:Three = [
 'ถนนและพื้นที่สาธารณะเป็นส่วนหนึ่งของโครงข่ายเมืองเชียงใหม่ หน่วยงานท้องถิ่นรับผิดชอบการดูแลพื้นที่สาธารณะ ส่วนร้านค้าริมทางบริหารแยกกัน การจัดกิจกรรมอาจมีผู้ประสานงานเฉพาะงาน',
 'This street or public area belongs to Chiang Mai’s urban network. Local authorities maintain public space, while adjoining businesses operate independently. Events may have separate organizers.',
 '这里属于清迈城市公共道路或公共空间体系，由地方主管部门负责公共区域维护；沿线商户独立经营，临时活动可能另有主办单位。'
];
const venues: Record<string,Three> = {
 'anusarn-market':['ตลาดอนุสารเป็นพื้นที่ตลาดและร้านอาหารที่ผู้ประกอบการภายในดูแล ไม่ควรนำการจัดการของแผงริมถนนช้างคลานมารวมเป็นหน่วยงานเดียว เวลาเปิดของแต่ละร้านอาจต่างกัน','Anusarn is a defined market-and-dining area with businesses and premises managed within that venue. It should not be treated as the same operator as every roadside stall on Chang Khlan. Vendor hours vary.','阿努珊市场是相对集中的市场与餐饮场所，由场内经营方和商户分别负责，不能与昌堪路所有路边摊视为同一运营主体。各店营业时间可能不同。'],
 'kalare-market':['กาแลไนท์บาซาร์เป็นพื้นที่ศูนย์อาหารและการค้าซึ่งมีผู้ดำเนินงานสถานที่และร้านค้าแยกจากแผงริมถนน ตรวจตารางกิจกรรมกับสถานที่โดยตรง','Kalare Night Bazaar is a distinct food-and-retail complex with premises and tenants operating separately from the street market. Check any entertainment schedule with the venue itself.','Kalare 夜市属于独立的餐饮与零售场所，场地与商户的运营不同于沿街摊位。演出安排应直接向该场所确认。'],
 'tha-phae-gate':['ประตูท่าแพเป็นโบราณสถานของเมืองเชียงใหม่ที่เกี่ยวข้องกับการอนุรักษ์โดยกรมศิลปากร ขณะที่ลานและพื้นที่ใช้งานสาธารณะรอบประตูเกี่ยวข้องกับเทศบาลนครเชียงใหม่ การจัดงานและการเข้าถึงอาจมีข้อกำหนดต่างกัน','Tha Phae Gate is a historic monument connected with Thailand’s Fine Arts Department for heritage conservation. Chiang Mai Municipality is involved in the surrounding public plaza. Event and access arrangements may differ.','塔佩门是清迈历史遗迹，文物保护与泰国艺术厅相关；城门周围的公共广场则涉及清迈市政府管理。活动安排和通行规则可能分别适用。'],
 'warorot-market':['ตลาดวโรรสหรือกาดหลวงเป็นอาคารตลาดที่มีผู้บริหารตลาดและร้านค้าภายในดูแล แยกจากการจัดการถนนและตลาดดอกไม้ใกล้เคียง','Warorot (Kad Luang) is a managed market building with its own operator and tenants, separate from the nearby public streets and flower-market businesses.','瓦洛洛市场（Kad Luang）有其市场经营管理方和场内商户，与周边公共道路及花市并非同一个管理单位。'],
 'wat-buppharam':['วัดบุพพารามเป็นศาสนสถานที่ยังประกอบศาสนกิจ การใช้พื้นที่และการเข้าชมอยู่ภายใต้การดูแลของคณะสงฆ์และวัด โปรดเคารพกติกาของวัด','Wat Buppharam is an active Buddhist temple. Its religious grounds and visitor conduct are overseen by the temple’s monastic community; follow posted temple rules.','布帕兰寺是仍在使用的佛教寺院，宗教场所与参观秩序由寺院僧团管理。参观时应遵守寺方规定。'],
 'sunday-walking-street':['ถนนคนเดินวันอาทิตย์เป็นกิจกรรมตลาดบนถนนราชดำเนินในพื้นที่สาธารณะ การประสานงานพื้นที่และข้อกำหนดการจัดตลาดเกี่ยวข้องกับเทศบาลนครเชียงใหม่ ไม่ใช่ผู้ประกอบการไนท์บาซาร์ช้างคลาน','Sunday Walking Street is an event on public streets around Ratchadamnoen, coordinated under Chiang Mai’s municipal arrangements rather than run as a branch of the Chang Khlan Night Bazaar.','周日步行街是拉差丹嫩路公共街道上的定期市集，活动空间与规则涉及清迈市政府的协调，并非昌堪路夜市的分店。'],
 'saturday-walking-street':['ถนนคนเดินวัวลายเป็นตลาดถนนในคืนวันเสาร์ที่มีการประสานงานการใช้พื้นที่สาธารณะและผู้ค้าแยกจากตลาดไนท์บาซาร์','Wua Lai Saturday Walking Street uses public street space with its own event and vendor coordination, separate from Night Bazaar operations.','瓦莱周六步行街使用公共街道举办市集，活动与摊商协调独立于清迈夜市。'],
 'wat-ket-area':['ย่านวัดเกตเป็นชุมชนและถนนริมแม่น้ำปิงหลายส่วน ไม่ใช่สถานที่ขายบัตรที่มีผู้จัดการรายเดียว วัด ร้านค้า และพื้นที่สาธารณะมีหน่วยงานที่รับผิดชอบต่างกัน','Wat Ket is a lived-in riverside neighborhood rather than a ticketed attraction with one operator. Its temple, businesses and public streets have separate caretakers.','瓦杰是一片有人居住的河畔社区，并非有统一管理处的收费景点；寺院、商铺与公共道路分别由不同主体维护。'],
};

const publicSlugs = new Set(['chang-khlan-road','loi-kroh-road','nawarat-bridge','iron-bridge','ping-river-walk','old-city-walk','chiang-mai-gate-market']);
export function managementForGuide(slug:string,lang:string){
 const index = lang==='th'?0:lang==='zh'?2:1;
 return (venues[slug] ?? (publicSlugs.has(slug)?publicSpace:mixed))[index];
}
