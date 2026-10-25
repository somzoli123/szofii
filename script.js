'use strict';

/* =====================================================================
   SZERKESZTHETŐ TARTALOM – itt írhatsz át mindent (szövegek, emlékek, képek)
   A **dupla csillag** közötti szavak kiemelve jelennek meg a levélben.
   ===================================================================== */
const CONFIG = {
  // Háttérzene: írd ide a fájl nevét (pl. 'zene.mp3'), és tedd a három fájl mellé.
  musicFile: 'nghyb.mp3',

  text: {
    heroEyebrow: 'Sweetheartnak, szeretettel',
    heroTitle: 'Van valaki, aki különlegesebbé teszi a világomat…',
    heroButton: 'Van egy üzenetem számodra ♡',
    envelopeHeading: 'Ez a boríték neked szól, Baby',
    envelopeHint: 'Érintsd meg, és olvasd el, mit szerettem volna elmondani.',
    memoriesHeading: 'A mi pillanataink',
    memoriesSub: 'Apróságok, amelyeket sosem szeretnék elfelejteni.',
    whyHeading: 'Miért vagy különleges, Darling?',
    whySub: 'Nyomj egy szívre – minden érintés egy újabb ok.',
    whyEmpty: 'Válassz egy szívet ♡',
    finaleHeading: 'Még egy dolog…',
    finaleHint: 'Érintsd meg a szívet ahogy az enyémet is megérintetted.',
    finalText: 'Luv, ha idáig eljutottál, már tudod, hogy ez az egész oldal rólad szól. Most elmondom, hogy miért készítettem. Azt akarom kérdezni tőled',
    footer: 'My luvnak készült, szeretettel ♡',
  },

  letter: {
    greeting: 'Drága babym!',
    paragraphs: [
      'Régóta gondolkodom azon, hogyan tudnám szavakba önteni mindazt, amit irántad érzek. Néha úgy érzem, akármennyit is írnék, sosem lenne elég ahhoz, hogy igazán megértsd, mennyire **különleges vagy nekem**. Mégis szeretném megpróbálni, mert vannak dolgok, amelyeket nem akarok magamban tartani, és te vagy az az ember, akinek a leginkább szeretném elmondani őket.',
      'Amióta **szeptember 22-én** elkezdtünk beszélni, egyre többször veszem észre, hogy **a gondolataim újra és újra hozzád térnek vissza**. Néha csak ülök, csinálom a dolgomat, és **teljesen váratlanul eszembe jutsz**. Ilyenkor elmosolyodom, mert rájövök, milyen különleges érzés az, amikor valaki úgy válik a mindennapjaid részévé, hogy közben talán észre sem veszi, mennyire sokat jelent neked.',
      'Szeretem a **gyönyörű szemeidet**, a **hajadat**, a **mosolyodat**, és azt, ahogyan már **pusztán a gondolatoddal is képes vagy szebbé tenni a napomat**. De bármennyire is **gyönyörűnek látlak kívülről**, számomra az érzés, amit kiváltasz belőlem, sokkal többet jelent annál, mint amit néhány szóval el lehetne mondani. Nem egyszerűen csak tetszel nekem. **Azt érzem, hogy téged szeretnélek egyre jobban megismerni**, **hozzád szeretnék közelebb kerülni**, és **veled szeretnék olyan emlékeket gyűjteni, amelyekre még hosszú évek múlva is mosolyogva gondolhatok vissza**.',
      'Sokat gondolok arra a napra is, amikor Egerben, az **Érsek-kertben** találkoztunk. Lehet, hogy másnak ez csak egy egyszerű találkozás volt, némi **osztálytársi kíváncsiskodással** megfűszerezve, de nekem ennél többet jelentett. **Jó érzés volt végre nem csupán üzeneteken keresztül közelebb kerülni hozzád**. És ha valamiben biztos vagyok, az az, hogy **szeretnék még sok ilyen napot veled**. **Szeretnék veled sétálni**, **nevetni**, **hosszasan beszélgetni mindenféléről**, és néha csak csendben **melletted lenni**. Mert azt hiszem, a legszebb pillanatok nem mindig azok, amelyekben valami különleges történik, hanem azok, amelyekben egyszerűen csak **jó együtt lenni**.',
      '**Te vagy az, akit most a szívem újra és újra választ**. Nem azért, mert azt gondolom, hogy a világban nincsenek más emberek, hanem azért, mert **én nem mást keresek**. **Téged szeretnélek megismerni minden apró részleteddel együtt**. Szeretném tudni, mi tesz igazán **boldoggá**, mik azok az álmok, amelyeket egyszer meg szeretnél valósítani, és **hogyan tudnék én is hozzátenni valami szépet a napjaidhoz**. **Szeretném, ha mellettem önmagad lehetnél, ha bátran elmondhatnád, mi jár a fejedben, és ha éreznéd, hogy valaki őszintén figyel rád.**',
      'Néha úgy érzem, mintha a sors egy régi, **gyönyörű szerelmi történetet szeretne újraírni bennünk**: te lennél az **én Szendrey Júliám**, én pedig a **te Petőfid**. Nem azért, mert azt szeretném, hogy a **mi történetünk** olyan legyen, mint bárki másé, hanem azért, mert szeretném, ha egyszer a **mi szerelmünkre** is úgy emlékeznénk vissza, mint valamire, ami őszintén, tisztán és minden nehézség ellenére is **gyönyörű volt**. És ha **én lehetnék a te Petőfid**, akkor azt szeretném, hogy ne csak versekben, hanem minden egyes nap a tetteimmel is megmutathassam, **mennyire szeretlek**.',
      'Talán furcsa ilyenekről írni akkor, amikor még **annyi mindent meg kell élnünk és meg kell tudnunk egymásról**. **De nem azért álmodom ilyen jövőről, mert siettetni szeretnék bármit**. Hanem azért, mert ha valakivel el tudom képzelni, hogy egyszer **közös életet építsek**, hogy **együtt nőjünk fel a feladatainkhoz**, és hogy **egyszer akár házasságban is összekössük az életünket, akkor az most te vagy**. Nem várom el, hogy a jövő minden részére legyen válaszunk. Csak szeretném, ha lehetőséget adnánk magunknak arra, hogy kiderüljön, mennyi szép dolog várhat még ránk.',
      '**Azt szeretném, ha egyszer majd visszagondolnál erre a levélre, és tudnád, hogy már akkor is őszintén gondoltam mindazt, amit leírtam**. Hogy **nem csupán azért írtam neked szép szavakat, mert romantikusnak hangzanak, hanem azért, mert tényleg ezt érzem**. Szeretném, ha a tetteim is megmutatnák neked azt, amit most szavakkal próbálok elmondani. Hogy **FONTOS VAGY NEKEM**. **Hogy számítasz**. **Hogy szeretnélek boldognak látni**, és **hogy szeretnék én is egy olyan ember lenni az életedben, akire jó érzéssel gondolsz**.',
      '**Baby**, talán sosem fogom tudni tökéletesen elmagyarázni, miért pont **te lettél ennyire fontos nekem**. Talán nem is kell mindent megmagyarázni. **Néha egyszerűen csak találkozunk valakivel, és idővel azt vesszük észre, hogy a jelenléte, az üzenetei, a mosolya és a legapróbb dolgai is különleges jelentést kapnak**. Nekem te ilyen ember lettél.',
      'Ezt a levelet azért írom neked, mert szeretném, ha tudnád, hogy **amit érzek, az őszinte**. Nem tudom megígérni, hogy mindig minden könnyű lesz, vagy hogy soha nem fogunk hibázni. Azt viszont szeretném, ha tudnád, hogy én szeretnélek megismerni, szeretnék időt adni annak, ami közöttünk alakul, és szeretném a lehető legszebben megélni veled ezt az egészet.',
      'Ha egyszer majd megkérdeznéd tőlem, miért pont **téged választanálak újra és újra**, talán nem tudnék egyetlen tökéletes választ adni. Csak elmesélném, hogyan lettél valakiből, akivel szeptember 22-én elkezdtem beszélgetni, az a lány, akire **nap mint nap gondolok**, **akinek a mosolya eszembe jut**, és akivel **annyi mindent szeretnék még átélni**.',
      '**Köszönöm, hogy vagy nekem, édesem**. **Köszönöm, hogy megismerhetlek, és hogy lehetőségem van arra, hogy valami szép alakuljon ki közöttünk**. Nem tudom, hová vezet majd ez az út, de azt tudom, hogy **szeretném veled végigjárni**, lépésről lépésre, őszintén, türelemmel és rengeteg szeretettel.',
      'És ha ebből az egész levélből csak egyetlen mondatot jegyzel meg, akkor szeretném, ha ez lenne az:',
      '**Nem tudom, mit hoz a holnap, de amikor a jövőmre gondolok, önkéntelenül is téged képzellek el benne.**',
    ],
    closing: 'Mindig szeretettel gondol rád,',
    signature: 'Zoli, aki most is rád gondol',
  },

  // Emlékkártyák: tetszőleges számú adható hozzá. Kép: írd be a fájl nevét
  // (pl. 'kepek/elso.jpg'); ha üres, szép helykitöltő jelenik meg.
  memories: [
    { date: '', title: 'Central Park Eger', image: 'IMG_3752.JPEG',
      text: 'Naon jó volt, remélem még elmegyünk (többet magában nem iszok pressot).' },
    { date: '', title: 'Rózsa', image: 'IMG_3750.JPEG',
      text: 'Ezt kifejezetten nem loptam, ezt fr vásároltam! +rep viragboltos.' },
    { date: '', title: 'Lopott virágcsokor', image: 'IMG_3935.JPEG',
      text: 'Ezt a virágcsokrot ÉN magam szereztem be neked teljesen legálisan! De érted még a holdat is ellopnám' },
  ],

  // „Miért vagy különleges?” üzenetek (minden kattintásnál új jelenik meg)
  reasons: [
    'Mert szeptember 22. óta valahogy sokkal szebbek a napjaim.',
    'Mert a mosolyodban van valami, amit egyszerűen nem tudok megunni.',
    'Mert a barna szemeidbe nézve néha elfelejtem, mit is akartam mondani.',
    'Mert imádom a göndör hajad, de még jobban azt, ahogy te magad vagy.',
    'Mert már attól jobb kedvem lesz, ha meglátom, hogy írtál nekem.',
    'Mert a nevetésed a kedvenc hangom a világon.',
    'Mert nem kell megjátszanom magam melletted, és ez többet jelent nekem, mint gondolnád.',
    'Mert amikor találkozunk, mindig azt érzem, hogy túl gyorsan telik az idő.',
    'Mert néha azon kapom magam, hogy valami történik velem, és az első gondolatom az, hogy ezt neked akarom elmesélni.',
    'Mert a veled töltött időből mindig szeretnék még egy kicsit.',
    'Mert nem kell semmi különlegeset csinálnod ahhoz, hogy különleges legyél nekem.',
    'Mert a mosolyod valahogy akkor is velem marad, amikor már rég nem vagy mellettem.',
    'Mert szeretek rád figyelni, megérteni, mi jár a fejedben, és megtudni, mi tesz igazán boldoggá.',
    'Mert nem akarom elsietni azt, ami köztünk alakul, csak szeretném, ha egyre közelebb kerülnénk egymáshoz.',
    'Mert minden beszélgetésünkkel egy kicsit többet tudok meg rólad, és ettől csak még kíváncsibb leszek rád.',
    'Mert van benned valami, amit nem tudok rendesen megfogalmazni, csak azt tudom, hogy különleges érzés a közeledben lenni.',
  ],

  question: 'Édesem, ha te lennél Szendrey Júlia, lehetek a Petőfid? ❤️',
  yes: 'Igen ❤️',
  yeah: 'Naná! 💗',
  // A „Nem” gomb feliratai: minden elszaladásnál a következő jelenik meg
  noTexts: ['Nem'],
  answer: 'Köszönöm, Édesem. Ígérem, vigyázok rád és mindent megteszek, hogy elfelejts minden rosszat amit veled tettek. ♡',
};

