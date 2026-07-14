const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const languageButtons = document.querySelectorAll(".language-switcher button");
const caseTabs = document.querySelectorAll("[data-case-tab]");
const casePanels = document.querySelectorAll("[data-case-panel]");

const translations = {
  en: {
    pageTitle: "JDEC | Customer Case Details",
    metaDescription: "JDEC customer case detail pages covering domestic and overseas GIS/HGIS projects.",
    topSlogan: "One-stop solution for 33kV-550kV GIS, HGIS and GIL manufacture",
    navHome: "Home",
    navAbout: "About",
    navProducts: "Products",
    navCapabilities: "Capabilities",
    navCases: "Customer Cases",
    navCaseXilai: "Chengdu Xilai 110kV HGIS",
    navCaseKezhou: "Kizilsu Jialangqi 110kV",
    navCaseLaos: "Laos 145kV HGIS",
    navCaseIndia: "India PTCUL 132kV",
    navHistory: "History",
    navCertificates: "Certificates",
    navInquiry: "Inquiry",
    casesPageEyebrow: "Customer Cases",
    casesPageTitle: "Customer Case Details",
    casesPageIntro:
      "Switch between representative JDEC project references and review project background, delivery support, equipment application and site photos.",
    caseChallengeTitle: "Project Background",
    caseSolutionTitle: "JDEC Solution",
    caseResultTitle: "Project Value",
    caseAdvantagesEyebrow: "Equipment Advantages",
    caseAdvantagesTitle: "110kV HGIS Series Advantages",
    caseAdvantageOne: "Compact layout saves station area.",
    caseAdvantageTwo: "Fully sealed structure resists condensation and pollution.",
    caseAdvantageThree: "High mechanical life supports frequent operation.",
    caseAdvantageFour: "Smart interfaces support digital substations.",
    caseXilaiEyebrow: "Domestic Project",
    caseXilaiTitle: "三站联动筑川网：江苏京电电气助力四川电网110kV变电站新建工程纪实",
    caseXilaiLead:
      "近年来，四川省经济社会发展持续提速，成都及周边城市群用电负荷不断攀升，对电网结构的可靠性、灵活性和建设速度提出了更高要求。江苏京电电气股份有限公司（英文简称“JDEC”）凭借成熟的110kV HGIS产品，先后中标国家电网主导下的四川地区三座110kV变电站新建工程——兴隆站、西来站、通滩站，分别提供9套、5套、5套HGIS设备，并于2024年10月至2025年12月期间全部顺利投运。三座变电站如同三颗“电力明珠”，镶嵌在蜀地电网的关键节点上，为区域经济发展注入了强劲动能。",
    caseXilaiFactOne: "Voltage: 110kV",
    caseXilaiFactTwo: "Equipment: 5 sets of HGIS",
    caseXilaiFactThree: "Commissioning: Dec 26, 2025",
    caseXilaiCaption: "Chengdu Xilai 110kV HGIS project site",
    caseXilaiArticleImage2Caption: "Xilai Station equipment installation and commissioning",
    caseXilaiArticleImage3Caption: "On-site coordination and equipment delivery support",
    caseXilaiChallengeText:
      "Seasonal load fluctuation from rural tourism and agricultural processing required higher voltage regulation capability and stronger supply reliability.",
    caseXilaiSolutionText:
      "JDEC's service team remained on site in low-temperature conditions, supporting SF6 density relay anti-freezing checks and commissioning coordination to keep the equipment reliable at -5°C.",
    caseXilaiResultText:
      "After commissioning, Xilai Station ended reliance on a single long 10kV feeder and is expected to reduce annual outage time by about 12 hours, providing stronger energy support for rural revitalization.",
    caseKezhouEyebrow: "Domestic Project",
    caseKezhouTitle: "Kizilsu Jialangqi 110kV Substation",
    caseKezhouLead:
      "The Jialangqi 110kV substation project demonstrates JDEC equipment application in demanding regional grid environments.",
    caseKezhouFactOne: "Voltage: 110kV",
    caseKezhouFactTwo: "Application: Substation equipment",
    caseKezhouFactThree: "Region: Xinjiang, China",
    caseKezhouCaption: "Kizilsu Jialangqi 110kV substation site",
    caseKezhouChallengeText:
      "The project required stable high-voltage equipment performance for a regional grid environment with demanding site conditions.",
    caseKezhouSolutionText:
      "JDEC provided compact, reliable equipment and technical coordination to support smooth installation and operation.",
    caseKezhouResultText:
      "The project strengthens local grid reliability and reflects JDEC's experience in domestic power infrastructure delivery.",
    caseLaosEyebrow: "Overseas Project",
    caseLaosTitle: "Laos Grid Upgrade with JDEC 145kV HGIS Equipment",
    caseLaosLead:
      "JDEC 145kV HGIS equipment was successfully commissioned in Laos, supporting overseas grid construction with compact and reliable high-voltage solutions.",
    caseLaosFactOne: "Voltage: 145kV",
    caseLaosFactTwo: "Equipment: HGIS",
    caseLaosFactThree: "Region: Laos",
    caseLaosCaption: "Laos 145kV HGIS project site",
    caseLaosArticleImage1Caption: "Laos 145kV HGIS equipment on site",
    caseLaosArticleImage2Caption: "Laos 145kV HGIS project installation site",
    caseLaosChallengeText:
      "The overseas project required compact equipment layout, stable insulation performance and dependable site coordination.",
    caseLaosSolutionText:
      "JDEC supplied 145kV HGIS equipment and supported the project with international delivery and technical service capability.",
    caseLaosResultText:
      "The successful commissioning expands JDEC's overseas project footprint and supports local power infrastructure reliability.",
    caseIndiaEyebrow: "Overseas Project",
    caseIndiaTitle: "India PTCUL 132kV Substation",
    caseIndiaLead:
      "The India PTCUL 132kV substation project reflects JDEC's overseas delivery capability for high-voltage substation equipment and technical support.",
    caseIndiaFactOne: "Voltage: 132kV",
    caseIndiaFactTwo: "Application: Substation project",
    caseIndiaFactThree: "Region: India",
    caseIndiaCaption: "India PTCUL 132kV substation site",
    caseIndiaChallengeText:
      "The project required reliable high-voltage equipment delivery and coordination for an overseas substation construction schedule.",
    caseIndiaSolutionText:
      "JDEC supported equipment delivery, technical communication and commissioning preparation for the PTCUL 132kV project.",
    caseIndiaResultText:
      "The project demonstrates JDEC's ability to serve international customers with equipment, documentation and site support.",
    footerTagline: "Enterprise people-oriented, personnel integrity, professional management, standardized requirements",
    footerContactTitle: "Contact",
    footerAddress: "Fuyuan Road, West Zone of Modern Science and Technology Park, Jiangyan District, Taizhou, Jiangsu Province",
    footerFaxLine: "Fax: 0523-88357711",
    footerPostcodeLine: "Postcode: 225500",
    copyright: "Copyright 2026 JDEC. All rights reserved."
  },
  zh: {
    pageTitle: "JDEC | 客户案例详情",
    metaDescription: "江苏京电电气股份有限公司客户案例详情，覆盖国内与海外 GIS/HGIS 项目。",
    topSlogan: "33kV-550kV GIS、HGIS、GIL 制造一站式解决方案",
    navHome: "首页",
    navAbout: "关于我们",
    navProducts: "产品展示",
    navCapabilities: "公司能力",
    navCases: "客户案例",
    navCaseXilai: "成都西来站110kV HGIS设备",
    navCaseKezhou: "克州佳郎奇110kV变电站",
    navCaseLaos: "老挝145kV HGIS顺利投运",
    navCaseIndia: "印度PTCUL 132kV变电站",
    navHistory: "发展历程",
    navCertificates: "取得证书",
    navInquiry: "询单",
    casesPageEyebrow: "客户案例",
    casesPageTitle: "客户案例详情",
    casesPageIntro: "点击项目标签切换案例，查看项目背景、交付支持、设备应用和现场图片。",
    caseChallengeTitle: "项目背景",
    caseSolutionTitle: "JDEC方案",
    caseResultTitle: "项目成效",
    caseAdvantagesEyebrow: "设备优势",
    caseAdvantagesTitle: "110kV HGIS系列优势",
    caseAdvantageOne: "紧凑化设计，节省变电站占地。",
    caseAdvantageTwo: "全密封结构，抵御凝露、污秽与酸雨影响。",
    caseAdvantageThree: "高机械寿命，满足频繁操作场景。",
    caseAdvantageFour: "智能化接口，便于接入智能变电站系统。",
    caseXilaiEyebrow: "国内项目",
    caseXilaiTitle: "三站联动筑川网：江苏京电电气助力四川电网110kV变电站新建工程纪实",
    caseXilaiLead:
      "近年来，四川省经济社会发展持续提速，成都及周边城市群用电负荷不断攀升，对电网结构的可靠性、灵活性和建设速度提出了更高要求。江苏京电电气股份有限公司（英文简称“JDEC”）凭借成熟的110kV HGIS产品，先后中标国家电网主导下的四川地区三座110kV变电站新建工程——兴隆站、西来站、通滩站，分别提供9套、5套、5套HGIS设备，并于2024年10月至2025年12月期间全部顺利投运。三座变电站如同三颗“电力明珠”，镶嵌在蜀地电网的关键节点上，为区域经济发展注入了强劲动能。",
    caseXilaiFactOne: "电压等级：110kV",
    caseXilaiFactTwo: "设备：5套 HGIS",
    caseXilaiFactThree: "投运时间：2025年12月26日",
    caseXilaiCaption: "成都西来站110kV HGIS项目现场",
    caseXilaiArticleImage2Caption: "西来站项目现场设备安装与调试",
    caseXilaiArticleImage3Caption: "项目现场协同与设备交付支持",
    caseXilaiChallengeText:
      "随着乡村旅游和农产品深加工兴起，区域季节性负荷波动明显，传统设备调压能力不足，供电可靠性需要进一步提升。",
    caseXilaiSolutionText:
      "JDEC 技术服务团队在冬季低温天气下坚守现场，协助施工单位进行 SF6 气体密度继电器防冻检查，确保设备在零下5℃环境下仍能可靠动作。",
    caseXilaiResultText:
      "西来站投运后结束了该区域由单一10kV长线路供电的历史，预计每年可减少约12小时故障停电时间，为乡村振兴提供更稳定的能源保障。",
    caseKezhouEyebrow: "国内项目",
    caseKezhouTitle: "克州佳郎奇110kV变电站",
    caseKezhouLead: "佳郎奇110kV变电站项目展示了 JDEC 设备在复杂电网环境和区域供电工程中的应用能力。",
    caseKezhouFactOne: "电压等级：110kV",
    caseKezhouFactTwo: "应用：变电站设备",
    caseKezhouFactThree: "地区：中国新疆",
    caseKezhouCaption: "克州佳郎奇110kV变电站现场",
    caseKezhouChallengeText: "项目需要在复杂现场条件下保持高压设备稳定运行，对设备可靠性和工程协同提出更高要求。",
    caseKezhouSolutionText: "JDEC 提供紧凑可靠的设备及技术协调支持，保障现场安装、调试与运行衔接。",
    caseKezhouResultText: "项目提升了当地电网供电可靠性，也体现了 JDEC 在国内电力基础设施项目中的履约经验。",
    caseLaosEyebrow: "国外项目",
    caseLaosTitle: "丝路扬帆“电”动澜湄：江苏京电电气高品质HGIS设备助力老挝国家电网升级建设",
    caseLaosLead: "JDEC 145kV HGIS设备在老挝项目中顺利投运，以紧凑可靠的高压解决方案支持海外电网建设。",
    caseLaosFactOne: "电压等级：145kV",
    caseLaosFactTwo: "设备：HGIS",
    caseLaosFactThree: "地区：老挝",
    caseLaosCaption: "老挝145kV HGIS项目现场",
    caseLaosArticleImage1Caption: "老挝145kV HGIS设备现场",
    caseLaosArticleImage2Caption: "老挝145kV HGIS项目安装现场",
    caseLaosChallengeText: "海外项目需要兼顾紧凑布置、稳定绝缘性能和可靠现场协同，对交付能力要求较高。",
    caseLaosSolutionText: "JDEC 提供145kV HGIS设备，并以国际交付和技术服务能力支持项目建设。",
    caseLaosResultText: "项目顺利投运拓展了 JDEC 海外项目版图，并支持当地电力基础设施稳定运行。",
    caseIndiaEyebrow: "国外项目",
    caseIndiaTitle: "印度PTCUL 132kV变电站",
    caseIndiaLead: "印度PTCUL 132kV变电站项目体现了 JDEC 面向海外高压变电站设备交付与技术服务的能力。",
    caseIndiaFactOne: "电压等级：132kV",
    caseIndiaFactTwo: "应用：变电站项目",
    caseIndiaFactThree: "地区：印度",
    caseIndiaCaption: "印度PTCUL 132kV变电站现场",
    caseIndiaChallengeText: "项目需要面向海外变电站建设周期完成可靠的高压设备交付与工程沟通。",
    caseIndiaSolutionText: "JDEC 支持 PTCUL 132kV项目的设备交付、技术沟通与投运准备。",
    caseIndiaResultText: "项目展示了 JDEC 服务国际客户的设备、文件和现场支持能力。",
    footerTagline: "以人为本，诚信为先，专业管理，标准化要求",
    footerContactTitle: "联系方式",
    footerAddress: "江苏省泰州市姜堰区现代科技园区西区富源路",
    footerFaxLine: "传真：0523-88357711",
    footerPostcodeLine: "邮编：225500",
    copyright: "版权所有 2026 JDEC。保留所有权利。"
  },
  ru: {
    pageTitle: "JDEC | Детали проектов",
    metaDescription: "Детальные страницы проектов JDEC для внутренних и зарубежных GIS/HGIS проектов.",
    topSlogan: "Комплексные решения для производства GIS, HGIS и GIL 33-550 кВ",
    navHome: "Главная",
    navAbout: "О нас",
    navProducts: "Продукция",
    navCapabilities: "Возможности",
    navCases: "Проекты",
    navCaseXilai: "Chengdu Xilai HGIS 110 кВ",
    navCaseKezhou: "Кэчжоу Цзяланци 110 кВ",
    navCaseLaos: "Лаос HGIS 145 кВ",
    navCaseIndia: "India PTCUL 132 кВ",
    navHistory: "История",
    navCertificates: "Сертификаты",
    navInquiry: "Запрос",
    casesPageEyebrow: "Клиентские проекты",
    casesPageTitle: "Детали проектов",
    casesPageIntro:
      "Переключайтесь между проектами JDEC и просматривайте фон проекта, поддержку поставки, применение оборудования и фотографии площадки.",
    caseChallengeTitle: "Фон проекта",
    caseSolutionTitle: "Решение JDEC",
    caseResultTitle: "Ценность проекта",
    caseAdvantagesEyebrow: "Преимущества оборудования",
    caseAdvantagesTitle: "Преимущества серии HGIS 110 кВ",
    caseAdvantageOne: "Компактная компоновка экономит площадь подстанции.",
    caseAdvantageTwo: "Герметичная конструкция защищает от конденсата и загрязнений.",
    caseAdvantageThree: "Высокий механический ресурс для частых операций.",
    caseAdvantageFour: "Интеллектуальные интерфейсы для цифровых подстанций.",
    caseXilaiEyebrow: "Проект в Китае",
    caseXilaiTitle: "三站联动筑川网：江苏京电电气助力四川电网110kV变电站新建工程纪实",
    caseXilaiLead:
      "近年来，四川省经济社会发展持续提速，成都及周边城市群用电负荷不断攀升，对电网结构的可靠性、灵活性和建设速度提出了更高要求。江苏京电电气股份有限公司（英文简称“JDEC”）凭借成熟的110kV HGIS产品，先后中标国家电网主导下的四川地区三座110kV变电站新建工程——兴隆站、西来站、通滩站，分别提供9套、5套、5套HGIS设备，并于2024年10月至2025年12月期间全部顺利投运。三座变电站如同三颗“电力明珠”，镶嵌在蜀地电网的关键节点上，为区域经济发展注入了强劲动能。",
    caseXilaiFactOne: "Напряжение: 110 кВ",
    caseXilaiFactTwo: "Оборудование: 5 комплектов HGIS",
    caseXilaiFactThree: "Ввод в эксплуатацию: 26 декабря 2025",
    caseXilaiCaption: "Площадка проекта Chengdu Xilai HGIS 110 кВ",
    caseXilaiArticleImage2Caption: "Монтаж и наладка оборудования на площадке Xilai",
    caseXilaiArticleImage3Caption: "Координация на площадке и поддержка поставки оборудования",
    caseXilaiChallengeText:
      "Сезонные колебания нагрузки от сельского туризма и переработки сельхозпродукции требовали лучшего регулирования напряжения и надежности питания.",
    caseXilaiSolutionText:
      "Сервисная команда JDEC работала на площадке в холодных условиях, помогая проверить защиту реле плотности SF6 от замерзания и надежность оборудования при -5°C.",
    caseXilaiResultText:
      "После ввода станция Xilai заменила зависимость от одной длинной линии 10 кВ и, как ожидается, сократит годовое время отключений примерно на 12 часов.",
    caseKezhouEyebrow: "Проект в Китае",
    caseKezhouTitle: "Подстанция Кэчжоу Цзяланци 110 кВ",
    caseKezhouLead:
      "Проект подстанции Цзяланци 110 кВ демонстрирует применение оборудования JDEC в сложных региональных сетевых условиях.",
    caseKezhouFactOne: "Напряжение: 110 кВ",
    caseKezhouFactTwo: "Применение: оборудование подстанции",
    caseKezhouFactThree: "Регион: Синьцзян, Китай",
    caseKezhouCaption: "Площадка подстанции Кэчжоу Цзяланци 110 кВ",
    caseKezhouChallengeText:
      "Проект требовал стабильной работы высоковольтного оборудования в сложных условиях площадки.",
    caseKezhouSolutionText:
      "JDEC предоставила компактное и надежное оборудование, а также техническую координацию для монтажа и эксплуатации.",
    caseKezhouResultText:
      "Проект усиливает надежность местной сети и отражает опыт JDEC в поставках для энергетической инфраструктуры Китая.",
    caseLaosEyebrow: "Зарубежный проект",
    caseLaosTitle: "Модернизация энергосети Лаоса с оборудованием JDEC HGIS 145 кВ",
    caseLaosLead:
      "Оборудование JDEC HGIS 145 кВ было успешно введено в эксплуатацию в Лаосе, поддерживая строительство сети компактными и надежными решениями.",
    caseLaosFactOne: "Напряжение: 145 кВ",
    caseLaosFactTwo: "Оборудование: HGIS",
    caseLaosFactThree: "Регион: Лаос",
    caseLaosCaption: "Площадка проекта HGIS 145 кВ в Лаосе",
    caseLaosArticleImage1Caption: "Оборудование HGIS 145 кВ на площадке в Лаосе",
    caseLaosArticleImage2Caption: "Монтажная площадка проекта HGIS 145 кВ в Лаосе",
    caseLaosChallengeText:
      "Зарубежный проект требовал компактной компоновки, стабильной изоляции и надежной координации на площадке.",
    caseLaosSolutionText:
      "JDEC поставила оборудование HGIS 145 кВ и поддержала проект международной поставкой и техническим сервисом.",
    caseLaosResultText:
      "Успешный ввод расширяет зарубежный опыт JDEC и поддерживает надежность местной энергетической инфраструктуры.",
    caseIndiaEyebrow: "Зарубежный проект",
    caseIndiaTitle: "Подстанция India PTCUL 132 кВ",
    caseIndiaLead:
      "Проект подстанции India PTCUL 132 кВ отражает возможности JDEC по зарубежной поставке высоковольтного оборудования и технической поддержке.",
    caseIndiaFactOne: "Напряжение: 132 кВ",
    caseIndiaFactTwo: "Применение: проект подстанции",
    caseIndiaFactThree: "Регион: Индия",
    caseIndiaCaption: "Площадка подстанции India PTCUL 132 кВ",
    caseIndiaChallengeText:
      "Проект требовал надежной поставки высоковольтного оборудования и координации для графика строительства зарубежной подстанции.",
    caseIndiaSolutionText:
      "JDEC поддержала поставку оборудования, техническую коммуникацию и подготовку к вводу проекта PTCUL 132 кВ.",
    caseIndiaResultText:
      "Проект демонстрирует способность JDEC обслуживать международных клиентов оборудованием, документацией и поддержкой на площадке.",
    footerTagline: "Ориентация на людей, честность, профессиональное управление и стандартизированные требования",
    footerContactTitle: "Контакты",
    footerAddress: "Fuyuan Road, West Zone of Modern Science and Technology Park, Jiangyan District, Taizhou, Jiangsu Province",
    footerFaxLine: "Факс: 0523-88357711",
    footerPostcodeLine: "Индекс: 225500",
    copyright: "Copyright 2026 JDEC. Все права защищены."
  }
};

