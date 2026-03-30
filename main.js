/**
 * JIANGSU YUREN GROUP - Global JavaScript
 * Multi-language support + UI interactions
 */

// ============================================
// TRANSLATIONS
// ============================================
const TRANSLATIONS = {
  zh: {
    // Navigation
    nav_home: '首页',
    nav_products: '产品中心',
    nav_shoes: '鞋类产品',
    nav_shoes_tactical: '作训鞋',
    nav_shoes_military: '军务鞋',
    nav_uniforms: '职业制服',
    nav_about: '关于我们',
    nav_manufacturing: '生产实力',
    nav_contact: '联系我们',
    nav_get_quote: '获取报价',

    // Hero
    hero_badge: '政府采购指定供应商',
    hero_title_1: '专业军警',
    hero_title_2: '装备制造商',
    hero_desc: '36年专注军警职业装备制造，年产能600万+件/双，为公安、司法、军队提供高品质作训鞋、军务鞋及职业制服。',
    hero_stat_years: '年历史',
    hero_stat_capacity: '年产能',
    hero_stat_capacity_unit: '万+件/双',
    hero_stat_clients: '政府客户',
    hero_cta_products: '查看产品',
    hero_cta_contact: '联系我们',

    // Trust bar
    trust_founded: '成立于1990年',
    trust_iso: 'ISO认证企业',
    trust_brand: '江苏省名牌',
    trust_supplier: '政府采购供应商',

    // Products section
    products_title: '核心产品系列',
    products_subtitle: '专为军警职业需求设计，每一件产品都经过严格品质把控',
    products_view_all: '查看全部产品',

    // Product names
    prod_tactical_boots: '作训鞋系列',
    prod_tactical_boots_desc: '专为高强度训练设计，防滑耐磨，支撑性强。提供黑色、棕色、沙色三种配色。',
    prod_military_boots: '军务鞋系列',
    prod_military_boots_desc: '迷彩配色，符合军事标准，适用于野外作战及日常军务。',
    prod_uniforms: '职业制服系列',
    prod_uniforms_desc: '公安、司法、安保等职业制服，面料优质，版型专业，彰显权威形象。',
    prod_wool: '羊毛衫系列',
    prod_wool_desc: '高品质羊毛材质，保暖舒适，适合寒冷环境下的职业穿着需求。',
    prod_fabric: '坯布面料',
    prod_fabric_desc: '专业军警面料，符合国家标准，可定制规格，满足批量采购需求。',
    prod_view_details: '查看详情',

    // Features
    features_title: '为什么选择玉人集团',
    features_subtitle: '36年专业积累，值得信赖的军警装备合作伙伴',
    feat_quality_title: '品质保证',
    feat_quality_desc: '通过ISO质量管理体系认证，每批产品严格检测，确保符合军警标准。',
    feat_capacity_title: '强大产能',
    feat_capacity_desc: '年产能600万+件/双，具备大批量快速交付能力，满足政府采购需求。',
    feat_experience_title: '36年经验',
    feat_experience_desc: '自1990年创立，深耕军警装备领域，积累丰富的行业经验与技术沉淀。',
    feat_custom_title: '定制服务',
    feat_custom_desc: '支持OEM/ODM定制，可根据客户需求定制款式、颜色、标识及规格。',
    feat_cert_title: '权威认证',
    feat_cert_desc: '政府采购指定供应商，江苏省名牌产品，多项国家及行业标准认证。',
    feat_export_title: '全球出口',
    feat_export_desc: '产品远销欧美、东南亚、中东等地区，具备完善的国际贸易服务体系。',

    // About section
    about_title: '关于江苏玉人集团',
    about_desc_1: '江苏玉人集团成立于1990年，是一家专注于军警职业装备制造的专业企业。经过36年的发展，已成为国内领先的军警装备供应商。',
    about_desc_2: '公司位于江苏省盐城市，拥有现代化生产基地，年产能超过600万件/双。产品涵盖作训鞋、军务鞋、职业制服、羊毛衫及专业面料等系列。',
    about_learn_more: '了解更多',

    // Contact section
    contact_title: '联系我们',
    contact_subtitle: '欢迎政府采购及外贸合作咨询',
    contact_phone: '联系电话',
    contact_email: '电子邮箱',
    contact_address: '公司地址',
    contact_address_val: '江苏省盐城市',
    contact_form_name: '您的姓名',
    contact_form_company: '公司/单位',
    contact_form_email: '电子邮箱',
    contact_form_phone: '联系电话',
    contact_form_product: '感兴趣的产品',
    contact_form_message: '询价内容',
    contact_form_submit: '发送询价',
    contact_form_success: '感谢您的询价，我们将在24小时内回复！',

    // Footer
    footer_desc: '专注军警职业装备制造36年，为政府机构及国际买家提供高品质产品与服务。',
    footer_products: '产品系列',
    footer_company: '公司信息',
    footer_contact: '联系方式',
    footer_copyright: '© 2024 江苏玉人集团 版权所有',
    footer_icp: '苏ICP备XXXXXXXX号',

    // About page
    about_page_title: '关于我们',
    about_page_subtitle: '36年专注，铸就品质',
    about_history_title: '发展历程',
    about_mission_title: '企业使命',
    about_mission_desc: '为军警职业人员提供最可靠、最专业的装备，以品质赢得信任，以服务创造价值。',
    about_vision_title: '企业愿景',
    about_vision_desc: '成为全球领先的军警职业装备制造商，让中国制造的品质走向世界。',
    about_values_title: '核心价值观',

    // Manufacturing page
    mfg_page_title: '生产实力',
    mfg_page_subtitle: '现代化制造，专业品质保障',
    mfg_capacity_title: '生产能力',
    mfg_equipment_title: '设备与技术',
    mfg_quality_title: '质量管控',
    mfg_cert_title: '资质认证',

    // Shoes page
    shoes_page_title: '鞋类产品',
    shoes_page_subtitle: '专业军警用鞋，品质卓越',
    shoes_tactical_title: '作训鞋系列',
    shoes_military_title: '军务鞋系列',

    // Uniforms page
    uniforms_page_title: '职业制服系列',
    uniforms_page_subtitle: '专业形象，权威着装',

    // Products page
    products_page_title: '产品中心',
    products_page_subtitle: '全系列军警职业装备',

    // Contact page
    contact_page_title: '联系我们',
    contact_page_subtitle: '期待与您合作',

    // Common
    learn_more: '了解更多',
    view_details: '查看详情',
    get_quote: '获取报价',
    download_catalog: '下载产品目录',
    back_to_top: '返回顶部',
    home: '首页',
    all_products: '全部产品',
    colors_available: '可选颜色',
    specifications: '产品规格',
    features: '产品特点',
    applications: '适用场景',
    certifications: '资质认证',
    related_products: '相关产品',
  },

  en: {
    nav_home: 'Home',
    nav_products: 'Products',
    nav_shoes: 'Footwear',
    nav_shoes_tactical: 'Tactical Boots',
    nav_shoes_military: 'Military Boots',
    nav_uniforms: 'Uniforms',
    nav_about: 'About Us',
    nav_manufacturing: 'Manufacturing',
    nav_contact: 'Contact',
    nav_get_quote: 'Get Quote',

    hero_badge: 'Government Procurement Supplier',
    hero_title_1: 'Professional Military &',
    hero_title_2: 'Police Equipment',
    hero_desc: '36 years of expertise in military and police equipment manufacturing. 6M+ units annual capacity. Trusted by government agencies across China.',
    hero_stat_years: 'Years',
    hero_stat_capacity: 'Annual',
    hero_stat_capacity_unit: 'M+ Units',
    hero_stat_clients: 'Gov Clients',
    hero_cta_products: 'View Products',
    hero_cta_contact: 'Contact Us',

    trust_founded: 'Est. 1990',
    trust_iso: 'ISO Certified',
    trust_brand: 'Jiangsu Famous Brand',
    trust_supplier: 'Gov. Procurement Supplier',

    products_title: 'Core Product Lines',
    products_subtitle: 'Engineered for military and police professionals, every product meets the highest quality standards',
    products_view_all: 'View All Products',

    prod_tactical_boots: 'Tactical Boots',
    prod_tactical_boots_desc: 'Designed for high-intensity training. Anti-slip, durable, superior support. Available in Black, Brown, and Sand.',
    prod_military_boots: 'Military Boots',
    prod_military_boots_desc: 'Camouflage pattern, military-grade standards. Suitable for field operations and daily military duties.',
    prod_uniforms: 'Professional Uniforms',
    prod_uniforms_desc: 'Police, judicial, and security uniforms. Premium fabric, professional cut, authoritative appearance.',
    prod_wool: 'Wool Knitwear',
    prod_wool_desc: 'High-quality wool material, warm and comfortable. Ideal for cold-weather professional wear.',
    prod_fabric: 'Technical Fabric',
    prod_fabric_desc: 'Professional military-grade fabric meeting national standards. Custom specifications available for bulk orders.',
    prod_view_details: 'View Details',

    features_title: 'Why Choose Yuren Group',
    features_subtitle: '36 years of professional expertise — your trusted military & police equipment partner',
    feat_quality_title: 'Quality Assurance',
    feat_quality_desc: 'ISO quality management certified. Every batch rigorously tested to meet military and police standards.',
    feat_capacity_title: 'Large-Scale Capacity',
    feat_capacity_desc: '6M+ units annual capacity. Rapid large-volume delivery capability for government procurement.',
    feat_experience_title: '36 Years Experience',
    feat_experience_desc: 'Founded in 1990, deep expertise in military & police equipment with rich industry knowledge.',
    feat_custom_title: 'Custom Solutions',
    feat_custom_desc: 'OEM/ODM customization available. Custom styles, colors, logos, and specifications per client requirements.',
    feat_cert_title: 'Authoritative Certifications',
    feat_cert_desc: 'Government procurement designated supplier. Jiangsu Famous Brand. Multiple national and industry certifications.',
    feat_export_title: 'Global Export',
    feat_export_desc: 'Products exported to Europe, Americas, Southeast Asia, Middle East. Complete international trade services.',

    about_title: 'About Jiangsu Yuren Group',
    about_desc_1: 'Jiangsu Yuren Group was founded in 1990, specializing in military and police professional equipment manufacturing. Over 36 years of development, we have become a leading domestic supplier.',
    about_desc_2: 'Located in Yancheng, Jiangsu Province, our modern production base has an annual capacity exceeding 6 million units. Products include tactical boots, military boots, uniforms, knitwear, and technical fabrics.',
    about_learn_more: 'Learn More',

    contact_title: 'Contact Us',
    contact_subtitle: 'Welcome government procurement and international trade inquiries',
    contact_phone: 'Phone',
    contact_email: 'Email',
    contact_address: 'Address',
    contact_address_val: 'Yancheng, Jiangsu Province, China',
    contact_form_name: 'Your Name',
    contact_form_company: 'Company / Organization',
    contact_form_email: 'Email Address',
    contact_form_phone: 'Phone Number',
    contact_form_product: 'Product of Interest',
    contact_form_message: 'Inquiry Details',
    contact_form_submit: 'Send Inquiry',
    contact_form_success: 'Thank you for your inquiry. We will respond within 24 hours!',

    footer_desc: '36 years of military & police equipment manufacturing. Providing high-quality products and services to government agencies and international buyers.',
    footer_products: 'Products',
    footer_company: 'Company',
    footer_contact: 'Contact',
    footer_copyright: '© 2024 Jiangsu Yuren Group. All Rights Reserved.',
    footer_icp: 'ICP No. XXXXXXXX',

    about_page_title: 'About Us',
    about_page_subtitle: '36 Years of Excellence',
    about_history_title: 'Our History',
    about_mission_title: 'Our Mission',
    about_mission_desc: 'To provide the most reliable and professional equipment for military and police personnel, earning trust through quality and creating value through service.',
    about_vision_title: 'Our Vision',
    about_vision_desc: 'To become the world\'s leading manufacturer of military and police professional equipment, bringing Chinese manufacturing quality to the world.',
    about_values_title: 'Core Values',

    mfg_page_title: 'Manufacturing',
    mfg_page_subtitle: 'Modern Manufacturing, Professional Quality',
    mfg_capacity_title: 'Production Capacity',
    mfg_equipment_title: 'Equipment & Technology',
    mfg_quality_title: 'Quality Control',
    mfg_cert_title: 'Certifications',

    shoes_page_title: 'Footwear',
    shoes_page_subtitle: 'Professional Military & Police Footwear',
    shoes_tactical_title: 'Tactical Boots',
    shoes_military_title: 'Military Boots',

    uniforms_page_title: 'Professional Uniforms',
    uniforms_page_subtitle: 'Professional Image, Authoritative Appearance',

    products_page_title: 'Products',
    products_page_subtitle: 'Full Range of Military & Police Equipment',

    contact_page_title: 'Contact Us',
    contact_page_subtitle: 'Looking Forward to Cooperation',

    learn_more: 'Learn More',
    view_details: 'View Details',
    get_quote: 'Get Quote',
    download_catalog: 'Download Catalog',
    back_to_top: 'Back to Top',
    home: 'Home',
    all_products: 'All Products',
    colors_available: 'Available Colors',
    specifications: 'Specifications',
    features: 'Features',
    applications: 'Applications',
    certifications: 'Certifications',
    related_products: 'Related Products',
  },

  ja: {
    nav_home: 'ホーム',
    nav_products: '製品',
    nav_shoes: '靴類',
    nav_shoes_tactical: '戦術ブーツ',
    nav_shoes_military: '軍用ブーツ',
    nav_uniforms: '制服',
    nav_about: '会社概要',
    nav_manufacturing: '製造能力',
    nav_contact: 'お問い合わせ',
    nav_get_quote: '見積もり',
    hero_badge: '政府調達指定サプライヤー',
    hero_title_1: 'プロフェッショナル',
    hero_title_2: '軍警装備メーカー',
    hero_desc: '36年間、軍警職業装備の製造に専念。年間生産能力600万点以上。中国全土の政府機関に信頼されています。',
    hero_stat_years: '年の歴史',
    hero_stat_capacity: '年間',
    hero_stat_capacity_unit: '万点以上',
    hero_stat_clients: '政府顧客',
    hero_cta_products: '製品を見る',
    hero_cta_contact: 'お問い合わせ',
    trust_founded: '1990年創業',
    trust_iso: 'ISO認証取得',
    trust_brand: '江蘇省名ブランド',
    trust_supplier: '政府調達サプライヤー',
    products_title: '主要製品ライン',
    products_subtitle: '軍警のプロフェッショナルのために設計された高品質製品',
    products_view_all: '全製品を見る',
    prod_tactical_boots: '戦術ブーツシリーズ',
    prod_tactical_boots_desc: '高強度訓練向け設計。滑り止め、耐久性、優れたサポート。ブラック、ブラウン、サンドの3色展開。',
    prod_military_boots: '軍用ブーツシリーズ',
    prod_military_boots_desc: '迷彩柄、軍事規格準拠。野外作戦および日常軍務に適用。',
    prod_uniforms: '職業制服シリーズ',
    prod_uniforms_desc: '警察、司法、警備制服。高品質素材、プロフェッショナルなデザイン。',
    prod_wool: 'ウールニットウェア',
    prod_wool_desc: '高品質ウール素材、保温性と快適性を兼備。寒冷地での職業着用に最適。',
    prod_fabric: '技術素材',
    prod_fabric_desc: '国家規格準拠の軍警専用素材。カスタム仕様対応、大量注文可能。',
    prod_view_details: '詳細を見る',
    features_title: 'なぜ玉人集団を選ぶのか',
    features_subtitle: '36年の専門的な蓄積 — 信頼できる軍警装備パートナー',
    feat_quality_title: '品質保証',
    feat_quality_desc: 'ISO品質管理認証取得。全バッチを厳格に検査し、軍警基準に適合。',
    feat_capacity_title: '大規模生産能力',
    feat_capacity_desc: '年間600万点以上の生産能力。政府調達向け大量迅速納品対応。',
    feat_experience_title: '36年の経験',
    feat_experience_desc: '1990年創業、軍警装備分野に深く根ざした豊富な業界経験と技術蓄積。',
    feat_custom_title: 'カスタムソリューション',
    feat_custom_desc: 'OEM/ODMカスタマイズ対応。スタイル、カラー、ロゴ、仕様をご要望に応じて。',
    feat_cert_title: '権威ある認証',
    feat_cert_desc: '政府調達指定サプライヤー。江蘇省名ブランド。複数の国家・業界認証取得。',
    feat_export_title: 'グローバル輸出',
    feat_export_desc: '欧米、東南アジア、中東等に輸出。完全な国際貿易サービス体制。',
    about_title: '江蘇玉人集団について',
    about_desc_1: '江蘇玉人集団は1990年に設立され、軍警職業装備製造に特化した専門企業です。36年の発展を経て、国内トップの軍警装備サプライヤーとなりました。',
    about_desc_2: '江蘇省塩城市に位置し、現代的な生産拠点を有し、年間生産能力は600万点以上。製品は戦術ブーツ、軍用ブーツ、制服、ニットウェア、技術素材を網羅。',
    about_learn_more: '詳しく見る',
    contact_title: 'お問い合わせ',
    contact_subtitle: '政府調達および国際貿易のお問い合わせを歓迎します',
    contact_phone: '電話番号',
    contact_email: 'メールアドレス',
    contact_address: '住所',
    contact_address_val: '中国江蘇省塩城市',
    contact_form_name: 'お名前',
    contact_form_company: '会社名/組織名',
    contact_form_email: 'メールアドレス',
    contact_form_phone: '電話番号',
    contact_form_product: 'ご興味の製品',
    contact_form_message: 'お問い合わせ内容',
    contact_form_submit: '送信する',
    contact_form_success: 'お問い合わせありがとうございます。24時間以内にご返信いたします！',
    footer_desc: '36年間の軍警装備製造。政府機関と国際バイヤーに高品質製品とサービスを提供。',
    footer_products: '製品',
    footer_company: '会社情報',
    footer_contact: 'お問い合わせ',
    footer_copyright: '© 2024 江蘇玉人集団 All Rights Reserved.',
    footer_icp: 'ICP番号 XXXXXXXX',
    about_page_title: '会社概要',
    about_page_subtitle: '36年の卓越性',
    about_history_title: '沿革',
    about_mission_title: '企業使命',
    about_mission_desc: '軍警職業人員に最も信頼性が高く専門的な装備を提供し、品質で信頼を勝ち取り、サービスで価値を創造する。',
    about_vision_title: '企業ビジョン',
    about_vision_desc: '世界をリードする軍警職業装備メーカーとなり、中国製造の品質を世界へ。',
    about_values_title: 'コアバリュー',
    mfg_page_title: '製造能力',
    mfg_page_subtitle: '現代的製造、プロフェッショナル品質',
    mfg_capacity_title: '生産能力',
    mfg_equipment_title: '設備と技術',
    mfg_quality_title: '品質管理',
    mfg_cert_title: '認証',
    shoes_page_title: '靴類製品',
    shoes_page_subtitle: 'プロフェッショナル軍警用靴',
    shoes_tactical_title: '戦術ブーツシリーズ',
    shoes_military_title: '軍用ブーツシリーズ',
    uniforms_page_title: '職業制服シリーズ',
    uniforms_page_subtitle: 'プロフェッショナルイメージ、権威ある着装',
    products_page_title: '製品センター',
    products_page_subtitle: '全シリーズ軍警職業装備',
    contact_page_title: 'お問い合わせ',
    contact_page_subtitle: 'ご協力をお待ちしております',
    learn_more: '詳しく見る',
    view_details: '詳細を見る',
    get_quote: '見積もりを取得',
    download_catalog: 'カタログをダウンロード',
    back_to_top: 'トップへ戻る',
    home: 'ホーム',
    all_products: '全製品',
    colors_available: '選択可能なカラー',
    specifications: '製品仕様',
    features: '製品特徴',
    applications: '適用シーン',
    certifications: '認証',
    related_products: '関連製品',
  },

  ko: {
    nav_home: '홈',
    nav_products: '제품',
    nav_shoes: '신발류',
    nav_shoes_tactical: '전술 부츠',
    nav_shoes_military: '군용 부츠',
    nav_uniforms: '유니폼',
    nav_about: '회사 소개',
    nav_manufacturing: '제조 역량',
    nav_contact: '문의하기',
    nav_get_quote: '견적 요청',
    hero_badge: '정부 조달 지정 공급업체',
    hero_title_1: '전문 군경',
    hero_title_2: '장비 제조업체',
    hero_desc: '36년간 군경 직업 장비 제조에 전념. 연간 생산 능력 600만+ 개. 중국 전역 정부 기관의 신뢰를 받고 있습니다.',
    hero_stat_years: '년 역사',
    hero_stat_capacity: '연간',
    hero_stat_capacity_unit: '만+ 개',
    hero_stat_clients: '정부 고객',
    hero_cta_products: '제품 보기',
    hero_cta_contact: '문의하기',
    trust_founded: '1990년 설립',
    trust_iso: 'ISO 인증',
    trust_brand: '장쑤성 유명 브랜드',
    trust_supplier: '정부 조달 공급업체',
    products_title: '핵심 제품 라인',
    products_subtitle: '군경 전문가를 위해 설계된 고품질 제품',
    products_view_all: '전체 제품 보기',
    prod_tactical_boots: '전술 부츠 시리즈',
    prod_tactical_boots_desc: '고강도 훈련을 위한 설계. 미끄럼 방지, 내구성, 우수한 지지력. 블랙, 브라운, 샌드 3가지 색상.',
    prod_military_boots: '군용 부츠 시리즈',
    prod_military_boots_desc: '위장 패턴, 군사 규격 준수. 야외 작전 및 일상 군무에 적합.',
    prod_uniforms: '직업 유니폼 시리즈',
    prod_uniforms_desc: '경찰, 사법, 보안 유니폼. 고품질 원단, 전문적인 디자인.',
    prod_wool: '울 니트웨어',
    prod_wool_desc: '고품질 울 소재, 보온성과 편안함. 한랭 환경에서의 직업 착용에 이상적.',
    prod_fabric: '기술 원단',
    prod_fabric_desc: '국가 표준 준수 군경 전용 원단. 맞춤 사양 가능, 대량 주문 가능.',
    prod_view_details: '자세히 보기',
    features_title: '왜 위런 그룹을 선택하는가',
    features_subtitle: '36년의 전문적 축적 — 신뢰할 수 있는 군경 장비 파트너',
    feat_quality_title: '품질 보증',
    feat_quality_desc: 'ISO 품질 관리 인증. 모든 배치를 엄격히 검사하여 군경 기준 충족.',
    feat_capacity_title: '대규모 생산 능력',
    feat_capacity_desc: '연간 600만+ 개 생산 능력. 정부 조달을 위한 대량 신속 납품 가능.',
    feat_experience_title: '36년 경험',
    feat_experience_desc: '1990년 설립, 군경 장비 분야에 깊이 뿌리내린 풍부한 업계 경험.',
    feat_custom_title: '맞춤 솔루션',
    feat_custom_desc: 'OEM/ODM 맞춤화 가능. 스타일, 색상, 로고, 사양을 고객 요구에 맞게.',
    feat_cert_title: '권위 있는 인증',
    feat_cert_desc: '정부 조달 지정 공급업체. 장쑤성 유명 브랜드. 다수의 국가 및 업계 인증.',
    feat_export_title: '글로벌 수출',
    feat_export_desc: '유럽, 미주, 동남아시아, 중동 등에 수출. 완전한 국제 무역 서비스.',
    about_title: '장쑤 위런 그룹 소개',
    about_desc_1: '장쑤 위런 그룹은 1990년에 설립되어 군경 직업 장비 제조에 특화된 전문 기업입니다. 36년의 발전을 거쳐 국내 선도적인 군경 장비 공급업체가 되었습니다.',
    about_desc_2: '장쑤성 옌청시에 위치하며 현대적인 생산 기지를 보유하고 있으며 연간 생산 능력은 600만 개 이상입니다.',
    about_learn_more: '더 알아보기',
    contact_title: '문의하기',
    contact_subtitle: '정부 조달 및 국제 무역 문의를 환영합니다',
    contact_phone: '전화번호',
    contact_email: '이메일',
    contact_address: '주소',
    contact_address_val: '중국 장쑤성 옌청시',
    contact_form_name: '성함',
    contact_form_company: '회사/기관명',
    contact_form_email: '이메일 주소',
    contact_form_phone: '전화번호',
    contact_form_product: '관심 제품',
    contact_form_message: '문의 내용',
    contact_form_submit: '문의 보내기',
    contact_form_success: '문의해 주셔서 감사합니다. 24시간 이내에 답변 드리겠습니다!',
    footer_desc: '36년간의 군경 장비 제조. 정부 기관과 국제 바이어에게 고품질 제품과 서비스 제공.',
    footer_products: '제품',
    footer_company: '회사 정보',
    footer_contact: '연락처',
    footer_copyright: '© 2024 장쑤 위런 그룹. All Rights Reserved.',
    footer_icp: 'ICP 번호 XXXXXXXX',
    about_page_title: '회사 소개',
    about_page_subtitle: '36년의 탁월함',
    about_history_title: '연혁',
    about_mission_title: '기업 사명',
    about_mission_desc: '군경 직업인에게 가장 신뢰할 수 있고 전문적인 장비를 제공하여 품질로 신뢰를 얻고 서비스로 가치를 창출한다.',
    about_vision_title: '기업 비전',
    about_vision_desc: '세계 선도적인 군경 직업 장비 제조업체가 되어 중국 제조의 품질을 세계로.',
    about_values_title: '핵심 가치',
    mfg_page_title: '제조 역량',
    mfg_page_subtitle: '현대적 제조, 전문적 품질',
    mfg_capacity_title: '생산 능력',
    mfg_equipment_title: '설비 및 기술',
    mfg_quality_title: '품질 관리',
    mfg_cert_title: '인증',
    shoes_page_title: '신발류 제품',
    shoes_page_subtitle: '전문 군경용 신발',
    shoes_tactical_title: '전술 부츠 시리즈',
    shoes_military_title: '군용 부츠 시리즈',
    uniforms_page_title: '직업 유니폼 시리즈',
    uniforms_page_subtitle: '전문적 이미지, 권위 있는 착장',
    products_page_title: '제품 센터',
    products_page_subtitle: '전 시리즈 군경 직업 장비',
    contact_page_title: '문의하기',
    contact_page_subtitle: '협력을 기대합니다',
    learn_more: '더 알아보기',
    view_details: '자세히 보기',
    get_quote: '견적 받기',
    download_catalog: '카탈로그 다운로드',
    back_to_top: '맨 위로',
    home: '홈',
    all_products: '전체 제품',
    colors_available: '선택 가능한 색상',
    specifications: '제품 사양',
    features: '제품 특징',
    applications: '적용 분야',
    certifications: '인증',
    related_products: '관련 제품',
  },

  fr: {
    nav_home: 'Accueil',
    nav_products: 'Produits',
    nav_shoes: 'Chaussures',
    nav_shoes_tactical: 'Bottes Tactiques',
    nav_shoes_military: 'Bottes Militaires',
    nav_uniforms: 'Uniformes',
    nav_about: 'À Propos',
    nav_manufacturing: 'Fabrication',
    nav_contact: 'Contact',
    nav_get_quote: 'Devis',
    hero_badge: 'Fournisseur Agréé Gouvernemental',
    hero_title_1: 'Équipements Militaires',
    hero_title_2: '& Police Professionnels',
    hero_desc: '36 ans d\'expertise dans la fabrication d\'équipements militaires et policiers. Capacité annuelle de 6M+ unités. Approuvé par les agences gouvernementales.',
    hero_stat_years: 'Ans',
    hero_stat_capacity: 'Annuel',
    hero_stat_capacity_unit: 'M+ Unités',
    hero_stat_clients: 'Clients Gov.',
    hero_cta_products: 'Voir Produits',
    hero_cta_contact: 'Nous Contacter',
    trust_founded: 'Fondé en 1990',
    trust_iso: 'Certifié ISO',
    trust_brand: 'Marque Célèbre Jiangsu',
    trust_supplier: 'Fournisseur Gouvernemental',
    products_title: 'Gammes de Produits',
    products_subtitle: 'Conçus pour les professionnels militaires et policiers, chaque produit répond aux normes de qualité les plus élevées',
    products_view_all: 'Voir Tous les Produits',
    prod_tactical_boots: 'Bottes Tactiques',
    prod_tactical_boots_desc: 'Conçues pour l\'entraînement intensif. Antidérapantes, durables, excellent soutien. Disponibles en Noir, Marron et Sable.',
    prod_military_boots: 'Bottes Militaires',
    prod_military_boots_desc: 'Motif camouflage, normes militaires. Adaptées aux opérations de terrain et aux tâches militaires quotidiennes.',
    prod_uniforms: 'Uniformes Professionnels',
    prod_uniforms_desc: 'Uniformes police, judiciaires et sécurité. Tissu premium, coupe professionnelle, apparence autoritaire.',
    prod_wool: 'Tricots en Laine',
    prod_wool_desc: 'Laine haute qualité, chaud et confortable. Idéal pour le port professionnel en temps froid.',
    prod_fabric: 'Tissu Technique',
    prod_fabric_desc: 'Tissu militaire professionnel conforme aux normes nationales. Spécifications personnalisées pour commandes en gros.',
    prod_view_details: 'Voir Détails',
    features_title: 'Pourquoi Choisir Yuren Group',
    features_subtitle: '36 ans d\'expertise professionnelle — votre partenaire de confiance',
    feat_quality_title: 'Assurance Qualité',
    feat_quality_desc: 'Certifié ISO. Chaque lot rigoureusement testé selon les normes militaires et policières.',
    feat_capacity_title: 'Grande Capacité',
    feat_capacity_desc: 'Capacité annuelle 6M+ unités. Livraison rapide en grande quantité pour marchés publics.',
    feat_experience_title: '36 Ans d\'Expérience',
    feat_experience_desc: 'Fondé en 1990, expertise approfondie dans les équipements militaires et policiers.',
    feat_custom_title: 'Solutions Personnalisées',
    feat_custom_desc: 'Personnalisation OEM/ODM disponible. Styles, couleurs, logos et spécifications sur mesure.',
    feat_cert_title: 'Certifications Officielles',
    feat_cert_desc: 'Fournisseur agréé gouvernemental. Marque Célèbre Jiangsu. Multiples certifications nationales.',
    feat_export_title: 'Export Mondial',
    feat_export_desc: 'Produits exportés en Europe, Amériques, Asie du Sud-Est, Moyen-Orient.',
    about_title: 'À Propos de Jiangsu Yuren Group',
    about_desc_1: 'Jiangsu Yuren Group a été fondé en 1990, spécialisé dans la fabrication d\'équipements militaires et policiers. Après 36 ans de développement, nous sommes devenus un fournisseur leader.',
    about_desc_2: 'Situé à Yancheng, Jiangsu, notre base de production moderne a une capacité annuelle dépassant 6 millions d\'unités.',
    about_learn_more: 'En Savoir Plus',
    contact_title: 'Contactez-Nous',
    contact_subtitle: 'Bienvenue pour les demandes de marchés publics et de commerce international',
    contact_phone: 'Téléphone',
    contact_email: 'Email',
    contact_address: 'Adresse',
    contact_address_val: 'Yancheng, Province du Jiangsu, Chine',
    contact_form_name: 'Votre Nom',
    contact_form_company: 'Société / Organisation',
    contact_form_email: 'Adresse Email',
    contact_form_phone: 'Numéro de Téléphone',
    contact_form_product: 'Produit d\'Intérêt',
    contact_form_message: 'Détails de la Demande',
    contact_form_submit: 'Envoyer la Demande',
    contact_form_success: 'Merci pour votre demande. Nous répondrons dans les 24 heures!',
    footer_desc: '36 ans de fabrication d\'équipements militaires et policiers. Produits et services de haute qualité.',
    footer_products: 'Produits',
    footer_company: 'Société',
    footer_contact: 'Contact',
    footer_copyright: '© 2024 Jiangsu Yuren Group. Tous droits réservés.',
    footer_icp: 'ICP N° XXXXXXXX',
    about_page_title: 'À Propos',
    about_page_subtitle: '36 Ans d\'Excellence',
    about_history_title: 'Notre Histoire',
    about_mission_title: 'Notre Mission',
    about_mission_desc: 'Fournir les équipements les plus fiables et professionnels au personnel militaire et policier.',
    about_vision_title: 'Notre Vision',
    about_vision_desc: 'Devenir le fabricant mondial leader d\'équipements militaires et policiers professionnels.',
    about_values_title: 'Valeurs Fondamentales',
    mfg_page_title: 'Fabrication',
    mfg_page_subtitle: 'Fabrication Moderne, Qualité Professionnelle',
    mfg_capacity_title: 'Capacité de Production',
    mfg_equipment_title: 'Équipements & Technologie',
    mfg_quality_title: 'Contrôle Qualité',
    mfg_cert_title: 'Certifications',
    shoes_page_title: 'Chaussures',
    shoes_page_subtitle: 'Chaussures Militaires & Police Professionnelles',
    shoes_tactical_title: 'Bottes Tactiques',
    shoes_military_title: 'Bottes Militaires',
    uniforms_page_title: 'Uniformes Professionnels',
    uniforms_page_subtitle: 'Image Professionnelle, Apparence Autoritaire',
    products_page_title: 'Produits',
    products_page_subtitle: 'Gamme Complète d\'Équipements',
    contact_page_title: 'Contact',
    contact_page_subtitle: 'Dans l\'Attente de Notre Coopération',
    learn_more: 'En Savoir Plus',
    view_details: 'Voir Détails',
    get_quote: 'Obtenir un Devis',
    download_catalog: 'Télécharger le Catalogue',
    back_to_top: 'Haut de Page',
    home: 'Accueil',
    all_products: 'Tous les Produits',
    colors_available: 'Couleurs Disponibles',
    specifications: 'Spécifications',
    features: 'Caractéristiques',
    applications: 'Applications',
    certifications: 'Certifications',
    related_products: 'Produits Connexes',
  },

  de: {
    nav_home: 'Startseite',
    nav_products: 'Produkte',
    nav_shoes: 'Schuhe',
    nav_shoes_tactical: 'Taktische Stiefel',
    nav_shoes_military: 'Militärstiefel',
    nav_uniforms: 'Uniformen',
    nav_about: 'Über Uns',
    nav_manufacturing: 'Fertigung',
    nav_contact: 'Kontakt',
    nav_get_quote: 'Angebot',
    hero_badge: 'Staatlich Zugelassener Lieferant',
    hero_title_1: 'Professionelle Militär- &',
    hero_title_2: 'Polizeiausrüstung',
    hero_desc: '36 Jahre Expertise in der Herstellung von Militär- und Polizeiausrüstung. Jahreskapazität 6M+ Einheiten. Vertraut von Regierungsbehörden.',
    hero_stat_years: 'Jahre',
    hero_stat_capacity: 'Jährlich',
    hero_stat_capacity_unit: 'M+ Einh.',
    hero_stat_clients: 'Gov. Kunden',
    hero_cta_products: 'Produkte Ansehen',
    hero_cta_contact: 'Kontakt',
    trust_founded: 'Gegr. 1990',
    trust_iso: 'ISO Zertifiziert',
    trust_brand: 'Jiangsu Markenprodukt',
    trust_supplier: 'Staatl. Lieferant',
    products_title: 'Kernproduktlinien',
    products_subtitle: 'Für Militär- und Polizeiprofis entwickelt, jedes Produkt erfüllt höchste Qualitätsstandards',
    products_view_all: 'Alle Produkte Ansehen',
    prod_tactical_boots: 'Taktische Stiefel',
    prod_tactical_boots_desc: 'Für intensives Training entwickelt. Rutschfest, langlebig, hervorragender Halt. In Schwarz, Braun und Sand erhältlich.',
    prod_military_boots: 'Militärstiefel',
    prod_military_boots_desc: 'Tarnmuster, Militärstandard. Geeignet für Feldeinsätze und tägliche Militäraufgaben.',
    prod_uniforms: 'Berufsuniformen',
    prod_uniforms_desc: 'Polizei-, Justiz- und Sicherheitsuniformen. Premium-Stoff, professioneller Schnitt.',
    prod_wool: 'Wollstrickwaren',
    prod_wool_desc: 'Hochwertige Wolle, warm und komfortabel. Ideal für professionelles Tragen in kalten Umgebungen.',
    prod_fabric: 'Technisches Gewebe',
    prod_fabric_desc: 'Professionelles Militärgewebe nach nationalen Standards. Individuelle Spezifikationen für Großbestellungen.',
    prod_view_details: 'Details Ansehen',
    features_title: 'Warum Yuren Group Wählen',
    features_subtitle: '36 Jahre professionelle Expertise — Ihr vertrauenswürdiger Partner',
    feat_quality_title: 'Qualitätssicherung',
    feat_quality_desc: 'ISO-zertifiziert. Jede Charge streng getestet nach Militär- und Polizeistandards.',
    feat_capacity_title: 'Große Kapazität',
    feat_capacity_desc: 'Jahreskapazität 6M+ Einheiten. Schnelle Großmengenlieferung für öffentliche Beschaffung.',
    feat_experience_title: '36 Jahre Erfahrung',
    feat_experience_desc: 'Gegründet 1990, tiefe Expertise im Bereich Militär- und Polizeiausrüstung.',
    feat_custom_title: 'Individuelle Lösungen',
    feat_custom_desc: 'OEM/ODM-Anpassung verfügbar. Stile, Farben, Logos und Spezifikationen nach Kundenwunsch.',
    feat_cert_title: 'Offizielle Zertifizierungen',
    feat_cert_desc: 'Staatlich zugelassener Lieferant. Jiangsu Markenprodukt. Mehrere nationale Zertifizierungen.',
    feat_export_title: 'Weltweiter Export',
    feat_export_desc: 'Produkte exportiert nach Europa, Amerika, Südostasien, Naher Osten.',
    about_title: 'Über Jiangsu Yuren Group',
    about_desc_1: 'Jiangsu Yuren Group wurde 1990 gegründet und ist auf die Herstellung von Militär- und Polizeiausrüstung spezialisiert. Nach 36 Jahren Entwicklung sind wir ein führender Lieferant.',
    about_desc_2: 'In Yancheng, Jiangsu gelegen, verfügt unsere moderne Produktionsstätte über eine Jahreskapazität von über 6 Millionen Einheiten.',
    about_learn_more: 'Mehr Erfahren',
    contact_title: 'Kontaktieren Sie Uns',
    contact_subtitle: 'Anfragen für öffentliche Beschaffung und internationalen Handel willkommen',
    contact_phone: 'Telefon',
    contact_email: 'E-Mail',
    contact_address: 'Adresse',
    contact_address_val: 'Yancheng, Provinz Jiangsu, China',
    contact_form_name: 'Ihr Name',
    contact_form_company: 'Unternehmen / Organisation',
    contact_form_email: 'E-Mail-Adresse',
    contact_form_phone: 'Telefonnummer',
    contact_form_product: 'Produkt von Interesse',
    contact_form_message: 'Anfrage Details',
    contact_form_submit: 'Anfrage Senden',
    contact_form_success: 'Vielen Dank für Ihre Anfrage. Wir antworten innerhalb von 24 Stunden!',
    footer_desc: '36 Jahre Herstellung von Militär- und Polizeiausrüstung. Hochwertige Produkte und Dienstleistungen.',
    footer_products: 'Produkte',
    footer_company: 'Unternehmen',
    footer_contact: 'Kontakt',
    footer_copyright: '© 2024 Jiangsu Yuren Group. Alle Rechte vorbehalten.',
    footer_icp: 'ICP Nr. XXXXXXXX',
    about_page_title: 'Über Uns',
    about_page_subtitle: '36 Jahre Exzellenz',
    about_history_title: 'Unsere Geschichte',
    about_mission_title: 'Unsere Mission',
    about_mission_desc: 'Die zuverlässigste und professionellste Ausrüstung für Militär- und Polizeipersonal bereitzustellen.',
    about_vision_title: 'Unsere Vision',
    about_vision_desc: 'Der weltweit führende Hersteller von Militär- und Polizeiausrüstung zu werden.',
    about_values_title: 'Kernwerte',
    mfg_page_title: 'Fertigung',
    mfg_page_subtitle: 'Moderne Fertigung, Professionelle Qualität',
    mfg_capacity_title: 'Produktionskapazität',
    mfg_equipment_title: 'Ausrüstung & Technologie',
    mfg_quality_title: 'Qualitätskontrolle',
    mfg_cert_title: 'Zertifizierungen',
    shoes_page_title: 'Schuhe',
    shoes_page_subtitle: 'Professionelle Militär- & Polizeischuhe',
    shoes_tactical_title: 'Taktische Stiefel',
    shoes_military_title: 'Militärstiefel',
    uniforms_page_title: 'Berufsuniformen',
    uniforms_page_subtitle: 'Professionelles Image, Autoritäres Auftreten',
    products_page_title: 'Produkte',
    products_page_subtitle: 'Vollständiges Sortiment',
    contact_page_title: 'Kontakt',
    contact_page_subtitle: 'Wir Freuen Uns auf Zusammenarbeit',
    learn_more: 'Mehr Erfahren',
    view_details: 'Details Ansehen',
    get_quote: 'Angebot Einholen',
    download_catalog: 'Katalog Herunterladen',
    back_to_top: 'Nach Oben',
    home: 'Startseite',
    all_products: 'Alle Produkte',
    colors_available: 'Verfügbare Farben',
    specifications: 'Spezifikationen',
    features: 'Merkmale',
    applications: 'Anwendungen',
    certifications: 'Zertifizierungen',
    related_products: 'Verwandte Produkte',
  },

  es: {
    nav_home: 'Inicio',
    nav_products: 'Productos',
    nav_shoes: 'Calzado',
    nav_shoes_tactical: 'Botas Tácticas',
    nav_shoes_military: 'Botas Militares',
    nav_uniforms: 'Uniformes',
    nav_about: 'Nosotros',
    nav_manufacturing: 'Fabricación',
    nav_contact: 'Contacto',
    nav_get_quote: 'Cotización',
    hero_badge: 'Proveedor Gubernamental Certificado',
    hero_title_1: 'Equipos Militares y',
    hero_title_2: 'Policiales Profesionales',
    hero_desc: '36 años de experiencia en fabricación de equipos militares y policiales. Capacidad anual 6M+ unidades. Confiado por agencias gubernamentales.',
    hero_stat_years: 'Años',
    hero_stat_capacity: 'Anual',
    hero_stat_capacity_unit: 'M+ Unid.',
    hero_stat_clients: 'Clientes Gov.',
    hero_cta_products: 'Ver Productos',
    hero_cta_contact: 'Contáctenos',
    trust_founded: 'Fund. 1990',
    trust_iso: 'Certificado ISO',
    trust_brand: 'Marca Famosa Jiangsu',
    trust_supplier: 'Proveedor Gubernamental',
    products_title: 'Líneas de Productos',
    products_subtitle: 'Diseñados para profesionales militares y policiales, cada producto cumple los más altos estándares',
    products_view_all: 'Ver Todos los Productos',
    prod_tactical_boots: 'Botas Tácticas',
    prod_tactical_boots_desc: 'Diseñadas para entrenamiento intensivo. Antideslizantes, duraderas, excelente soporte. Disponibles en Negro, Marrón y Arena.',
    prod_military_boots: 'Botas Militares',
    prod_military_boots_desc: 'Patrón camuflaje, estándares militares. Adecuadas para operaciones de campo y tareas militares diarias.',
    prod_uniforms: 'Uniformes Profesionales',
    prod_uniforms_desc: 'Uniformes policiales, judiciales y de seguridad. Tela premium, corte profesional, apariencia autoritaria.',
    prod_wool: 'Tejidos de Lana',
    prod_wool_desc: 'Lana de alta calidad, cálida y cómoda. Ideal para uso profesional en climas fríos.',
    prod_fabric: 'Tela Técnica',
    prod_fabric_desc: 'Tela militar profesional según normas nacionales. Especificaciones personalizadas para pedidos al por mayor.',
    prod_view_details: 'Ver Detalles',
    features_title: 'Por Qué Elegir Yuren Group',
    features_subtitle: '36 años de experiencia profesional — su socio de confianza',
    feat_quality_title: 'Garantía de Calidad',
    feat_quality_desc: 'Certificado ISO. Cada lote rigurosamente probado según estándares militares y policiales.',
    feat_capacity_title: 'Gran Capacidad',
    feat_capacity_desc: 'Capacidad anual 6M+ unidades. Entrega rápida en grandes volúmenes para compras gubernamentales.',
    feat_experience_title: '36 Años de Experiencia',
    feat_experience_desc: 'Fundado en 1990, profunda experiencia en equipos militares y policiales.',
    feat_custom_title: 'Soluciones Personalizadas',
    feat_custom_desc: 'Personalización OEM/ODM disponible. Estilos, colores, logos y especificaciones a medida.',
    feat_cert_title: 'Certificaciones Oficiales',
    feat_cert_desc: 'Proveedor gubernamental certificado. Marca Famosa Jiangsu. Múltiples certificaciones nacionales.',
    feat_export_title: 'Exportación Global',
    feat_export_desc: 'Productos exportados a Europa, Américas, Sudeste Asiático, Oriente Medio.',
    about_title: 'Sobre Jiangsu Yuren Group',
    about_desc_1: 'Jiangsu Yuren Group fue fundado en 1990, especializado en fabricación de equipos militares y policiales. Tras 36 años de desarrollo, somos un proveedor líder.',
    about_desc_2: 'Ubicado en Yancheng, Jiangsu, nuestra moderna base de producción tiene una capacidad anual superior a 6 millones de unidades.',
    about_learn_more: 'Saber Más',
    contact_title: 'Contáctenos',
    contact_subtitle: 'Bienvenidas consultas de compras gubernamentales y comercio internacional',
    contact_phone: 'Teléfono',
    contact_email: 'Correo Electrónico',
    contact_address: 'Dirección',
    contact_address_val: 'Yancheng, Provincia de Jiangsu, China',
    contact_form_name: 'Su Nombre',
    contact_form_company: 'Empresa / Organización',
    contact_form_email: 'Correo Electrónico',
    contact_form_phone: 'Número de Teléfono',
    contact_form_product: 'Producto de Interés',
    contact_form_message: 'Detalles de la Consulta',
    contact_form_submit: 'Enviar Consulta',
    contact_form_success: '¡Gracias por su consulta. Responderemos en 24 horas!',
    footer_desc: '36 años de fabricación de equipos militares y policiales. Productos y servicios de alta calidad.',
    footer_products: 'Productos',
    footer_company: 'Empresa',
    footer_contact: 'Contacto',
    footer_copyright: '© 2024 Jiangsu Yuren Group. Todos los derechos reservados.',
    footer_icp: 'ICP N° XXXXXXXX',
    about_page_title: 'Nosotros',
    about_page_subtitle: '36 Años de Excelencia',
    about_history_title: 'Nuestra Historia',
    about_mission_title: 'Nuestra Misión',
    about_mission_desc: 'Proporcionar el equipo más confiable y profesional al personal militar y policial.',
    about_vision_title: 'Nuestra Visión',
    about_vision_desc: 'Convertirnos en el fabricante líder mundial de equipos militares y policiales profesionales.',
    about_values_title: 'Valores Fundamentales',
    mfg_page_title: 'Fabricación',
    mfg_page_subtitle: 'Fabricación Moderna, Calidad Profesional',
    mfg_capacity_title: 'Capacidad de Producción',
    mfg_equipment_title: 'Equipos y Tecnología',
    mfg_quality_title: 'Control de Calidad',
    mfg_cert_title: 'Certificaciones',
    shoes_page_title: 'Calzado',
    shoes_page_subtitle: 'Calzado Militar y Policial Profesional',
    shoes_tactical_title: 'Botas Tácticas',
    shoes_military_title: 'Botas Militares',
    uniforms_page_title: 'Uniformes Profesionales',
    uniforms_page_subtitle: 'Imagen Profesional, Apariencia Autoritaria',
    products_page_title: 'Productos',
    products_page_subtitle: 'Gama Completa de Equipos',
    contact_page_title: 'Contacto',
    contact_page_subtitle: 'Esperamos Colaborar',
    learn_more: 'Saber Más',
    view_details: 'Ver Detalles',
    get_quote: 'Obtener Cotización',
    download_catalog: 'Descargar Catálogo',
    back_to_top: 'Volver Arriba',
    home: 'Inicio',
    all_products: 'Todos los Productos',
    colors_available: 'Colores Disponibles',
    specifications: 'Especificaciones',
    features: 'Características',
    applications: 'Aplicaciones',
    certifications: 'Certificaciones',
    related_products: 'Productos Relacionados',
  },

  ru: {
    nav_home: 'Главная',
    nav_products: 'Продукция',
    nav_shoes: 'Обувь',
    nav_shoes_tactical: 'Тактические Ботинки',
    nav_shoes_military: 'Военные Ботинки',
    nav_uniforms: 'Форма',
    nav_about: 'О Нас',
    nav_manufacturing: 'Производство',
    nav_contact: 'Контакты',
    nav_get_quote: 'Запрос Цены',
    hero_badge: 'Поставщик Государственных Закупок',
    hero_title_1: 'Профессиональное Военное',
    hero_title_2: 'и Полицейское Снаряжение',
    hero_desc: '36 лет опыта в производстве военного и полицейского снаряжения. Годовая мощность 6M+ единиц. Доверяют государственные органы.',
    hero_stat_years: 'Лет',
    hero_stat_capacity: 'Годовой',
    hero_stat_capacity_unit: 'М+ Ед.',
    hero_stat_clients: 'Гос. Клиенты',
    hero_cta_products: 'Смотреть Продукцию',
    hero_cta_contact: 'Связаться',
    trust_founded: 'Осн. 1990',
    trust_iso: 'ISO Сертификат',
    trust_brand: 'Известный Бренд Цзянсу',
    trust_supplier: 'Гос. Поставщик',
    products_title: 'Основные Линейки Продуктов',
    products_subtitle: 'Разработаны для военных и полицейских профессионалов, каждый продукт соответствует высочайшим стандартам',
    products_view_all: 'Смотреть Все Продукты',
    prod_tactical_boots: 'Тактические Ботинки',
    prod_tactical_boots_desc: 'Разработаны для интенсивных тренировок. Нескользящие, прочные, отличная поддержка. Доступны в чёрном, коричневом и песочном цветах.',
    prod_military_boots: 'Военные Ботинки',
    prod_military_boots_desc: 'Камуфляжный рисунок, военные стандарты. Подходят для полевых операций и ежедневной военной службы.',
    prod_uniforms: 'Профессиональная Форма',
    prod_uniforms_desc: 'Полицейская, судебная и охранная форма. Премиальная ткань, профессиональный крой, авторитетный вид.',
    prod_wool: 'Шерстяные Изделия',
    prod_wool_desc: 'Высококачественная шерсть, тёплая и удобная. Идеально для профессионального ношения в холодных условиях.',
    prod_fabric: 'Техническая Ткань',
    prod_fabric_desc: 'Профессиональная военная ткань по национальным стандартам. Индивидуальные спецификации для оптовых заказов.',
    prod_view_details: 'Подробнее',
    features_title: 'Почему Выбирают Yuren Group',
    features_subtitle: '36 лет профессионального опыта — ваш надёжный партнёр',
    feat_quality_title: 'Гарантия Качества',
    feat_quality_desc: 'ISO сертифицировано. Каждая партия строго проверяется по военным и полицейским стандартам.',
    feat_capacity_title: 'Большая Мощность',
    feat_capacity_desc: 'Годовая мощность 6M+ единиц. Быстрая доставка больших объёмов для государственных закупок.',
    feat_experience_title: '36 Лет Опыта',
    feat_experience_desc: 'Основана в 1990 году, глубокая экспертиза в области военного и полицейского снаряжения.',
    feat_custom_title: 'Индивидуальные Решения',
    feat_custom_desc: 'Доступна кастомизация OEM/ODM. Стили, цвета, логотипы и спецификации по требованию клиента.',
    feat_cert_title: 'Официальные Сертификаты',
    feat_cert_desc: 'Поставщик государственных закупок. Известный бренд Цзянсу. Множество национальных сертификатов.',
    feat_export_title: 'Глобальный Экспорт',
    feat_export_desc: 'Продукция экспортируется в Европу, Америку, Юго-Восточную Азию, Ближний Восток.',
    about_title: 'О Jiangsu Yuren Group',
    about_desc_1: 'Jiangsu Yuren Group основана в 1990 году, специализируется на производстве военного и полицейского снаряжения. За 36 лет развития стала ведущим поставщиком.',
    about_desc_2: 'Расположена в Яньчэне, провинция Цзянсу. Современная производственная база с годовой мощностью более 6 миллионов единиц.',
    about_learn_more: 'Узнать Больше',
    contact_title: 'Свяжитесь с Нами',
    contact_subtitle: 'Приветствуем запросы по государственным закупкам и международной торговле',
    contact_phone: 'Телефон',
    contact_email: 'Электронная Почта',
    contact_address: 'Адрес',
    contact_address_val: 'Яньчэн, провинция Цзянсу, Китай',
    contact_form_name: 'Ваше Имя',
    contact_form_company: 'Компания / Организация',
    contact_form_email: 'Электронная Почта',
    contact_form_phone: 'Номер Телефона',
    contact_form_product: 'Интересующий Продукт',
    contact_form_message: 'Детали Запроса',
    contact_form_submit: 'Отправить Запрос',
    contact_form_success: 'Спасибо за ваш запрос. Мы ответим в течение 24 часов!',
    footer_desc: '36 лет производства военного и полицейского снаряжения. Высококачественные продукты и услуги.',
    footer_products: 'Продукция',
    footer_company: 'Компания',
    footer_contact: 'Контакты',
    footer_copyright: '© 2024 Jiangsu Yuren Group. Все права защищены.',
    footer_icp: 'ICP № XXXXXXXX',
    about_page_title: 'О Нас',
    about_page_subtitle: '36 Лет Превосходства',
    about_history_title: 'Наша История',
    about_mission_title: 'Наша Миссия',
    about_mission_desc: 'Обеспечивать военный и полицейский персонал самым надёжным и профессиональным снаряжением.',
    about_vision_title: 'Наше Видение',
    about_vision_desc: 'Стать мировым лидером в производстве профессионального военного и полицейского снаряжения.',
    about_values_title: 'Основные Ценности',
    mfg_page_title: 'Производство',
    mfg_page_subtitle: 'Современное Производство, Профессиональное Качество',
    mfg_capacity_title: 'Производственная Мощность',
    mfg_equipment_title: 'Оборудование и Технологии',
    mfg_quality_title: 'Контроль Качества',
    mfg_cert_title: 'Сертификаты',
    shoes_page_title: 'Обувь',
    shoes_page_subtitle: 'Профессиональная Военная и Полицейская Обувь',
    shoes_tactical_title: 'Тактические Ботинки',
    shoes_military_title: 'Военные Ботинки',
    uniforms_page_title: 'Профессиональная Форма',
    uniforms_page_subtitle: 'Профессиональный Образ, Авторитетный Вид',
    products_page_title: 'Продукция',
    products_page_subtitle: 'Полный Ассортимент Снаряжения',
    contact_page_title: 'Контакты',
    contact_page_subtitle: 'Ждём Сотрудничества',
    learn_more: 'Узнать Больше',
    view_details: 'Подробнее',
    get_quote: 'Запросить Цену',
    download_catalog: 'Скачать Каталог',
    back_to_top: 'Наверх',
    home: 'Главная',
    all_products: 'Все Продукты',
    colors_available: 'Доступные Цвета',
    specifications: 'Характеристики',
    features: 'Особенности',
    applications: 'Применение',
    certifications: 'Сертификаты',
    related_products: 'Похожие Продукты',
  }
};

