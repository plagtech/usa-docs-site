"use client";
import { useState, useRef } from "react";

const LANGUAGES = {
  en: { name: "English" },
  es: { name: "Español" },
  vi: { name: "Tiếng Việt" },
  ko: { name: "한국어" },
  zh: { name: "中文" },
  tl: { name: "Tagalog" },
};

const T = {
  en: {
    brand: "USA Docs",
    tagline: "We Help You Fill Out Immigration Forms",
    subtitle: "Answer simple questions. Get your forms ready to file.",
    notLawyers: "We are not lawyers. We do not give legal advice.",
    disclaimer: "Please Read Before You Start",
    disclaimerText: "USA Docs helps you fill out your own immigration forms. We are not lawyers. We are not immigration consultants. We do not tell you which form to file. We do not decide if you qualify for any benefit. You choose your own form. You provide your own information. You are responsible for everything you submit to USCIS. If you need legal help, please talk to an immigration lawyer.",
    disclaimerAccept: "I understand. This is a form-filling service, not legal advice.",
    continue: "Continue",
    pickForm: "Which form do you need?",
    pickFormSub: "Pick the form you want to fill out.",
    categories: { family: "Family", citizenship: "Citizenship", work: "Work Permit", travel: "Travel", renewal: "Renewal", daca: "DACA" },
    ourPrice: "Our Price",
    govFee: "USCIS Fee",
    govFeeNote: "You pay the USCIS fee separately, directly to the government.",
    typicalCost: "Others Charge",
    youSave: "You Save",
    whatYouGet: "What You Get",
    features: [
      "Simple questions in your language",
      "Your form filled out and ready to print",
      "List of documents you need to include",
      "Step-by-step filing instructions",
      "Fix mistakes before you file — no extra charge",
    ],
    seeForm: "See this form on USCIS.gov",
    startFilling: "Start Filling Out This Form",
    back: "Back",
    step: "Question",
    of: "of",
    next: "Next",
    previous: "Previous",
    select: "-- Choose one --",
    typeHere: "Type your answer here...",
    checkAnswers: "Check Your Answers",
    checkAnswersSub: "Make sure everything is correct before we prepare your form.",
    edit: "Change",
    prepareForm: "Prepare My Form",
    preparing: "Preparing your form...",
    almostDone: "This takes about 30 seconds.",
    done: "Your Form is Ready!",
    doneDesc: "Download your form below. Print it, sign it, and mail it to USCIS with your documents.",
    download: "Download My Form (PDF)",
    checklist: "Download Filing Checklist",
    goUSCIS: "Go to USCIS.gov to file online",
    doAnother: "Fill Out Another Form",
    footerLine1: "USA Docs is a document preparation service.",
    footerLine2: "We are not lawyers. We are not a government agency. We do not give legal advice.",
    footerCopy: "© 2026 USA Docs",
    safe: "Your information is private and secure.",
    helpPillar1: "You Choose",
    helpPillar1d: "You pick your form. You enter your info. You are in control.",
    helpPillar2: "Easy Questions",
    helpPillar2d: "We ask simple questions. We fill out the form for you.",
    helpPillar3: "Private & Safe",
    helpPillar3d: "Your information is protected. We never share it.",
    answerRequired: "Please answer this question to continue.",
    processing: "Processing time",
  },
  es: {
    brand: "USA Docs",
    tagline: "Le Ayudamos a Llenar Formularios de Inmigración",
    subtitle: "Responda preguntas simples. Obtenga sus formularios listos.",
    notLawyers: "No somos abogados. No damos asesoría legal.",
    disclaimer: "Por Favor Lea Antes de Comenzar",
    disclaimerText: "USA Docs le ayuda a llenar sus propios formularios de inmigración. No somos abogados. No somos consultores de inmigración. No le decimos qué formulario presentar. No decidimos si usted califica para algún beneficio. Usted elige su propio formulario. Usted proporciona su propia información. Usted es responsable de todo lo que envíe a USCIS. Si necesita ayuda legal, hable con un abogado de inmigración.",
    disclaimerAccept: "Entiendo. Este es un servicio para llenar formularios, no asesoría legal.",
    continue: "Continuar",
    pickForm: "¿Qué formulario necesita?",
    pickFormSub: "Elija el formulario que quiere llenar.",
    categories: { family: "Familia", citizenship: "Ciudadanía", work: "Permiso de Trabajo", travel: "Viaje", renewal: "Renovación", daca: "DACA" },
    ourPrice: "Nuestro Precio",
    govFee: "Tarifa de USCIS",
    govFeeNote: "Usted paga la tarifa de USCIS por separado, directamente al gobierno.",
    typicalCost: "Otros Cobran",
    youSave: "Usted Ahorra",
    whatYouGet: "Lo Que Recibe",
    features: [
      "Preguntas simples en su idioma",
      "Su formulario listo para imprimir",
      "Lista de documentos que necesita incluir",
      "Instrucciones paso a paso para enviar",
      "Corrija errores antes de enviar — sin cargo extra",
    ],
    seeForm: "Ver este formulario en USCIS.gov",
    startFilling: "Comenzar a Llenar Este Formulario",
    back: "Atrás",
    step: "Pregunta",
    of: "de",
    next: "Siguiente",
    previous: "Anterior",
    select: "-- Elija una --",
    typeHere: "Escriba su respuesta aquí...",
    checkAnswers: "Revise Sus Respuestas",
    checkAnswersSub: "Asegúrese de que todo esté correcto antes de preparar su formulario.",
    edit: "Cambiar",
    prepareForm: "Preparar Mi Formulario",
    preparing: "Preparando su formulario...",
    almostDone: "Esto toma unos 30 segundos.",
    done: "¡Su Formulario Está Listo!",
    doneDesc: "Descargue su formulario abajo. Imprímalo, fírmelo y envíelo a USCIS con sus documentos.",
    download: "Descargar Mi Formulario (PDF)",
    checklist: "Descargar Lista de Verificación",
    goUSCIS: "Ir a USCIS.gov para enviar en línea",
    doAnother: "Llenar Otro Formulario",
    footerLine1: "USA Docs es un servicio de preparación de documentos.",
    footerLine2: "No somos abogados. No somos una agencia del gobierno. No damos asesoría legal.",
    footerCopy: "© 2026 USA Docs",
    safe: "Su información es privada y segura.",
    helpPillar1: "Usted Elige",
    helpPillar1d: "Usted elige su formulario. Usted ingresa su información. Usted tiene el control.",
    helpPillar2: "Preguntas Fáciles",
    helpPillar2d: "Hacemos preguntas simples. Nosotros llenamos el formulario.",
    helpPillar3: "Privado y Seguro",
    helpPillar3d: "Su información está protegida. Nunca la compartimos.",
    answerRequired: "Por favor responda esta pregunta para continuar.",
    processing: "Tiempo de procesamiento",
  },
  vi: {
    brand: "USA Docs",
    tagline: "Chúng Tôi Giúp Bạn Điền Đơn Di Trú",
    subtitle: "Trả lời câu hỏi đơn giản. Nhận đơn sẵn sàng nộp.",
    notLawyers: "Chúng tôi không phải luật sư. Chúng tôi không tư vấn pháp lý.",
    disclaimer: "Vui Lòng Đọc Trước Khi Bắt Đầu",
    disclaimerText: "USA Docs giúp bạn tự điền đơn di trú. Chúng tôi không phải luật sư. Chúng tôi không phải tư vấn viên di trú. Chúng tôi không cho bạn biết nên nộp đơn nào. Chúng tôi không quyết định bạn có đủ điều kiện hay không. Bạn tự chọn đơn. Bạn tự cung cấp thông tin. Bạn chịu trách nhiệm về mọi thứ bạn gửi cho USCIS. Nếu bạn cần trợ giúp pháp lý, hãy nói chuyện với luật sư di trú.",
    disclaimerAccept: "Tôi hiểu. Đây là dịch vụ điền đơn, không phải tư vấn pháp lý.",
    continue: "Tiếp Tục",
    pickForm: "Bạn cần đơn nào?",
    pickFormSub: "Chọn đơn bạn muốn điền.",
    categories: { family: "Gia Đình", citizenship: "Quốc Tịch", work: "Giấy Phép Làm Việc", travel: "Du Lịch", renewal: "Gia Hạn", daca: "DACA" },
    ourPrice: "Giá Của Chúng Tôi",
    govFee: "Phí USCIS",
    govFeeNote: "Bạn trả phí USCIS riêng, trực tiếp cho chính phủ.",
    typicalCost: "Người Khác Thu",
    youSave: "Bạn Tiết Kiệm",
    whatYouGet: "Bạn Nhận Được",
    features: ["Câu hỏi đơn giản bằng ngôn ngữ của bạn", "Đơn điền sẵn sàng in", "Danh sách tài liệu cần kèm theo", "Hướng dẫn nộp đơn từng bước", "Sửa lỗi trước khi nộp — không phụ phí"],
    seeForm: "Xem đơn này trên USCIS.gov",
    startFilling: "Bắt Đầu Điền Đơn Này",
    back: "Quay Lại",
    step: "Câu Hỏi",
    of: "/",
    next: "Tiếp",
    previous: "Trước",
    select: "-- Chọn một --",
    typeHere: "Nhập câu trả lời...",
    checkAnswers: "Kiểm Tra Câu Trả Lời",
    checkAnswersSub: "Đảm bảo mọi thứ đúng trước khi chúng tôi chuẩn bị đơn.",
    edit: "Sửa",
    prepareForm: "Chuẩn Bị Đơn",
    preparing: "Đang chuẩn bị đơn...",
    almostDone: "Mất khoảng 30 giây.",
    done: "Đơn Của Bạn Đã Sẵn Sàng!",
    doneDesc: "Tải đơn bên dưới. In, ký tên, và gửi cho USCIS cùng tài liệu.",
    download: "Tải Đơn (PDF)",
    checklist: "Tải Danh Sách Kiểm Tra",
    goUSCIS: "Đến USCIS.gov để nộp trực tuyến",
    doAnother: "Điền Đơn Khác",
    footerLine1: "USA Docs là dịch vụ chuẩn bị tài liệu.",
    footerLine2: "Chúng tôi không phải luật sư. Không phải cơ quan chính phủ. Không tư vấn pháp lý.",
    footerCopy: "© 2026 USA Docs",
    safe: "Thông tin của bạn được bảo mật.",
    helpPillar1: "Bạn Chọn",
    helpPillar1d: "Bạn chọn đơn. Bạn nhập thông tin. Bạn kiểm soát.",
    helpPillar2: "Câu Hỏi Dễ",
    helpPillar2d: "Chúng tôi hỏi đơn giản. Chúng tôi điền đơn cho bạn.",
    helpPillar3: "Riêng Tư & An Toàn",
    helpPillar3d: "Thông tin được bảo vệ. Không bao giờ chia sẻ.",
    answerRequired: "Vui lòng trả lời câu hỏi này.",
    processing: "Thời gian xử lý",
  },
  ko: {
    brand: "USA Docs",
    tagline: "이민 서류 작성을 도와드립니다",
    subtitle: "간단한 질문에 답하세요. 서류를 준비해 드립니다.",
    notLawyers: "저희는 변호사가 아닙니다. 법률 자문을 제공하지 않습니다.",
    disclaimer: "시작하기 전에 읽어주세요",
    disclaimerText: "USA Docs는 이민 서류를 직접 작성하는 것을 도와줍니다. 저희는 변호사가 아닙니다. 이민 컨설턴트가 아닙니다. 어떤 양식을 제출해야 하는지 알려드리지 않습니다. 자격 여부를 결정하지 않습니다. 양식은 본인이 선택합니다. 정보는 본인이 제공합니다. USCIS에 제출하는 모든 것에 대한 책임은 본인에게 있습니다.",
    disclaimerAccept: "이해합니다. 이것은 서류 작성 서비스이며 법률 자문이 아닙니다.",
    continue: "계속",
    pickForm: "어떤 양식이 필요하세요?",
    pickFormSub: "작성할 양식을 선택하세요.",
    categories: { family: "가족", citizenship: "시민권", work: "취업 허가", travel: "여행", renewal: "갱신", daca: "DACA" },
    ourPrice: "서비스 비용",
    govFee: "USCIS 수수료",
    govFeeNote: "USCIS 수수료는 정부에 직접 별도로 지불합니다.",
    typicalCost: "다른 곳 비용",
    youSave: "절약 금액",
    whatYouGet: "제공 내용",
    features: ["귀하의 언어로 된 간단한 질문", "인쇄 가능한 완성 양식", "포함할 서류 목록", "단계별 제출 안내", "제출 전 수정 — 추가 비용 없음"],
    seeForm: "USCIS.gov에서 이 양식 보기",
    startFilling: "이 양식 작성 시작",
    back: "뒤로",
    step: "질문",
    of: "/",
    next: "다음",
    previous: "이전",
    select: "-- 선택 --",
    typeHere: "답변을 입력하세요...",
    checkAnswers: "답변 확인",
    checkAnswersSub: "양식 준비 전에 모든 내용이 맞는지 확인하세요.",
    edit: "수정",
    prepareForm: "양식 준비",
    preparing: "양식 준비 중...",
    almostDone: "약 30초 소요됩니다.",
    done: "양식이 준비되었습니다!",
    doneDesc: "아래에서 양식을 다운로드하세요. 인쇄하고 서명한 후 서류와 함께 USCIS에 보내세요.",
    download: "양식 다운로드 (PDF)",
    checklist: "체크리스트 다운로드",
    goUSCIS: "USCIS.gov에서 온라인 제출",
    doAnother: "다른 양식 작성",
    footerLine1: "USA Docs는 서류 준비 서비스입니다.",
    footerLine2: "변호사가 아닙니다. 정부 기관이 아닙니다. 법률 자문을 제공하지 않습니다.",
    footerCopy: "© 2026 USA Docs",
    safe: "귀하의 정보는 안전합니다.",
    helpPillar1: "본인이 선택",
    helpPillar1d: "양식 선택, 정보 입력 모두 본인이 합니다.",
    helpPillar2: "쉬운 질문",
    helpPillar2d: "간단한 질문을 하고 양식을 작성해 드립니다.",
    helpPillar3: "안전 보장",
    helpPillar3d: "정보는 보호되며 절대 공유하지 않습니다.",
    answerRequired: "계속하려면 이 질문에 답해주세요.",
    processing: "처리 시간",
  },
  zh: {
    brand: "USA Docs",
    tagline: "我们帮您填写移民表格",
    subtitle: "回答简单问题。获取准备好的表格。",
    notLawyers: "我们不是律师。我们不提供法律建议。",
    disclaimer: "开始前请阅读",
    disclaimerText: "USA Docs帮助您自己填写移民表格。我们不是律师。不是移民顾问。不告诉您该提交哪个表格。不决定您是否有资格。您自己选择表格。您自己提供信息。您对提交给USCIS的所有内容负责。如需法律帮助，请咨询移民律师。",
    disclaimerAccept: "我理解。这是表格填写服务，不是法律建议。",
    continue: "继续",
    pickForm: "您需要哪个表格？",
    pickFormSub: "选择您要填写的表格。",
    categories: { family: "家庭", citizenship: "公民身份", work: "工作许可", travel: "旅行", renewal: "续签", daca: "DACA" },
    ourPrice: "我们的价格",
    govFee: "USCIS费用",
    govFeeNote: "USCIS费用另付，直接交给政府。",
    typicalCost: "其他人收费",
    youSave: "您节省",
    whatYouGet: "您将获得",
    features: ["用您的语言提问简单问题", "填好的表格可直接打印", "需要的文件清单", "逐步提交说明", "提交前修改——不收额外费用"],
    seeForm: "在USCIS.gov查看此表格",
    startFilling: "开始填写此表格",
    back: "返回",
    step: "问题",
    of: "/",
    next: "下一步",
    previous: "上一步",
    select: "-- 请选择 --",
    typeHere: "在此输入答案...",
    checkAnswers: "检查您的回答",
    checkAnswersSub: "确保所有信息正确后再准备表格。",
    edit: "修改",
    prepareForm: "准备我的表格",
    preparing: "正在准备您的表格...",
    almostDone: "大约需要30秒。",
    done: "您的表格已准备好！",
    doneDesc: "下载表格。打印、签名，连同文件一起邮寄给USCIS。",
    download: "下载表格 (PDF)",
    checklist: "下载清单",
    goUSCIS: "前往USCIS.gov在线提交",
    doAnother: "填写其他表格",
    footerLine1: "USA Docs是文件准备服务。",
    footerLine2: "我们不是律师。不是政府机构。不提供法律建议。",
    footerCopy: "© 2026 USA Docs",
    safe: "您的信息是私密和安全的。",
    helpPillar1: "您来选择",
    helpPillar1d: "您选表格。您输入信息。由您掌控。",
    helpPillar2: "简单问题",
    helpPillar2d: "我们问简单问题。我们帮您填表。",
    helpPillar3: "私密安全",
    helpPillar3d: "信息受保护。绝不分享。",
    answerRequired: "请回答此问题以继续。",
    processing: "处理时间",
  },
  tl: {
    brand: "USA Docs",
    tagline: "Tumutulong Kami na Punan ang mga Form sa Imigrasyon",
    subtitle: "Sagutin ang mga simpleng tanong. Kunin ang iyong form na handa nang i-file.",
    notLawyers: "Hindi kami abogado. Hindi kami nagbibigay ng legal na payo.",
    disclaimer: "Basahin Bago Magsimula",
    disclaimerText: "Tinutulungan ka ng USA Docs na punan ang sarili mong immigration form. Hindi kami abogado. Hindi kami immigration consultant. Hindi namin sinasabi kung anong form ang i-file. Hindi namin pinagpapasyahan kung kwalipikado ka. Ikaw ang pumipili ng form. Ikaw ang nagbibigay ng impormasyon. Ikaw ang responsable sa lahat ng isinusumite mo sa USCIS. Kung kailangan mo ng legal na tulong, makipag-usap sa immigration lawyer.",
    disclaimerAccept: "Nauunawaan ko. Ito ay serbisyo sa pagpuno ng form, hindi legal na payo.",
    continue: "Magpatuloy",
    pickForm: "Anong form ang kailangan mo?",
    pickFormSub: "Piliin ang form na gusto mong punan.",
    categories: { family: "Pamilya", citizenship: "Pagkamamamayan", work: "Work Permit", travel: "Paglalakbay", renewal: "Pag-renew", daca: "DACA" },
    ourPrice: "Presyo Namin",
    govFee: "Bayad sa USCIS",
    govFeeNote: "Ang bayad sa USCIS ay hiwalay, direkta sa gobyerno.",
    typicalCost: "Sinisingil ng Iba",
    youSave: "Naiipon Mo",
    whatYouGet: "Makukuha Mo",
    features: ["Simpleng tanong sa wika mo", "Form na handa nang i-print", "Listahan ng mga kailangang dokumento", "Hakbang-hakbang na tagubilin sa pag-file", "Itama ang mga mali bago mag-file — walang dagdag na bayad"],
    seeForm: "Tingnan ang form na ito sa USCIS.gov",
    startFilling: "Simulan ang Pagpuno ng Form",
    back: "Bumalik",
    step: "Tanong",
    of: "ng",
    next: "Susunod",
    previous: "Nakaraan",
    select: "-- Pumili --",
    typeHere: "I-type ang sagot dito...",
    checkAnswers: "Suriin ang Mga Sagot",
    checkAnswersSub: "Siguraduhing tama ang lahat bago ihanda ang form.",
    edit: "Baguhin",
    prepareForm: "Ihanda ang Form Ko",
    preparing: "Inihahanda ang form...",
    almostDone: "Mga 30 segundo lang.",
    done: "Handa Na ang Form Mo!",
    doneDesc: "I-download ang form sa ibaba. I-print, pirmahan, at ipadala sa USCIS kasama ang mga dokumento.",
    download: "I-download ang Form (PDF)",
    checklist: "I-download ang Checklist",
    goUSCIS: "Pumunta sa USCIS.gov para mag-file online",
    doAnother: "Punan ang Ibang Form",
    footerLine1: "Ang USA Docs ay serbisyo sa paghahanda ng dokumento.",
    footerLine2: "Hindi kami abogado. Hindi kami ahensya ng gobyerno. Hindi kami nagbibigay ng legal na payo.",
    footerCopy: "© 2026 USA Docs",
    safe: "Ang impormasyon mo ay pribado at ligtas.",
    helpPillar1: "Ikaw ang Pumipili",
    helpPillar1d: "Ikaw ang pumipili ng form. Ikaw ang nag-input. Ikaw ang may kontrol.",
    helpPillar2: "Madaling Tanong",
    helpPillar2d: "Nagtatanong kami ng simple. Pinupunan namin ang form.",
    helpPillar3: "Pribado at Ligtas",
    helpPillar3d: "Protektado ang impormasyon mo. Hindi ibinabahagi.",
    answerRequired: "Sagutin ang tanong na ito para magpatuloy.",
    processing: "Oras ng pagproseso",
  },
};

