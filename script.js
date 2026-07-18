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
    hero_sub: "Montiramo highlight klipove od snimka utakmice — spremne za slanje klubovima, skautima i managerima. Brzo, čisto, efektno.",
    hero_btn_primary: "Pogledaj pakete",
    hero_btn_ghost: "Pošalji snimak",
    hero_scroll: "Skroluj",
    proces_eyebrow: "Proces",
    proces_heading: "Od snimka utakmice do klipa koji se šalje dalje",
    proces1_title: "Pošalji snimak",
    proces1_desc: "Putem forme ispod pošalji nam link (WeTransfer)tvojim video materijalom. Možeš nam poslati snimak cijele utakmice kako bismo mi detaljno pregledali meč i pronašli tvoje najbolje momente, ili nam jednostavno proslijedi već isječene klipove svojih akcija koje želiš da profesionalno uobličimo i montiramo.",
    proces2_title: "Odabir i analiza akcija",
    proces2_desc: "Prolazimo kroz poslani materijal (bilo cijeli meč ili tvoje isječke) i sortiramo tvoje najbolje trenutke — driblinge, asistencije, golove, odbrane i ključne taktičke poteze, pripremajući ih za maksimalan vizuelni efekat.",
    proces3_title: "Montaža",
    proces3_desc: "​Odabrane detalje sklapamo u dinamičan video. Koristimo profesionalne rezove, efekte usporenog snimka (slow-motion), te modernu grafiku sa tvojim imenom i pozicijom. Po potrebi ubacujemo i vizuelni prikaz statistike sa utakmice.",
    proces4_title: "Isporuka",
    proces4_desc: "Dobijaš gotov video visoke rezolucije, spreman za slanje menadžerima, skautima i klubovima, ili za direktno objavljivanje na društvenim mrežama.",
    stil_eyebrow: "Stil montaže",
    stil_heading: "Kako izgleda gotov klip?",
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
    p1_tag: "SMART CUT", p1_unit: "/klip",
    p1_f1: "Spajanje tvojih isječenih klipova u CV video", p1_f2: "Grafička ID kartica (ime, pozicija, kontakt...)",
    p1_f3: "Vizuelno označavanje igrača prije svakog poteza", p1_f4: "2 verzije: teaser za social media + Full CV",
    p2_badge: "Najtraženiji", p2_unit: "/klip",
    p2_f1: "Pregled 5–10 tvojih cijelih utakmica", p2_f2: "Izvlačenje top poteza po kategorijama",
    p2_f3: "Premium \"Telestration\" praćenje kretanja", p2_f4: "Gotov CV video (4–7 min)",
    p2_f5: "",
    p3_tag: "ELITE ANALYTICS", p3_amount: "Po dogovoru",
    p3_f1: "Video analiza dobrih i loših strana", p3_f2: "Crtanje po ekranu (strelice, linije, prostor)",
    p3_f3: "Statistički karton u PDF-u", p3_f4: "Stručni rezime sa smjernicama za napredak",
    btn_odaberi: "Odaberi", btn_kontaktiraj: "Kontaktiraj me",
    btn_saznaj: "Saznaj više →",
    detail_for_heading: "Idealno za:",
    detail_includes_heading: "Šta dobijaš:",
    modal_close_aria: "Zatvori",
    p1_detail_title: "SMART CUT – Brzi CV Video",
    p1_detail_sub: "Ti imaš isječke, mi pravimo profesionalni CV",
    p1_detail_body: "Idealno kad već imaš isječene klipove svojih akcija i želiš brzo, estetski dotjeran video spreman za slanje — bez čekanja da neko pregleda cijele utakmice.",
    p1_detail_for1: "Igrače koji već imaju isječene klipove",
    p1_detail_for2: "Brzo slanje klubovima i agentima",
    p1_detail_for3: "Objave na Instagramu/TikTok-u",
    p1_detail_inc1: "Grafička ID kartica na početku (ime, godište, pozicija, visina, jača noga, kontakt)",
    p1_detail_inc2: "Vizuelno označavanje igrača (krug/strelica) prije svakog poteza",
    p1_detail_inc3: "Kratki teaser (1 min) za Instagram/TikTok",
    p1_detail_inc4: "Full CV (3–5 min) za YouTube i agente",
    p1_detail_inc5: "Čist zvuk i prilagođena pozadinska muzika",
    p2_detail_title: "PRO SCOUT – Full CV",
    p2_detail_sub: "Ti nam pošalješ utakmice, mi radimo sav posao",
    p2_detail_body: "Najbolji izbor kad nemaš vremena da sam pregledaš i sječeš snimke — mi gledamo tvoje utakmice, biramo najbolje trenutke i pravimo CV koji izgleda kao da ga je radio klub, ne amater.",
    p2_detail_for1: "Igrače bez vremena da sami biraju momente",
    p2_detail_for2: "Ozbiljne prijave klubovima i agentima",
    p2_detail_for3: "Kompletan pregled forme kroz više utakmica",
    p2_detail_inc1: "Pregled 5–10 tvojih cijelih utakmica",
    p2_detail_inc2: "Top potezi izvučeni i složeni po kategorijama (pasovi, duel, golovi/asistencije)",
    p2_detail_inc3: "Premium \"Telestration\" praćenje kretanja (TV stil analiza)",
    p2_detail_inc4: "Kompletan CV video (4–7 min) spreman za slanje",
    p3_detail_title: "ELITE ANALYTICS – Video i Statistički Report",
    p3_detail_sub: "Dubinska analiza tvoje igre, ne samo \"šminka\" za prodaju",
    p3_detail_body: "Premium paket za igrače, trenere i agente koji žele stvaran uvid u formu — analiza donesenih odluka, taktičkih grešaka i konkretnih brojki, sa jasnim smjernicama za napredak.",
    p3_detail_for1: "Igrače koji žele da vide gdje da napreduju",
    p3_detail_for2: "Trenere i agente kojima treba detaljan uvid",
    p3_detail_for3: "Analizu jedne utakmice ili cijele polusezone/sezone",
    p3_detail_inc1: "Video analiza \"dobre i loše strane\" (odlične odluke + greške u postavci/taktici)",
    p3_detail_inc2: "Crtanje po ekranu (strelice kretanja, linije tima, prostor)",
    p3_detail_inc3: "Statistički karton (PDF): % tačnih pasova, dobijeni dueli, oduzete lopte",
    p3_detail_inc4: "Stručni rezime sa jasnim smjernicama za napredak",
    pricing_note: `* Cijene su okvirne — uredi ih u <code>index.html</code> prema svojoj ponudi.`,
    kontakt_eyebrow: "Rezervacija",
    kontakt_heading: "Pošalji snimak i izaberi paket",
    kontakt_desc: "Popuni formu i javljam se u roku od 24h da dogovorimo detalje.",
    kontakt_ili: "Ili direktno:",
    form_bot: "Ne popunjavaj ovo polje: ",
    form_name: "Ime i prezime", form_name_ph: "Ime Prezime",
    form_email: "Email", form_email_ph: "ime@email.com",
    form_phone: "Telefon",
    form_position: "Pozicija",
    form_package: "Paket",
    form_link: "Link snimka utakmice",
    form_message: "Poruka", form_message_ph: "Minutaža najboljih akcija, dres broj, boja tima...",
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
    hero_sub: "We edit highlight clips from raw match footage — ready to send to clubs, scouts, and managers. Fast, clean, effective.",
    hero_btn_primary: "See packages",
    hero_btn_ghost: "Send your footage",
    hero_scroll: "Scroll",
    proces_eyebrow: "Process",
    proces_heading: "From raw footage to a clip that gets sent forward",
    proces1_title: "Send your footage",
    proces1_desc: "Please use the form below to send us a link (WeTransfer) to your video footage. You can send us a recording of the entire match so we can review it in detail and select your best moments, or simply forward your pre-cut highlight clips that you would like us to professionally edit and compile.",
    proces2_title: "Picking the highlights",
    proces2_desc: "We review the submitted footage (whether it's the full match or your clips) and select your best moments — dribbling, assists, goals, defensive plays, and key tactical moves — preparing them for maximum visual impact.",
    proces3_title: "Editing",
    proces3_desc: "We compile the selected highlights into a dynamic video. We use professional cuts, slow-motion effects, and modern graphics featuring your name and position. If needed, we also include visual representations of the match statistics.",
    proces4_title: "Delivery",
    proces4_desc: "You receive a final, high-resolution video ready to be sent to managers, scouts, and clubs, or for direct posting on social media.",
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
    p1_tag: "SMART CUT", p1_unit: "/clip",
    p1_f1: "We compile your pre-cut clips into a CV video", p1_f2: "Graphic ID card (name, position, contact...)",
    p1_f3: "Player highlighted before every move", p1_f4: "2 versions: social media teaser + Full CV",
    p2_badge: "Most popular", p2_unit: "/clip",
    p2_f1: "Review of 5–10 of your full matches", p2_f2: "Top plays extracted and sorted by category",
    p2_f3: "Premium \"telestration\" movement tracking", p2_f4: "Finished CV video (4–7 minutes)",
    p2_f5: "",
    p3_tag: "ELITE ANALYTICS", p3_amount: "By agreement",
    p3_f1: "Video analysis of strengths and weaknesses", p3_f2: "On-screen drawing (arrows, lines, space)",
    p3_f3: "Stats card in PDF", p3_f4: "Expert summary with pointers for improvement",
    btn_odaberi: "Choose", btn_kontaktiraj: "Contact me",
    btn_saznaj: "Learn more →",
    detail_for_heading: "Ideal for:",
    detail_includes_heading: "What you get:",
    modal_close_aria: "Close",
    p1_detail_title: "SMART CUT – Quick CV Video",
    p1_detail_sub: "You've got the clips, we build the professional CV",
    p1_detail_body: "Perfect when you already have your highlight clips cut and want a polished, professional video ready to send fast — no waiting for anyone to review full matches.",
    p1_detail_for1: "Players who already have their clips cut",
    p1_detail_for2: "Fast turnaround for clubs and agents",
    p1_detail_for3: "Instagram/TikTok posts",
    p1_detail_inc1: "Graphic ID card at the start (name, birth year, position, height, strong foot, contact)",
    p1_detail_inc2: "Player highlighted (circle/arrow) before every move",
    p1_detail_inc3: "Short teaser (1 min) for Instagram/TikTok",
    p1_detail_inc4: "Full CV (3–5 min) for YouTube and agents",
    p1_detail_inc5: "Clean audio and matched background music",
    p2_detail_title: "PRO SCOUT – Full CV",
    p2_detail_sub: "You send the matches, we do all the work",
    p2_detail_body: "The best choice when you don't have time to review and cut footage yourself — we watch your matches, pick the best moments, and build a CV that looks club-made, not amateur.",
    p2_detail_for1: "Players with no time to pick moments themselves",
    p2_detail_for2: "Serious applications to clubs and agents",
    p2_detail_for3: "A complete look at your form across several matches",
    p2_detail_inc1: "Review of 5–10 of your full matches",
    p2_detail_inc2: "Top plays extracted and sorted by category (passes, duels, goals/assists)",
    p2_detail_inc3: "Premium \"telestration\" movement tracking (TV-style analysis)",
    p2_detail_inc4: "Complete CV video (4–7 min) ready to send",
    p3_detail_title: "ELITE ANALYTICS – Video & Stats Report",
    p3_detail_sub: "A deep look at your game, not just a highlight reel",
    p3_detail_body: "A premium package for players, coaches, and agents who want a real read on form — decision-making, tactical mistakes, and hard numbers, with clear pointers on what to work on.",
    p3_detail_for1: "Players who want to see where to improve",
    p3_detail_for2: "Coaches and agents who need a detailed read",
    p3_detail_for3: "Analysis of one match or a whole half-season/season",
    p3_detail_inc1: "\"Strengths and weaknesses\" video analysis (good decisions + positioning/tactical errors)",
    p3_detail_inc2: "On-screen drawing (movement arrows, team lines, space)",
    p3_detail_inc3: "Stats card (PDF): pass accuracy %, duels won, balls recovered",
    p3_detail_inc4: "Expert summary with clear pointers for improvement",
    pricing_note: `* Prices are indicative — edit them in <code>index.html</code> to match your offer.`,
    kontakt_eyebrow: "Booking",
    kontakt_heading: "Send your footage and pick a package",
    kontakt_desc: "Fill in the form and I'll get back to you within 24h to sort out the details.",
    kontakt_ili: "Or reach out directly:",
    form_bot: "Leave this field empty: ",
    form_name: "Full name", form_name_ph: "Name Surname",
    form_email: "Email", form_email_ph: "you@email.com",
    form_phone: "Phone",
    form_position: "Position",
    form_package: "Package",
    form_link: "Link to match footage",
    form_message: "Message", form_message_ph: "Timestamps of best moments, jersey number, team color...",
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

  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria');
    if (dict[key] !== undefined) el.setAttribute('aria-label', dict[key]);
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