/* ===================== Segédfüggvények ===================== */
const $ = (s) => document.querySelector(s);
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const rand = (a, b) => a + Math.random() * (b - a);
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const fmt = (s) => esc(s).replace(/\*\*(.+?)\*\*/g, '<em class="hl">$1</em>');
const HEARTS = ['♥', '♡', '❤'];
const COLORS = ['#f6d3da', '#d9b46c', '#c2183f', '#fbf3e8', '#e8708f'];
const fx = $('#fx');
const scrollTo = (el, block = 'start') => el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block });

/* ===================== Tartalom kirakása ===================== */
function render() {
  document.querySelectorAll('[data-t]').forEach((el) => { el.textContent = CONFIG.text[el.dataset.t] || ''; });
  $('#envName').textContent = 'My babynek';
  $('#reasonMsg').textContent = CONFIG.text.whyEmpty;
  $('#qText').textContent = CONFIG.question;
  $('#yesBtn').textContent = CONFIG.yes;
  $('#yeahBtn').textContent = CONFIG.yeah;

  const L = CONFIG.letter;
  $('#letter').innerHTML =
    `<p class="greet" style="animation-delay:.3s">${esc(L.greeting)}</p>` +
    L.paragraphs.map((p, i) => `<p style="animation-delay:${0.8 + i * 0.7}s">${fmt(p)}</p>`).join('') +
    `<p style="animation-delay:${0.8 + L.paragraphs.length * 0.7}s">${esc(L.closing)}<br><span class="sign">${esc(L.signature)}</span></p>`;

  $('#cards').innerHTML = CONFIG.memories.map((m) =>
    `<article class="card reveal"><div class="photo">${
      m.image ? `<img src="${esc(m.image)}" alt="${esc(m.title)}" loading="lazy">` : '<span aria-hidden="true">♡</span>'
    }</div><div class="body"><time>${esc(m.date)}</time><h3>${esc(m.title)}</h3><p>${esc(m.text)}</p></div></article>`).join('');

  $('#reasonHearts').innerHTML = CONFIG.reasons.map((_, i) =>
    `<button type="button" aria-label="Üzenet felfedése, ${i + 1}. szív">♥</button>`).join('');
}