const FORMS = [
  { id:"i130", number:"I-130", category:"family", icon:"👨‍👩‍👧‍👦",
    name:{en:"Petition for Alien Relative",es:"Petición para Familiar Extranjero",vi:"Đơn Bảo Lãnh Thân Nhân",ko:"외국인 친척 청원서",zh:"外籍亲属请愿书",tl:"Petisyon para sa Alien Relative"},
    desc:{en:"Bring a family member to the United States.",es:"Traer a un familiar a los Estados Unidos.",vi:"Đưa thành viên gia đình đến Hoa Kỳ.",ko:"가족을 미국으로 데려오기.",zh:"将家人带到美国。",tl:"Dalhin ang miyembro ng pamilya sa Estados Unidos."},
    govFee:675, ourFee:99, consultantFee:1500, processingTime:"12–24 mo", complexity:"medium",
    uscisUrl:"https://www.uscis.gov/i-130",
    questions:[
      {id:"petitioner_status",type:"select",options:["U.S. Citizen","Lawful Permanent Resident (Green Card Holder)"],
        label:{en:"Are you a U.S. citizen or a green card holder?",es:"¿Es usted ciudadano de EE.UU. o tiene tarjeta verde?",vi:"Bạn là công dân Mỹ hay có thẻ xanh?",ko:"미국 시민권자입니까 아니면 영주권자입니까?",zh:"您是美国公民还是绿卡持有者？",tl:"Ikaw ba ay U.S. citizen o may green card?"}},
      {id:"relationship",type:"select",options:["Husband / Wife","Father / Mother","Son / Daughter (under 21)","Son / Daughter (21 or older)","Brother / Sister"],
        label:{en:"Who are you bringing to the U.S.?",es:"¿A quién trae a EE.UU.?",vi:"Bạn bảo lãnh ai đến Mỹ?",ko:"누구를 미국으로 데려오시나요?",zh:"您要带谁来美国？",tl:"Sino ang dadalhin mo sa U.S.?"}},
      {id:"petitioner_name",type:"text",label:{en:"Your full name (as on your documents)",es:"Su nombre completo (como aparece en sus documentos)",vi:"Họ tên đầy đủ (theo giấy tờ)",ko:"전체 이름 (서류에 나오는 대로)",zh:"您的全名（与证件一致）",tl:"Buong pangalan mo (gaya sa dokumento)"}},
      {id:"petitioner_dob",type:"date",label:{en:"Your date of birth",es:"Su fecha de nacimiento",vi:"Ngày sinh của bạn",ko:"생년월일",zh:"出生日期",tl:"Petsa ng kapanganakan mo"}},
      {id:"petitioner_address",type:"text",label:{en:"Your U.S. address",es:"Su dirección en EE.UU.",vi:"Địa chỉ tại Mỹ",ko:"미국 주소",zh:"美国地址",tl:"Address mo sa U.S."}},
      {id:"beneficiary_name",type:"text",label:{en:"Full name of your family member",es:"Nombre completo de su familiar",vi:"Họ tên người thân",ko:"가족 구성원 전체 이름",zh:"家人全名",tl:"Buong pangalan ng family member mo"}},
      {id:"beneficiary_dob",type:"date",label:{en:"Their date of birth",es:"Fecha de nacimiento de ellos",vi:"Ngày sinh của họ",ko:"가족의 생년월일",zh:"他们的出生日期",tl:"Petsa ng kapanganakan nila"}},
      {id:"beneficiary_country",type:"text",label:{en:"Country where they were born",es:"País donde nació",vi:"Quốc gia nơi họ sinh",ko:"출생 국가",zh:"出生国家",tl:"Bansa kung saan sila ipinanganak"}},
    ]},
  { id:"n400", number:"N-400", category:"citizenship", icon:"🗽",
    name:{en:"Application for U.S. Citizenship",es:"Solicitud de Ciudadanía de EE.UU.",vi:"Đơn Xin Quốc Tịch Mỹ",ko:"미국 시민권 신청서",zh:"美国公民身份申请",tl:"Aplikasyon para sa U.S. Citizenship"},
    desc:{en:"Apply to become a United States citizen.",es:"Solicitar convertirse en ciudadano de EE.UU.",vi:"Nộp đơn trở thành công dân Mỹ.",ko:"미국 시민이 되기 위한 신청.",zh:"申请成为美国公民。",tl:"Mag-apply para maging U.S. citizen."},
    govFee:760, ourFee:129, consultantFee:1200, processingTime:"8–14 mo", complexity:"medium",
    uscisUrl:"https://www.uscis.gov/n-400",
    questions:[
      {id:"basis",type:"select",options:["I have had my green card for 5+ years","I have had my green card for 3+ years and am married to a U.S. citizen","I served in the U.S. military","Other"],
        label:{en:"Why do you believe you can apply? (Pick the one that fits you)",es:"¿Por qué cree que puede aplicar? (Elija la que le corresponda)",vi:"Tại sao bạn nghĩ mình có thể nộp đơn? (Chọn phù hợp)",ko:"신청 가능한 이유를 선택하세요",zh:"您为什么认为可以申请？（选择适合的）",tl:"Bakit sa tingin mo pwede kang mag-apply? (Piliin ang naaangkop)"}},
      {id:"legal_name",type:"text",label:{en:"Your full name",es:"Su nombre completo",vi:"Họ tên đầy đủ",ko:"전체 이름",zh:"全名",tl:"Buong pangalan mo"}},
      {id:"a_number",type:"text",label:{en:"Your A-Number (on the front of your green card)",es:"Su número A (en el frente de su tarjeta verde)",vi:"Số A (trên thẻ xanh)",ko:"A-넘버 (영주권 카드 앞면)",zh:"A号码（绿卡正面）",tl:"A-Number mo (sa harap ng green card)"}},
      {id:"dob",type:"date",label:{en:"Your date of birth",es:"Su fecha de nacimiento",vi:"Ngày sinh",ko:"생년월일",zh:"出生日期",tl:"Petsa ng kapanganakan"}},
      {id:"country_birth",type:"text",label:{en:"Country where you were born",es:"País donde nació",vi:"Quốc gia nơi bạn sinh",ko:"출생 국가",zh:"出生国家",tl:"Bansa kung saan ka ipinanganak"}},
      {id:"current_address",type:"text",label:{en:"Your home address",es:"Su dirección",vi:"Địa chỉ nhà",ko:"집 주소",zh:"家庭地址",tl:"Address ng bahay mo"}},
      {id:"green_card_date",type:"date",label:{en:"Date you got your green card",es:"Fecha en que obtuvo su tarjeta verde",vi:"Ngày bạn nhận thẻ xanh",ko:"영주권 취득 날짜",zh:"获得绿卡日期",tl:"Petsa kung kailan mo nakuha ang green card"}},
      {id:"marital_status",type:"select",options:["Single","Married","Divorced","Widowed"],
        label:{en:"Are you married?",es:"¿Está casado/a?",vi:"Bạn đã kết hôn chưa?",ko:"결혼 여부",zh:"婚姻状况",tl:"Kasal ka ba?"}},
    ]},
  { id:"i485", number:"I-485", category:"family", icon:"🏡",
    name:{en:"Apply for a Green Card (while in U.S.)",es:"Solicitar Tarjeta Verde (dentro de EE.UU.)",vi:"Xin Thẻ Xanh (tại Mỹ)",ko:"영주권 신청 (미국 내)",zh:"申请绿卡（在美国境内）",tl:"Mag-apply ng Green Card (habang nasa U.S.)"},
    desc:{en:"Apply for a green card without leaving the country.",es:"Solicitar tarjeta verde sin salir del país.",vi:"Xin thẻ xanh mà không cần rời khỏi nước.",ko:"미국을 떠나지 않고 영주권 신청.",zh:"不离开美国申请绿卡。",tl:"Mag-apply ng green card nang hindi umaalis."},
    govFee:1440, ourFee:149, consultantFee:2000, processingTime:"12–36 mo", complexity:"high",
    uscisUrl:"https://www.uscis.gov/i-485",
    questions:[
      {id:"basis",type:"select",options:["My I-130 family petition was approved","My employer filed an I-140 for me","Diversity Visa Lottery","Asylee or Refugee","Other"],
        label:{en:"Why are you applying for a green card? (Pick what fits you)",es:"¿Por qué solicita tarjeta verde? (Elija lo que aplica)",vi:"Tại sao bạn xin thẻ xanh? (Chọn phù hợp)",ko:"영주권 신청 사유를 선택하세요",zh:"为什么申请绿卡？（选择适合的）",tl:"Bakit ka nag-a-apply ng green card? (Piliin ang naaangkop)"}},
      {id:"legal_name",type:"text",label:{en:"Your full name",es:"Su nombre completo",vi:"Họ tên đầy đủ",ko:"전체 이름",zh:"全名",tl:"Buong pangalan mo"}},
      {id:"dob",type:"date",label:{en:"Your date of birth",es:"Fecha de nacimiento",vi:"Ngày sinh",ko:"생년월일",zh:"出生日期",tl:"Petsa ng kapanganakan"}},
      {id:"country_birth",type:"text",label:{en:"Country where you were born",es:"País donde nació",vi:"Quốc gia nơi sinh",ko:"출생 국가",zh:"出生国家",tl:"Bansa kung saan ka ipinanganak"}},
      {id:"entry_date",type:"date",label:{en:"When did you last enter the United States?",es:"¿Cuándo entró por última vez a EE.UU.?",vi:"Lần cuối bạn vào Mỹ khi nào?",ko:"마지막으로 미국에 입국한 날짜",zh:"最后一次进入美国的日期",tl:"Kailan ka huling pumasok sa U.S.?"}},
      {id:"address",type:"text",label:{en:"Your U.S. address",es:"Su dirección en EE.UU.",vi:"Địa chỉ tại Mỹ",ko:"미국 주소",zh:"美国地址",tl:"Address mo sa U.S."}},
    ]},
  { id:"i765", number:"I-765", category:"work", icon:"💼",
    name:{en:"Work Permit (EAD)",es:"Permiso de Trabajo (EAD)",vi:"Giấy Phép Làm Việc (EAD)",ko:"취업 허가서 (EAD)",zh:"工作许可 (EAD)",tl:"Work Permit (EAD)"},
    desc:{en:"Get permission to work in the United States.",es:"Obtener permiso para trabajar en EE.UU.",vi:"Xin phép làm việc tại Mỹ.",ko:"미국에서 일할 수 있는 허가 취득.",zh:"获得在美国工作的许可。",tl:"Kumuha ng permiso para magtrabaho sa U.S."},
    govFee:520, ourFee:79, consultantFee:800, processingTime:"3–7 mo", complexity:"low",
    uscisUrl:"https://www.uscis.gov/i-765",
    questions:[
      {id:"reason",type:"select",options:["First time getting a work permit","Renewing my work permit","Replacing a lost or stolen card"],
        label:{en:"What do you need?",es:"¿Qué necesita?",vi:"Bạn cần gì?",ko:"무엇이 필요하세요?",zh:"您需要什么？",tl:"Ano ang kailangan mo?"}},
      {id:"legal_name",type:"text",label:{en:"Your full name",es:"Su nombre completo",vi:"Họ tên",ko:"전체 이름",zh:"全名",tl:"Buong pangalan"}},
      {id:"dob",type:"date",label:{en:"Your date of birth",es:"Fecha de nacimiento",vi:"Ngày sinh",ko:"생년월일",zh:"出生日期",tl:"Petsa ng kapanganakan"}},
      {id:"country_birth",type:"text",label:{en:"Country where you were born",es:"País donde nació",vi:"Quốc gia nơi sinh",ko:"출생 국가",zh:"出生国家",tl:"Bansa kung saan ka ipinanganak"}},
      {id:"address",type:"text",label:{en:"Your U.S. address",es:"Su dirección en EE.UU.",vi:"Địa chỉ tại Mỹ",ko:"미국 주소",zh:"美国地址",tl:"Address mo sa U.S."}},
    ]},
  { id:"i821d", number:"I-821D", category:"daca", icon:"🎓",
    name:{en:"DACA Renewal",es:"Renovación de DACA",vi:"Gia Hạn DACA",ko:"DACA 갱신",zh:"DACA续期",tl:"DACA Renewal"},
    desc:{en:"Renew your DACA status and work permit.",es:"Renovar su estatus DACA y permiso de trabajo.",vi:"Gia hạn tình trạng DACA và giấy phép làm việc.",ko:"DACA 상태 및 취업 허가 갱신.",zh:"续期DACA身份和工作许可。",tl:"I-renew ang DACA status at work permit mo."},
    govFee:495, ourFee:89, consultantFee:1000, processingTime:"2–8 mo", complexity:"medium",
    uscisUrl:"https://www.uscis.gov/i-821d",
    questions:[
      {id:"previous_daca",type:"select",options:["Yes — I am renewing","No — This is my first time"],
        label:{en:"Have you had DACA before?",es:"¿Ha tenido DACA antes?",vi:"Bạn đã có DACA trước đây chưa?",ko:"이전에 DACA를 받은 적이 있나요?",zh:"您之前有DACA吗？",tl:"Nagkaroon ka na ba ng DACA dati?"}},
      {id:"legal_name",type:"text",label:{en:"Your full name",es:"Su nombre completo",vi:"Họ tên",ko:"전체 이름",zh:"全名",tl:"Buong pangalan"}},
      {id:"a_number",type:"text",label:{en:"Your A-Number",es:"Su número A",vi:"Số A",ko:"A-넘버",zh:"A号码",tl:"A-Number mo"}},
      {id:"dob",type:"date",label:{en:"Your date of birth",es:"Fecha de nacimiento",vi:"Ngày sinh",ko:"생년월일",zh:"出生日期",tl:"Petsa ng kapanganakan"}},
      {id:"country_birth",type:"text",label:{en:"Country where you were born",es:"País donde nació",vi:"Quốc gia nơi sinh",ko:"출생 국가",zh:"出生国家",tl:"Bansa kung saan ka ipinanganak"}},
      {id:"address",type:"text",label:{en:"Your address",es:"Su dirección",vi:"Địa chỉ",ko:"주소",zh:"地址",tl:"Address mo"}},
    ]},
  { id:"i90", number:"I-90", category:"renewal", icon:"🪪",
    name:{en:"Renew or Replace Green Card",es:"Renovar o Reemplazar Tarjeta Verde",vi:"Gia Hạn hoặc Thay Thẻ Xanh",ko:"영주권 카드 갱신/교체",zh:"更新或更换绿卡",tl:"I-renew o Palitan ang Green Card"},
    desc:{en:"Get a new green card if yours expired, was lost, or was stolen.",es:"Obtener una nueva tarjeta verde si la suya expiró, se perdió o fue robada.",vi:"Lấy thẻ xanh mới nếu hết hạn, mất hoặc bị đánh cắp.",ko:"만료, 분실, 도난된 영주권 카드 교체.",zh:"绿卡过期、丢失或被盗时获取新卡。",tl:"Kumuha ng bagong green card kung expired, nawala, o ninakaw."},
    govFee:465, ourFee:49, consultantFee:500, processingTime:"6–18 mo", complexity:"low",
    uscisUrl:"https://www.uscis.gov/i-90",
    questions:[
      {id:"reason",type:"select",options:["My card expired or will expire soon","My card was lost or stolen","My name or other information changed","I never received my card"],
        label:{en:"Why do you need a new green card?",es:"¿Por qué necesita una nueva tarjeta verde?",vi:"Tại sao bạn cần thẻ xanh mới?",ko:"새 영주권 카드가 필요한 이유는?",zh:"为什么需要新绿卡？",tl:"Bakit kailangan mo ng bagong green card?"}},
      {id:"legal_name",type:"text",label:{en:"Your full name (as on your card)",es:"Su nombre completo (como en su tarjeta)",vi:"Họ tên (theo thẻ)",ko:"전체 이름 (카드에 나오는 대로)",zh:"全名（与卡片一致）",tl:"Buong pangalan mo (gaya sa card)"}},
      {id:"a_number",type:"text",label:{en:"Your A-Number",es:"Su número A",vi:"Số A",ko:"A-넘버",zh:"A号码",tl:"A-Number mo"}},
      {id:"dob",type:"date",label:{en:"Your date of birth",es:"Fecha de nacimiento",vi:"Ngày sinh",ko:"생년월일",zh:"出生日期",tl:"Petsa ng kapanganakan"}},
      {id:"address",type:"text",label:{en:"Your address",es:"Su dirección",vi:"Địa chỉ",ko:"주소",zh:"地址",tl:"Address mo"}},
    ]},
  { id:"i751", number:"I-751", category:"family", icon:"💍",
    name:{en:"Remove Conditions on Green Card",es:"Remover Condiciones de Tarjeta Verde",vi:"Gỡ Điều Kiện Thẻ Xanh",ko:"영주권 조건 해제",zh:"取消绿卡条件",tl:"Alisin ang Kondisyon sa Green Card"},
    desc:{en:"Remove the 2-year condition on your green card (usually after marriage).",es:"Remover la condición de 2 años de su tarjeta verde (generalmente después del matrimonio).",vi:"Gỡ điều kiện 2 năm trên thẻ xanh (thường sau kết hôn).",ko:"영주권의 2년 조건 해제 (보통 결혼 후).",zh:"取消绿卡上的2年条件（通常在结婚后）。",tl:"Alisin ang 2-year na kondisyon sa green card mo (kadalasan pagkatapos ng kasal)."},
    govFee:750, ourFee:99, consultantFee:1200, processingTime:"18–30 mo", complexity:"medium",
    uscisUrl:"https://www.uscis.gov/i-751",
    questions:[
      {id:"filing_type",type:"select",options:["Together with my husband/wife","Alone — we are divorced","Alone — there was abuse","Alone — extreme hardship"],
        label:{en:"Are you filing with your husband/wife, or alone?",es:"¿Presenta con su esposo/a o solo/a?",vi:"Bạn nộp cùng vợ/chồng hay một mình?",ko:"배우자와 함께 제출하나요, 혼자 하나요?",zh:"您和配偶一起提交还是单独提交？",tl:"Kasama ba ang asawa mo o mag-isa?"}},
      {id:"legal_name",type:"text",label:{en:"Your full name",es:"Su nombre completo",vi:"Họ tên",ko:"전체 이름",zh:"全名",tl:"Buong pangalan"}},
      {id:"a_number",type:"text",label:{en:"Your A-Number",es:"Su número A",vi:"Số A",ko:"A-넘버",zh:"A号码",tl:"A-Number mo"}},
      {id:"card_expiration",type:"date",label:{en:"When does your green card expire?",es:"¿Cuándo expira su tarjeta verde?",vi:"Thẻ xanh hết hạn khi nào?",ko:"영주권 만료일은?",zh:"绿卡什么时候到期？",tl:"Kailan mag-e-expire ang green card mo?"}},
      {id:"spouse_name",type:"text",label:{en:"Your husband/wife's full name",es:"Nombre completo de su esposo/a",vi:"Họ tên vợ/chồng",ko:"배우자 전체 이름",zh:"配偶全名",tl:"Buong pangalan ng asawa mo"}},
      {id:"marriage_date",type:"date",label:{en:"Date you got married",es:"Fecha de matrimonio",vi:"Ngày kết hôn",ko:"결혼 날짜",zh:"结婚日期",tl:"Petsa ng kasal"}},
    ]},
  { id:"i131", number:"I-131", category:"travel", icon:"✈️",
    name:{en:"Travel Document",es:"Documento de Viaje",vi:"Giấy Phép Đi Lại",ko:"여행 서류",zh:"旅行证件",tl:"Travel Document"},
    desc:{en:"Get permission to travel outside the U.S. and come back.",es:"Obtener permiso para viajar fuera de EE.UU. y regresar.",vi:"Xin phép đi du lịch nước ngoài và quay lại.",ko:"미국 밖으로 여행하고 돌아올 수 있는 허가.",zh:"获得出国旅行并返回的许可。",tl:"Kumuha ng permiso para maglakbay at bumalik."},
    govFee:630, ourFee:79, consultantFee:700, processingTime:"3–10 mo", complexity:"medium",
    uscisUrl:"https://www.uscis.gov/i-131",
    questions:[
      {id:"document_type",type:"select",options:["Advance Parole (I have a pending green card application)","Reentry Permit (I have a green card and will be away a long time)","Refugee Travel Document"],
        label:{en:"Which travel document do you need? (Pick what fits your situation)",es:"¿Qué documento de viaje necesita? (Elija el que aplica)",vi:"Bạn cần giấy tờ du lịch nào? (Chọn phù hợp)",ko:"어떤 여행 서류가 필요하세요?",zh:"您需要哪种旅行证件？",tl:"Anong travel document ang kailangan mo?"}},
      {id:"legal_name",type:"text",label:{en:"Your full name",es:"Su nombre completo",vi:"Họ tên",ko:"전체 이름",zh:"全名",tl:"Buong pangalan"}},
      {id:"dob",type:"date",label:{en:"Your date of birth",es:"Fecha de nacimiento",vi:"Ngày sinh",ko:"생년월일",zh:"出生日期",tl:"Petsa ng kapanganakan"}},
      {id:"country_birth",type:"text",label:{en:"Country where you were born",es:"País donde nació",vi:"Quốc gia nơi sinh",ko:"출생 국가",zh:"出生国家",tl:"Bansa kung saan ka ipinanganak"}},
      {id:"travel_plans",type:"text",label:{en:"Where do you want to travel?",es:"¿A dónde quiere viajar?",vi:"Bạn muốn đi đâu?",ko:"어디로 여행하시나요?",zh:"您想去哪里旅行？",tl:"Saan mo gustong maglakbay?"}},
    ]},
  { id:"i129f", number:"I-129F", category:"family", icon:"💌",
    name:{en:"Fiancé(e) Visa (K-1)",es:"Visa de Prometido/a (K-1)",vi:"Visa Hôn Phu/Thê (K-1)",ko:"약혼자 비자 (K-1)",zh:"未婚夫/妻签证 (K-1)",tl:"Fiancé(e) Visa (K-1)"},
    desc:{en:"Bring your fiancé(e) to the U.S. to get married.",es:"Traer a su prometido/a a EE.UU. para casarse.",vi:"Đưa hôn phu/thê đến Mỹ để kết hôn.",ko:"약혼자를 미국으로 데려와 결혼.",zh:"将未婚夫/妻带到美国结婚。",tl:"Dalhin ang fiancé(e) mo sa U.S. para ikasal."},
    govFee:675, ourFee:99, consultantFee:1500, processingTime:"7–10 mo", complexity:"medium",
    uscisUrl:"https://www.uscis.gov/i-129f",
    questions:[
      {id:"petitioner_name",type:"text",label:{en:"Your full name",es:"Su nombre completo",vi:"Họ tên của bạn",ko:"전체 이름",zh:"您的全名",tl:"Buong pangalan mo"}},
      {id:"fiance_name",type:"text",label:{en:"Your fiancé(e)'s full name",es:"Nombre completo de su prometido/a",vi:"Họ tên hôn phu/thê",ko:"약혼자 전체 이름",zh:"未婚夫/妻全名",tl:"Buong pangalan ng fiancé(e) mo"}},
      {id:"fiance_country",type:"text",label:{en:"Country where your fiancé(e) was born",es:"País donde nació su prometido/a",vi:"Quốc gia nơi hôn phu/thê sinh",ko:"약혼자 출생 국가",zh:"未婚夫/妻出生国家",tl:"Bansa kung saan ipinanganak ang fiancé(e) mo"}},
      {id:"met_in_person",type:"select",options:["Yes","No"],
        label:{en:"Have you met in person in the last 2 years?",es:"¿Se han conocido en persona en los últimos 2 años?",vi:"Bạn đã gặp nhau trực tiếp trong 2 năm qua chưa?",ko:"지난 2년 내에 직접 만난 적이 있나요?",zh:"过去2年内见过面吗？",tl:"Nagkita ba kayo nang personal sa nakaraang 2 taon?"}},
      {id:"petitioner_address",type:"text",label:{en:"Your U.S. address",es:"Su dirección en EE.UU.",vi:"Địa chỉ tại Mỹ",ko:"미국 주소",zh:"美国地址",tl:"Address mo sa U.S."}},
    ]},
];

