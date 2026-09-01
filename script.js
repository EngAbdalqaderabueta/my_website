(() => {
  'use strict';

  const primaryEmail = 'aboodxxxc@gmail.com';
  const secondaryEmail = 'biomechatech4@gmail.com';
  const whatsapp = 'https://wa.me/972594639999';
  const domain = 'https://eng-abdalqader-abueta.com/';
  const sectionIds = ['home', 'about', 'projects', 'skills', 'contact'];
  const links = {
    Facebook: 'https://www.facebook.com/share/1N1uMDuUpX/',
    Behance: 'https://www.behance.net/abdalqaabueta',
    GitHub: 'https://github.com/EngAbdalqaderabueta',
    LinkedIn: 'https://www.linkedin.com/in/abdalqader-h-abueta-71a189360?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    Instagram: 'https://www.instagram.com/eng_abdalqader4?igsh=cDdiaG9kNXE0cXZ4',
    WhatsApp: whatsapp,
    Email: `mailto:${primaryEmail}`
  };

  const projectInfo = {
    irrigation: {
      icon: 'droplets', kicker: 'Embedded • RTOS', title: 'Smart Irrigation System',
      text: 'An STM32-based irrigation controller designed around real sensor input, pump safety, manual watering, status monitoring and clear fault handling. The system architecture uses FreeRTOS concepts, queues, event flags, OLED feedback and UART reporting.',
      tags: ['STM32', 'FreeRTOS', 'Sensors', 'OLED / UART', 'Proteus']
    },
    rehab: {
      icon: 'hand-metal', kicker: 'Biomedical • Mechanical', title: 'Rehabilitation Assist Device',
      text: 'A modular rehabilitation concept that combines practical mechanical design with EMG and FSR sensing. The approach focuses on safety, comfort, interchangeable modules and realistic implementation paths for assisted hand movement.',
      tags: ['SolidWorks', 'EMG', 'FSR', 'Assistive Tech', 'Mechanisms']
    },
    flutter: {
      icon: 'smartphone', kicker: 'Mobile • Flutter', title: 'Sway — Smart Experience App',
      text: 'A Flutter/Dart application workflow developed from UX/UI design toward a functional mobile experience, with brand-focused visual design, structured screens and attention to real user interaction.',
      tags: ['Flutter', 'Dart', 'UX/UI', 'Mobile Development']
    },
    swayApp: {
      icon: 'sparkles', kicker: 'Flutter • Portfolio App', title: 'Sway 7 Portfolio Edition',
      text: 'Sway 7 is the portfolio culmination of the Sway journey: a bilingual Arabic-English cinematic creator app with immersive onboarding, local-first media workflows, real MP4 rendering, creator/community foundations, Firebase-ready cloud architecture and a complete in-app product story.',
      tags: ['Flutter', 'Dart', 'Android / iOS', 'Sway 7', 'MP4 Render', 'Firebase-ready'],
      actions: [{ label: 'Open GitHub Portfolio', href: 'https://github.com/EngAbdalqaderabueta', icon: 'github' }]
    },
    exoskeleton: {
      icon: 'accessibility', kicker: 'Biomedical • Mechatronics', title: 'Modular Rehabilitation Exoskeleton',
      text: 'A comprehensive research-prototype package combining mechanical architecture, sensors, motor control, STM32 firmware, safety logic, electrical documentation, BOM planning and engineering case-study material. It is presented as an engineering research prototype, not as a certified medical device.',
      tags: ['STM32G474RE', 'Biomechanics', 'Motor Control', 'Sensors', 'Safety', 'SolidWorks'],
      actions: [{ label: 'Open GitHub Portfolio', href: 'https://github.com/EngAbdalqaderabueta', icon: 'github' }]
    },
    biomechCode: {
      icon: 'braces', kicker: 'Flutter • Education', title: 'BioMechTech Code 2.5',
      text: 'An offline bilingual Flutter/Dart programming reference organized around engineering specialties. Version 2.5 contains 19 languages/technologies, 10 specialties, 30 branches, 476 lessons, 762 code examples, search and an educational offline code lab.',
      tags: ['Flutter', 'Dart', 'Offline', '19 Technologies', '476 Lessons', '762 Examples'],
      actions: [{ label: 'Open GitHub Portfolio', href: 'https://github.com/EngAbdalqaderabueta', icon: 'github' }]
    },
    simulinker: {
      icon: 'box', kicker: 'Mobile CAD • Flutter', title: 'SimuLinker 3.5',
      text: 'A mobile-first parametric mechanical CAD workspace designed around touch. It includes a CAD workspace, project persistence, radial context tools, two-finger navigation, three-finger section gestures, workshop mode and Arabic/English support.',
      tags: ['Flutter', 'Mobile CAD', 'Parametric Design', 'Motion Study', 'AR / EN'],
      actions: [{ label: 'Open GitHub Portfolio', href: 'https://github.com/EngAbdalqaderabueta', icon: 'github' }]
    },
    carDiagnostic: {
      icon: 'car-front', kicker: 'Automotive • Flutter', title: 'Car Diagnostic 1.1',
      text: 'An offline automotive diagnostic portfolio app built with Flutter. Version 1.1 includes a dashboard, guided diagnosis, searchable and filterable fault library, shared fault-detail content, 28 brands, 196 models and 29 fault codes, with Android and Web delivery paths.',
      tags: ['Flutter', 'Offline', '28 Brands', '196 Models', '29 Fault Codes'],
      actions: [{ label: 'Open GitHub Portfolio', href: 'https://github.com/EngAbdalqaderabueta', icon: 'github' }]
    },
    engineersWeapon: {
      icon: 'hard-hat', kicker: 'Engineering Platform • Flutter', title: "Engineer's Weapon 1.1",
      text: 'A modular mobile engineering-platform concept that brings dedicated workspaces for mechanical CAD, electronics simulation, instrumentation, coding and numerical analysis into one expandable Flutter application designed for phone interaction.',
      tags: ['Flutter', 'Engineering Platform', 'Modular Architecture', 'AR / EN', 'Portfolio Edition'],
      actions: [{ label: 'Open GitHub Portfolio', href: 'https://github.com/EngAbdalqaderabueta', icon: 'github' }]
    },
    iot: {
      icon: 'cpu', kicker: 'ESP32 • IoT Firmware', title: 'Industrial ESP32 IoT Firmware',
      text: 'A layered ESP32/ESP-IDF firmware architecture built around signal processing, alarms, durable records, local journal storage, recovery logic, queues and a clean boundary for MQTT/AWS cloud transport.',
      tags: ['ESP32', 'ESP-IDF', 'FreeRTOS', 'Storage', 'MQTT', 'AWS IoT']
    },
    cad: {
      icon: 'box', kicker: 'CAD • Product Design', title: 'Mechanism Design',
      text: 'Engineering models and machine concepts built in SolidWorks with assemblies, moving parts and implementation-minded layouts. The goal is always a design that can be inspected, refined and physically built.',
      tags: ['SolidWorks', 'AutoCAD', 'Assemblies', 'DFM Thinking']
    },
    ai: {
      icon: 'scan-line', kicker: 'AI • Intelligent Systems', title: 'Intelligent Control',
      text: 'Exploring AI-assisted decisions and connected sensing for systems that should react clearly to the physical world. This direction combines data, automation and embedded control into usable engineering products.',
      tags: ['AI / IoT', 'Python', 'MATLAB', 'Automation']
    },

    hvacGuide: {
      icon: 'fan', kicker: 'HVAC • Flutter', title: 'HVAC Guide 2.0',
      text: 'A bilingual training and drafting application that turns a short building description into a structured HVAC starter schedule and AutoCAD workflow. It includes 20 source-based exercises, deterministic local smart chat, preliminary duct sizing, layer/tag guidance and a 100-point QC rubric.',
      tags: ['Flutter', 'HVAC', 'ASHRAE-based', '20 Exercises', 'AutoCAD Guide'],
      actions: [{ label: 'Open GitHub Portfolio', href: 'https://github.com/EngAbdalqaderabueta', icon: 'github' }]
    },
    engStandard: {
      icon: 'book-open-check', kicker: 'Standards • Flutter', title: 'EngStandard 2.0',
      text: 'A bilingual beginner-first standards navigator for mechanical, electrical and mechatronics engineering. Version 2 provides 85 selectable scopes, scope-aware EngAI Local, 45 standards reference records and 210 bilingual offline knowledge cards.',
      tags: ['Flutter', 'Standards', '85 Scopes', '45 References', '210 Knowledge Cards'],
      actions: [{ label: 'Open GitHub Portfolio', href: 'https://github.com/EngAbdalqaderabueta', icon: 'github' }]
    }
  };


  const projectInfoAr = {
    irrigation: {
      kicker: 'أنظمة مدمجة • RTOS', title: 'نظام ري ذكي',
      text: 'وحدة تحكم للري مبنية على STM32، تتعامل مع قراءات الحساسات وتشغيل المضخة بأمان، مع وضع يدوي، حالات خطأ واضحة، عرض OLED وتقارير UART. الفكرة ليست تجربة فقط؛ بل بنية نظام قابلة للتطوير والاختبار.',
      tags: ['STM32', 'FreeRTOS', 'حساسات', 'OLED / UART', 'Proteus']
    },
    rehab: {
      kicker: 'طبي حيوي • ميكانيكا', title: 'مساعد إعادة تأهيل لليد',
      text: 'تصور عملي لجهاز مساعد قابل للتبديل، يدمج التصميم الميكانيكي مع إشارات EMG و FSR. التركيز هنا على الراحة، السلامة، سهولة التركيب، وإمكانية تحويل الفكرة إلى نموذج واقعي.',
      tags: ['SolidWorks', 'EMG', 'FSR', 'تقنيات مساعدة', 'آليات حركة']
    },
    flutter: {
      kicker: 'تطبيقات • Flutter', title: 'Sway - تجربة ذكية',
      text: 'مسار تطبيق Flutter/Dart بدأ من هوية وتصميم UX/UI ثم تحول إلى تجربة تفاعلية واضحة، بشاشات منظمة واهتمام بطريقة استخدام حقيقية لا مجرد واجهات جميلة.',
      tags: ['Flutter', 'Dart', 'UX/UI', 'تطبيقات موبايل']
    },
    swayApp: {
      kicker: 'Flutter • نسخة معرض', title: 'Sway 7 Portfolio Edition',
      text: 'Sway 7 هو خلاصة رحلة المشروع: تطبيق إبداعي سينمائي عربي/إنجليزي مع Onboarding غامر، مسارات وسائط Local-first، رندر MP4 فعلي، أسس للمبدعين والمجتمع، بنية مهيأة لـFirebase وقصة المنتج كاملة داخل التطبيق.',
      tags: ['Flutter', 'Dart', 'Android / iOS', 'Sway 7', 'رندر MP4', 'Firebase-ready'],
      actions: [{ label: 'Open GitHub Portfolio', href: 'https://github.com/EngAbdalqaderabueta', icon: 'github' }]
    },
    exoskeleton: {
      kicker: 'طبي حيوي • ميكاترونكس', title: 'هيكل خارجي معياري لإعادة التأهيل',
      text: 'حزمة نموذج بحثي هندسي شاملة تجمع البنية الميكانيكية والحساسات والتحكم بالمحركات وFirmware على STM32 ومنطق الأمان والتوثيق الكهربائي وخطة BOM ودراسة الحالة. يعرض كنموذج بحثي هندسي وليس كجهاز طبي معتمد.',
      tags: ['STM32G474RE', 'Biomechanics', 'تحكم محركات', 'حساسات', 'أمان', 'SolidWorks'],
      actions: [{ label: 'Open GitHub Portfolio', href: 'https://github.com/EngAbdalqaderabueta', icon: 'github' }]
    },
    biomechCode: {
      kicker: 'Flutter • تعليم', title: 'BioMechTech Code 2.5',
      text: 'مرجع برمجي Flutter/Dart ثنائي اللغة يعمل دون إنترنت وموجه للتخصصات الهندسية. النسخة 2.5 تحتوي 19 لغة وتقنية و10 تخصصات و30 فرعاً و476 درساً و762 مثال كود مع بحث ومختبر أكواد تعليمي Offline.',
      tags: ['Flutter', 'Dart', 'Offline', '19 تقنية', '476 درس', '762 مثال'],
      actions: [{ label: 'Open GitHub Portfolio', href: 'https://github.com/EngAbdalqaderabueta', icon: 'github' }]
    },
    simulinker: {
      kicker: 'Mobile CAD • Flutter', title: 'SimuLinker 3.5',
      text: 'مساحة CAD ميكانيكية بارامترية موجهة للجوال واللمس، مع Workspace للرسم، حفظ المشاريع، قوائم دائرية، تحكم بإصبعين، قطاع بثلاثة أصابع، وضع ورشة ودعم العربية والإنجليزية.',
      tags: ['Flutter', 'Mobile CAD', 'تصميم بارامتري', 'Motion Study', 'AR / EN'],
      actions: [{ label: 'Open GitHub Portfolio', href: 'https://github.com/EngAbdalqaderabueta', icon: 'github' }]
    },
    carDiagnostic: {
      kicker: 'سيارات • Flutter', title: 'Car Diagnostic 1.1',
      text: 'تطبيق تشخيص سيارات Offline مبني بـFlutter. النسخة 1.1 تضم Dashboard وتشخيصًا موجهًا ومكتبة أعطال قابلة للبحث والفلترة ومحتوى تفاصيل موحد، مع 28 شركة و196 طرازًا و29 رمز عطل وجاهزية Android وWeb.',
      tags: ['Flutter', 'Offline', '28 شركة', '196 طراز', '29 رمز عطل'],
      actions: [{ label: 'Open GitHub Portfolio', href: 'https://github.com/EngAbdalqaderabueta', icon: 'github' }]
    },
    engineersWeapon: {
      kicker: 'منصة هندسية • Flutter', title: "Engineer's Weapon 1.1",
      text: 'مفهوم منصة هندسية معيارية للجوال تجمع مساحات مخصصة لـCAD والإلكترونيات والقياس والبرمجة والتحليل العددي داخل تطبيق Flutter واحد قابل للتوسع ومصمم لتجربة لمس مناسبة للهاتف.',
      tags: ['Flutter', 'منصة هندسية', 'بنية معيارية', 'AR / EN', 'نسخة معرض'],
      actions: [{ label: 'Open GitHub Portfolio', href: 'https://github.com/EngAbdalqaderabueta', icon: 'github' }]
    },
    iot: {
      kicker: 'ESP32 • IoT Firmware', title: 'Industrial ESP32 IoT Firmware',
      text: 'بنية Firmware طبقية على ESP32/ESP-IDF لمعالجة الإشارات والإنذارات والسجلات الدائمة والتخزين المحلي بنمط Journal والاستعادة والـQueues، مع حد واضح للانتقال إلى MQTT وAWS IoT.',
      tags: ['ESP32', 'ESP-IDF', 'FreeRTOS', 'Storage', 'MQTT', 'AWS IoT']
    },
    cad: {
      kicker: 'CAD • تصميم منتج', title: 'تصميم آليات وميكانيزمات',
      text: 'نماذج هندسية ومفاهيم ميكانيكية على SolidWorks، مبنية حول التجميع والحركة وقابلية التصنيع. الهدف أن يكون التصميم مفهوماً، قابلاً للمراجعة، وقريباً من التنفيذ.',
      tags: ['SolidWorks', 'AutoCAD', 'تجميعات', 'تصميم قابل للتنفيذ']
    },
    ai: {
      kicker: 'ذكاء اصطناعي • أنظمة ذكية', title: 'تحكم ذكي مبني على البيانات',
      text: 'تجارب في تحويل قراءات الحساسات والبيانات إلى قرارات واضحة داخل الأنظمة الفيزيائية. هذا الاتجاه يربط الذكاء الاصطناعي، الأتمتة، والتحكم المدمج في منتج هندسي قابل للاستخدام.',
      tags: ['AI / IoT', 'Python', 'MATLAB', 'Automation']
    },

    hvacGuide: {
      kicker: 'HVAC • Flutter', title: 'HVAC Guide 2.0',
      text: 'تطبيق تدريبي ثنائي اللغة يحول وصف المبنى إلى جدول HVAC ابتدائي ومسار رسم منظم على AutoCAD. يضم 20 تدريبًا من المصدر، ومحادثة ذكية محلية، ومقاسات دكت أولية، وإرشادات Layers/Tags وRubric جودة من 100 نقطة.',
      tags: ['Flutter', 'HVAC', 'مبني على ASHRAE', '20 تدريبًا', 'AutoCAD Guide'],
      actions: [{ label: 'Open GitHub Portfolio', href: 'https://github.com/EngAbdalqaderabueta', icon: 'github' }]
    },
    engStandard: {
      kicker: 'ستاندردات • Flutter', title: 'EngStandard 2.0',
      text: 'دليل ستاندردات هندسية ثنائي اللغة ومناسب للمبتدئ للميكانيكا والكهرباء والميكاترونكس. النسخة 2 تضم 85 نطاقًا اختياريًا وEngAI Local واعيًا بالنطاق و45 سجلًا مرجعيًا و210 بطاقات معرفة ثنائية اللغة تعمل Offline.',
      tags: ['Flutter', 'ستاندردات', '85 نطاقًا', '45 مرجعًا', '210 بطاقات معرفة'],
      actions: [{ label: 'Open GitHub Portfolio', href: 'https://github.com/EngAbdalqaderabueta', icon: 'github' }]
    }
  };

  const $ = (selector, ctx = document) => ctx.querySelector(selector);
  const $$ = (selector, ctx = document) => [...ctx.querySelectorAll(selector)];
  const toast = $('#toast');
  const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
  const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  const isTouchLike = () => window.matchMedia?.('(pointer: coarse)').matches || window.innerWidth < 768;
  let activeIndex = Math.max(0, sectionIds.indexOf((location.hash || '#home').replace('#', '')));
  let isFaceLocked = false;
  let toastTimer;


  let currentLang = localStorage.getItem('bmt-language') || 'en';
  let currentTheme = localStorage.getItem('bmt-theme') || 'dark';

  const translations = {
    en: {
      'lang.button': 'AR', 'lang.toast.en': 'English version enabled.', 'lang.toast.ar': 'تم تفعيل النسخة العربية.',
      'nav.home': 'Home', 'nav.about': 'About', 'nav.projects': 'Projects', 'nav.skills': 'Skills', 'nav.contact': 'Contact',
      'menu.open': 'Open menu', 'menu.close': 'Close menu',
      'theme.on': 'Light mode enabled.', 'theme.off': 'Dark mode enabled.', 'theme.onAria': 'Switch to dark mode', 'theme.offAria': 'Switch to light mode',
      'hero.badge': 'MECHATRONICS • AI • BIOMEDICAL SYSTEMS', 'hero.line1': 'ENGINEERING', 'hero.line2': 'THE FUTURE',
      'hero.body': 'I design intelligent systems that unite <span class="text-white">hardware, software and AI</span> to solve <span class="font-semibold text-bmt-400">real-world problems.</span>',
      'hero.work': 'Explore My Work', 'hero.contact': 'Contact Me',
      'metric.1.strong': '12', 'metric.1.label': 'Projects', 'metric.2.strong': '4+', 'metric.2.label': 'Years Exp.', 'metric.3.strong': 'Dev & Eng.', 'metric.3.label': 'Full Stack', 'metric.4.strong': 'Passion', 'metric.4.label': 'Innovation',
      'bot.bubble1': 'Hey! 👋', 'bot.bubble2': 'I’m BMT Bot',
      'cue': 'CLICK / WHEEL', 'swipe': 'Swipe to switch faces',
      'about.eyebrow': 'ABOUT THE ENGINEER', 'about.title': 'BioMechaTech',
      'about.p1': 'Portfolio of <span class="font-semibold text-white">Abdalqader Abueta</span>, a Mechatronics Engineering student focused on practical, human-centred technology.',
      'about.p2': 'My work bridges intelligent embedded systems, biomedical devices, automation, computer vision and product engineering.',
      'mission.eyebrow': 'MISSION', 'mission.title': 'Building systems that make engineering feel <span class="text-bmt-400">more human.</span>',
      'mission.p': 'I combine mechanics, electronics and code into solutions that can move beyond the lab: rehabilitation concepts, intelligent irrigation, real-time control and assistive technologies.',
      'mini.1': 'AI-driven decisions', 'mini.2': 'Design for buildability', 'mini.3': 'Safety-focused control',
      'projects.eyebrow': 'SELECTED WORK', 'projects.title': 'Projects engineered to <span class="text-bmt-400">perform.</span>', 'projects.viewAll': 'View All Work',
      'card.irrigation.type': 'Embedded • RTOS', 'card.irrigation.title': 'Smart Irrigation System', 'card.irrigation.text': 'STM32-based irrigation control with sensor monitoring, safety states, OLED and UART reporting.',
      'card.exoskeleton.type': 'Biomedical • Mechatronics', 'card.exoskeleton.title': 'Modular Rehabilitation Exoskeleton', 'card.exoskeleton.text': 'Research prototype integrating mechanics, sensing, motor control, firmware and safety architecture.',
      'card.swayApp.type': 'Flutter • Portfolio App', 'card.swayApp.title': 'Sway 7 Portfolio Edition', 'card.swayApp.text': 'Bilingual cinematic creator app with local MP4 rendering, creator/community foundations and a complete product story.',
      'card.biomechCode.type': 'Flutter • Education', 'card.biomechCode.title': 'BioMechTech Code 2.5', 'card.biomechCode.text': 'Offline engineering programming reference with 19 languages, 476 lessons, 762 examples and a code lab.',
      'card.simulinker.type': 'Mobile CAD • Flutter', 'card.simulinker.title': 'SimuLinker 3.5', 'card.simulinker.text': 'Mobile-first parametric CAD workspace with gestures, radial tools, workshop mode and AR/EN support.',
      'card.carDiagnostic.type': 'Automotive • Flutter', 'card.carDiagnostic.title': 'Car Diagnostic 1.1', 'card.carDiagnostic.text': 'Offline diagnostic app with dashboard, searchable fault library, 28 brands, 196 models and 29 fault codes.',
      'card.engineersWeapon.type': 'Engineering Platform • Flutter', 'card.engineersWeapon.title': "Engineer's Weapon 1.1", 'card.engineersWeapon.text': 'Mobile-first bilingual engineering workspace combining multiple engineering-inspired modules in one expandable architecture.',
      'card.iot.type': 'ESP32 • IoT Firmware', 'card.iot.title': 'Industrial ESP32 IoT Firmware', 'card.iot.text': 'Layered firmware for signals, alarms, durable records, journal storage and MQTT/AWS cloud integration.',
      'card.cad.type': 'CAD • Product Design', 'card.cad.title': 'Mechanism Design', 'card.cad.text': 'SolidWorks concepts developed with real assembly, actuation and manufacturability in mind.',
      'card.ai.type': 'AI • Data', 'card.ai.title': 'Intelligent Control', 'card.ai.text': 'Decision logic and data-driven monitoring that convert sensor readings into clear actions.',
      'card.hvacGuide.type': 'HVAC • Flutter', 'card.hvacGuide.title': 'HVAC Guide 2.0', 'card.hvacGuide.text': 'ASHRAE-based training and AutoCAD guide with 20 exercises, smart local chat and engineering workflow generation.', 'card.engStandard.type': 'Standards • Flutter', 'card.engStandard.title': 'EngStandard 2.0', 'card.engStandard.text': 'Standards navigator with 85 scopes, scope-aware EngAI Local, 45 reference records and 210 offline knowledge cards.',
      'card.view': 'View system', 'card.download': 'Download project', 'card.future.action': 'Start a conversation',
      'skills.eyebrow': 'TOOLKIT', 'skills.title': 'Hardware logic. Software craft. <span class="text-bmt-400">One system.</span>',
      'skill.embedded.title': 'Embedded', 'skill.embedded.text': 'STM32, ESP32, AVR, FreeRTOS, C/C++, UART, I²C, ADC, Proteus.',
      'skill.software.title': 'Software', 'skill.software.text': 'Python, MATLAB, JavaScript, Flutter/Dart and control-oriented application logic.',
      'skill.mechanical.title': 'Mechanical', 'skill.mechanical.text': 'SolidWorks, AutoCAD, mechanism design, assemblies and physical prototyping.',
      'skill.biomedical.title': 'Biomedical', 'skill.biomedical.text': 'Assistive devices, rehabilitation systems, EMG/FSR sensing and human-centric design.',
      'contact.eyebrow': 'LET’S CONNECT', 'contact.title': 'Have an idea that needs a <span class="text-bmt-400">working system?</span>',
      'contact.p': 'Send a message from the form and BMT will prepare a ready-to-send email draft in your email app.', 'contact.system': 'Mechatronics • AI • Biomedical Systems', 'contact.cv': 'Download CV (2026)',
      'form.name': 'Name', 'form.email': 'Email', 'form.subject': 'Subject', 'form.message': 'Message', 'form.namePlaceholder': 'Your name', 'form.emailPlaceholder': 'you@example.com', 'form.subjectPlaceholder': 'Project inquiry', 'form.messagePlaceholder': 'Tell me about your idea…', 'form.submit': 'Prepare Message',
      'form.error': 'Please complete every field with a valid email.', 'form.opening': 'Opening your email app…', 'form.toast': 'Your message is ready in your email app.', 'form.emailBodyHello': 'Hello Abdalqader,', 'form.emailBodyName': 'My name is', 'form.emailBodyReply': 'Reply to:', 'form.emailBodyRegards': 'Regards,',
      'footer.status': 'Systems online', 'modal.gotIt': 'Got it', 'view.github.toast': 'Opening GitHub portfolio workspace.', 'cv.toast': 'CV download started.', 'copy.toast': 'copied to clipboard.', 'social.facebook.missing': 'Facebook link is unavailable.',
      'chat.online': 'Online now', 'chat.initial': 'Hey! 👋 I’m BMT Bot. Ask me about projects, skills or how to get in touch.', 'chat.prompt.projects': 'Show projects', 'chat.prompt.sway': 'Sway app', 'chat.prompt.github': 'GitHub', 'chat.prompt.contact': 'Contact', 'chat.placeholder': 'Type a message…',
      'bot.ready': 'Systems online. Click me to talk.', 'bot.open': 'Chat channel ready. Ask about projects, skills or contact details.', 'bot.close': 'I will stay nearby.',
      'bot.zone.home': 'Systems online. I can guide you through the portfolio.', 'bot.zone.about': 'This is the engineer behind BioMechaTech.', 'bot.zone.projects': 'Project bay unlocked. Tap a card to inspect a system.', 'bot.zone.skills': 'Hardware, software and biomedical thinking—one toolkit.', 'bot.zone.contact': 'Ready to build? The communication channel is open.',
      'bot.jump.projects': 'Jumping to the project bay.', 'bot.navigate': 'Navigating to', 'bot.reply.projects': 'This portfolio edition showcases 12 documented projects, including Sway 7, BioMechTech Code 2.5, SimuLinker 3.5, HVAC Guide 2.0, EngStandard 2.0, Car Diagnostic 1.1, Engineer\'s Weapon 1.1 and the rehabilitation exoskeleton.', 'bot.reply.sway': 'Downloading the Sway 7 Portfolio Edition ZIP with the latest source, portfolio documentation and release project structure.', 'bot.reply.github': 'Opening Abdalqader GitHub workspace.', 'bot.reply.skills': 'The toolkit includes STM32, Arduino, embedded C/C++, FreeRTOS, Python, MATLAB, Flutter, SolidWorks, AutoCAD and Proteus.', 'bot.reply.contact': 'You can reach Abdalqader through WhatsApp (+972 59 463 9999), email (aboodxxxc@gmail.com), BioMechaTech (biomechatech4@gmail.com) or GitHub.', 'bot.reply.domain': 'The intended domain is https://eng-abdalqader-abueta.com/. It becomes live after buying the domain and connecting it to hosting.', 'bot.reply.hello': 'Hey! I am BMT Bot. Ask me about projects, skills or ways to collaborate.', 'bot.reply.default': 'I can help with projects, skills, contact details or the portfolio domain. Try one of the quick prompts below.'
    },
    ar: {
      'lang.button': 'EN', 'lang.toast.en': 'English version enabled.', 'lang.toast.ar': 'تم تفعيل النسخة العربية.',
      'nav.home': 'الرئيسية', 'nav.about': 'عنّي', 'nav.projects': 'المشاريع', 'nav.skills': 'المهارات', 'nav.contact': 'تواصل',
      'menu.open': 'فتح القائمة', 'menu.close': 'إغلاق القائمة',
      'theme.on': 'تم تفعيل الوضع النهاري.', 'theme.off': 'تم تفعيل الوضع الليلي.', 'theme.onAria': 'التحويل إلى الوضع الليلي', 'theme.offAria': 'التحويل إلى الوضع النهاري',
      'hero.badge': 'ميكاترونكس • ذكاء اصطناعي • أنظمة طبية', 'hero.line1': 'نصمّم أنظمة الغد', 'hero.line2': 'بهندسة ذكية',
      'hero.body': 'أبني أنظمة ذكية تجمع بين <span class="text-white">العتاد، البرمجيات والذكاء الاصطناعي</span> لتحويل الأفكار إلى <span class="font-semibold text-bmt-400">حلول عملية قابلة للتنفيذ.</span>',
      'hero.work': 'استكشف أعمالي', 'hero.contact': 'تواصل معي',
      'metric.1.strong': '12', 'metric.1.label': 'مشروع', 'metric.2.strong': '+4', 'metric.2.label': 'سنوات خبرة', 'metric.3.strong': 'تطوير وهندسة', 'metric.3.label': 'Full Stack', 'metric.4.strong': 'شغف', 'metric.4.label': 'ابتكار',
      'bot.bubble1': 'أهلًا! 👋', 'bot.bubble2': 'أنا BMT Bot',
      'cue': 'اضغط / حرّك العجلة', 'swipe': 'اسحب للتنقل بين الواجهات',
      'about.eyebrow': 'عن المهندس', 'about.title': 'BioMechaTech',
      'about.p1': 'هذا بورتفوليو <span class="font-semibold text-white">عبدالقادر أبو عيطة</span>، طالب هندسة ميكاترونكس يركز على التقنية العملية القريبة من احتياج الإنسان.',
      'about.p2': 'أربط بين الأنظمة المدمجة، الأجهزة الطبية المساعدة، الأتمتة، الرؤية الحاسوبية، وتصميم المنتجات الهندسية.',
      'mission.eyebrow': 'الرؤية', 'mission.title': 'أبني حلولاً تجعل التكنولوجيا <span class="text-bmt-400">أقرب للإنسان.</span>',
      'mission.p': 'أمزج الميكانيكا والإلكترونيات والبرمجة في حلول قابلة للخروج من المختبر: أفكار لإعادة التأهيل، ري ذكي، تحكم لحظي وتقنيات مساعدة.',
      'mini.1': 'قرارات مدعومة بالذكاء', 'mini.2': 'تصميم قابل للتنفيذ', 'mini.3': 'تحكم يضع السلامة أولاً',
      'projects.eyebrow': 'أعمال مختارة', 'projects.title': 'مشاريع مصممة لكي <span class="text-bmt-400">تعمل فعلاً.</span>', 'projects.viewAll': 'عرض كل الأعمال',
      'card.irrigation.type': 'Embedded • RTOS', 'card.irrigation.title': 'نظام ري ذكي', 'card.irrigation.text': 'تحكم ري مبني على STM32 مع حساسات، حالات أمان، شاشة OLED وتقارير UART.',
      'card.exoskeleton.type': 'طبي حيوي • ميكاترونكس', 'card.exoskeleton.title': 'هيكل خارجي معياري لإعادة التأهيل', 'card.exoskeleton.text': 'نموذج بحثي يدمج الميكانيكا والحساسات والتحكم بالمحركات والـFirmware وبنية الأمان.',
      'card.swayApp.type': 'Flutter • نسخة معرض', 'card.swayApp.title': 'Sway 7 Portfolio Edition', 'card.swayApp.text': 'تطبيق إبداعي سينمائي ثنائي اللغة مع رندر MP4 محلي وأسس للمبدعين والمجتمع وقصة المنتج كاملة.',
      'card.biomechCode.type': 'Flutter • تعليم', 'card.biomechCode.title': 'BioMechTech Code 2.5', 'card.biomechCode.text': 'مرجع برمجي Offline يضم 19 لغة و476 درساً و762 مثالاً ومختبر أكواد تعليمي.',
      'card.simulinker.type': 'Mobile CAD • Flutter', 'card.simulinker.title': 'SimuLinker 3.5', 'card.simulinker.text': 'مساحة CAD بارامترية للجوال مع إيماءات وقائمة دائرية ووضع ورشة ودعم AR/EN.',
      'card.carDiagnostic.type': 'سيارات • Flutter', 'card.carDiagnostic.title': 'Car Diagnostic 1.1', 'card.carDiagnostic.text': 'تطبيق تشخيص Offline مع Dashboard ومكتبة أعطال قابلة للبحث و28 شركة و196 طرازًا و29 رمز عطل.',
      'card.engineersWeapon.type': 'منصة هندسية • Flutter', 'card.engineersWeapon.title': "Engineer's Weapon 1.1", 'card.engineersWeapon.text': 'مساحة عمل هندسية ثنائية اللغة للجوال تجمع عدة وحدات هندسية داخل بنية واحدة قابلة للتوسع.',
      'card.iot.type': 'ESP32 • IoT Firmware', 'card.iot.title': 'Industrial ESP32 IoT Firmware', 'card.iot.text': 'Firmware طبقي للإشارات والإنذارات والسجلات والتخزين المحلي والتكامل مع MQTT/AWS.',
      'card.cad.type': 'CAD • تصميم منتج', 'card.cad.title': 'تصميم آليات وميكانيزمات', 'card.cad.text': 'مفاهيم SolidWorks مبنية حول التجميع والحركة وقابلية التصنيع.',
      'card.ai.type': 'AI • بيانات', 'card.ai.title': 'تحكم ذكي', 'card.ai.text': 'منطق قرارات ومراقبة مبنية على البيانات لتحويل قراءات الحساسات إلى أفعال واضحة.',
      'card.hvacGuide.type': 'HVAC • Flutter', 'card.hvacGuide.title': 'HVAC Guide 2.0', 'card.hvacGuide.text': 'دليل تدريبي ورسم AutoCAD مبني على ASHRAE مع 20 تدريبًا ومحادثة ذكية محلية.', 'card.engStandard.type': 'ستاندردات • Flutter', 'card.engStandard.title': 'EngStandard 2.0', 'card.engStandard.text': 'دليل ستاندردات مع 85 نطاقًا وEngAI Local واعيًا بالنطاق و45 مرجعًا و210 بطاقات معرفة.',
      'card.view': 'عرض النظام', 'card.download': 'تحميل المشروع', 'card.future.action': 'ابدأ تواصل',
      'skills.eyebrow': 'الأدوات والمهارات', 'skills.title': 'عتاد يفهم الواقع. برمجيات تقوده. <span class="text-bmt-400">نظام واحد.</span>',
      'skill.embedded.title': 'أنظمة مدمجة', 'skill.embedded.text': 'STM32, ESP32, AVR, FreeRTOS, C/C++, UART, I²C, ADC, Proteus.',
      'skill.software.title': 'برمجيات', 'skill.software.text': 'Python, MATLAB, JavaScript, Flutter/Dart ومنطق تطبيقات مبني حول التحكم.',
      'skill.mechanical.title': 'ميكانيكا وتصميم', 'skill.mechanical.text': 'SolidWorks, AutoCAD، تصميم آليات، تجميعات ونمذجة أولية.',
      'skill.biomedical.title': 'طبي حيوي', 'skill.biomedical.text': 'أجهزة مساعدة، أنظمة إعادة تأهيل، حساسات EMG/FSR وتصميم يراعي الإنسان.',
      'contact.eyebrow': 'خلّينا نتواصل', 'contact.title': 'عندك فكرة تحتاج <span class="text-bmt-400">نظام يشتغل؟</span>',
      'contact.p': 'اكتب رسالتك وسيجهز الموقع مسودة بريد إلكتروني جاهزة للإرسال من تطبيق الإيميل عندك.', 'contact.system': 'ميكاترونكس • ذكاء اصطناعي • أنظمة طبية', 'contact.cv': 'تحميل السيرة الذاتية (2026)',
      'form.name': 'الاسم', 'form.email': 'الإيميل', 'form.subject': 'الموضوع', 'form.message': 'الرسالة', 'form.namePlaceholder': 'اكتب اسمك', 'form.emailPlaceholder': 'you@example.com', 'form.subjectPlaceholder': 'استفسار عن مشروع', 'form.messagePlaceholder': 'احكيلي عن فكرتك…', 'form.submit': 'تجهيز الرسالة',
      'form.error': 'كمّل كل الحقول وتأكد أن الإيميل صحيح.', 'form.opening': 'جاري فتح تطبيق الإيميل…', 'form.toast': 'رسالتك جاهزة داخل تطبيق الإيميل.', 'form.emailBodyHello': 'مرحباً عبدالقادر،', 'form.emailBodyName': 'اسمي', 'form.emailBodyReply': 'الإيميل للرد:', 'form.emailBodyRegards': 'تحياتي،',
      'footer.status': 'الأنظمة تعمل', 'modal.gotIt': 'تمام', 'view.github.toast': 'جاري فتح مساحة المشاريع على GitHub.', 'cv.toast': 'بدأ تحميل السيرة الذاتية.', 'copy.toast': 'تم نسخه إلى الحافظة.', 'social.facebook.missing': 'أيقونة فيسبوك جاهزة — أضف رابط حسابك الدقيق لتفعيلها.',
      'chat.online': 'متصل الآن', 'chat.initial': 'أهلًا! 👋 أنا BMT Bot. اسألني عن المشاريع، المهارات أو طرق التواصل.', 'chat.prompt.projects': 'اعرض المشاريع', 'chat.prompt.sway': 'تطبيق Sway', 'chat.prompt.github': 'GitHub', 'chat.prompt.contact': 'تواصل', 'chat.placeholder': 'اكتب رسالة…',
      'bot.ready': 'الأنظمة تعمل. اضغط عليّ للتحدث.', 'bot.open': 'قناة المحادثة جاهزة. اسألني عن المشاريع أو المهارات أو التواصل.', 'bot.close': 'سأبقى قريباً منك.',
      'bot.zone.home': 'الأنظمة تعمل. أقدر أوجهك داخل البورتفوليو.', 'bot.zone.about': 'هنا تتعرف على مهندس BioMechaTech.', 'bot.zone.projects': 'تم فتح منطقة المشاريع. اضغط على أي كرت لتفاصيل أكثر.', 'bot.zone.skills': 'عتاد وبرمجيات وتفكير طبي حيوي في مجموعة مهارات واحدة.', 'bot.zone.contact': 'جاهز للتواصل؟ قناة الرسائل مفتوحة.',
      'bot.jump.projects': 'رايح على منطقة المشاريع.', 'bot.navigate': 'الانتقال إلى', 'bot.reply.projects': 'تعرض هذه النسخة 12 مشروعًا موثقًا، منها Sway 7 وBioMechTech Code 2.5 وSimuLinker 3.5 وHVAC Guide 2.0 وEngStandard 2.0 وCar Diagnostic 1.1 وEngineer\'s Weapon 1.1 والهيكل الخارجي لإعادة التأهيل.', 'bot.reply.sway': 'جاري تحميل ملف Sway 7 Portfolio Edition الذي يحتوي على أحدث الكود ووثائق العرض وبنية المشروع.', 'bot.reply.github': 'جاري فتح مساحة عبدالقادر على GitHub.', 'bot.reply.skills': 'المهارات تشمل STM32، Arduino، C/C++ للأنظمة المدمجة، FreeRTOS، Python، MATLAB، Flutter، SolidWorks، AutoCAD وProteus.', 'bot.reply.contact': 'تقدر تتواصل مع عبدالقادر عبر واتساب، الإيميل الشخصي، إيميل BioMechaTech أو GitHub.', 'bot.reply.domain': 'الدومين المقترح هو https://eng-abdalqader-abueta.com/. سيصبح فعلياً بعد شراء الدومين وربطه بالاستضافة.', 'bot.reply.hello': 'أهلًا! أنا BMT Bot. اسألني عن المشاريع، المهارات أو فرص التعاون.', 'bot.reply.default': 'أقدر أساعدك بالمشاريع، المهارات، التواصل أو الدومين. جرّب أحد الأزرار السريعة.'
    }
  };

  const textOf = (key) => (translations[currentLang] && translations[currentLang][key]) || translations.en[key] || key;
  const setText = (selector, key) => $$(selector).forEach((el) => { el.textContent = textOf(key); });
  const setHTML = (selector, key) => $$(selector).forEach((el) => { el.innerHTML = textOf(key); });
  const setPlaceholder = (selector, key) => $$(selector).forEach((el) => { el.placeholder = textOf(key); });
  const iconButton = (selector, icon, key) => $$(selector).forEach((el) => { el.innerHTML = `<i data-lucide="${icon}"></i> ${textOf(key)}`; });
  const projectData = (id) => currentLang === 'ar' && projectInfoAr[id] ? { ...projectInfo[id], ...projectInfoAr[id] } : projectInfo[id];

  function applyLanguage(lang = currentLang, options = {}) {
    currentLang = lang === 'ar' ? 'ar' : 'en';
    localStorage.setItem('bmt-language', currentLang);
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.body.classList.toggle('lang-ar', currentLang === 'ar');

    setText('.nav-link[href="#home"], .mobile-nav-link[href="#home"]', 'nav.home');
    setText('.nav-link[href="#about"], .mobile-nav-link[href="#about"]', 'nav.about');
    setText('.nav-link[href="#projects"], .mobile-nav-link[href="#projects"]', 'nav.projects');
    setText('.nav-link[href="#skills"], .mobile-nav-link[href="#skills"]', 'nav.skills');
    setText('.nav-link[href="#contact"], .mobile-nav-link[href="#contact"]', 'nav.contact');
    setText('#languageToggle span', 'lang.button');
    const heroBadge = $('.hero-section .inline-flex'); if (heroBadge) heroBadge.innerHTML = `<span class="h-2 w-2 rounded-full bg-bmt-400 shadow-lime"></span>${textOf('hero.badge')}<i data-lucide="arrow-right" class="ml-1 h-3.5 w-3.5 text-bmt-400"></i>`;
    setText('.hero-outline', 'hero.line1');
    setText('.text-glow', 'hero.line2');
    setHTML('.hero-section p.reveal-delay-2', 'hero.body');
    iconButton('.hero-section .btn-primary[href="#projects"]', 'zap', 'hero.work');
    iconButton('.hero-section .btn-secondary[href="#contact"]', 'send', 'hero.contact');
    setText('.metric-card:nth-child(1) strong', 'metric.1.strong'); setText('.metric-card:nth-child(1) span', 'metric.1.label');
    setText('.metric-card:nth-child(2) strong', 'metric.2.strong'); setText('.metric-card:nth-child(2) span', 'metric.2.label');
    setText('.metric-card:nth-child(3) strong', 'metric.3.strong'); setText('.metric-card:nth-child(3) span', 'metric.3.label');
    setText('.metric-card:nth-child(4) strong', 'metric.4.strong'); setText('.metric-card:nth-child(4) span', 'metric.4.label');
    setText('#botBubble span:first-child', 'bot.bubble1'); setText('#botBubble strong', 'bot.bubble2');
    setText('#nextFaceCue span:first-child', 'cue');
    const swipeHint = $('.swipe-hint'); if (swipeHint) swipeHint.innerHTML = `<i data-lucide="move-horizontal"></i> ${textOf('swipe')}`;

    setText('#about .glass-card .eyebrow', 'about.eyebrow'); setText('#about .glass-card h2', 'about.title');
    setHTML('#about .glass-card p:nth-child(1)', 'about.p1'); setHTML('#about .glass-card p:nth-child(2)', 'about.p2');
    const aboutPills = currentLang === 'ar' ? ['ميكاترونكس طبية', 'أنظمة مدمجة', 'AI / IoT', 'SolidWorks'] : ['Biomedical Mechatronics', 'Embedded Systems', 'AI / IoT', 'SolidWorks']; $$('#about .skill-pill').forEach((pill, index) => { if (aboutPills[index]) pill.textContent = aboutPills[index]; });
    setText('#about > div > div:nth-child(2) > .eyebrow', 'mission.eyebrow'); setHTML('#about > div > div:nth-child(2) h2', 'mission.title'); setText('#about > div > div:nth-child(2) p', 'mission.p');
    setText('#about .mini-info:nth-child(1) span', 'mini.1'); setText('#about .mini-info:nth-child(2) span', 'mini.2'); setText('#about .mini-info:nth-child(3) span', 'mini.3');

    setText('#projects .eyebrow', 'projects.eyebrow'); setHTML('#projects h2', 'projects.title'); iconButton('#viewAllProjects', 'layers-3', 'projects.viewAll');
    ['biomechCode','simulinker','swayApp','hvacGuide','engineersWeapon','engStandard','carDiagnostic','exoskeleton','irrigation','iot','cad','ai'].forEach((id) => {
      setText(`[data-project="${id}"] .project-type`, `card.${id}.type`);
      setText(`[data-project="${id}"] h3`, `card.${id}.title`);
      setText(`[data-project="${id}"] p`, `card.${id}.text`);
    });
    $$('.project-card .project-more').forEach((button) => {
      const card = button.closest('.project-card');
      if (!card) return;
      const id = card.dataset.project;
      const icon = id === 'swayApp' ? 'download' : 'arrow-up-right';
      const key = 'card.view';
      button.innerHTML = `${textOf(key)} <i data-lucide="${icon}"></i>`;
    });

    setText('#skills .eyebrow', 'skills.eyebrow'); setHTML('#skills h2', 'skills.title');
    const skillKeys = ['embedded', 'software', 'mechanical', 'biomedical'];
    $$('#skills .skill-panel').forEach((panel, index) => { const key = skillKeys[index]; if (!key) return; $('h3', panel).textContent = textOf(`skill.${key}.title`); $('p', panel).textContent = textOf(`skill.${key}.text`); });

    setText('#contact .eyebrow', 'contact.eyebrow'); setHTML('#contact h2', 'contact.title'); setText('#contact .glass-card p', 'contact.p'); setText('#contact .contact-line:first-child span', 'contact.system'); setText('#downloadProfile span', 'contact.cv');
    setText('[data-label-key="form.name"]', 'form.name'); setText('[data-label-key="form.email"]', 'form.email'); setText('[data-label-key="form.subject"]', 'form.subject'); setText('[data-label-key="form.message"]', 'form.message');
    setPlaceholder('input[name="name"]', 'form.namePlaceholder'); setPlaceholder('input[name="email"]', 'form.emailPlaceholder'); setPlaceholder('input[name="subject"]', 'form.subjectPlaceholder'); setPlaceholder('textarea[name="message"]', 'form.messagePlaceholder'); iconButton('#contactForm button[type="submit"]', 'send', 'form.submit');
    const footerStatus = $('footer .flex.items-center.gap-2'); if (footerStatus) footerStatus.innerHTML = `<span class="h-2 w-2 rounded-full bg-bmt-400 shadow-lime"></span> ${textOf('footer.status')}`;
    iconButton('#modal .btn-primary[data-close-modal]', 'check', 'modal.gotIt');
    setText('.chat-topbar small', 'chat.online'); setText('#chatMessages .bot-message:first-child', 'chat.initial');
    const prompts = $$('.quick-prompts button'); const promptKeys = ['chat.prompt.projects', 'chat.prompt.sway', 'chat.prompt.github', 'chat.prompt.contact'];
    prompts.forEach((button, index) => { button.textContent = textOf(promptKeys[index]); button.dataset.prompt = textOf(promptKeys[index]); });
    setPlaceholder('#chatInput', 'chat.placeholder');
    document.title = currentLang === 'ar' ? 'BioMechaTech - بورتفوليو عبدالقادر أبو عيطة' : 'Eng-Abdalqader-abueta.com — BioMechaTech Portfolio';
    $$('.face-dot').forEach((dot, index) => dot.setAttribute('aria-label', `${currentLang === 'ar' ? 'فتح واجهة' : 'Open'} ${textOf('nav.' + sectionIds[index]) || sectionIds[index]}`));
    refreshIcons();
    if (!options.silent) showToast(textOf(currentLang === 'ar' ? 'lang.toast.ar' : 'lang.toast.en'));
  }

  function refreshIcons() {
    if (window.lucide) window.lucide.createIcons();
  }

  function showToast(text) {
    if (!toast) return;
    toast.textContent = text;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 3200);
  }

  function closeMobileMenu() {
    const mobileMenu = $('#mobileMenu');
    const menuToggle = $('#menuToggle');
    mobileMenu?.setAttribute('hidden', '');
    menuToggle?.setAttribute('aria-expanded', 'false');
    if (menuToggle) menuToggle.innerHTML = '<i data-lucide="menu"></i>';
    refreshIcons();
  }

  function updateFaceDots() {
    const dots = $$('.face-dot');
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === activeIndex);
      dot.setAttribute('aria-current', index === activeIndex ? 'true' : 'false');
    });
  }

  function setActiveFace(nextIndex, options = {}) {
    const sectionCount = sections.length;
    if (!sectionCount) return;

    const requested = ((nextIndex % sectionCount) + sectionCount) % sectionCount;
    if (isFaceLocked && !options.force) return;
    if (requested === activeIndex && !options.force) return;

    pulseBackgroundMotion(reduceMotion ? 120 : 420);
    const previousIndex = activeIndex;
    const direction = options.direction || (requested > previousIndex ? 1 : -1);
    activeIndex = requested;
    document.documentElement.style.setProperty('--active-face', String(activeIndex));
    document.body.dataset.activeSection = sectionIds[activeIndex];
    document.body.dataset.direction = direction > 0 ? 'forward' : 'backward';

    sections.forEach((section, index) => {
      const isActive = index === activeIndex;
      section.classList.toggle('active-face', isActive);
      section.classList.toggle('prev-face', index < activeIndex);
      section.classList.toggle('next-face', index > activeIndex);
      section.setAttribute('aria-hidden', String(!isActive));
      if (isActive) section.scrollTop = 0;
    });

    const navLinks = [...$$('.nav-link'), ...$$('.quick-link'), ...$$('.mobile-nav-link')];
    navLinks.forEach((link) => {
      const isActive = link.getAttribute('href') === `#${sectionIds[activeIndex]}`;
      link.classList.toggle('active', isActive);
      if (isActive) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });

    const progress = $('#progress');
    if (progress) progress.style.width = `${((activeIndex + 1) / sectionCount) * 100}%`;
    updateFaceDots();
    updateCompanionForFace(sectionIds[activeIndex]);

    if (!options.silent && sectionIds[activeIndex] === 'projects') speak('Project bay selected. Tap a card to inspect a system.', 2600);
    if (!options.silent && sectionIds[activeIndex] === 'contact') speak('Communication channel is open.', 2600);

    if (!options.noHash) history.replaceState(null, '', `#${sectionIds[activeIndex]}`);

    isFaceLocked = true;
    window.setTimeout(() => { isFaceLocked = false; }, reduceMotion ? 80 : 720);
  }

  function pulseBackgroundMotion(duration = 420) {
    document.body.classList.add('bg-motion');
    clearTimeout(pulseBackgroundMotion.timer);
    pulseBackgroundMotion.timer = window.setTimeout(() => document.body.classList.remove('bg-motion'), duration);
  }

  function goToFace(idOrIndex, options = {}) {
    const index = typeof idOrIndex === 'number' ? idOrIndex : sectionIds.indexOf(String(idOrIndex).replace('#', ''));
    if (index < 0) return;
    setActiveFace(index, options);
  }

  function buildFaceDots() {
    const dotsWrap = $('#faceDots');
    if (!dotsWrap) return;
    dotsWrap.innerHTML = sectionIds.map((id, index) => (
      `<button class="face-dot" type="button" data-face-index="${index}" aria-label="Open ${id} face"></button>`
    )).join('');
    $$('.face-dot', dotsWrap).forEach((dot) => {
      dot.addEventListener('click', () => goToFace(Number(dot.dataset.faceIndex)));
    });
    updateFaceDots();
  }

  function setupCubeNavigation() {
    document.addEventListener('click', (event) => {
      const anchor = event.target.closest('a[href^="#"]');
      if (!anchor) return;
      const target = anchor.getAttribute('href');
      const id = target.replace('#', '');
      if (!sectionIds.includes(id)) return;
      event.preventDefault();
      closeMobileMenu();
      goToFace(id);
    });

    $('#faceNext')?.addEventListener('click', () => goToFace(activeIndex + 1, { direction: 1 }));
    $('#facePrev')?.addEventListener('click', () => goToFace(activeIndex - 1, { direction: -1 }));
    $('#nextFaceCue')?.addEventListener('click', () => goToFace(activeIndex + 1, { direction: 1 }));
    $('#scrollTop')?.addEventListener('click', () => goToFace(0, { direction: -1 }));

    document.addEventListener('keydown', (event) => {
      if (event.target.matches('input, textarea')) return;
      if (event.key === 'ArrowRight' || event.key === 'PageDown') goToFace(activeIndex + 1, { direction: 1 });
      if (event.key === 'ArrowLeft' || event.key === 'PageUp') goToFace(activeIndex - 1, { direction: -1 });
      if (event.key === 'Home') goToFace(0, { direction: -1 });
      if (event.key === 'End') goToFace(sections.length - 1, { direction: 1 });
    });

    let wheelCarry = 0;
    let wheelTimer = 0;
    document.addEventListener('wheel', (event) => {
      if (isTouchLike() || event.ctrlKey || event.shiftKey) return;
      if (event.target.closest('.modal, .chat-panel, input, textarea, select')) return;
      const activeSection = sections[activeIndex];
      if (!activeSection) return;
      const canScrollInside = activeSection.scrollHeight > activeSection.clientHeight + 8;
      const atTop = activeSection.scrollTop <= 2;
      const atBottom = activeSection.scrollTop + activeSection.clientHeight >= activeSection.scrollHeight - 2;
      const wantsNext = event.deltaY > 0;
      const wantsPrev = event.deltaY < 0;
      if (canScrollInside && ((wantsNext && !atBottom) || (wantsPrev && !atTop))) return;
      wheelCarry += event.deltaY;
      clearTimeout(wheelTimer);
      wheelTimer = window.setTimeout(() => { wheelCarry = 0; }, 280);
      if (Math.abs(wheelCarry) < 72) return;
      event.preventDefault();
      if (wheelCarry > 0) goToFace(activeIndex + 1, { direction: 1 });
      else goToFace(activeIndex - 1, { direction: -1 });
      wheelCarry = 0;
    }, { passive: false });

    let touchStartX = 0;
    let touchStartY = 0;
    let touchStartTime = 0;
    document.addEventListener('touchstart', (event) => {
      if (!isTouchLike() || event.touches.length !== 1) return;
      touchStartX = event.touches[0].clientX;
      touchStartY = event.touches[0].clientY;
      touchStartTime = Date.now();
    }, { passive: true });

    document.addEventListener('touchend', (event) => {
      if (!isTouchLike() || !touchStartTime) return;
      const touch = event.changedTouches[0];
      const dx = touch.clientX - touchStartX;
      const dy = touch.clientY - touchStartY;
      const elapsed = Date.now() - touchStartTime;
      touchStartTime = 0;

      const isHorizontalSwipe = Math.abs(dx) > 62 && Math.abs(dx) > Math.abs(dy) * 1.35 && elapsed < 950;
      if (!isHorizontalSwipe) return;
      if (dx < 0) goToFace(activeIndex + 1, { direction: 1 });
      else goToFace(activeIndex - 1, { direction: -1 });
    }, { passive: true });

    window.addEventListener('hashchange', () => {
      const id = (location.hash || '#home').replace('#', '');
      if (sectionIds.includes(id)) goToFace(id, { noHash: true });
    });
  }

  function applyTheme(theme = currentTheme, notify = false) {
    currentTheme = theme === 'light' ? 'light' : 'dark';
    const isLight = currentTheme === 'light';
    document.body.classList.toggle('light-mode', isLight);
    document.body.classList.remove('pulse-mode');
    localStorage.setItem('bmt-theme', currentTheme);
    const themeToggle = $('#themeToggle');
    if (themeToggle) {
      themeToggle.setAttribute('aria-label', isLight ? textOf('theme.onAria') : textOf('theme.offAria'));
      themeToggle.setAttribute('title', isLight ? textOf('theme.onAria') : textOf('theme.offAria'));
      themeToggle.innerHTML = `<i data-lucide="${isLight ? 'moon-star' : 'sun'}"></i>`;
    }
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) metaTheme.setAttribute('content', isLight ? '#f4f8f3' : '#071009');
    refreshIcons();
    if (notify) showToast(isLight ? textOf('theme.on') : textOf('theme.off'));
  }

  function setupMenuAndTheme() {
    const mobileMenu = $('#mobileMenu');
    const menuToggle = $('#menuToggle');
    menuToggle?.addEventListener('click', () => {
      const isOpen = !mobileMenu.hasAttribute('hidden');
      mobileMenu.toggleAttribute('hidden', isOpen);
      menuToggle.setAttribute('aria-expanded', String(!isOpen));
      menuToggle.setAttribute('aria-label', isOpen ? textOf('menu.open') : textOf('menu.close'));
      menuToggle.innerHTML = `<i data-lucide="${isOpen ? 'menu' : 'x'}"></i>`;
      refreshIcons();
    });

    const themeToggle = $('#themeToggle');
    themeToggle?.addEventListener('click', () => {
      currentTheme = currentTheme === 'light' ? 'dark' : 'light';
      applyTheme(currentTheme, true);
    });
  }

  function setupLanguageToggle() {
    $('#languageToggle')?.addEventListener('click', () => { applyLanguage(currentLang === 'ar' ? 'en' : 'ar'); applyTheme(currentTheme, false); });
  }

  function setupSocialLinks() {
    $$('[data-social]').forEach((button) => {
      const social = button.dataset.social;
      button.addEventListener('click', () => {
        const href = links[social];
        if (!href) {
          if (social === 'Facebook') showToast(textOf('social.facebook.missing'));
          return;
        }
        if (href.startsWith('mailto:')) window.location.href = href;
        else window.open(href, '_blank', 'noopener,noreferrer');
      });
    });
  }

  function setupProjectModal() {
    const modal = $('#modal');
    function openModal(id) {
      const data = projectData(id);
      if (!data || !modal) return;
      $('#modalIcon').setAttribute('data-lucide', data.icon);
      $('#modalKicker').textContent = data.kicker;
      $('#modalTitle').textContent = data.title;
      $('#modalText').textContent = data.text;
      $('#modalTags').innerHTML = data.tags.map((tag) => `<span class="skill-pill">${tag}</span>`).join('');
      const actions = $('#modalActions');
      if (actions) {
        actions.innerHTML = (data.actions || []).map((action) => (
          `<a class="modal-action-link" href="${action.href}" target="_blank" rel="noopener noreferrer"><i data-lucide="${action.icon || 'external-link'}"></i>${action.label}</a>`
        )).join('');
        actions.hidden = !(data.actions || []).length;
      }
      modal.removeAttribute('hidden');
      document.body.classList.add('modal-open');
      refreshIcons();
      $('.modal-close', modal)?.focus();
    }
    function closeModal() {
      modal?.setAttribute('hidden', '');
      document.body.classList.remove('modal-open');
    }

    $$('.project-card[data-project]').forEach((card) => {
      card.addEventListener('click', (event) => {
        if (event.target.closest('a[href="#contact"]')) return;
        openModal(card.dataset.project);
      });
      card.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          openModal(card.dataset.project);
        }
      });
      card.tabIndex = 0;
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', `Open details for ${$('h3', card)?.textContent || 'project'}`);
    });

    $$('[data-close-modal]').forEach((button) => button.addEventListener('click', closeModal));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && modal && !modal.hasAttribute('hidden')) closeModal();
    });
    $('#viewAllProjects')?.addEventListener('click', () => {
      window.open(links.GitHub, '_blank', 'noopener,noreferrer');
      showToast(textOf('view.github.toast'));
    });
  }

  const panel = $('#chatPanel');
  const companion = $('#bmtCompanion');
  const companionButton = $('#bmtCompanionButton');
  const speech = $('#bmtSpeech');
  const speechText = $('#bmtSpeechText');
  let speechTimer;
  let rafPointer = 0;
  let targetLook = { x: 0, y: 0, tilt: 0 };

  const zoneMessages = {
    home: () => textOf('bot.zone.home'),
    about: () => textOf('bot.zone.about'),
    projects: () => textOf('bot.zone.projects'),
    skills: () => textOf('bot.zone.skills'),
    contact: () => textOf('bot.zone.contact')
  };

  function speak(text, duration = 3600) {
    if (!speech || !speechText) return;
    speechText.textContent = text;
    speech.classList.add('is-visible');
    clearTimeout(speechTimer);
    if (duration) speechTimer = window.setTimeout(() => speech.classList.remove('is-visible'), duration);
  }

  function burstCompanion() {
    if (!companion || reduceMotion) return;
    const points = [[-24,-16],[24,-17],[-22,18],[25,20]];
    points.forEach(([x, y], index) => {
      const particle = document.createElement('span');
      particle.className = 'bmt-particle';
      particle.style.setProperty('--px', `${x + (index % 2 ? 5 : -5)}px`);
      particle.style.setProperty('--py', `${y}px`);
      companion.appendChild(particle);
      particle.addEventListener('animationend', () => particle.remove());
    });
  }

  function updateCompanionForFace(zone, announce = false) {
    if (!companion || !zone) return;
    const changed = companion.dataset.zone !== zone;
    companion.dataset.zone = zone;
    if (changed) {
      burstCompanion();
      if (announce) speak(zoneMessages[zone]?.() || textOf('bot.ready'), 2600);
    }
  }

  function openChat() {
    panel?.removeAttribute('hidden');
    companion?.classList.add('is-chat-open');
    speak(textOf('bot.open'), 4500);
    window.setTimeout(() => $('#chatInput')?.focus(), 80);
  }

  function closeChat() {
    panel?.setAttribute('hidden', '');
    companion?.classList.remove('is-chat-open');
    speak(textOf('bot.close'), 2200);
  }

  function setupBot() {
    companionButton?.addEventListener('click', openChat);
    $('#botBubble')?.addEventListener('click', openChat);
    $('#botNavButton')?.addEventListener('click', openChat);
    $('#closeChat')?.addEventListener('click', closeChat);
    $('#bmtSpeechClose')?.addEventListener('click', () => { speech?.classList.remove('is-visible'); clearTimeout(speechTimer); });

    document.addEventListener('pointermove', (event) => {
      if (!companionButton || event.pointerType === 'touch') return;
      const rect = companionButton.getBoundingClientRect();
      const dx = (event.clientX - (rect.left + rect.width / 2)) / Math.max(rect.width, 1);
      const dy = (event.clientY - (rect.top + rect.height / 2)) / Math.max(rect.height, 1);
      targetLook = {
        x: Math.max(-2.2, Math.min(2.2, dx * 2.1)),
        y: Math.max(-1.4, Math.min(1.4, dy * 1.4)),
        tilt: Math.max(-2.5, Math.min(2.5, dx * 1.5))
      };
      if (rafPointer) return;
      rafPointer = requestAnimationFrame(() => {
        rafPointer = 0;
        companionButton.style.setProperty('--look-x', `${targetLook.x.toFixed(2)}px`);
        companionButton.style.setProperty('--look-y', `${targetLook.y.toFixed(2)}px`);
        companionButton.style.setProperty('--bot-tilt', `${targetLook.tilt.toFixed(2)}deg`);
      });
    }, { passive: true });

    document.addEventListener('pointerleave', () => {
      companionButton?.style.setProperty('--look-x', '0px');
      companionButton?.style.setProperty('--look-y', '0px');
      companionButton?.style.setProperty('--bot-tilt', '0deg');
    });

    window.setTimeout(() => {
      companion?.classList.add('is-ready');
      updateCompanionForFace(sectionIds[activeIndex]);
      speak(textOf('bot.ready'), 4400);
    }, reduceMotion ? 80 : 620);
  }

  function appendChat(text, type = 'bot') {
    const chatMessages = $('#chatMessages');
    if (!chatMessages) return;
    const msg = document.createElement('div');
    msg.className = `${type}-message`;
    msg.textContent = text;
    chatMessages.appendChild(msg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function visitSection(id) {
    goToFace(id);
    speak(id === 'projects' ? textOf('bot.jump.projects') : `${textOf('bot.navigate')} ${textOf('nav.' + id) || id}.`, 2200);
  }

  function botReply(input) {
    const value = input.toLowerCase();
    const isProject = value.includes('project') || value.includes('work') || value.includes('مشروع') || value.includes('مشاريع');
    const isSkill = value.includes('skill') || value.includes('stack') || value.includes('tool') || value.includes('مهارة') || value.includes('مهارات');
    const isContact = value.includes('contact') || value.includes('email') || value.includes('whatsapp') || value.includes('hire') || value.includes('تواصل') || value.includes('اتصال');
    const isGitHub = value.includes('github') || value.includes('جيت') || value.includes('كود');
    const isSway = value.includes('sway') || value.includes('apk') || value.includes('guide') || value.includes('دليل') || value.includes('سواي');
    if (isProject) { window.setTimeout(() => visitSection('projects'), 260); return textOf('bot.reply.projects'); }
    if (isSway) { window.setTimeout(() => visitSection('projects'), 260); window.setTimeout(() => { window.open(links.GitHub, '_blank', 'noopener,noreferrer'); }, 580); return textOf('bot.reply.sway'); }
    if (isGitHub) { window.setTimeout(() => window.open(links.GitHub, '_blank', 'noopener,noreferrer'), 260); return textOf('bot.reply.github'); }
    if (isSkill) { window.setTimeout(() => visitSection('skills'), 260); return textOf('bot.reply.skills'); }
    if (isContact) { window.setTimeout(() => visitSection('contact'), 260); return textOf('bot.reply.contact'); }
    if (value.includes('domain') || value.includes('url') || value.includes('رابط') || value.includes('دومين')) return textOf('bot.reply.domain');
    if (value.includes('hello') || value.includes('hey') || value.includes('hi') || value.includes('مرحبا') || value.includes('اهلا') || value.includes('هلا') || value.includes('السلام')) return textOf('bot.reply.hello');
    return textOf('bot.reply.default');
  }

  function setupChat() {
    $('#chatForm')?.addEventListener('submit', (event) => {
      event.preventDefault();
      const input = $('#chatInput');
      const text = input.value.trim();
      if (!text) return;
      appendChat(text, 'user');
      input.value = '';
      window.setTimeout(() => appendChat(botReply(text), 'bot'), 220);
    });

    $$('.quick-prompts button').forEach((button) => button.addEventListener('click', () => {
      const prompt = button.dataset.prompt;
      appendChat(prompt, 'user');
      window.setTimeout(() => appendChat(botReply(prompt), 'bot'), 210);
    }));
  }

  function setupContactForm() {
    $('#contactForm')?.addEventListener('submit', (event) => {
      event.preventDefault();
      const form = new FormData(event.currentTarget);
      const name = String(form.get('name') || '').trim();
      const email = String(form.get('email') || '').trim();
      const subject = String(form.get('subject') || '').trim();
      const message = String(form.get('message') || '').trim();
      const status = $('#formStatus');
      if (!name || !email || !subject || !message || !/^\S+@\S+\.\S+$/.test(email)) {
        status.textContent = textOf('form.error');
        status.className = 'text-sm text-red-300';
        return;
      }
      const body = `${textOf('form.emailBodyHello')}\n\n${textOf('form.emailBodyName')} ${name}.\n${textOf('form.emailBodyReply')} ${email}\n\n${message}\n\n${textOf('form.emailBodyRegards')}\n${name}`;
      const mailto = `mailto:${primaryEmail}?cc=${encodeURIComponent(secondaryEmail)}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      status.textContent = textOf('form.opening');
      status.className = 'text-sm text-bmt-300';
      window.location.href = mailto;
      showToast(textOf('form.toast'));
      setTimeout(() => { status.textContent = ''; }, 5000);
    });

    $('#downloadProfile')?.addEventListener('click', () => {
      const a = document.createElement('a');
      a.href = './Abdalqader-Abueta-CV-2026.pdf';
      a.download = 'Abdalqader-Abueta-CV-2026.pdf';
      document.body.appendChild(a);
      a.click();
      a.remove();
      showToast(textOf('cv.toast'));
    });

    document.querySelectorAll('[data-copy-email]').forEach((button) => button.addEventListener('click', async () => {
      const email = button.dataset.copyEmail;
      try { await navigator.clipboard.writeText(email); showToast(`${email} ${textOf('copy.toast')}`); }
      catch { showToast(`Email: ${email}`); }
    }));
  }

  function init() {
    refreshIcons();
    const year = $('#year');
    if (year) year.textContent = new Date().getFullYear();
    buildFaceDots();
    setupMenuAndTheme();
    setupLanguageToggle();
    applyLanguage(currentLang, { silent: true });
    applyTheme(currentTheme, false);
    setupCubeNavigation();
    setupSocialLinks();
    setupProjectModal();
    setupBot();
    setupChat();
    setupContactForm();
    setActiveFace(activeIndex, { force: true, silent: true, noHash: true });
    refreshIcons();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();

  window.BioMechaTech = { primaryEmail, secondaryEmail, whatsapp, links, domain, goToFace, applyLanguage };
})();
