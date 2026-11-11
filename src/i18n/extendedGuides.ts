// Companion guides. Every route has a separate Thai, English and Chinese editorial entry.
// Locations in this list are search targets, not unverified Google Place IDs.
import { guideDetails } from './guideDetails';

const guidePhotos: Record<string, string> = {
 'anusarn-market':'/guide-images/anusarn-market.jpg',
 'kalare-market':'/gallery/night-bazaar-chiang-mai-9.jpg',
 'chang-khlan-road':'/guide-images/chang-khlan-road.jpg',
 'loi-kroh-road':'/guide-images/loi-kroh-road.jpg',
 'tha-phae-gate':'/guide-images/tha-phae-gate.jpg',
 'warorot-market':'/guide-images/warorot-market.jpg',
 'nawarat-bridge':'/guide-images/nawarat-bridge.jpg',
 'iron-bridge':'/guide-images/iron-bridge.jpg',
 'wat-buppharam':'/guide-images/wat-buppharam.jpg',
 'wat-ket-area':'/guide-images/wat-ket-area.jpg',
 'sunday-walking-street':'/guide-images/sunday-walking-street.jpg',
 'saturday-walking-street':'/guide-images/saturday-walking-street.jpg',
 'chiang-mai-gate-market':'/guide-images/chiang-mai-gate-market.jpg',
 'ping-river-walk':'/guide-images/ping-river-walk.jpg',
 'old-city-walk':'/guide-images/tha-phae-gate.jpg',
 'street-food':'/gallery/night-bazaar-chiang-mai-8.jpg',
 'northern-thai-food':'/gallery/night-bazaar-chiang-mai-6.jpg',
 'vegetarian-food':'/gallery/night-bazaar-chiang-mai-7.jpg',
 'halal-food':'/gallery/night-bazaar-chiang-mai-7.jpg',
 'desserts-drinks':'/gallery/night-bazaar-chiang-mai-6.jpg',
 'souvenir-shopping':'/gallery/night-bazaar-chiang-mai-13.jpg',
 'bargaining-tips':'/gallery/night-bazaar-chiang-mai-3.jpg',
 'family-visit':'/gallery/night-bazaar-chiang-mai-7.jpg',
 'rainy-season':'/gallery/night-bazaar-chiang-mai-9.jpg',
 'photo-spots':'/gallery/night-bazaar-chiang-mai-2.jpg',
 'budget-guide':'/gallery/night-bazaar-chiang-mai-3.jpg',
 'accessibility':'/gallery/night-bazaar-chiang-mai-1.jpg',
 'transport-airport':'/guide-images/transport-airport.jpg',
 'transport-songthaew':'/guide-images/transport-songthaew.jpg',
 'one-evening-itinerary':'/gallery/night-bazaar-chiang-mai-4.jpg',
};

