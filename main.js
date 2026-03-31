/**
 * JIANGSU YUREN GROUP - Global JavaScript
 * Multi-language support + UI interactions
 */

// ============================================
// TRANSLATIONS
// ============================================
const TRANSLATIONS = {
  zh: {
    // 导航
    nav_home: '首页',
    nav_products: '产品中心',
    nav_shoes: '鞋类产品',
    nav_uniforms: '职业制服',
    nav_about: '关于我们',
    nav_manufacturing: '生产实力',
    nav_contact: '联系我们',
    nav_get_quote: '获取报价',

    // 首页英雄区
    hero_badge: '政府采购指定供应商',
    hero_title_1: '专业军警',
    hero_title_2: '装备制造商',
    hero_desc: '江苏玉人集团成立于1990年，36年专注军警职业装备制造，年产能600万+件/双，是国内军警装备领域的重要供应商。',
    hero_stat_years: '年历史',
    hero_stat_capacity_unit: '万+件/年',
    hero_stat_capacity: '年产能',
    trust_iso: 'ISO认证',
    hero_cta_products: '查看产品',
    hero_cta_contact: '联系我们',

    // 产品区
    products_title: '核心产品系列',
    products_subtitle: '专为军警及政府机构设计的专业装备，品质经过严格检验',
    prod_tactical_boots: '作训鞋系列',
    prod_tactical_boots_desc: '专业作战训练靴，防滑耐磨，适合各种地形，提供黑色、棕色、沙色三种颜色',
    prod_military_boots: '军务鞋系列',
    prod_military_boots_desc: '迷彩军务靴，轻量化设计，长时间穿着舒适，适合野外作业',
    prod_uniforms: '职业制服',
    prod_uniforms_desc: '定制职业制服，面料优质，版型专业，适合警务、司法、安保等场合',
    prod_wool: '羊毛衫系列',
    prod_wool_desc: '高品质羊毛制品，保暖舒适，适合寒冷天气专业着装',
    prod_fabric: '坯布面料',
    prod_fabric_desc: '优质军警级坯布，符合国家标准，可定制规格，适合批量采购',
    prod_view_details: '查看详情 →',
    products_view_all: '查看全部产品',

    // 特色区
    features_title: '为什么选择玉人集团',
    features_subtitle: '36年专业经验，您值得信赖的军警装备合作伙伴',
    feat_quality_title: '品质保证',
    feat_quality_desc: 'ISO质量管理认证，每批产品严格检测，符合军警标准',
    feat_capacity_title: '大规模产能',
    feat_capacity_desc: '年产能600万+件/双，快速响应政府采购大批量需求',
    feat_experience_title: '36年经验',
    feat_experience_desc: '1990年成立，深耕军警装备领域，积累丰富行业经验',
    feat_custom_title: '定制服务',
    feat_custom_desc: '支持OEM/ODM定制，可按客户需求定制款式、颜色、标志和规格',
    feat_cert_title: '权威认证',
    feat_cert_desc: '政府采购指定供应商，江苏省名牌，多项国家及行业认证',
    feat_export_title: '全球出口',
    feat_export_desc: '产品远销欧洲、美洲、东南亚、中东等地区，提供完整国际贸易服务',

    // 关于我们
    about_title: '关于江苏玉人集团',
    about_desc_1: '江苏玉人集团成立于1990年，专注于军警职业装备制造。经过36年发展，已成为国内领先供应商。',
    about_desc_2: '位于江苏省盐城市，现代化生产基地年产能超600万件/双，产品涵盖作训鞋、军务鞋、制服、羊毛衫及坯布面料。',
    trust_brand: '江苏省名牌',
    trust_supplier: '政府采购供应商',
    about_learn_more: '了解更多',
    certifications: '资质认证',
    trust_founded: '成立于1990年',

    // 联系区
    contact_title: '联系我们',
    contact_subtitle: '欢迎政府采购及国际贸易咨询',

    // 页脚
    footer_desc: '36年军警装备制造经验，为政府机构和国际买家提供高品质产品和服务。',
    footer_products: '产品系列',
    footer_company: '公司信息',
    footer_contact: '联系方式',
    footer_copyright: '© 2024 江苏玉人集团 版权所有',

    // 关于页面
    about_page_title: '关于我们',
    about_page_subtitle: '36年专注军警职业装备制造',
    about_mission_title: '我们的使命',
    about_mission_desc: '为军警及政府机构提供最高品质的专业装备，保障执法人员的安全与效能。',
    about_vision_title: '我们的愿景',
    about_vision_desc: '成为全球领先的军警装备制造商，以品质和创新赢得全球客户的信赖。',
    about_history_title: '发展历程',

    // 联系页面
    contact_page_title: '联系我们',
    contact_page_subtitle: '获取专业报价和产品咨询',
    contact_address: '地址',
    contact_address_val: '江苏省盐城市',
    contact_email: '邮箱',
    contact_phone: '电话',
    contact_form_name: '姓名',
    contact_form_email: '邮箱',
    contact_form_phone: '电话',
    contact_form_company: '公司名称',
    contact_form_product: '感兴趣的产品',
    contact_form_message: '留言内容',
    contact_form_submit: '发送消息',

    // 生产实力页面
    mfg_page_title: '生产实力',
    mfg_page_subtitle: '现代化生产设施，严格质量管控',
    mfg_capacity_title: '生产能力',
    mfg_equipment_title: '生产设备',
    mfg_quality_title: '质量管控',
    mfg_cert_title: '资质认证',

    // 产品中心页面
    products_page_title: '产品中心',
    products_page_subtitle: '专业军警装备，品质保证',

    // 鞋类页面
    shoes_page_title: '鞋类产品',
    shoes_page_subtitle: '专业军警鞋类，耐用舒适',

    // 作训鞋页面
    shoes_tactical_title: '作训鞋系列',
    colors_available: '可选颜色',
    features: '产品特点',
    specifications: '规格参数',
    applications: '适用场景',
    get_quote: '获取报价',
    related_products: '相关产品',

    // 军务鞋页面
    shoes_military_title: '军务鞋系列',

    // 制服页面
    uniforms_page_title: '职业制服',
    uniforms_page_subtitle: '定制职业制服，专业品质',
  },
  en: {
    // Navigation
    nav_home: 'Home',
    nav_products: 'Products',
    nav_shoes: 'Footwear',
    nav_uniforms: 'Uniforms',
    nav_about: 'About Us',
    nav_manufacturing: 'Manufacturing',
    nav_contact: 'Contact',
    nav_get_quote: 'Get Quote',

    // Hero Section
    hero_badge: 'Government Procurement Supplier',
    hero_title_1: 'Professional Military &',
    hero_title_2: 'Police Equipment',
    hero_desc: 'Jiangsu Yuren Group was founded in 1990. For 36 years, we have focused on manufacturing military and police professional equipment with an annual capacity of 6M+ pieces/pairs.',
    hero_stat_years: 'Years History',
    hero_stat_capacity_unit: 'M+ Units/Year',
    hero_stat_capacity: 'Annual Capacity',
    trust_iso: 'ISO Certified',
    hero_cta_products: 'View Products',
    hero_cta_contact: 'Contact Us',

    // Products Section
    products_title: 'Core Product Lines',
    products_subtitle: 'Professional equipment designed for military, police and government agencies',
    prod_tactical_boots: 'Tactical Boots Series',
    prod_tactical_boots_desc: 'Professional combat training boots, anti-slip and durable, available in black, brown, and sand colors',
    prod_military_boots: 'Military Boots Series',
    prod_military_boots_desc: 'Camouflage military boots with lightweight design for long-wearing comfort in field operations',
    prod_uniforms: 'Professional Uniforms',
    prod_uniforms_desc: 'Custom professional uniforms with premium fabrics and professional cuts for police, judicial, and security',
    prod_wool: 'Wool Sweaters Series',
    prod_wool_desc: 'High-quality wool products, warm and comfortable for cold weather professional wear',
    prod_fabric: 'Greige Fabric',
    prod_fabric_desc: 'Premium military-grade greige fabric meeting national standards, customizable specifications for bulk procurement',
    prod_view_details: 'View Details →',
    products_view_all: 'View All Products',

    // Features Section
    features_title: 'Why Choose Yuren Group',
    features_subtitle: '36 years of professional experience, your trusted military & police equipment partner',
    feat_quality_title: 'Quality Assurance',
    feat_quality_desc: 'ISO quality management certified, strict testing for every batch, meeting military and police standards',
    feat_capacity_title: 'Large Scale Capacity',
    feat_capacity_desc: 'Annual capacity of 6M+ pieces/pairs, rapid response to large government procurement orders',
    feat_experience_title: '36 Years Experience',
    feat_experience_desc: 'Founded in 1990, deeply rooted in military and police equipment with rich industry experience',
    feat_custom_title: 'Customization Service',
    feat_custom_desc: 'OEM/ODM support, customize styles, colors, logos and specifications according to customer needs',
    feat_cert_title: 'Authoritative Certification',
    feat_cert_desc: 'Government procurement designated supplier, Jiangsu Famous Brand, multiple national and industry certifications',
    feat_export_title: 'Global Export',
    feat_export_desc: 'Products exported to Europe, Americas, Southeast Asia, Middle East, complete international trade services',

    // About Section
    about_title: 'About Jiangsu Yuren Group',
    about_desc_1: 'Jiangsu Yuren Group was founded in 1990, specializing in military and police professional equipment. After 36 years of development, we have become a leading domestic supplier.',
    about_desc_2: 'Located in Yancheng, Jiangsu Province, our modern production base has an annual capacity of over 6 million pieces/pairs, covering tactical boots, military boots, uniforms, wool sweaters and greige fabric.',
    trust_brand: 'Jiangsu Famous Brand',
    trust_supplier: 'Govt Procurement Supplier',
    about_learn_more: 'Learn More',
    certifications: 'Certifications',
    trust_founded: 'Founded in 1990',

    // Contact Section
    contact_title: 'Contact Us',
    contact_subtitle: 'Government procurement and international trade inquiries welcome',

    // Footer
    footer_desc: '36 years of military and police equipment manufacturing experience, providing high-quality products and services for government agencies and international buyers.',
    footer_products: 'Products',
    footer_company: 'Company',
    footer_contact: 'Contact',
    footer_copyright: '© 2024 Jiangsu Yuren Group. All Rights Reserved.',

    // About Page
    about_page_title: 'About Us',
    about_page_subtitle: '36 Years Focused on Military & Police Equipment Manufacturing',
    about_mission_title: 'Our Mission',
    about_mission_desc: 'To provide the highest quality professional equipment for military, police and government agencies, ensuring the safety and effectiveness of law enforcement personnel.',
    about_vision_title: 'Our Vision',
    about_vision_desc: 'To become a global leader in military and police equipment manufacturing, earning the trust of customers worldwide through quality and innovation.',
    about_history_title: 'Company History',

    // Contact Page
    contact_page_title: 'Contact Us',
    contact_page_subtitle: 'Get professional quotes and product consultation',
    contact_address: 'Address',
    contact_address_val: 'Yancheng, Jiangsu Province, China',
    contact_email: 'Email',
    contact_phone: 'Phone',
    contact_form_name: 'Name',
    contact_form_email: 'Email',
    contact_form_phone: 'Phone',
    contact_form_company: 'Company Name',
    contact_form_product: 'Products of Interest',
    contact_form_message: 'Message',
    contact_form_submit: 'Send Message',

    // Manufacturing Page
    mfg_page_title: 'Manufacturing',
    mfg_page_subtitle: 'Modern production facilities with strict quality control',
    mfg_capacity_title: 'Production Capacity',
    mfg_equipment_title: 'Production Equipment',
    mfg_quality_title: 'Quality Control',
    mfg_cert_title: 'Certifications',

    // Products Page
    products_page_title: 'Products',
    products_page_subtitle: 'Professional military and police equipment, quality guaranteed',

    // Shoes Page
    shoes_page_title: 'Footwear',
    shoes_page_subtitle: 'Professional military and police footwear, durable and comfortable',

    // Tactical Boots Page
    shoes_tactical_title: 'Tactical Boots Series',
    colors_available: 'Available Colors',
    features: 'Features',
    specifications: 'Specifications',
    applications: 'Applications',
    get_quote: 'Get Quote',
    related_products: 'Related Products',

    // Military Boots Page
    shoes_military_title: 'Military Boots Series',

    // Uniforms Page
    uniforms_page_title: 'Professional Uniforms',
    uniforms_page_subtitle: 'Custom professional uniforms with professional quality',
  },

  ja: {
    // ナビゲーション
    nav_home: 'ホーム',
    nav_products: '製品',
    nav_shoes: '靴類',
    nav_uniforms: '制服',
    nav_about: '会社概要',
    nav_manufacturing: '製造能力',
    nav_contact: 'お問い合わせ',
    nav_get_quote: '見積もり',

    // ヒーローセクション
    hero_badge: '政府調達指定サプライヤー',
    hero_title_1: 'プロフェッショナル',
    hero_title_2: '軍警装備メーカー',
    hero_desc: '江蘇玉人集団は1990年に設立され、36年間軍警職業装備製造に専念しています。年間生産能力600万点以上。',
    hero_stat_years: '年の歴史',
    hero_stat_capacity_unit: '万点/年',
    hero_stat_capacity: '年間生産能力',
    trust_iso: 'ISO認証',
    hero_cta_products: '製品を見る',
    hero_cta_contact: 'お問い合わせ',

    // 製品セクション
    products_title: '主要製品ライン',
    products_subtitle: '軍警および政府機関向けに設計された専門装備',
    prod_tactical_boots: '戦術ブーツシリーズ',
    prod_tactical_boots_desc: 'プロの戦闘訓練ブーツ、滑り止めで耐久性、黒・茶・砂色の3色展開',
    prod_military_boots: '軍用ブーツシリーズ',
    prod_military_boots_desc: '迷彩軍用ブーツ、軽量設計で長時間の着用も快適、野外作業に最適',
    prod_uniforms: '職業制服',
    prod_uniforms_desc: 'カスタム職業制服、高品質生地で警察・司法・警備などに対応',
    prod_wool: 'ウールセーターシリーズ',
    prod_wool_desc: '高品質ウール製品、防寒性に優れ寒い季節のプロ用装備に',
    prod_fabric: '原反生地',
    prod_fabric_desc: '軍警グレードの高品質原反、国家規格適合、カスタマイズ可能、大量調達向け',
    prod_view_details: '詳細を見る →',
    products_view_all: '全製品を見る',

    // 特徴セクション
    features_title: 'なぜ玉人集団を選ぶのか',
    features_subtitle: '36年の専門経験、信頼できる軍警装備パートナー',
    feat_quality_title: '品質保証',
    feat_quality_desc: 'ISO品質管理認証、各ロット厳格検査、軍警規格適合',
    feat_capacity_title: '大規模生産能力',
    feat_capacity_desc: '年間生産能力600万点以上、政府調達の大量注文にも迅速対応',
    feat_experience_title: '36年の経験',
    feat_experience_desc: '1990年設立、軍警装備分野で豊富な業界経験を積み重ねてきました',
    feat_custom_title: 'カスタマイズサービス',
    feat_custom_desc: 'OEM/ODM対応、お客様のニーズに応じてデザイン・色・ロゴ・仕様をカスタマイズ',
    feat_cert_title: '権威ある認証',
    feat_cert_desc: '政府調達指定サプライヤー、江蘇省有名ブランド、複数の国家・業界認証',
    feat_export_title: 'グローバル輸出',
    feat_export_desc: '欧州・米州・東南アジア・中東などへ輸出、国際貿易サービスを提供',

    // 会社概要セクション
    about_title: '江蘇玉人集団について',
    about_desc_1: '江蘇玉人集団は1990年に設立され、軍警職業装備製造に専念しています。36年の発展を経て、国内有数のサプライヤーとなりました。',
    about_desc_2: '江蘇省塩城市に位置する現代的生産拠点は年間600万点以上の生産能力を持ち、戦術ブーツ、軍用ブーツ、制服、ウールセーター、原反生地を製造しています。',
    trust_brand: '江蘇省有名ブランド',
    trust_supplier: '政府調達サプライヤー',
    about_learn_more: '詳細を見る',
    certifications: '認証資格',
    trust_founded: '1990年設立',

    // お問い合わせセクション
    contact_title: 'お問い合わせ',
    contact_subtitle: '政府調達および国際貿易のお問い合わせを歓迎します',

    // フッター
    footer_desc: '36年の軍警装備製造経験、政府機関および海外バイヤーに高品質な製品とサービスを提供。',
    footer_products: '製品',
    footer_company: '会社情報',
    footer_contact: 'お問い合わせ',
    footer_copyright: '© 2024 江蘇玉人集団 全著作権所有',

    // 会社概要ページ
    about_page_title: '会社概要',
    about_page_subtitle: '36年間軍警職業装備製造に専念',
    about_mission_title: '私たちの使命',
    about_mission_desc: '軍警および政府機関に最高品質の専門装備を提供し、法執行機関の安全と効率性を保障します。',
    about_vision_title: '私たちのビジョン',
    about_vision_desc: '品質とイノベーションで世界中のお客様の信頼を得る、グローバルな軍警装備メーカーとなること。',
    about_history_title: '発展の歴史',

    // お問い合わせページ
    contact_page_title: 'お問い合わせ',
    contact_page_subtitle: 'プロの見積もりと製品相談',
    contact_address: '住所',
    contact_address_val: '中国江蘇省塩城市',
    contact_email: 'メール',
    contact_phone: '電話',
    contact_form_name: 'お名前',
    contact_form_email: 'メール',
    contact_form_phone: '電話',
    contact_form_company: '会社名',
    contact_form_product: '興味のある製品',
    contact_form_message: 'メッセージ',
    contact_form_submit: '送信',

    // 製造能力ページ
    mfg_page_title: '製造能力',
    mfg_page_subtitle: '現代的な生産設備、厳格な品質管理',
    mfg_capacity_title: '生産能力',
    mfg_equipment_title: '生産設備',
    mfg_quality_title: '品質管理',
    mfg_cert_title: '認証資格',

    // 製品ページ
    products_page_title: '製品',
    products_page_subtitle: 'プロの軍警装備、品質保証',

    // 靴類ページ
    shoes_page_title: '靴類製品',
    shoes_page_subtitle: 'プロの軍警用靴、耐久性と快適性',

    // 戦術ブーツページ
    shoes_tactical_title: '戦術ブーツシリーズ',
    colors_available: '利用可能な色',
    features: '製品特徴',
    specifications: '仕様',
    applications: '適用場面',
    get_quote: '見積もり',
    related_products: '関連製品',

    // 軍用ブーツページ
    shoes_military_title: '軍用ブーツシリーズ',

    // 制服ページ
    uniforms_page_title: '職業制服',
    uniforms_page_subtitle: 'カスタム職業制服、プロ品質',
  },

  ko: {
    // 내비게이션
    nav_home: '홈',
    nav_products: '제품',
    nav_shoes: '신발류',
    nav_uniforms: '유니폼',
    nav_about: '회사 소개',
    nav_manufacturing: '제조 역량',
    nav_contact: '문의하기',
    nav_get_quote: '견적 요청',

    // 히어로 섹션
    hero_badge: '정부 조달 지정 공급업체',
    hero_title_1: '전문 군경',
    hero_title_2: '장비 제조업체',
    hero_desc: '장쑤 위런 그룹은 1990년에 설립되어 36년간 군경 장비 제조에 전념하고 있습니다. 연간 생산 능력 600만 점 이상.',
    hero_stat_years: '년 역사',
    hero_stat_capacity_unit: '만점/년',
    hero_stat_capacity: '연간 생산 능력',
    trust_iso: 'ISO 인증',
    hero_cta_products: '제품 보기',
    hero_cta_contact: '문의하기',

    // 제품 섹션
    products_title: '핵심 제품 라인',
    products_subtitle: '군경 및 정부 기관을 위해 설계된 전문 장비',
    prod_tactical_boots: '전술 부츠 시리즈',
    prod_tactical_boots_desc: '전문 전투 훈련 부츠, 미끄럼 방지 및 내구성, 블랙·브라운·샌드 3가지 색상',
    prod_military_boots: '군용 부츠 시리즈',
    prod_military_boots_desc: '위장 군용 부츠, 경량 설계로 장시간 착용 편안, 야외 작업에 적합',
    prod_uniforms: '직업 유니폼',
    prod_uniforms_desc: '맞춤형 직업 유니폼, 고품질 원단으로 경찰·사법·보안 등에 적합',
    prod_wool: '울 스웨터 시리즈',
    prod_wool_desc: '고품질 울 제품, 보온성 우수, 추운 날씨 전문 착용에 적합',
    prod_fabric: '원단 소재',
    prod_fabric_desc: '군경 등급 고품질 원단, 국가 규격 적합, 맞춤 사양 가능, 대량 구매에 적합',
    prod_view_details: '자세히 보기 →',
    products_view_all: '전체 제품 보기',

    // 특징 섹션
    features_title: '왜 위런 그룹을 선택하는가',
    features_subtitle: '36년의 전문 경험, 신뢰할 수 있는 군경 장비 파트너',
    feat_quality_title: '품질 보증',
    feat_quality_desc: 'ISO 품질 관리 인증, 각 배치 엄격 검사, 군경 규격 적합',
    feat_capacity_title: '대규모 생산 능력',
    feat_capacity_desc: '연간 생산 능력 600만 점 이상, 정부 조달 대량 주문에 신속 대응',
    feat_experience_title: '36년 경험',
    feat_experience_desc: '1990년 설립, 군경 장비 분야에서 풍부한 업계 경험 축적',
    feat_custom_title: '맞춤 서비스',
    feat_custom_desc: 'OEM/ODM 지원, 고객 요구에 따라 디자인·색상·로고·사양 맞춤 제작',
    feat_cert_title: '권위 있는 인증',
    feat_cert_desc: '정부 조달 지정 공급업체, 장쑤성 유명 브랜드, 다수의 국가·업계 인증',
    feat_export_title: '글로벌 수출',
    feat_export_desc: '유럽·미주·동남아·중동 등으로 수출, 완전한 국제 무역 서비스 제공',

    // 회사 소개 섹션
    about_title: '장쑤 위런 그룹 소개',
    about_desc_1: '장쑤 위런 그룹은 1990년에 설립되어 군경 직업 장비 제조에 전념하고 있습니다. 36년의 발전을 거쳐 국내 선도 공급업체가 되었습니다.',
    about_desc_2: '장쑤성 옌청시에 위치한 현대적 생산 기지는 연간 600만 점 이상의 생산 능력을 보유하며, 전술 부츠·군용 부츠·유니폼·울 스웨터·원단을 제조합니다.',
    trust_brand: '장쑤성 유명 브랜드',
    trust_supplier: '정부 조달 공급업체',
    about_learn_more: '더 알아보기',
    certifications: '인증 자격',
    trust_founded: '1990년 설립',

    // 문의 섹션
    contact_title: '문의하기',
    contact_subtitle: '정부 조달 및 국제 무역 문의를 환영합니다',

    // 푸터
    footer_desc: '36년의 군경 장비 제조 경험, 정부 기관 및 해외 바이어에게 고품질 제품과 서비스 제공.',
    footer_products: '제품',
    footer_company: '회사 정보',
    footer_contact: '연락처',
    footer_copyright: '© 2024 장쑤 위런 그룹. 모든 권리 보유.',

    // 회사 소개 페이지
    about_page_title: '회사 소개',
    about_page_subtitle: '36년간 군경 장비 제조에 전념',
    about_mission_title: '우리의 사명',
    about_mission_desc: '군경 및 정부 기관에 최고 품질의 전문 장비를 제공하여 법 집행 인원의 안전과 효율성을 보장합니다.',
    about_vision_title: '우리의 비전',
    about_vision_desc: '품질과 혁신으로 전 세계 고객의 신뢰를 얻는 글로벌 군경 장비 제조업체가 되는 것.',
    about_history_title: '발전 역사',

    // 문의 페이지
    contact_page_title: '문의하기',
    contact_page_subtitle: '전문 견적 및 제품 상담',
    contact_address: '주소',
    contact_address_val: '중국 장쑤성 옌청시',
    contact_email: '이메일',
    contact_phone: '전화',
    contact_form_name: '성함',
    contact_form_email: '이메일',
    contact_form_phone: '전화번호',
    contact_form_company: '회사명',
    contact_form_product: '관심 제품',
    contact_form_message: '메시지',
    contact_form_submit: '보내기',

    // 제조 역량 페이지
    mfg_page_title: '제조 역량',
    mfg_page_subtitle: '현대적인 생산 시설, 엄격한 품질 관리',
    mfg_capacity_title: '생산 능력',
    mfg_equipment_title: '생산 장비',
    mfg_quality_title: '품질 관리',
    mfg_cert_title: '인증 자격',

    // 제품 페이지
    products_page_title: '제품',
    products_page_subtitle: '전문 군경 장비, 품질 보증',

    // 신발류 페이지
    shoes_page_title: '신발류 제품',
    shoes_page_subtitle: '전문 군경용 신발, 내구성과 편안함',

    // 전술 부츠 페이지
    shoes_tactical_title: '전술 부츠 시리즈',
    colors_available: '이용 가능한 색상',
    features: '제품 특징',
    specifications: '사양',
    applications: '적용 분야',
    get_quote: '견적 요청',
    related_products: '관련 제품',

    // 군용 부츠 페이지
    shoes_military_title: '군용 부츠 시리즈',

    // 유니폼 페이지
    uniforms_page_title: '직업 유니폼',
    uniforms_page_subtitle: '맞춤형 직업 유니폼, 전문 품질',
  },


  fr: {
    // Navigation
    nav_home: 'Accueil',
    nav_products: 'Produits',
    nav_shoes: 'Chaussures',
    nav_uniforms: 'Uniformes',
    nav_about: 'À Propos',
    nav_manufacturing: 'Fabrication',
    nav_contact: 'Contact',
    nav_get_quote: 'Devis',

    // Section Héros
    hero_badge: 'Fournisseur Agréé Gouvernemental',
    hero_title_1: 'Équipements Militaires',
    hero_title_2: '& Policiers Professionnels',
    hero_desc: 'Jiangsu Yuren Group a été fondé en 1990. Depuis 36 ans, nous fabriquons des équipements professionnels militaires et policiers avec une capacité annuelle de 6M+ pièces/paires.',
    hero_stat_years: 'Ans d\'Histoire',
    hero_stat_capacity_unit: 'M+ Unités/An',
    hero_stat_capacity: 'Capacité Annuelle',
    trust_iso: 'Certifié ISO',
    hero_cta_products: 'Voir les Produits',
    hero_cta_contact: 'Nous Contacter',

    // Section Produits
    products_title: 'Gammes de Produits Principales',
    products_subtitle: 'Équipements professionnels pour militaires, police et agences gouvernementales',
    prod_tactical_boots: 'Série Bottes Tactiques',
    prod_tactical_boots_desc: 'Bottes d\'entraînement au combat professionnelles, antidérapantes et durables, disponibles en noir, marron et sable',
    prod_military_boots: 'Série Bottes Militaires',
    prod_military_boots_desc: 'Bottes militaires camouflage, conception légère pour un confort prolongé lors des opérations sur le terrain',
    prod_uniforms: 'Uniformes Professionnels',
    prod_uniforms_desc: 'Uniformes professionnels sur mesure, tissus premium pour la police, la justice et la sécurité',
    prod_wool: 'Série Pulls en Laine',
    prod_wool_desc: 'Produits en laine de haute qualité, chauds et confortables pour les tenues professionnelles par temps froid',
    prod_fabric: 'Tissu Écru',
    prod_fabric_desc: 'Tissu écru de qualité militaire et policière, conforme aux normes nationales, spécifications personnalisables',
    prod_view_details: 'Voir Détails →',
    products_view_all: 'Voir Tous les Produits',

    // Section Caractéristiques
    features_title: 'Pourquoi Choisir Yuren Group',
    features_subtitle: '36 ans d\'expérience professionnelle, votre partenaire de confiance',
    feat_quality_title: 'Assurance Qualité',
    feat_quality_desc: 'Certifié ISO, tests rigoureux pour chaque lot, conformité aux normes militaires et policières',
    feat_capacity_title: 'Grande Capacité de Production',
    feat_capacity_desc: 'Capacité annuelle de 6M+ pièces/paires, réponse rapide aux grandes commandes gouvernementales',
    feat_experience_title: '36 Ans d\'Expérience',
    feat_experience_desc: 'Fondé en 1990, profondément ancré dans le domaine des équipements militaires et policiers',
    feat_custom_title: 'Service de Personnalisation',
    feat_custom_desc: 'Support OEM/ODM, personnalisation des styles, couleurs, logos et spécifications selon les besoins',
    feat_cert_title: 'Certifications Reconnues',
    feat_cert_desc: 'Fournisseur désigné des marchés publics, Marque Célèbre du Jiangsu, certifications nationales et sectorielles',
    feat_export_title: 'Export Mondial',
    feat_export_desc: 'Produits exportés en Europe, Amériques, Asie du Sud-Est, Moyen-Orient, services de commerce international complets',

    // Section À Propos
    about_title: 'À Propos de Jiangsu Yuren Group',
    about_desc_1: 'Jiangsu Yuren Group a été fondé en 1990, spécialisé dans la fabrication d\'équipements professionnels militaires et policiers. Après 36 ans de développement, nous sommes devenus un fournisseur leader.',
    about_desc_2: 'Situé à Yancheng, province du Jiangsu, notre base de production moderne a une capacité annuelle de plus de 6 millions de pièces/paires, couvrant bottes tactiques, bottes militaires, uniformes, pulls en laine et tissu écru.',
    trust_brand: 'Marque Célèbre du Jiangsu',
    trust_supplier: 'Fournisseur des Marchés Publics',
    about_learn_more: 'En Savoir Plus',
    certifications: 'Certifications',
    trust_founded: 'Fondé en 1990',

    // Section Contact
    contact_title: 'Contactez-Nous',
    contact_subtitle: 'Marchés publics et demandes de commerce international bienvenus',

    // Pied de Page
    footer_desc: '36 ans d\'expérience dans la fabrication d\'équipements militaires et policiers, fournissant des produits et services de haute qualité aux agences gouvernementales et acheteurs internationaux.',
    footer_products: 'Produits',
    footer_company: 'Entreprise',
    footer_contact: 'Contact',
    footer_copyright: '© 2024 Jiangsu Yuren Group. Tous Droits Réservés.',

    // Page À Propos
    about_page_title: 'À Propos de Nous',
    about_page_subtitle: '36 Ans Consacrés à la Fabrication d\'Équipements Militaires et Policiers',
    about_mission_title: 'Notre Mission',
    about_mission_desc: 'Fournir des équipements professionnels de la plus haute qualité aux militaires, policiers et agences gouvernementales, garantissant la sécurité et l\'efficacité du personnel.',
    about_vision_title: 'Notre Vision',
    about_vision_desc: 'Devenir un leader mondial dans la fabrication d\'équipements militaires et policiers, en gagnant la confiance des clients du monde entier grâce à la qualité et l\'innovation.',
    about_history_title: 'Histoire de l\'Entreprise',

    // Page Contact
    contact_page_title: 'Contactez-Nous',
    contact_page_subtitle: 'Obtenez des devis professionnels et des conseils produits',
    contact_address: 'Adresse',
    contact_address_val: 'Yancheng, Province du Jiangsu, Chine',
    contact_email: 'E-mail',
    contact_phone: 'Téléphone',
    contact_form_name: 'Nom',
    contact_form_email: 'Email',
    contact_form_phone: 'Téléphone',
    contact_form_company: 'Nom de l\'Entreprise',
    contact_form_product: 'Produits d\'Intérêt',
    contact_form_message: 'Message',
    contact_form_submit: 'Envoyer le Message',

    // Page Fabrication
    mfg_page_title: 'Fabrication',
    mfg_page_subtitle: 'Installations de production modernes avec contrôle qualité strict',
    mfg_capacity_title: 'Capacité de Production',
    mfg_equipment_title: 'Équipement de Production',
    mfg_quality_title: 'Contrôle Qualité',
    mfg_cert_title: 'Certifications',

    // Page Produits
    products_page_title: 'Produits',
    products_page_subtitle: 'Équipements militaires et policiers professionnels, qualité garantie',

    // Page Chaussures
    shoes_page_title: 'Chaussures',
    shoes_page_subtitle: 'Chaussures militaires et policières professionnelles, durables et confortables',

    // Page Bottes Tactiques
    shoes_tactical_title: 'Série Bottes Tactiques',
    colors_available: 'Couleurs Disponibles',
    features: 'Caractéristiques',
    specifications: 'Spécifications',
    applications: 'Applications',
    get_quote: 'Obtenir un Devis',
    related_products: 'Produits Connexes',

    // Page Bottes Militaires
    shoes_military_title: 'Série Bottes Militaires',

    // Page Uniformes
    uniforms_page_title: 'Uniformes Professionnels',
    uniforms_page_subtitle: 'Uniformes professionnels sur mesure, qualité professionnelle',
  },

  de: {
    // Navigation
    nav_home: 'Startseite',
    nav_products: 'Produkte',
    nav_shoes: 'Schuhe',
    nav_uniforms: 'Uniformen',
    nav_about: 'Über Uns',
    nav_manufacturing: 'Fertigung',
    nav_contact: 'Kontakt',
    nav_get_quote: 'Angebot',

    // Hero-Bereich
    hero_badge: 'Staatlich Zugelassener Lieferant',
    hero_title_1: 'Professionelle Militär-',
    hero_title_2: '& Polizeiausrüstung',
    hero_desc: 'Jiangsu Yuren Group wurde 1990 gegründet. Seit 36 Jahren stellen wir militärische und polizeiliche Berufsausrüstungen her, mit einer Jahreskapazität von 6M+ Stück/Paar.',
    hero_stat_years: 'Jahre Geschichte',
    hero_stat_capacity_unit: 'M+ Einh./Jahr',
    hero_stat_capacity: 'Jahreskapazität',
    trust_iso: 'ISO-Zertifiziert',
    hero_cta_products: 'Produkte Ansehen',
    hero_cta_contact: 'Kontaktieren Sie Uns',

    // Produktbereich
    products_title: 'Kernproduktlinien',
    products_subtitle: 'Professionelle Ausrüstung für Militär, Polizei und Regierungsbehörden',
    prod_tactical_boots: 'Taktische Stiefel Serie',
    prod_tactical_boots_desc: 'Professionelle Kampftrainingsstiefel, rutschfest und langlebig, in Schwarz, Braun und Sand erhältlich',
    prod_military_boots: 'Militärstiefel Serie',
    prod_military_boots_desc: 'Tarnmuster-Militärstiefel, leichtes Design für langen Tragekomfort bei Feldeinsätzen',
    prod_uniforms: 'Berufsuniformen',
    prod_uniforms_desc: 'Maßgeschneiderte Berufsuniformen, hochwertige Stoffe für Polizei, Justiz und Sicherheit',
    prod_wool: 'Wollpullover Serie',
    prod_wool_desc: 'Hochwertige Wollprodukte, warm und komfortabel für professionelle Kleidung bei kaltem Wetter',
    prod_fabric: 'Rohgewebe',
    prod_fabric_desc: 'Hochwertiges Rohgewebe in Militär- und Polizeiqualität, nationale Normen, anpassbare Spezifikationen',
    prod_view_details: 'Details Ansehen →',
    products_view_all: 'Alle Produkte Ansehen',

    // Merkmale-Bereich
    features_title: 'Warum Yuren Group Wählen',
    features_subtitle: '36 Jahre Berufserfahrung, Ihr vertrauenswürdiger Partner',
    feat_quality_title: 'Qualitätssicherung',
    feat_quality_desc: 'ISO-Qualitätsmanagement-Zertifizierung, strenge Tests für jede Charge, Militär- und Polizeinormen',
    feat_capacity_title: 'Große Produktionskapazität',
    feat_capacity_desc: 'Jahreskapazität von 6M+ Stück/Paar, schnelle Reaktion auf große Regierungsaufträge',
    feat_experience_title: '36 Jahre Erfahrung',
    feat_experience_desc: 'Gegründet 1990, tief verwurzelt im Bereich Militär- und Polizeiausrüstungen',
    feat_custom_title: 'Anpassungsservice',
    feat_custom_desc: 'OEM/ODM-Unterstützung, Anpassung von Stilen, Farben, Logos und Spezifikationen nach Kundenwunsch',
    feat_cert_title: 'Anerkannte Zertifizierungen',
    feat_cert_desc: 'Staatlich zugelassener Lieferant, Jiangsu Berühmte Marke, nationale und Branchenzertifizierungen',
    feat_export_title: 'Globaler Export',
    feat_export_desc: 'Produkte in Europa, Amerika, Südostasien, Naher Osten exportiert, vollständige internationale Handelsdienstleistungen',

    // Über-Uns-Bereich
    about_title: 'Über Jiangsu Yuren Group',
    about_desc_1: 'Jiangsu Yuren Group wurde 1990 gegründet und ist auf die Herstellung von Militär- und Polizeiberufsausrüstungen spezialisiert. Nach 36 Jahren Entwicklung sind wir ein führender Lieferant geworden.',
    about_desc_2: 'In Yancheng, Provinz Jiangsu, hat unsere moderne Produktionsbasis eine Jahreskapazität von über 6 Millionen Stück/Paar für taktische Stiefel, Militärstiefel, Uniformen, Wollpullover und Rohgewebe.',
    trust_brand: 'Jiangsu Berühmte Marke',
    trust_supplier: 'Staatlicher Lieferant',
    about_learn_more: 'Mehr Erfahren',
    certifications: 'Zertifizierungen',
    trust_founded: 'Gegründet 1990',

    // Kontaktbereich
    contact_title: 'Kontaktieren Sie Uns',
    contact_subtitle: 'Regierungsaufträge und internationale Handelsanfragen willkommen',

    // Fußzeile
    footer_desc: '36 Jahre Erfahrung in der Herstellung von Militär- und Polizeiausrüstungen, hochwertige Produkte und Dienstleistungen für Regierungsbehörden und internationale Käufer.',
    footer_products: 'Produkte',
    footer_company: 'Unternehmen',
    footer_contact: 'Kontakt',
    footer_copyright: '© 2024 Jiangsu Yuren Group. Alle Rechte Vorbehalten.',

    // Über-Uns-Seite
    about_page_title: 'Über Uns',
    about_page_subtitle: '36 Jahre Fokus auf Militär- & Polizeiausrüstungsherstellung',
    about_mission_title: 'Unsere Mission',
    about_mission_desc: 'Militär, Polizei und Regierungsbehörden mit höchster Qualität professioneller Ausrüstung zu versorgen und die Sicherheit und Effizienz des Personals zu gewährleisten.',
    about_vision_title: 'Unsere Vision',
    about_vision_desc: 'Ein globaler Marktführer in der Herstellung von Militär- und Polizeiausrüstungen zu werden und das Vertrauen von Kunden weltweit durch Qualität und Innovation zu gewinnen.',
    about_history_title: 'Unternehmensgeschichte',

    // Kontaktseite
    contact_page_title: 'Kontaktieren Sie Uns',
    contact_page_subtitle: 'Professionelle Angebote und Produktberatung erhalten',
    contact_address: 'Adresse',
    contact_address_val: 'Yancheng, Provinz Jiangsu, China',
    contact_email: 'E-Mail',
    contact_phone: 'Telefon',
    contact_form_name: 'Name',
    contact_form_email: 'E-Mail',
    contact_form_phone: 'Telefon',
    contact_form_company: 'Firmenname',
    contact_form_product: 'Interessierende Produkte',
    contact_form_message: 'Nachricht',
    contact_form_submit: 'Nachricht Senden',

    // Fertigungsseite
    mfg_page_title: 'Fertigung',
    mfg_page_subtitle: 'Moderne Produktionsanlagen mit strenger Qualitätskontrolle',
    mfg_capacity_title: 'Produktionskapazität',
    mfg_equipment_title: 'Produktionsausrüstung',
    mfg_quality_title: 'Qualitätskontrolle',
    mfg_cert_title: 'Zertifizierungen',

    // Produktseite
    products_page_title: 'Produkte',
    products_page_subtitle: 'Professionelle Militär- und Polizeiausrüstung, Qualität garantiert',

    // Schuhseite
    shoes_page_title: 'Schuhe',
    shoes_page_subtitle: 'Professionelle Militär- und Polizeischuhe, langlebig und komfortabel',

    // Taktische Stiefel Seite
    shoes_tactical_title: 'Taktische Stiefel Serie',
    colors_available: 'Verfügbare Farben',
    features: 'Merkmale',
    specifications: 'Spezifikationen',
    applications: 'Anwendungen',
    get_quote: 'Angebot Einholen',
    related_products: 'Verwandte Produkte',

    // Militärstiefel Seite
    shoes_military_title: 'Militärstiefel Serie',

    // Uniformenseite
    uniforms_page_title: 'Berufsuniformen',
    uniforms_page_subtitle: 'Maßgeschneiderte Berufsuniformen, professionelle Qualität',
  },

  es: {
    // Navegación
    nav_home: 'Inicio',
    nav_products: 'Productos',
    nav_shoes: 'Calzado',
    nav_uniforms: 'Uniformes',
    nav_about: 'Sobre Nosotros',
    nav_manufacturing: 'Fabricación',
    nav_contact: 'Contacto',
    nav_get_quote: 'Solicitar Cotización',

    // Sección Hero
    hero_badge: 'Proveedor Designado de Adquisiciones Gubernamentales',
    hero_title_1: 'Equipos Militares y',
    hero_title_2: 'Policiales Profesionales',
    hero_desc: 'Jiangsu Yuren Group fue fundado en 1990. Durante 36 años, nos hemos dedicado a fabricar equipos profesionales militares y policiales con una capacidad anual de 6M+ piezas/pares.',
    hero_stat_years: 'Años de Historia',
    hero_stat_capacity_unit: 'M+ Unid./Año',
    hero_stat_capacity: 'Capacidad Anual',
    trust_iso: 'Certificado ISO',
    hero_cta_products: 'Ver Productos',
    hero_cta_contact: 'Contáctenos',

    // Sección Productos
    products_title: 'Líneas de Productos Principales',
    products_subtitle: 'Equipos profesionales diseñados para militares, policías y agencias gubernamentales',
    prod_tactical_boots: 'Serie Botas Tácticas',
    prod_tactical_boots_desc: 'Botas de entrenamiento de combate profesionales, antideslizantes y duraderas, disponibles en negro, marrón y arena',
    prod_military_boots: 'Serie Botas Militares',
    prod_military_boots_desc: 'Botas militares de camuflaje, diseño ligero para comodidad prolongada en operaciones de campo',
    prod_uniforms: 'Uniformes Profesionales',
    prod_uniforms_desc: 'Uniformes profesionales personalizados, telas premium para policía, justicia y seguridad',
    prod_wool: 'Serie Suéteres de Lana',
    prod_wool_desc: 'Productos de lana de alta calidad, cálidos y cómodos para vestimenta profesional en clima frío',
    prod_fabric: 'Tela Cruda',
    prod_fabric_desc: 'Tela cruda de calidad militar y policial, cumple normas nacionales, especificaciones personalizables para compras al por mayor',
    prod_view_details: 'Ver Detalles →',
    products_view_all: 'Ver Todos los Productos',

    // Sección Características
    features_title: 'Por Qué Elegir Yuren Group',
    features_subtitle: '36 años de experiencia profesional, su socio de confianza en equipos militares y policiales',
    feat_quality_title: 'Garantía de Calidad',
    feat_quality_desc: 'Certificación ISO de gestión de calidad, pruebas rigurosas para cada lote, cumplimiento de normas militares y policiales',
    feat_capacity_title: 'Gran Capacidad de Producción',
    feat_capacity_desc: 'Capacidad anual de 6M+ piezas/pares, respuesta rápida a grandes pedidos gubernamentales',
    feat_experience_title: '36 Años de Experiencia',
    feat_experience_desc: 'Fundado en 1990, profundamente arraigado en el campo de equipos militares y policiales',
    feat_custom_title: 'Servicio de Personalización',
    feat_custom_desc: 'Soporte OEM/ODM, personalización de estilos, colores, logos y especificaciones según necesidades del cliente',
    feat_cert_title: 'Certificaciones Reconocidas',
    feat_cert_desc: 'Proveedor designado de adquisiciones gubernamentales, Marca Famosa de Jiangsu, certificaciones nacionales e industriales',
    feat_export_title: 'Exportación Global',
    feat_export_desc: 'Productos exportados a Europa, Américas, Sudeste Asiático, Oriente Medio, servicios completos de comercio internacional',

    // Sección Sobre Nosotros
    about_title: 'Sobre Jiangsu Yuren Group',
    about_desc_1: 'Jiangsu Yuren Group fue fundado en 1990, especializado en la fabricación de equipos profesionales militares y policiales. Tras 36 años de desarrollo, nos hemos convertido en un proveedor líder.',
    about_desc_2: 'Ubicado en Yancheng, provincia de Jiangsu, nuestra moderna base de producción tiene una capacidad anual de más de 6 millones de piezas/pares, cubriendo botas tácticas, botas militares, uniformes, suéteres de lana y tela cruda.',
    trust_brand: 'Marca Famosa de Jiangsu',
    trust_supplier: 'Proveedor Gubernamental',
    about_learn_more: 'Saber Más',
    certifications: 'Certificaciones',
    trust_founded: 'Fundado en 1990',

    // Sección Contacto
    contact_title: 'Contáctenos',
    contact_subtitle: 'Bienvenidas las consultas de adquisiciones gubernamentales y comercio internacional',

    // Pie de Página
    footer_desc: '36 años de experiencia en fabricación de equipos militares y policiales, proporcionando productos y servicios de alta calidad a agencias gubernamentales y compradores internacionales.',
    footer_products: 'Productos',
    footer_company: 'Empresa',
    footer_contact: 'Contacto',
    footer_copyright: '© 2024 Jiangsu Yuren Group. Todos los Derechos Reservados.',

    // Página Sobre Nosotros
    about_page_title: 'Sobre Nosotros',
    about_page_subtitle: '36 Años Enfocados en la Fabricación de Equipos Militares y Policiales',
    about_mission_title: 'Nuestra Misión',
    about_mission_desc: 'Proporcionar equipos profesionales de la más alta calidad a militares, policías y agencias gubernamentales, garantizando la seguridad y eficacia del personal.',
    about_vision_title: 'Nuestra Visión',
    about_vision_desc: 'Convertirnos en un líder mundial en la fabricación de equipos militares y policiales, ganando la confianza de clientes de todo el mundo a través de la calidad y la innovación.',
    about_history_title: 'Historia de la Empresa',

    // Página Contacto
    contact_page_title: 'Contáctenos',
    contact_page_subtitle: 'Obtenga cotizaciones profesionales y consultas de productos',
    contact_address: 'Dirección',
    contact_address_val: 'Yancheng, Provincia de Jiangsu, China',
    contact_email: 'Correo electrónico',
    contact_phone: 'Teléfono',
    contact_form_name: 'Nombre',
    contact_form_email: 'Correo Electrónico',
    contact_form_phone: 'Teléfono',
    contact_form_company: 'Nombre de la Empresa',
    contact_form_product: 'Productos de Interés',
    contact_form_message: 'Mensaje',
    contact_form_submit: 'Enviar Mensaje',

    // Página Fabricación
    mfg_page_title: 'Fabricación',
    mfg_page_subtitle: 'Instalaciones de producción modernas con estricto control de calidad',
    mfg_capacity_title: 'Capacidad de Producción',
    mfg_equipment_title: 'Equipo de Producción',
    mfg_quality_title: 'Control de Calidad',
    mfg_cert_title: 'Certificaciones',

    // Página Productos
    products_page_title: 'Productos',
    products_page_subtitle: 'Equipos militares y policiales profesionales, calidad garantizada',

    // Página Calzado
    shoes_page_title: 'Calzado',
    shoes_page_subtitle: 'Calzado militar y policial profesional, duradero y cómodo',

    // Página Botas Tácticas
    shoes_tactical_title: 'Serie Botas Tácticas',
    colors_available: 'Colores Disponibles',
    features: 'Características',
    specifications: 'Especificaciones',
    applications: 'Aplicaciones',
    get_quote: 'Solicitar Cotización',
    related_products: 'Productos Relacionados',

    // Página Botas Militares
    shoes_military_title: 'Serie Botas Militares',

    // Página Uniformes
    uniforms_page_title: 'Uniformes Profesionales',
    uniforms_page_subtitle: 'Uniformes profesionales personalizados, calidad profesional',
  },

  ru: {
    // Навигация
    nav_home: 'Главная',
    nav_products: 'Продукция',
    nav_shoes: 'Обувь',
    nav_uniforms: 'Форма',
    nav_about: 'О Нас',
    nav_manufacturing: 'Производство',
    nav_contact: 'Контакты',
    nav_get_quote: 'Запросить Цену',

    // Секция Hero
    hero_badge: 'Поставщик Государственных Закупок',
    hero_title_1: 'Профессиональное Военное',
    hero_title_2: 'и Полицейское Снаряжение',
    hero_desc: 'Jiangsu Yuren Group основана в 1990 году. На протяжении 36 лет мы производим профессиональное военное и полицейское снаряжение с годовой мощностью 6M+ единиц/пар.',
    hero_stat_years: 'Лет Истории',
    hero_stat_capacity_unit: 'М+ Ед./Год',
    hero_stat_capacity: 'Годовая Мощность',
    trust_iso: 'Сертификат ISO',
    hero_cta_products: 'Смотреть Продукцию',
    hero_cta_contact: 'Связаться с Нами',

    // Секция Продукции
    products_title: 'Основные Линейки Продукции',
    products_subtitle: 'Профессиональное снаряжение для военных, полиции и государственных органов',
    prod_tactical_boots: 'Серия Тактических Ботинок',
    prod_tactical_boots_desc: 'Профессиональные боевые тренировочные ботинки, нескользящие и прочные, доступны в чёрном, коричневом и песочном цветах',
    prod_military_boots: 'Серия Военных Ботинок',
    prod_military_boots_desc: 'Камуфляжные военные ботинки, лёгкая конструкция для длительного комфорта при полевых операциях',
    prod_uniforms: 'Профессиональная Форма',
    prod_uniforms_desc: 'Индивидуальная профессиональная форма, высококачественные ткани для полиции, юстиции и охраны',
    prod_wool: 'Серия Шерстяных Свитеров',
    prod_wool_desc: 'Высококачественные шерстяные изделия, тёплые и удобные для профессиональной одежды в холодную погоду',
    prod_fabric: 'Суровая Ткань',
    prod_fabric_desc: 'Высококачественная суровая ткань военного и полицейского класса, соответствует национальным стандартам, настраиваемые характеристики',
    prod_view_details: 'Подробнее →',
    products_view_all: 'Смотреть Все Продукты',

    // Секция Преимуществ
    features_title: 'Почему Выбирают Yuren Group',
    features_subtitle: '36 лет профессионального опыта, ваш надёжный партнёр в военном и полицейском снаряжении',
    feat_quality_title: 'Гарантия Качества',
    feat_quality_desc: 'Сертификация ISO по управлению качеством, строгие испытания каждой партии, соответствие военным и полицейским стандартам',
    feat_capacity_title: 'Большая Производственная Мощность',
    feat_capacity_desc: 'Годовая мощность 6M+ единиц/пар, быстрый отклик на крупные государственные заказы',
    feat_experience_title: '36 Лет Опыта',
    feat_experience_desc: 'Основана в 1990 году, глубоко укоренилась в области военного и полицейского снаряжения',
    feat_custom_title: 'Услуги Кастомизации',
    feat_custom_desc: 'Поддержка OEM/ODM, настройка стилей, цветов, логотипов и характеристик по требованиям клиента',
    feat_cert_title: 'Признанные Сертификаты',
    feat_cert_desc: 'Назначенный поставщик государственных закупок, Известный Бренд Цзянсу, национальные и отраслевые сертификаты',
    feat_export_title: 'Глобальный Экспорт',
    feat_export_desc: 'Продукция экспортируется в Европу, Америку, Юго-Восточную Азию, Ближний Восток, полный комплекс услуг международной торговли',

    // Секция О Нас
    about_title: 'О Jiangsu Yuren Group',
    about_desc_1: 'Jiangsu Yuren Group основана в 1990 году, специализируется на производстве профессионального военного и полицейского снаряжения. За 36 лет развития стала ведущим поставщиком.',
    about_desc_2: 'Расположенная в Яньчэне, провинция Цзянсу, наша современная производственная база имеет годовую мощность более 6 миллионов единиц/пар, охватывая тактические ботинки, военные ботинки, форму, шерстяные свитера и суровую ткань.',
    trust_brand: 'Известный Бренд Цзянсу',
    trust_supplier: 'Поставщик Госзакупок',
    about_learn_more: 'Узнать Больше',
    certifications: 'Сертификаты',
    trust_founded: 'Основана в 1990',

    // Секция Контактов
    contact_title: 'Связаться с Нами',
    contact_subtitle: 'Приветствуются запросы по государственным закупкам и международной торговле',

    // Подвал
    footer_desc: '36 лет опыта в производстве военного и полицейского снаряжения, предоставление высококачественных продуктов и услуг государственным органам и международным покупателям.',
    footer_products: 'Продукция',
    footer_company: 'Компания',
    footer_contact: 'Контакты',
    footer_copyright: '© 2024 Jiangsu Yuren Group. Все Права Защищены.',

    // Страница О Нас
    about_page_title: 'О Нас',
    about_page_subtitle: '36 Лет Сосредоточены на Производстве Военного и Полицейского Снаряжения',
    about_mission_title: 'Наша Миссия',
    about_mission_desc: 'Обеспечивать военных, полицейских и государственные органы профессиональным снаряжением высочайшего качества, гарантируя безопасность и эффективность персонала.',
    about_vision_title: 'Наше Видение',
    about_vision_desc: 'Стать мировым лидером в производстве военного и полицейского снаряжения, завоёвывая доверие клиентов по всему миру через качество и инновации.',
    about_history_title: 'История Компании',

    // Страница Контактов
    contact_page_title: 'Связаться с Нами',
    contact_page_subtitle: 'Получите профессиональные предложения и консультации по продукции',
    contact_address: 'Адрес',
    contact_address_val: 'Яньчэн, провинция Цзянсу, Китай',
    contact_email: 'Эл. почта',
    contact_phone: 'Телефон',
    contact_form_name: 'Имя',
    contact_form_email: 'Электронная Почта',
    contact_form_phone: 'Телефон',
    contact_form_company: 'Название Компании',
    contact_form_product: 'Интересующие Продукты',
    contact_form_message: 'Сообщение',
    contact_form_submit: 'Отправить Сообщение',

    // Страница Производства
    mfg_page_title: 'Производство',
    mfg_page_subtitle: 'Современные производственные мощности со строгим контролем качества',
    mfg_capacity_title: 'Производственная Мощность',
    mfg_equipment_title: 'Производственное Оборудование',
    mfg_quality_title: 'Контроль Качества',
    mfg_cert_title: 'Сертификаты',

    // Страница Продукции
    products_page_title: 'Продукция',
    products_page_subtitle: 'Профессиональное военное и полицейское снаряжение, гарантия качества',

    // Страница Обуви
    shoes_page_title: 'Обувь',
    shoes_page_subtitle: 'Профессиональная военная и полицейская обувь, прочная и удобная',

    // Страница Тактических Ботинок
    shoes_tactical_title: 'Серия Тактических Ботинок',
    colors_available: 'Доступные Цвета',
    features: 'Характеристики',
    specifications: 'Спецификации',
    applications: 'Применение',
    get_quote: 'Запросить Цену',
    related_products: 'Похожие Продукты',

    // Страница Военных Ботинок
    shoes_military_title: 'Серия Военных Ботинок',

    // Страница Формы
    uniforms_page_title: 'Профессиональная Форма',
    uniforms_page_subtitle: 'Индивидуальная профессиональная форма, профессиональное качество',
  },
};

