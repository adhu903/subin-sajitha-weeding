/**
 * SUBIN & SAJITHA - WEDDING INVITATION INTERACTIVE SCRIPT
 * Features:
 * - Bilingual (English / Malayalam) live language switch
 * - Real-time countdown timer to Nov 22, 2026 10:00 AM IST
 * - Falling flower petals (Rose & Jasmine) physics canvas
 * - Romantic background music player with Web Audio API fallback
 * - Interactive November 2026 calendar & .ics / Google Calendar generation
 * - Masonry gallery with filtering, lightbox, and photo liking
 * - RSVP form with WhatsApp direct dispatch & celebration confetti
 * - Live wishes & blessings guestbook wall
 * - Original physical card viewer modal
 */

// -------------------------------------------------------------
// 1. BILINGUAL DICTIONARY (English <-> Malayalam)
// -------------------------------------------------------------
const translations = {
  en: {
    nav_story: "Our Story",
    nav_couple: "The Couple",
    nav_events: "Events",
    nav_calendar: "Save The Date",
    nav_gallery: "Gallery",
    nav_rsvp: "RSVP",
    music_btn: "Play Music",
    music_btn_pause: "Pause Music",
    petals_toggle: "Petals",
    invocation_text: "|| Om Shree Ganeshaya Namaha ||",
    hero_pretitle: "We are getting married!",
    hero_title_names: "SUBIN ❤️ SAJITHA",
    hero_date: "Sunday, 22 November 2026",
    hero_date_sub: "1202 Vrischikam 6 (മലയാള മാസം)",
    countdown_title: "COUNTING DOWN TO THE MUHURTHAM",
    cd_days: "Days",
    cd_hours: "Hours",
    cd_minutes: "Mins",
    cd_seconds: "Secs",
    btn_events: "View Events & Venues",
    btn_rsvp_hero: "Send RSVP",
    btn_add_cal: "Add to Calendar",
    btn_download_ics: "Download iCal (.ics)",
    
    // Couple Section
    couple_tag: "With Joyful Hearts",
    couple_title: "The Bride & The Groom",
    groom_role: "The Groom",
    groom_name: "SUBIN",
    groom_relation: "Son of Mr. Sudhevan & Mrs. Ambika Sudhevan",
    groom_addr_lbl: "Family Residence",
    groom_address: "Kunnampully House, Karappetta, Kannambra (P.O), Palakkad",
    bride_role: "The Bride",
    bride_name: "SAJITHA",
    bride_relation: "Daughter of Mr. Sathanandhan & Mrs. Shiji Sathanandhan",
    bride_addr_lbl: "Family Residence",
    bride_address: "Thattil House, Mullakkara, Mannuthi (P.O), Thrissur",
    
    // Events Section
    events_tag: "Ceremony & Celebrations",
    events_title: "Events & Itinerary",
    events_subtitle: "We would be honored by your presence and blessings at our wedding ceremonies",
    event1_badge: "Auspicious Muhurtham",
    event1_title: "The Wedding Ceremony",
    event1_title_sub: "വിവാഹം",
    event1_date: "Sunday, 22 November 2026",
    event1_time: "Between 10:00 AM to 11:00 AM",
    event1_time_sub: "Auspicious Muhurtham",
    event1_party_note: "Marriage party will start at 9:00 AM",
    event1_venue: "Sree Badra Auditorium",
    event1_venue_loc: "Mannuthi, Thrissur, Kerala",
    btn_directions: "Get Directions (Google Maps)",
    
    event2_badge: "Grand Evening Celebration",
    event2_title: "Wedding Reception",
    event2_title_sub: "സൽക്കാരം",
    event2_date: "Sunday, 22 November 2026",
    event2_time: "4:00 PM to 7:00 PM",
    event2_time_sub: "Evening Reception",
    event2_venue: "Mangalya Auditorium",
    event2_venue_loc: "Kannambra, Palakkad, Kerala",
    btn_view_original_cards: "View Original Printed Invitation Card",
    
    // Gallery
    gallery_tag: "Cherished Moments",
    gallery_title: "Photo Gallery",
    gallery_subtitle: "Glances of love, traditions, and timeless celebrations",
    filter_all: "All Photos",
    filter_couple: "Couple & Arch",
    filter_prewedding: "Pre-Wedding",
    filter_tradition: "Kerala Traditions",
    
    // RSVP Section
    rsvp_tag: "Be Our Guest",
    rsvp_title: "RSVP & Blessings",
    invitation_quote: "“Cordially invite your esteemed presence with family and friends on the auspicious occasion.”",
    contact_note: "For any assistance or travel inquiries:",
    contact_phone: "+91 9020875035",
    form_lbl_name: "Your Full Name",
    form_lbl_phone: "Phone / WhatsApp Number",
    form_lbl_attending: "Will You Be Attending?",
    form_opt_yes: "Yes, with pleasure!",
    form_opt_no: "Regretfully decline",
    form_lbl_events: "Which Events Will You Attend?",
    form_opt_both: "Both Wedding & Reception",
    form_opt_wedding: "Wedding Only",
    form_opt_reception: "Reception Only",
    form_lbl_guests: "Number of Guests",
    form_lbl_wishes: "Your Warm Wishes for the Couple",
    btn_submit_rsvp: "Confirm RSVP Online",
    btn_whatsapp_rsvp: "RSVP via WhatsApp",
    rsvp_success_text: "Thank you so much! Your RSVP and heartfelt wishes have been recorded. We look forward to celebrating with you!",
    
    // Wishes Wall
    wishes_tag: "Love & Good Wishes",
    wishes_title: "Blessings Wall",
    wishes_subtitle: "Heartfelt notes and love from our dearest family and friends",
    
    // Footer
    footer_compliments: "With best Compliments from: Friends & Relatives",
    footer_compliments_sub: "ഹൃദയം നിറഞ്ഞ ഉപചാരങ്ങളോടെ",
    footer_share: "Share Invitation",
    footer_copy_link: "Copy Link",
    toast_copied: "Invitation link copied to clipboard!"
  },
  
  ml: {
    nav_story: "ഞങ്ങളുടെ കഥ",
    nav_couple: "ദമ്പതികൾ",
    nav_events: "ചടങ്ങുകൾ",
    nav_calendar: "തീയതി കുറിക്കുക",
    nav_gallery: "ചിത്രശാല",
    nav_rsvp: "വരവ് അറിയിക്കുക",
    music_btn: "സംഗീതം കേൾക്കൂ",
    music_btn_pause: "സംഗീതം നിർത്തൂ",
    petals_toggle: "പൂക്കൾ",
    invocation_text: "|| ഓം ശ്രീ ഗണേശായ നമഃ ||",
    hero_pretitle: "ഞങ്ങൾ വിവാഹിതരാവുകയാണ്!",
    hero_title_names: "സുബിൻ ❤️ സജിത",
    hero_date: "2026 നവംബർ 22, ഞായറാഴ്ച",
    hero_date_sub: "1202 വൃശ്ചികം 06 (കൊല്ലവർഷം)",
    countdown_title: "വിവാഹ ശുഭമുഹൂർത്തത്തിലേക്കുള്ള സമയം",
    cd_days: "ദിവസങ്ങൾ",
    cd_hours: "മണിക്കൂറുകൾ",
    cd_minutes: "മിനിറ്റുകൾ",
    cd_seconds: "സെക്കൻഡുകൾ",
    btn_events: "ചടങ്ങുകളുടെ വിശദാംശങ്ങൾ",
    btn_rsvp_hero: "വരവ് അറിയിക്കാം",
    btn_add_cal: "കലണ്ടറിൽ ചേർക്കാം",
    btn_download_ics: "iCal (.ics) ഡൗൺലോഡ്",
    
    // Couple Section
    couple_tag: "സന്തോഷപൂർവ്വം",
    couple_title: "വരനും വധുവും",
    groom_role: "വരൻ",
    groom_name: "സുബിൻ",
    groom_relation: "ശ്രീ. സുദേവൻ & ശ്രീമതി. അംബിക സുദേവൻ ദമ്പതികളുടെ മകൻ",
    groom_addr_lbl: "കുടുംബ വിലാസം",
    groom_address: "കുന്നംപുള്ളി ഹൗസ്, കാരപ്പറ്റ, കണ്ണമ്പ്ര (പി.ഒ), പാലക്കാട്",
    bride_role: "വധു",
    bride_name: "സജിത",
    bride_relation: "ശ്രീ. സദാനന്ദൻ & ശ്രീമതി. ഷീജ സദാനന്ദൻ ദമ്പതികളുടെ മകൾ",
    bride_addr_lbl: "കുടുംബ വിലാസം",
    bride_address: "തട്ടിൽ ഹൗസ്, മുള്ളക്കര, മണ്ണുത്തി (പി.ഒ), തൃശ്ശൂർ",
    
    // Events Section
    events_tag: "വിവാഹ ചടങ്ങുകൾ",
    events_title: "വിവാഹവും സൽക്കാരവും",
    events_subtitle: "ഞങ്ങളുടെ വിവാഹത്തിലും തുടർന്നുള്ള സൽക്കാരത്തിലും കുടുംബസമേതം പങ്കുകൊള്ളുവാൻ സാദരം ക്ഷണിക്കുന്നു",
    event1_badge: "ശുഭമുഹൂർത്തം",
    event1_title: "വിവാഹം (The Wedding)",
    event1_title_sub: "വിവാഹ മുഹൂർത്തം",
    event1_date: "2026 നവംബർ 22, ഞായറാഴ്ച",
    event1_time: "രാവിലെ 10.00 മുതൽ 11.00 വരെ",
    event1_time_sub: "ശുഭമുഹൂർത്തം",
    event1_party_note: "യാത്രാസമയം രാവിലെ 9.00 ന് പുറപ്പെടുന്നതാണ്",
    event1_venue: "ശ്രീ ഭദ്ര ഓഡിറ്റോറിയം",
    event1_venue_loc: "മണ്ണുത്തി, തൃശ്ശൂർ, കേരളം",
    btn_directions: "വഴി കണ്ടെത്താം (Google Maps)",
    
    event2_badge: "വിവാഹ സൽക്കാരം",
    event2_title: "സൽക്കാരം (Wedding Reception)",
    event2_title_sub: "സ്നേഹവിരുന്ന്",
    event2_date: "2026 നവംബർ 22, ഞായറാഴ്ച",
    event2_time: "വൈകുന്നേരം 4.00 മുതൽ 7.00 വരെ",
    event2_time_sub: "സ്നേഹസൽക്കാര സമയം",
    event2_venue: "മംഗല്യ ഓഡിറ്റോറിയം",
    event2_venue_loc: "കണ്ണമ്പ്ര, പാലക്കാട്, കേരളം",
    btn_view_original_cards: "യഥാർത്ഥ അച്ചടിച്ച ക്ഷണക്കത്ത് കാണാം",
    
    // Gallery
    gallery_tag: "മനോഹര നിമിഷങ്ങൾ",
    gallery_title: "ഫോട്ടോ ഗാലറി",
    gallery_subtitle: "മംഗളകരമായ നിമിഷങ്ങളും മനോഹരമായ ഓർമ്മകളും",
    filter_all: "എല്ലാ ചിത്രങ്ങളും",
    filter_couple: "സുബിൻ & സജിത",
    filter_prewedding: "പ്രീ-വെഡ്ഡിംഗ്",
    filter_tradition: "കേരളീയ തനിമ",
    
    // RSVP Section
    rsvp_tag: "നിങ്ങളെ സാദരം ക്ഷണിക്കുന്നു",
    rsvp_title: "വരവ് അറിയിക്കാം & ആശംസകൾ",
    invitation_quote: "“വിവാഹത്തിലും തുടർന്നുള്ള സൽക്കാരത്തിലും പങ്കുകൊള്ളുവാൻ താങ്കളുടെ കുടുംബസമേതമുള്ള മഹനീയ സാന്നിധ്യം സാദരം ക്ഷണിച്ചുകൊള്ളുന്നു.”",
    contact_note: "കൂടുതൽ വിവരങ്ങൾക്കും സഹായങ്ങൾക്കും:",
    contact_phone: "+91 9020875035",
    form_lbl_name: "നിങ്ങളുടെ പൂർണ്ണ നാമം",
    form_lbl_phone: "ഫോൺ / വാട്സ്ആപ്പ് നമ്പർ",
    form_lbl_attending: "പങ്കെടുക്കുമോ?",
    form_opt_yes: "തീർച്ചയായും പങ്കെടുക്കും!",
    form_opt_no: "ക്ഷമിക്കണം, എത്തിച്ചേരാൻ കഴിയില്ല",
    form_lbl_events: "ഏതൊക്കെ ചടങ്ങുകളിൽ പങ്കെടുക്കും?",
    form_opt_both: "വിവാഹത്തിലും സൽക്കാരത്തിലും",
    form_opt_wedding: "വിവാഹത്തിൽ മാത്രം",
    form_opt_reception: "സൽക്കാരത്തിൽ മാത്രം",
    form_lbl_guests: "പങ്കെടുക്കുന്ന ആളുകളുടെ എണ്ണം",
    form_lbl_wishes: "വരനും വധുവിനുമുള്ള മംഗളാശംസകൾ",
    btn_submit_rsvp: "വിവരങ്ങൾ സമർപ്പിക്കാം",
    btn_whatsapp_rsvp: "വാട്സ്ആപ്പ് വഴി അറിയിക്കാം",
    rsvp_success_text: "ഹൃദയം നിറഞ്ഞ നന്ദി! നിങ്ങളുടെ മറുപടിയും അനുഗ്രഹങ്ങളും രേഖപ്പെടുത്തിയിരിക്കുന്നു. മംഗളമുഹൂർത്തത്തിൽ കാണാം!",
    
    // Wishes Wall
    wishes_tag: "സ്നേഹാശംസകൾ",
    wishes_title: "അനുഗ്രഹങ്ങളും ആശംസകളും",
    wishes_subtitle: "പ്രിയപ്പെട്ടവരുടെ ഹൃദയം തൊട്ട മംഗളാശംസകൾ",
    
    // Footer
    footer_compliments: "ഉപചാരപൂർവ്വം: ബന്ധുമിത്രാദികൾ",
    footer_compliments_sub: "With best Compliments from: Friends & Relatives",
    footer_share: "ക്ഷണക്കത്ത് പങ്കുവെക്കാം",
    footer_copy_link: "ലിങ്ക് കോപ്പി ചെയ്യുക",
    toast_copied: "ക്ഷണക്കത്തിന്റെ ലിങ്ക് കോപ്പി ചെയ്തിരിക്കുന്നു!"
  }
};

