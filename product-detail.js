const productData = {
  "33kv-gis-hgis": {
    en: {
      title: "33kV GIS/HGIS",
      subtitle: "Compact gas-insulated switchgear solutions for distribution and substation projects.",
      overview: "This product series is designed for 33kV power distribution and substation applications, supporting compact layouts, stable operation, and flexible project configuration.",
      voltage: "33kV",
      type: "GIS / HGIS",
      application: "Distribution substations, industrial power systems, and renewable energy projects."
    },
    zh: {
      title: "33kV GIS/HGIS",
      subtitle: "面向配电及变电项目的紧凑型气体绝缘开关设备解决方案。",
      overview: "该系列产品适用于 33kV 配电及变电应用，支持紧凑布置、稳定运行和灵活项目配置。",
      voltage: "33kV",
      type: "GIS / HGIS",
      application: "配电变电站、工业供电系统及新能源项目。"
    },
    ru: {
      title: "33kV GIS/HGIS",
      subtitle: "Компактные решения с газовой изоляцией для распределительных и подстанционных проектов.",
      overview: "Серия предназначена для систем распределения и подстанций 33 кВ, обеспечивая компактную компоновку, стабильную работу и гибкую конфигурацию проекта.",
      voltage: "33 кВ",
      type: "GIS / HGIS",
      application: "Распределительные подстанции, промышленные энергосистемы и проекты ВИЭ."
    }
  },
  "66-126kv-gis": {
    en: {
      title: "66/126kV GIS",
      subtitle: "Reliable GIS equipment for medium and high-voltage grid projects.",
      overview: "The 66/126kV GIS series supports grid substations and utility projects requiring reliable insulation performance, controlled manufacturing quality, and convenient installation.",
      voltage: "66/126kV",
      type: "GIS",
      application: "Power grid substations, utility projects, and infrastructure power supply."
    },
    zh: {
      title: "66/126kV GIS",
      subtitle: "适用于中高压电网项目的可靠 GIS 设备。",
      overview: "66/126kV GIS 系列适用于电网变电站及公用事业项目，满足可靠绝缘性能、受控制造质量和便捷安装要求。",
      voltage: "66/126kV",
      type: "GIS",
      application: "电网变电站、公用事业工程及基础设施供电。"
    },
    ru: {
      title: "66/126kV GIS",
      subtitle: "Надежное оборудование GIS для сетевых проектов среднего и высокого напряжения.",
      overview: "Серия 66/126 кВ GIS предназначена для сетевых подстанций и коммунальных проектов, где важны надежная изоляция, контролируемое качество производства и удобный монтаж.",
      voltage: "66/126 кВ",
      type: "GIS",
      application: "Сетевые подстанции, коммунальные проекты и энергоснабжение инфраструктуры."
    }
  },
  "145kv-hgis": {
    en: {
      title: "145kV HGIS",
      subtitle: "Hybrid gas-insulated switchgear with compact layout and stable operation.",
      overview: "The 145kV HGIS series combines compact equipment arrangement with dependable high-voltage performance, supporting projects where space efficiency and operational reliability are both important.",
      voltage: "145kV",
      type: "HGIS",
      application: "Transmission substations, overseas grid projects, and retrofit applications."
    },
    zh: {
      title: "145kV HGIS",
      subtitle: "兼具紧凑布局与稳定运行的混合式气体绝缘开关设备。",
      overview: "145kV HGIS 系列兼顾紧凑设备布置和可靠高压性能，适用于对空间效率和运行可靠性均有要求的项目。",
      voltage: "145kV",
      type: "HGIS",
      application: "输电变电站、海外电网项目及改造工程。"
    },
    ru: {
      title: "145kV HGIS",
      subtitle: "Гибридное газоизолированное оборудование с компактной компоновкой и стабильной работой.",
      overview: "Серия 145 кВ HGIS сочетает компактную компоновку и надежные высоковольтные характеристики для проектов, где важны экономия пространства и эксплуатационная надежность.",
      voltage: "145 кВ",
      type: "HGIS",
      application: "Передающие подстанции, зарубежные сетевые проекты и модернизация объектов."
    }
  },
  "245kv-gis": {
    en: {
      title: "245kV GIS",
      subtitle: "High-voltage GIS equipment for transmission and substation engineering.",
      overview: "The 245kV GIS series is built for demanding transmission and substation projects, with emphasis on insulation reliability, production testing, and long-term service performance.",
      voltage: "245kV",
      type: "GIS",
      application: "High-voltage transmission substations and key infrastructure projects."
    },
    zh: {
      title: "245kV GIS",
      subtitle: "面向输电及变电工程的高压 GIS 设备。",
      overview: "245kV GIS 系列面向高要求输电及变电工程，重点保障绝缘可靠性、生产测试和长期运行性能。",
      voltage: "245kV",
      type: "GIS",
      application: "高压输电变电站及重点基础设施项目。"
    },
    ru: {
      title: "245kV GIS",
      subtitle: "Высоковольтное оборудование GIS для передачи электроэнергии и подстанционного строительства.",
      overview: "Серия 245 кВ GIS разработана для сложных проектов передачи и подстанций с акцентом на надежность изоляции, производственные испытания и длительный срок службы.",
      voltage: "245 кВ",
      type: "GIS",
      application: "Высоковольтные передающие подстанции и ключевые инфраструктурные проекты."
    }
  }
};

