const CHAPTERS = [50,40,27,36,34,24,21,4,31,24,22,25,29,36,10,13,10,42,150,31,12,8,66,52,5,48,12,14,3,9,1,4,7,3,3,3,2,14,4,28,16,24,21,28,16,16,13,6,6,4,4,5,3,6,4,3,1,13,5,5,3,5,1,1,1,22];
const EXTRA_CHAPTERS = [14, 16, 19, 51, 6, 16, 15, 7, 14];
const TOTAL = CHAPTERS.reduce((sum, n) => sum + n, 0);
EXTRA_CHAPTERS.forEach((n) => CHAPTERS.push(n));
const CANON = 66;
const PASS = '2628';

const BOOKS = [
  ['창세기','창','Genesis',['창세기','창세','창','genesis','gen','ge']],
  ['출애굽기','출','Exodus',['출애굽기','출애굽','출애','출','exodus','exo','ex']],
  ['레위기','레','Leviticus',['레위기','레위','레','leviticus','lev']],
  ['민수기','민','Numbers',['민수기','민수','민','numbers','num']],
  ['신명기','신','Deuteronomy',['신명기','신명','신','deuteronomy','deut','dt']],
  ['여호수아','수','Joshua',['여호수아','여호','수','joshua','josh']],
  ['사사기','삿','Judges',['사사기','사사','삿','judges','judg']],
  ['룻기','룻','Ruth',['룻기','룻','ruth','ru']],
  ['사무엘상','삼상','1 Samuel',['사무엘상','삼상','1samuel','1sam','1sa']],
  ['사무엘하','삼하','2 Samuel',['사무엘하','삼하','2samuel','2sam','2sa']],
  ['열왕기상','왕상','1 Kings',['열왕기상','왕상','1kings','1kgs','1ki']],
  ['열왕기하','왕하','2 Kings',['열왕기하','왕하','2kings','2kgs','2ki']],
  ['역대상','대상','1 Chronicles',['역대상','대상','1chronicles','1chr','1ch']],
  ['역대하','대하','2 Chronicles',['역대하','대하','2chronicles','2chr','2ch']],
  ['에스라','스','Ezra',['에스라','스','ezra']],
  ['느헤미야','느','Nehemiah',['느헤미야','느헤','느','nehemiah','neh']],
  ['에스더','에','Esther',['에스더','에','esther','esth']],
  ['욥기','욥','Job',['욥기','욥','job']],
  ['시편','시','Psalms',['시편','시','psalms','psalm','ps']],
  ['잠언','잠','Proverbs',['잠언','잠','proverbs','prov']],
  ['전도서','전','Ecclesiastes',['전도서','전도','전','ecclesiastes','eccl']],
  ['아가','아','Song of Solomon',['아가','아','songofsolomon','song','sos']],
  ['이사야','사','Isaiah',['이사야','이사','사','isaiah','isa']],
  ['예레미야','렘','Jeremiah',['예레미야','예레','렘','jeremiah','jer']],
  ['예레미야애가','애','Lamentations',['예레미야애가','예레애가','애가','애','lamentations','lam']],
  ['에스겔','겔','Ezekiel',['에스겔','겔','ezekiel','ezek']],
  ['다니엘','단','Daniel',['다니엘','다니','단','daniel','dan']],
  ['호세아','호','Hosea',['호세아','호세','호','hosea','hos']],
  ['요엘','욜','Joel',['요엘','욜','joel']],
  ['아모스','암','Amos',['아모스','아모','암','amos']],
  ['오바댜','옵','Obadiah',['오바댜','오바','옵','obadiah','obad']],
  ['요나','욘','Jonah',['요나','욘','jonah']],
  ['미가','미','Micah',['미가','미','micah','mic']],
  ['나훔','나','Nahum',['나훔','나','nahum','nah']],
  ['하박국','합','Habakkuk',['하박국','하박','합','habakkuk','hab']],
  ['스바냐','습','Zephaniah',['스바냐','스바','습','zephaniah','zeph']],
  ['학개','학','Haggai',['학개','학','haggai','hag']],
  ['스가랴','슥','Zechariah',['스가랴','스가','슥','zechariah','zech']],
  ['말라기','말','Malachi',['말라기','말라','말','malachi','mal']],
  ['마태복음','마','Matthew',['마태복음','마태','마','matthew','matt','mt']],
  ['마가복음','막','Mark',['마가복음','마가','막','mark','mk']],
  ['누가복음','눅','Luke',['누가복음','누가','눅','luke','lk']],
  ['요한복음','요','John',['요한복음','요한','요','john','jn']],
  ['사도행전','행','Acts',['사도행전','행전','행','acts','ac']],
  ['로마서','롬','Romans',['로마서','로마','롬','romans','rom']],
  ['고린도전서','고전','1 Corinthians',['고린도전서','고전','1corinthians','1cor']],
  ['고린도후서','고후','2 Corinthians',['고린도후서','고후','2corinthians','2cor']],
  ['갈라디아서','갈','Galatians',['갈라디아서','갈라디아','갈','galatians','gal']],
  ['에베소서','엡','Ephesians',['에베소서','에베소','엡','ephesians','eph']],
  ['빌립보서','빌','Philippians',['빌립보서','빌립보','빌','philippians','phil']],
  ['골로새서','골','Colossians',['골로새서','골로새','골','colossians','col']],
  ['데살로니가전서','살전','1 Thessalonians',['데살로니가전서','살전','1thessalonians','1thess','1th']],
  ['데살로니가후서','살후','2 Thessalonians',['데살로니가후서','살후','2thessalonians','2thess','2th']],
  ['디모데전서','딤전','1 Timothy',['디모데전서','딤전','1timothy','1tim']],
  ['디모데후서','딤후','2 Timothy',['디모데후서','딤후','2timothy','2tim']],
  ['디도서','딛','Titus',['디도서','딛','titus','tit']],
  ['빌레몬서','몬','Philemon',['빌레몬서','빌레몬','몬','philemon','phlm']],
  ['히브리서','히','Hebrews',['히브리서','히브리','히','hebrews','heb']],
  ['야고보서','약','James',['야고보서','야고보','약','james','jas']],
  ['베드로전서','벧전','1 Peter',['베드로전서','벧전','1peter','1pet']],
  ['베드로후서','벧후','2 Peter',['베드로후서','벧후','2peter','2pet']],
  ['요한1서','요일','1 John',['요한1서','요한일서','요일','1john','1jn']],
  ['요한2서','요이','2 John',['요한2서','요한이서','요이','2john','2jn']],
  ['요한3서','요삼','3 John',['요한3서','요한삼서','요삼','3john','3jn']],
  ['유다서','유','Jude',['유다서','유다','유','jude']],
  ['요한계시록','계','Revelation',['요한계시록','계시록','계','revelation','rev']],
  ['토비트','토비','Tobit',['토비트','토비','tobit','tob']],
  ['유딧','유딧','Judith',['유딧','유디트','judith','jdt']],
  ['지혜서','지혜','Wisdom',['지혜서','지혜','wisdom','wis']],
  ['집회서','집회','Sirach',['집회서','집회','시라','sirach','sir']],
  ['바룩','바룩','Baruch',['바룩','baruch','bar']],
  ['마카베오상','마카상','1 Maccabees',['마카베오상','마카상','1maccabees','1macc','1mac']],
  ['마카베오하','마카하','2 Maccabees',['마카베오하','마카하','2maccabees','2macc','2mac']],
  ['에스델부록','에부','Esther Additions',['에스델부록','에스더부록','에부','estheradd']],
  ['다니엘부록','단부','Daniel Additions',['다니엘부록','단부','수산나','벨과뱀','danieladd']]
].map((row, index) => ({ id: index + 1, ko: row[0], abbr: row[1], en: row[2], aliases: row[3], extra: index + 1 > 66 }));

const VERSIONS = [
  { id: 'kornkrv', name: '개역개정' },
  { id: 'korhrv', name: '개역한글' },
  { id: 'korsaehan', name: '새한글' },
  { id: 'kornrsv', name: '새번역' },
  { id: 'kornkcb', name: '공동번역' },
  { id: 'korklb', name: '현대인의성경' },
  { id: 'koreasy', name: '쉬운성경' },
  { id: 'korktv', name: '우리말성경' },
  { id: 'kortkv', name: '현대어성경' },
  { id: 'korhkjv', name: '한글킹제임스' },
  { id: 'korhchv', name: '국한문' },
  { id: 'engkjv', name: 'KJV' }
];
const PALETTE = ['sand', 'blue', 'green', 'rose'];
const EXTRA_ORDER = [67, 68, 74, 69, 70, 71, 75, 72, 73];
function extraBooks() { return EXTRA_ORDER.map((id) => BOOKS[id - 1]).filter(Boolean); }

const state = {
  book: 1,
  chapter: 1,
  verse: null,
  versions: ['kornkrv', 'korhrv', 'kornrsv'],
  font: 18,
  night: false,
  readMode: false,
  marks: {},
  read: {},
  sel: [],
  selCol: null,
  anchor: null,
  multi: false,
  studyTab: 'chapter',
  studyOn: true,
  studyDock: 'side',
  studyW: 0,
  studyH: 0,
  inline: true,
  study: null,
  studyIdx: {},
  openNotes: new Set(),
  termOpen: null,
  plan: { start: null, perDay: 4 },
  recent: [],
  terms: [],
  data: new Map(),
  pending: new Map(),
  loadId: 0
};