let currentLang = 'en';

function setLanguage(lang) {
  currentLang = lang;
  document.body.classList.toggle('lang-ml', lang === 'ml');
  
  const langBtn = document.getElementById('lang-toggle-btn');
  if (langBtn) {
    langBtn.innerHTML = lang === 'en' ? 'മലയാളം' : 'English';
  }

  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  localStorage.setItem('subin_sajitha_lang', lang);
}

// -------------------------------------------------------------
// 2. COUNTDOWN TIMER
// Wedding: Nov 22, 2026, 10:00:00 AM IST (+05:30)
// -------------------------------------------------------------
const weddingDate = new Date('2026-11-22T10:00:00+05:30').getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const diff = weddingDate - now;

  const daysEl = document.getElementById('cd-days');
  const hoursEl = document.getElementById('cd-hours');
  const minsEl = document.getElementById('cd-mins');
  const secsEl = document.getElementById('cd-secs');

  if (diff <= 0) {
    if (daysEl) daysEl.innerText = "00";
    if (hoursEl) hoursEl.innerText = "00";
    if (minsEl) minsEl.innerText = "00";
    if (secsEl) secsEl.innerText = "00";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  if (daysEl) daysEl.innerText = String(days).padStart(2, '0');
  if (hoursEl) hoursEl.innerText = String(hours).padStart(2, '0');
  if (minsEl) minsEl.innerText = String(minutes).padStart(2, '0');
  if (secsEl) secsEl.innerText = String(seconds).padStart(2, '0');
}

