const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const inquiryForm = document.querySelector(".inquiry-form");
const formNote = document.querySelector(".form-note");
const languageButtons = document.querySelectorAll(".language-switcher button");
const productGrid = document.querySelector(".product-grid");
const productScrollButtons = document.querySelectorAll("[data-scroll-products]");
const timelineItems = document.querySelectorAll(".history-card");
const historyYearLinks = document.querySelectorAll(".history-years a");
const certificateCards = document.querySelectorAll(".certificate-card");
const certificateModal = document.querySelector(".certificate-modal");
const certificateModalImage = certificateModal?.querySelector("img");
const certificateModalCaption = certificateModal?.querySelector("figcaption");
const certificateModalClose = document.querySelector(".certificate-modal-close");

const translations = {
  en: {
    pageTitle: "JDEC | 33kV-550kV GIS, HGIS and GIL Solutions",
    metaDescription:
      "Jiangsu Jingdian Electric Co., Ltd (JDEC) provides one-stop solutions for 33kV-550kV GIS, HGIS and GIL manufacturing, installation, commissioning and technical services.",
    topSlogan: "One-stop solution for 33kV-550kV GIS, HGIS and GIL manufacture",
    navHome: "Home",
    navAbout: "About",
    navProducts: "Products",
    navCapabilities: "Capabilities",
    navCases: "Customer Cases",
    navDomesticCases: "Domestic Projects",
    navOverseasCases: "Overseas Projects",
    navCaseXilai: "Chengdu Xilai 110kV HGIS",
    navCaseKezhou: "Kizilsu Jialangqi 110kV",
    navCaseLaos: "Laos 145kV HGIS",
    navCaseIndia: "India PTCUL 132kV",
    navProductGis: "GIS",
    navProductHgis: "HGIS",
    navProductInsulators: "Insulators",
    navProductInsulatorsSoon: "Coming soon",
    navProductInsulatorBasin: "Basin Insulator",
    navHistory: "History",
    navCertificates: "Certificates",
    navInquiry: "Inquiry",
    heroEyebrow: "33KV-550KV GIS | HGIS | GIL",
    heroTitle: "One-Stop Solutions for High-Voltage Power Transmission Equipment",
    heroText:
      "Jiangsu Jingdian Electric Co., Ltd (JDEC) delivers R&D, manufacturing, sales, technical services, installation and commissioning support for high-voltage power transmission and distribution equipment.",
    heroPrimary: "Explore Products",
    heroSecondary: "Send Inquiry",
    statYears: "Self-developed products",
    statArea: "Square meters of production area",
    statCapital: "RMB registered capital",
    statVoltage: "Maximum voltage class covered",
    coverageEyebrow: "Partner Customer Coverage",
    coverageTitle:
      "<span><strong>25+</strong> regions</span><span><strong>15+</strong> Chinese provinces</span><span><strong>6+</strong> countries</span>",
    placeChuxiong: "Chuxiong",
    placeChaoyang: "Chaoyang",
    placeGuangzhou: "Guangzhou",
    placeLuoyang: "Luoyang",
    placeOrdos: "Ordos",
    placeKunming: "Kunming",
    placeDali: "Dali",
    placeWeixian: "Wei County",
    placeChengdu: "Chengdu",
    placeUrumqi: "Urumqi",
    placeLanzhou: "Lanzhou",
    placeYinchuan: "Yinchuan",
    placeXian: "Xi'an",
    placeLangfang: "Langfang",
    placeIndia: "India",
    placeEthiopia: "Ethiopia",
    placeUkraine: "Ukraine",
    placeLaos: "Laos",
    placeRussia: "Russia",
    aboutEyebrow: "About Us",
    aboutTitle: "Jiangsu Jingdian Electric Co., Ltd (JDEC)",
    aboutIntro:
      "Jiangsu Jingdian Electric Co., Ltd (JDEC) was established on September 18, 2011. Headquartered in Taizhou Modern Science and Technology Park, Jiangsu Province, with a land area of 40,000 square meters, JDEC is a high-tech enterprise specializing in the R&D, manufacturing, sales and technical services of 33kV-550kV GIS/HGIS and GIL equipment.",
    aboutFacility:
      "The company inherits the technical foundations of its three founding enterprises in electrical insulation components, complete equipment and communication technologies, forming full-chain manufacturing capability from core components to complete systems, with product quality reaching and exceeding the level of leading domestic and international manufacturers.",
    aboutProjects:
      "JDEC's business covers <strong>China</strong>, <strong>India</strong>, <strong>Ukraine</strong>, <strong>Laos</strong>, <strong>Russia</strong>, <strong>Ethiopia</strong> and other countries and regions. In the domestic market, the company is an important supplier to State Grid, with business covering more than ten provinces including Sichuan and Xinjiang. JDEC also actively expands in the new energy sector, with products widely used in photovoltaic, hydropower, biomass power generation, natural gas cogeneration and waste-to-energy projects, and has delivered more than one hundred GIS bays in total.",
    aboutVision:
      "JDEC adheres to the philosophy that products reflect character, continuously improving R&D and design capabilities and equipping professional testing facilities. The company has established a green development plan and obtained Green Electricity Certificate trading credentials. JDEC is committed to becoming an internationally leading supplier of power transmission and distribution equipment, serving global energy construction with technological innovation and excellent quality.",
    productsEyebrow: "Product Center",
    productsTitle: "Main Product Series",
    productsIntro: "Browse JDEC's major GIS, HGIS and insulation component product series for power transmission and substation projects.",
    productOneTitle: "40.5kV HGIS",
    productOneText:
      "Compact hybrid gas-insulated switchgear for 40.5kV distribution and substation applications.",
    productTwoTitle: "145kV GIS",
    productTwoText: "Gas-insulated metal-enclosed switchgear for 145kV transmission and substation projects.",
    productThreeTitle: "145kV HGIS (1P enclosed)",
    productThreeText: "Single-phase enclosed 145kV HGIS with compact layout and reliable high-voltage performance.",
    productFourTitle: "145kV HGIS (3P enclosed)",
    productFourText:
      "Three-phase enclosed 145kV HGIS for integrated substation layouts and efficient project delivery.",
    productFiveTitle: "252kV GIS",
    productFiveText:
      "252kV gas-insulated switchgear for high-voltage transmission and grid infrastructure projects.",
    productSixTitle: "Basin Insulator",
    productSixText:
      "Basin-type epoxy insulator for GIS/HGIS internal insulation and mechanical support.",
    requestDetails: "Request details",
    capEyebrow: "Why JDEC",
    capTitle: "External Exchange",
    capIntro:
      "Focused on the frontier of power transmission and transformation technologies, sharing ideas on industry innovation.",
    capOneTitle: "R&D and Engineering",
    capOneText: "Technical review, product development and customized solutions for project requirements.",
    capTwoTitle: "Manufacturing",
    capTwoText: "Industry-leading production facilities and controlled workflows for stable product quality.",
    capThreeTitle: "Testing and Quality",
    capThreeText: "Production testing, process inspection and quality control aligned with international standards.",
    capFourTitle: "Installation Service",
    capFourText: "Project support from equipment delivery through installation, commissioning and technical service.",
    supportEyebrow: "Supporting System",
    supportTitle: "Mature Industrial Supporting System",
    supportOneTitle: "Electrical Performance Tester",
    supportOneText:
      "Precision electrical performance testing across all voltage classes ensures zero-defect factory electrical parameters and high reliability.",
    supportTwoTitle: "Testing Equipment",
    supportTwoText:
      "QCJDY-2400kV/240kJ power-frequency withstand voltage test set and lightning impulse testing equipment strictly simulate lightning impulse and power-frequency withstand voltage to verify the ultimate safety margin.",
    supportThreeTitle: "GIS Assembly Workshop",
    supportThreeText:
      "Class-10 clean assembly environment and full-process high-precision assembly support long-term stable GIS operation.",
    supportFourTitle: "After-Sales Service System",
    supportFourText:
      "Domestic and overseas service coverage enables rapid response to customer needs and full-lifecycle technical support from installation to operation and maintenance.",
    supportDetailPageTitle: "JDEC | Mature Industrial Supporting System",
    supportDetailMetaDescription:
      "JDEC's mature industrial supporting system covers GIS assembly, testing equipment, electrical performance testing and full-lifecycle after-sales service.",
    supportDetailHeroEyebrow: "Supporting System",
    supportDetailHeroTitle: "Mature Industrial Supporting System",
    supportDetailIntro:
      "As a professional manufacturer of 33kV-550kV high-voltage gas-insulated switchgear, JDEC has built a mature industrial supporting system covering the full chain of manufacturing, quality testing and after-sales service. The following introduces the system through four dimensions: GIS assembly workshops, testing equipment, electrical performance testers and after-sales service.",
    supportDetailOneTitle: "1. GIS Assembly Workshop: A Scaled and Standardized Lean Manufacturing Platform",
    supportDetailOneP1:
      "JDEC is located in Taizhou Jiangyan Modern Science and Technology Industrial Park, occupying 40,000 square meters. The company adopts advanced production models and international quality control systems. It operates two GIS assembly workshops, each responsible for GIS/HGIS assembly tasks for different voltage classes.",
    supportDetailOneP2:
      "The assembly workshops provide scaled assembly capability for the full 33kV-550kV GIS/HGIS range, covering 33kV GIS/HGIS, 72.5kV GIS/HGIS, 126kV GIS/HGIS, 245kV GIS/HGIS and 550kV GIS/HGIS products. The 126kV three-phase enclosed and 252kV single-phase enclosed products have passed type tests by Xi'an High Voltage Apparatus Research Institute Co., Ltd., with electrical and mechanical performance superior to comparable products in China and overseas.",
    supportDetailOneP3:
      "At the component level, the workshops are supported by specialized component assembly and processing systems, including interrupter assembly, 126kV circuit breaker mechanism assembly, three-position switch assembly and current transformer production. APG production, component curing furnaces, GIS insulating support cylinder production lines and other processing facilities are fully equipped. The epoxy casting workshop is equipped with 20-ton cranes, vacuum units, mixing systems and other large equipment, and can produce 1000kV-class insulators. Full-process integration from independent core component processing to complete equipment assembly ensures consistent product quality and controllable delivery cycles.",
    supportDetailTwoTitle: "2. Testing Equipment: Inspection Capability Across All Voltage Classes",
    supportDetailTwoP1:
      "JDEC has established an industry-leading high-voltage testing platform covering key tests such as power-frequency withstand voltage, lightning impulse and partial discharge.",
    supportDetailTwoP2:
      "The company is equipped with a QCJDY-2400kV/240kJ power-frequency withstand voltage test set and lightning impulse testing equipment, enabling insulation performance verification for GIS/HGIS products up to 550kV across all voltage classes. The test site also supports 550kV GIL testing, meeting factory testing requirements for extra-high-voltage products.",
    supportDetailTwoP3:
      "For precision measurement, JDEC uses a coordinate measuring machine (CMM) for high-precision dimensional inspection of components and assemblies, and an Aolong X-ray inspection system for non-destructive inspection of internal GIS structures, ensuring assembly quality and sealing performance of internal components.",
    supportDetailTwoP4:
      "From component dimensional inspection to complete equipment insulation verification, and from routine withstand voltage tests to lightning impulse tests, JDEC's testing equipment system provides comprehensive, full-process quality control.",
    supportDetailThreeTitle: "3. Electrical Performance Testers: Accurate and Reliable Electrical Parameter Testing",
    supportDetailThreeP1:
      "JDEC is equipped with a complete group of electrical performance testing instruments covering the full range of electrical parameter tests required for GIS/HGIS products.",
    supportDetailThreeP2:
      "Core testing equipment includes a CRM testing device for measuring circuit breaker and conductive loop resistance to verify conductivity; an SF6 detector for testing SF6 gas purity and decomposition products in GIS gas compartments; an SF6 water content testing device for accurately measuring trace moisture in SF6 gas, a key indicator for GIS insulation performance; and a circuit breaker operation tester for verifying mechanism operating characteristics and opening/closing timing.",
    supportDetailThreeP3:
      "The company also has an integrated electrical performance testing system for comprehensive testing and verification of complete GIS equipment electrical parameters. The complete instrument configuration ensures every delivered product meets design standards and customer requirements.",
    supportDetailFourTitle: "4. After-Sales Service System: Full-Lifecycle Service Assurance",
    supportDetailFourP1:
      "JDEC has established an after-sales service system covering the full product lifecycle, providing one-stop technical support from equipment installation and commissioning to operation, maintenance and overhaul.",
    supportDetailFourP2:
      "Installation and commissioning: the company has qualifications for substation installation, testing, repair and civil works, enabling full-process technical services from on-site GIS/HGIS installation to energization. From the Yunnan Shibie 110kV GIS substation to India SUVA 220kV substation and India Uttar Pradesh UPPTCL 220kV substation projects, JDEC has provided professional on-site installation and technical guidance.",
    supportDetailFourP3:
      "Maintenance and operation services: the company specializes in maintenance and service for 33kV-550kV GIS/HGIS and GIL, and can respond quickly with professional repair solutions for equipment issues during operation. With deep product-structure expertise and independent component manufacturing capability, JDEC provides original-factory spare parts and repair support.",
    supportDetailFourP4:
      "Technical consulting and solutions: beyond standardized products, JDEC provides complete solutions for GIS projects, including scheme design, technical consulting and system integration. The products are widely used in power, environmental protection, petroleum, transportation and other fields, and enjoy a strong reputation in China and overseas.",
    supportDetailSummary:
      "From scaled assembly manufacturing and all-voltage-class testing to accurate electrical performance testing and full-lifecycle after-sales service, JDEC's four supporting links reinforce one another to form a complete industrial supporting system. The system has passed ISO 14001:2015 management system certification, State Grid qualification certification and prequalification, and has been proven in many domestic and overseas projects, including Yunnan Shibie 110kV GIS substation, Bawangshan 110kV GIS substation, Cloud Computing Unicom 220kV substation and multiple Indian substation projects, fully demonstrating JDEC's mature industrial supporting capability and reliable delivery assurance in high-voltage gas-insulated switchgear.",
    casesEyebrow: "Customer Cases",
    casesTitle: "Selected Customer Cases",
    casesIntro: "Explore representative JDEC GIS and HGIS project references across domestic and overseas power infrastructure.",
    caseOneMeta: "Domestic Project",
    caseOneTitle: "Chengdu Xilai Station - 110kV HGIS Equipment",
    caseOneText:
      "JDEC supplied 110kV HGIS equipment for Chengdu Xilai Station, supporting stable energization and reliable regional grid operation.",
    caseTwoMeta: "Domestic Project",
    caseTwoTitle: "Kizilsu Jialangqi 110kV Substation",
    caseTwoText:
      "The Jialangqi 110kV substation project demonstrates JDEC equipment application in demanding grid environments and regional power supply projects.",
    caseThreeMeta: "Overseas Project",
    caseThreeTitle: "Laos 145kV HGIS Project",
    caseThreeText:
      "JDEC 145kV HGIS equipment was successfully commissioned in Laos, supporting overseas grid construction with compact and reliable high-voltage solutions.",
    caseFourMeta: "Overseas Project",
    caseFourTitle: "India PTCUL 132kV Substation",
    caseFourText:
      "The India PTCUL 132kV substation project reflects JDEC's overseas delivery capability for high-voltage substation equipment and technical support.",
    viewMore: "View more...",
    historyEyebrow: "Development History",
    historyTitle: "Focused on High-Voltage Power Infrastructure",
    historyOneTitle: "Company Foundation",
    historyOneText:
      "In September 2011, JDEC was established in Taizhou, Jiangsu, through the merger of three enterprises. Located in the modern science park, the company covers 40,000m2 with a registered capital of RMB 88M, focusing on 33kV-550kV GIS/HGIS and GIL equipment.",
    historyTwoTitle: "Capacity Upgrade",
    historyTwoText:
      "JDEC expanded production and testing capabilities for high-voltage transmission equipment. By enhancing manufacturing processes and quality control systems, the company laid a solid foundation for large-scale production and system integration.",
    historyThreeTitle: "State Grid Qualification",
    historyThreeText:
      "JDEC was officially qualified as a supplier of State Grid Corporation of China. With mature 110kV HGIS technology and proven reliability, the company entered a new phase of participating in major domestic transmission and substation projects.",
    historyFourTitle: "New Chapter in Foreign Trade",
    historyFourText:
      "In 2020, JDEC launched the Sanand and Haryana 220kV GIS projects in India, opening a new chapter in international trade.",
    historyFiveTitle: "Comprehensive Breakthrough",
    historyFiveText:
      "In 2024, JDEC's national projects at Xinglong, Tongtan and Aheqi stations were commissioned intensively. The company formed full-cycle solution capabilities from design and manufacturing to delivery, achieving breakthroughs in both domestic and overseas markets and entering a phase of rapid growth.",
    historySixTitle: "Green Development",
    historySixText:
      "JDEC obtained Green Electricity Certificate trading credentials and established a green development framework, officially embarking on a new chapter of low-carbon, sustainable operations.",
    certEyebrow: "Certificates",
    certTitle: "Quality System and Compliance Support",
    certIntro:
      "Selected certification documents and reports reflecting JDEC's quality, testing and sustainable development capabilities.",
    viewCertificate: "View Certificate",
    certQualityTitle: "Quality and Environmental Management Systems",
    certGreenTitle: "Green Electricity Certificate",
    certEsgTitle: "ESG Report",
    certTestTitle: "Type Test Reports",
    certAchievementTitle: "Scientific Achievement Registration Certificate",
    certGreenDesignTitle: "Green Product Design Certificate",
    certRohsReportTitle: "Raw Material RoHS Reports",
    certFactoryTestTitle: "Factory Acceptance Test Reports",
    certTrademarkTitle: "Trademark Registration Certificates",
    certIsoTitle: "ISO 9001 Quality Management",
    certIsoText: "Standardized procedures for production, inspection, and continuous improvement.",
    certCeTitle: "CE Compliance Support",
    certCeText: "Product documentation and compliance preparation for applicable European markets.",
    certRohsTitle: "RoHS Material Control",
    certRohsText: "Material selection and supply chain control aligned with environmental requirements.",
    certQcTitle: "Factory Inspection Reports",
    certQcText: "Order-based inspection records, testing reports, and shipment documentation.",
    inquiryEyebrow: "Inquiry",
    inquiryTitle: "Tell Us What You Need",
    inquiryIntro:
      "Share drawings, specifications, target quantity, and application details. Our team will review your request and reply with suitable recommendations.",
    inquiryPointOne: "Custom product development",
    inquiryPointTwo: "Bulk order quotation",
    inquiryPointThree: "Sample and technical consultation",
    formName: "Name",
    formNamePlaceholder: "Your name",
    formEmail: "Email",
    formCompany: "Company",
    formCompanyPlaceholder: "Company name",
    formInterest: "Product Interest",
    optionGis: "GIS Equipment",
    optionHgis: "HGIS Equipment",
    optionGil: "GIL Systems",
    optionAccessories: "GIS Components and Accessories",
    optionOther: "Other",
    formMessage: "Message",
    formMessagePlaceholder: "Please describe your voltage class, project type, quantity, and technical requirements.",
    formSubmit: "Submit Inquiry",
    formSuccess: "Thank you. Your inquiry has been recorded for website preview.",
    footerText: "One-stop solutions for 33kV-550kV GIS, HGIS and GIL manufacturing.",
    footerTagline: "Enterprise people-oriented, personnel integrity, professional management, standardized requirements",
    footerContactTitle: "Contact",
    footerAddressLabel: "Address",
    footerAddress: "Fuyuan Road, West Zone of Modern Science and Technology Park, Jiangyan District, Taizhou, Jiangsu Province",
    footerEmailLabel: "Email",
    footerTelLabel: "Tel",
    footerFaxLabel: "Fax",
    footerFaxLine: "Fax: 0523-88357711",
    footerPostcodeLabel: "Postcode",
    footerPostcodeLine: "Postcode: 225500",
    copyright: "Copyright 2026 JDEC. All rights reserved."
  },
  zh: {
    pageTitle: "JDEC | 33kV-550kV GIS、HGIS 与 GIL 解决方案",
    metaDescription:
      "江苏京电电气股份有限公司（JDEC）提供 33kV-550kV GIS、HGIS、GIL 制造、安装、调试及技术服务一站式解决方案。",
    topSlogan: "33kV-550kV GIS、HGIS、GIL 制造一站式解决方案",
    navHome: "首页",
    navAbout: "关于我们",
    navProducts: "产品展示",
    navCapabilities: "公司能力",
    navCases: "客户案例",
    navDomesticCases: "国内项目",
    navOverseasCases: "国外项目",
    navCaseXilai: "成都西来站110kV HGIS设备",
    navCaseKezhou: "克州佳郎奇110kV变电站",
    navCaseLaos: "老挝145kV HGIS顺利投运",
    navCaseIndia: "印度PTCUL 132kV变电站",
    navProductGis: "GIS",
    navProductHgis: "HGIS",
    navProductInsulators: "绝缘子",
    navProductInsulatorsSoon: "即将更新",
    navProductInsulatorBasin: "盆式绝缘子",
    navHistory: "发展历程",
    navCertificates: "取得证书",
    navInquiry: "询单",
    heroEyebrow: "33KV-550KV GIS | HGIS | GIL",
    heroTitle: "高压输配电设备一站式解决方案",
    heroText:
      "江苏京电电气股份有限公司（JDEC）为高压输配电设备提供研发、制造、销售、技术服务以及安装调试支持。",
    heroPrimary: "查看产品",
    heroSecondary: "发送询单",
    statYears: "自主研发产品",
    statArea: "平方米生产基地",
    statCapital: "人民币注册资本",
    statVoltage: "覆盖最高电压等级",
    coverageEyebrow: "合作客户覆盖",
    coverageTitle:
      "<span><strong>20+</strong> 地区</span><span><strong>15+</strong> 中国省份</span><span><strong>6+</strong> 国家</span>",
    placeChuxiong: "楚雄",
    placeChaoyang: "朝阳",
    placeGuangzhou: "广州",
    placeLuoyang: "洛阳",
    placeOrdos: "鄂尔多斯",
    placeKunming: "昆明",
    placeDali: "大理",
    placeWeixian: "魏县",
    placeChengdu: "成都",
    placeUrumqi: "乌鲁木齐",
    placeLanzhou: "兰州",
    placeYinchuan: "银川",
    placeXian: "西安",
    placeLangfang: "廊坊",
    placeIndia: "印度",
    placeEthiopia: "埃塞俄比亚",
    placeUkraine: "乌克兰",
    placeLaos: "老挝",
    placeRussia: "俄罗斯",
    aboutEyebrow: "关于我们",
    aboutTitle: "江苏京电电气股份有限公司（JDEC）",
    aboutIntro:
      "江苏京电电气股份有限公司（JDEC）成立于2011年9月18日，由帝鉧肯姆电气、泰州金久电气和姜堰华达通信设备三家企业整合组建而成。总部位于江苏省泰州市现代科技园区，占地面积4万平方米，是一家专注于33kV-550kV GIS/HGIS及GIL设备研发、制造、销售与技术服务的高新技术企业。",
    aboutFacility:
      "公司承继三家创始企业在电气绝缘部件、成套设备和通信领域的技术积淀，形成从核心部件到成套系统的全链条制造能力，产品品质达到并超越国内外知名厂商水平。",
    aboutProjects:
      "公司业务覆盖<strong>中国</strong>、<strong>印度</strong>、<strong>乌克兰</strong>、<strong>老挝</strong>、<strong>俄罗斯</strong>、<strong>埃塞俄比亚</strong>等多个国家和地区。在国内市场，公司是国家电网的重要供应商，业务覆盖四川、新疆等10余个省份。同时，JDEC积极拓展新能源领域，产品广泛应用于光伏、水电、生物质发电、天然气热电联产、垃圾焚烧发电等项目，累计交付GIS设备逾百个间隔。",
    aboutVision:
      "JDEC坚持“产品源于人品”的理念，持续提升研发与设计能力，配备专业检测设备，已建立绿色发展规划并取得绿证交易凭证。公司致力于成为国际一流的输配电设备供应商，以技术创新和卓越品质服务全球能源建设。",
    productsEyebrow: "产品中心",
    productsTitle: "主要产品系列",
    productsIntro: "浏览 JDEC 面向输电和变电工程的主要 GIS、HGIS 与绝缘部件产品系列。",
    productOneTitle: "40.5kV HGIS",
    productOneText:
      "适用于40.5kV配电及变电应用的紧凑型复合式气体绝缘开关设备。",
    productTwoTitle: "145kV GIS",
    productTwoText: "面向145kV输变电工程的气体绝缘金属封闭开关设备。",
    productThreeTitle: "145kV HGIS（1P enclosed）",
    productThreeText: "145kV单相封闭复合式气体绝缘开关设备，布局紧凑、运行可靠。",
    productFourTitle: "145kV HGIS（3P enclosed）",
    productFourText:
      "145kV三相共箱复合式气体绝缘开关设备，适用于集成化变电站布置。",
    productFiveTitle: "252kV GIS",
    productFiveText:
      "面向高压输电及电网基础设施项目的252kV气体绝缘金属封闭开关设备。",
    productSixTitle: "盆式绝缘子",
    productSixText:
      "适用于GIS/HGIS设备内部绝缘与机械支撑的盆式环氧绝缘部件。",
    requestDetails: "咨询详情",
    capEyebrow: "选择 JDEC",
    capTitle: "对外交流",
    capIntro:
      "聚焦输变电技术前沿，共话行业创新交流。",
    capOneTitle: "研发与工程",
    capOneText: "根据项目需求提供技术评审、产品开发和定制化解决方案。",
    capTwoTitle: "制造能力",
    capTwoText: "依托行业领先的生产设施和受控流程，保障产品质量稳定。",
    capThreeTitle: "检测与质量",
    capThreeText: "生产测试、过程检验和质量控制均遵循国际化标准。",
    capFourTitle: "安装服务",
    capFourText: "从设备交付到安装、调试和技术服务，为项目提供持续支持。",
    supportEyebrow: "配套体系",
    supportTitle: "成熟的产业配套体系",
    supportOneTitle: "电性能测试仪",
    supportOneText:
      "覆盖全电压等级电气性能精密检测，确保每台设备出厂电气参数零缺陷、高可靠。",
    supportTwoTitle: "试验设备",
    supportTwoText:
      "QCJDY-2400kV/ 240kJ工频耐压测试机组及雷电冲击测试设备，严苛模拟雷电冲击与工频耐压，验证极限安全裕度。",
    supportThreeTitle: "GIS总装车间",
    supportThreeText:
      "十级净化无尘车间，全流程高精度装配工艺，确保GIS长期稳定运行。",
    supportFourTitle: "售后体系",
    supportFourText:
      "国内外网点覆盖，快速响应客户需求，提供从安装到运维的全生命周期专业技术服务。",
    supportDetailPageTitle: "JDEC | 产业配套体系",
    supportDetailMetaDescription: "JDEC成熟的产业配套体系，覆盖GIS总装车间、试验设备、电性能测试仪及售后体系。",
    supportDetailHeroEyebrow: "配套体系",
    supportDetailHeroTitle: "成熟的产业配套体系",
    supportDetailIntro:
      "JDEC（江苏京电电气股份有限公司）作为33kV-550kV高压组合电器专业生产商，已构建起覆盖“生产制造—质量检测—售后服务”全链条的成熟产业配套体系。以下从GIS总装车间、试验设备、电性能测试仪、售后体系四个维度进行介绍。",
    supportDetailOneTitle: "一、GIS总装车间：规模化、标准化的精益制造平台",
    supportDetailOneP1:
      "JDEC位于泰州市姜堰区现代科技产业园，占地面积4万平方米，采用先进的生产模式及国际化的质量管控制度。公司设有两大GIS总装车间，分别承担不同电压等级GIS/HGIS的装配任务。",
    supportDetailOneP2:
      "总装车间具备33kV至550kV全系列GIS/HGIS的规模化装配能力，涵盖33kV GIS/HGIS、72.5kV GIS/HGIS、126kV GIS/HGIS、245kV GIS/HGIS及550kV GIS/HGIS等全系列产品。126kV共箱、252kV分箱产品已通过西安高压开关有限公司的型式试验，其性能和机械性能均优于国内外同类产品。",
    supportDetailOneP3:
      "在零部件层面，总装车间配套建有专业的零部件组装与加工体系：灭弧室组装、126kV断路器机构装配、三工位组装、电流互感器生产等环节分工明确；APG生产车间、零部件固化炉、GIS绝缘支撑筒生产线等加工设施一应俱全；环氧浇注车间配备20T行吊、真空机组、混料装置等大型装备，可生产1000kV等级绝缘子。从核心零部件自主加工到整机总装的全流程贯通，确保了产品质量的一致性与交货周期的可控性。",
    supportDetailTwoTitle: "二、试验设备：覆盖全电压等级的检测能力",
    supportDetailTwoP1:
      "JDEC建立了行业领先的高压试验检测平台，试验设备覆盖工频耐压、雷电冲击、局部放电等核心检测项目。",
    supportDetailTwoP2:
      "公司配备QCJDY-2400kV/ 240kJ工频耐压测试机组与雷电冲击测试设备，可对550kV及以下电压等级GIS/HGIS产品进行全电压等级的绝缘性能验证。试验现场具备550kV GIL试验能力，可满足特高压等级产品的出厂检测需求。",
    supportDetailTwoP3:
      "在精密测量方面，公司配备三坐标测量仪（CMM） ，用于零部件及装配体的高精度尺寸检测；配备奥龙X射线探测仪，可对GIS内部结构进行无损探伤检测，确保内部组件的装配质量与密封性能。",
    supportDetailTwoP4:
      "从零部件尺寸检测到整机绝缘性能验证，从常规耐压试验到雷电冲击试验，JDEC的试验设备体系实现了对产品质量的全方位、全流程把控。",
    supportDetailThreeTitle: "三、电性能测试仪：精准可靠的电气参数检测系统",
    supportDetailThreeP1: "JDEC配备了完整的电性能测试仪器群，覆盖GIS/HGIS产品电气参数的全面检测需求。",
    supportDetailThreeP2:
      "核心测试设备包括：回路电阻测试仪（CRM Testing Device） ，用于检测断路器及导电回路的主回路电阻值，确保导电性能达标；六氟化硫检测仪（SF₆ Detector） ，用于检测GIS气室中SF₆气体的纯度与分解产物；微水检测仪（SF₆ Water Content Testing Device） ，用于精确测定SF₆气体中的微量水分含量，这是保障GIS绝缘性能的关键指标；断路器操作测试仪（CB Operation Tester） ，用于验证断路器机构的机械动作特性与分合闸时序。",
    supportDetailThreeP3:
      "此外，公司还配备电性能综合测试系统，可对GIS成套设备的电气参数进行全面检测与验证。完善的仪器配置确保每一台出厂产品的电气性能均满足设计标准与客户要求。",
    supportDetailFourTitle: "四、售后体系：全生命周期的服务保障",
    supportDetailFourP1: "JDEC建立了覆盖产品全生命周期的售后服务体系，从设备安装、调试到运维检修提供一站式技术支持。",
    supportDetailFourP2:
      "安装与调试服务：公司具备变电站的承装、承试、承修及土建资质，可为客户提供GIS/HGIS设备从现场安装到带电投运的全过程技术服务。从云南石别110kV GIS变电站到印度SUVA 220kV变电站、印度北方邦UPPTCL 220kV变电站等国内外项目，JDEC均提供了专业的现场安装与技术指导服务。",
    supportDetailFourP3:
      "检修与运维服务：公司专业从事33kV-550kV系列GIS/HGIS和GIL的检修与服务，可针对设备运行中出现的各类问题提供快速响应与专业修复。依托对产品结构的深度理解与自主零部件生产能力，JDEC能够为客户提供原厂级的备品备件供应与维修保障。",
    supportDetailFourP4:
      "技术咨询与解决方案：公司不仅提供标准化产品，还可为GIS系列工程提供完整的解决方案，涵盖方案设计、技术咨询、系统集成等环节。产品已广泛应用于电力、环保、石油、交通等领域，在国内外享有较高声誉。",
    supportDetailSummary:
      "JDEC从规模化总装制造、全电压等级试验检测、精准电性能测试到全生命周期售后服务，四个环节环环相扣、相互支撑，构成了完整的产业配套体系。该体系已通过ISO 14001:2015管理体系认证、国家电网资质认证及资格预审，并经受了国内外众多项目（云南石别110kV GIS变电站、霸王山110kV GIS变电站、云计算联通220kV变电站及印度多个变电站项目）的实际检验，充分证明了JDEC在高压组合电器领域成熟的产业化配套能力与可靠的交付保障能力。",
    casesEyebrow: "客户案例",
    casesTitle: "国内外项目",
    casesIntro: "精选 JDEC 国内外 GIS/HGIS 项目案例，展示设备在电网、数据中心及海外输变电工程中的应用。",
    caseOneMeta: "国内项目",
    caseOneTitle: "成都西来站110kV HGIS设备",
    caseOneText:
      "JDEC 为成都西来站提供110kV HGIS设备，保障项目稳定送电与区域电网可靠运行。",
    caseTwoMeta: "国内项目",
    caseTwoTitle: "克州佳郎奇110kV变电站",
    caseTwoText:
      "佳郎奇110kV变电站项目展示了 JDEC 设备在复杂电网环境和区域供电工程中的应用能力。",
    caseThreeMeta: "国外项目",
    caseThreeTitle: "老挝145kV HGIS顺利投运",
    caseThreeText:
      "JDEC 145kV HGIS设备在老挝项目中顺利投运，以紧凑可靠的高压解决方案支持海外电网建设。",
    caseFourMeta: "国外项目",
    caseFourTitle: "印度PTCUL 132kV变电站",
    caseFourText:
      "印度PTCUL 132kV变电站项目体现了 JDEC 面向海外高压变电站设备交付与技术服务的能力。",
    viewMore: "查看更多...",
    historyEyebrow: "发展历程",
    historyTitle: "聚焦高压电力基础设施",
    historyOneTitle: "公司成立",
    historyOneText:
      "三家企业合并组建江苏京电电气股份有限公司，落户泰州姜堰现代科技园区，占地4万平方米，注册资金1.38亿元，专注33kV-550kV GIS/HGIS及GIL的研发与制造。",
    historyTwoTitle: "产能升级",
    historyTwoText:
      "持续投入生产装备与检测手段，扩建高压输配电设备生产线，完善质量管控体系，提升系统集成与成套交付能力，为规模化生产奠定坚实基础。",
    historyThreeTitle: "入网国网",
    historyThreeText:
      "正式成为国家电网入网供应商，凭借110kV HGIS产品的成熟技术与高可靠性，开启参与国内重大输变电工程的新阶段，品牌影响力显著提升。",
    historyFourTitle: "外贸新篇章",
    historyFourText:
      "开启印度萨南德和哈里亚纳邦220kV GIS项目，正式打开外贸新篇章。",
    historyFiveTitle: "全面突破",
    historyFiveText:
      "京电国家项目兴隆、通滩、阿合奇站集中投运。公司形成从设计、制造到交付的全周期解决方案能力，实现国内外市场双线突破，迈入发展快车道。",
    historySixTitle: "绿色启航",
    historySixText:
      "公司取得绿色电力证书交易凭证，建立绿色发展规划制度，正式开启低碳环保、可持续发展的企业新篇章。",
    certEyebrow: "取得证书",
    certTitle: "质量体系与合规支持",
    certIntro: "精选展示 JDEC 在质量管理、产品试验和绿色可持续发展方面取得的证书与报告。",
    viewCertificate: "查看证书",
    certQualityTitle: "质量与环境管理体系证书",
    certGreenTitle: "绿色电力证书",
    certEsgTitle: "ESG 报告",
    certTestTitle: "型式试验报告",
    certAchievementTitle: "科技成果登记证书",
    certGreenDesignTitle: "绿色产品设计证书",
    certRohsReportTitle: "原材料 RoHS 报告",
    certFactoryTestTitle: "出厂试验报告",
    certTrademarkTitle: "商标注册证书",
    certIsoTitle: "ISO 9001 质量管理",
    certIsoText: "建立覆盖生产、检验和持续改进的标准化流程。",
    certCeTitle: "CE 合规支持",
    certCeText: "为适用欧洲市场的产品准备技术文件和合规资料。",
    certRohsTitle: "RoHS 材料管控",
    certRohsText: "材料选择和供应链管控符合环保要求。",
    certQcTitle: "工厂检验报告",
    certQcText: "可按订单提供检验记录、测试报告和出货文件。",
    inquiryEyebrow: "询单",
    inquiryTitle: "告诉我们您的需求",
    inquiryIntro: "请提供图纸、规格、目标数量和应用场景。我们的团队将评估需求并提供合适建议。",
    inquiryPointOne: "定制产品开发",
    inquiryPointTwo: "批量订单报价",
    inquiryPointThree: "样品与技术咨询",
    formName: "姓名",
    formNamePlaceholder: "您的姓名",
    formEmail: "邮箱",
    formCompany: "公司",
    formCompanyPlaceholder: "公司名称",
    formInterest: "感兴趣产品",
    optionGis: "GIS 设备",
    optionHgis: "HGIS 设备",
    optionGil: "GIL 系统",
    optionAccessories: "GIS 元件及附件",
    optionOther: "其他",
    formMessage: "留言",
    formMessagePlaceholder: "请描述电压等级、项目类型、数量和技术要求。",
    formSubmit: "提交询单",
    formSuccess: "感谢您，询单已记录用于网站预览。",
    footerText: "33kV-550kV GIS、HGIS、GIL 制造一站式解决方案。",
    footerTagline: "以人为本，诚信为先，专业管理，标准化要求",
    footerContactTitle: "联系方式",
    footerAddressLabel: "地址",
    footerAddress: "江苏省泰州市姜堰区现代科技园区西区富源路",
    footerEmailLabel: "邮箱",
    footerTelLabel: "电话",
    footerFaxLabel: "传真",
    footerFaxLine: "传真：0523-88357711",
    footerPostcodeLabel: "邮编",
    footerPostcodeLine: "邮编：225500",
    copyright: "版权所有 2026 JDEC。保留所有权利。"
  },
  ru: {
    pageTitle: "JDEC | Решения GIS, HGIS и GIL 33-550 кВ",
    metaDescription:
      "Jiangsu Jingdian Electric Co., Ltd (JDEC) предоставляет комплексные решения для производства, монтажа, наладки и технического обслуживания GIS, HGIS и GIL 33-550 кВ.",
    topSlogan: "Комплексные решения для производства GIS, HGIS и GIL 33-550 кВ",
    navHome: "Главная",
    navAbout: "О нас",
    navProducts: "Продукция",
    navCapabilities: "Возможности",
    navCases: "Проекты",
    navDomesticCases: "Проекты в Китае",
    navOverseasCases: "Зарубежные проекты",
    navCaseXilai: "Chengdu Xilai HGIS 110 кВ",
    navCaseKezhou: "Кэчжоу Цзяланци 110 кВ",
    navCaseLaos: "Лаос HGIS 145 кВ",
    navCaseIndia: "India PTCUL 132 кВ",
    navProductGis: "GIS",
    navProductHgis: "HGIS",
    navProductInsulators: "Изоляторы",
    navProductInsulatorsSoon: "Скоро будет обновлено",
    navProductInsulatorBasin: "Опорный изолятор",
    navHistory: "История",
    navCertificates: "Сертификаты",
    navInquiry: "Запрос",
    heroEyebrow: "33KV-550KV GIS | HGIS | GIL",
    heroTitle: "Комплексные решения для высоковольтного оборудования передачи электроэнергии",
    heroText:
      "Jiangsu Jingdian Electric Co., Ltd (JDEC) обеспечивает НИОКР, производство, продажи, техническое обслуживание, монтаж и пусконаладочную поддержку высоковольтного оборудования передачи и распределения электроэнергии.",
    heroPrimary: "Смотреть продукцию",
    heroSecondary: "Отправить запрос",
    statYears: "Собственные разработки",
    statArea: "Кв. м производственной площади",
    statCapital: "Зарегистрированный капитал в юанях",
    statVoltage: "Максимальный класс напряжения",
    coverageEyebrow: "География партнерских клиентов",
    coverageTitle:
      "<span><strong>25+</strong> регионов</span><span><strong>15+</strong> провинций Китая</span><span><strong>6+</strong> стран</span>",
    placeChuxiong: "Чусюн",
    placeChaoyang: "Чаоян",
    placeGuangzhou: "Гуанчжоу",
    placeLuoyang: "Лоян",
    placeOrdos: "Ордос",
    placeKunming: "Куньмин",
    placeDali: "Дали",
    placeWeixian: "Вэйсянь",
    placeChengdu: "Чэнду",
    placeUrumqi: "Урумчи",
    placeLanzhou: "Ланьчжоу",
    placeYinchuan: "Иньчуань",
    placeXian: "Сиань",
    placeLangfang: "Ланфан",
    placeIndia: "Индия",
    placeEthiopia: "Эфиопия",
    placeUkraine: "Украина",
    placeLaos: "Лаос",
    placeRussia: "Россия",
    aboutEyebrow: "О нас",
    aboutTitle: "Jiangsu Jingdian Electric Co., Ltd (JDEC)",
    aboutIntro:
      "Jiangsu Jingdian Electric Co., Ltd (JDEC) была создана 18 сентября 2011 года. Штаб-квартира находится в современном научно-технологическом парке города Тайчжоу, провинция Цзянсу. Компания занимает площадь 40 000 кв. м и является высокотехнологичным предприятием, специализирующимся на НИОКР, производстве, продаже и техническом обслуживании оборудования GIS/HGIS и GIL 33-550 кВ.",
    aboutFacility:
      "Компания унаследовала технический опыт трех предприятий-основателей в области электрических изоляционных компонентов, комплектного оборудования и коммуникационных технологий, сформировав полный производственный цикл от ключевых компонентов до комплектных систем. Качество продукции достигает и превосходит уровень известных производителей в Китае и за рубежом.",
    aboutProjects:
      "Бизнес компании охватывает <strong>Китай</strong>, <strong>Индию</strong>, <strong>Украину</strong>, <strong>Лаос</strong>, <strong>Россию</strong>, <strong>Эфиопию</strong> и другие страны и регионы. На внутреннем рынке компания является важным поставщиком State Grid, охватывая более десяти провинций, включая Сычуань и Синьцзян. JDEC также активно развивает направление новой энергетики: продукция широко применяется в проектах солнечной энергетики, гидроэнергетики, биоэнергетики, газовой когенерации и мусоросжигательной генерации; совокупно поставлено более ста ячеек GIS.",
    aboutVision:
      "JDEC придерживается принципа «продукт отражает характер», постоянно повышает возможности НИОКР и проектирования и оснащена профессиональным испытательным оборудованием. Компания создала план зеленого развития и получила документы для торговли зелеными энергетическими сертификатами. JDEC стремится стать международным поставщиком оборудования передачи и распределения электроэнергии первого уровня, обслуживая глобальное энергетическое строительство технологическими инновациями и превосходным качеством.",
    productsEyebrow: "Продукция",
    productsTitle: "Основные серии продукции",
    productsIntro: "Ознакомьтесь с основными сериями GIS, HGIS и изоляционных компонентов JDEC для проектов передачи электроэнергии и подстанций.",
    productOneTitle: "40.5kV HGIS",
    productOneText:
      "Компактное гибридное газоизолированное распределительное устройство для применений 40,5 кВ.",
    productTwoTitle: "145kV GIS",
    productTwoText: "Газоизолированное металлическое закрытое распределительное устройство для проектов 145 кВ.",
    productThreeTitle: "145kV HGIS (1P enclosed)",
    productThreeText: "Однофазное закрытое HGIS 145 кВ с компактной компоновкой и надежными характеристиками.",
    productFourTitle: "145kV HGIS (3P enclosed)",
    productFourText:
      "Трехфазное закрытое HGIS 145 кВ для интегрированных компоновок подстанций.",
    productFiveTitle: "252kV GIS",
    productFiveText:
      "Газоизолированное распределительное устройство 252 кВ для высоковольтных сетевых проектов.",
    productSixTitle: "Опорный изолятор",
    productSixText:
      "Эпоксидный опорный изолятор для внутренней изоляции и механической поддержки оборудования GIS/HGIS.",
    requestDetails: "Запросить детали",
    capEyebrow: "Почему JDEC",
    capTitle: "Внешний обмен",
    capIntro:
      "Фокус на передовых технологиях передачи и трансформации электроэнергии, обмен идеями по отраслевым инновациям.",
    capOneTitle: "НИОКР и инжиниринг",
    capOneText: "Техническая экспертиза, разработка продукции и индивидуальные решения под требования проекта.",
    capTwoTitle: "Производство",
    capTwoText: "Передовые производственные мощности и контролируемые процессы для стабильного качества продукции.",
    capThreeTitle: "Испытания и качество",
    capThreeText: "Производственные испытания, контроль процессов и управление качеством в соответствии с международными стандартами.",
    capFourTitle: "Монтажный сервис",
    capFourText: "Поддержка проекта от поставки оборудования до монтажа, пусконаладки и технического обслуживания.",
    supportEyebrow: "Система поддержки",
    supportTitle: "Зрелая промышленная вспомогательная система",
    supportOneTitle: "Прибор для испытания электрических характеристик",
    supportOneText:
      "Точный контроль электрических характеристик для всех классов напряжения обеспечивает бездефектные заводские параметры и высокую надежность.",
    supportTwoTitle: "Испытательное оборудование",
    supportTwoText:
      "Испытательный комплекс QCJDY-2400kV/240kJ для выдерживаемого напряжения промышленной частоты и грозового импульса моделирует предельные нагрузки и проверяет запас безопасности.",
    supportThreeTitle: "Цех общей сборки GIS",
    supportThreeText:
      "Чистая сборочная среда класса 10 и высокоточная сборка на всех этапах обеспечивают долгосрочную стабильную работу GIS.",
    supportFourTitle: "Система послепродажного обслуживания",
    supportFourText:
      "Сервисная сеть в Китае и за рубежом обеспечивает быстрый отклик и профессиональную техническую поддержку полного жизненного цикла от монтажа до эксплуатации.",
    supportDetailPageTitle: "JDEC | Промышленная вспомогательная система",
    supportDetailMetaDescription:
      "Зрелая промышленная вспомогательная система JDEC охватывает сборку GIS, испытательное оборудование, электрические испытания и послепродажное обслуживание полного жизненного цикла.",
    supportDetailHeroEyebrow: "Система поддержки",
    supportDetailHeroTitle: "Зрелая промышленная вспомогательная система",
    supportDetailIntro:
      "Как профессиональный производитель высоковольтных газоизолированных распределительных устройств 33-550 кВ, JDEC создала зрелую промышленную вспомогательную систему, охватывающую полную цепочку производства, контроля качества и послепродажного обслуживания. Ниже система представлена по четырем направлениям: цеха сборки GIS, испытательное оборудование, приборы электрических испытаний и послепродажное обслуживание.",
    supportDetailOneTitle: "1. Цех сборки GIS: масштабная и стандартизированная платформа бережливого производства",
    supportDetailOneP1:
      "JDEC расположена в современном научно-технологическом промышленном парке Цзянъянь города Тайчжоу и занимает 40 000 квадратных метров. Компания применяет передовые производственные модели и международную систему контроля качества. Два цеха сборки GIS отвечают за сборку GIS/HGIS разных классов напряжения.",
    supportDetailOneP2:
      "Сборочные цеха обеспечивают масштабную сборку полной линейки GIS/HGIS 33-550 кВ, включая 33 кВ GIS/HGIS, 72,5 кВ GIS/HGIS, 126 кВ GIS/HGIS, 245 кВ GIS/HGIS и 550 кВ GIS/HGIS. Продукты 126 кВ трехфазного исполнения и 252 кВ однофазного исполнения прошли типовые испытания в Xi'an High Voltage Apparatus Research Institute Co., Ltd.; их электрические и механические характеристики превосходят сопоставимые продукты в Китае и за рубежом.",
    supportDetailOneP3:
      "На уровне компонентов цеха поддерживаются специализированными системами сборки и обработки: сборка дугогасительных камер, сборка механизмов выключателей 126 кВ, сборка трехпозиционных выключателей и производство трансформаторов тока. Также имеются производство APG, печи отверждения компонентов, линии производства изоляционных опорных цилиндров GIS и другое оборудование. Цех эпоксидного литья оснащен кранами 20 т, вакуумными установками, смесительными системами и другим крупным оборудованием, что позволяет производить изоляторы класса 1000 кВ. Полная интеграция процесса от самостоятельной обработки ключевых компонентов до сборки готового оборудования обеспечивает стабильное качество и контролируемые сроки поставки.",
    supportDetailTwoTitle: "2. Испытательное оборудование: контроль для всех классов напряжения",
    supportDetailTwoP1:
      "JDEC создала передовую высоковольтную испытательную платформу, охватывающую ключевые испытания, включая выдерживаемое напряжение промышленной частоты, грозовой импульс и частичные разряды.",
    supportDetailTwoP2:
      "Компания оснащена испытательным комплексом QCJDY-2400kV/240kJ для выдерживаемого напряжения промышленной частоты и оборудованием для испытаний грозовым импульсом, что позволяет проверять изоляционные характеристики GIS/HGIS до 550 кВ по всем классам напряжения. Испытательная площадка также поддерживает испытания GIL 550 кВ и отвечает требованиям заводских испытаний продукции сверхвысокого напряжения.",
    supportDetailTwoP3:
      "Для прецизионных измерений JDEC использует координатно-измерительную машину (CMM) для высокоточного контроля размеров компонентов и сборочных единиц, а также рентгеновскую систему Aolong для неразрушающего контроля внутренних структур GIS, обеспечивая качество сборки и герметичность внутренних компонентов.",
    supportDetailTwoP4:
      "От размерного контроля компонентов до проверки изоляции готового оборудования, от стандартных испытаний выдерживаемым напряжением до испытаний грозовым импульсом, система испытательного оборудования JDEC обеспечивает комплексный контроль качества на всех этапах.",
    supportDetailThreeTitle: "3. Приборы электрических испытаний: точная проверка электрических параметров",
    supportDetailThreeP1:
      "JDEC оснащена полной группой приборов электрических испытаний, покрывающих полный спектр проверки электрических параметров продукции GIS/HGIS.",
    supportDetailThreeP2:
      "Основное оборудование включает прибор CRM для измерения сопротивления главной цепи выключателей и токоведущих контуров; детектор SF6 для проверки чистоты газа SF6 и продуктов разложения в газовых отсеках GIS; прибор измерения содержания влаги в SF6 для точного определения следовой влаги, что является ключевым показателем изоляционных характеристик GIS; а также тестер операций выключателя для проверки механических характеристик и временных параметров включения и отключения.",
    supportDetailThreeP3:
      "Кроме того, компания располагает комплексной системой электрических испытаний для полной проверки и подтверждения электрических параметров комплектного оборудования GIS. Полная конфигурация приборов обеспечивает соответствие каждого поставляемого изделия проектным стандартам и требованиям заказчика.",
    supportDetailFourTitle: "4. Система послепродажного обслуживания: поддержка полного жизненного цикла",
    supportDetailFourP1:
      "JDEC создала систему послепродажного обслуживания, охватывающую полный жизненный цикл продукции, предоставляя единое техническое сопровождение от монтажа и наладки до эксплуатации, обслуживания и ремонта.",
    supportDetailFourP2:
      "Монтаж и наладка: компания обладает квалификациями для монтажа, испытаний, ремонта и строительных работ на подстанциях, что позволяет предоставлять полный цикл технических услуг от установки GIS/HGIS на площадке до ввода под напряжение. В проектах Yunnan Shibie 110 кВ GIS, India SUVA 220 кВ и India Uttar Pradesh UPPTCL 220 кВ JDEC предоставляла профессиональный монтаж и техническое сопровождение на объекте.",
    supportDetailFourP3:
      "Техническое обслуживание и эксплуатация: компания специализируется на обслуживании и ремонте GIS/HGIS и GIL 33-550 кВ и способна оперативно реагировать на различные проблемы оборудования в эксплуатации. Благодаря глубокому пониманию конструкции продукции и собственному производству компонентов JDEC предоставляет оригинальные запасные части и ремонтную поддержку.",
    supportDetailFourP4:
      "Технические консультации и решения: помимо стандартной продукции JDEC предоставляет комплексные решения для проектов GIS, включая проектирование схем, технические консультации и системную интеграцию. Продукция широко применяется в электроэнергетике, охране окружающей среды, нефтяной отрасли, транспорте и других сферах и имеет хорошую репутацию в Китае и за рубежом.",
    supportDetailSummary:
      "От масштабной сборки и испытаний по всем классам напряжения до точной проверки электрических характеристик и послепродажного обслуживания полного жизненного цикла, четыре звена JDEC взаимно усиливают друг друга и формируют полноценную промышленную вспомогательную систему. Эта система прошла сертификацию ISO 14001:2015, квалификационную сертификацию и предварительный отбор State Grid, а также подтверждена множеством проектов в Китае и за рубежом, включая подстанцию Yunnan Shibie 110 кВ GIS, Bawangshan 110 кВ GIS, Cloud Computing Unicom 220 кВ и ряд индийских подстанций, что демонстрирует зрелые промышленные возможности JDEC и надежность поставок в сфере высоковольтных газоизолированных распределительных устройств.",
    casesEyebrow: "Клиентские проекты",
    casesTitle: "Избранные клиентские проекты",
    casesIntro: "Избранные проекты JDEC GIS/HGIS в Китае и за рубежом, показывающие применение оборудования в электросетях, дата-центрах и подстанциях.",
    caseOneMeta: "Внутренний проект",
    caseOneTitle: "Станция Chengdu Xilai - оборудование HGIS 110 кВ",
    caseOneText:
      "JDEC поставила оборудование HGIS 110 кВ для станции Chengdu Xilai, обеспечивая стабильную подачу напряжения и надежную работу региональной сети.",
    caseTwoMeta: "Внутренний проект",
    caseTwoTitle: "Подстанция Кэчжоу Цзяланци 110 кВ",
    caseTwoText:
      "Проект подстанции Цзяланци 110 кВ демонстрирует применение оборудования JDEC в сложных сетевых условиях и региональных проектах электроснабжения.",
    caseThreeMeta: "Зарубежный проект",
    caseThreeTitle: "Проект HGIS 145 кВ в Лаосе",
    caseThreeText:
      "Оборудование JDEC HGIS 145 кВ было успешно введено в эксплуатацию в Лаосе, поддерживая зарубежное сетевое строительство компактными и надежными решениями.",
    caseFourMeta: "Зарубежный проект",
    caseFourTitle: "Подстанция India PTCUL 132 кВ",
    caseFourText:
      "Проект подстанции India PTCUL 132 кВ отражает возможности JDEC по зарубежной поставке высоковольтного оборудования и технической поддержке.",
    viewMore: "Подробнее...",
    historyEyebrow: "История развития",
    historyTitle: "Фокус на высоковольтной энергетической инфраструктуре",
    historyOneTitle: "Основание компании",
    historyOneText:
      "В сентябре 2011 года JDEC была создана в Тайчжоу, провинция Цзянсу, путем объединения трех предприятий. Компания расположена в современном научно-технологическом парке, занимает 40 000 м2 и имеет зарегистрированный капитал 88M юаней, специализируясь на оборудовании GIS/HGIS и GIL 33-550 кВ.",
    historyTwoTitle: "Расширение мощностей",
    historyTwoText:
      "JDEC продолжила инвестировать в производственное и испытательное оборудование, расширила линии высоковольтного оборудования передачи и распределения электроэнергии, усовершенствовала систему контроля качества и укрепила возможности системной интеграции и комплексной поставки.",
    historyThreeTitle: "Квалификация State Grid",
    historyThreeText:
      "JDEC официально стала квалифицированным поставщиком State Grid Corporation of China. Благодаря зрелой технологии 110 кВ HGIS и подтвержденной надежности компания вышла на новый этап участия в крупных внутренних проектах передачи и подстанций.",
    historyFourTitle: "Новая глава внешней торговли",
    historyFourText:
      "В 2020 году JDEC приступила к проектам GIS 220 кВ в Сананде и штате Харьяна, Индия, открыв новую главу внешней торговли.",
    historyFiveTitle: "Комплексный прорыв",
    historyFiveText:
      "В 2024 году национальные проекты JDEC на станциях Xinglong, Tongtan и Aheqi были введены в эксплуатацию скоординированно. Компания сформировала полный цикл решений от проектирования и производства до поставки, добившись прорыва на внутреннем и зарубежном рынках и войдя в этап быстрого роста.",
    historySixTitle: "Зеленый старт",
    historySixText:
      "JDEC получила документы для торговли зелеными энергетическими сертификатами и создала систему планирования зеленого развития, открыв новую главу низкоуглеродной и устойчивой деятельности.",
    certEyebrow: "Сертификаты",
    certTitle: "Система качества и поддержка соответствия",
    certIntro:
      "Избранные сертификаты и отчеты, отражающие возможности JDEC в области качества, испытаний и устойчивого развития.",
    viewCertificate: "Смотреть сертификат",
    certQualityTitle: "Системы менеджмента качества и экологии",
    certGreenTitle: "Сертификат зеленой электроэнергии",
    certEsgTitle: "ESG отчет",
    certTestTitle: "Протоколы типовых испытаний",
    certAchievementTitle: "Свидетельство регистрации научного достижения",
    certGreenDesignTitle: "Сертификат зеленого проектирования продукции",
    certRohsReportTitle: "Отчеты RoHS по сырьевым материалам",
    certFactoryTestTitle: "Протоколы заводских приемочных испытаний",
    certTrademarkTitle: "Свидетельства о регистрации товарного знака",
    certIsoTitle: "ISO 9001 Управление качеством",
    certIsoText: "Стандартизированные процедуры производства, контроля и постоянного улучшения.",
    certCeTitle: "Поддержка соответствия CE",
    certCeText: "Подготовка технической документации и материалов соответствия для применимых европейских рынков.",
    certRohsTitle: "Контроль материалов RoHS",
    certRohsText: "Выбор материалов и контроль цепочки поставок в соответствии с экологическими требованиями.",
    certQcTitle: "Заводские отчеты контроля",
    certQcText: "Инспекционные записи, протоколы испытаний и отгрузочная документация по заказу.",
    inquiryEyebrow: "Запрос",
    inquiryTitle: "Расскажите нам о ваших потребностях",
    inquiryIntro:
      "Отправьте чертежи, спецификации, требуемое количество и область применения. Наша команда рассмотрит запрос и предложит подходящие рекомендации.",
    inquiryPointOne: "Разработка индивидуальной продукции",
    inquiryPointTwo: "Коммерческое предложение для оптового заказа",
    inquiryPointThree: "Образцы и техническая консультация",
    formName: "Имя",
    formNamePlaceholder: "Ваше имя",
    formEmail: "Email",
    formCompany: "Компания",
    formCompanyPlaceholder: "Название компании",
    formInterest: "Интересующая продукция",
    optionGis: "Оборудование GIS",
    optionHgis: "Оборудование HGIS",
    optionGil: "Системы GIL",
    optionAccessories: "Компоненты и аксессуары GIS",
    optionOther: "Другое",
    formMessage: "Сообщение",
    formMessagePlaceholder: "Укажите класс напряжения, тип проекта, количество и технические требования.",
    formSubmit: "Отправить запрос",
    formSuccess: "Спасибо. Ваш запрос сохранен для предварительного просмотра сайта.",
    footerText: "Комплексные решения для производства GIS, HGIS и GIL 33-550 кВ.",
    footerTagline: "Ориентация на людей, честность, профессиональное управление и стандартизированные требования",
    footerContactTitle: "Контакты",
    footerAddressLabel: "Адрес",
    footerAddress: "Fuyuan Road, West Zone of Modern Science and Technology Park, Jiangyan District, Taizhou, Jiangsu Province",
    footerEmailLabel: "Email",
    footerTelLabel: "Тел.",
    footerFaxLabel: "Факс",
    footerFaxLine: "Факс: 0523-88357711",
    footerPostcodeLabel: "Индекс",
    footerPostcodeLine: "Индекс: 225500",
    copyright: "Copyright 2026 JDEC. Все права защищены."
  }
};

