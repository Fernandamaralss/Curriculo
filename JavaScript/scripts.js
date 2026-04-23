// ── IDADE AUTOMÁTICA ──
(function() {
  const birth = new Date(2002, 10, 4); // 04/11/2002
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
  const el = document.getElementById('age-display');
  if (el) el.textContent = age;
})();

// ── THEME ──
function toggleTheme() {
  const html = document.documentElement;
  html.dataset.theme = html.dataset.theme === 'dark' ? 'light' : 'dark';
}

// ── TERMINAL ANIMATION ──
const lines = [
  { type: 'cmd', prompt: '~$', text: 'whoami' },
  { type: 'out', text: 'fernanda.amaral — QA analyst & backend dev' },
  { type: 'cmd', prompt: '~$', text: 'cat status.txt' },
  { type: 'out', text: 'trabalhando @ Vega IT · SJP, PR · 2026' },
  { type: 'cmd', prompt: '~$', text: 'ls stack/' },
  { type: 'out-hi', text: 'Postman/  .NET/  Node/  PostgreSQL/  Flutter/' },
  { type: 'cmd', prompt: '~$', text: 'cat config.json' },
  { type: 'out-ok', text: '{ "qa": true, "freelance": true, "open": true }' },
  { type: 'cmd', prompt: '~$', text: '' },
];

async function typeTerminal() {
  const body = document.getElementById('terminal-body');
  for (const line of lines) {
    const div = document.createElement('div');
    div.className = 't-line';
    if (line.type === 'cmd') {
      div.innerHTML = `<span class="t-prompt">${line.prompt}</span><span class="t-cmd"></span>`;
      body.appendChild(div);
      const cmd = div.querySelector('.t-cmd');
      for (const ch of line.text) {
        cmd.textContent += ch;
        await sleep(40);
      }
      if (!line.text) {
        const cur = document.createElement('span');
        cur.className = 'cursor';
        div.appendChild(cur);
        break;
      }
    } else {
      const cls = line.type === 'out-ok' ? 't-out ok' : line.type === 'out-hi' ? 't-out hi' : 't-out';
      div.innerHTML = `<span class="${cls}">${line.text}</span>`;
      body.appendChild(div);
    }
    body.scrollTop = body.scrollHeight;
    await sleep(line.type === 'cmd' ? 150 : 300);
  }
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }
window.addEventListener('load', () => setTimeout(typeTerminal, 800));

// ── SCROLL ANIMATIONS ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.15 });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