/* ===================== Effektek ===================== */
// Szívrobbanás egy adott pontból
function burst(x, y, n = 24) {
  if (reduce) return;
  for (let i = 0; i < n; i++) {
    const s = document.createElement('span');
    const a = Math.random() * Math.PI * 2, d = 60 + Math.random() * (innerWidth < 600 ? 110 : 190);
    s.className = 'pop';
    s.textContent = pick(HEARTS);
    s.style.cssText = `left:${x}px;top:${y}px;--dx:${Math.cos(a) * d}px;--dy:${Math.sin(a) * d - 40}px;--r:${rand(-60, 60)}deg;font-size:${rand(.9, 1.8)}rem;color:${pick(COLORS)}`;
    s.onanimationend = () => s.remove();
    fx.append(s);
  }
}
const burstFrom = (el, n) => { const r = el.getBoundingClientRect(); burst(r.left + r.width / 2, r.top + r.height / 2, n); };

// Lassan felfelé lebegő szívek
function floatHeart() {
  const s = document.createElement('span');
  s.className = 'rise';
  s.textContent = pick(HEARTS);
  s.style.cssText = `left:${rand(2, 96)}vw;--dx:${rand(-60, 60)}px;font-size:${rand(.9, 2)}rem;animation-duration:${rand(7, 12)}s;opacity:.0`;
  s.onanimationend = () => s.remove();
  fx.append(s);
}