const uiText = {
  en: {
    navHome: "Home",
    navProducts: "Products",
    navCases: "Customer Cases",
    navDomesticCases: "Domestic Projects",
    navOverseasCases: "Overseas Projects",
    navInquiry: "Inquiry",
    details: "Product Details",
    overview: "Overview",
    features: "Key Features",
    featureOneTitle: "Project-Oriented Design",
    featureOneText: "Configured around project voltage class, installation environment, and engineering requirements.",
    featureTwoTitle: "Quality Control",
    featureTwoText: "Manufacturing, inspection, and testing processes are managed under strict quality procedures.",
    featureThreeTitle: "Installation Support",
    featureThreeText: "Technical service can support delivery, site installation, commissioning, and after-sales coordination.",
    featureFourTitle: "Custom Components",
    featureFourText: "Customized GIS components and accessories can be supplied according to project needs.",
    specifications: "Typical Specifications",
    voltage: "Voltage Class",
    type: "Product Type",
    application: "Typical Application",
    contact: "Send Inquiry",
    back: "Back to Products",
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
    navHome: "首页",
    navProducts: "产品展示",
    navCases: "客户案例",
    navDomesticCases: "国内项目",
    navOverseasCases: "国外项目",
    navInquiry: "询单",
    details: "产品详情",
    overview: "产品概述",
    features: "核心特点",
    featureOneTitle: "面向项目设计",
    featureOneText: "可结合项目电压等级、安装环境和工程要求进行配置。",
    featureTwoTitle: "质量控制",
    featureTwoText: "制造、检验和测试流程均按照严格质量程序管理。",
    featureThreeTitle: "安装支持",
    featureThreeText: "技术服务可支持交付、现场安装、调试及售后协调。",
    featureFourTitle: "定制部件",
    featureFourText: "可根据项目需求提供定制化 GIS 元件及附件。",
    specifications: "典型规格",
    voltage: "电压等级",
    type: "产品类型",
    application: "典型应用",
    contact: "发送询单",
    back: "返回产品中心",
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
    navHome: "Главная",
    navProducts: "Продукция",
    navCases: "Проекты",
    navDomesticCases: "Проекты в Китае",
    navOverseasCases: "Зарубежные проекты",
    navInquiry: "Запрос",
    details: "Описание продукта",
    overview: "Обзор",
    features: "Ключевые особенности",
    featureOneTitle: "Проектная конфигурация",
    featureOneText: "Конфигурация подбирается с учетом класса напряжения, условий монтажа и требований проекта.",
    featureTwoTitle: "Контроль качества",
    featureTwoText: "Производство, инспекция и испытания выполняются в рамках строгих процедур качества.",
    featureThreeTitle: "Монтажная поддержка",
    featureThreeText: "Техническая служба поддерживает поставку, монтаж, пусконаладку и послепродажную координацию.",
    featureFourTitle: "Индивидуальные компоненты",
    featureFourText: "Компоненты и аксессуары GIS могут поставляться под требования проекта.",
    specifications: "Типовые характеристики",
    voltage: "Класс напряжения",
    type: "Тип продукта",
    application: "Типовое применение",
    contact: "Отправить запрос",
    back: "Назад к продукции",
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

const currentProduct = document.body.dataset.product;
const languageButtons = document.querySelectorAll(".language-switcher button");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

function setText(selector, text) {
  document.querySelectorAll(selector).forEach((element) => {
    element.textContent = text;
  });
}

function applyProductLanguage(language) {
  const product = productData[currentProduct][language] || productData[currentProduct].en;
  const ui = uiText[language] || uiText.en;
  document.documentElement.lang = language === "zh" ? "zh-CN" : language;
  document.title = `${product.title} | JDEC`;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (ui[key]) element.textContent = ui[key];
  });

  setText("[data-product-title]", product.title);
  setText("[data-product-subtitle]", product.subtitle);
  setText("[data-product-overview]", product.overview);
  setText("[data-product-voltage]", product.voltage);
  setText("[data-product-type]", product.type);
  setText("[data-product-application]", product.application);

  languageButtons.forEach((button) => {
    const active = button.dataset.lang === language;
    button.classList.toggle("is-active", active);
    if (active) button.setAttribute("aria-current", "true");
    else button.removeAttribute("aria-current");
  });
}

menuToggle?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => applyProductLanguage(button.dataset.lang));
});

applyProductLanguage("en");