// ============================================
// LANGUAGE MANAGER
// ============================================
const LANG_NAMES = {
  zh: '中文',
  en: 'English',
  ja: '日本語',
  ko: '한국어',
  fr: 'Français',
  de: 'Deutsch',
  es: 'Español',
  ru: 'Русский'
};

const LANG_FLAGS = {
  zh: '🇨🇳',
  en: '🇺🇸',
  ja: '🇯🇵',
  ko: '🇰🇷',
  fr: '🇫🇷',
  de: '🇩🇪',
  es: '🇪🇸',
  ru: '🇷🇺'
};

let currentLang = localStorage.getItem('yuren_lang') || 'en';

function t(key) {
  const lang = TRANSLATIONS[currentLang] || TRANSLATIONS['en'];
  return lang[key] || TRANSLATIONS['en'][key] || key;
}

function setLanguage(lang) {
  if (!TRANSLATIONS[lang]) return;
  currentLang = lang;
  localStorage.setItem('yuren_lang', lang);
  applyTranslations();
  updateLangButton();
  updateActiveLangItem();
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = val;
    } else {
      el.textContent = val;
    }
  });
  
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    el.innerHTML = t(key);
  });
  
  // Update page title if applicable
  const titleEl = document.querySelector('[data-page-title]');
  if (titleEl) {
    const key = titleEl.getAttribute('data-page-title');
    document.title = t(key) + ' | JIANGSU YUREN GROUP';
  }
}

