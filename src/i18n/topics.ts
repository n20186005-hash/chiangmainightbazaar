// Topic (long-tail) pages for Chiang Mai Night Bazaar.
// Content is written independently per topic (not copied from the homepage) to target real search intent.

export const topicSlugs = [
  'opening-hours',
  'how-to-get-there',
  'food-guide',
  'kalare-night-bazaar',
  'nearby-hotels',
] as const;

export type TopicSlug = (typeof topicSlugs)[number];

export interface TopicSection {
  heading: string;
  body: string;
}

export interface TopicFaq {
  q: string;
  a: string;
}

export interface TopicContent {
  title: string;
  description: string;
  h1: string;
  intro: string;
  updated: string;
  sections: TopicSection[];
  faq: TopicFaq[];
  relatedLabel: string;
}

export const topics: Record<TopicSlug, Record<string, TopicContent>> = {
  'opening-hours': {
    en: {
      title: 'Chiang Mai Night Bazaar Opening Hours | When Stalls Open & Close',
      description:
        'Chiang Mai Night Bazaar opening hours by zone: most stalls open around 18:00 and wind down by 23:00, while food courts, bars and the Kalare stage run later. Plan your visit with our zone-by-zone guide.',
      h1: 'Chiang Mai Night Bazaar Opening Hours',
      intro:
        'The Night Bazaar is not a single building with one clock — it is an open stretch of Changklan Road that fills up after dark. Stall opening times vary by zone, so here is a practical, zone-by-zone breakdown to help you arrive at the right moment.',
      updated: 'Hours verified October 2026 (per Chiang Mai public info and on-site observation).',
      sections: [
        {
          heading: 'General market hours',
          body: 'Most craft and souvenir stalls along the main Changklan Road start setting up around 17:30–18:00 and begin closing between 22:30 and 23:00. Individual stalls decide their own hours, so the street is never uniformly "open" or "closed" at a fixed minute.',
        },
        {
          heading: 'By zone',
          body: 'Changklan North (main street) is liveliest 18:30–21:00. Anusarn Market food stalls peak 19:30–21:30. The Kalare Night Bazaar stage runs shows roughly 20:00–22:00. The Loi Kroh bar extension stays busy past 23:00, and many restaurants and bars continue later than the craft stalls.',
        },
        {
          heading: 'Best time to arrive',
          body: 'Arrive about 60 minutes before sunset. Stall lights switch on roughly 30 minutes after sunset — that blue-hour window (about 20–30 minutes after sunset) is the most photogenic. To avoid crowds, come right at 18:00 opening or after 21:30.',
        },
        {
          heading: 'Days of the week',
          body: 'The bazaar runs every day, including public holidays. Weekends and the cool season (Nov–Feb) are noticeably busier; rainy-season weeknights are calmer and easier to browse.',
        },
      ],
      faq: [
        {
          q: 'What time does the Night Bazaar open?',
          a: 'Stalls generally start opening around 18:00 daily; some begin setting up from 17:30. The craft section mostly winds down by 23:00.',
        },
        {
          q: 'What time does it close?',
          a: 'Most stalls close between 22:30 and 23:00, but Anusarn food stalls, bars and the Loi Kroh extension often continue later — some past midnight.',
        },
        {
          q: 'Is it open every day?',
          a: 'Yes, the Night Bazaar operates daily, year-round, including holidays.',
        },
        {
          q: 'When is the best time to visit?',
          a: '18:30–21:00 for lights and atmosphere; 18:00 opening or after 21:30 for smaller crowds.',
        },
      ],
      relatedLabel: 'More Night Bazaar guides',
    },
    th: {
      title: 'เวลาเปิด-ปิด ไนท์บาซาร์เชียงใหม่ | ร้านแผงเปิดกี่โมง',
      description:
        'รวมเวลาเปิด-ปิดไนท์บาซาร์เชียงใหม่ แยกตามโซน: แผงส่วนใหญ่เริ่ม ~18:00 และปิดราว 23:00 ส่วนตลาดอาหาร บาร์ และเวทีกาแลเปิดดึกกว่า พร้อมคู่มือแพลนเวลาเดินตลาด',
      h1: 'เวลาเปิด-ปิด ไนท์บาซาร์เชียงใหม่',
      intro:
        'ไนท์บาซาร์ไม่ใช่ตลาดในอาคารที่มีเวลาเปิด-ปิดตายตัว แต่เป็นช่วงเปิดโล่งตามถนนช้างคลานที่ค่อยๆ คึกคักหลังพระอาทิตย์ตก เวลาแผงแต่ละโซนไม่เท่ากัน จึงสรุปแยกตามโซนให้แพลนเวลาได้ง่ายขึ้น',
      updated: 'ตรวจสอบเวลา ตุลาคม 2026 (ตามข้อมูลเทศบาลเชียงใหม่และสังเกตหน้างาน)',
      sections: [
        {
          heading: 'เวลาโดยทั่วไป',
          body: 'แผงหัตถกรรมและของที่ระลึกริมถนนช้างคลานเริ่มจัดร้านราว 17:30–18:00 และเริ่มปิดระหว่าง 22:30–23:00 แผงแต่ละเจ้าตัดสินใจเอง จึงไม่มีนาที "เปิด/ปิด" ตายตัว',
        },
        {
          heading: 'แยกตามโซน',
          body: 'ช้างคลานเหนือ (ถนนหลัก) คึกคักสุด 18:30–21:00 ตลาดอนุสารโซนอาหารสุด 19:30–21:30 เวทีกาแลแสดงราว 20:00–22:00 ส่วนถนนลอยครกเปิดดึกเกิน 23:00 และร้านอาหารบาร์หลายแห่งเปิด迟กว่าแผงของ',
        },
        {
          heading: 'เวลาเดินที่ดีสุด',
          body: 'แนะนำมาถึงก่อนพระอาทิตย์ตก ~60 นาที ไฟแผงจะติดราว 30 นาทีหลังตก — ช่วงบลูอาวร์ (ราว 20–30 นาทีหลังตก) ถ่ายรูปสวยสุด อยาก避开ฝูงชนให้มาตอน 18:00 เปิด หรือหลัง 21:30',
        },
        {
          heading: 'แต่ละวัน',
          body: 'ตลาดเปิดทุกวันรวมถึงวันหยุดนักขัตฤกษ์ ช่วงสุดสัปดาห์และหนาว (พ.ย.–ก.พ.) คนแน่นกว่า วันธรรมดาฤดูฝนสงบกว่าเดินสบายกว่า',
        },
      ],
      faq: [
        {
          q: 'ไนท์บาซาร์เปิดกี่โมง?',
          a: 'แผงส่วนใหญ่เริ่มเปิดราว 18:00 ทุกวัน บางแผงจัดร้านตั้งแต่ 17:30 ส่วนแผงหัตถกรรมปิดราว 23:00',
        },
        {
          q: 'ปิดกี่โมง?',
          a: 'แผงส่วนใหญ่ปิดระหว่าง 22:30–23:00 แต่แผงอาหารอนุสาร บาร์ และถนนลอยครกมักเปิด迟กว่า บางแห่งเลยเที่ยงคืน',
        },
        {
          q: 'เปิดทุกวันไหม?',
          a: 'เปิดทุกวันตลอดปี รวมวันหยุดนักขัตฤกษ์',
        },
        {
          q: 'เวลาไหนเดินดีสุด?',
          a: '18:30–21:00 แสงและบรรยากาศดีสุด ส่วน 18:00 เปิด或หลัง 21:30 คนน้อยกว่า',
        },
      ],
      relatedLabel: 'คู่มือไนท์บาซาร์เพิ่มเติม',
    },
    zh: {
      title: '清迈夜市营业时间｜摊位几点开、几点收',
      description:
        '清迈夜市营业时间分区说明：多数摊位约 18:00 开市、23:00 前后收摊，美食街、酒吧与 Kalare 舞台则更晚。附分区时段与到访建议，帮你踩准时间。',
      h1: '清迈夜市营业时间',
      intro:
        '夜市并非一栋有统一开关门时间的建筑，而是沿昌堪路连片的开放街区，入夜后才逐渐热闹。各分区摊位时间并不一致，下面按区域拆解，方便你踩准到访时机。',
      updated: '营业时间已于 2026 年 10 月核对（依据清迈市政府公开资料与现场观察）。',
      sections: [
        {
          heading: '整体营业时间',
          body: '昌堪路主街的手工艺与纪念品摊位多在 17:30–18:00 陆续摆开，22:30–23:00 之间开始收摊。每个摊位自行决定时间，因此整条街并不存在某个固定的「统一开关门分钟」。',
        },
        {
          heading: '分区时段',
          body: '昌堪路北段（主街）18:30–21:00 最热闹；阿努珊市场美食摊 19:30–21:30 最旺；Kalare 夜市区舞台约 20:00–22:00 有演出；Loi Kroh 酒吧街过了 23:00 仍热闹，许多餐厅与酒吧比手工艺摊收得更晚。',
        },
        {
          heading: '最佳到访时间',
          body: '建议在日落前约 60 分钟抵达。摊位灯串约在日落后 30 分钟亮起——蓝调时刻（日落后约 20–30 分钟）最出片。想避开人潮，可选 18:00 刚开市或 21:30 之后。',
        },
        {
          heading: '每周营业',
          body: '夜市天天营业，包含公共假日。周末与凉季（11–2 月）人潮明显更密；雨季工作夜较清静、更好逛。',
        },
      ],
      faq: [
        {
          q: '清迈夜市几点开市？',
          a: '摊位一般每日约 18:00 开始营业，部分 17:30 就摆开；手工艺区多在 23:00 前后收摊。',
        },
        {
          q: '几点收摊？',
          a: '多数摊位 22:30–23:00 收摊，但阿努珊美食摊、酒吧与 Loi Kroh 延伸段常更晚，部分过了午夜。',
        },
        {
          q: '每天都开吗？',
          a: '是的，夜市全年每日营业，包含假日。',
        },
        {
          q: '什么时候去最好逛？',
          a: '18:30–21:00 灯光与氛围最佳；18:00 开门或 21:30 后人潮较少。',
        },
      ],
      relatedLabel: '更多夜市攻略',
    },
  },
  'how-to-get-there': {
    en: {
      title: 'How to Get to Chiang Mai Night Bazaar | Location & Directions',
      description:
        'Find Chiang Mai Night Bazaar on Changklan Road, ~1.5 km south of Tha Phae Gate. Walking, red Songthaew, Grab/Bolt and taxi directions, plus distance from the airport.',
      h1: 'How to Get to Chiang Mai Night Bazaar',
      intro:
        'The Night Bazaar sits on Changklan Road in southeast Chiang Mai, about 1.5 km south of Tha Phae Gate. Here are the practical ways to reach it from the Old City and the airport.',
      updated: 'Location verified October 2026 (per Chiang Mai Municipality public info).',
      sections: [
        {
          heading: 'From the Old City (walk)',
          body: 'From Tha Phae Gate, head southeast and follow the main riverside pavement south for about 20 minutes to the north mouth of the market. It is a flat, well-lit walk in the evening.',
        },
        {
          heading: 'Red Songthaew',
          body: 'Chiang Mai’s shared red trucks are the cheapest ride. Wave one down in the Old City, tell the driver "Night Bazaar" or "Changklan", and pay about 30–60 THB per person on exit. They run frequently until late.',
        },
        {
          heading: 'Grab / Bolt',
          body: 'Ride-hailing apps give accurate pickup points and transparent prices — handy at night and with luggage. Set the destination to "Night Bazaar Chiang Mai" and confirm the plate before boarding.',
        },
        {
          heading: 'From the airport',
          body: 'Chiang Mai International Airport (CNX) is about 15 minutes away by car. A taxi or ride-hailing trip is straightforward; some hotels and hostels also offer transfers.',
        },
        {
          heading: 'Parking',
          body: 'Hotels and malls along Changklan have parking, but it fills up in high season. Public transit or ride-hailing is easier during peak evenings.',
        },
      ],
      faq: [
        {
          q: 'How far is the Night Bazaar from the Old City?',
          a: 'About 1.5 km south of Tha Phae Gate — a 20-minute walk or a few minutes by Songthaew.',
        },
        {
          q: 'What is the easiest way from Tha Phae Gate?',
          a: 'Walk southeast ~20 minutes, or hail a red Songthaew and say "Night Bazaar".',
        },
        {
          q: 'How far is it from the airport?',
          a: 'Chiang Mai International Airport is roughly 15 minutes by car; taxi or ride-hailing both work.',
        },
        {
          q: 'Is parking available?',
          a: 'Yes, at hotels and malls along Changklan, but it is tight in high season — transit or ride-hailing is simpler.',
        },
      ],
      relatedLabel: 'More Night Bazaar guides',
    },
    th: {
      title: 'วิธีไปไนท์บาซาร์เชียงใหม่ | ที่ตั้งและเส้นทาง',
      description:
        'ไนท์บาซาร์เชียงใหม่อยู่บนถนนช้างคลาน ห่างประตูท่าแพ ~1.5 กม. ทิศตะวันออกเฉียงใต้ พร้อมเส้นทางเดิน สองแถวแดง Grab/Bolt และระยะจากสนามบิน',
      h1: 'วิธีไปไนท์บาซาร์เชียงใหม่',
      intro:
        'ไนท์บาซาร์ตั้งอยู่บนถนนช้างคลาน ตะวันออกเฉียงใต้ของเชียงใหม่ ห่างประตูท่าแพ ~1.5 กม. นี่คือวิธีที่ใช้ได้จริงจากเมืองเก่าและสนามบิน',
      updated: 'ตรวจสอบที่ตั้ง ตุลาคม 2026 (ตามข้อมูลเทศบาลนครเชียงใหม่)',
      sections: [
        {
          heading: 'จากเมืองเก่า (เดิน)',
          body: 'จากประตูท่าแพมุ่งตะวันออกเฉียงใต้ แล้วเดินบนทางเท้าตามแม่น้ำลงใต้ราว 20 นาทีถึงปากตลาดฝั่งเหนือ เป็นทางราบและมีไฟสว่างในยามค่ำ',
        },
        {
          heading: 'สองแถวแดง',
          body: 'รถร่วมแดงคือการเดินทางที่ถูกที่สุด โบกริมเมืองเก่า บอกคนขับ "Night Bazaar" หรือ "Changklan" จ่ายราว 30–60 บาท/คนตอนลง วิ่งเรื่อยจนดึก',
        },
        {
          heading: 'Grab / Bolt',
          body: 'แอปรถเรียกระบุจุดและราคาชัดเจน เหมาะกลางคืนและมีกระเป๋า ตั้งปลายทาง "Night Bazaar Chiang Mai" และเช็กป้ายก่อนขึ้น',
        },
        {
          heading: 'จากสนามบิน',
          body: 'สนามบินเชียงใหม่ (CNX) ห่างรถราว 15 นาที แท็กซีหรือแอปรถสะดวก บางโรงแรมมีรถรับส่ง',
        },
        {
          heading: 'ที่จอดรถ',
          body: 'โรงแรมและห้างริมช้างคลานมีที่จอด แต่เต็มง่ายในไฮซีซัน ใช้รถสาธารณะหรือแอปรถจะง่ายกว่า',
        },
      ],
      faq: [
        {
          q: 'ไนท์บาซาร์ห่างเมืองเก่าเท่าไหร่?',
          a: 'ห่างประตูท่าแพ ~1.5 กม. เดิน 20 นาที หรือสองแถวไม่กี่นาที',
        },
        {
          q: 'จากประตูท่าแพไปง่ายสุดด้วยอะไร?',
          a: 'เดินตะวันออกเฉียงใต้ ~20 นาที หรือโบกสองแถวแดงบอก "Night Bazaar"',
        },
        {
          q: 'ห่างสนามบินเท่าไหร่?',
          a: 'สนามบินเชียงใหม่ราว 15 นาทีโดยรถ แท็กซีหรือแอปรถได้ทั้งคู่',
        },
        {
          q: 'มีที่จอดรถไหม?',
          a: 'มีที่โรงแรมและห้างริมช้างคลาน แต่ไฮซีซันแน่น แนะนำรถสาธารณะหรือแอปรถ',
        },
      ],
      relatedLabel: 'คู่มือไนท์บาซาร์เพิ่มเติม',
    },
    zh: {
      title: '清迈夜市怎么去｜位置与交通路线',
      description:
        '清迈夜市位于昌堪路，塔佩门以南约 1.5 公里。步行、红色双条车、Grab/Bolt 与出租车路线，以及机场距离一览。',
      h1: '清迈夜市怎么去',
      intro:
        '夜市坐落于清迈古城东南的昌堪路，塔佩门以南约 1.5 公里。下面是从古城与机场出发的实用到达方式。',
      updated: '位置已于 2026 年 10 月核对（依据清迈市政府公开资料）。',
      sections: [
        {
          heading: '从古城步行',
          body: '从塔佩门向东南走，沿人行道南行约 20 分钟即到夜市北口。路面平坦，傍晚路灯充足。',
        },
        {
          heading: '红色双条车',
          body: '清迈的红色双条车最便宜。在古城内招手即停，告诉司机「Night Bazaar」或「Changklan」，下车按人均约 30–60 泰铢付费，深夜也频繁运营。',
        },
        {
          heading: 'Grab / Bolt',
          body: '网约车定位准确、价格透明，适合夜间与携带行李。目的地设为「Night Bazaar Chiang Mai」，上车前核对车牌。',
        },
        {
          heading: '从机场出发',
          body: '清迈国际机场（CNX）车程约 15 分钟。打车或网约车都很方便，部分酒店与旅舍也提供接送。',
        },
        {
          heading: '停车',
          body: '昌堪路沿线酒店与商场有停车位，但旺季紧张；高峰夜晚公共交通或网约车更轻松。',
        },
      ],
      faq: [
        {
          q: '夜市离古城多远？',
          a: '塔佩门以南约 1.5 公里，步行 20 分钟或双条车几分钟即达。',
        },
        {
          q: '从塔佩门怎么去最方便？',
          a: '向东南步行约 20 分钟，或招红色双条车说「Night Bazaar」。',
        },
        {
          q: '离机场多远？',
          a: '清迈国际机场车程约 15 分钟，打车或网约车均可。',
        },
        {
          q: '有停车位吗？',
          a: '昌堪路沿线酒店与商场有停车，但旺季紧张，公共交通或网约车更省事。',
        },
      ],
      relatedLabel: '更多夜市攻略',
    },
  },
  'food-guide': {
    en: {
      title: 'Chiang Mai Night Bazaar Food Guide | What to Eat & Where',
      description:
        'A food guide to Chiang Mai Night Bazaar: northern Thai BBQ, mango sticky rice, fresh juice and seafood at Anusarn Market, plus bargaining and tasting tips.',
      h1: 'Chiang Mai Night Bazaar Food Guide',
      intro:
        'Food is half the reason to visit. From the Anusarn Market food street to riverside snacks, here is what to eat at the Night Bazaar and where to find it.',
      updated: 'Food tips verified October 2026 (on-site observation).',
      sections: [
        {
          heading: 'Anusarn Market food street',
          body: 'Behind the main bazaar, Anusarn Market is the biggest food cluster: northern Thai BBQ, grilled seafood, mango sticky rice, fresh juice and coconut jelly. Stalls often let you taste before buying.',
        },
        {
          heading: 'Must-try dishes',
          body: 'Try northern sausages (sai ua), khao soi nearby, mango sticky rice, grilled seafood, fresh sugarcane or fruit juice, and coconut jelly. Portions are shareable, so go with friends and sample widely.',
        },
        {
          heading: 'Drinks & desserts',
          body: 'Fresh fruit shakes, Thai iced tea, and coconut-based sweets are cheap and refreshing after a hot day. Look for stalls with a steady local queue.',
        },
        {
          heading: 'Eating on a budget',
          body: 'Food stalls are inexpensive; sit-down air-conditioned restaurants cost more. Compare a few stalls, watch portions, and keep cash handy — small stalls often do not take cards.',
        },
      ],
      faq: [
        {
          q: 'Where is the best food at the Night Bazaar?',
          a: 'Anusarn Market behind the bazaar has the widest choice of northern BBQ, seafood and snacks.',
        },
        {
          q: 'What should I eat?',
          a: 'Northern sausages, mango sticky rice, grilled seafood, fresh juice and coconut jelly are the local favorites.',
        },
        {
          q: 'Can I taste before buying?',
          a: 'Yes — dried fruit, nuts and sausages at food stalls are often offered for tasting first.',
        },
        {
          q: 'Is the food cheap?',
          a: 'Street stalls are very affordable; air-conditioned restaurants cost more. Cash is preferred at small stalls.',
        },
      ],
      relatedLabel: 'More Night Bazaar guides',
    },
    th: {
      title: 'คู่มืออาหารไนท์บาซาร์เชียงใหม่ | กินอะไรและที่ไหน',
      description:
        'คู่มืออาหารไนท์บาซาร์เชียงใหม่: BBQ ภาคเหนือ ข้าวเหนียวมะม่วง น้ำคั้นสด และซีฟู้ดที่ตลาดอนุสาร พร้อมทิปชิมและต่อรอง',
      h1: 'คู่มืออาหารไนท์บาซาร์เชียงใหม่',
      intro:
        'อาหารคือครึ่งหนึ่งของการมา ที่นี่มีตั้งแต่ซอยอาหารตลาดอนุสารถึงขนมริมน้ำ นี่คือว่ากินอะไรและหาที่ไหนในไนท์บาซาร์',
      updated: 'ทิปอาหาร ตุลาคม 2026 (สังเกตหน้างาน)',
      sections: [
        {
          heading: 'ซอยอาหารตลาดอนุสาร',
          body: 'หลังบาซาร์ ตลาดอนุสารคือจุดอาหารใหญ่สุด: BBQ ภาคเหนือ ซีฟู้ดย่าง ข้าวเหนียวมะม่วง น้ำคั้นสดและเยลมะพร้าว แผงมักให้ชิมก่อนซื้อ',
        },
        {
          heading: 'เมนูที่ต้องลอง',
          body: 'ไส้กรอก northern (ไส้อั่ว) ข้าวซอยแถวนี้ ข้าวเหนียวมะม่วง ซีฟู้ดย่าง น้ำอ้อย/น้ำผลไม้สดและเยลมะพร้าว แบ่งกันชิมได้หลายอย่าง',
        },
        {
          heading: 'เครื่องดื่มและของหวาน',
          body: 'น้ำผลไม้ปั่น ชาไทย และของหวานมะพร้าวสดชื่นและราคาดีหลังวันร้อน เลือกแผงที่คนท้องถิ่นต่อคิว',
        },
        {
          heading: 'กินแบบประหยัด',
          body: 'แผงอาหารราคาถูก ร้านแอร์นั่งทานแพงกว่า เทียบสักสองสามแผง ดูปริมาณ และเตรียม现金 เล็กๆ มักไม่รับบัตร',
        },
      ],
      faq: [
        {
          q: 'อาหารอร่อยที่สุดอยู่ที่ไหน?',
          a: 'ตลาดอนุสารหลังบาซาร์มีตัวเลือก BBQ ภาคเหนือ ซีฟู้ดและขนมมากที่สุด',
        },
        {
          q: 'ควรกินอะไร?',
          a: 'ไส้กรอก northern ข้าวเหนียวมะม่วง ซีฟู้ดย่าง น้ำผลไม้สดและเยลมะพร้าวเป็นที่นิยม',
        },
        {
          q: 'ชิมก่อนซื้อได้ไหม?',
          a: 'ได้ — แผงผลไม้อบแห้ง นัติ์และไส้กรอกมักให้ชิมก่อน',
        },
        {
          q: 'อาหารราคาถูกไหม?',
          a: 'แผงข้างถนนประหยัดมาก ร้านแอร์แพงกว่า แผงเล็กนิยมเงินสด',
        },
      ],
      relatedLabel: 'คู่มือไนท์บาซาร์เพิ่มเติม',
    },
    zh: {
      title: '清迈夜市美食攻略｜吃什么、去哪吃',
      description:
        '清迈夜市美食攻略：阿努珊市场的泰北烧烤、芒果糯米饭、鲜榨果汁与海鲜，外加试吃与砍价小贴士。',
      h1: '清迈夜市美食攻略',
      intro:
        '美食是来夜市的一半理由。从阿努珊市场美食街到河畔小吃，下面是夜市里吃什么、去哪吃。',
      updated: '美食建议已于 2026 年 10 月核对（现场观察）。',
      sections: [
        {
          heading: '阿努珊市场美食街',
          body: '夜市背后的阿努珊市场是规模最大的美食聚集区：泰北烧烤、烤海鲜、芒果糯米饭、鲜榨果汁与椰奶冻。许多摊可先试吃再买。',
        },
        {
          heading: '必吃清单',
          body: '试试泰北香肠（ไส้อั่ว）、附近金面、芒果糯米饭、烤海鲜、鲜榨甘蔗与果汁，以及椰奶冻。分量适合分享，约朋友一起来多尝几样。',
        },
        {
          heading: '饮品与甜点',
          body: '鲜榨果昔、泰式奶茶与椰系甜品在炎热一天后便宜又清爽。挑本地人稳定排队的摊位更稳。',
        },
        {
          heading: '省钱吃法',
          body: '美食摊很便宜，有空调的堂食餐厅更贵。多比几家、看分量，并备好现金——小摊位多不收卡。',
        },
      ],
      faq: [
        {
          q: '夜市哪里的食物最好？',
          a: '夜市背后的阿努珊市场选择最广，泰北烧烤、海鲜与小吃一应俱全。',
        },
        {
          q: '应该吃什么？',
          a: '泰北香肠、芒果糯米饭、烤海鲜、鲜榨果汁与椰奶冻是当地最受欢迎的。',
        },
        {
          q: '可以先尝再买吗？',
          a: '可以——美食摊的水果干、坚果与香肠常可先试吃。',
        },
        {
          q: '东西便宜吗？',
          a: '街边摊很实惠，空调餐厅更贵；小摊偏好现金。',
        },
      ],
      relatedLabel: '更多夜市攻略',
    },
  },
  'kalare-night-bazaar': {
    en: {
      title: 'Kalare Night Bazaar Chiang Mai | Stage Shows, Food & Shopping',
      description:
        'Kalare Night Bazaar is the performance zone of Chiang Mai Night Bazaar: a fixed Lanna dance and live-music stage, plus craft stalls and riverside bars.',
      h1: 'Kalare Night Bazaar Chiang Mai',
      intro:
        'Kalare is the entertainment heart of the Night Bazaar — a fixed open stage with Lanna dance and live music, surrounded by craft stalls, food and bars. Here is what to expect.',
      updated: 'Details verified October 2026 (on-site observation).',
      sections: [
        {
          heading: 'The Kalare stage',
          body: 'The open-air stage typically runs shows from around 20:00 to 22:00, mixing traditional Lanna dance with modern live music. Arrive a bit early to grab a seat at the surrounding cafés and bars.',
        },
        {
          heading: 'Shopping around Kalare',
          body: 'The area behind the stage is lined with craft and souvenir stalls — silver, cotton, aromatherapy and original design — similar to the main street but with its own layout.',
        },
        {
          heading: 'Food & drinks',
          body: 'Riverside cafés and bars around Kalare are good for a cold drink while listening to the music. For a fuller meal, walk a minute to Anusarn Market.',
        },
        {
          heading: 'Best time to visit',
          body: 'The stage is the main draw after 20:00. If you mainly want crafts, the earlier blue-hour window on the main street is better; come to Kalare for the nightlife atmosphere.',
        },
      ],
      faq: [
        {
          q: 'What is Kalare Night Bazaar?',
          a: 'It is the performance zone of the Chiang Mai Night Bazaar, centered on a fixed Lanna dance and live-music stage.',
        },
        {
          q: 'What time are the shows?',
          a: 'Shows usually run about 20:00–22:00; arrive early for a seat at the surrounding cafés and bars.',
        },
        {
          q: 'Is there food at Kalare?',
          a: 'Yes — riverside cafés and bars, with the bigger Anusarn food street a short walk away.',
        },
        {
          q: 'When should I visit Kalare?',
          a: 'After 20:00 for the stage and nightlife; earlier for crafts on the main street.',
        },
      ],
      relatedLabel: 'More Night Bazaar guides',
    },
    th: {
      title: 'กาแลไนท์บาซาร์เชียงใหม่ | เวทีแสดง อาหาร และช้อปปิ้ง',
      description:
        'กาแลคือโซนบันเทิงของไนท์บาซาร์เชียงใหม่: เวทีเต้นรำล้านนาและดนตรีสด รายล้อมด้วยแผงหัตถกรรมและบาร์ริมน้ำ',
      h1: 'กาแลไนท์บาซาร์เชียงใหม่',
      intro:
        'กาแลคือหัวใจบันเทิงของไนท์บาซาร์ — เวทีเปิดที่มีทั้งรำล้านนาและดนตรีสด รายล้อมด้วยแผงของ อาหารและบาร์ นี่คือสิ่งที่จะเจอ',
      updated: 'รายละเอียด ตุลาคม 2026 (สังเกตหน้างาน)',
      sections: [
        {
          heading: 'เวทีกาแล',
          body: 'เวทีเปิดมักแสดงราว 20:00–22:00 ผสมรำล้านนาดั้งเดิมและดนตรีสดสมัยใหม่ มาเร็วก่อนหน่อยเพื่อจองที่นั่งร้านกาแฟและบาร์รอบเวที',
        },
        {
          heading: 'ช้อปปิ้งรอบกาแล',
          body: 'โซนหลังเวทีเรียงด้วยแผงหัตถกรรมและของที่ระลึก — เงิน Cotton อโรม่าและดีไซน์ คล้ายถนนหลักแต่มีจุดจัดเรียงของตัวเอง',
        },
        {
          heading: 'อาหารและเครื่องดื่ม',
          body: 'คาเฟ่และบาร์ริมน้ำรอบกาแลเหมาะนั่งจิบ while ฟังเพลง ถ้าอยากกินจริงแวะอนุสารที่เดินแป๊บเดียว',
        },
        {
          heading: 'เวลาเที่ยวดีสุด',
          body: 'เวทีคือจุดเด่นหลัง 20:00 ถ้าอยากแค่หาของ ช่วงบลูอาวร์บนถนนหลักตอนแรกดีกว่า มากาแลเพื่อบรรยากาศไนท์ไลฟ์',
        },
      ],
      faq: [
        {
          q: 'กาแลไนท์บาซาร์คืออะไร?',
          a: 'เป็นโซนบันเทิงของไนท์บาซาร์เชียงใหม่ มีคเวทีรำล้านนาและดนตรีสด',
        },
        {
          q: 'การแสดงเวลาไหน?',
          a: 'แสดงราว 20:00–22:00 มาแต่เนิ่นๆ เพื่อที่นั่งร้านกาแฟและบาร์',
        },
        {
          q: 'มีอาหารที่กาแลไหม?',
          a: 'มี — คาเฟ่และบาร์ริมน้ำ ส่วนตลาดอาหารอนุสารเดินแป๊บเดียว',
        },
        {
          q: 'ควรมาเมื่อไหร่?',
          a: 'หลัง 20:00 สำหรับเวทีและไนท์ไลฟ์ ตอนแรกสำหรับของบนถนนหลัก',
        },
      ],
      relatedLabel: 'คู่มือไนท์บาซาร์เพิ่มเติม',
    },
    zh: {
      title: 'Kalare 夜市区｜舞台演出、美食与购物',
      description:
        'Kalare 夜市区是清迈夜市的表演核心：固定兰纳舞蹈与现场音乐舞台，外加手工艺摊与河畔酒吧。',
      h1: 'Kalare 夜市区',
      intro:
        'Kalare 是夜市的娱乐心脏——一座固定露天舞台带来兰纳舞蹈与现场音乐，四周环绕手工艺摊、美食与酒吧。下面是你会看到的样子。',
      updated: '细节已于 2026 年 10 月核对（现场观察）。',
      sections: [
        {
          heading: 'Kalare 舞台',
          body: '露天舞台通常约 20:00–22:00 有演出，融合传统兰纳舞蹈与现代现场音乐。早一点到，可在周边咖啡与酒吧占到座位。',
        },
        {
          heading: '舞台周边购物',
          body: '舞台后方一排排手工艺与纪念品摊——银器、棉织、香薰与原创设计，和主街类似但布局自有特色。',
        },
        {
          heading: '美食与饮品',
          body: 'Kalare 周边河畔咖啡与酒吧适合边听歌边小酌；想吃正餐，走一分钟到阿努珊市场即可。',
        },
        {
          heading: '最佳到访时间',
          body: '舞台是 20:00 后的主角。若主要淘货，主街蓝调时刻更早更合适；来 Kalare 就为夜生活氛围。',
        },
      ],
      faq: [
        {
          q: 'Kalare 夜市区是什么？',
          a: '它是清迈夜市的表演区，以固定的兰纳舞蹈与现场音乐舞台为核心。',
        },
        {
          q: '演出几点？',
          a: '演出通常约 20:00–22:00；早点到周边咖啡与酒吧占座。',
        },
        {
          q: 'Kalare 有吃的吗？',
          a: '有——河畔咖啡与酒吧，更大的阿努珊美食街步行片刻即达。',
        },
        {
          q: '什么时候去 Kalare？',
          a: '20:00 后看舞台与夜生活；早一点则适合主街淘货。',
        },
      ],
      relatedLabel: '更多夜市攻略',
    },
  },
  'nearby-hotels': {
    en: {
      title: 'Hotels Near Chiang Mai Night Bazaar | Where to Stay',
      description:
        'Where to stay near Chiang Mai Night Bazaar: market-side hotels for steps-away convenience, Old City hostels, and Nimman/airport options with easy rides.',
      h1: 'Hotels Near Chiang Mai Night Bazaar',
      intro:
        'Want to wake up at the market mouth? These stay options balance walking distance, price and convenience for a Night Bazaar visit.',
      updated: 'Stay tips verified October 2026.',
      sections: [
        {
          heading: 'Hotels along Changklan Road',
          body: 'Staying right on Changklan puts the bazaar at your doorstep — walk 1–5 minutes to the stalls. Most convenient for late nights, but pricier and busiest in high season.',
        },
        {
          heading: 'Old City hostels',
          body: 'The Old City (near Tha Phae Gate) is cultural and calm at night, with many dining choices. Walk 15–20 minutes or take a Songthaew 5 minutes to the market.',
        },
        {
          heading: 'Nimman & airport area',
          body: 'Nimman has hip cafés and shops; the airport area is handy for flights. Both are 15–20 minutes by ride-hailing — a bit far but good if you prefer those neighborhoods.',
        },
        {
          heading: 'Booking tips',
          body: 'In cool season (Dec–Jan) and around Songkran the market is busiest — book market-side hotels early. For quiet, pick north-mouth or alley hotels; with luggage, prefer ride-hailing.',
        },
      ],
      faq: [
        {
          q: 'What is the closest place to stay?',
          a: 'Hotels along Changklan Road put you 1–5 minutes’ walk from the bazaar.',
        },
        {
          q: 'Is the Old City good for the Night Bazaar?',
          a: 'Yes — near Tha Phae Gate, 15–20 min walk or a 5-min Songthaew ride; quieter nightlife.',
        },
        {
          q: 'How far is Nimman from the market?',
          a: 'About 15–20 minutes by ride-hailing; good if you prefer cafés and shopping there.',
        },
        {
          q: 'When should I book?',
          a: 'Book market-side hotels early in cool season (Dec–Jan) and around Songkran, when it is busiest.',
        },
      ],
      relatedLabel: 'More Night Bazaar guides',
    },
    th: {
      title: 'โรงแรมใกล้ไนท์บาซาร์เชียงใหม่ | พักที่ไหนดี',
      description:
        'พักที่ไหนใกล้ไนท์บาซาร์เชียงใหม่: โรงแรมริมช้างคลานเดินปุ๊บปั๊บ โฮสเทลเมืองเก่า และย่านนิมมาน/สนามบินที่เดินทางง่าย',
      h1: 'โรงแรมใกล้ไนท์บาซาร์เชียงใหม่',
      intro:
        'อยากตื่นที่ปากตลาด? ตัวเลือกพักเหล่านี้ช่วยเรื่องระยะเดิน ราคาและความสะดวกสำหรับเที่ยวไนท์บาซาร์',
      updated: 'ทิพพัก ตุลาคม 2026',
      sections: [
        {
          heading: 'โรงแรมริมถนนช้างคลาน',
          body: 'พักริมช้างคลานทำให้ตลาดอยู่หน้าห้อง — เดิน 1–5 นาทีถึงแผง สะดวกสุดสำหรับคืนดึก แต่แพงกว่าและแน่นสุดในไฮซีซัน',
        },
        {
          heading: 'โฮสเทลเมืองเก่า',
          body: 'เมืองเก่า (ใกล้ประตูท่าแพ) วัฒนธรรมดีและค่อนข้างสงบตอนคืน มีร้านอาหารเยอะ เดิน 15–20 นาทีหรือสองแถว 5 นาที到ตลาด',
        },
        {
          heading: 'ย่านนิมมานและสนามบิน',
          body: 'นิมมานมีคาเฟ่ชิกและร้านช้อป สนามบินสะดวกต่อเที่ยวบิน ทั้งคู่ห่างรถ 15–20 นาที — ไกลนิด但ดีหากชอบย่านนั้น',
        },
        {
          heading: 'ทิปจอง',
          body: 'หนาว (ธ.ค.–ม.ค.) และช่วงสงกรานต์ตลาดแน่นสุด — จองโรงแรมปากตลาดล่วงหน้า อยากเงียบเลือกปากเหนือหรือซอย มีกระเป๋าแนะนำแอปรถ',
        },
      ],
      faq: [
        {
          q: 'พักที่ไหนใกล้สุด?',
          a: 'โรงแรมริมช้างคลานเดิน 1–5 นาทีถึงบาซาร์',
        },
        {
          q: 'เมืองเกว่าเหมาะกับไนท์บาซาร์ไหม?',
          a: 'เหมาะ — ใกล้ประตูท่าแพ เดิน 15–20 นาทีหรือสองแถว 5 นาที ไนท์ไลฟ์สงบกว่า',
        },
        {
          q: 'นิมมานห่างตลาดเท่าไหร่?',
          a: 'รถ 15–20 นาที เหมาะหากชอบคาเฟ่และช้อปปิ้งย่านนั้น',
        },
        {
          q: 'ควรจองเมื่อไหร่?',
          a: 'จองโรงแรมปากตลาดล่วงหน้าในหนาว (ธ.ค.–ม.ค.) และช่วงสงกรานต์ ที่แน่นสุด',
        },
      ],
      relatedLabel: 'คู่มือไนท์บาซาร์เพิ่มเติม',
    },
    zh: {
      title: '清迈夜市附近酒店｜住哪儿方便',
      description:
        '清迈夜市附近住宿：夜市沿线酒店步行即达、古城旅舍、宁曼路与机场片区网约车便捷。',
      h1: '清迈夜市附近酒店',
      intro:
        '想夜市门口醒来？下面几类住宿在步行距离、价格与便利之间做平衡，适合夜游安排。',
      updated: '住宿建议已于 2026 年 10 月核对。',
      sections: [
        {
          heading: '昌堪路沿线酒店',
          body: '住在昌堪路，夜市就在楼下——步行 1–5 分钟到摊位。深夜最方便，但价格偏高，旺季最旺。',
        },
        {
          heading: '古城旅舍',
          body: '古城（近塔佩门）文化氛围浓、夜间较静，餐饮选择多。步行 15–20 分钟或双条车 5 分钟到夜市。',
        },
        {
          heading: '宁曼路与机场片区',
          body: '宁曼路潮店咖啡多，机场片区赶机方便。两者网约车约 15–20 分钟，稍远但适合偏好这些片区的人。',
        },
        {
          heading: '预订贴士',
          body: '凉季（12–1 月）与宋干节前后夜市最旺，沿线酒店尽早订。想安静选北口或巷内酒店；带行李优先网约车。',
        },
      ],
      faq: [
        {
          q: '最近住哪儿？',
          a: '昌堪路沿线酒店步行 1–5 分钟即达夜市。',
        },
        {
          q: '古城适合逛夜市吗？',
          a: '适合——近塔佩门，步行 15–20 分钟或双条车 5 分钟，夜生活较静。',
        },
        {
          q: '宁曼离夜市多远？',
          a: '网约车约 15–20 分钟；若喜欢那里的咖啡与购物就很合适。',
        },
        {
          q: '什么时候订？',
          a: '凉季（12–1 月）与宋干节前后最旺，沿线酒店尽早预订。',
        },
      ],
      relatedLabel: '更多夜市攻略',
    },
  },
};