const css = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap');
*{margin:0;padding:0;box-sizing:border-box}
:root{
  --bg:#FAFBFC;--card:#FFFFFF;--elevated:#F3F5F7;--border:#E2E6EB;
  --text:#1A1D23;--text2:#4A5162;--muted:#8892A4;
  --blue:#1B65F5;--blue-light:#EBF1FE;--blue-dark:#0F3D99;
  --green:#0D9B5C;--green-light:#E8F7F0;
  --amber:#C17B0E;--amber-light:#FEF5E7;
  --red:#D93025;--red-light:#FDECEA;
  --display:'Plus Jakarta Sans',sans-serif;--body:'DM Sans',sans-serif;
  --shadow:0 1px 3px rgba(0,0,0,0.06),0 1px 2px rgba(0,0,0,0.04);
  --shadow-md:0 4px 12px rgba(0,0,0,0.08);
  --shadow-lg:0 12px 32px rgba(0,0,0,0.1);
  --radius:12px;
}
body{font-family:var(--body);background:var(--bg);color:var(--text)}

.app{min-height:100vh}

/* NAV */
.nav{display:flex;justify-content:space-between;align-items:center;padding:14px 24px;background:white;border-bottom:1px solid var(--border);position:sticky;top:0;z-index:100}
.nav-left{display:flex;align-items:center;gap:12px}
.brand{font-family:var(--display);font-size:20px;font-weight:800;color:var(--blue);cursor:pointer;letter-spacing:-.5px}
.not-lawyers{font-size:10px;color:var(--muted);background:var(--elevated);padding:4px 10px;border-radius:20px;border:1px solid var(--border);white-space:nowrap}
.lang-bar{display:flex;gap:1px;background:var(--elevated);padding:3px;border-radius:10px;border:1px solid var(--border);flex-wrap:wrap}
.lb{background:none;border:none;padding:5px 10px;border-radius:7px;cursor:pointer;font-size:12px;transition:all .15s;font-family:var(--body);color:var(--muted);font-weight:500;white-space:nowrap}
.lb:hover{background:white;color:var(--text)}
.lb.on{background:var(--blue);color:white;box-shadow:var(--shadow)}