const $ = (id) => document.getElementById(id);

function loadPrefs() {
  try {
    const saved = JSON.parse(localStorage.getItem('naranhi2') || '{}');
    if (saved.book) state.book = saved.book;
    if (saved.chapter) state.chapter = saved.chapter;
    if (Array.isArray(saved.versions) && saved.versions.length) {
      const ok = saved.versions.filter((id) => VERSIONS.some((v) => v.id === id));
      if (ok.length) state.versions = ok;
    }
    if (saved.font) state.font = saved.font;
    if (saved.night) state.night = true;
    if (saved.readMode) state.readMode = true;
    if (saved.marks) state.marks = saved.marks;
    if (saved.read) state.read = saved.read;
    if (saved.plan && saved.plan.perDay) state.plan = saved.plan;
    if (Array.isArray(saved.recent)) state.recent = saved.recent;
    if (saved.studyTab) state.studyTab = saved.studyTab;
    if (saved.studyOn === false) state.studyOn = false;
    if (saved.studyDock) state.studyDock = saved.studyDock;
    if (saved.studyW) state.studyW = saved.studyW;
    if (saved.studyH) state.studyH = saved.studyH;
    if (saved.inline === false) state.inline = false;
  } catch {}
}

function savePrefs() {
  localStorage.setItem('naranhi2', JSON.stringify({
    book: state.book,
    chapter: state.chapter,
    versions: state.versions,
    font: state.font,
    night: state.night,
    readMode: state.readMode,
    marks: state.marks,
    read: state.read,
    plan: state.plan,
    recent: state.recent.slice(0, 8),
    studyTab: state.studyTab,
    studyOn: state.studyOn,
    studyDock: state.studyDock,
    studyW: state.studyW,
    studyH: state.studyH,
    inline: state.inline
  }));
}

function remember() {
  const item = { book: state.book, chapter: state.chapter, verse: state.verse };
  state.recent = [item, ...state.recent.filter((row) => !(row.book === item.book && row.chapter === item.chapter))].slice(0, 8);
  savePrefs();
}

function orderedVersions() {
  return VERSIONS.filter((v) => state.versions.includes(v.id));
}

function shownVersions() {
  let list = orderedVersions();
  if (state.book > CANON) {
    const withBook = list.filter((v) => hasBook(v.id, state.book));
    if (withBook.length) list = withBook;
    else if (state.versions.includes('kornkcb')) list = [VERSIONS.find((v) => v.id === 'kornkcb')];
  }
  return state.readMode ? list.slice(0, 1) : list;
}

function colorOf(index) { return PALETTE[index % PALETTE.length]; }
function bookById(id) { return BOOKS[id - 1]; }

function chapterIndex(book, chapter) {
  let n = 0;
  for (let i = 1; i < book; i++) n += CHAPTERS[i - 1];
  return n + chapter - 1;
}

function fromIndex(index) {
  let n = Math.max(0, Math.min(TOTAL - 1, index));
  for (let i = 0; i < CHAPTERS.length; i++) {
    if (n < CHAPTERS[i]) return { book: i + 1, chapter: n + 1 };
    n -= CHAPTERS[i];
  }
  return { book: 66, chapter: 22 };
}

function refLabel(book, chapter, verse) {
  return bookById(book).ko + ' ' + chapter + (verse ? ':' + verse : '장');
}

function toast(message) {
  const el = $('toast');
  el.textContent = message;
  el.hidden = false;
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => { el.hidden = true; }, 1900);
}

function escapeReg(text) { return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

function paint(el, text) {
  el.textContent = '';
  const terms = state.terms.filter(Boolean);
  if (!terms.length) { el.textContent = text; return; }
  const re = new RegExp('(' + terms.map(escapeReg).join('|') + ')', 'gi');
  text.split(re).forEach((part) => {
    if (terms.some((term) => part.toLowerCase() === term.toLowerCase())) {
      const mark = document.createElement('mark');
      mark.textContent = part;
      el.appendChild(mark);
    } else if (part) {
      el.appendChild(document.createTextNode(part));
    }
  });
}

function loadVersion(id) {
  if (state.data.has(id)) return Promise.resolve(state.data.get(id));
  if (state.pending.has(id)) return state.pending.get(id);
  const job = fetch('./b-' + id + '.json')
    .then((res) => {
      if (!res.ok) throw new Error(id);
      return res.json();
    })
    .then((data) => {
      state.data.set(id, data);
      state.pending.delete(id);
      return data;
    })
    .catch((err) => {
      state.pending.delete(id);
      throw err;
    });
  state.pending.set(id, job);
  return job;
}

function hasBook(id, book) {
  const data = state.data.get(id);
  return !!(data && data[book - 1] && data[book - 1].length);
}

function chapterOf(id, book, chapter) {
  const data = state.data.get(id);
  if (!data) return null;
  return (data[book - 1] && data[book - 1][chapter - 1]) || [];
}

function renderChrome() {
  const book = bookById(state.book);
  $('title').textContent = book.ko + ' ' + state.chapter + '장';
  $('sub').textContent = book.en + ' ' + state.chapter + ' · ' + shownVersions().map((v) => v.name).join(' · ');
  document.documentElement.style.setProperty('--verse', state.font + 'px');
  $('fontLabel').textContent = String(state.font);
  $('modeBtn').textContent = state.readMode ? '나란히 보기' : '한 권 읽기';
  $('nightBtn').textContent = state.night ? '낮' : '밤';
  document.body.classList.toggle('night', state.night);
  document.body.classList.toggle('read-mode', state.readMode);
  $('scrub').max = String(TOTAL - 1);
  $('scrub').disabled = state.book > CANON;
  if (state.book <= CANON) $('scrub').value = String(chapterIndex(state.book, state.chapter));
  $('scrubLabel').textContent = book.abbr + ' ' + state.chapter + ' / ' + CHAPTERS[state.book - 1] + (state.book > CANON ? ' (외경)' : '');
  const first = state.book > CANON ? state.chapter === 1 : (state.book === 1 && state.chapter === 1);
  const last = state.book > CANON ? state.chapter === CHAPTERS[state.book - 1] : (state.book === 66 && state.chapter === CHAPTERS[65]);
  $('prev').disabled = first;
  $('prev2').disabled = first;
  $('next').disabled = last;
  $('next2').disabled = last;

  $('versions').innerHTML = '';
  VERSIONS.forEach((version) => {
    const picked = state.versions.indexOf(version.id);
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'chip ' + (picked > -1 ? colorOf(orderedVersions().findIndex((v) => v.id === version.id)) + ' on' : '');
    btn.textContent = version.name;
    btn.onclick = () => toggleVersion(version.id);
    $('versions').appendChild(btn);
  });

  $('abbrs').innerHTML = '';
  BOOKS.slice(0, CANON).concat(extraBooks()).forEach((item) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.textContent = item.abbr;
    btn.className = (item.id === state.book ? 'on' : '') + (item.extra ? ' extra' : '');
    btn.onclick = () => openPlace(item.id, 1, null, []);
    $('abbrs').appendChild(btn);
  });
  updateMarkButton();

  const current = $('abbrs').querySelector('.on');
  if (current) current.scrollIntoView({ inline: 'center', block: 'nearest' });
}

function renderBoard() {
  const versions = shownVersions();
  const board = $('board');
  board.style.setProperty('--cols', String(Math.max(versions.length, 1)));
  board.innerHTML = '';
  $('results').hidden = true;
  board.hidden = false;

  const head = document.createElement('div');
  head.className = 'head-row';
  versions.forEach((version, i) => {
    const cell = document.createElement('div');
    cell.className = 'col-head ' + colorOf(i);
    cell.textContent = version.name;
    head.appendChild(cell);
  });
  board.appendChild(head);

  const texts = versions.map((v) => chapterOf(v.id, state.book, state.chapter));
  let max = 0;
  texts.forEach((rows) => { if (rows) max = Math.max(max, rows.length); });
  if (!max) {
    const wait = document.createElement('p');
    wait.className = 'muted';
    wait.textContent = '본문을 불러오는 중입니다.';
    board.appendChild(wait);
    return;
  }

  const plan = inlinePlan();
  let carry = [];
  for (let i = 0; i < max; i++) {
    const pre = carry.concat(plan.before[i + 1] || []);
    if (!texts.some((rows) => rows && rows[i])) { carry = pre.concat(plan.after[i + 1] || []); continue; }
    carry = [];
    pre.forEach((item) => board.appendChild(inlineBox(item)));
    const row = document.createElement('div');
    row.className = 'verse-row' + (isSel(i + 1) ? ' on' : '');
    row.id = 'v' + (i + 1);
    versions.forEach((version, colIndex) => {
      const cell = document.createElement('div');
      const mark = state.marks[state.book + '-' + state.chapter + '-' + (i + 1)];
      cell.className = 'cell ' + colorOf(colIndex) + (mark ? ' mark-' + mark : '');
      cell.dataset.ver = version.id;
      const num = document.createElement('button');
      num.type = 'button';
      num.className = 'vnum';
      num.textContent = String(i + 1);
      const p = document.createElement('p');
      const rows = texts[colIndex];
      if (!rows) {
        p.className = 'muted';
        p.textContent = '불러오는 중';
      } else if (!rows[i]) {
        p.className = 'muted';
        p.textContent = '이 절 없음';
      } else {
        paint(p, rows[i]);
      }
      cell.appendChild(num);
      cell.appendChild(p);
      cell.onmousedown = (event) => { if (event.shiftKey) event.preventDefault(); };
      cell.onclick = (event) => onVerseClick(event, i + 1, version.id);
      cell.oncontextmenu = (event) => onVerseMenu(event, i + 1, version.id);
      row.appendChild(cell);
    });
    board.appendChild(row);
    (plan.after[i + 1] || []).forEach((item) => board.appendChild(inlineBox(item)));
  }
  carry.forEach((item) => board.appendChild(inlineBox(item)));
  Object.keys(plan.before).concat(Object.keys(plan.after)).map(Number).filter((v) => v > max).sort((a, b) => a - b).forEach((v) => {
    (plan.before[v] || []).concat(plan.after[v] || []).forEach((item) => board.appendChild(inlineBox(item)));
  });
}