const urlLanguage = new URLSearchParams(window.location.search).get("lang");
const savedLanguage = localStorage.getItem("jdec-language");
let currentLanguage = translations[urlLanguage] ? urlLanguage : translations[savedLanguage] ? savedLanguage : "en";

function withLanguageParam(href, language) {
  if (!href.includes(".html")) return href;

  const [beforeHash, hash = ""] = href.split("#");
  const [path, query = ""] = beforeHash.split("?");
  const params = new URLSearchParams(query);
  params.set("lang", language);

  return `${path}?${params.toString()}${hash ? `#${hash}` : ""}`;
}

function localizeInternalLinks(language) {
  document.querySelectorAll("a[href]").forEach((link) => {
    const href = link.getAttribute("href");
    if (!href) return;
    link.setAttribute("href", withLanguageParam(href, language));
  });
}

function applyLanguage(language) {
  const dictionary = translations[language] || translations.en;
  currentLanguage = language;
  localStorage.setItem("jdec-language", currentLanguage);

  document.documentElement.lang = language === "zh" ? "zh-CN" : language;
  const pageTitleKey = document.body?.dataset.pageTitle;
  const pageDescriptionKey = document.body?.dataset.pageDescription;
  document.title = pageTitleKey && dictionary[pageTitleKey] ? dictionary[pageTitleKey] : dictionary.pageTitle;
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute(
      "content",
      pageDescriptionKey && dictionary[pageDescriptionKey] ? dictionary[pageDescriptionKey] : dictionary.metaDescription
    );

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const key = element.dataset.i18nHtml;
    if (dictionary[key]) {
      element.innerHTML = dictionary[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    if (dictionary[key]) {
      element.setAttribute("placeholder", dictionary[key]);
    }
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === language;
    button.classList.toggle("is-active", isActive);
    if (isActive) {
      button.setAttribute("aria-current", "true");
    } else {
      button.removeAttribute("aria-current");
    }
  });

  if (formNote) {
    formNote.textContent = "";
  }

  localizeInternalLinks(language);
}