/* HERO */
.hero{text-align:center;padding:64px 24px 40px;max-width:680px;margin:0 auto}
.hero h1{font-family:var(--display);font-size:clamp(28px,4.5vw,44px);font-weight:800;color:var(--text);line-height:1.2;margin-bottom:12px}
.hero p{font-size:16px;color:var(--text2);max-width:480px;margin:0 auto 28px;line-height:1.6}
.cta{display:inline-flex;align-items:center;gap:8px;background:var(--blue);color:white;border:none;padding:14px 28px;border-radius:var(--radius);font-size:15px;font-weight:600;cursor:pointer;font-family:var(--body);box-shadow:var(--shadow-md);transition:all .2s}
.cta:hover{background:var(--blue-dark);transform:translateY(-1px);box-shadow:var(--shadow-lg)}

/* PILLARS */
.pillars{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;max-width:700px;margin:0 auto 56px;padding:0 24px}
.pill{text-align:center;padding:24px 16px;border-radius:var(--radius);background:var(--card);border:1px solid var(--border);box-shadow:var(--shadow)}
.pill-icon{font-size:24px;margin-bottom:8px}
.pill h3{font-size:14px;font-weight:700;margin-bottom:4px;color:var(--text)}
.pill p{font-size:12px;color:var(--muted);line-height:1.5}

