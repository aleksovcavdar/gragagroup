const nav = document.getElementById("nav");
const navToggle = document.getElementById("navToggle");
const toastEl = document.getElementById("toast");
const form = document.getElementById("contactForm");
const langSelect = document.getElementById("langSelect");

document.querySelectorAll("#year").forEach(el => el.textContent = String(new Date().getFullYear()));

const LS_LANG = "site_lang";

const I18N = {
  en: {
    nav_about: "About",
    nav_services: "Services & products",
    nav_fleet: "Fleet",
    nav_contact: "Contact",

    hero_eyebrow: "Transport • Logistics • Pellets",
    hero_title: "Reliable services with a modern fleet — and quality wood pellets.",
    hero_subhead: "We deliver transport solutions and supply wood pellets with clear communication and fast response.",
    hero_cta_primary: "Request an offer",
    hero_cta_secondary: "See services",

    stat_years: "Years experience",
    stat_vehicles: "Vehicles",
    stat_deliveries: "Deliveries",

    chip_1: "Fast response",
    chip_2: "Clear offers",
    chip_3: "Safety-first",

    ph_hero: 'Add image: <code>assets/hero.jpg</code>',
    ph_about: 'Add image: <code>assets/about.jpg</code>',

    about_title: "About us",
    about_lead: "A company built around reliability, safety, and responsibility.",
    about_text: "Grga Group provides transport and logistics services, and also supplies wood pellets for heating. Our focus is simple: quality, clarity, and fast response.",

    val1_t: "Reliability",
    val1_d: "Consistent planning and on-time delivery you can count on.",
    val2_t: "Safety",
    val2_d: "Vehicle maintenance and disciplined operations—every day.",
    val3_t: "Communication",
    val3_d: "Clear updates and quick responses from start to finish.",

    services_title: "Services & products",
    services_sub: "Transport plus wood pellets — a simple, reliable offer from one company.",
    services_h: "Services",
    products_h: "Products",

    svc1_t: "Transport & logistics",
    svc1_d: "Domestic and international transport with professional coordination.",
    svc2_t: "Tipper transport",
    svc2_d: "Bulk materials for construction and infrastructure projects.",
    svc3_t: "Flexible scheduling",
    svc3_d: "Capacity when projects need speed and reliability.",
    svc4_t: "Maintained fleet",
    svc4_d: "Safety checks and maintenance to reduce downtime.",

    prod_pill: "Available",
    prod_pill2: "Simple",

    prod1_t: "Wood pellets",
    prod1_d: "Quality wood pellets for heating. Order by bags or pallets — with delivery option.",
    prod1_c1: "Bags / Pallets",
    prod1_c2: "Delivery",
    prod1_c3: "Fast response",

    prod2_t: "Delivery & supply",
    prod2_d: "We can deliver pellets to your address and coordinate quantities and timing.",
    prod2_c1: "Home delivery",
    prod2_c2: "Scheduled",
    prod2_c3: "Support",

    prod_cta: "Ask for price",
    prod_cta2: "Contact us",
    prod_hint: "We reply quickly",

    fleet_title: "Our fleet",
    fleet_sub: "A clean snapshot of what we operate.",
    fleet_c1: "Tipper trucks",
    fleet_c2: "Regular maintenance",
    fleet_c3: "Professional drivers",

    contact_title: "Contact",
    contact_sub: "Send a message — we respond quickly.",
    contact_email_k: "Email",
    contact_phone_k: "Phone",
    contact_loc_k: "Location",
    contact_loc_v: "North Macedonia",

    form_name: "Name",
    form_email: "Email",
    form_message: "Message",
    form_send: "Send",
    form_note: "Demo: shows a success toast locally. Connect to Netlify Forms or an API later.",
    ph_name: "Your name",
    ph_email: "you@email.com",
    ph_message: "Tell us what you need (route, cargo, pellets quantity, timeframe)…",

    footer_about: "About",
    footer_services: "Services",
    footer_contact: "Contact",

    social_facebook: "Facebook",
    social_instagram: "Instagram",

    err_name: "Name is required",
    err_email: "Enter a valid email",
    err_message: "Message is required",
    ok_sent: "Sent (demo). Connect Netlify Forms / API for real submissions."
  },

  mk: {
    nav_about: "За нас",
    nav_services: "Услуги и производи",
    nav_fleet: "Возен парк",
    nav_contact: "Контакт",

    hero_eyebrow: "Транспорт • Логистика • Пелети",
    hero_title: "Сигурни услуги со модерен возен парк — и квалитетни дрвени пелети.",
    hero_subhead: "Нудиме транспортни решенија и дрвени пелети со јасна комуникација и брз одговор.",
    hero_cta_primary: "Побарајте понуда",
    hero_cta_secondary: "Види услуги",

    stat_years: "Години искуство",
    stat_vehicles: "Возила",
    stat_deliveries: "Испораки",

    chip_1: "Брз одговор",
    chip_2: "Јасни понуди",
    chip_3: "Безбедност",

    ph_hero: 'Додадете слика: <code>assets/hero.jpg</code>',
    ph_about: 'Додадете слика: <code>assets/about.jpg</code>',

    about_title: "За нас",
    about_lead: "Компанија изградена на доверливост, безбедност и одговорност.",
    about_text: "Grga Group нуди транспорт и логистика, а исто така продава дрвени пелети за греење. Нашиот фокус е едноставен: квалитет, јасност и брз одговор.",

    val1_t: "Доверливост",
    val1_d: "Планирање и навремена испорака на која можете да се потпрете.",
    val2_t: "Безбедност",
    val2_d: "Одржување на возила и дисциплинирана работа — секој ден.",
    val3_t: "Комуникација",
    val3_d: "Јасни информации и брз одговор од почеток до крај.",

    services_title: "Услуги и производи",
    services_sub: "Транспорт и дрвени пелети — едноставна и сигурна понуда од една компанија.",
    services_h: "Услуги",
    products_h: "Производи",

    svc1_t: "Транспорт и логистика",
    svc1_d: "Домашен и меѓународен транспорт со професионална координација.",
    svc2_t: "Кипер транспорт",
    svc2_d: "Рефус материјали за градежни и инфраструктурни проекти.",
    svc3_t: "Флексибилно закажување",
    svc3_d: "Капацитет кога проектите бараат брзина и сигурност.",
    svc4_t: "Одржуван возен парк",
    svc4_d: "Проверки и одржување за помал застој.",

    prod_pill: "Достапно",
    prod_pill2: "Едноставно",

    prod1_t: "Дрвени пелети (пелети)",
    prod1_d: "Квалитетни дрвени пелети за греење. Нарачка во ќеси или палети — со опција за достава.",
    prod1_c1: "Ќеси / Палети",
    prod1_c2: "Достава",
    prod1_c3: "Брз одговор",

    prod2_t: "Достава и снабдување",
    prod2_d: "Можеме да доставиме пелети на ваша адреса и да договориме количини и термин.",
    prod2_c1: "Достава до дома",
    prod2_c2: "По договор",
    prod2_c3: "Поддршка",

    prod_cta: "Побарај цена",
    prod_cta2: "Контактирајте нè",
    prod_hint: "Одговараме брзо",

    fleet_title: "Возен парк",
    fleet_sub: "Чист преглед на тоа што го оперираме.",
    fleet_c1: "Кипер камиони",
    fleet_c2: "Редовно одржување",
    fleet_c3: "Професионални возачи",

    contact_title: "Контакт",
    contact_sub: "Пратете порака — одговараме брзо.",
    contact_email_k: "Е-пошта",
    contact_phone_k: "Телефон",
    contact_loc_k: "Локација",
    contact_loc_v: "Северна Македонија",

    form_name: "Име",
    form_email: "Е-пошта",
    form_message: "Порака",
    form_send: "Испрати",
    form_note: "Демо: локално прикажува успешна порака. Подоцна поврзете Netlify Forms или API.",
    ph_name: "Вашето име",
    ph_email: "vie@email.com",
    ph_message: "Напишете што ви треба (релација, товар, количина пелети, термин)…",

    footer_about: "За нас",
    footer_services: "Услуги",
    footer_contact: "Контакт",

    social_facebook: "Facebook",
    social_instagram: "Instagram",

    err_name: "Името е задолжително",
    err_email: "Внесете валидна е-пошта",
    err_message: "Пораката е задолжителна",
    ok_sent: "Испратено (демо). Поврзете Netlify Forms / API за реално праќање."
  },

  sq: {
    nav_about: "Rreth nesh",
    nav_services: "Shërbime & Produkte",
    nav_fleet: "Flota",
    nav_contact: "Kontakt",

    hero_eyebrow: "Transport • Logjistikë • Peletë",
    hero_title: "Shërbime të besueshme me flotë moderne — dhe peletë druri cilësore.",
    hero_subhead: "Ofrojmë zgjidhje transporti dhe furnizojmë peletë druri me komunikim të qartë dhe përgjigje të shpejtë.",
    hero_cta_primary: "Kërko ofertë",
    hero_cta_secondary: "Shiko shërbimet",

    stat_years: "Vite përvojë",
    stat_vehicles: "Mjete",
    stat_deliveries: "Dërgesa",

    chip_1: "Përgjigje e shpejtë",
    chip_2: "Oferta të qarta",
    chip_3: "Siguri",

    ph_hero: 'Shto imazh: <code>assets/hero.jpg</code>',
    ph_about: 'Shto imazh: <code>assets/about.jpg</code>',

    about_title: "Rreth nesh",
    about_lead: "Një kompani e ndërtuar mbi besueshmëri, siguri dhe përgjegjësi.",
    about_text: "Grga Group ofron transport dhe logjistikë, si dhe shet peletë druri për ngrohje. Fokus: cilësi, qartësi dhe përgjigje e shpejtë.",

    val1_t: "Besueshmëri",
    val1_d: "Planifikim i qëndrueshëm dhe dorëzim në kohë.",
    val2_t: "Siguri",
    val2_d: "Mirëmbajtje e rregullt dhe operim i disiplinuar.",
    val3_t: "Komunikim",
    val3_d: "Përditësime të qarta dhe përgjigje të shpejta.",

    services_title: "Shërbime & Produkte",
    services_sub: "Transport plus peletë druri — një ofertë e thjeshtë dhe e besueshme nga një kompani.",
    services_h: "Shërbime",
    products_h: "Produkte",

    svc1_t: "Transport & logjistikë",
    svc1_d: "Transport vendor dhe ndërkombëtar me koordinim profesional.",
    svc2_t: "Transport me kiper",
    svc2_d: "Materiale të derdhshme për projekte ndërtimi dhe infrastrukture.",
    svc3_t: "Planifikim fleksibël",
    svc3_d: "Kapacitet kur projektet kërkojnë shpejtësi dhe siguri.",
    svc4_t: "Flotë e mirëmbajtur",
    svc4_d: "Kontrolle sigurie dhe mirëmbajtje për më pak ndërprerje.",

    prod_pill: "Në dispozicion",
    prod_pill2: "E thjeshtë",

    prod1_t: "Peletë druri",
    prod1_d: "Peletë druri cilësore për ngrohje. Porosi me thasë ose paleta — me opsion dërgese.",
    prod1_c1: "Thasë / Paleta",
    prod1_c2: "Dërgesë",
    prod1_c3: "Përgjigje e shpejtë",

    prod2_t: "Dërgesë & furnizim",
    prod2_d: "Mund t’i dërgojmë peletët në adresën tuaj dhe të koordinojmë sasinë dhe kohën.",
    prod2_c1: "Dërgesë në shtëpi",
    prod2_c2: "Me orar",
    prod2_c3: "Mbështetje",

    prod_cta: "Kërko çmim",
    prod_cta2: "Na kontakto",
    prod_hint: "Përgjigjemi shpejt",

    fleet_title: "Flota jonë",
    fleet_sub: "Një pamje e pastër e asaj që operojmë.",
    fleet_c1: "Kiperë",
    fleet_c2: "Mirëmbajtje e rregullt",
    fleet_c3: "Shoferë profesionistë",

    contact_title: "Kontakt",
    contact_sub: "Dërgo një mesazh — përgjigjemi shpejt.",
    contact_email_k: "Email",
    contact_phone_k: "Telefon",
    contact_loc_k: "Vendndodhja",
    contact_loc_v: "Maqedonia e Veriut",

    form_name: "Emri",
    form_email: "Email",
    form_message: "Mesazhi",
    form_send: "Dërgo",
    form_note: "Demo: shfaq një mesazh suksesi lokalisht. Lidhe me Netlify Forms ose API më vonë.",
    ph_name: "Emri juaj",
    ph_email: "ju@email.com",
    ph_message: "Na trego çfarë të duhet (rruga, ngarkesa, sasia e peletëve, afati)…",

    footer_about: "Rreth nesh",
    footer_services: "Shërbime",
    footer_contact: "Kontakt",

    social_facebook: "Facebook",
    social_instagram: "Instagram",

    err_name: "Emri është i detyrueshëm",
    err_email: "Shkruaj një email të vlefshëm",
    err_message: "Mesazhi është i detyrueshëm",
    ok_sent: "U dërgua (demo). Lidhe me Netlify Forms / API për dërgim real."
  }
};