// Funkcija za automatsko selektovanje paketa u formi
function odaberiPaket(imePaketa) {
    const paketSelect = document.getElementById('package');
    if (paketSelect) {
        paketSelect.value = imePaketa;
    }
}

(function() {
    const forma = document.getElementById('bookingForm');
    if (!forma) return;

    // Obrati pažnju na 'true' na samom kraju - to znači da naša skripta presreće formu PRVA
    forma.addEventListener('submit', function(event) {
        const linkPolje = document.getElementById('link');
        if (!linkPolje) return;

        const uneseniLink = linkPolje.value.trim().toLowerCase();

       
        if (!uneseniLink.includes('wetransfer.com') && !uneseniLink.includes('we.tl')) {
            event.preventDefault(); 
            event.stopImmediatePropagation(); // Ubija Netlifyjevu skriptu da ne šalje mail
            alert('Molimo vas da unesete validan WeTransfer link.');
            return;
        }

        
        let poslaniLinkovi = JSON.parse(localStorage.getItem('iskoristeniLinkovi')) || [];
        
        if (poslaniLinkovi.includes(uneseniLink)) {
            event.preventDefault(); 
            event.stopImmediatePropagation(); // Ubija Netlifyjevu skriptu da ne šalje mail
            alert('Ovaj WeTransfer link je već poslan! Ako prijavljujete novu utakmicu, molimo zalijepite novi link.');
            return;
        }

        
        poslaniLinkovi.push(uneseniLink);
        localStorage.setItem('iskoristeniLinkovi', JSON.stringify(poslaniLinkovi));
        
    }, true); 
})();

// ============ PRICING DETAIL MODAL ============
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const modalPanels = document.querySelectorAll('.modal-panel');
const moreButtons = document.querySelectorAll('.price-more');

function openModal(targetId) {
  modalPanels.forEach(p => p.classList.toggle('active', p.id === targetId));
  if (modalOverlay) modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  if (modalOverlay) modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

moreButtons.forEach(btn => {
  btn.addEventListener('click', () => openModal(btn.getAttribute('data-modal')));
});
if (modalClose) modalClose.addEventListener('click', closeModal);
if (modalOverlay) {
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });
}
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('open')) closeModal();
});