// Konfetti
function confetti(n = 90) {
  if (reduce) return;
  for (let i = 0; i < n; i++) {
    const c = document.createElement('i');
    c.className = 'conf';
    c.style.cssText = `left:${rand(0, 100)}vw;--dx:${rand(-120, 120)}px;background:${pick(COLORS)};width:${rand(6, 11)}px;height:${rand(8, 16)}px;animation-duration:${rand(2.5, 5)}s;animation-delay:${rand(0, .8)}s`;
    c.onanimationend = () => c.remove();
    fx.append(c);
  }
}

// Csillogó arany részecskék a háttérben
const cv = $('#sparkles'), cx = cv.getContext('2d');
let P = [], W = 0, H = 0;
function sizeCanvas() {
  const d = Math.min(devicePixelRatio || 1, 2);
  W = cv.width = innerWidth * d; H = cv.height = innerHeight * d;
  P = Array.from({ length: Math.round(innerWidth / 18) }, () => ({
    x: Math.random() * W, y: Math.random() * H, r: (Math.random() * 1.6 + .4) * d,
    p: Math.random() * 6.28, s: Math.random() * .02 + .005, vy: (Math.random() * .15 + .03) * d,
  }));
}
function drawSparkles() {
  cx.clearRect(0, 0, W, H);
  for (const q of P) {
    q.p += q.s; q.y -= q.vy; if (q.y < -5) q.y = H + 5;
    cx.beginPath();
    cx.fillStyle = `rgba(236,200,130,${.25 + .55 * Math.abs(Math.sin(q.p))})`;
    cx.arc(q.x, q.y, q.r, 0, 6.28);
    cx.fill();
  }
  if (!reduce) requestAnimationFrame(drawSparkles);
}