// -------------------------------------------------------------
// 3. ROMANTIC BACKGROUND AUDIO & WEB AUDIO SYNTHESIZER FALLBACK
// -------------------------------------------------------------
let audioPlayer = null;
let isAudioPlaying = false;
let webAudioCtx = null;
let synthInterval = null;

function initAudio() {
  audioPlayer = new Audio('assets/audio/wedding-melody.mp3');
  audioPlayer.loop = true;
  audioPlayer.volume = 0.65;

  const audioWidget = document.getElementById('audio-widget');
  if (!audioWidget) return;

  audioWidget.addEventListener('click', toggleAudio);

  // If user clicks anywhere on the page for the first time, allow starting softly if wanted
  const autoStartOnFirstClick = () => {
    document.removeEventListener('click', autoStartOnFirstClick);
    if (!isAudioPlaying) {
      // Don't force auto-play unexpectedly, but give smooth toggle
    }
  };
  document.addEventListener('click', autoStartOnFirstClick, { once: true });
}

function toggleAudio() {
  const widget = document.getElementById('audio-widget');
  const audioText = document.getElementById('audio-state-text');

  if (!isAudioPlaying) {
    if (audioPlayer) {
      audioPlayer.play().then(() => {
        isAudioPlaying = true;
        updateAudioUI(true);
      }).catch(err => {
        console.log('Audio file play failed, starting Web Audio synth:', err);
        startSynthesizedMelody();
        isAudioPlaying = true;
        updateAudioUI(true);
      });
    } else {
      startSynthesizedMelody();
      isAudioPlaying = true;
      updateAudioUI(true);
    }
  } else {
    if (audioPlayer) audioPlayer.pause();
    stopSynthesizedMelody();
    isAudioPlaying = false;
    updateAudioUI(false);
  }
}