let currentLang = loadLang();
applyLanguage(currentLang);
langSelect.value = currentLang;

langSelect.addEventListener("change", () => {
  const lang = langSelect.value;
  if (!I18N[lang]) return;
  applyLanguage(lang);
  saveLang(lang);
  refreshCountersText();
});

/* Mobile nav */
navToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", open ? "true" : "false");
});

Array.from(nav.querySelectorAll('a[href^="#"]')).forEach(a => {
  a.addEventListener("click", () => {
    nav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

/* Smooth scroll with sticky header offset */
document.addEventListener("click", (e) => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  const id = a.getAttribute("href");
  const target = document.querySelector(id);
  if (!target) return;

  e.preventDefault();
  const headerH = document.querySelector(".header").offsetHeight + 10;
  const top = target.getBoundingClientRect().top + window.scrollY - headerH;
  window.scrollTo({ top, behavior: "smooth" });
});

/* Contact form demo validation */
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name) return toast(t("err_name"));
  if (!isEmail(email)) return toast(t("err_email"));
  if (!message) return toast(t("err_message"));

  form.reset();
  toast(t("ok_sent"));
});

/* ---------- i18n helpers ---------- */
function t(key){
  return (I18N[currentLang] && I18N[currentLang][key]) || (I18N.en[key] || key);
}