// Szekciók finom megjelenése görgetéskor
const io = 'IntersectionObserver' in window
  ? new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .15 })
  : null;
function observeReveals() {
  document.querySelectorAll('.reveal').forEach((el) => (io && !reduce ? io.observe(el) : el.classList.add('in')));
}

/* ===================== Zene ===================== */
const musicBtn = $('#musicBtn');
let audio = null, ac = null, timer = null, playing = false;

// Beépített, halk dallam (ha nincs zenefájl megadva)
function startSynth() {
  ac = ac || new (window.AudioContext || window.webkitAudioContext)();
  ac.resume();
  const notes = [261.63, 329.63, 392, 493.88, 440, 349.23, 392, 329.63];
  let i = 0;
  const step = () => {
    const o = ac.createOscillator(), g = ac.createGain(), t = ac.currentTime;
    o.type = 'sine'; o.frequency.value = notes[i++ % notes.length];
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(.07, t + .4); g.gain.linearRampToValueAtTime(0, t + 2.4);
    o.connect(g).connect(ac.destination); o.start(t); o.stop(t + 2.5);
  };
  step(); timer = setInterval(step, 1100);
}
function stopSynth() { clearInterval(timer); if (ac) ac.suspend(); }

function setMusic(on) {
  playing = on;
  musicBtn.classList.toggle('on', on);
  musicBtn.textContent = on ? '♫' : '♪';
  musicBtn.setAttribute('aria-pressed', String(on));
  musicBtn.setAttribute('aria-label', on ? 'Háttérzene kikapcsolása' : 'Háttérzene bekapcsolása');
}
musicBtn.addEventListener('click', () => {
  if (playing) { if (audio) audio.pause(); stopSynth(); setMusic(false); return; }
  setMusic(true);
  if (CONFIG.musicFile) {
    audio = audio || Object.assign(new Audio(CONFIG.musicFile), { loop: true, volume: .5 });
    audio.play().catch(() => { audio = null; CONFIG.musicFile = ''; if (playing) startSynth(); }); // hiba esetén a beépített dallam
  } else startSynth();
});

/* ===================== Interakciók ===================== */
// 1. Nyitógomb → boríték szekció
$('#startBtn').addEventListener('click', (e) => {
  burstFrom(e.currentTarget, 20);
  const sec = $('#letterSec');
  sec.hidden = false;
  observeReveals();
  setTimeout(() => { scrollTo(sec); $('#envelope').focus({ preventScroll: true }); }, reduce ? 0 : 450);
});

// 2. Boríték kinyitása → levél + többi szekció
$('#envelope').addEventListener('click', (e) => {
  const env = e.currentTarget;
  if (env.classList.contains('open')) return;
  env.classList.add('open');
  env.setAttribute('aria-expanded', 'true');
  burstFrom(env, 18);
  setTimeout(() => {
    const letter = $('#letter');
    letter.hidden = false;
    $('#rest').hidden = false;
    observeReveals();
    letter.focus({ preventScroll: true });
    scrollTo(letter);
  }, reduce ? 0 : 1000);
});