/* FORMS SECTION */
.section{max-width:1000px;margin:0 auto;padding:0 24px 64px}
.sec-title{font-family:var(--display);font-size:24px;font-weight:800;text-align:center;margin-bottom:6px}
.sec-sub{text-align:center;color:var(--muted);font-size:14px;margin-bottom:28px}
.tabs{display:flex;justify-content:center;gap:6px;flex-wrap:wrap;margin-bottom:24px}
.tab{padding:7px 16px;border-radius:20px;border:1px solid var(--border);background:var(--card);color:var(--text2);font-size:13px;cursor:pointer;font-family:var(--body);transition:all .15s;font-weight:500}
.tab:hover{border-color:var(--blue);color:var(--blue)}
.tab.on{background:var(--blue);color:white;border-color:var(--blue)}

.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(290px,1fr));gap:16px}
.fcard{background:var(--card);border:1px solid var(--border);border-radius:var(--radius);padding:20px;cursor:pointer;transition:all .2s;box-shadow:var(--shadow)}
.fcard:hover{border-color:var(--blue);box-shadow:var(--shadow-lg);transform:translateY(-3px)}
.fcard-top{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px}
.fcard-icon{font-size:28px}
.fcard-num{font-size:11px;color:var(--blue);background:var(--blue-light);padding:3px 9px;border-radius:6px;font-weight:600}
.fcard h3{font-size:15px;font-weight:600;margin-bottom:4px;line-height:1.3}
.fcard p{font-size:12px;color:var(--muted);line-height:1.5;margin-bottom:14px}
.fcard-bottom{display:flex;justify-content:space-between;align-items:center}
.fcard-price{font-size:22px;font-weight:700;color:var(--green)}
.fcard-price span{font-size:11px;color:var(--muted);font-weight:400;display:block}
.complexity{font-size:10px;padding:3px 9px;border-radius:6px;font-weight:600;text-transform:uppercase;letter-spacing:.3px}
.c-low{background:var(--green-light);color:var(--green)}
.c-medium{background:var(--amber-light);color:var(--amber)}
.c-high{background:var(--red-light);color:var(--red)}