function updateLangButton() {
  const btn = document.getElementById('lang-btn-text');
  if (btn) {
    btn.textContent = LANG_FLAGS[currentLang] + ' ' + LANG_NAMES[currentLang];
  }
}

function updateActiveLangItem() {
  document.querySelectorAll('.lang-dropdown a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('data-lang') === currentLang);
  });
}

// ============================================
// NAVBAR
// ============================================
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  
  // Scroll effect
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
    
    // Scroll to top button
    const scrollBtn = document.getElementById('scroll-top');
    if (scrollBtn) {
      scrollBtn.classList.toggle('visible', window.scrollY > 400);
    }
  });
  
  // Mobile menu
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileNav = document.getElementById('mobile-nav');
  if (mobileBtn && mobileNav) {
    mobileBtn.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
    });
  }
  
  // Language dropdown
  const langBtn = document.getElementById('lang-btn');
  const langDropdown = document.getElementById('lang-dropdown');
  if (langBtn && langDropdown) {
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langBtn.classList.toggle('open');
      langDropdown.classList.toggle('open');
    });
    
    document.addEventListener('click', () => {
      langBtn.classList.remove('open');
      langDropdown.classList.remove('open');
    });
    
    langDropdown.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', (e) => {
        e.preventDefault();
        setLanguage(a.getAttribute('data-lang'));
        langBtn.classList.remove('open');
        langDropdown.classList.remove('open');
      });
    });
  }
  
  // Active nav link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
}