function isSel(verse) { return state.sel.includes(verse); }

function rangeLabel(list) {
  const nums = [...list].sort((a, b) => a - b);
  const parts = [];
  let start = nums[0];
  let prev = nums[0];
  for (let i = 1; i <= nums.length; i++) {
    const n = nums[i];
    if (n === prev + 1) { prev = n; continue; }
    parts.push(start === prev ? String(start) : start + '-' + prev);
    start = n;
    prev = n;
  }
  return parts.join(', ');
}

function selRef() {
  if (!state.sel.length) return '';
  return bookById(state.book).ko + ' ' + state.chapter + ':' + rangeLabel(state.sel);
}

function copyVersion() {
  const shown = shownVersions();
  return shown.find((v) => v.id === state.selCol) || shown[0];
}

function refreshSelection() {
  const src = copyVersion();
  document.querySelectorAll('#board .verse-row').forEach((row) => {
    const on = isSel(Number(row.id.slice(1)));
    row.classList.toggle('on', on);
    row.querySelectorAll('.cell').forEach((cell) => cell.classList.toggle('src', on && src && cell.dataset.ver === src.id));
  });
  const bar = $('action');
  $('multiBtn').classList.toggle('on', state.multi);
  if (!state.sel.length) {
    bar.hidden = true;
    history.replaceState(null, '', location.pathname + '#/' + state.book + '/' + state.chapter);
    return;
  }
  bar.hidden = false;
  $('actionLabel').textContent = selRef() + (state.sel.length > 1 ? ' · ' + state.sel.length + '절' : '');
  $('copyOne').textContent = (src ? src.name : '') + ' 복사';
  history.replaceState(null, '', location.pathname + '#/' + state.book + '/' + state.chapter + '/' + state.sel[0]);
  remember();
  if (state.study) renderStudy();
  if (state.study) renderStudy();
}

function textPicked() {
  const s = window.getSelection ? window.getSelection() : null;
  return !!(s && String(s).trim());
}

function onVerseClick(event, verse, versionId) {
  if (textPicked()) return;
  hideMenu();
  state.selCol = versionId;
  if (event.shiftKey && state.anchor) {
    const a = Math.min(state.anchor, verse);
    const b = Math.max(state.anchor, verse);
    const range = [];
    for (let n = a; n <= b; n++) if ($('v' + n)) range.push(n);
    state.sel = (event.ctrlKey || event.metaKey) ? [...new Set(state.sel.concat(range))] : range;
  } else if (event.ctrlKey || event.metaKey || state.multi) {
    state.sel = isSel(verse) ? state.sel.filter((n) => n !== verse) : state.sel.concat(verse);
    state.anchor = verse;
  } else {
    state.sel = (state.sel.length === 1 && state.sel[0] === verse) ? [] : [verse];
    state.anchor = verse;
  }
  state.sel.sort((a, b) => a - b);
  state.verse = state.sel[0] || null;
  refreshSelection();
}

function onVerseMenu(event, verse, versionId) {
  if (textPicked()) return;
  event.preventDefault();
  state.selCol = versionId;
  if (!isSel(verse)) {
    state.sel = [verse];
    state.anchor = verse;
    state.verse = verse;
  }
  refreshSelection();
  showMenu(event.clientX, event.clientY);
}

function clearSelection() {
  state.sel = [];
  state.verse = null;
  hideMenu();
  refreshSelection();
}

function showMenu(x, y) {
  const menu = $('ctx');
  const v = copyVersion();
  $('ctxHead').textContent = selRef() + (state.sel.length > 1 ? ' · ' + state.sel.length + '절' : '');
  $('ctxOne').querySelector('span').textContent = v.name + ' 복사';
  $('ctxChapter').querySelector('span').textContent = v.name + ' ' + state.chapter + '장 전체 복사';
  menu.hidden = false;
  const w = menu.offsetWidth;
  const h = menu.offsetHeight;
  menu.style.left = Math.max(8, Math.min(x, window.innerWidth - w - 8)) + 'px';
  menu.style.top = Math.max(8, Math.min(y, window.innerHeight - h - 8)) + 'px';
  menu.querySelector('button.item').focus({ preventScroll: true });
}

function hideMenu() {
  const menu = $('ctx');
  if (menu) menu.hidden = true;
}

function selectVerse(verse) {
  state.sel = [verse];
  state.anchor = verse;
  state.verse = verse;
  refreshSelection();
}

async function openPlace(book, chapter, verse, terms) {
  const id = ++state.loadId;
  const samePlace = state.book === book && state.chapter === chapter;
  hideMenu();
  state.book = book;
  state.chapter = Math.min(Math.max(1, chapter), CHAPTERS[book - 1]);
  if (book > CANON && !state.versions.includes('kornkcb')) {
    state.versions = VERSIONS.map((v) => v.id).filter((id) => id === 'kornkcb' || state.versions.includes(id));
    savePrefs();
    toast('외경은 공동번역에만 있어 공동번역을 켰습니다');
  }
  state.verse = verse || null;
  if (!(samePlace && verse && state.sel.includes(verse))) state.sel = verse ? [verse] : [];
  if (verse) state.anchor = verse;
  if (terms) state.terms = terms;
  $('action').hidden = !state.sel.length;
  renderChrome();
  renderBoard();
  history.replaceState(null, '', location.pathname + '#/' + book + '/' + state.chapter + (verse ? '/' + verse : ''));

  const wanted = shownVersions();
  await Promise.all(wanted.map((v) => loadVersion(v.id).catch(() => toast(v.name + '을 불러오지 못했습니다'))));
  if (id !== state.loadId) return;
  if (state.book > CANON && !chapterFilled(state.book, state.chapter)) {
    state.chapter = nearestFilled(state.book, state.chapter, 1);
  }
  renderChrome();
  renderBoard();
  refreshSelection();
  if (verse) {
    const row = $('v' + verse);
    if (row) row.scrollIntoView({ block: 'center' });
  } else {
    $('scroller').scrollTop = 0;
  }
  remember();
  if (state.study) renderStudy();
}

function chapterFilled(book, chapter) {
  const data = state.data.get('kornkcb');
  if (!data || !data[book - 1]) return true;
  const rows = data[book - 1][chapter - 1];
  return !!(rows && rows.some((t) => t));
}

function nearestFilled(book, chapter, dir) {
  const max = CHAPTERS[book - 1];
  for (let c = chapter; c >= 1 && c <= max; c += dir) if (chapterFilled(book, c)) return c;
  for (let c = 1; c <= max; c++) if (chapterFilled(book, c)) return c;
  return chapter;
}

function step(delta) {
  if (state.book > CANON) {
    let target = state.chapter + delta;
    const max = CHAPTERS[state.book - 1];
    while (target >= 1 && target <= max && !chapterFilled(state.book, target)) target += delta;
    if (target < 1 || target > max) return;
    openPlace(state.book, target, null, []);
    return;
  }
  const next = fromIndex(chapterIndex(state.book, state.chapter) + delta);
  openPlace(next.book, next.chapter, null, []);
}

function toggleVersion(id) {
  if (state.versions.includes(id)) {
    if (state.versions.length === 1) { toast('한 역본은 남겨 두세요'); return; }
    state.versions = state.versions.filter((item) => item !== id);
  } else {
    state.versions = VERSIONS.map((v) => v.id).filter((item) => item === id || state.versions.includes(item));
  }
  savePrefs();
  openPlace(state.book, state.chapter, state.verse, state.terms);
}

function matchBook(raw) {
  const key = raw.replace(/\s+/g, '').toLowerCase();
  for (const book of BOOKS) if (book.aliases.includes(key)) return book;
  let best = null;
  let bestLen = 1;
  BOOKS.forEach((book) => {
    book.aliases.forEach((alias) => {
      if (alias.length > bestLen && key.startsWith(alias)) { best = book; bestLen = alias.length; }
    });
  });
  return best;
}

function parseQuery(input) {
  const text = input.trim();
  if (!text) return null;
  const match = text.match(/^([^\d]+?)\s*(\d+)\s*(?:[:：장.]\s*(\d+))?\s*(?:절)?(?:\s*[-~]\s*\d+)?$/);
  if (!match) {
    const book = matchBook(text);
    if (book && book.aliases.includes(text.replace(/\s+/g, '').toLowerCase())) return { book: book.id, chapter: 1, verse: null };
    return null;
  }
  const book = matchBook(match[1]);
  if (!book) return null;
  const chapter = Number(match[2]);
  if (chapter < 1 || chapter > CHAPTERS[book.id - 1]) return { error: book.ko + '는 ' + CHAPTERS[book.id - 1] + '장까지 있습니다' };
  return { book: book.id, chapter, verse: match[3] ? Number(match[3]) : null };
}