function updateAudioUI(playing) {
  const widget = document.getElementById('audio-widget');
  const audioText = document.getElementById('audio-state-text');
  if (!widget) return;

  if (playing) {
    widget.classList.add('playing');
    if (audioText) audioText.innerText = currentLang === 'en' ? "Playing Music" : "സംഗീതം കേൾക്കുന്നു";
  } else {
    widget.classList.remove('playing');
    if (audioText) audioText.innerText = currentLang === 'en' ? "Play Music" : "സംഗീതം കേൾക്കൂ";
  }
}

// Web Audio API procedural wedding flute & harp arpeggio (soothing, gentle)
function startSynthesizedMelody() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!webAudioCtx) webAudioCtx = new AudioContext();
    if (webAudioCtx.state === 'suspended') webAudioCtx.resume();

    // Notes of Kalyani / Mohanam / Lydian romantic raag
    const notes = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 587.33, 659.25];
    let noteIdx = 0;

    synthInterval = setInterval(() => {
      if (!isAudioPlaying || !webAudioCtx) return;
      const osc = webAudioCtx.createOscillator();
      const gain = webAudioCtx.createGain();
      osc.type = 'sine';

      const freq = notes[noteIdx % notes.length];
      osc.frequency.setValueAtTime(freq, webAudioCtx.currentTime);

      gain.gain.setValueAtTime(0.001, webAudioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.12, webAudioCtx.currentTime + 0.1);
      gain.gain.exponentialRampToValueAtTime(0.0001, webAudioCtx.currentTime + 1.2);

      osc.connect(gain);
      gain.connect(webAudioCtx.destination);

      osc.start();
      osc.stop(webAudioCtx.currentTime + 1.2);

      noteIdx = (noteIdx + Math.floor(Math.random() * 3) + 1) % notes.length;
    }, 600);
  } catch (e) {
    console.log('Web Audio not supported:', e);
  }
}

function stopSynthesizedMelody() {
  if (synthInterval) {
    clearInterval(synthInterval);
    synthInterval = null;
  }
  if (webAudioCtx && webAudioCtx.state === 'running') {
    webAudioCtx.suspend();
  }
}

// -------------------------------------------------------------
// 4. FLOATING FLOWER PETALS (ROSE & JASMINE) SIMULATION
// -------------------------------------------------------------
let petalsEnabled = true;
let petalAnimationId = null;

