// ============ LANGUAGE (BS / EN) ============
const translations = {
  bs: {
    page_title: "Spotlight Edits — Montaža fudbalskih highlight klipova",
    page_description: "Profesionalna montaža fudbalskih video klipova za slanje klubovima, manadžerima i skautima.",
    nav_kako: "Kako radi",
    nav_stil: "Stil montaže",
    nav_paketi: "Paketi",
    nav_posalji: "Pošalji snimak",
    hero_eyebrow: "VIDEO MONTAŽA ZA FUDBALERE",
    hero_title: `Neka te menadžeri<br><span class="accent">vide onako</span><br>kako zaslužuješ.`,
    hero_sub: "Montiram highlight klipove od sirovog snimka utakmice — spremne za slanje klubovima, skautima i managerima. Brzo, čisto, efektno.",
    hero_btn_primary: "Pogledaj pakete",
    hero_btn_ghost: "Pošalji snimak",
    hero_scroll: "Skroluj",
    proces_eyebrow: "Proces",
    proces_heading: "Od sirovog snimka do klipa koji se šalje dalje",
    proces1_title: "Pošalji snimak",
    proces1_desc: "Podijeli link ka snimku utakmice (Drive, WeTransfer ili sličn) putem forme ispod.",
    proces2_title: "Odabir akcija",
    proces2_desc: "Prolazim kroz cijeli meč i izdvajam tvoje najbolje trenutke — driblinzi, asistencije, golovi, odbrane.",
    proces3_title: "Montaža",
    proces3_desc: "Rezovi, usporeni snimci, grafika sa imenom i pozicijom, po potrebi i statistika iz utakmice.",
    proces4_title: "Isporuka",
    proces4_desc: "Gotov klip u roku od 48h, u formatu spremnom za slanje klubu ili manageru.",
    stil_eyebrow: "Stil montaže",
    stil_heading: "Kako izgleda gotov klip",
    stil_note: "Demo stilovi ispod pokazuju format i grafiku — pravi klijentski radovi stižu uskoro.",
    reel1_tag: "SPRINT / DRIBLING",
    reel1_title: "Napadač reel",
    reel1_desc: "Fokus na driblinge, završnice i kretanje bez lopte.",
    reel2_tag: "ODBRANA / REFLEKS",
    reel2_title: "Golman reel",
    reel2_desc: "Odbrane, izlasci i igra nogama, sa uglovima koji to najbolje pokazuju.",
    reel3_tag: "TIM / MEČ",
    reel3_title: "Klub highlight paket",
    reel3_desc: "Sažetak cijele utakmice ili sezone za klupsku arhivu i objave.",
    cjena_eyebrow: "Paketi",
    cjena_heading: "Odaberi paket koji ti odgovara",
    p1_tag: "OSNOVNI", p1_unit: "/klip",
    p1_f1: "Klip do 3 minute", p1_f2: "Do 10 izdvojenih akcija",
    p1_f3: "Osnovna grafika (ime, pozicija)", p1_f4: "Isporuka u 48h",
    p2_badge: "Najtraženiji", p2_unit: "/klip",
    p2_f1: "Highlight reel do 5 minuta", p2_f2: "Neograničen broj akcija",
    p2_f3: "Statistika i grafika preko snimka", p2_f4: "Muzika i tranzicije",
    p2_f5: "Isporuka u 24–48h",
    p3_tag: "KLUB PAKET", p3_amount: "Po dogovoru",
    p3_f1: "Više igrača / cijela utakmica", p3_f2: "Prilagođeno klupskim potrebama",
    p3_f3: "Paket za slanje više klubova", p3_f4: "Fiksna cijena po dogovoru",
    btn_odaberi: "Odaberi", btn_kontaktiraj: "Kontaktiraj me",
    pricing_note: `* Cijene su okvirne — uredi ih u <code>index.html</code> prema svojoj ponudi.`,
    kontakt_eyebrow: "Rezervacija",
    kontakt_heading: "Pošalji snimak i izaberi paket",
    kontakt_desc: "Popuni formu i javljam se u roku od 24h da dogovorimo detalje.",
    kontakt_ili: "Ili direktno:",
    form_bot: "Ne popunjavaj ovo polje: ",
    form_name: "Ime i prezime", form_name_ph: "Amar Amarović",
    form_email: "Email", form_email_ph: "ime@email.com",
    form_phone: "Telefon",
    form_position: "Pozicija",
    form_package: "Paket",
    form_link: "Link ka snimku utakmice",
    form_message: "Poruka (opciono)", form_message_ph: "Minutaža najboljih akcija, dres broj, boja tima...",
    form_submit: "Pošalji zahtjev",
    form_success: "Hvala! Javljam se uskoro na tvoj email.",
    pos_1: "Napadač", pos_2: "Vezni", pos_3: "Odbrambeni", pos_4: "Golman",
    pkg_1: "Osnovni", pkg_2: "Pro", pkg_3: "Klub paket",
    footer_kontakt: "Kontakt",
    footer_rights: "Sva prava zadržana.",
  },
  en: {
    page_title: "Spotlight Edits — Football Highlight Video Editing",
    page_description: "Professional editing of football video clips to send to clubs, managers, and scouts.",
    nav_kako: "How it works",
    nav_stil: "Editing style",
    nav_paketi: "Packages",
    nav_posalji: "Send your footage",
    hero_eyebrow: "VIDEO EDITING FOR FOOTBALLERS",
    hero_title: `Let managers<br><span class="accent">see you</span><br>the way you deserve.`,
    hero_sub: "I edit highlight clips from raw match footage — ready to send to clubs, scouts, and managers. Fast, clean, effective.",
    hero_btn_primary: "See packages",
    hero_btn_ghost: "Send your footage",
    hero_scroll: "Scroll",
    proces_eyebrow: "Process",
    proces_heading: "From raw footage to a clip that gets sent forward",
    proces1_title: "Send your footage",
    proces1_desc: "Share a link to the match footage (Drive, WeTransfer, or similar) through the form below.",
    proces2_title: "Picking the highlights",
    proces2_desc: "I go through the whole match and pull out your best moments — dribbles, assists, goals, saves.",
    proces3_title: "Editing",
    proces3_desc: "Cuts, slow motion, name and position graphics, and match stats where useful.",
    proces4_title: "Delivery",
    proces4_desc: "Finished clip within 48h, in a format ready to send to a club or manager.",
    stil_eyebrow: "Editing style",
    stil_heading: "What the finished clip looks like",
    stil_note: "The demo styles below show the format and graphics — real client work is coming soon.",
    reel1_tag: "SPRINT / DRIBBLE",
    reel1_title: "Striker reel",
    reel1_desc: "Focus on dribbles, finishing, and off-the-ball movement.",
    reel2_tag: "SAVE / REFLEX",
    reel2_title: "Goalkeeper reel",
    reel2_desc: "Saves, sweeper-keeper moments, and footwork, from the angles that show it best.",
    reel3_tag: "TEAM / MATCH",
    reel3_title: "Club highlight package",
    reel3_desc: "A summary of a full match or season for club archives and posts.",
    cjena_eyebrow: "Packages",
    cjena_heading: "Choose the package that fits you",
    p1_tag: "BASIC", p1_unit: "/clip",
    p1_f1: "Clip up to 3 minutes", p1_f2: "Up to 10 highlighted moments",
    p1_f3: "Basic graphics (name, position)", p1_f4: "Delivery within 48h",
    p2_badge: "Most popular", p2_unit: "/clip",
    p2_f1: "Highlight reel up to 5 minutes", p2_f2: "Unlimited highlighted moments",
    p2_f3: "Stats and graphics overlay", p2_f4: "Music and transitions",
    p2_f5: "Delivery within 24–48h",
    p3_tag: "CLUB PACKAGE", p3_amount: "By agreement",
    p3_f1: "Multiple players / full match", p3_f2: "Tailored to club needs",
    p3_f3: "Package for sending to multiple clubs", p3_f4: "Fixed price by agreement",
    btn_odaberi: "Choose", btn_kontaktiraj: "Contact me",
    pricing_note: `* Prices are indicative — edit them in <code>index.html</code> to match your offer.`,
    kontakt_eyebrow: "Booking",
    kontakt_heading: "Send your footage and pick a package",
    kontakt_desc: "Fill in the form and I'll get back to you within 24h to sort out the details.",
    kontakt_ili: "Or reach out directly:",
    form_bot: "Leave this field empty: ",
    form_name: "Full name", form_name_ph: "John Smith",
    form_email: "Email", form_email_ph: "you@email.com",
    form_phone: "Phone",
    form_position: "Position",
    form_package: "Package",
    form_link: "Link to match footage",
    form_message: "Message (optional)", form_message_ph: "Timestamps of best moments, jersey number, team color...",
    form_submit: "Send request",
    form_success: "Thanks! I'll be in touch soon by email.",
    pos_1: "Forward", pos_2: "Midfielder", pos_3: "Defender", pos_4: "Goalkeeper",
    pkg_1: "Basic", pkg_2: "Pro", pkg_3: "Club package",
    footer_kontakt: "Contact",
    footer_rights: "All rights reserved.",
  }
};

function applyLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;

  document.documentElement.lang = lang;
  document.title = dict.page_title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', dict.page_description);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  try { localStorage.setItem('spotlightEditsLang', lang); } catch (err) { /* ignore */ }
}

const langSwitch = document.getElementById('langSwitch');
if (langSwitch) {
  langSwitch.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLanguage(btn.getAttribute('data-lang')));
  });
}

let savedLang = null;
try { savedLang = localStorage.getItem('spotlightEditsLang'); } catch (err) { /* ignore */ }
const browserLang = (navigator.language || 'bs').toLowerCase().startsWith('en') ? 'en' : 'bs';
applyLanguage(savedLang || browserLang);

// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Scroll progress bar
const progressBar = document.getElementById('scrollProgress');
function updateProgress() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progressBar.style.width = pct + '%';
}
window.addEventListener('scroll', updateProgress, { passive: true });
updateProgress();

// Scroll reveal via IntersectionObserver
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => revealObserver.observe(el));

// Hero spotlight: follows pointer (mouse or touch) once there's input,
// otherwise sweeps on its own so the hero never looks static.
const heroSpotlight = document.getElementById('heroSpotlight');
const hero = document.querySelector('.hero');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (hero && heroSpotlight && !reducedMotion) {
  let userIsControlling = false;
  let sweepRunning = true;

  function setSpotlight(clientX, clientY) {
    const rect = hero.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    const y = ((clientY - rect.top) / rect.height) * 100;
    heroSpotlight.style.setProperty('--x', x + '%');
    heroSpotlight.style.setProperty('--y', y + '%');
  }

  hero.addEventListener('pointermove', (e) => {
    userIsControlling = true;
    sweepRunning = false;
    setSpotlight(e.clientX, e.clientY);
  });

  hero.addEventListener('pointerleave', () => {
    userIsControlling = false;
    if (!sweepRunning) {
      sweepRunning = true;
      requestAnimationFrame(sweep);
    }
  });

  // Autonomous sweep — runs until the user actively points/taps inside hero
  let angle = 0;
  function sweep() {
    if (userIsControlling) return;
    angle += 0.006;
    const x = 50 + Math.sin(angle) * 35;
    const y = 30 + Math.cos(angle * 0.7) * 20;
    heroSpotlight.style.setProperty('--x', x + '%');
    heroSpotlight.style.setProperty('--y', y + '%');
    requestAnimationFrame(sweep);
  }
  requestAnimationFrame(sweep);
}

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    navToggle.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.classList.remove('open');
    });
  });
}


const bookingForm = document.getElementById('bookingForm');
const formSuccess = document.getElementById('formSuccess');

if (bookingForm) {
  bookingForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Ovo sprječava osvježavanje stranice i 404 grešku!

    const formData = new FormData(bookingForm);

    // Šaljemo podatke Netlify-u u pozadini
    fetch('/', {
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
    .then(() => {
      // Kada se uspješno pošalje, resetuj formu i prikaži zelenu poruku
      bookingForm.reset();
      if (formSuccess) {
        formSuccess.classList.add('show'); 
      }
    })
    .catch((error) => {
      console.error('Greška pri slanju:', error);
      alert('Došlo je do greške. Pokušajte ponovo.');
    });
  });
}
}