async function searchText(query) {
  const terms = query.trim().split(/\s+/).filter(Boolean);
  if (!terms.length) return;
  const main = shownVersions()[0];
  $('results').hidden = false;
  $('board').hidden = true;
  $('results').innerHTML = '<p class="muted">' + main.name + '에서 찾는 중입니다.</p>';
  try {
    await loadVersion(main.id);
  } catch {
    toast('본문을 불러오지 못했습니다');
    return;
  }
  const data = state.data.get(main.id);
  const hits = [];
  for (let b = 0; b < Math.min(data.length, BOOKS.length); b++) {
    const chapters = data[b] || [];
    for (let c = 0; c < chapters.length; c++) {
      const verses = chapters[c] || [];
      for (let v = 0; v < verses.length; v++) {
        const text = verses[v];
        if (text && terms.every((term) => text.includes(term))) {
          hits.push({ book: b + 1, chapter: c + 1, verse: v + 1, text });
        }
      }
    }
  }
  renderResults(hits, terms, main.name);
}

function renderResults(hits, terms, versionName) {
  state.terms = terms;
  const box = $('results');
  box.hidden = false;
  $('board').hidden = true;
  box.innerHTML = '';
  const head = document.createElement('div');
  head.className = 'result-head';
  const count = document.createElement('strong');
  count.textContent = hits.length ? versionName + ' ' + hits.length + '구절' : '찾는 말이 없습니다';
  const back = document.createElement('button');
  back.type = 'button';
  back.className = 'ghost';
  back.textContent = '읽기로 돌아가기';
  back.onclick = () => openPlace(state.book, state.chapter, state.verse, terms);
  head.appendChild(count);
  head.appendChild(back);
  box.appendChild(head);
  hits.slice(0, 100).forEach((hit) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'result';
    const title = document.createElement('b');
    title.textContent = refLabel(hit.book, hit.chapter, hit.verse);
    const p = document.createElement('span');
    paint(p, hit.text);
    btn.appendChild(title);
    btn.appendChild(p);
    btn.onclick = () => openPlace(hit.book, hit.chapter, hit.verse, terms);
    box.appendChild(btn);
  });
  if (hits.length > 100) {
    const more = document.createElement('p');
    more.className = 'muted';
    more.textContent = '앞 100구절만 보여 줍니다. 말을 더 붙여서 찾아보세요.';
    box.appendChild(more);
  }
}

async function copyText(text, message) {
  let ok = false;
  try {
    await navigator.clipboard.writeText(text);
    ok = true;
  } catch {}
  if (!ok) {
    const box = document.createElement('textarea');
    box.value = text;
    box.style.position = 'fixed';
    box.style.opacity = '0';
    document.body.appendChild(box);
    box.select();
    try { ok = document.execCommand('copy'); } catch {}
    box.remove();
  }
  toast(ok ? (message || '복사했습니다') : '복사하지 못했습니다');
}

function buildCopy(mode) {
  const nums = [...state.sel].sort((a, b) => a - b);
  const ref = selRef();
  const lines = (v) => {
    const rows = chapterOf(v.id, state.book, state.chapter) || [];
    return nums.filter((n) => rows[n - 1]).map((n) => (nums.length > 1 ? n + ' ' : '') + rows[n - 1]);
  };
  if (mode === 'all') {
    return ref + '\n\n' + shownVersions().map((v) => '[' + v.name + ']\n' + lines(v).join('\n')).join('\n\n');
  }
  const v = copyVersion();
  if (mode === 'quote') {
    const rows = chapterOf(v.id, state.book, state.chapter) || [];
    const body = nums.map((n) => rows[n - 1] || '').filter(Boolean).join(' ');
    return '\u201C' + body + '\u201D (' + ref + ', ' + v.name + ')';
  }
  return ref + ' (' + v.name + ')\n' + lines(v).join('\n');
}

function copySelection(mode) {
  if (!state.sel.length) { toast('먼저 절을 눌러 골라 주세요'); return; }
  const who = mode === 'all' ? '모든 역본' : copyVersion().name;
  copyText(buildCopy(mode), selRef() + ' ' + who + ' 복사했습니다');
}

function copyVerse(all) { copySelection(all ? 'all' : 'one'); }

function copyChapter() {
  const v = copyVersion();
  const rows = chapterOf(v.id, state.book, state.chapter) || [];
  const body = rows.map((text, i) => (text ? (i + 1) + ' ' + text : '')).filter(Boolean).join('\n');
  copyText(bookById(state.book).ko + ' ' + state.chapter + '장 (' + v.name + ')\n' + body, v.name + ' ' + state.chapter + '장 전체를 복사했습니다');
}

function setMark(color) {
  if (!state.sel.length) return;
  state.sel.forEach((n) => {
    const key = state.book + '-' + state.chapter + '-' + n;
    if (color) state.marks[key] = color; else delete state.marks[key];
  });
  savePrefs();
  renderBoard();
  refreshSelection();
}


function readKey(book, chapter) { return book + '-' + chapter; }
function isRead(book, chapter) { return !!state.read[readKey(book, chapter)]; }

function toggleRead(book, chapter, force) {
  const key = readKey(book, chapter);
  const next = force === undefined ? !state.read[key] : force;
  if (next) state.read[key] = 1; else delete state.read[key];
  savePrefs();
  return next;
}

function readStats() {
  let ot = 0, nt = 0;
  for (let b = 1; b <= 66; b++) {
    for (let c = 1; c <= CHAPTERS[b - 1]; c++) {
      if (isRead(b, c)) { if (b <= 39) ot++; else nt++; }
    }
  }
  const otTotal = CHAPTERS.slice(0, 39).reduce((a, n) => a + n, 0);
  const ntTotal = TOTAL - otTotal;
  return { ot, nt, done: ot + nt, otTotal, ntTotal, total: TOTAL };
}

function bookDone(book) {
  let n = 0;
  for (let c = 1; c <= CHAPTERS[book - 1]; c++) if (isRead(book, c)) n++;
  return n;
}

function updateMarkButton() {
  const btn = $('markRead');
  if (!btn) return;
  const done = isRead(state.book, state.chapter);
  btn.textContent = done ? '읽음 취소' : '읽음 표시';
  btn.classList.toggle('done', done);
}

function renderPlanSummary() {
  const s = readStats();
  const pct = Math.round((s.done / s.total) * 1000) / 10;
  $('planSummary').textContent = '전체 ' + s.done + ' / ' + s.total + '장 (' + pct + '%)  ·  구약 ' + s.ot + '/' + s.otTotal + '  ·  신약 ' + s.nt + '/' + s.ntTotal;
  $('planBarFill').style.width = (s.done / s.total * 100) + '%';
}


function todayStr(date) {
  const d = date || new Date();
  return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
}

function parseDay(text) {
  const parts = String(text || '').split('-').map(Number);
  if (parts.length !== 3 || !parts[0]) return null;
  return new Date(parts[0], parts[1] - 1, parts[2]);
}

function dayDiff(from, to) {
  return Math.round((to.getTime() - from.getTime()) / 86400000);
}

function addDays(date, days) {
  const d = new Date(date.getTime());
  d.setDate(d.getDate() + days);
  return d;
}

function prettyDay(date) {
  const names = ['일', '월', '화', '수', '목', '금', '토'];
  return date.getFullYear() + '년 ' + (date.getMonth() + 1) + '월 ' + date.getDate() + '일 (' + names[date.getDay()] + ')';
}

function allChapters() {
  const list = [];
  for (let b = 1; b <= 66; b++) {
    for (let c = 1; c <= CHAPTERS[b - 1]; c++) list.push([b, c]);
  }
  return list;
}

function nextUnread(count) {
  const out = [];
  for (const [b, c] of allChapters()) {
    if (!isRead(b, c)) {
      out.push([b, c]);
      if (out.length >= count) break;
    }
  }
  return out;
}

function planForecast() {
  const done = readStats().done;
  const remaining = TOTAL - done;
  const perDay = Math.max(1, Number(state.plan.perDay) || 4);
  const start = parseDay(state.plan.start) || new Date();
  const today = parseDay(todayStr());
  const elapsed = Math.max(0, dayDiff(start, today));
  const target = Math.min(TOTAL, perDay * (elapsed + 1));
  const daysLeft = Math.ceil(remaining / perDay);
  const finish = addDays(today, Math.max(0, daysLeft - 1));
  return { done, remaining, perDay, elapsed, target, gap: done - target, daysLeft, finish, wholeDays: Math.ceil(TOTAL / perDay) };
}