/* MODAL */
.overlay{position:fixed;inset:0;background:rgba(0,0,0,0.5);display:flex;align-items:center;justify-content:center;z-index:1000;padding:24px}
.modal{background:var(--card);border-radius:16px;max-width:540px;width:100%;padding:36px;box-shadow:var(--shadow-lg);max-height:90vh;overflow-y:auto}
.modal-warn{display:inline-flex;align-items:center;gap:8px;background:var(--amber-light);color:var(--amber);font-size:13px;font-weight:600;padding:6px 14px;border-radius:8px;margin-bottom:16px}
.modal h2{font-family:var(--display);font-size:20px;font-weight:700;margin-bottom:16px}
.modal-body{font-size:14px;color:var(--text2);line-height:1.8;margin-bottom:24px;padding:16px;background:var(--elevated);border-radius:10px;border:1px solid var(--border)}
.chk-row{display:flex;align-items:flex-start;gap:10px;margin-bottom:20px;cursor:pointer}
.chk-row input{width:18px;height:18px;margin-top:2px;accent-color:var(--blue);flex-shrink:0}
.chk-row label{font-size:13px;color:var(--text);cursor:pointer;line-height:1.5;font-weight:500}
.modal-btn{width:100%;padding:13px;border-radius:var(--radius);border:none;font-size:14px;font-weight:600;cursor:pointer;font-family:var(--body);background:var(--blue);color:white;transition:all .15s}
.modal-btn:disabled{opacity:.35;cursor:not-allowed}
.modal-btn:not(:disabled):hover{background:var(--blue-dark)}

/* DETAIL */
.detail{max-width:700px;margin:0 auto;padding:32px 24px 64px}
.back{display:inline-flex;align-items:center;gap:5px;background:none;border:none;color:var(--muted);font-size:13px;cursor:pointer;font-family:var(--body);margin-bottom:20px;padding:6px 0}
.back:hover{color:var(--blue)}
.det-head{display:flex;gap:16px;align-items:flex-start;margin-bottom:28px}
.det-icon{font-size:40px}
.det-head h1{font-family:var(--display);font-size:24px;font-weight:700;margin-bottom:2px}
.det-head .num{color:var(--blue);font-size:13px;font-weight:500}