function initPetals() {
  const canvas = document.getElementById('petals-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const petalsCount = window.innerWidth < 600 ? 18 : 36;
  const petals = [];

  // Colors: pastel rose, peach, ivory jasmine, soft blush
  const petalColors = [
    'rgba(247, 187, 196, 0.75)',
    'rgba(252, 213, 206, 0.8)',
    'rgba(255, 230, 220, 0.85)',
    'rgba(255, 245, 235, 0.9)', // Jasmine
    'rgba(224, 122, 95, 0.55)'
  ];

  for (let i = 0; i < petalsCount; i++) {
    petals.push({
      x: Math.random() * width,
      y: Math.random() * height - height,
      size: Math.random() * 12 + 8,
      speedX: Math.random() * 1.5 - 0.75,
      speedY: Math.random() * 1.2 + 0.8,
      rotation: Math.random() * 360,
      rotSpeed: Math.random() * 1.8 - 0.9,
      color: petalColors[Math.floor(Math.random() * petalColors.length)],
      sway: Math.random() * 2 + 1,
      swayOffset: Math.random() * Math.PI * 2,
      isJasmine: Math.random() > 0.6
    });
  }

  function render() {
    if (!petalsEnabled) return;
    ctx.clearRect(0, 0, width, height);

    for (let p of petals) {
      p.y += p.speedY;
      p.swayOffset += 0.02;
      p.x += Math.sin(p.swayOffset) * p.sway + p.speedX;
      p.rotation += p.rotSpeed;

      // Wrap around
      if (p.y > height + 20) {
        p.y = -20;
        p.x = Math.random() * width;
      }
      if (p.x > width + 20) p.x = -20;
      if (p.x < -20) p.x = width + 20;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);

      ctx.fillStyle = p.color;
      ctx.beginPath();

      if (p.isJasmine) {
        // Jasmine petal shape
        ctx.ellipse(0, 0, p.size * 0.45, p.size * 0.8, 0, 0, Math.PI * 2);
      } else {
        // Rose petal curved shape
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(p.size * 0.5, -p.size * 0.5, p.size, 0, 0, p.size);
        ctx.bezierCurveTo(-p.size, 0, -p.size * 0.5, -p.size * 0.5, 0, 0);
      }

      ctx.fill();
      ctx.restore();
    }

    petalAnimationId = requestAnimationFrame(render);
  }

  render();

  // Toggle button
  const petalToggleBtn = document.getElementById('petals-toggle-btn');
  if (petalToggleBtn) {
    petalToggleBtn.addEventListener('click', () => {
      petalsEnabled = !petalsEnabled;
      petalToggleBtn.classList.toggle('active', petalsEnabled);
      if (petalsEnabled) {
        render();
      } else {
        ctx.clearRect(0, 0, width, height);
      }
    });
  }
}

