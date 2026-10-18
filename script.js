// ============ LANGUAGE (BS / EN) ============
const translations = {
  bs: {
    page_title: "Spotlight Edits — Montaža fudbalskih highlight klipova i video CV",
    page_description: "Profesionalna montaža fudbalskih highlight klipova i video CV-a za igrače. Brza isporuka — spremno za slanje klubovima, skautima i menadžerima. Pro Scout, Spotlight i Complete CV.",
    og_locale: "bs_BA",
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
    reel1_title: "PRO SCOUT",
    reel1_desc: "Brza i estetska montaža tvojih najboljih poteza u kompletan video CV sa grafičkim elementima.",
    reel2_tag: "ODBRANA / REFLEKS",
    reel2_title: "SPOTLIGHT",
    reel2_desc: "Tvoje najbolje fudbalske momente pretvaramo u dinamične, profesionalne highlightove napravljene za TikTok, Instagram Reels i YouTube Shorts.",
    reel3_tag: "TIM / MEČ",
    reel3_title: "COMPLETE CV",
    reel3_desc: "Dobij kompletan paket: profesionalni fudbalski CV i highlightove za društvene mreže, napravljene da pokažu tvoj talenat klubovima, trenerima i skautima.",
    cjena_eyebrow: "Paketi",
    cjena_heading: "Odaberi paket koji ti odgovara",
    p1_tag: "PRO SCOUT",
    p1_f1: "Pregled 5–10 cijelih utakmica", p1_f2: "Najbolje akcije izdvojene i složene po kategorijama",
    p1_f3: "Telestration, praćenje kretanja i označavanje igrača", p1_f4: "Profesionalni highlight video od 4–7 minuta",
    p2_badge: "Najtraženiji",
    p2_f1: "Najbolje akcije izabrane sa tvojih snimaka utakmica", p2_f2: "Brzi rezovi, glatke tranzicije i upečatljivi efekti",
    p2_f3: "Prilagođeni intro, outro i ID kartica igrača (ime, pozicija, kontakt)", p2_f4: "Do 2 minute, optimizovano za vertikalni format 9:16",
    p3_tag: "COMPLETE CV", p3_amount: "Po dogovoru",
    p3_f1: "Pregled 5–10 cijelih utakmica", p3_f2: "Kompletan highlight video od 4–7 minuta u formatu 16:9",
    p3_f3: "Vertikalni videi do 2 minute u formatu 9:16", p3_f4: "Telestration, praćenje igrača, ID grafika, intro i outro u oba formata",
    btn_odaberi: "Odaberi", btn_kontaktiraj: "Kontaktiraj me",
    btn_saznaj: "Saznaj više →",
    detail_for_heading: "Idealno za:",
    detail_includes_heading: "Šta dobijaš:",
    modal_close_aria: "Zatvori",
    p1_detail_title: "PRO SCOUT – Highlight video",
    p1_detail_sub: "Ti nam pošalješ utakmice, mi radimo sav posao",
    p1_detail_body: "Najbolji izbor kad nemaš vremena da sam pregledaš i sječeš snimke — mi gledamo tvoje utakmice, biramo najbolje trenutke i pravimo profesionalni highlight video.",
    p1_detail_for1: "Igrače bez vremena da sami biraju momente",
    p1_detail_for2: "Ozbiljne prijave klubovima i agentima",
    p1_detail_for3: "Kompletan pregled forme kroz više utakmica",
    p1_detail_inc1: "Pregled 5–10 cijelih utakmica",
    p1_detail_inc2: "Najbolje akcije izdvojene i složene po kategorijama",
    p1_detail_inc3: "Telestration, praćenje kretanja i označavanje igrača",
    p1_detail_inc4: "Profesionalni highlight video od 4–7 minuta",
    p1_detail_inc5: "Čist zvuk i prilagođena pozadinska muzika",
    p2_detail_title: "SPOTLIGHT – Vertikalni highlight",
    p2_detail_sub: "Kratak i dinamičan highlight za društvene mreže",
    p2_detail_body: "Idealno kad želiš brz, upečatljiv klip svojih najboljih akcija u vertikalnom formatu — spreman za Instagram, TikTok i slanje klubovima.",
    p2_detail_for1: "Objave na Instagramu i TikTok-u",
    p2_detail_for2: "Brzo predstavljanje klubovima i agentima",
    p2_detail_for3: "Igrače koji žele kratak i efektan klip",
    p2_detail_inc1: "Najbolje akcije izabrane sa tvojih snimaka utakmica",
    p2_detail_inc2: "Brzi rezovi, glatke tranzicije i upečatljivi efekti",
    p2_detail_inc3: "Prilagođeni intro, outro i ID kartica igrača sa imenom, pozicijom i kontaktom",
    p2_detail_inc4: "Do 2 minute, optimizovano za vertikalni format 9:16",
    p3_detail_title: "COMPLETE CV – Kompletan paket",
    p3_detail_sub: "Profesionalni CV i highlightovi za društvene mreže u jednom paketu",
    p3_detail_body: "Najkompletniji izbor: pregledamo tvoje utakmice i pravimo i horizontalni CV video za klubove i vertikalne klipove za društvene mreže.",
    p3_detail_for1: "Igrače koji žele i CV i sadržaj za društvene mreže",
    p3_detail_for2: "Ozbiljne prijave klubovima, trenerima i skautima",
    p3_detail_for3: "Kompletan pregled forme kroz više utakmica",
    p3_detail_inc1: "Pregled 5–10 cijelih utakmica",
    p3_detail_inc2: "Kompletan highlight video od 4–7 minuta u formatu 16:9",
    p3_detail_inc3: "Vertikalni videi do 2 minute u formatu 9:16",
    p3_detail_inc4: "Telestration, praćenje igrača, ID grafika, intro i outro u oba formata",
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
    form_link: "Link snimka utakmice (opcionalno)",
    form_message: "Poruka", form_message_ph: "Minutaža najboljih akcija, dres broj, boja tima...",
    form_submit: "Pošalji zahtjev",
    form_success: "Hvala! Javljam se uskoro na tvoj email.",
    pos_1: "Napadač", pos_2: "Vezni", pos_3: "Odbrambeni", pos_4: "Golman",
    pkg_1: "Pro Scout", pkg_2: "Spotlight", pkg_3: "Complete CV",
    footer_kontakt: "Kontakt",
    footer_rights: "Sva prava zadržana.",
  },
  en: {
    page_title: "Spotlight Edits — Football Highlight Video Editing & Player Video CV",
    page_description: "Professional football highlight video editing and player video CVs. Fast delivery — ready to send to clubs, scouts, and managers. Pro Scout, Spotlight, and Complete CV.",
    og_locale: "en_US",
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
    reel1_title: "PRO SCOUT",
    reel1_desc: "Fast and aesthetic editing of your best highlights into a complete video CV featuring graphic elements.",
    reel2_tag: "SAVE / REFLEX",
    reel2_title: "SPOTLIGHT",
    reel2_desc: "We turn your best football moments into dynamic, professional highlights designed for TikTok, Instagram Reels, and YouTube Shorts.",
    reel3_tag: "COMPLETE CV",
    reel3_title: "COMPLETE CV",
    reel3_desc: "Get the complete package: a professional football CV and social media highlights designed to showcase your talent to clubs, coaches, and scouts.",
    cjena_eyebrow: "Packages",
    cjena_heading: "Choose the package that fits you",
    p1_tag: "PRO SCOUT",
    p1_f1: "Review of 5–10 full matches", p1_f2: "Best actions extracted and sorted by category",
    p1_f3: "Telestration, movement tracking and player identification", p1_f4: "4–7 minute professional highlight video",
    p2_badge: "Most popular",
    p2_f1: "Best actions selected from your match footage", p2_f2: "Fast cuts, smooth transitions and engaging effects",
    p2_f3: "Custom intro, outro and player ID card with name, position and contact", p2_f4: "Up to 2 minutes, optimized for vertical 9:16",
    p3_tag: "COMPLETE CV", p3_amount: "By agreement",
    p3_f1: "Review of 5–10 full matches", p3_f2: "A complete 4–7 minute highlight video in 16:9",
    p3_f3: "Vertical videos up to 2 minutes in 9:16", p3_f4: "Telestration, player tracking, ID graphics, intro and outro across both formats",
    btn_odaberi: "Choose", btn_kontaktiraj: "Contact me",
    btn_saznaj: "Learn more →",
    detail_for_heading: "Ideal for:",
    detail_includes_heading: "What you get:",
    modal_close_aria: "Close",
    p1_detail_title: "PRO SCOUT – Highlight video",
    p1_detail_sub: "You send the matches, we do all the work",
    p1_detail_body: "The best choice when you don't have time to review and cut footage yourself — we watch your matches, pick the best moments, and build a professional highlight video.",
    p1_detail_for1: "Players with no time to pick moments themselves",
    p1_detail_for2: "Serious applications to clubs and agents",
    p1_detail_for3: "A complete look at your form across several matches",
    p1_detail_inc1: "Review of 5–10 full matches",
    p1_detail_inc2: "Best actions extracted and sorted by category",
    p1_detail_inc3: "Telestration, movement tracking and player identification",
    p1_detail_inc4: "4–7 minute professional highlight video",
    p1_detail_inc5: "Clean audio and matched background music",
    p2_detail_title: "SPOTLIGHT – Vertical Highlight",
    p2_detail_sub: "A short, dynamic highlight for social media",
    p2_detail_body: "Perfect when you want a fast, eye-catching clip of your best actions in vertical format — ready for Instagram, TikTok and sending to clubs.",
    p2_detail_for1: "Instagram and TikTok posts",
    p2_detail_for2: "Quick introductions to clubs and agents",
    p2_detail_for3: "Players who want a short, punchy clip",
    p2_detail_inc1: "Best actions selected from your match footage",
    p2_detail_inc2: "Fast cuts, smooth transitions and engaging effects",
    p2_detail_inc3: "Custom intro, outro and player ID card with name, position and contact",
    p2_detail_inc4: "Up to 2 minutes, optimized for vertical 9:16",
    p3_detail_title: "COMPLETE CV – The Full Package",
    p3_detail_sub: "A professional CV and social media highlights in one package",
    p3_detail_body: "The most complete choice: we review your matches and create both a widescreen CV video for clubs and vertical clips for social media.",
    p3_detail_for1: "Players who want both a CV and social media content",
    p3_detail_for2: "Serious applications to clubs, coaches, and scouts",
    p3_detail_for3: "A complete look at your form across several matches",
    p3_detail_inc1: "Review of 5–10 full matches",
    p3_detail_inc2: "A complete 4–7 minute highlight video in 16:9",
    p3_detail_inc3: "Vertical videos up to 2 minutes in 9:16",
    p3_detail_inc4: "Telestration, player tracking, ID graphics, intro and outro across both formats",
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
    form_link: "Link to match footage (optional)",
    form_message: "Message", form_message_ph: "Timestamps of best moments, jersey number, team color...",
    form_submit: "Send request",
    form_success: "Thanks! I'll be in touch soon by email.",
    pos_1: "Forward", pos_2: "Midfielder", pos_3: "Defender", pos_4: "Goalkeeper",
    pkg_1: "Pro Scout", pkg_2: "Spotlight", pkg_3: "Complete CV",
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

  const ogTitle = document.getElementById('ogTitle');
  const ogDescription = document.getElementById('ogDescription');
  const ogLocale = document.getElementById('ogLocale');
  const twitterTitle = document.getElementById('twitterTitle');
  const twitterDescription = document.getElementById('twitterDescription');
  if (ogTitle) ogTitle.setAttribute('content', dict.page_title);
  if (ogDescription) ogDescription.setAttribute('content', dict.page_description);
  if (ogLocale) ogLocale.setAttribute('content', dict.og_locale || (lang === 'en' ? 'en_US' : 'bs_BA'));
  if (twitterTitle) twitterTitle.setAttribute('content', dict.page_title);
  if (twitterDescription) twitterDescription.setAttribute('content', dict.page_description);

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

        // Link je opcionalan - ako je prazan, forma se šalje normalno
        if (!uneseniLink) return;

        let poslaniLinkovi = JSON.parse(localStorage.getItem('iskoristeniLinkovi')) || [];
        
        if (poslaniLinkovi.includes(uneseniLink)) {
            event.preventDefault(); 
            event.stopImmediatePropagation(); // Ubija Netlifyjevu skriptu da ne šalje mail
            alert('Ovaj link je već poslan! Ako prijavljujete novu utakmicu, molimo zalijepite novi link.');
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