const placeMapQueries: Record<string,string> = {
 'anusarn-market':'Anusarn Market, 149 Chang Khlan Road, Chiang Mai, Thailand',
 'kalare-market':'Kalare Night Bazaar, Chang Khlan Road, Chiang Mai, Thailand',
 'chang-khlan-road':'Chang Khlan Road, Night Bazaar, Chiang Mai, Thailand',
 'loi-kroh-road':'Loi Kroh Road, Chiang Mai, Thailand',
 'tha-phae-gate':'Tha Phae Gate, Chiang Mai Old City, Thailand',
 'warorot-market':'Warorot Market, Wichayanon Road, Chiang Mai, Thailand',
 'nawarat-bridge':'Nawarat Bridge, Ping River, Chiang Mai, Thailand',
 'iron-bridge':'Khua Lek Iron Bridge, Chiang Mai, Thailand',
 'wat-buppharam':'Wat Buppharam, Tha Phae Road, Chiang Mai, Thailand',
 'wat-ket-area':'Wat Ket Karam, Charoen Rat Road, Chiang Mai, Thailand',
 'sunday-walking-street':'Sunday Walking Street, Ratchadamnoen Road, Chiang Mai, Thailand',
 'saturday-walking-street':'Wua Lai Saturday Walking Street, Chiang Mai, Thailand',
 'chiang-mai-gate-market':'Chiang Mai Gate Market, Bumrung Buri Road, Chiang Mai, Thailand',
};
export const guideEntries = [
 ['anusarn-market','ตลาดอนุสาร','Anusarn Market','阿努珊市场','ตลาดอาหารและร้านของฝากทางใต้ของย่านไนท์บาซาร์ เหมาะกับการแวะรับประทานอาหารแล้วเดินชมร้านค้า','A southern market area with dining and souvenir stalls; a useful dinner stop before browsing the main strip.','夜市南段的餐饮和纪念品区域，适合先吃晚餐再逛主街。'],
 ['kalare-market','กาแลไนท์บาซาร์','Kalare Night Bazaar','Kalare 夜市','พื้นที่ศูนย์อาหารและร้านค้าติดถนนช้างคลาน เหมาะสำหรับพักจากการเดินตลาดกลางแจ้ง','A food-court and shopping zone beside Chang Khlan Road, useful as a break during an outdoor market walk.','紧邻昌堪路的美食与购物区，可作为露天夜市行程的休息站。'],
 ['chang-khlan-road','ถนนช้างคลาน','Chang Khlan Road','昌堪路','ถนนสายหลักของไนท์บาซาร์ ให้เดินสังเกตร้านค้าและทางข้ามถนนก่อนเลือกซื้อสินค้า','The bazaar’s main spine; watch crossings and compare the different stall clusters before buying.','夜市的主要街道，先观察不同摊群、注意过街安全，再决定购物。'],
 ['loi-kroh-road','ถนนลอยเคราะห์','Loi Kroh Road','Loi Kroh 路','ถนนที่เชื่อมย่านเมืองเก่ากับฝั่งไนท์บาซาร์ มีร้านอาหารและสถานบันเทิงยามค่ำคืน','A connection between the Old City side and the bazaar district, with dining and nightlife along the route.','连接古城与夜市区域的街道，沿线有餐厅和夜间娱乐场所。'],
 ['tha-phae-gate','ประตูท่าแพ','Tha Phae Gate','塔佩门','ประตูเมืองด้านตะวันออกและจุดเริ่มต้นที่เข้าใจง่ายสำหรับการเดินสู่ย่านไนท์บาซาร์','The Old City’s eastern gateway and a clear starting point for an evening walk toward the bazaar.','古城东门，也是步行前往夜市时容易辨认的起点。'],
 ['warorot-market','ตลาดวโรรส','Warorot Market','瓦洛洛市场','ตลาดกาดหลวงเหมาะกับการดูของกินและชีวิตประจำวันช่วงกลางวัน ก่อนต่อไปไนท์บาซาร์ตอนเย็น','Kad Luang is better explored for daytime food shopping before an evening visit to the Night Bazaar.','当地称 Kad Luang，适合白天体验日常食品市场，晚上再转往夜市。'],
 ['nawarat-bridge','สะพานนวรัฐ','Nawarat Bridge','纳瓦叻桥','สะพานข้ามแม่น้ำปิงที่ใช้ต่อเส้นทางชมริมน้ำกับย่านตลาดได้','A Ping River crossing that can connect a riverside walk with the market district.','横跨平河的桥梁，可串联河畔散步与夜市路线。'],
 ['iron-bridge','สะพานเหล็ก','Iron Bridge Chiang Mai','清迈铁桥','สะพานข้ามแม่น้ำปิงใกล้แนวถนนลอยเคราะห์ เหมาะกับภาพแสงเย็นและวิวแม่น้ำ','A Ping River bridge near the Loi Kroh corridor, popular for dusk light and river views.','靠近 Loi Kroh 街轴线的平河桥梁，适合欣赏傍晚河景。'],
 ['wat-buppharam','วัดบุพพาราม','Wat Buppharam','布帕兰寺','วัดบนถนนท่าแพที่เหมาะกับการชมสถาปัตยกรรมล้านนาระหว่างเดินจากเมืองเก่า','A temple along Tha Phae Road where a walking route can include Lanna architecture.','位于塔佩路沿线的寺庙，步行途中可欣赏兰纳建筑。'],
 ['wat-ket-area','ย่านวัดเกต','Wat Ket Riverside','瓦杰河畔街区','ย่านฝั่งแม่น้ำปิงที่มีถนนและอาคารเก่า เหมาะกับการเดินชมบรรยากาศเมือง','A riverside neighborhood with older streetscapes that complements an evening market itinerary.','平河沿岸的历史街区，可与夜市安排在同一趟散步。'],
 ['sunday-walking-street','ถนนคนเดินวันอาทิตย์','Sunday Walking Street','周日步行街','ตลาดถนนราชดำเนินเปิดเฉพาะคืนวันอาทิตย์ ไม่ใช่ตลาดเดียวกับไนท์บาซาร์','The Ratchadamnoen walking street is a Sunday-only market, distinct from the nightly Chang Khlan bazaar.','拉差丹嫩路的周日限定市集，与每晚营业的昌堪路夜市不同。'],
 ['saturday-walking-street','ถนนคนเดินวัวลาย','Wua Lai Saturday Walking Street','周六瓦莱步行街','ตลาดถนนวัวลายเปิดคืนวันเสาร์ เหมาะกับผู้ที่มีเวลาเที่ยวเชียงใหม่ช่วงสุดสัปดาห์','The Wua Lai market takes place on Saturday evenings; plan it separately from the Night Bazaar.','瓦莱路周六晚间市集，建议与常设夜市分开规划。'],
 ['chiang-mai-gate-market','ตลาดประตูเชียงใหม่','Chiang Mai Gate Market','清迈门市场','พื้นที่ของกินใกล้ประตูเมืองด้านใต้ ช่วยเพิ่มทางเลือกด้านอาหารสำหรับผู้พักในเมืองเก่า','A food-focused stop by the Old City’s southern gate, useful for visitors staying within the walls.','古城南门附近的美食区域，适合住在古城内的游客。'],
 ['ping-river-walk','เดินเล่นริมแม่น้ำปิง','Ping River Evening Walk','平河夜间散步','เพิ่มช่วงเดินริมน้ำก่อนหรือหลังตลาด โดยเลือกทางที่มีแสงสว่างและทางข้ามปลอดภัย','Add a riverside stroll before or after the market, choosing well-lit crossings and walking paths.','夜市前后可安排河畔散步，优先选择明亮、方便过街的路线。'],
 ['old-city-walk','เดินจากคูเมืองเชียงใหม่','Old City to Night Bazaar Walk','古城至夜市步行','เริ่มจากประตูท่าแพแล้วต่อเส้นทางถนนท่าแพหรือถนนเชื่อมไปช้างคลาน','Begin at Tha Phae Gate, then follow the Tha Phae Road corridor toward Chang Khlan.','从塔佩门出发，沿塔佩路一带走向昌堪路夜市。'],
 ['street-food','อาหารสตรีทฟู้ดไนท์บาซาร์','Night Bazaar Street Food','夜市街头美食','เลือกแผงที่ปรุงสดและมีป้ายราคา เปรียบเทียบจุดนั่งกินในโซนอนุสารและกาแล','Look for freshly prepared food and visible prices, comparing seating at Anusarn and Kalare.','优先选择现做且明码标价的摊位，比较阿努珊与 Kalare 的用餐座位。'],
 ['northern-thai-food','อาหารเหนือใกล้ไนท์บาซาร์','Northern Thai Food Near the Bazaar','夜市周边泰北菜','ลองค้นหาเมนูข้าวซอย น้ำพริกหนุ่ม และไส้อั่ว พร้อมสอบถามส่วนผสมและระดับความเผ็ด','Look for khao soi, nam phrik num and sai ua, asking about ingredients and spice levels.','可寻找咖喱面、泰北辣酱与香肠，并事先确认食材和辣度。'],
 ['vegetarian-food','อาหารมังสวิรัติย่านไนท์บาซาร์','Vegetarian Food at Night Bazaar','夜市素食指南','ถามร้านเรื่องน้ำปลา น้ำซุป และเครื่องปรุงก่อนสั่ง เพราะอาหารที่ดูไม่มีเนื้ออาจมีส่วนผสมจากสัตว์','Ask about fish sauce, stock and condiments: apparently meat-free dishes may still contain animal ingredients.','点餐时确认鱼露、高汤与调味料；看似无肉的料理也可能含动物成分。'],
 ['halal-food','อาหารฮาลาลใกล้ไนท์บาซาร์','Halal Food Near Night Bazaar','夜市清真餐饮','ตรวจสอบป้ายฮาลาลของร้านและสอบถามวิธีเตรียมอาหาร ไม่ควรเดาจากชื่อเมนูเพียงอย่างเดียว','Check each vendor’s halal certification and preparation practices rather than relying on dish names.','应确认店家清真认证与制作方式，不要只凭菜名判断。'],
 ['desserts-drinks','ขนมและเครื่องดื่มไนท์บาซาร์','Desserts and Drinks Guide','夜市甜品饮料','เลือกขนมไทย ผลไม้ และเครื่องดื่มโดยดูราคากับปริมาณน้ำแข็งและระดับความหวาน','Explore Thai sweets, fruit and drinks while checking the price, ice and sweetness level.','可尝试泰式甜点、水果与饮品，留意价格、冰量及甜度。'],
 ['souvenir-shopping','ซื้อของฝากไนท์บาซาร์','Souvenir Shopping Guide','夜市纪念品购物','เปรียบเทียบงานฝีมือ สิ่งทอ และของที่ระลึกหลายร้าน ตรวจคุณภาพก่อนชำระเงิน','Compare handicrafts, textiles and souvenirs across stalls and inspect quality before paying.','对比不同摊位的手工艺、纺织品和纪念品，付款前检查做工。'],
 ['bargaining-tips','วิธีต่อราคาไนท์บาซาร์','How to Bargain Politely','夜市议价技巧','เริ่มจากสอบถามราคาอย่างสุภาพ เปรียบเทียบร้าน และยอมรับได้หากผู้ขายไม่ลดราคา','Ask politely, compare stalls, and accept a vendor’s decision if the price is firm.','礼貌询价、多摊比较；若商家不愿议价，也应尊重对方。'],
 ['family-visit','เที่ยวไนท์บาซาร์กับเด็ก','Night Bazaar with Kids','亲子夜市攻略','วางแผนเดินช่วงหัวค่ำ ระบุจุดนัดพบ และระวังรถบริเวณถนนช้างคลาน','Go earlier in the evening, agree on a meeting point and supervise children at Chang Khlan crossings.','亲子出行宜选较早时段，约好集合点，特别留意昌堪路车辆。'],
 ['rainy-season','เที่ยวไนท์บาซาร์หน้าฝน','Night Bazaar in Rainy Season','雨季夜市攻略','เตรียมร่มหรือเสื้อกันฝน เลือกพื้นที่มีหลังคา และหลีกเลี่ยงพื้นลื่นหลังฝนตก','Carry rain protection, use covered zones when needed and watch for slick pavement after showers.','备好雨具，必要时进入有顶棚区域，并注意雨后湿滑路面。'],
 ['photo-spots','จุดถ่ายรูปไนท์บาซาร์','Night Bazaar Photo Spots','夜市拍照点','เก็บภาพไฟร้านค้าและวิถีตลาดโดยขออนุญาตก่อนถ่ายภาพพ่อค้าแม่ค้าแบบใกล้ชิด','Photograph stall lights and market scenes; ask permission before close-up portraits of vendors.','可拍摄摊灯与市集氛围；近距离拍摄摊主肖像前先征得同意。'],
 ['budget-guide','งบเที่ยวไนท์บาซาร์','Night Bazaar Budget Planner','夜市预算指南','แยกงบอาหาร การเดินทาง และซื้อของฝาก ถือเงินสดย่อยแต่เก็บของมีค่าให้ปลอดภัย','Separate food, transport and souvenir budgets; carry small cash notes and secure valuables.','将预算分为餐饮、交通和纪念品，备零钱并妥善保管财物。'],
 ['accessibility','การเดินไนท์บาซาร์สำหรับทุกคน','Accessibility and Walking Conditions','夜市无障碍与步行条件','ทางเดินอาจมีคนหนาแน่นและพื้นต่างระดับ ตรวจเส้นทางจริงและจุดพักก่อนใช้รถเข็น','Crowded pavements and uneven surfaces can affect wheelchair routes; inspect access and rest points.','人行道可能拥挤或高低不平，轮椅使用者宜提前确认路线与休息点。'],
 ['transport-airport','จากสนามบินสู่ไนท์บาซาร์','Airport to Night Bazaar','机场前往夜市','เดินทางจากสนามบินเชียงใหม่ด้วยแท็กซี่หรือแอปเรียกรถ พร้อมยืนยันจุดรับและค่าโดยสาร','Travel from Chiang Mai Airport by taxi or ride-hailing; confirm pickup location and fare.','可从清迈机场搭乘出租车或网约车，事先确认上车地点与费用。'],
 ['transport-songthaew','รถสองแถวไปไนท์บาซาร์','Red Songthaew to the Bazaar','双条车前往夜市','แจ้งปลายทางว่าไนท์บาซาร์หรือถนนช้างคลาน และตกลงราคาก่อนขึ้นรถ','Say Night Bazaar or Chang Khlan Road and agree on the fare before boarding a red songthaew.','告诉司机 Night Bazaar 或昌堪路，上车前确认车资。'],
 ['one-evening-itinerary','แผนเที่ยวไนท์บาซาร์หนึ่งคืน','One-Evening Night Bazaar Itinerary','夜市一晚行程','เริ่มเดินยามเย็นจากประตูท่าแพ แวะช้างคลาน เลือกรับประทานอาหารแล้วปิดท้ายริมน้ำหากยังมีแรง','Start near Tha Phae Gate, browse Chang Khlan, pause for dinner and finish near the river if time allows.','傍晚从塔佩门出发，逛昌堪路、吃晚餐，若时间充裕再到河畔收尾。'],
] as const;