// -------------------------------------------------------------
// 5. CALENDAR INTEGRATIONS (Google Calendar & .ICS Download)
// -------------------------------------------------------------
function setupCalendarActions() {
  const weddingTitle = "Subin & Sajitha Wedding (വിവാഹം) & Reception";
  const weddingDetails = "Wedding of Subin & Sajitha.\nMarriage Ceremony: 10:00 AM - 11:00 AM at Sree Badra Auditorium, Mannuthi, Thrissur.\nReception: 4:00 PM - 7:00 PM at Mangalya Auditorium, Kannambra, Palakkad.\nContact: 9020875035";
  const weddingLocation = "Sree Badra Auditorium, Mannuthi, Thrissur & Mangalya Auditorium, Kannambra";

  // Google Calendar URL generator
  const gcalBtn = document.getElementById('btn-add-gcal');
  if (gcalBtn) {
    gcalBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const startIso = "20261122T043000Z"; // 10:00 AM IST = 04:30 AM UTC
      const endIso = "20261122T133000Z";   // 07:00 PM IST = 01:30 PM UTC
      const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(weddingTitle)}&dates=${startIso}/${endIso}&details=${encodeURIComponent(weddingDetails)}&location=${encodeURIComponent(weddingLocation)}`;
      window.open(url, '_blank');
    });
  }

  // iCalendar (.ics) File Generator
  const icsBtn = document.getElementById('btn-download-ics');
  if (icsBtn) {
    icsBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const icsData = [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        "PRODID:-//Subin & Sajitha Wedding Invitation//EN",
        "CALSCALE:GREGORIAN",
        "METHOD:PUBLISH",
        "BEGIN:VEVENT",
        "SUMMARY:Subin & Sajitha Wedding (വിവാഹം)",
        "DESCRIPTION:" + weddingDetails.replace(/\n/g, '\\n'),
        "LOCATION:" + weddingLocation,
        "DTSTART:20261122T043000Z",
        "DTEND:20261122T133000Z",
        "STATUS:CONFIRMED",
        "END:VEVENT",
        "END:VCALENDAR"
      ].join("\r\n");

      const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.setAttribute('download', 'Subin_Sajitha_Wedding.ics');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }
}

// -------------------------------------------------------------
// 6. PHOTO GALLERY (MASONRY, FILTERING & LIGHTBOX)
// -------------------------------------------------------------
const galleryData = [
  {
    src: 'assets/images/save-the-date-card.jpg',
    thumb: 'assets/images/save-the-date-card.jpg',
    title: 'Subin & Sajitha - Save the Date Artwork',
    titleMl: 'സുബിൻ & സജിത - വിവാഹ ക്ഷണച്ചിത്രം',
    tag: 'couple',
    category: 'Couple & Arch'
  },
  {
    src: 'assets/images/couple-illustration.jpg',
    thumb: 'assets/images/couple-illustration.jpg',
    title: 'Traditional Kasavu Mundu & Set Saree',
    titleMl: 'കേരളീയ വേഷത്തിൽ സുബിനും സജിതയും',
    tag: 'couple',
    category: 'Couple & Arch'
  },
  {
    src: 'assets/images/monogram-arch.jpg',
    thumb: 'assets/images/monogram-arch.jpg',
    title: 'S & S Floral Arch Monogram',
    titleMl: 'പൂന്തോരണം & എസ് & എസ് മുദ്ര',
    tag: 'couple',
    category: 'Couple & Arch'
  },
  {
    src: 'assets/images/gallery/gallery-3.jpg',
    thumb: 'assets/images/gallery/gallery-3.jpg',
    title: 'Pre-Wedding Bliss & Laughter',
    titleMl: 'പ്രീ-വെഡ്ഡിംഗ് സ്നേഹനിമിഷങ്ങൾ',
    tag: 'prewedding',
    category: 'Pre-Wedding'
  },
  {
    src: 'assets/images/gallery/gallery-1.jpg',
    thumb: 'assets/images/gallery/gallery-1.jpg',
    title: 'Kasavu Splendor & Jasmine Blossoms',
    titleMl: 'കസവുപുടവയും മുല്ലപ്പൂവും',
    tag: 'tradition',
    category: 'Kerala Traditions'
  },
  {
    src: 'assets/images/gallery/gallery-4.jpg',
    thumb: 'assets/images/gallery/gallery-4.jpg',
    title: 'Haldi Celebration & Golden Petals',
    titleMl: 'മഞ്ഞളണിഞ്ഞ മംഗളനിമിഷങ്ങൾ',
    tag: 'prewedding',
    category: 'Pre-Wedding'
  },
  {
    src: 'assets/images/gallery/gallery-5.jpg',
    thumb: 'assets/images/gallery/gallery-5.jpg',
    title: 'Sacred Rings & Eternal Bond',
    titleMl: 'വിവാഹ മോതിരവും സ്നേഹവാഗ്ദാനവും',
    tag: 'tradition',
    category: 'Kerala Traditions'
  },
  {
    src: 'assets/images/gallery/gallery-6.jpg',
    thumb: 'assets/images/gallery/gallery-6.jpg',
    title: 'Auspicious Nilavilakku (Kerala Brass Lamp)',
    titleMl: 'മംഗളകരമായ നിലവിളക്കിന്റെ വെളിച്ചം',
    tag: 'tradition',
    category: 'Kerala Traditions'
  },
  {
    src: 'assets/images/calendar-graphic.jpg',
    thumb: 'assets/images/calendar-graphic.jpg',
    title: 'Mark Your Calendar - November 22nd',
    titleMl: 'നവംബർ 22 - കലണ്ടർ ഓർമ്മപ്പെടുത്തൽ',
    tag: 'couple',
    category: 'Couple & Arch'
  }
];

let activeLightboxIndex = 0;
let filteredGallery = [...galleryData];

function initGallery() {
  const galleryGrid = document.getElementById('gallery-grid');
  if (!galleryGrid) return;

  function renderGrid(items) {
    galleryGrid.innerHTML = '';
    items.forEach((item, index) => {
      const el = document.createElement('div');
      el.className = 'gallery-item';
      el.dataset.index = index;
      el.innerHTML = `
        <img class="gallery-img" src="${item.thumb}" alt="${item.title}" loading="lazy">
        <div class="gallery-overlay">
          <div class="gallery-item-title">${currentLang === 'en' ? item.title : item.titleMl}</div>
          <div class="gallery-item-tag">${item.category}</div>
        </div>
      `;
      el.addEventListener('click', () => openLightbox(index));
      galleryGrid.appendChild(el);
    });
  }

  renderGrid(filteredGallery);

  // Filter Buttons
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      if (filter === 'all') {
        filteredGallery = [...galleryData];
      } else {
        filteredGallery = galleryData.filter(g => g.tag === filter);
      }
      renderGrid(filteredGallery);
    });
  });

  // Lightbox Controls
  const modal = document.getElementById('lightbox-modal');
  const closeBtn = document.getElementById('lightbox-close');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (prevBtn) prevBtn.addEventListener('click', prevLightbox);
  if (nextBtn) nextBtn.addEventListener('click', nextLightbox);

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeLightbox();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (!modal || !modal.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') prevLightbox();
    if (e.key === 'ArrowRight') nextLightbox();
  });
}

function openLightbox(index) {
  activeLightboxIndex = index;
  const modal = document.getElementById('lightbox-modal');
  const img = document.getElementById('lightbox-img');
  const caption = document.getElementById('lightbox-caption');

  const item = filteredGallery[index];
  if (!item || !modal) return;

  img.src = item.src;
  caption.innerText = currentLang === 'en' ? item.title : item.titleMl;
  modal.classList.add('open');
}

function closeLightbox() {
  const modal = document.getElementById('lightbox-modal');
  if (modal) modal.classList.remove('open');
}

function prevLightbox() {
  activeLightboxIndex = (activeLightboxIndex - 1 + filteredGallery.length) % filteredGallery.length;
  openLightbox(activeLightboxIndex);
}

function nextLightbox() {
  activeLightboxIndex = (activeLightboxIndex + 1) % filteredGallery.length;
  openLightbox(activeLightboxIndex);
}

// -------------------------------------------------------------
// 7. PRINTED CARD VIEWER MODAL
// -------------------------------------------------------------
function setupCardModal() {
  const modal = document.getElementById('card-modal');
  const openBtn = document.getElementById('btn-open-card-modal');
  const closeBtn = document.getElementById('card-modal-close');
  const tabEn = document.getElementById('tab-card-en');
  const tabMl = document.getElementById('tab-card-ml');
  const cardImg = document.getElementById('card-modal-img');

  if (!modal || !openBtn) return;

  openBtn.addEventListener('click', () => {
    modal.classList.add('open');
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('open');
    });
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('open');
  });

  if (tabEn && tabMl && cardImg) {
    tabEn.addEventListener('click', () => {
      tabEn.classList.add('active');
      tabMl.classList.remove('active');
      cardImg.src = 'assets/images/card-english.jpg';
    });
    tabMl.addEventListener('click', () => {
      tabMl.classList.add('active');
      tabEn.classList.remove('active');
      cardImg.src = 'assets/images/card-malayalam.jpg';
    });
  }
}

// -------------------------------------------------------------
// 8. RSVP FORM & WHATSAPP DISPATCH + CONFETTI BURST
// -------------------------------------------------------------
function setupRSVP() {
  const form = document.getElementById('rsvp-form');
  const waBtn = document.getElementById('btn-whatsapp-rsvp');
  const successBox = document.getElementById('rsvp-success-msg');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('rsvp-name').value.trim();
    const phone = document.getElementById('rsvp-phone').value.trim();
    const attending = form.querySelector('input[name="attending"]:checked')?.value || 'Yes';
    const events = form.querySelector('input[name="events"]:checked')?.value || 'Both';
    const guests = document.getElementById('rsvp-guests').value;
    const wishes = document.getElementById('rsvp-wishes').value.trim();

    if (!name) {
      alert(currentLang === 'en' ? 'Please enter your name.' : 'ദയവായി നിങ്ങളുടെ പേര് നൽകുക.');
      return;
    }

    // Save to local list of RSVPs
    const rsvpEntry = {
      name, phone, attending, events, guests, wishes,
      date: new Date().toLocaleDateString()
    };
    saveRSVP(rsvpEntry);

    // If wishes provided, add to wishes wall immediately
    if (wishes) {
      addWishToWall(name, wishes, true);
    }

    // Trigger Confetti Celebration
    triggerConfetti();

    if (successBox) {
      successBox.classList.add('show');
      setTimeout(() => {
        successBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 200);
    }

    // Reset fields except nice state
    form.reset();
  });

  // Direct WhatsApp Button
  if (waBtn) {
    waBtn.addEventListener('click', () => {
      const name = document.getElementById('rsvp-name').value.trim() || 'Guest';
      const attending = form.querySelector('input[name="attending"]:checked')?.value || 'Yes';
      const guests = document.getElementById('rsvp-guests').value || '1';
      const wishes = document.getElementById('rsvp-wishes').value.trim();

      const text = `Namaste! Wedding RSVP for Subin & Sajitha:\n` +
        `Name: ${name}\n` +
        `Attending: ${attending}\n` +
        `Number of Guests: ${guests}\n` +
        (wishes ? `Wishes: "${wishes}"\n` : '') +
        `Hearty congratulations to the couple!`;

      const waUrl = `https://wa.me/919020875035?text=${encodeURIComponent(text)}`;
      window.open(waUrl, '_blank');
    });
  }
}