function renderForecast() {
  const startInput = $('planStart');
  const perInput = $('planPer');
  if (!state.plan.start) state.plan.start = todayStr();
  startInput.value = state.plan.start;
  perInput.value = String(state.plan.perDay);

  const f = planForecast();
  const box = $('planForecast');
  box.innerHTML = '';

  const l1 = document.createElement('div');
  l1.textContent = '하루 ' + f.perDay + '장이면 전체 ' + f.wholeDays + '일 과정입니다. 남은 ' + f.remaining + '장, ' + f.daysLeft + '일 걸립니다.';
  const l2 = document.createElement('div');
  l2.textContent = f.remaining === 0 ? '통독을 모두 마쳤습니다.' : '이대로 가면 ' + prettyDay(f.finish) + '에 마칩니다.';
  const l3 = document.createElement('div');
  l3.className = 'plan-gap ' + (f.gap >= 0 ? 'good' : 'late');
  if (f.remaining === 0) l3.textContent = '수고하셨습니다.';
  else if (f.gap >= 0) l3.textContent = '오늘까지 목표 ' + f.target + '장, 지금 ' + f.done + '장. ' + (f.gap === 0 ? '딱 맞습니다.' : f.gap + '장 앞서 있습니다.');
  else l3.textContent = '오늘까지 목표 ' + f.target + '장, 지금 ' + f.done + '장. ' + (-f.gap) + '장 밀렸습니다.';

  box.appendChild(l1);
  box.appendChild(l2);
  box.appendChild(l3);

  const list = $('planToday');
  list.innerHTML = '';
  const todays = nextUnread(f.perDay);
  if (!todays.length) {
    const span = document.createElement('span');
    span.className = 'muted';
    span.textContent = '남은 장이 없습니다.';
    list.appendChild(span);
  } else {
    todays.forEach(([b, c]) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'chip';
      btn.textContent = bookById(b).abbr + ' ' + c + '장';
      btn.onclick = () => {
        $('planDialog').close();
        openPlace(b, c, null, []);
      };
      list.appendChild(btn);
    });
  }
  $('planTodayDone').disabled = !todays.length;
  $('planTodayDone').dataset.list = JSON.stringify(todays);
}

function renderPlan() {
  renderPlanSummary();
  renderForecast();
  const body = $('planBody');
  body.innerHTML = '';
  [['구약', 0, 39], ['신약', 39, CANON]].forEach(([label, from, to]) => {
    const title = document.createElement('div');
    title.className = 'section-title';
    title.textContent = label;
    body.appendChild(title);
    BOOKS.slice(from, to).forEach((book) => {
      const row = document.createElement('div');
      row.className = 'plan-row';

      const head = document.createElement('div');
      head.className = 'plan-head';
      const name = document.createElement('button');
      name.type = 'button';
      name.className = 'plan-book';
      const done = bookDone(book.id);
      name.textContent = book.ko;
      if (done === CHAPTERS[book.id - 1]) name.classList.add('full');
      name.title = book.ko + ' 전체 표시 또는 지우기';
      name.onclick = () => {
        const all = bookDone(book.id) === CHAPTERS[book.id - 1];
        for (let c = 1; c <= CHAPTERS[book.id - 1]; c++) toggleRead(book.id, c, !all);
        renderPlan();
        updateMarkButton();
      };
      const cnt = document.createElement('span');
      cnt.className = 'plan-count';
      cnt.textContent = done + '/' + CHAPTERS[book.id - 1];
      head.appendChild(name);
      head.appendChild(cnt);

      const cells = document.createElement('div');
      cells.className = 'plan-cells';
      for (let c = 1; c <= CHAPTERS[book.id - 1]; c++) {
        const cell = document.createElement('button');
        cell.type = 'button';
        cell.className = 'plan-cell' + (isRead(book.id, c) ? ' on' : '') + (book.id === state.book && c === state.chapter ? ' here' : '');
        cell.textContent = String(c);
        cell.onclick = (event) => {
          if (event.shiftKey) {
            $('planDialog').close();
            openPlace(book.id, c, null, []);
            return;
          }
          toggleRead(book.id, c);
          renderPlan();
          updateMarkButton();
        };
        cell.ondblclick = () => {
          $('planDialog').close();
          openPlace(book.id, c, null, []);
        };
        cells.appendChild(cell);
      }

      row.appendChild(head);
      row.appendChild(cells);
      body.appendChild(row);
    });
  });
}

function openPlan() {
  renderPlan();
  $('planDialog').showModal();
  const here = $('planBody').querySelector('.plan-cell.here');
  if (here) here.scrollIntoView({ block: 'center' });
}

function openBooks() {
  $('dialogTitle').textContent = '성경 찾기';
  const body = $('dialogBody');
  body.innerHTML = '';
  if (state.recent.length) {
    const title = document.createElement('div');
    title.className = 'section-title';
    title.textContent = '이어서 읽기';
    const row = document.createElement('div');
    row.className = 'recent';
    state.recent.forEach((item) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'chip';
      btn.textContent = refLabel(item.book, item.chapter, item.verse);
      btn.onclick = () => { $('bookDialog').close(); openPlace(item.book, item.chapter, item.verse, []); };
      row.appendChild(btn);
    });
    body.appendChild(title);
    body.appendChild(row);
  }
  addBookGroup(body, '구약', BOOKS.slice(0, 39));
  addBookGroup(body, '신약', BOOKS.slice(39, 66));
  addBookGroup(body, '외경 (공동번역)', extraBooks());
  $('bookDialog').showModal();
}

function addBookGroup(body, title, books) {
  const label = document.createElement('div');
  label.className = 'section-title';
  label.textContent = title;
  const grid = document.createElement('div');
  grid.className = 'book-grid';
  books.forEach((book) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'book-btn';
    btn.textContent = book.abbr + ' ' + book.ko;
    btn.onclick = () => showChapters(book);
    grid.appendChild(btn);
  });
  body.appendChild(label);
  body.appendChild(grid);
}

function showChapters(book) {
  $('dialogTitle').textContent = book.ko;
  const body = $('dialogBody');
  body.innerHTML = '';
  const back = document.createElement('button');
  back.type = 'button';
  back.className = 'ghost';
  back.textContent = '책 목록';
  back.onclick = openBooks;
  const grid = document.createElement('div');
  grid.className = 'ch-grid';
  for (let chapter = 1; chapter <= CHAPTERS[book.id - 1]; chapter++) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'ch-btn';
    btn.textContent = chapter + '장';
    btn.onclick = () => { $('bookDialog').close(); openPlace(book.id, chapter, null, []); };
    grid.appendChild(btn);
  }
  body.appendChild(back);
  body.appendChild(grid);
}