menuToggle?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks?.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    navLinks.classList.remove("is-open");
    menuToggle?.setAttribute("aria-expanded", "false");
  }
});

inquiryForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  formNote.textContent = translations[currentLanguage].formSuccess;
  inquiryForm.reset();
});

productScrollButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (!productGrid) return;

    const direction = Number(button.dataset.scrollProducts);
    const firstCard = productGrid.querySelector(".product-card");
    const cardWidth = firstCard ? firstCard.getBoundingClientRect().width + 24 : productGrid.clientWidth * 0.85;

    productGrid.scrollBy({
      left: direction * cardWidth,
      behavior: "smooth"
    });
  });
});

function closeCertificateModal() {
  if (!certificateModal) return;

  certificateModal.classList.remove("is-open");
  certificateModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

certificateCards.forEach((card) => {
  card.addEventListener("click", () => {
    if (!certificateModal || !certificateModalImage || !certificateModalCaption) return;

    const imageSource = card.dataset.certificate;
    const titleKey = card.dataset.certificateTitle;
    const title = translations[currentLanguage][titleKey] || card.querySelector(".certificate-title")?.textContent || "";

    certificateModalImage.setAttribute("src", imageSource);
    certificateModalImage.setAttribute("alt", title);
    certificateModalCaption.textContent = title;
    certificateModal.classList.add("is-open");
    certificateModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    certificateModalClose?.focus();
  });
});

certificateModalClose?.addEventListener("click", closeCertificateModal);

certificateModal?.addEventListener("click", (event) => {
  if (event.target === certificateModal) {
    closeCertificateModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && certificateModal?.classList.contains("is-open")) {
    closeCertificateModal();
  }
});

if ("IntersectionObserver" in window) {
  const timelineObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          timelineObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  timelineItems.forEach((item) => timelineObserver.observe(item));

  const historyActiveObserver = new IntersectionObserver(
    (entries) => {
      const visibleEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visibleEntry) return;

      historyYearLinks.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === `#${visibleEntry.target.id}`);
      });
    },
    {
      rootMargin: "-35% 0px -45% 0px",
      threshold: [0.2, 0.5, 0.8]
    }
  );

  timelineItems.forEach((item) => historyActiveObserver.observe(item));
} else {
  timelineItems.forEach((item) => item.classList.add("is-visible"));
}

historyYearLinks.forEach((link) => {
  link.addEventListener("click", () => {
    historyYearLinks.forEach((item) => item.classList.toggle("is-active", item === link));
  });
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.lang);
  });
});

applyLanguage(currentLanguage);