function saveRSVP(entry) {
  try {
    const list = JSON.parse(localStorage.getItem('subin_sajitha_rsvps') || '[]');
    list.push(entry);
    localStorage.setItem('subin_sajitha_rsvps', JSON.stringify(list));
  } catch (e) {
    console.error(e);
  }
}

// -------------------------------------------------------------
// 9. CELEBRATION CONFETTI ENGINE (CANVAS)
// -------------------------------------------------------------
function triggerConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const confettiCount = 140;
  const particles = [];
  const colors = ['#c59b27', '#ffd700', '#e63946', '#fcd5ce', '#e07a5f', '#52b788', '#ffffff'];

  for (let i = 0; i < confettiCount; i++) {
    particles.push({
      x: canvas.width / 2,
      y: canvas.height * 0.45,
      w: Math.random() * 10 + 6,
      h: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - 0.5) * 18,
      vy: (Math.random() - 0.7) * 22,
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 12,
      gravity: 0.45,
      friction: 0.96,
      alpha: 1
    });
  }

  let animationId;
  function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = 0;

    for (let p of particles) {
      p.vx *= p.friction;
      p.vy += p.gravity;
      p.x += p.vx;
      p.y += p.vy;
      p.rotation += p.rotSpeed;
      p.alpha -= 0.007;

      if (p.alpha > 0) {
        alive++;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      }
    }

    if (alive > 0) {
      animationId = requestAnimationFrame(update);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      cancelAnimationFrame(animationId);
    }
  }

  update();
}