.costs{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:20px}
.cost{padding:16px;border-radius:var(--radius);text-align:center;border:1px solid var(--border);background:var(--card);box-shadow:var(--shadow)}
.cost.ours{border-color:var(--blue);background:var(--blue-light)}
.cost-label{font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;font-weight:600;margin-bottom:6px}
.cost-amt{font-family:var(--display);font-size:26px;font-weight:700}
.cost.ours .cost-amt{color:var(--green)}
.cost:not(.ours) .cost-amt{color:var(--text2)}
.cost-note{font-size:10px;color:var(--muted);margin-top:2px}

.gov-note{text-align:center;font-size:12px;color:var(--muted);margin-bottom:28px;padding:10px 16px;background:var(--elevated);border-radius:8px;border:1px solid var(--border)}
.gov-note strong{color:var(--text2)}

.feat-box{background:var(--card);border:1px solid var(--border);border-radius:var(--radius);padding:20px;margin-bottom:24px;box-shadow:var(--shadow)}
.feat-box h3{font-size:15px;font-weight:600;margin-bottom:12px}
.feat{display:flex;align-items:center;gap:9px;padding:6px 0;font-size:13px;color:var(--text2)}
.feat-chk{color:var(--green);font-weight:700;font-size:15px;flex-shrink:0}

.uscis-link{display:block;text-align:center;color:var(--blue);font-size:12px;margin-bottom:20px;text-decoration:none}
.uscis-link:hover{text-decoration:underline}

.go-btn{width:100%;padding:14px;border-radius:var(--radius);border:none;font-size:15px;font-weight:600;cursor:pointer;font-family:var(--body);background:var(--blue);color:white;box-shadow:var(--shadow-md);transition:all .2s}
.go-btn:hover{background:var(--blue-dark);box-shadow:var(--shadow-lg)}

/* INTERVIEW */
.interview{max-width:580px;margin:0 auto;padding:32px 24px 64px}
.pbar{width:100%;height:5px;background:var(--elevated);border-radius:5px;margin-bottom:10px;overflow:hidden}
.pfill{height:100%;background:var(--blue);border-radius:5px;transition:width .35s ease}
.ptext{font-size:12px;color:var(--muted);margin-bottom:24px}

.qcard{background:var(--card);border:1px solid var(--border);border-radius:var(--radius);padding:28px;margin-bottom:20px;box-shadow:var(--shadow)}
.qcard label{display:block;font-size:15px;font-weight:500;margin-bottom:14px;line-height:1.5}
.qcard input,.qcard select{width:100%;padding:12px 14px;border-radius:8px;border:1px solid var(--border);background:var(--bg);color:var(--text);font-size:14px;font-family:var(--body);outline:none;transition:border-color .15s}
.qcard input:focus,.qcard select:focus{border-color:var(--blue)}
.qcard select option{background:var(--card)}

.inav{display:flex;gap:10px}
.inav button{flex:1;padding:12px;border-radius:10px;border:none;font-size:14px;font-weight:600;cursor:pointer;font-family:var(--body);transition:all .15s}
.btn2{background:var(--elevated);color:var(--text2);border:1px solid var(--border)!important}
.btn2:hover{background:var(--border)}
.btn1{background:var(--blue);color:white}
.btn1:hover{background:var(--blue-dark)}
.btn1:disabled{opacity:.35;cursor:not-allowed}

/* REVIEW */
.rcard{background:var(--card);border:1px solid var(--border);border-radius:10px;padding:14px 18px;margin-bottom:6px;display:flex;justify-content:space-between;align-items:center;box-shadow:var(--shadow)}
.rlabel{font-size:11px;color:var(--muted);margin-bottom:1px}
.rval{font-size:13px;font-weight:500}
.redit{background:none;border:none;color:var(--blue);font-size:11px;cursor:pointer;font-family:var(--body);font-weight:500}
.redit:hover{text-decoration:underline}

/* COMPLETE */
.done-view{max-width:560px;margin:0 auto;padding:56px 24px 64px;text-align:center}
.done-icon{font-size:56px;margin-bottom:16px}
.done-view h1{font-family:var(--display);font-size:28px;font-weight:700;margin-bottom:10px}
.done-view p{color:var(--text2);margin-bottom:28px;font-size:14px;line-height:1.6}
.done-actions{display:flex;flex-direction:column;gap:10px;max-width:360px;margin:0 auto}
.dbtn{padding:13px 20px;border-radius:var(--radius);border:none;font-size:14px;font-weight:600;cursor:pointer;font-family:var(--body);transition:all .15s;display:flex;align-items:center;justify-content:center;gap:8px}

/* LOADING */
.load{max-width:360px;margin:0 auto;padding:100px 24px;text-align:center}
.spin{width:40px;height:40px;border:3px solid var(--border);border-top-color:var(--blue);border-radius:50%;animation:sp .7s linear infinite;margin:0 auto 20px}
@keyframes sp{to{transform:rotate(360deg)}}