// ============================================
// SCROLL ANIMATIONS
// ============================================
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ============================================
// CONTACT FORM
// ============================================
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('[type="submit"]');
    const successMsg = document.getElementById('form-success');
    
    btn.disabled = true;
    btn.textContent = '...';
    
    setTimeout(() => {
      form.style.display = 'none';
      if (successMsg) {
        successMsg.style.display = 'block';
        successMsg.textContent = t('contact_form_success');
      }
    }, 1000);
  });
}

// ============================================
// SCROLL TO TOP
// ============================================
function initScrollTop() {
  const btn = document.getElementById('scroll-top');
  if (btn) {
    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

// ============================================
// COUNTER ANIMATION
// ============================================
function animateCounter(el, target, duration = 2000) {
  const start = 0;
  const startTime = performance.now();
  
  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(start + (target - start) * eased);
    el.textContent = current;
    
    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      el.textContent = target;
    }
  }
  
  requestAnimationFrame(update);
}

function initCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  if (!counters.length) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.animated) {
        entry.target.dataset.animated = 'true';
        const target = parseInt(entry.target.getAttribute('data-counter'));
        animateCounter(entry.target, target);
      }
    });
  }, { threshold: 0.5 });
  
  counters.forEach(el => observer.observe(el));
}

// ============================================
// INIT
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  applyTranslations();
  updateLangButton();
  updateActiveLangItem();
  initScrollAnimations();
  initContactForm();
  initScrollTop();
  initCounters();
});