function applyLanguage(lang){
  currentLang = lang;
  document.documentElement.lang = lang === "mk" ? "mk" : (lang === "sq" ? "sq" : "en");

  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = t(el.getAttribute("data-i18n"));
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    el.setAttribute("placeholder", t(el.getAttribute("data-i18n-placeholder")));
  });

  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    el.innerHTML = t(el.getAttribute("data-i18n-html"));
  });
}

function loadLang(){
  const saved = localStorage.getItem(LS_LANG);
  if (saved && I18N[saved]) return saved;

  const browser = (navigator.language || "en").toLowerCase();
  if (browser.startsWith("mk")) return "mk";
  if (browser.startsWith("sq")) return "sq";
  return "en";
}

function saveLang(lang){
  localStorage.setItem(LS_LANG, lang);
}

/* ---------- Counters ---------- */
initCounters();

function initCounters() {
  const counters = Array.from(document.querySelectorAll("[data-counter]"));
  if (!counters.length) return;

  const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion) {
    counters.forEach(el => setCounterValue(el, getTarget(el)));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      if (el.dataset.started === "1") return;
      el.dataset.started = "1";
      animateCounter(el);
      observer.unobserve(el);
    });
  }, { threshold: 0.35 });

  counters.forEach(el => observer.observe(el));
}