function applyHash() {
  const parts = location.hash.replace(/^#\/?/, '').split('/').map(Number);
  if (parts[0] >= 1 && parts[0] <= BOOKS.length) {
    state.book = parts[0];
    state.chapter = parts[1] || 1;
    state.verse = parts[2] || null;
  }
}

function onSearch(event) {
  event.preventDefault();
  const query = $('q').value.trim();
  const parsed = parseQuery(query);
  $('suggest').hidden = true;
  if (parsed && parsed.error) { toast(parsed.error); return; }
  if (parsed && parsed.book) { openPlace(parsed.book, parsed.chapter, parsed.verse, []); return; }
  if (query) searchText(query);
}

function onType() {
  const parsed = parseQuery($('q').value.trim());
  if (parsed && parsed.book) {
    $('suggest').hidden = false;
    $('suggest').textContent = refLabel(parsed.book, parsed.chapter, parsed.verse) + '으로 갑니다. Enter를 누르세요.';
  } else {
    $('suggest').hidden = true;
  }
}


async function loadStudy() {
  if (state.study) return state.study;
  try {
    const [de, gnsb, cri, terms, units] = await Promise.all([
      fetch('./study/de.json').then((r) => r.json()),
      fetch('./study/gnsb.json').then((r) => r.json()),
      fetch('./study/cri.json').then((r) => r.json()),
      fetch('./study/terms.json').then((r) => r.json()),
      fetch('./study/units.json').then((r) => r.json())
    ]);
    state.study = { de, gnsb, cri, terms, units, hae: null };
  } catch (err) {
    state.study = { de: {}, gnsb: {}, cri: { intro: '', books: {} }, terms: [], units: [], hae: null };
    toast('해설 자료를 불러오지 못했습니다');
  }
  state.studyIdx = {};
  return state.study;
}

function escapeHtml(text) {
  return String(text || '').replace(/[&<>"]/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch]));
}

function cleanLines(text) {
  return String(text || '').replace(/\r/g, '').split('\n').map((s) => s.replace(/\s+/g, ' ').trim()).filter(Boolean);
}

function isEmptyNote(text) {
  return !text || /해설이 없습니다\.?\s*$/.test(String(text).trim());
}

const REF_RE = /((?:[1-3]\s?)?[가-힣A-Za-z]{1,7})?(\s?)(\d{1,3})\s?:\s?(\d{1,3})((?:\s?[-~]\s?\d{1,3}(?:\s?:\s?\d{1,3})?)?)/g;

function linkRefs(text, ctxBook) {
  const base = ctxBook || state.book;
  return escapeHtml(text).replace(REF_RE, (all, pre, sp, c, v, tail) => {
    let book = base;
    let lead = '';
    let label = c + ':' + v + (tail || '');
    if (pre) {
      const key = pre.replace(/\s/g, '');
      const found = matchBook(key);
      if (found) { book = found.id; label = pre + sp + label; }
      else lead = pre + sp;
    } else if (sp) lead = sp;
    if (Number(c) < 1 || Number(c) > CHAPTERS[book - 1]) return all;
    return lead + '<span class="ref" data-b="' + book + '" data-c="' + c + '" data-v="' + v + '">' + label + '</span>';
  });
}

function renderRich(text, ctxBook) {
  const lines = cleanLines(text);
  let html = '';
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line === '내용 개요') { html += '<h4 class="rich-h">내용 개요</h4>'; continue; }
    if (/^\d{1,3}(:\d{1,3})?\s*[-~]\s*\d{1,3}(:\d{1,3})?$/.test(line) && lines[i + 1] && !/^\d/.test(lines[i + 1])) {
      html += '<div class="o-row"><span class="o-range">' + linkRefs(line, ctxBook) + '</span><span class="o-t">' + linkRefs(lines[i + 1], ctxBook) + '</span></div>';
      i++;
      continue;
    }
    if (/^[ㄱ-ㅎ]\s/.test(line)) { html += '<div class="o-sub">' + linkRefs(line, ctxBook) + '</div>'; continue; }
    if (/^관련용어\s*:/.test(line)) { html += '<p class="rich-rel">' + linkRefs(line, ctxBook) + '</p>'; continue; }
    html += '<p>' + linkRefs(line, ctxBook) + '</p>';
  }
  return html;
}

function parseRange(str) {
  const groups = [];
  const re = /\(([^()]*)\)/g;
  let m;
  while ((m = re.exec(str))) groups.push(m[1]);
  groups.push(str);
  for (const g of groups) {
    let r;
    if ((r = g.match(/(\d+)\s*:\s*(\d+)\s*[-~]\s*(\d+)\s*:\s*(\d+)/))) return { sc: +r[1], sv: +r[2], ec: +r[3], ev: +r[4], src: g };
    if ((r = g.match(/(\d+)\s*:\s*(\d+)\s*[-~]\s*(\d+)/))) return { sc: +r[1], sv: +r[2], ec: +r[1], ev: +r[3], src: g };
    if ((r = g.match(/(\d+)\s*[-~]\s*(\d+)\s*[장편]/))) return { sc: +r[1], sv: 1, ec: +r[2], ev: 999, src: g };
    if ((r = g.match(/(\d+)\s*[장편]/))) return { sc: +r[1], sv: 1, ec: +r[1], ev: 999, src: g };
    if ((r = g.match(/(\d+)\s*:\s*(\d+)/))) return { sc: +r[1], sv: +r[2], ec: +r[1], ev: +r[2], src: g };
  }
  return null;
}

function rangeText(r, book) {
  const unit = book === 19 ? '편' : '장';
  if (r.ev === 999 && r.sv === 1) return r.sc === r.ec ? r.sc + unit : r.sc + '-' + r.ec + unit;
  if (r.sc === r.ec) return r.sc + ':' + r.sv + (r.ev !== r.sv ? '-' + r.ev : '');
  return r.sc + ':' + r.sv + '-' + r.ec + ':' + r.ev;
}

function studyFor(book) {
  if (!state.study) return null;
  if (state.studyIdx[book]) return state.studyIdx[book];
  const out = { sections: [], cri: [], intro: '', gintro: '' };
  const seen = new Set();
  [['de', '해설관주'], ['gnsb', '굿뉴스']].forEach(([key, label]) => {
    const pack = state.study[key][String(book)];
    if (!pack) return;
    if (key === 'de') out.intro = pack.intro || ''; else out.gintro = pack.intro || '';
    const secs = Array.isArray(pack.sections) ? pack.sections : (pack.sections ? [pack.sections] : []);
    secs.forEach((s) => {
      const r = parseRange(s.t || '');
      if (!r) return;
      const id = key + '|' + s.t;
      if (seen.has(id)) return;
      seen.add(id);
      const title = (s.t || '').replace('(' + r.src + ')', '').replace(/\s+/g, ' ').trim();
      out.sections.push({ key: id, src: key, label, title, r, x: s.x, empty: isEmptyNote(s.x) });
    });
  });
  out.sections.sort((a, b) => (a.r.sc - b.r.sc) || (a.r.sv - b.r.sv) || (a.src === 'de' ? -1 : 1));
  const notes = (state.study.cri.books && state.study.cri.books[String(book)]) || [];
  notes.forEach((n) => {
    const refs = [];
    const rr = /(\d{1,3})\s*:\s*(\d{1,3})/g;
    let m;
    while ((m = rr.exec(n.r))) refs.push({ c: +m[1], v: +m[2] });
    out.cri.push({ key: 'c|' + n.r + '|' + n.x.slice(0, 12), r: n.r, x: n.x, refs });
  });
  state.studyIdx[book] = out;
  return out;
}

function inlineBox(item) {
  const box = document.createElement('div');
  let label = '';
  let title = '';
  let body = '';
  let plain = '';
  if (item.kind === 'intro') {
    box.className = 'inote intro';
    label = '책 안내 · 해설관주';
    title = bookById(state.book).ko;
    body = renderRich(item.text);
    plain = item.text;
  } else if (item.kind === 'sec') {
    box.className = 'inote sec-box ' + item.s.src;
    label = (item.s.src === 'de' ? '단락 해설 · 해설관주' : '단락 해설 · 굿뉴스') + ' · ' + rangeText(item.s.r, state.book);
    title = item.s.title;
    body = renderRich(item.s.x);
    plain = item.s.x;
  } else {
    box.className = 'inote cri';
    label = '본문 비평 주 · ' + item.n.r;
    body = renderRich(item.n.x);
    plain = item.n.x;
  }
  const key = item.kind === 'intro' ? 'i|' + state.book : (item.kind === 'sec' ? item.s.key : item.n.key);
  const long = plain.replace(/\s+/g, '').length > 330;
  if (long && !state.openNotes.has(key)) box.classList.add('clamp');
  box.innerHTML = '<div class="inote-label">' + escapeHtml(label) + '</div>' +
    (title ? '<div class="inote-title">' + escapeHtml(title) + '</div>' : '') +
    '<div class="inote-body">' + body + '</div>' +
    (long ? '<button type="button" class="inote-more" data-key="' + escapeHtml(key) + '">' + (state.openNotes.has(key) ? '접기' : '펼쳐 읽기') + '</button>' : '');
  return box;
}

function inlinePlan() {
  return { before: {}, after: {} };
}

function secCovers(s, chapter, verse) {
  const r = s.r;
  if (chapter < r.sc || chapter > r.ec) return false;
  if (!verse) return true;
  if (chapter === r.sc && verse < r.sv) return false;
  if (chapter === r.ec && verse > r.ev) return false;
  return true;
}

function normTab() {
  if (state.studyTab === 'chapter' || state.studyTab === 'intro') state.studyTab = 'de';
  if (!['de', 'gnsb', 'hae', 'cri', 'term', 'unit'].includes(state.studyTab)) state.studyTab = 'de';
}

function commentaryHtml(isDe) {
  const book = state.book;
  const name = bookById(book).ko;
  const st = studyFor(book);
  const unit = book === 19 ? '편' : '장';
  const verse = state.sel[0] || null;
  const intro = isDe ? st.intro : st.gintro;
  const secs = st.sections.filter((s) => s.src === (isDe ? 'de' : 'gnsb'));
  const cur = secs.filter((s) => secCovers(s, state.chapter, verse));
  let html = '<div class="cm-top"><div class="cm-src">' + (isDe ? '독일성서공회 해설관주' : '굿뉴스 스터디 바이블') + '</div>';
  html += '<h3>' + escapeHtml(name) + '</h3>';
  html += '<div class="cm-here">지금 읽는 곳 <b>' + escapeHtml(name) + ' ' + state.chapter + unit + (verse ? ' ' + verse + '절' : '') + '</b>' + (cur.length ? ' · 아래 <b>' + escapeHtml(rangeText(cur[0].r, book)) + '</b> 해설에 해당합니다' : '') + '</div></div>';
  if (secs.length) {
    html += '<nav class="cm-nav">';
    secs.forEach((s, i) => {
      html += '<button type="button" class="cm-chip' + (cur.includes(s) ? ' cur' : '') + '" data-sec="' + i + '"><span class="rng">' + escapeHtml(rangeText(s.r, book)) + '</span> ' + escapeHtml(s.title) + '</button>';
    });
    html += '</nav>';
  }
  if (intro && !isEmptyNote(intro)) {
    const open = !cur.some((c) => !c.empty) || state.chapter === 1;
    html += '<details class="cm-sec intro"' + (open ? ' open' : '') + ' data-sec="intro"><summary><span class="sec-title">책 안내</span></summary><div class="cm-body">' + renderRich(intro) + '</div></details>';
  }
  const hasEmpty = secs.some((s) => s.empty);
  if (secs.length) html += '<h4 class="rich-h">단락별 해설</h4>';
  secs.forEach((s, i) => {
    const on = cur.includes(s);
    const head = '<span class="rng">' + escapeHtml(rangeText(s.r, book)) + '</span><span class="sec-title">' + escapeHtml(s.title) + '</span>' + (on ? '<span class="here-chip">읽는 중</span>' : '');
    if (s.empty) {
      html += '<div class="cm-sec outline' + (on ? ' cur' : '') + '" data-sec="' + i + '"><div class="cm-line">' + head + '</div></div>';
    } else {
      html += '<details class="cm-sec' + (on ? ' cur' : '') + '"' + (on ? ' open' : '') + ' data-sec="' + i + '"><summary>' + head + '</summary><div class="cm-body">' + renderRich(s.x) + '</div></details>';
    }
  });
  if (hasEmpty) html += '<p class="muted small cm-foot">제목만 있는 단락은 원본 프로그램의 [본문 해설]에 자세한 풀이가 있습니다. 이 앱에는 제목과 범위만 넣었습니다.</p>';
  if (!secs.length && (!intro || isEmptyNote(intro))) html += '<p class="muted">이 책에는 이 자료가 없습니다.</p>';
  else if (!secs.length) html += '<p class="muted">이 책은 단락 해설 없이 책 안내만 있습니다.</p>';
  return html;
}

function studyHtml() {
  normTab();
  const book = state.book;
  const name = bookById(book).ko;
  if (book > CANON && ['de', 'gnsb', 'hae', 'cri'].includes(state.studyTab)) {
    return '<h3>' + escapeHtml(name) + '</h3><p class="muted">외경에는 이 해설 자료가 없습니다.</p>';
  }
  if (state.studyTab === 'de') return commentaryHtml(true);
  if (state.studyTab === 'gnsb') return commentaryHtml(false);
  if (state.studyTab === 'hae') return haeHtml();
  const st = studyFor(book);
  const verse = state.sel[0] || null;
  const unit = book === 19 ? '편' : '장';
  if (state.studyTab === 'cri') {
    let html = '<div class="cm-top"><div class="cm-src">독일성서공회 해설관주 · 본문 비평 주</div><h3>' + escapeHtml(name) + '</h3></div>';
    if (!st.cri.length) return html + '<p class="muted">이 책에는 본문 비평 주가 없습니다.</p>';
    const here = st.cri.filter((n) => n.refs.some((x) => x.c === state.chapter));
    const rest = st.cri.filter((n) => !here.includes(n));
    const item = (n, isHere) => {
      const on = isHere && verse && n.refs.some((x) => x.c === state.chapter && x.v === verse);
      return '<div class="note' + (on ? ' on' : '') + '"><span class="rng">' + escapeHtml(n.r) + '</span>' + renderRich(n.x) + '</div>';
    };
    html += '<h4 class="rich-h">' + state.chapter + unit + '</h4>';
    html += here.length ? here.map((n) => item(n, true)).join('') : '<p class="muted">이 ' + unit + '에는 본문 비평 주가 없습니다.</p>';
    if (rest.length) html += '<details class="cm-sec"><summary><span class="sec-title">' + escapeHtml(name) + ' 다른 곳 (' + rest.length + ')</span></summary><div class="cm-body">' + rest.map((n) => item(n, false)).join('') + '</div></details>';
    return html;
  }
  if (state.studyTab === 'unit') {
    let html = '<div class="cm-top"><div class="cm-src">독일성서공회 해설관주</div><h3>도량형 및 화폐 단위</h3></div>';
    state.study.units.forEach((u) => { html += '<details class="cm-sec" open><summary><span class="sec-title">' + escapeHtml(u.n) + '</span></summary><div class="cm-body">' + renderRich(u.x) + '</div></details>'; });
    return html;
  }
  const q = ($('termQ').value || '').trim();
  if (state.termOpen) {
    const t = state.study.terms.find((x) => x.n === state.termOpen);
    if (t) return '<button type="button" class="linkbtn" id="termBack">← 용어 목록</button><h3>' + escapeHtml(t.n) + '</h3>' + renderRich(t.x);
  }
  const list = state.study.terms.filter((t) => !q || t.n.indexOf(q) >= 0 || t.x.indexOf(q) >= 0).slice(0, 120);
  let html = '<div class="cm-top"><div class="cm-src">독일성서공회 해설관주</div><h3>용어 해설 <span class="muted small">' + (q ? list.length + '건' : state.study.terms.length + '항목') + '</span></h3></div>';
  list.forEach((t) => {
    const first = cleanLines(t.x)[0] || '';
    html += '<button type="button" class="term-item" data-term="' + escapeHtml(t.n) + '"><b>' + escapeHtml(t.n) + '</b><span>' + escapeHtml(first.slice(0, 80)) + (first.length > 80 ? '…' : '') + '</span></button>';
  });
  return html;
}

function renderStudy() {
  const box = $('studyBody');
  if (!box) return;
  normTab();
  document.querySelectorAll('#studyTabs button').forEach((b) => b.classList.toggle('on', b.dataset.tab === state.studyTab));
  $('termSearchWrap').hidden = state.studyTab !== 'term';
  $('studyDock').textContent = state.studyDock === 'bottom' ? '옆으로' : '아래로';
  if (!state.study) { box.innerHTML = '<div class="study-inner"><p class="muted">해설을 불러오는 중입니다.</p></div>'; return; }
  const place = state.book + '-' + state.chapter;
  const samePlace = state.studyTab === state.lastStudyTab && state.lastStudyPlace === place;
  const keep = samePlace ? box.scrollTop : 0;
  box.innerHTML = '<div class="study-inner">' + studyHtml() + '</div>';
  state.lastStudyTab = state.studyTab;
  state.lastStudyPlace = place;
  if (samePlace) { box.scrollTop = keep; }
  else {
    box.scrollTop = 0;
    const target = box.querySelector('.cm-sec.cur') || box.querySelector('.note.on');
    if (target && (state.studyTab === 'de' || state.studyTab === 'gnsb' || state.studyTab === 'hae')) box.scrollTop = Math.max(0, target.offsetTop - box.querySelector('.study-inner').offsetTop - 8);
  }
  const on = box.querySelector('.note.on');
  if (on) on.scrollIntoView({ block: 'nearest' });
}

function applyStudyLayout() {
  document.body.classList.toggle('study-off', !state.studyOn);
  document.body.classList.toggle('study-bottom', state.studyDock === 'bottom');
  const st = $('study');
  if (state.studyW) st.style.setProperty('--studyW', state.studyW + 'px'); else st.style.removeProperty('--studyW');
  if (state.studyH) st.style.setProperty('--studyH', state.studyH + 'px'); else st.style.removeProperty('--studyH');
  $('studyToggle').textContent = state.studyOn ? '해설 숨기기' : '해설 보기';
}

function onStudyRef(event) {
  const ref = event.target.closest('.ref');
  if (!ref) return false;
  const b = Number(ref.dataset.b);
  const c = Number(ref.dataset.c);
  const v = Number(ref.dataset.v);
  if (b && c) openPlace(b, c, v || null, []);
  return true;
}

function bindStudyClicks() {
  $('studyBody').onclick = (event) => {
    if (onStudyRef(event)) return;
    if (event.target.closest('#termBack')) { state.termOpen = null; renderStudy(); return; }
    const item = event.target.closest('.term-item');
    if (item) { state.termOpen = item.dataset.term; renderStudy(); $('studyBody').scrollTop = 0; return; }
    const chip = event.target.closest('.cm-chip');
    if (chip) {
      const d = $('studyBody').querySelector('.cm-sec[data-sec="' + chip.dataset.sec + '"]');
      if (d) { if (d.tagName === 'DETAILS') d.open = true; $('studyBody').scrollTop = d.offsetTop - $('studyBody').querySelector('.study-inner').offsetTop - 8; }
      return;
    }
    const link = event.target.closest('.linkbtn[data-tab]');
    if (link) { state.studyTab = link.dataset.tab; savePrefs(); renderStudy(); }
  };
  $('board').addEventListener('click', (event) => {
    if (event.target.closest('.inote') && onStudyRef(event)) return;
    const more = event.target.closest('.inote-more');
    if (!more) return;
    const key = more.dataset.key;
    const box = more.closest('.inote');
    if (state.openNotes.has(key)) { state.openNotes.delete(key); box.classList.add('clamp'); more.textContent = '펼쳐 읽기'; }
    else { state.openNotes.add(key); box.classList.remove('clamp'); more.textContent = '접기'; }
  });
}

function startApp() {
  $('gate').hidden = true;
  $('app').hidden = false;
  loadPrefs();
  applyHash();
  renderChrome();
  openPlace(state.book, state.chapter, state.verse, []);
  VERSIONS.slice(0, 4).forEach((v) => loadVersion(v.id).catch(() => {}));
  applyStudyLayout();
  bindStudyClicks();
  renderStudy();
  loadStudy().then(() => { renderBoard(); refreshSelection(); renderStudy(); });
}

function boot() {
  $('gateForm').addEventListener('submit', (event) => {
    event.preventDefault();
    if ($('pw').value.trim() === PASS) {
      sessionStorage.setItem('naranhiOpen', '1');
      startApp();
    } else {
      $('gateMsg').textContent = '비밀번호가 다릅니다.';
      $('pw').value = '';
      $('pw').focus();
    }
  });

  $('searchForm').addEventListener('submit', onSearch);
  $('q').addEventListener('input', onType);
  $('prev').onclick = () => step(-1);
  $('next').onclick = () => step(1);
  $('prev2').onclick = () => step(-1);
  $('next2').onclick = () => step(1);
  $('scrub').addEventListener('input', () => {
    const next = fromIndex(Number($('scrub').value));
    $('scrubLabel').textContent = bookById(next.book).abbr + ' ' + next.chapter;
  });
  $('scrub').addEventListener('change', () => {
    const next = fromIndex(Number($('scrub').value));
    openPlace(next.book, next.chapter, null, []);
  });
  $('fontDown').onclick = () => { state.font = Math.max(15, state.font - 1); savePrefs(); renderChrome(); };
  $('fontUp').onclick = () => { state.font = Math.min(28, state.font + 1); savePrefs(); renderChrome(); };
  $('nightBtn').onclick = () => { state.night = !state.night; savePrefs(); renderChrome(); };
  $('studyToggle').onclick = () => { state.studyOn = !state.studyOn; savePrefs(); applyStudyLayout(); };
  document.querySelectorAll('#studyTabs button').forEach((btn) => {
    btn.onclick = () => { state.studyTab = btn.dataset.tab; state.termOpen = null; savePrefs(); renderStudy(); };
  });
  $('studyDock').onclick = () => { state.studyDock = state.studyDock === 'bottom' ? 'side' : 'bottom'; savePrefs(); applyStudyLayout(); renderStudy(); };
  $('termQ').addEventListener('input', () => { state.termOpen = null; renderStudy(); });
  $('studyDrag').addEventListener('pointerdown', (event) => {
    event.preventDefault();
    const st = $('study');
    const side = getComputedStyle($('reader')).flexDirection === 'row';
    const startX = event.clientX;
    const startY = event.clientY;
    const startW = st.offsetWidth;
    const startH = st.offsetHeight;
    const move = (ev) => {
      if (side) {
        state.studyW = Math.round(Math.max(340, Math.min(window.innerWidth * 0.65, startW - (ev.clientX - startX))));
        st.style.setProperty('--studyW', state.studyW + 'px');
      } else {
        state.studyH = Math.round(Math.max(140, Math.min(window.innerHeight * 0.75, startH - (ev.clientY - startY))));
        st.style.setProperty('--studyH', state.studyH + 'px');
      }
    };
    const up = () => { document.removeEventListener('pointermove', move); document.removeEventListener('pointerup', up); savePrefs(); };
    document.addEventListener('pointermove', move);
    document.addEventListener('pointerup', up);
  });
  $('modeBtn').onclick = () => { state.readMode = !state.readMode; savePrefs(); openPlace(state.book, state.chapter, state.verse, state.terms); };
  $('bookBtn').onclick = openBooks;
  $('planBtn').onclick = openPlan;
  $('planStart').onchange = () => {
    state.plan.start = $('planStart').value || todayStr();
    savePrefs();
    renderPlan();
  };
  $('planPer').onchange = () => {
    const n = Math.max(1, Math.min(60, Number($('planPer').value) || 4));
    state.plan.perDay = n;
    savePrefs();
    renderPlan();
  };
  document.querySelectorAll('.plan-line .chip').forEach((btn) => {
    btn.onclick = () => {
      state.plan.perDay = Math.ceil(TOTAL / Number(btn.dataset.days));
      savePrefs();
      renderPlan();
      toast('하루 ' + state.plan.perDay + '장으로 맞췄습니다');
    };
  });
  $('planTodayDone').onclick = () => {
    const list = JSON.parse($('planTodayDone').dataset.list || '[]');
    list.forEach(([b, c]) => toggleRead(b, c, true));
    renderPlan();
    updateMarkButton();
    toast(list.length + '장을 읽음으로 표시했습니다');
  };
  $('closePlan').onclick = () => $('planDialog').close();
  $('planReset').onclick = () => {
    if (!confirm('통독 표시를 모두 지울까요?')) return;
    state.read = {};
    savePrefs();
    renderPlan();
    updateMarkButton();
    toast('통독 표시를 지웠습니다');
  };
  $('markRead').onclick = () => {
    const now = toggleRead(state.book, state.chapter);
    updateMarkButton();
    toast(bookById(state.book).ko + ' ' + state.chapter + '장 ' + (now ? '읽음으로 표시했습니다' : '표시를 지웠습니다'));
  };
  $('closeBooks').onclick = () => $('bookDialog').close();
  $('aboutBtn').onclick = () => $('aboutDialog').showModal();
  $('closeAbout').onclick = () => $('aboutDialog').close();
  $('copyOne').onclick = () => copySelection('one');
  $('copyAll').onclick = () => copySelection('all');
  $('copyQuote').onclick = () => copySelection('quote');
  $('multiBtn').onclick = () => {
    state.multi = !state.multi;
    refreshSelection();
    toast(state.multi ? '누르는 절마다 더해집니다. 다시 누르면 빠집니다' : '한 절씩 고르기로 돌아왔습니다');
  };
  $('clearSel').onclick = clearSelection;
  $('ctx').addEventListener('click', (event) => {
    const btn = event.target.closest('button');
    if (!btn) return;
    const act = btn.dataset.act;
    if (act === 'one' || act === 'all' || act === 'quote') copySelection(act);
    if (act === 'chapter') copyChapter();
    if (act === 'link') copyText(location.href, '링크를 복사했습니다');
    if (act === 'unmark') setMark(null);
    if (act === 'clear') { clearSelection(); return; }
    hideMenu();
  });
  document.addEventListener('mousedown', (event) => { if (!event.target.closest('#ctx')) hideMenu(); });
  window.addEventListener('resize', hideMenu);
  $('scroller').addEventListener('scroll', hideMenu, { passive: true });
  $('copyChapter').onclick = copyChapter;
  $('clearMark').onclick = () => setMark(null);
  document.querySelectorAll('.swatch').forEach((btn) => { btn.onclick = () => setMark(btn.dataset.color); });
  $('shareBtn').onclick = () => copyText(location.href);
  document.addEventListener('keydown', (event) => {
    const typing = event.target.matches('input, textarea');
    if (event.key === '/' && !typing) { event.preventDefault(); $('q').focus(); return; }
    if (typing) return;
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'c') {
      if (textPicked() || !state.sel.length) return;
      event.preventDefault();
      copySelection('one');
      return;
    }
    if (event.key === 'ArrowLeft') step(-1);
    if (event.key === 'ArrowRight') step(1);
    if (event.key === 'Escape') { if (!$('ctx').hidden) hideMenu(); else clearSelection(); }
  });

  if (sessionStorage.getItem('naranhiOpen') === '1') startApp();
  else $('pw').focus();
}