const xilaiArticleTranslations = {
  en: {
    caseXilaiTitle: "Chengdu Xilai 110kV HGIS Project",
    caseXilaiLead:
      "JDEC supplied 110kV HGIS equipment for key State Grid substation projects in Sichuan, supporting reliable power supply for regional load growth and grid modernization.",
    caseXilaiArticleTitle:
      "Three Stations Strengthen the Sichuan Grid: JDEC Supports New 110kV Substation Projects",
    caseXilaiArticleP1:
      "In recent years, Sichuan's economic and social development has accelerated, and power demand in Chengdu and surrounding urban clusters has continued to rise. This has placed higher requirements on grid reliability, flexibility and construction speed. With mature 110kV HGIS products, JDEC successively won bids for three new 110kV substation projects in Sichuan under the State Grid system: Xinglong, Xilai and Tongtan. JDEC supplied 9, 5 and 5 sets of HGIS equipment respectively, and all three projects were successfully commissioned between October 2024 and December 2025.",
    caseXilaiArticleH1: "Xinglong Station: 9 Sets of HGIS Support a Load Center",
    caseXilaiArticleP2:
      "The Xinglong 110kV substation project is located in one of the fastest-growing load areas around Chengdu and Luzhou, Sichuan. With the development of industrial parks, large residential communities and commercial complexes, the original substations were approaching heavy-load operation and urgently needed a new power source for load sharing. JDEC supplied 9 sets of 110kV HGIS equipment for this station.",
    caseXilaiArticleP3:
      "HGIS combines the compact footprint and high reliability of GIS with the easier maintenance characteristics of AIS, making it especially suitable for suburban substations with limited land and multiple outgoing feeders. After receiving the award notice, JDEC immediately launched a dedicated production plan. Quality witness points were set for every step, from enclosure casting and conductor processing to circuit breaker mechanical characteristic testing.",
    caseXilaiArticleP4:
      "On October 30, 2024, Xinglong Station passed acceptance by the Sichuan grid dispatching center in one attempt and was connected to the main grid. After commissioning, it shared part of the load from the original 110kV Gongyi Station, shortened the surrounding 10kV supply radius and improved voltage quality. The site team recognized the gas tightness, smooth operation and stable trial performance of JDEC HGIS equipment.",
    caseXilaiArticleH2:
      "Xilai Station: 5 Sets of HGIS Serve Rural Revitalization and Cultural Tourism",
    caseXilaiArticleP5:
      "The Xilai 110kV substation project carries a different mission. Located in the southwest of the Chengdu Plain, its supply area includes a historic town and several modern agricultural parks. With the rise of rural tourism and deep processing of agricultural products, seasonal load fluctuations became more pronounced. JDEC supplied 5 sets of 110kV HGIS with interfaces reserved for future remote transformer tap adjustment.",
    caseXilaiArticleP6:
      "The equipment was commissioned on December 26, 2025, just before the winter peak load period. The completion of Xilai Station ended the area's reliance on a single long 10kV feeder and formed a dual-source ring supply pattern. JDEC's technical service team stayed on site in low temperatures and assisted the contractor with anti-freezing checks for SF6 gas density relays.",
    caseXilaiArticleH3: "Tongtan Station: 5 Sets of HGIS Accelerate Summer Peak Readiness",
    caseXilaiArticleP7:
      "The Tongtan 110kV substation project was a race against time. The station serves growing industrial and residential power demand in the Tongtan area of Luzhou and had to be energized before the summer peak load in 2025. JDEC completed scheduling, factory testing and delivery in a compressed cycle, and worked closely with the installation team to control bay alignment, gas treatment and on-site commissioning quality.",
    caseXilaiArticleP8:
      "On June 30, 2025, Tongtan Station was successfully energized, just in time for the first high-temperature wave in early July. During the first month of operation, the station's peak load increased steadily, while key indicators such as temperature rise and partial discharge remained well within specification limits.",
    caseXilaiArticleH4:
      "Three Stations Working Together, Demonstrating JDEC's Delivery Strength for State Grid Projects",
    caseXilaiArticleP9:
      "Xinglong, Xilai and Tongtan share the same voltage level, but differ in location, load characteristics and construction pace. JDEC's ability to support supply, technical service and commissioning for all three projects demonstrates its project management capability and quality consistency as a professional high-voltage switchgear manufacturer.",
    caseXilaiArticleP10: "At the equipment level, JDEC's 110kV HGIS products offer the following advantages:",
    caseXilaiArticleL1:
      "Compact design: each bay occupies a small footprint and saves land compared with traditional AIS;",
    caseXilaiArticleL2:
      "Fully sealed structure: live parts are enclosed in metal housings, improving resistance to condensation, pollution and corrosion;",
    caseXilaiArticleL3:
      "High mechanical life: circuit breaker and disconnector mechanisms are designed for frequent operating scenarios;",
    caseXilaiArticleL4:
      "Smart interfaces: standard monitoring and control interfaces support integration into smart substation systems.",
    caseXilaiArticleP11:
      "At the service level, JDEC established a station-by-station lifecycle record system. Assembly records, factory test data and on-site handover test data for every HGIS unit are traceable, supporting long-term operation and maintenance.",
    caseXilaiArticleH5: "Outlook: Continuing to Support the Sichuan Grid",
    caseXilaiArticleP12:
      "As the Chengdu-Chongqing economic circle continues to develop, power grid investment in Sichuan will remain strong. Building on the successful operation of Xinglong, Xilai and Tongtan stations, JDEC will further improve HGIS moisture-proof technology for the humid environment of the Sichuan Basin.",
    caseXilaiArticleP13:
      "Three substations, three results. From late autumn 2024 to the end of 2025, JDEC used 110kV HGIS equipment to write a story of quality, efficiency and responsibility across Sichuan. It is one example of JDEC's broader journey serving State Grid projects."
  },
  zh: {
    caseXilaiArticleTitle: "三站联动筑川网：江苏京电电气助力四川电网110kV变电站新建工程纪实",
    caseXilaiArticleP1:
      "近年来，四川省经济社会发展持续提速，成都及周边城市群用电负荷不断攀升，对电网结构的可靠性、灵活性和建设速度提出了更高要求。江苏京电电气股份有限公司（英文简称“JDEC”）凭借成熟的110kV HGIS产品，先后中标国家电网主导下的四川地区三座110kV变电站新建工程——兴隆站、西来站、通滩站，分别提供9套、5套、5套HGIS设备，并于2024年10月至2025年12月期间全部顺利投运。三座变电站如同三颗“电力明珠”，镶嵌在蜀地电网的关键节点上，为区域经济发展注入了强劲动能。",
    caseXilaiArticleH1: "兴隆站：9套HGIS，撑起负荷中心供电脊梁",
    caseXilaiArticleP2:
      "兴隆110kV变电站新建工程位于四川省成都市和泸州市负荷增长最为迅猛的区域之一。随着多个产业园区、大型居住区及商业综合体的落地，原有变电站已接近重载运行，亟需新增电源点进行分流。京电电气为该站提供了9套110kV HGIS设备，是所有三个项目中供货数量最多、间隔配置最复杂的一个。",
    caseXilaiArticleP3:
      "HGIS（混合气体绝缘开关设备）兼顾了GIS的小型化、高可靠性与AIS的易维护性，特别适合在土地资源紧张、出线回路多的城郊变电站中应用。京电电气在接到中标通知书后，立即启动专项排产计划，从壳体铸造、导体加工到断路器机械特性调试，每一个环节均设立质量见证点。9套设备中包含了进线间隔、出线间隔、母联间隔及PT间隔等多种类型，对二次控制回路的一致性提出了较高要求。京电电气通过模块化设计和预制电缆，大幅减少了现场接线工作量。",
    caseXilaiArticleP4:
      "2024年10月30日，兴隆站一次性通过川电调度中心验收，成功并入主网。投运后，该站分担了原110kV公义站约40%的负载，周边10kV供电半径从5.8公里缩短至3.2公里，电压合格率由99.2%提升至99.7%。国网四川省电力公司物资公司现场项目经理评价：“京电电气的HGIS设备气密性优良，三工位开关操作顺畅，且在连续72小时试运行期间未出现任何告警，表现超出预期。”",
    caseXilaiArticleH2: "西来站：5套HGIS，服务乡村振兴与文旅发展",
    caseXilaiArticleP5:
      "西来110kV变电站新建工程则承载着不同的使命。该站位于成都平原西南部，供电范围内有国家级历史文化名镇及多个现代农业产业园。随着乡村旅游和农产品深加工的兴起，季节性负荷波动大，传统设备调压能力不足。京电电气针对该站特点，提供的5套110kV HGIS均配置了有载调压联动接口，便于后续主变档位远程调节。",
    caseXilaiArticleP6:
      "设备于2025年12月26日投运，正值冬季用电高峰前夕。西来站的建成结束了该区域由单一10kV长线路供电的历史，形成了双电源手拉手供电格局。尤为值得一提的是，京电电气技术服务团队在冬季低温天气下坚守现场，协助施工单位进行SF6气体密度继电器防冻检查，确保设备在零下5℃环境下仍能可靠动作。西来站投运后，当地电网故障停电时间预计每年可减少约12小时，为乡村振兴提供了“不停电”的能源保障。",
    caseXilaiArticleH3: "通滩站：5套HGIS，跑出迎峰度夏加速度",
    caseXilaiArticleP7:
      "通滩110kV变电站新建工程则是一场与时间的赛跑。该站主要为泸州通滩片区日益增长的工业及居民用电服务，要求必须在2025年夏季用电高峰前投运。京电电气从排产、出厂试验到发货仅用时45天，比常规周期压缩了20%。5套HGIS设备运抵现场后，技术人员与安装单位协同作业，将间隔对接精度控制在±0.5mm以内，气室抽真空至10Pa以下并保持24小时压降达标。",
    caseXilaiArticleP8:
      "2025年6月30日，通滩站成功送电，恰好赶上了7月初的第一波高温热浪。投运首月，该站最高负载率达到82%，设备温升、局部放电等关键指标均远低于规程限值。当地供电公司运检部表示：“通滩站的及时投运，相当于为我们增加了一台150MVA的供电能力，有效避免了今夏有序用电方案的执行。”",
    caseXilaiArticleH4: "三站合力，彰显京电电气国网供货硬实力",
    caseXilaiArticleP9:
      "兴隆、西来、通滩三座变电站，虽然电压等级相同，但地理分布不同、负荷特性不同、建设节奏不同。京电电气能够同时应对三个项目的供货、技术支持及投运保障，充分体现了其作为高压开关专业制造商的项目管理能力和质量一致性控制水平。",
    caseXilaiArticleP10: "从设备层面看，京电电气的110kV HGIS产品具有以下突出优势：",
    caseXilaiArticleL1: "紧凑化设计：单间隔宽度仅0.8米，相比传统AIS节省占地约60%；",
    caseXilaiArticleL2:
      "全密封结构：所有带电部件均封闭于不锈钢或铝合金壳体内，所有螺栓采用防腐设计，不受凝露、污秽、酸雨影响；",
    caseXilaiArticleL3: "高机械寿命：断路器及隔离开关操作机构经10000次寿命试验，满足频繁操作场景；",
    caseXilaiArticleL4: "智能化接口：标配IEC61850 GOOSE跳闸及在线监测接口，方便接入智能变电站系统。",
    caseXilaiArticleP11:
      "从服务层面看，京电电气针对国网四川物资公司的要求，建立了一站一档的全生命周期履历，每一台HGIS设备的装配记录、出厂试验数据、现场交接试验数据均实现可追溯。此外，公司还在成都设立了区域备件中心，能够保证12小时内应急备件到达现场。",
    caseXilaiArticleH5: "未来展望：持续深耕川蜀电网",
    caseXilaiArticleP12:
      "随着成渝地区双城经济圈建设的深入推进，四川省电网投资将继续保持高位。京电电气表示，将以兴隆、西来、通滩三站的成功投运为新的起点，进一步完善适合四川盆地高湿度、多凝露环境的HGIS防潮技术，同时积极探索租赁式供电、模块化应急变电站等新型服务模式，为四川电网的可靠运行贡献更多“京电智控”。",
    caseXilaiArticleP13:
      "三座变电站，三张成绩单。从2024年深秋到2025年岁末，京电电气用19套110kV HGIS设备，在巴蜀大地上写下了一部关于品质、效率与责任的故事。而这，仅仅是其服务国家电网宏大征程中的一个缩影。"
  },
  ru: {
    caseXilaiTitle: "Проект Chengdu Xilai 110 кВ HGIS",
    caseXilaiLead:
      "JDEC поставила оборудование HGIS 110 кВ для ключевых проектов подстанций State Grid в Сычуани, поддерживая надежное электроснабжение и модернизацию сети.",
    caseXilaiArticleTitle:
      "Три подстанции усиливают сеть Сычуани: JDEC поддерживает новые проекты 110 кВ",
    caseXilaiArticleP1:
      "В последние годы экономическое развитие Сычуани ускорилось, а нагрузка в Чэнду и соседних городах продолжает расти. Это повысило требования к надежности, гибкости и скорости строительства сети. Благодаря зрелым продуктам HGIS 110 кВ JDEC последовательно выиграла проекты трех новых подстанций 110 кВ в системе State Grid: Xinglong, Xilai и Tongtan. Компания поставила соответственно 9, 5 и 5 комплектов HGIS, и все три проекта были успешно введены в эксплуатацию в период с октября 2024 года по декабрь 2025 года.",
    caseXilaiArticleH1: "Станция Xinglong: 9 комплектов HGIS для центра нагрузки",
    caseXilaiArticleP2:
      "Новая подстанция Xinglong 110 кВ расположена в одном из быстрорастущих районов нагрузки вокруг Чэнду и Лучжоу. Развитие промышленных парков, жилых кварталов и коммерческих объектов требовало нового источника питания для разгрузки существующих подстанций. JDEC поставила для станции 9 комплектов HGIS 110 кВ.",
    caseXilaiArticleP3:
      "HGIS сочетает компактность и надежность GIS с удобством обслуживания AIS, что особенно подходит для пригородных подстанций с ограниченной площадью и большим количеством отходящих линий. После получения заказа JDEC запустила специальный производственный план и установила контрольные точки качества на каждом этапе.",
    caseXilaiArticleP4:
      "30 октября 2024 года станция Xinglong прошла приемку диспетчерского центра сети Сычуани с первого раза и была подключена к основной сети. После ввода она разгрузила существующую сеть, сократила радиус питания 10 кВ и повысила качество напряжения. Площадка отметила герметичность, плавную работу и стабильность оборудования JDEC HGIS.",
    caseXilaiArticleH2: "Станция Xilai: 5 комплектов HGIS для сельского развития и туризма",
    caseXilaiArticleP5:
      "Подстанция Xilai 110 кВ имеет особую задачу. Ее зона питания включает исторический поселок и современные аграрные парки. С ростом сельского туризма и переработки сельхозпродукции сезонные колебания нагрузки усилились. JDEC поставила 5 комплектов HGIS 110 кВ с интерфейсами для будущей дистанционной регулировки трансформаторов.",
    caseXilaiArticleP6:
      "Оборудование было введено в эксплуатацию 26 декабря 2025 года перед зимним пиком нагрузки. Станция Xilai завершила зависимость района от одной длинной линии 10 кВ и сформировала двухстороннюю схему питания. Сервисная команда JDEC работала на площадке в холодных условиях и помогала проверять защиту реле плотности SF6 от замерзания.",
    caseXilaiArticleH3: "Станция Tongtan: 5 комплектов HGIS к летнему пику",
    caseXilaiArticleP7:
      "Проект Tongtan 110 кВ был гонкой со временем. Станция обслуживает растущую промышленную и бытовую нагрузку района Tongtan в Лучжоу и должна была быть введена до летнего пика 2025 года. JDEC завершила производство, заводские испытания и поставку в сжатые сроки, тесно взаимодействуя с монтажной командой.",
    caseXilaiArticleP8:
      "30 июня 2025 года станция Tongtan была успешно включена, как раз перед первой волной жары в июле. В первый месяц эксплуатации нагрузка станции стабильно росла, а ключевые показатели, включая нагрев и частичные разряды, оставались в пределах нормативов.",
    caseXilaiArticleH4: "Три станции вместе демонстрируют силу поставок JDEC",
    caseXilaiArticleP9:
      "Xinglong, Xilai и Tongtan имеют один класс напряжения, но отличаются расположением, нагрузкой и графиком строительства. Возможность JDEC одновременно обеспечить поставку, техническую поддержку и ввод всех трех проектов показывает зрелое управление проектами и стабильный контроль качества.",
    caseXilaiArticleP10: "На уровне оборудования продукты HGIS 110 кВ JDEC имеют следующие преимущества:",
    caseXilaiArticleL1:
      "Компактная конструкция: один отсек занимает меньше места по сравнению с традиционным AIS;",
    caseXilaiArticleL2:
      "Полностью герметичная структура: токоведущие части закрыты в металлических корпусах, устойчивых к конденсату, загрязнениям и коррозии;",
    caseXilaiArticleL3:
      "Высокий механический ресурс: механизмы выключателей и разъединителей рассчитаны на частые операции;",
    caseXilaiArticleL4:
      "Интеллектуальные интерфейсы: стандартные интерфейсы мониторинга и управления поддерживают подключение к цифровым подстанциям.",
    caseXilaiArticleP11:
      "На уровне сервиса JDEC создала жизненный архив для каждой станции. Записи сборки, заводских испытаний и приемочных испытаний каждой единицы HGIS прослеживаются и поддерживают долгосрочную эксплуатацию.",
    caseXilaiArticleH5: "Перспектива: дальнейшая работа в сети Сычуани",
    caseXilaiArticleP12:
      "По мере развития экономического круга Чэнду-Чунцин инвестиции в сеть Сычуани будут оставаться высокими. Опираясь на успешный ввод станций Xinglong, Xilai и Tongtan, JDEC продолжит совершенствовать влагозащищенные технологии HGIS для условий Сычуаньской котловины.",
    caseXilaiArticleP13:
      "Три подстанции и три результата. С конца осени 2024 года до конца 2025 года JDEC поставила оборудование HGIS 110 кВ и продемонстрировала качество, эффективность и ответственность в проектах State Grid."
  }
};

