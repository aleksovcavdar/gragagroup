const nav = document.getElementById("nav");
const navToggle = document.getElementById("navToggle");
const toastEl = document.getElementById("toast");
const form = document.getElementById("contactForm");
const langSelect = document.getElementById("langSelect");

document.getElementById("year").textContent = String(new Date().getFullYear());

const LS_LANG = "site_lang";

const I18N = {
  en: {
    nav_about: "About",
    nav_services: "What we do",
    nav_fleet: "Fleet",
    nav_contact: "Contact",

    hero_eyebrow: "Transport • Logistics • Fleet",
    hero_title: "Reliable transport with a modern fleet.",
    hero_subhead: "We move materials and goods safely and on time — with clear communication and professional drivers.",
    hero_cta_primary: "Request an offer",
    hero_cta_secondary: "View fleet",

    stat_years: "Years experience",
    stat_vehicles: "Vehicles",
    stat_deliveries: "Deliveries",

    chip_1: "Fast response",
    chip_2: "Clear offers",
    chip_3: "Safety-first",

    ph_hero: 'Add image: <code>assets/hero.jpg</code>',
    ph_about: 'Add image: <code>assets/about.jpg</code>',

    about_title: "About us",
    about_lead: "A transport company built around reliability, safety, and responsibility.",
    about_text: "We support construction and logistics needs with maintained vehicles, experienced drivers, and a simple process from request → offer → delivery.",

    val1_t: "Reliability",
    val1_d: "Consistent planning and on-time delivery you can count on.",
    val2_t: "Safety",
    val2_d: "Vehicle maintenance and disciplined operations—every day.",
    val3_t: "Communication",
    val3_d: "Clear updates and quick responses from start to finish.",

    services_title: "What we do",
    services_sub: "Simple, focused services—no clutter.",
    svc1_t: "Tipper transport",
    svc1_d: "Bulk materials for construction and infrastructure projects.",
    svc2_t: "Domestic & international routes",
    svc2_d: "Planned delivery windows with dependable communication.",
    svc3_t: "Flexible scheduling",
    svc3_d: "Capacity when projects need speed and reliability.",
    svc4_t: "Maintained fleet",
    svc4_d: "Safety checks and maintenance to reduce downtime.",

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
    ph_message: "Tell us what you need (route, cargo, timeframe)…",

    footer_about: "About",
    footer_fleet: "Fleet",
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
    nav_services: "Што работиме",
    nav_fleet: "Возен парк",
    nav_contact: "Контакт",

    hero_eyebrow: "Транспорт • Логистика • Возен парк",
    hero_title: "Сигурен транспорт со модерен возен парк.",
    hero_subhead: "Пренесуваме материјали и стока безбедно и навреме — со јасна комуникација и професионални возачи.",
    hero_cta_primary: "Побарајте понуда",
    hero_cta_secondary: "Погледни возен парк",

    stat_years: "Години искуство",
    stat_vehicles: "Возила",
    stat_deliveries: "Испораки",

    chip_1: "Брз одговор",
    chip_2: "Јасни понуди",
    chip_3: "Безбедност",

    ph_hero: 'Додадете слика: <code>assets/hero.jpg</code>',
    ph_about: 'Додадете слика: <code>assets/about.jpg</code>',

    about_title: "За нас",
    about_lead: "Транспортна компанија изградена на доверливост, безбедност и одговорност.",
    about_text: "Поддржуваме градежни и логистички потреби со одржувани возила, искусни возачи и едноставен процес од барање → понуда → испорака.",

    val1_t: "Доверливост",
    val1_d: "Планирање и навремена испорака на која можете да се потпрете.",
    val2_t: "Безбедност",
    val2_d: "Одржување на возила и дисциплинирана работа — секој ден.",
    val3_t: "Комуникација",
    val3_d: "Јасни информации и брз одговор од почеток до крај.",

    services_title: "Што работиме",
    services_sub: "Едноставни и фокусирани услуги — без непотребни детали.",
    svc1_t: "Кипер транспорт",
    svc1_d: "Превоз на рефус материјали за градежни и инфраструктурни проекти.",
    svc2_t: "Домашни и меѓународни релации",
    svc2_d: "Планирани термини со сигурна комуникација.",
    svc3_t: "Флексибилно закажување",
    svc3_d: "Капацитет кога проектите бараат брзина и сигурност.",
    svc4_t: "Одржуван возен парк",
    svc4_d: "Проверки и одржување за помал застој.",

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
    ph_message: "Напишете што ви треба (релација, товар, термин)…",

    footer_about: "За нас",
    footer_fleet: "Возен парк",
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
    nav_services: "Shërbimet",
    nav_fleet: "Flota",
    nav_contact: "Kontakt",

    hero_eyebrow: "Transport • Logjistikë • Flotë",
    hero_title: "Transport i besueshëm me flotë moderne.",
    hero_subhead: "Transportojmë materiale dhe mallra në mënyrë të sigurt dhe në kohë — me komunikim të qartë dhe shoferë profesionalë.",
    hero_cta_primary: "Kërko ofertë",
    hero_cta_secondary: "Shiko flotën",

    stat_years: "Vite përvojë",
    stat_vehicles: "Mjete",
    stat_deliveries: "Dërgesa",

    chip_1: "Përgjigje e shpejtë",
    chip_2: "Oferta të qarta",
    chip_3: "Siguri",

    ph_hero: 'Shto imazh: <code>assets/hero.jpg</code>',
    ph_about: 'Shto imazh: <code>assets/about.jpg</code>',

    about_title: "Rreth nesh",
    about_lead: "Një kompani transporti e ndërtuar mbi besueshmëri, siguri dhe përgjegjësi.",
    about_text: "Mbështesim nevojat e ndërtimit dhe logjistikës me mjete të mirëmbajtura, shoferë me përvojë dhe një proces të thjeshtë nga kërkesa → oferta → dorëzimi.",

    val1_t: "Besueshmëri",
    val1_d: "Planifikim i qëndrueshëm dhe dorëzim në kohë.",
    val2_t: "Siguri",
    val2_d: "Mirëmbajtje e rregullt dhe operim i disiplinuar.",
    val3_t: "Komunikim",
    val3_d: "Përditësime të qarta dhe përgjigje të shpejta.",

    services_title: "Shërbimet",
    services_sub: "Të thjeshta dhe të fokusuara — pa ngarkesë.",
    svc1_t: "Transport me kiper",
    svc1_d: "Materiale të derdhshme për projekte ndërtimi dhe infrastrukture.",
    svc2_t: "Rrugë vendore & ndërkombëtare",
    svc2_d: "Orar i planifikuar me komunikim të besueshëm.",
    svc3_t: "Planifikim fleksibël",
    svc3_d: "Kapacitet kur projektet kërkojnë shpejtësi dhe siguri.",
    svc4_t: "Flotë e mirëmbajtur",
    svc4_d: "Kontrolle sigurie dhe mirëmbajtje për më pak ndërprerje.",

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
    ph_message: "Na trego çfarë të duhet (rruga, ngarkesa, afati)…",

    footer_about: "Rreth nesh",
    footer_fleet: "Flota",
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
  // Re-format counters for locale (1,200 vs 1.200)
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

/* Smooth scroll */
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

/* Form demo validation */
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
    // No animation for reduced motion users
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
  const start = 0;
  const startTime = performance.now();

  const step = (now) => {
    const t = Math.min(1, (now - startTime) / duration);
    // easeOutCubic
    const eased = 1 - Math.pow(1 - t, 3);
    const value = start + (target - start) * eased;

    setCounterValue(el, value);

    if (t < 1) requestAnimationFrame(step);
    else setCounterValue(el, target); // ensure exact
  };

  requestAnimationFrame(step);
}

function getTarget(el){
  const raw = el.dataset.target || "0";
  const n = Number(raw);
  return Number.isFinite(n) ? n : 0;
}

function getDuration(el){
  const raw = el.dataset.duration || "1200";
  const n = Number(raw);
  return Number.isFinite(n) ? Math.max(300, n) : 1200;
}

function getLocale(){
  if (currentLang === "mk") return "mk-MK";
  if (currentLang === "sq") return "sq-AL";
  return "en-US";
}

function formatNumber(value){
  // integers only for this site; if you want decimals add data-decimals
  const locale = getLocale();
  return new Intl.NumberFormat(locale, { maximumFractionDigits: 0 }).format(Math.round(value));
}

function setCounterValue(el, value){
  const prefix = el.dataset.prefix || "";
  const suffix = el.dataset.suffix || "";
  const text = `${prefix}${formatNumber(value)}${suffix}`;
  el.textContent = text;
  el.dataset.value = String(value); // keep current for re-format on language change
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