export type ExtendedGuideSlug = (typeof guideEntries)[number][0];
export const extendedGuideSlugs = guideEntries.map((entry) => entry[0]);

const copy = {
 th: { guide:'คู่มือเที่ยว', location:'ตำแหน่งและเส้นทาง', context:'ประวัติและลักษณะพื้นที่', route:'เส้นทางเดินเที่ยว', observe:'จุดเด่นและมุมถ่ายภาพ', transport:'การเดินทาง', practical:'เคล็ดลับก่อนออกเดิน', questions:'คำถามที่พบบ่อย', map:'ค้นหาสถานที่ใน Google Maps', next:'อ่านคู่มืออื่น', home:'กลับหน้าแรก', q1:'ควรมาเวลาไหน?', a1:'สำหรับกิจกรรมในย่านไนท์บาซาร์ควรเผื่อเวลาเย็นถึงค่ำ แต่เวลาเปิดของแต่ละร้านไม่เท่ากัน โปรดตรวจสอบก่อนเดินทาง', q2:'เดินทางอย่างไร?', a2:'ใช้แผนที่ตรวจสอบตำแหน่งเฉพาะจุด แล้วเลือกเดิน รถสองแถว หรือรถเรียกผ่านแอปตามสภาพการจราจร', q3:'ควรเตรียมอะไร?', a3:'เตรียมน้ำดื่ม เงินสดย่อย และรองเท้าเดินสบาย ตรวจพยากรณ์อากาศและระวังการข้ามถนน', q4:'ควรสังเกตอะไร?', contextBody:'สถานที่นี้เป็นหนึ่งในจุดที่สามารถเชื่อมกับเส้นทางเที่ยวเชียงใหม่รอบถนนช้างคลานและเมืองเก่าได้ ควรแยกจุดหมายปลายทางแต่ละแห่งในแผนที่ ไม่ใช่ใช้พิกัดไนท์บาซาร์แทนทุกจุด', routeBody:'ก่อนเดินทางให้เปิดแผนที่ของสถานที่นี้ ระบุทางเข้าและเส้นทางเดินจริง จากนั้นจัดลำดับกับตลาดอนุสาร กาแล หรือประตูท่าแพตามเวลาที่มี ไม่จำเป็นต้องเก็บครบทุกแห่งในคืนเดียว', transportBody:'เริ่มจากถนนช้างคลานหรือเมืองเก่าได้ด้วยการเดิน รถสองแถวสีแดง หรือรถเรียกผ่านแอป โดยตรวจตำแหน่งปลายทางของสถานที่นี้โดยเฉพาะก่อนเรียกรถ', practicalBody:'ช่วงเย็นมีคนและรถมาก โดยเฉพาะวันหยุด ใช้จุดนัดพบที่ชัดเจนและเผื่อเวลาสำหรับพักกินอาหาร หากฝนตกควรปรับเส้นทางไปยังจุดที่มีหลังคา' },
 en: { guide:'Visitor guide',location:'Location and directions',context:'Background and character',route:'Suggested walking route',observe:'Highlights and photo viewpoints',transport:'Getting here',practical:'Practical visitor advice',questions:'Frequently asked questions',map:'Find this place on Google Maps',next:'Explore more guides',home:'Back to home',q1:'When should I visit?',a1:'Allow time from late afternoon into the evening for bazaar-area activities. Individual businesses set their own hours, so check before travelling.',q2:'How do I get there?',a2:'Open the specific place in Maps first, then choose walking, a red songthaew or ride-hailing according to traffic and your starting point.',q3:'What should I bring?',a3:'Carry drinking water, small cash notes and comfortable shoes. Check the weather and use care at road crossings.',q4:'What should I look for?',contextBody:'This stop can be combined with a Chiang Mai itinerary around Chang Khlan Road and the Old City. Treat every attraction as a distinct destination rather than assigning the Night Bazaar pin to all of them.',routeBody:'Open this location in Maps, identify its actual entrance and walking approach, then combine it with Anusarn, Kalare or Tha Phae Gate according to available time. There is no need to see everything in one evening.',transportBody:'Depending on your starting point, reach the area on foot, by red songthaew or by ride-hailing. Verify the specific destination and entrance in Maps before ordering a car.',practicalBody:'Evenings can be busy with people and traffic, especially on holidays. Agree on a meeting point and leave time for food breaks. In rain, adapt the walk toward covered spaces.' },
 zh: { guide:'游览指南',location:'位置与导航',context:'历史与场所背景',route:'建议步行路线',observe:'观察重点与拍照位置',transport:'交通方式',practical:'出发前的实用建议',questions:'常见问题',map:'在 Google Maps 查找此地点',next:'继续阅读',home:'返回首页',q1:'什么时候适合前往？',a1:'夜市区域可安排傍晚至晚间，但各商家的营业时间不一，出发前应再次确认。',q2:'怎么到达？',a2:'先在地图确认该景点的具体位置，再根据出发地和路况选择步行、双条车或网约车。',q3:'要准备什么？',a3:'建议携带饮水、零钱与好走的鞋，查看天气并注意道路交叉口。',q4:'有哪些观察重点？',contextBody:'这一站可与清迈昌堪路、古城周边行程搭配。每个景点应单独定位，不能将夜市的统一坐标当作所有地点的地址。',routeBody:'先打开这一地点的专属地图搜索，确认实际入口和步行方向，再按时间与阿努珊市场、Kalare 夜市或塔佩门串联。不必一晚走遍所有地方。',transportBody:'可依出发地点选择步行、红色双条车或网约车。叫车前先在地图确定这一景点的实际位置与出入口。',practicalBody:'晚间尤其假日人车较多，建议约定明确集合地点，留出吃饭休息时间。遇雨可灵活调整到有顶棚的区域。' },
} as const;