// 4. „Miért vagy különleges?” – minden kattintásra új üzenet (előbb mind elfogy, aztán újrakeveredik)
let bag = [], last = -1;
function nextReason() {
  if (!bag.length) {
    bag = CONFIG.reasons.map((_, i) => i).sort(() => Math.random() - .5);
    if (bag.length > 1 && bag[bag.length - 1] === last) bag.unshift(bag.pop());
  }
  last = bag.pop();
  return CONFIG.reasons[last];
}
$('#reasonHearts').addEventListener('click', (e) => {
  const b = e.target.closest('button');
  if (!b) return;
  const msg = $('#reasonMsg');
  msg.textContent = nextReason();
  msg.classList.remove('swap'); void msg.offsetWidth; msg.classList.add('swap');
  b.classList.remove('tap'); void b.offsetWidth; b.classList.add('tap');
  burstFrom(b, 8);
});

// 5. Nagy szív → üzenet, háttérváltás, kérdés
$('#bigHeart').addEventListener('click', (e) => {
  const heart = e.currentTarget;
  burstFrom(heart, 40);
  heart.classList.add('gone');
  document.body.classList.add('rose');
  $('#finaleHint').hidden = true;
  setTimeout(() => { heart.hidden = true; }, reduce ? 0 : 900);
  $('#finalText').textContent = CONFIG.text.finalText;
  $('#finaleBox').hidden = false;
  scrollTo($('#finaleBox'), 'center');
  setTimeout(() => { $('#question').hidden = false; $('#yesBtn').focus({ preventScroll: true }); scrollTo($('#question'), 'center'); }, reduce ? 0 : 2800);
});

// Válasz a kérdésre (mindkét gomb ugyanazt teszi)
function answer(e) {
  burstFrom(e.currentTarget, 50);
  document.querySelector('.btns').hidden = true;
  const a = $('#answer');
  a.textContent = CONFIG.answer;
  a.hidden = false;
  confetti(110);
  let n = 0;
  const rain = setInterval(() => { floatHeart(); floatHeart(); if (++n > 25) clearInterval(rain); }, 250);
  setTimeout(() => confetti(70), 1800);
}
// A „Nem” gomb mindig elmenekül, amikor Szofi közelít hozzá (egérrel, érintéssel vagy billentyűzettel)
const noBtn = $('#noBtn');
let dodges = 0, lastDodge = 0, placeholder = null;
noBtn.textContent = CONFIG.noTexts[0];
function dodge(e) {
  if (e && e.cancelable) e.preventDefault();
  const now = Date.now();
  if (now - lastDodge < 200) return; // ne számoljon duplán
  lastDodge = now;
  const r = noBtn.getBoundingClientRect();
  if (!placeholder) { // az első menekülésnél a gomb "kiszabadul" a sorból, a helye megmarad
    placeholder = document.createElement('span');
    placeholder.style.cssText = `display:inline-block;width:${r.width}px;height:${r.height}px`;
    noBtn.before(placeholder);
    noBtn.style.cssText = `position:fixed;left:${r.left}px;top:${r.top}px;width:${r.width}px`;
    void noBtn.offsetWidth;
  }
  const m = 8, w = r.width, h = r.height;
  const px = e && e.clientX !== undefined ? e.clientX : -999, py = e && e.clientY !== undefined ? e.clientY : -999;
  let x, y, tries = 0;
  do { // olyan helyet választ, ami messze van a mutatótól
    x = rand(m, Math.max(m, innerWidth - w - m)); y = rand(m, Math.max(m, innerHeight - h - m)); tries++;
  } while (tries < 25 && Math.hypot(x + w / 2 - px, y + h / 2 - py) < 200);
  noBtn.style.left = x + 'px';
  noBtn.style.top = y + 'px';
  dodges++;
  noBtn.textContent = CONFIG.noTexts[Math.min(dodges, CONFIG.noTexts.length - 1)];
}
['pointerenter', 'pointerdown', 'focus', 'click'].forEach((ev) => noBtn.addEventListener(ev, dodge));

$('#yesBtn').addEventListener('click', answer);
$('#yeahBtn').addEventListener('click', answer);

/* ===================== Indítás ===================== */
render();
sizeCanvas();
drawSparkles();
addEventListener('resize', () => { sizeCanvas(); if (reduce) drawSparkles(); });
if (!reduce) setInterval(floatHeart, 1400);