const laosArticleTranslations = {
  en: {
    caseLaosArticleTitle:
      "Sailing the Silk Road, Powering the Lancang-Mekong: JDEC HGIS Equipment Supports Laos Grid Upgrade",
    caseLaosArticleP1:
      "As an important energy base in Southeast Asia, Laos is often known as the battery of Southeast Asia. Located in a tropical monsoon climate zone, it faces long periods of high temperature, high humidity, heavy rainfall and strong lightning, placing strict requirements on insulation, corrosion resistance and operational stability. With advanced technical capability and reliable product quality, JDEC signed with Electricite du Laos on February 1, 2023. For the Laos 110kV substation project, JDEC supplied 7 bays of 145kV HGIS equipment, bringing strong environmental adaptability and reliability to the upgrade of the Laos national grid and regional economic development.",
    caseLaosArticleH1:
      "Deepening Belt and Road Cooperation and Building a Strong Lancang-Mekong Power Foundation",
    caseLaosArticleP2:
      "The Laos 110kV substation project is a key project for improving the local grid structure, safeguarding residential power supply and supporting renewable energy delivery. JDEC worked closely with Electricite du Laos, using core HGIS equipment to build efficient and stable modern substation infrastructure.",
    caseLaosArticleP3:
      "Because the project is located in a tropical region with long rainy seasons, high humidity and frequent thunderstorms, JDEC carried out dedicated technical optimization for the site conditions:",
    caseLaosArticleL1:
      "For tropical high-humidity corrosion resistance: the equipment enclosure uses high-standard anti-corrosion coating with aging-resistant and UV-resistant sealing materials to prevent rust and leakage in long-term humid and high-UV environments.",
    caseLaosArticleL2:
      "For dense lightning activity: JDEC optimized the external insulation design and surge arrester configuration of the 145kV HGIS equipment, improving lightning impulse margin and protecting grid safety in hot and humid seasons.",
    caseLaosArticleL3:
      "Customized delivery management: during the project, the international business lead Kevin closely coordinated factory tests and cross-border logistics to ensure high-standard delivery in complete condition.",
    caseLaosArticleH2: "Strong Technology for Tropical Rainforest Conditions",
    caseLaosArticleP4:
      "From the cold and sandy Pamir Plateau to the hot and humid Lancang-Mekong region, JDEC's HGIS products adapt to Laos' extreme tropical conditions through targeted cross-regional technical improvements:",
    caseLaosArticleL4:
      "High temperature and humidity resistance: enclosure and key mechanism boxes reach IP67 protection level, with anti-condensation and intelligent temperature-control systems for reliable operation in tropical heat and humidity.",
    caseLaosArticleL5:
      "Lightning and surge resistance: external insulation and creepage distance are calibrated for high-lightning and heavy-pollution conditions, improving stability under severe convective weather.",
    caseLaosArticleL6:
      "IEC standard compatibility: products are designed and manufactured according to IEC standards and meet Laos grid technical requirements.",
    caseLaosArticleL7:
      "Modular quick connection: factory pre-assembly, modular transport and fast on-site connection shorten overseas construction time during the rainy season and reduce secondary contamination.",
    caseLaosArticleL8:
      "Lifecycle service support: JDEC provides dedicated overseas technical support, remote monitoring and fast engineer response for full-lifecycle operation and maintenance.",
    caseLaosArticleH3: "Expanding International Markets and Supporting Green Power Systems",
    caseLaosArticleP5:
      "With deeper China-Laos cooperation and the implementation of Belt and Road energy projects, demand for grid upgrading and clean-energy interconnection in Southeast Asia continues to grow.",
    caseLaosArticleP6:
      "JDEC will use the successful delivery of the Laos 110kV substation project as an international benchmark, continue optimizing GIS and HGIS products for different extreme environments worldwide, and contribute JDEC strength to high-quality global power system development."
  },
  zh: {
    caseLaosArticleTitle:
      "丝路扬帆“电”动澜湄：江苏京电电气高品质HGIS设备助力老挝国家电网升级建设",
    caseLaosArticleP1:
      "老挝作为东南亚的重要能源基地，素有“东南亚蓄电池”之称。然而，其地处热带季风气候区，长期面临高温、高湿、多雨及强雷电等极端环境，这对电力设备的绝缘、防腐及运行稳定性提出了严苛考验。江苏京电电气股份有限公司（JDEC）凭借先进的技术实力与卓越的产品品质，于2023年2月1日成功签约老挝国家电力公司（Laoselectricityutility）。公司为老挝110kV变电站项目（Laos110kVsubstation）累计提供145kVHGIS设备7间隔，以优异的环境适应性与高可靠性，为老挝国家电网升级与区域经济发展注入了强劲动能。",
    caseLaosArticleH1: "深化“一带一路”合作，筑牢澜湄坚强电力根基",
    caseLaosArticleP2:
      "老挝110kV变电站项目是老挝改善本土电网结构、保障民生用电及推进新能源送出的重点工程。京电电气与老挝国家电力公司深度协作，以核心HGIS设备为纽带，共同打造高效、稳定的现代化变电基础设施。",
    caseLaosArticleP3:
      "由于项目地处热带，常年伴随高温湿热以及漫长的雨季，高密度的雷暴活动极易对电力设备造成冲击。京电电气针对该项目的特定工况进行了专项技术优化：",
    caseLaosArticleL1:
      "针对热带高湿防腐工况：设备壳体表面采用高标准防腐涂装工艺，配合耐老化、抗紫外线的优质密封材料，确保设备在长期高湿度、强紫外线环境下不发生锈蚀与渗漏。",
    caseLaosArticleL2:
      "针对高密度雷暴环境：进一步优化了145kVHGIS设备的外绝缘设计与避雷器配置，大幅提升了设备抗雷电冲击的裕度，全天候保障高温高湿季节的电网安全。",
    caseLaosArticleL3:
      "深度定制化交付管理：在项目推进过程中，由国际业务负责人Kevin密切对接，严格把控出厂前试验与跨国物流环节，确保高标准、全状态的设备完美交付。",
    caseLaosArticleH2: "硬核技术护航：铸就热带雨林环境核心竞争力",
    caseLaosArticleP4:
      "从帕米尔高原的极寒风沙，到东南亚澜湄流域的湿热雨林，京电电气的HGIS产品凭借跨区域的针对性技术突破，完美适配老挝的极端热带工况：",
    caseLaosArticleL4:
      "耐高温高湿：壳体及关键机构箱防护等级达到IP67标准，加装高效防凝露与智能温控系统，确保在热带极端高温与潮湿环境下设备依然能可靠分合闸。",
    caseLaosArticleL5:
      "强防雷抗浪涌：外绝缘性能及爬电距离按高雷暴、重污秽等级进行校正，绝缘性能高度稳定，有效应对东南亚强对流天气下的复杂雷击风险。",
    caseLaosArticleL6:
      "IEC标准兼容：产品严格按照国际电工委员会标准设计制造，满足老挝电网的技术规范要求。",
    caseLaosArticleL7:
      "模块化现场快接：延续公司成熟的“厂内预装、模块运输、现场快接”模式，最大限度缩短了海外现场在雨季的施工周期，减少现场作业的二次污染，确保项目一次通过。",
    caseLaosArticleL8:
      "全周期服务保障：公司设立专属的海外技术支持保障机制，通过智能化远程监测与资深工程师的高效响应，为海外客户提供全生命周期的全天候运维支持。",
    caseLaosArticleH3: "深耕国际市场：助力全球绿色新型电力系统建设",
    caseLaosArticleP5:
      "伴随中老命运共同体建设的深入推进以及“一带一路”能源战略的落地，东南亚区域的电网升级与清洁能源互联建设需求旺盛。",
    caseLaosArticleP6:
      "江苏京电电气股份有限公司（JDEC）将以老挝110kV变电站项目的成功交付为国际化标杆，持续优化适配全球不同极端环境的GIS与HGIS系列产品。未来，公司将继续深耕数字化监测、智能运维等前沿技术，以高端电力装备扎根国际舞台，持续点亮“一带一路”沿线的万家灯火，为全球新型电力系统的高质量发展贡献“京电力量”。"
  },
  ru: {
    caseLaosArticleTitle:
      "Шелковый путь и энергия Ланцанг-Меконга: HGIS JDEC поддерживает модернизацию сети Лаоса",
    caseLaosArticleP1:
      "Лаос является важной энергетической базой Юго-Восточной Азии и часто называется батареей региона. Тропический муссонный климат с высокой температурой, влажностью, дождями и сильными грозами предъявляет строгие требования к изоляции, антикоррозионной защите и стабильности работы оборудования. 1 февраля 2023 года JDEC подписала контракт с Electricite du Laos и поставила 7 ячеек оборудования HGIS 145 кВ для проекта подстанции 110 кВ в Лаосе.",
    caseLaosArticleH1:
      "Углубление сотрудничества Belt and Road и укрепление энергосистемы Ланцанг-Меконга",
    caseLaosArticleP2:
      "Проект подстанции 110 кВ в Лаосе является важным проектом для улучшения структуры местной сети, обеспечения бытового электроснабжения и вывода возобновляемой энергии. JDEC совместно с Electricite du Laos создала современную, эффективную и стабильную подстанционную инфраструктуру.",
    caseLaosArticleP3:
      "С учетом тропических условий, длительного сезона дождей и частых гроз JDEC выполнила специальные технические улучшения:",
    caseLaosArticleL1:
      "Защита от коррозии во влажном тропическом климате: корпуса имеют высококачественное антикоррозионное покрытие и долговечные УФ-стойкие уплотнения.",
    caseLaosArticleL2:
      "Защита от сильных гроз: оптимизированы внешняя изоляция и конфигурация ограничителей перенапряжений для повышения запаса по грозовому импульсу.",
    caseLaosArticleL3:
      "Индивидуальное управление поставкой: заводские испытания и международная логистика контролировались для полной и качественной поставки.",
    caseLaosArticleH2: "Надежные технологии для тропических условий",
    caseLaosArticleP4:
      "От холодных районов Памира до влажных тропиков Лаоса продукты HGIS JDEC адаптируются к разным экстремальным условиям благодаря целевым техническим решениям:",
    caseLaosArticleL4:
      "Устойчивость к жаре и влажности: корпуса и механизмы имеют уровень защиты IP67, системы против конденсации и интеллектуальный контроль температуры.",
    caseLaosArticleL5:
      "Стойкость к молниям и перенапряжениям: изоляция и путь утечки рассчитаны для грозовых и загрязненных условий.",
    caseLaosArticleL6:
      "Совместимость с IEC: оборудование проектируется и производится по международным стандартам IEC и соответствует требованиям сети Лаоса.",
    caseLaosArticleL7:
      "Модульное быстрое подключение: заводская предварительная сборка, модульная транспортировка и быстрый монтаж сокращают сроки работ в сезон дождей.",
    caseLaosArticleL8:
      "Поддержка полного жизненного цикла: удаленный мониторинг и оперативная реакция инженеров обеспечивают эксплуатационную поддержку зарубежных клиентов.",
    caseLaosArticleH3: "Развитие международного рынка и поддержка зеленых энергосистем",
    caseLaosArticleP5:
      "По мере углубления сотрудничества Китая и Лаоса спрос на модернизацию сетей и интеграцию чистой энергии в Юго-Восточной Азии продолжает расти.",
    caseLaosArticleP6:
      "JDEC будет использовать успешную поставку проекта в Лаосе как международный ориентир, продолжая оптимизировать GIS и HGIS для различных экстремальных условий и вносить вклад в развитие современных энергосистем."
  }
};