boot();
function haeSecs(book, chapter) {
  const key = 'hae' + book;
  if (!state.studyIdx[key]) {
    const out = [];
    const pack = (state.study.hae && state.study.hae[String(book)]) || {};
    Object.keys(pack).forEach((ch) => {
      (pack[ch] || []).forEach((s) => {
        const r = parseRange(s.h || '');
        out.push({ key: 'h|' + book + '|' + ch + '|' + (s.h || '') + '|' + String(s.x || '').slice(0, 24), ch: +ch, title: s.h || '', x: s.x || '', r: r || { sc: +ch, sv: 1, ec: +ch, ev: 999, src: s.h || '' } });
      });
    });
    out.sort((a, b) => (a.ch - b.ch));
    state.studyIdx[key] = out;
  }
  return state.studyIdx[key];
}
function haeHtml() {
  if (!state.study.hae) {
    fetch('./study/hae.json').then((r) => r.json()).then((d) => { state.study.hae = d; state.studyIdx = {}; renderStudy(); }).catch(() => { state.study.hae = {}; renderStudy(); });
    return '<div class="cm-top"><div class="cm-src">독일성서공회 해설관주 · 본문 해설 (절 단위)</div></div><p class="muted">절 단위 해설을 불러오는 중입니다.</p>';
  }
  const book = state.book;
  const name = bookById(book).ko;
  const unit = book === 19 ? '편' : '장';
  const verse = state.sel[0] || null;
  const secs = haeSecs(book, state.chapter).filter((s) => s.ch === state.chapter || (s.r && s.r.sc <= state.chapter && state.chapter <= s.r.ec && (s.ch === state.chapter - 1 || s.ch === state.chapter + 1)));
  const cur = secs.filter((s) => s.r && secCovers(s, state.chapter, verse));
  let html = '<div class="cm-top"><div class="cm-src">독일성서공회 해설관주 · 본문 해설 (절 단위)</div>';
  html += '<h3>' + escapeHtml(name) + '</h3>';
  html += '<div class="cm-here">지금 읽는 곳 <b>' + escapeHtml(name) + ' ' + state.chapter + unit + (verse ? ' ' + verse + '절' : '') + '</b>' + (cur.length ? ' · 아래 <b>' + escapeHtml(rangeText(cur[0].r, book)) + '</b> 해설에 해당합니다' : '') + '</div></div>';
  if (secs.length) {
    html += '<nav class="cm-nav">';
    secs.forEach((s, i) => {
      html += '<button type="button" class="cm-chip' + (cur.includes(s) ? ' cur' : '') + '" data-sec="' + i + '"><span class="rng">' + escapeHtml(rangeText(s.r, book)) + '</span></button>';
    });
    html += '</nav>';
  }
  html += '<h4 class="rich-h">절별 해설</h4>';
  secs.forEach((s, i) => {
    const on = cur.includes(s);
    const head = '<span class="rng">' + escapeHtml(rangeText(s.r, book)) + '</span>' + (on ? '<span class="here-chip">읽는 중</span>' : '');
    if (isEmptyNote(s.x)) {
      html += '<div class="cm-sec outline' + (on ? ' cur' : '') + '" data-sec="' + i + '"><div class="cm-line">' + head + '</div></div>';
    } else {
      html += '<details class="cm-sec' + (on ? ' cur' : '') + '"' + (on ? ' open' : '') + ' data-sec="' + i + '"><summary>' + head + '</summary><div class="cm-body">' + renderRich(s.x, book) + '</div></details>';
    }
  });
  if (!secs.length) html += '<p class="muted">이 ' + unit + '에는 절 단위 해설이 없습니다.</p>';
  return html;
}