/* FOOTER */
.foot{text-align:center;padding:28px 24px;border-top:1px solid var(--border);max-width:700px;margin:0 auto}
.foot-warn{background:var(--amber-light);border:1px solid #F5DEB3;border-radius:8px;padding:10px 16px;margin-bottom:8px}
.foot-warn p{font-size:11px;color:var(--amber);line-height:1.5;font-weight:500}
.foot p{font-size:11px;color:var(--muted)}

.safe-badge{display:inline-flex;align-items:center;gap:5px;font-size:11px;color:var(--green);background:var(--green-light);padding:4px 12px;border-radius:20px;margin-bottom:20px;font-weight:500}

@media(max-width:600px){
  .costs{grid-template-columns:1fr}
  .pillars{grid-template-columns:1fr}
  .det-head{flex-direction:column}
  .nav{padding:10px 14px;flex-wrap:wrap;gap:8px}
  .hero{padding:40px 16px 28px}
  .grid{grid-template-columns:1fr}
  .not-lawyers{display:none}
}
`;

export default function USADocs() {
  const [lang, setLang] = useState("en");
  const [accepted, setAccepted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [checked, setChecked] = useState(false);
  const [cat, setCat] = useState("all");
  const [form, setForm] = useState(null);
  const [view, setView] = useState("home");
  const [qIdx, setQIdx] = useState(0);
  const [ans, setAns] = useState({});
  const formRef = useRef(null);
  const t = T[lang] || T.en;
  const API_URL = "https://usa-docs-api-production.up.railway.app";

  const getName = (f) => f.name[lang] || f.name.en;
  const getDesc = (f) => f.desc[lang] || f.desc.en;
  const getLabel = (q) => q.label[lang] || q.label.en;
  const filtered = cat === "all" ? FORMS : FORMS.filter((f) => f.category === cat);

  const pickForm = (f) => {
    setForm(f);
    if (!accepted) { setShowModal(true); } else { setView("detail"); window.scrollTo(0,0); }
  };
  const acceptDisclaimer = () => { setAccepted(true); setShowModal(false); setView("detail"); window.scrollTo(0,0); };
  const startInterview = () => { setQIdx(0); setAns({}); setView("interview"); window.scrollTo(0,0); };
  const reset = () => { setForm(null); setView("home"); setQIdx(0); setAns({}); };

  // Redirect to Stripe Checkout
  const goToCheckout = async () => {
    setView("loading");
    try {
      const res = await fetch(`${API_URL}/api/checkout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formId: form.id,
          formNumber: form.number,
          formName: getName(form),
          customerEmail: ans.petitioner_email || ans.email || null,
        }),
      });
      const data = await res.json();
      if (data.url) {
        window.open(data.url, "_blank");
        // Show complete view — in production, verify payment via session ID
        setTimeout(() => { setView("complete"); window.scrollTo(0,0); }, 3000);
      } else {
        alert("Payment error. Please try again.");
        setView("review");
      }
    } catch (err) {
      console.error(err);
      alert("Could not connect to payment. Please try again.");
      setView("review");
    }
  };

  return (
    <>
      <style>{css}</style>
      <div className="app">
        {/* NAV */}
        <nav className="nav">
          <div className="nav-left">
            <span className="brand" onClick={reset}><svg width="22" height="14" viewBox="0 0 60 30" style={{display:"inline-block",verticalAlign:"middle",marginRight:6,borderRadius:2,boxShadow:"0 0 0 1px rgba(0,0,0,0.1)"}}><clipPath id="fc"><rect width="60" height="30" rx="2"/></clipPath><g clipPath="url(#fc)"><rect width="60" height="30" fill="#B22234"/><g fill="#fff">{[1,3,5,7,9,11].map(i=><rect key={i} y={i*30/13} width="60" height={30/13}/>)}</g><rect width="24" height={30*7/13} fill="#3C3B6E"/><g fill="#fff" fontSize="3" textAnchor="middle">{[[4,2],[8,2],[12,2],[16,2],[20,2],[6,4.5],[10,4.5],[14,4.5],[18,4.5],[4,7],[8,7],[12,7],[16,7],[20,7],[6,9.5],[10,9.5],[14,9.5],[18,9.5],[4,12],[8,12],[12,12],[16,12],[20,12],[6,14.5],[10,14.5],[14,14.5],[18,14.5]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r="1" fill="#fff"/>)}</g></g></svg>USA Docs</span>
            <span className="not-lawyers">{t.notLawyers}</span>
          </div>
          <div className="lang-bar">
            {Object.entries(LANGUAGES).map(([c, { name }]) => (
              <button key={c} className={`lb ${lang === c ? "on" : ""}`} onClick={() => setLang(c)}>{name}</button>
            ))}
          </div>
        </nav>

        {/* MODAL */}
        {showModal && (
          <div className="overlay" onClick={() => setShowModal(false)}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-warn">⚠️ {t.disclaimer}</div>
              <div className="modal-body">{t.disclaimerText}</div>
              <div className="chk-row" onClick={() => setChecked(!checked)}>
                <input type="checkbox" checked={checked} readOnly />
                <label>{t.disclaimerAccept}</label>
              </div>
              <button className="modal-btn" disabled={!checked} onClick={acceptDisclaimer}>{t.continue}</button>
            </div>
          </div>
        )}

        {/* HOME */}
        {view === "home" && (
          <>
            <div className="hero">
              <h1>{t.tagline}</h1>
              <p>{t.subtitle}</p>
              <button className="cta" onClick={() => formRef.current?.scrollIntoView({ behavior: "smooth" })}>
                {t.pickForm} ↓
              </button>
            </div>

            <div className="pillars">
              <div className="pill">
                <div className="pill-icon">☝️</div>
                <h3>{t.helpPillar1}</h3>
                <p>{t.helpPillar1d}</p>
              </div>
              <div className="pill">
                <div className="pill-icon">📝</div>
                <h3>{t.helpPillar2}</h3>
                <p>{t.helpPillar2d}</p>
              </div>
              <div className="pill">
                <div className="pill-icon">🔒</div>
                <h3>{t.helpPillar3}</h3>
                <p>{t.helpPillar3d}</p>
              </div>
            </div>

            <div className="section" ref={formRef}>
              <h2 className="sec-title">{t.pickForm}</h2>
              <p className="sec-sub">{t.pickFormSub}</p>
              <div className="tabs">
                {[["all","All"],["family",t.categories.family],["citizenship",t.categories.citizenship],["work",t.categories.work],["travel",t.categories.travel],["renewal",t.categories.renewal],["daca",t.categories.daca]].map(([k,l])=>(
                  <button key={k} className={`tab ${cat===k?"on":""}`} onClick={()=>setCat(k)}>{l}</button>
                ))}
              </div>
              <div className="grid">
                {filtered.map((f) => (
                  <div key={f.id} className="fcard" onClick={() => pickForm(f)}>
                    <div className="fcard-top">
                      <span className="fcard-icon">{f.icon}</span>
                      <span className="fcard-num">{f.number}</span>
                    </div>
                    <h3>{getName(f)}</h3>
                    <p>{getDesc(f)}</p>
                    <div className="fcard-bottom">
                      <div className="fcard-price">${f.ourFee}<span>{t.ourPrice}</span></div>
                      <span className={`complexity c-${f.complexity}`}>{f.complexity}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* DETAIL */}
        {view === "detail" && form && (
          <div className="detail">
            <button className="back" onClick={reset}>← {t.back}</button>
            <div className="det-head">
              <span className="det-icon">{form.icon}</span>
              <div>
                <h1>{getName(form)}</h1>
                <span className="num">{form.number} · {t.processing}: {form.processingTime}</span>
              </div>
            </div>

            <div className="safe-badge" style={{display:"flex",justifyContent:"center",width:"100%",marginBottom:20}}>🔒 {t.safe}</div>

            <div className="costs">
              <div className="cost ours">
                <div className="cost-label">{t.ourPrice}</div>
                <div className="cost-amt">${form.ourFee}</div>
              </div>
              <div className="cost">
                <div className="cost-label">{t.typicalCost}</div>
                <div className="cost-amt">${form.consultantFee.toLocaleString()}</div>
                <div className="cost-note">Consultant</div>
              </div>
              <div className="cost">
                <div className="cost-label">{t.youSave}</div>
                <div className="cost-amt" style={{color:"var(--green)"}}>${(form.consultantFee - form.ourFee).toLocaleString()}</div>
              </div>
            </div>

            <div className="gov-note">{t.govFeeNote} — <strong>${form.govFee}</strong></div>

            <div className="feat-box">
              <h3>{t.whatYouGet}</h3>
              {t.features.map((f, i) => <div key={i} className="feat"><span className="feat-chk">✓</span>{f}</div>)}
            </div>

            <a className="uscis-link" href={form.uscisUrl} target="_blank" rel="noopener noreferrer">{t.seeForm} →</a>
            <button className="go-btn" onClick={startInterview}>{t.startFilling} →</button>
          </div>
        )}

        {/* INTERVIEW */}
        {view === "interview" && form && (
          <div className="interview">
            <button className="back" onClick={() => setView("detail")}>← {t.back}</button>
            <div className="pbar"><div className="pfill" style={{width:`${((qIdx+1)/form.questions.length)*100}%`}}/></div>
            <div className="ptext">{t.step} {qIdx+1} {t.of} {form.questions.length} — {form.number}</div>

            <div className="qcard">
              <label>{getLabel(form.questions[qIdx])}</label>
              {form.questions[qIdx].type === "select" ? (
                <select value={ans[form.questions[qIdx].id]||""} onChange={(e)=>setAns(p=>({...p,[form.questions[qIdx].id]:e.target.value}))}>
                  <option value="">{t.select}</option>
                  {form.questions[qIdx].options.map(o=><option key={o} value={o}>{o}</option>)}
                </select>
              ) : (
                <input type={form.questions[qIdx].type} value={ans[form.questions[qIdx].id]||""} onChange={(e)=>setAns(p=>({...p,[form.questions[qIdx].id]:e.target.value}))} placeholder={form.questions[qIdx].type==="date"?"":t.typeHere} />
              )}
            </div>

            <div className="inav">
              {qIdx>0 && <button className="btn2" onClick={()=>setQIdx(q=>q-1)}>← {t.previous}</button>}
              {qIdx<form.questions.length-1 ? (
                <button className="btn1" onClick={()=>setQIdx(q=>q+1)} disabled={!ans[form.questions[qIdx].id]}>{t.next} →</button>
              ) : (
                <button className="btn1" onClick={()=>{setView("review");window.scrollTo(0,0)}} disabled={!ans[form.questions[qIdx].id]}>{t.checkAnswers} →</button>
              )}
            </div>
          </div>
        )}

        {/* REVIEW */}
        {view === "review" && form && (
          <div className="interview">
            <button className="back" onClick={()=>{setQIdx(form.questions.length-1);setView("interview")}}>← {t.back}</button>
            <h2 style={{fontFamily:"var(--display)",fontSize:22,marginBottom:4}}>{t.checkAnswers}</h2>
            <p style={{color:"var(--muted)",fontSize:12,marginBottom:20}}>{t.checkAnswersSub}</p>

            {form.questions.map((q,i)=>(
              <div key={q.id} className="rcard">
                <div>
                  <div className="rlabel">{getLabel(q)}</div>
                  <div className="rval">{ans[q.id]||"—"}</div>
                </div>
                <button className="redit" onClick={()=>{setQIdx(i);setView("interview")}}>{t.edit}</button>
              </div>
            ))}

            <div style={{marginTop:20}}>
              <button className="go-btn" onClick={goToCheckout}>{t.prepareForm} — ${form.ourFee} →</button>
            </div>
          </div>
        )}

        {/* LOADING */}
        {view === "loading" && (
          <div className="load">
            <div className="spin"/>
            <p style={{color:"var(--text2)",fontSize:15,fontWeight:500}}>{t.preparing}</p>
            <p style={{color:"var(--muted)",fontSize:12,marginTop:6}}>{t.almostDone}</p>
          </div>
        )}

        {/* COMPLETE */}
        {view === "complete" && (
          <div className="done-view">
            <div className="done-icon">✅</div>
            <h1>{t.done}</h1>
            <p>{t.doneDesc}</p>
            <div className="done-actions">
              <button className="dbtn" style={{background:"var(--blue)",color:"white"}}>📄 {t.download}</button>
              <button className="dbtn" style={{background:"var(--elevated)",color:"var(--text2)",border:"1px solid var(--border)"}}>📋 {t.checklist}</button>
              <a href={form?.uscisUrl} target="_blank" rel="noopener noreferrer" style={{color:"var(--blue)",fontSize:13,marginTop:4,textDecoration:"none"}}>{t.goUSCIS} →</a>
              <button onClick={reset} style={{background:"none",border:"none",color:"var(--muted)",marginTop:8,cursor:"pointer",fontFamily:"var(--body)",fontSize:13}}>{t.doAnother}</button>
            </div>
          </div>
        )}

        {/* FOOTER */}
        <div className="foot">
          <div className="foot-warn"><p>{t.footerLine1} {t.footerLine2}</p></div>
          <p>{t.footerCopy}</p>
        </div>
      </div>
    </>
  );
}