// ============================================
// I18N ENGINE
// ============================================
const I18N = {
  currentLang: 'zh',
  supportedLangs: ['zh', 'en', 'ja', 'ko', 'fr', 'de', 'es', 'ru'],

  init() {
    const saved = localStorage.getItem('yuren_lang');
    const browser = navigator.language.split('-')[0];
    this.currentLang = saved || (this.supportedLangs.includes(browser) ? browser : 'zh');
    this.apply();
    this.updateSelector();
  },

  t(key) {
    const lang = TRANSLATIONS[this.currentLang] || TRANSLATIONS['zh'];
    return lang[key] || TRANSLATIONS['zh'][key] || key;
  },

  apply() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const text = this.t(key);
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = text;
      } else {
        el.textContent = text;
      }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      el.placeholder = this.t(key);
    });
    document.documentElement.lang = this.currentLang;
  },

  setLang(lang) {
    if (this.supportedLangs.includes(lang)) {
      this.currentLang = lang;
      localStorage.setItem('yuren_lang', lang);
      this.apply();
      this.updateSelector();
    }
  },

  updateSelector() {
    const selector = document.getElementById('lang-selector');
    if (selector) selector.value = this.currentLang;
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === this.currentLang);
    });
  }
};

// ============================================
// MOBILE MENU
// ============================================
function initMobileMenu() {
  const toggle = document.getElementById('mobile-menu-toggle');
  const menu = document.getElementById('mobile-menu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    menu.classList.toggle('open');
    toggle.classList.toggle('open');
  });

  document.addEventListener('click', (e) => {
    if (!toggle.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.remove('open');
      toggle.classList.remove('open');
    }
  });
}