Object.assign(translations.en, xilaiArticleTranslations.en, laosArticleTranslations.en);
Object.assign(translations.zh, xilaiArticleTranslations.zh, laosArticleTranslations.zh);
Object.assign(translations.ru, xilaiArticleTranslations.ru, laosArticleTranslations.ru);

const validCaseIds = new Set(Array.from(casePanels).map((panel) => panel.id));

const activateCase = (id) => {
  const targetId = validCaseIds.has(id) ? id : "case-xilai";

  caseTabs.forEach((tab) => {
    const active = tab.dataset.caseTab === targetId;
    tab.classList.toggle("is-active", active);
    tab.toggleAttribute("aria-current", active);
  });

  casePanels.forEach((panel) => {
    panel.classList.toggle("is-active", panel.id === targetId);
  });
};

const applyLanguage = (lang) => {
  const dictionary = translations[lang] || translations.en;
  document.documentElement.lang = lang === "zh" ? "zh-CN" : lang;
  document.title = dictionary.pageTitle;
  document.querySelector('meta[name="description"]')?.setAttribute("content", dictionary.metaDescription);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  languageButtons.forEach((button) => {
    const active = button.dataset.lang === lang;
    button.classList.toggle("is-active", active);
    button.toggleAttribute("aria-current", active);
  });

  localStorage.setItem("jdec-language", lang);
};

menuToggle?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

caseTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    activateCase(tab.dataset.caseTab);
  });
});

window.addEventListener("hashchange", () => {
  activateCase(window.location.hash.slice(1));
});

const savedLanguage = localStorage.getItem("jdec-language") || "en";
applyLanguage(savedLanguage);
activateCase(window.location.hash.slice(1));