// -------------------------------------------------------------
// 10. BLESSINGS & WISHES WALL
// -------------------------------------------------------------
const initialWishes = [
  {
    name: "Mr. Sudhevan & Mrs. Ambika",
    relation: "Groom's Parents",
    text: "May the divine blessings of Lord Ganesha shower upon Subin and Sajitha with a lifetime of love, happiness, peace, and togetherness.",
    textMl: "ഗണപതി ഭഗവാന്റെ അനുഗ്രഹത്താൽ സുബിനും സജിതയ്ക്കും ആയുരാരോഗ്യസൗഖ്യങ്ങളും സ്നേഹനിർഭരമായ ദാമ്പത്യജീവിതവും നേരുന്നു.",
    likes: 42
  },
  {
    name: "Mr. Sathanandhan & Mrs. Shiji",
    relation: "Bride's Parents",
    text: "Wishing our dearest Sajitha and Subin a beautiful journey filled with endless smiles, understanding, and prosperity.",
    textMl: "ഞങ്ങളുടെ പ്രിയപ്പെട്ട സജിതയ്ക്കും സുബിനും സ്നേഹവും ഐശ്വര്യവും നിറഞ്ഞ ഒരു ഉജ്ജ്വല ജീവിതം ആശംസിക്കുന്നു.",
    likes: 38
  },
  {
    name: "Kannambra Friends Club",
    relation: "Friends & Well-wishers",
    text: "Heartiest congratulations to Subin & Sajitha! Looking forward to dancing and celebrating at the grand wedding reception!",
    textMl: "സുബിനും സജിതയ്ക്കും ഹൃദയം നിറഞ്ഞ വിവാഹ മംഗളാശംസകൾ! സൽക്കാരവേദിയിൽ ആഘോഷിക്കാൻ ഞങ്ങൾ കാത്തിരിക്കുന്നു!",
    likes: 29
  },
  {
    name: "Mannuthi Relatives",
    relation: "Family",
    text: "Hearty congratulations and best compliments to the lovely couple. May your bond grow stronger with each passing year!",
    textMl: "ഇരുവരുടെയും മംഗളകരമായ വിവാഹത്തിന് എല്ലാവിധ ഭാവുകങ്ങളും നേരുന്നു!",
    likes: 24
  }
];

function initWishesWall() {
  const wall = document.getElementById('wishes-wall-grid');
  if (!wall) return;

  const savedWishes = JSON.parse(localStorage.getItem('subin_sajitha_wishes') || '[]');
  const allWishes = [...initialWishes, ...savedWishes];

  wall.innerHTML = '';
  allWishes.forEach(item => {
    addWishElement(item, wall);
  });
}

function addWishElement(item, wall) {
  const card = document.createElement('div');
  card.className = 'wish-card';
  card.innerHTML = `
    <div class="wish-text">“${currentLang === 'en' ? item.text : (item.textMl || item.text)}”</div>
    <div class="wish-meta">
      <div>
        <div class="wish-author">${item.name}</div>
        <small style="color: var(--text-light); font-size: 0.78rem;">${item.relation || 'Well-wisher'}</small>
      </div>
      <button class="wish-heart-btn" aria-label="Like wish">
        ❤️ <span class="like-count">${item.likes || 1}</span>
      </button>
    </div>
  `;

  const heartBtn = card.querySelector('.wish-heart-btn');
  const countSpan = card.querySelector('.like-count');
  let liked = false;
  heartBtn.addEventListener('click', () => {
    if (!liked) {
      item.likes = (item.likes || 1) + 1;
      countSpan.innerText = item.likes;
      liked = true;
      heartBtn.style.transform = 'scale(1.25)';
    }
  });

  wall.prepend(card);
}

function addWishToWall(name, text, isCustom = false) {
  const wall = document.getElementById('wishes-wall-grid');
  if (!wall) return;

  const newWish = {
    name,
    relation: currentLang === 'en' ? 'Guest & Well-wisher' : 'അതിഥി',
    text,
    textMl: text,
    likes: 1
  };

  if (isCustom) {
    const list = JSON.parse(localStorage.getItem('subin_sajitha_wishes') || '[]');
    list.push(newWish);
    localStorage.setItem('subin_sajitha_wishes', JSON.stringify(list));
  }

  addWishElement(newWish, wall);
}

// -------------------------------------------------------------
// 11. SHARING & COPY LINK
// -------------------------------------------------------------
function setupShare() {
  const shareBtn = document.getElementById('btn-share-wa');
  const copyBtn = document.getElementById('btn-copy-link');

  if (shareBtn) {
    shareBtn.addEventListener('click', () => {
      const shareText = `You're cordially invited to the wedding of Subin & Sajitha on Sunday, 22 Nov 2026. View our digital wedding card here: ${window.location.href}`;
      window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`, '_blank');
    });
  }

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(window.location.href).then(() => {
        alert(translations[currentLang].toast_copied);
      }).catch(() => {
        prompt('Copy this link:', window.location.href);
      });
    });
  }
}

// -------------------------------------------------------------
// INITIALIZATION ON DOM READY
// -------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  // Check stored language
  const savedLang = localStorage.getItem('subin_sajitha_lang') || 'en';
  setLanguage(savedLang);

  const langBtn = document.getElementById('lang-toggle-btn');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      setLanguage(currentLang === 'en' ? 'ml' : 'en');
    });
  }

  // Countdown Loop
  updateCountdown();
  setInterval(updateCountdown, 1000);

  // Features
  initPetals();
  initAudio();
  setupCalendarActions();
  initGallery();
  setupCardModal();
  setupRSVP();
  initWishesWall();
  setupShare();
});