function animateCounter(el){
  const target = getTarget(el);
  const duration = getDuration(el);
  const startTime = performance.now();

  const step = (now) => {
    const t = Math.min(1, (now - startTime) / duration);
    const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
    const value = target * eased;

    setCounterValue(el, value);

    if (t < 1) requestAnimationFrame(step);
    else setCounterValue(el, target);
  };

  requestAnimationFrame(step);
}

function getTarget(el){
  const n = Number(el.dataset.target || "0");
  return Number.isFinite(n) ? n : 0;
}

function getDuration(el){
  const n = Number(el.dataset.duration || "1200");
  return Number.isFinite(n) ? Math.max(300, n) : 1200;
}

function getLocale(){
  if (currentLang === "mk") return "mk-MK";
  if (currentLang === "sq") return "sq-AL";
  return "en-US";
}

function formatNumber(value){
  const locale = getLocale();
  return new Intl.NumberFormat(locale, { maximumFractionDigits: 0 }).format(Math.round(value));
}

function setCounterValue(el, value){
  const prefix = el.dataset.prefix || "";
  const suffix = el.dataset.suffix || "";
  el.textContent = `${prefix}${formatNumber(value)}${suffix}`;
  el.dataset.value = String(value);
}

function refreshCountersText(){
  document.querySelectorAll("[data-counter]").forEach(el => {
    const v = Number(el.dataset.value ?? el.dataset.target ?? 0);
    setCounterValue(el, v);
  });
}

/* ---------- utilities ---------- */
function isEmail(v){
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function toast(msg){
  toastEl.textContent = msg;
  toastEl.hidden = false;
  clearTimeout(toast._t);
  toast._t = setTimeout(() => (toastEl.hidden = true), 2200);
}