// ============================================
// LANGUAGE SELECTOR
// ============================================
function initLangSelector() {
  // Handle <select> lang selector
  const selector = document.getElementById('lang-selector');
  if (selector) {
    selector.addEventListener('change', (e) => {
      I18N.setLang(e.target.value);
    });
  }

  // Handle .lang-btn buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      I18N.setLang(btn.dataset.lang);
    });
  });

  // Handle data-lang links in dropdown (used in navbar)
  document.querySelectorAll('[data-lang]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      I18N.setLang(el.dataset.lang);
      // Update button text
      const langNames = {
        zh: '🇨🇳 中文', en: '🇺🇸 English', ja: '🇯🇵 日本語',
        ko: '🇰🇷 한국어', fr: '🇫🇷 Français', de: '🇩🇪 Deutsch',
        es: '🇪🇸 Español', ru: '🇷🇺 Русский'
      };
      const btnText = document.getElementById('lang-btn-text');
      if (btnText) btnText.textContent = langNames[el.dataset.lang] || el.dataset.lang;
      // Close dropdown
      const dropdown = document.getElementById('lang-dropdown');
      if (dropdown) dropdown.classList.remove('open');
    });
  });

  // Toggle dropdown on lang-btn click
  const langBtn = document.getElementById('lang-btn');
  const langDropdown = document.getElementById('lang-dropdown');
  if (langBtn && langDropdown) {
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langDropdown.classList.toggle('open');
    });
    document.addEventListener('click', () => {
      langDropdown.classList.remove('open');
    });
  }

  // Update lang button text on init
  I18N.updateSelector = function() {
    const langNames = {
      zh: '🇨🇳 中文', en: '🇺🇸 English', ja: '🇯🇵 日本語',
      ko: '🇰🇷 한국어', fr: '🇫🇷 Français', de: '🇩🇪 Deutsch',
      es: '🇪🇸 Español', ru: '🇷🇺 Русский'
    };
    const btnText = document.getElementById('lang-btn-text');
    if (btnText) btnText.textContent = langNames[this.currentLang] || this.currentLang;
    const sel = document.getElementById('lang-selector');
    if (sel) sel.value = this.currentLang;
    document.querySelectorAll('[data-lang]').forEach(el => {
      el.classList.toggle('active', el.dataset.lang === this.currentLang);
    });
  };
}

// ============================================
// SCROLL EFFECTS
// ============================================
function initScrollEffects() {
  const header = document.querySelector('header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 50);
    });
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in, .slide-up').forEach(el => {
    observer.observe(el);
  });
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
    if (btn) {
      btn.disabled = true;
      btn.textContent = '...';
      setTimeout(() => {
        btn.disabled = false;
        btn.textContent = I18N.t('contact_form_submit');
        form.reset();
        alert(I18N.t('contact_form_submit') + ' ✓');
      }, 1500);
    }
  });
}

// ============================================
// INIT
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  I18N.init();
  initMobileMenu();
  initLangSelector();
  initScrollEffects();
  initContactForm();
});