export function extendedGuide(slug: string, lang: string) {
 const entry = guideEntries.find((e) => e[0] === slug);
 if (!entry) return undefined;
 const locale = lang === 'th' || lang === 'zh' ? lang : 'en';
 const t = copy[locale];
 const idx = locale === 'th' ? 1 : locale === 'en' ? 2 : 3;
 const descIdx = locale === 'th' ? 4 : locale === 'en' ? 5 : 6;
 const name = entry[idx];
 const description = entry[descIdx];
 const details = guideDetails[slug];
 const detailIdx = locale === 'th' ? 0 : locale === 'en' ? 1 : 2;
 const mapQuery = placeMapQueries[slug] ?? 'Chiang Mai Night Bazaar, Chang Khlan Road, Chiang Mai, Thailand';
 const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`;
 const dayStops = ['warorot-market','wat-buppharam','wat-ket-area','old-city-walk','ping-river-walk','tha-phae-gate'];
 const dayTiming = ['ควรเริ่มช่วงกลางวันเพื่อเห็นรายละเอียดพื้นที่และตรวจสอบเวลาเข้าได้สะดวก จากนั้นค่อยต่อไปไนท์บาซาร์ยามเย็น','A daylight visit makes details easier to see and access easier to confirm; add the Night Bazaar afterward in the evening.','建议白天参观以便看清细节并确认开放情况，傍晚再前往夜市。'];
 const saturdayTiming = ['ถนนคนเดินวัวลายจัดในคืนวันเสาร์ ควรตรวจสอบกำหนดจัดงานในสัปดาห์ที่จะไป','Wua Lai Walking Street is a Saturday-evening event; reconfirm the schedule for your travel week.','瓦莱步行街安排在周六晚间，出行周仍应确认活动情况。'];
 const sundayTiming = ['ถนนคนเดินราชดำเนินจัดในคืนวันอาทิตย์ ควรตรวจสอบกำหนดจัดงานในสัปดาห์ที่จะไป','The Ratchadamnoen walking street is a Sunday-evening event; reconfirm the schedule for your travel week.','拉差丹嫩路步行街安排在周日晚间，出行周仍应确认活动情况。'];
 const timing = dayStops.includes(slug) ? dayTiming[detailIdx] : slug==='saturday-walking-street' ? saturdayTiming[detailIdx] : slug==='sunday-walking-street' ? sundayTiming[detailIdx] : t.a1;
 const markets = new Set(['anusarn-market','kalare-market','warorot-market','sunday-walking-street','saturday-walking-street','chiang-mai-gate-market']);
 const heritage = new Set(['tha-phae-gate','wat-buppharam','wat-ket-area']);
 const bridges = new Set(['iron-bridge','nawarat-bridge','ping-river-walk']);
 const kind = markets.has(slug) ? ['ตลาดและพื้นที่ค้าขาย','Market and shopping district','市场与商业空间'][detailIdx] : heritage.has(slug) ? ['สถานที่ประวัติศาสตร์และวัฒนธรรม','Historic and cultural stop','历史文化景点'][detailIdx] : bridges.has(slug) ? ['สะพานและภูมิทัศน์แม่น้ำ','Bridge and riverside landscape','桥梁与河畔景观'][detailIdx] : ['คู่มือเดินทาง อาหาร หรือกิจกรรม','Travel, food or activity guide','交通、餐饮或活动攻略'][detailIdx];
 const routeQuestion = locale==='th' ? `จะจัดเส้นทางไป ${name} อย่างไร?` : locale==='en' ? `How can I combine ${name} with the Night Bazaar?` : `如何把${name}排进夜市行程？`;
 const backgroundQuestion = locale==='th' ? `สถานที่นี้มีลักษณะเด่นอะไร?` : locale==='en' ? `What is distinctive about ${name}?` : `${name}有哪些独特背景？`;
 const transportBody = slug==='transport-airport' ? [ 'จากสนามบินใช้แท็กซี่หรือรถเรียกผ่านแอปไปยังถนนช้างคลาน ตรวจจุดรับรถและค่าโดยสารก่อนขึ้น', 'From the airport, use an authorized taxi or ride-hailing service to Chang Khlan and verify pickup and fare.', '从机场搭乘正规出租车或网约车到昌堪路，确认上车点与费用。' ][detailIdx] : t.transportBody;
 const photo = guidePhotos[slug];
 const sceneCaption = ['ภาพบรรยากาศย่านไนท์บาซาร์เชียงใหม่','Chiang Mai Night Bazaar area, illustrative market scene','清迈夜市区域实景（用于说明市集环境）'][detailIdx];
 const photoCaption = photo.startsWith('/gallery/') ? sceneCaption : slug === 'chiang-mai-gate-market' ? ['ประตูเชียงใหม่ใกล้ย่านร้านอาหาร','Chiang Mai Gate near the food-market area','清迈门，邻近餐饮市场区域'][detailIdx] : slug === 'loi-kroh-road' ? ['อาคารศาลเจ้าบนถนนลอยเคราะห์','Temple building on Loi Kroh Road','Loi Kroh 路上的庙宇建筑'][detailIdx] : name;
 const siteName = ['ไนท์บาซาร์เชียงใหม่','Chiang Mai Night Bazaar','清迈夜市'][detailIdx];
 return { slug, name, description, mapUrl, isPlace:!!placeMapQueries[slug], photo, photoCaption, kind, t, title:`${name} | ${t.guide} ${siteName}`, sections:[{heading:t.context,body:description + ' ' + details.history[detailIdx]},{heading:t.route,body:details.route[detailIdx]},{heading:t.observe,body:details.observe[detailIdx]},{heading:t.transport,body:transportBody},{heading:t.practical,body:t.practicalBody}],faq:[{q:t.q1,a:timing},{q:t.q2,a:t.a2},{q:t.q3,a:t.a3},{q:t.q4,a:details.observe[detailIdx]},{q:routeQuestion,a:details.route[detailIdx]},{q:backgroundQuestion,a:details.history[detailIdx]}] };
}
