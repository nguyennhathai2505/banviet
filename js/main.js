/* =========================================================
   BẢN VIỆT — Main entry
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
  console.log('%c Bản Việt · EdTech Ecosystem ',
    'background:linear-gradient(90deg,#0A192F,#0066FF);color:#fff;padding:5px 12px;border-radius:6px;font-weight:bold;',
    'Full homepage ready 🚀'
  );

  initScrollReveal();
  initCountUp();
  initPathTabs();
  initConsultForm();
  initAiQuizScroll();
});

/* ---------- Scroll reveal ---------- */
function initScrollReveal() {
  const els = document.querySelectorAll('.reveal-left, .reveal-up');
  if (!els.length) return;
  if (!('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
  );
  els.forEach((el) => observer.observe(el));
}

/* ---------- Count-up Stats ---------- */
function initCountUp() {
  const els = document.querySelectorAll('[data-count]');
  if (!els.length) return;

  const easeOut = (t) => 1 - Math.pow(1 - t, 3);

  const animate = (el) => {
    const target = parseInt(el.dataset.count, 10);
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || '';
    const duration = 1600;
    const start = performance.now();

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const value = Math.round(target * easeOut(progress));
      let display = value.toString();
      if (prefix === '0' && value < 10) display = '0' + display;
      el.textContent = display + suffix;
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  if (!('IntersectionObserver' in window)) {
    els.forEach(animate);
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animate(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );
  els.forEach((el) => observer.observe(el));
}

/* ---------- Path Selector Tabs ---------- */
function initPathTabs() {
  const tabs = document.querySelectorAll('[data-tab]');
  const panels = document.querySelectorAll('[data-panel]');
  if (!tabs.length || !panels.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const id = tab.dataset.tab;
      tabs.forEach((t) => t.classList.toggle('is-active', t === tab));
      panels.forEach((p) => {
        p.classList.toggle('is-active', p.dataset.panel === id);
      });
    });
  });
}

/* ---------- Consultation Form (2-step) ---------- */
function initConsultForm() {
  const form = document.querySelector('[data-consult-form]');
  if (!form) return;

  const chips = form.querySelectorAll('[data-chip]');
  const stepNext = form.querySelector('[data-step-next]');
  const stepPrev = form.querySelector('[data-step-prev]');
  const step1 = form.querySelector('[data-step="1"]');
  const step2 = form.querySelector('[data-step="2"]');
  const dots = form.querySelectorAll('[data-step-dot]');

  let selectedChip = null;

  // Chip select
  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      chips.forEach((c) => c.classList.remove('is-selected'));
      chip.classList.add('is-selected');
      selectedChip = chip.dataset.chip;
      if (stepNext) stepNext.disabled = false;
    });
  });

  const goToStep = (n) => {
    if (n === 2) {
      step1 && step1.classList.add('hidden');
      step2 && step2.classList.remove('hidden');
      dots[0]?.classList.remove('is-active');
      dots[0]?.classList.add('is-done');
      dots[1]?.classList.add('is-active');
    } else {
      step2 && step2.classList.add('hidden');
      step1 && step1.classList.remove('hidden');
      dots[0]?.classList.remove('is-done');
      dots[0]?.classList.add('is-active');
      dots[1]?.classList.remove('is-active');
    }
  };

  stepNext?.addEventListener('click', () => goToStep(2));
  stepPrev?.addEventListener('click', () => goToStep(1));

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = form.querySelector('input[name="name"]');
    const phoneInput = form.querySelector('input[name="phone"]');
    const name = nameInput?.value.trim();
    const phone = phoneInput?.value.trim();

    if (!name) {
      alert('Vui lòng nhập họ tên');
      nameInput?.focus();
      return;
    }
    if (!phone || !/^[0-9+\s\-().]{8,}$/.test(phone)) {
      alert('Vui lòng nhập số điện thoại hợp lệ');
      phoneInput?.focus();
      return;
    }

    // Demo: hiện toast
    showToast(`Cảm ơn ${name}! Chuyên gia Bản Việt sẽ liên hệ trong 24h.`);

    // Reset
    form.reset();
    chips.forEach((c) => c.classList.remove('is-selected'));
    selectedChip = null;
    if (stepNext) stepNext.disabled = true;
    goToStep(1);
  });
}

/* ---------- Toast ---------- */
function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'bv-toast';
  toast.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
    <span>${message}</span>
  `;
  document.body.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('show'));
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 4000);
}

/* ---------- AI Quiz button: scroll to form ---------- */
function initAiQuizScroll() {
  document.querySelectorAll('[data-ai-quiz-open]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const form = document.getElementById('dang-ky-tu-van');
      if (form) {
        form.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setTimeout(() => {
          const firstChip = form.querySelector('[data-chip]');
          firstChip?.focus();
        }, 700);
      }
    });
  });
}