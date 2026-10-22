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

  initAnchorBar();
  initTimelineScroll();
  initEcosystemIndex();

  initCoursesPage();
  initAiQuizModal();  
  initNewsPage();
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












/* ---------- Anchor Bar: active theo scroll ---------- */
function initAnchorBar() {
  const pills = document.querySelectorAll('[data-anchor]');
  if (!pills.length) return;

  const sections = Array.from(pills).map((p) => ({
    id: p.dataset.anchor,
    el: document.getElementById(p.dataset.anchor),
    pill: p,
  })).filter((s) => s.el);

  if (!sections.length) return;

  const activate = (id) => {
    pills.forEach((p) => p.classList.toggle('is-active', p.dataset.anchor === id));
  };

  // Smooth scroll khi click (mặc định trình duyệt đã lo, chỉ cần class active)
  pills.forEach((p) => {
    p.addEventListener('click', () => {
      // Delay để scroll mượt xong mới active
      setTimeout(() => activate(p.dataset.anchor), 500);
    });
  });

  if (!('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const found = sections.find((s) => s.el === entry.target);
          if (found) activate(found.id);
        }
      });
    },
    { rootMargin: '-30% 0px -55% 0px', threshold: 0 }
  );

  sections.forEach((s) => observer.observe(s.el));
}

/* ---------- Timeline: beam chạy theo scroll + node sáng ---------- */
function initTimelineScroll() {
  const timeline = document.querySelector('[data-timeline]');
  const beam = document.querySelector('[data-timeline-beam]');
  const items = document.querySelectorAll('[data-timeline-item]');
  if (!timeline || !beam || !items.length) return;

  const updateBeam = () => {
    const rect = timeline.getBoundingClientRect();
    const windowH = window.innerHeight;
    // progress: 0 khi timeline bắt đầu vào viewport (bottom chạm viewport bottom)
    // 1 khi timeline đã đi qua (top chạm viewport top)
    const total = rect.height;
    const scrolled = windowH - rect.top;
    const progress = Math.max(0, Math.min(1, scrolled / total));
    beam.style.height = `${progress * 100}%`;

    // Active từng node khi beam đi qua
    const beamY = progress * total; // px từ top của timeline
    items.forEach((item) => {
      const itemRect = item.getBoundingClientRect();
      const itemTopRelative = itemRect.top - rect.top;
      const itemCenter = itemTopRelative + itemRect.height / 2;
      const isActive = beamY >= itemCenter - 20;
      item.classList.toggle('is-active', isActive);
    });
  };

  updateBeam();
  window.addEventListener('scroll', updateBeam, { passive: true });
  window.addEventListener('resize', updateBeam);
}



/* =========================================================
   ECOSYSTEM PAGE — Sticky Index scroll + flash
   ========================================================= */
function initEcosystemIndex() {
  const links = document.querySelectorAll('[data-index-link]');
  if (!links.length) return;

  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const id = link.dataset.indexLink;
      const target = document.getElementById(id);
      if (!target) return;

      // Smooth scroll với offset cho sticky (header 72px + index ~64px)
      const yOffset = -150;
      const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });

      // Flash highlight
      target.classList.add('is-flash');
      setTimeout(() => target.classList.remove('is-flash'), 1600);
    });
  });
}



/* =========================================================
   COURSES PAGE — Filter + Render
   ========================================================= */
function initCoursesPage() {
  const grid = document.getElementById('course-grid');
  const empty = document.getElementById('course-empty');
  if (!grid || typeof COURSES_DATA === 'undefined') return;

  // ===== Icons theo brand =====
  const BRAND_CONFIG = {
    diem10: { color: '#F97316', label: 'Điểm 10+', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c0 1 2.5 3 6 3s6-2 6-3v-5"/></svg>` },
    danhlingo: { color: '#DC2626', label: 'DanhLingo', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z"/></svg>` },
    schooli: { color: '#0EA5E9', label: 'Schooli', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M5 21V10l7-5 7 5v11"/><path d="M9 21v-6h6v6"/></svg>` },
    aitechco: { color: '#0066FF', label: 'Aitechco', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/></svg>` },
  };

  // ===== State =====
  const state = {
    search: '',
    brand: 'all',
    age: 'all',
    mode: 'all',
    goal: 'all',
  };

  // ===== Render 1 course card =====
  const renderCard = (c) => {
    const cfg = BRAND_CONFIG[c.brand];
    return `
      <article class="bv-course-card" data-course-id="${c.id}" data-brand="${c.brand}" data-age="${c.age}" data-mode="${c.mode}" data-goal="${c.goal}" data-search="${c.keywords.join(' ').toLowerCase()}">
        <!-- Top brand badge -->
        <div class="bv-course-brand">
          <span class="bv-course-brand-tag" style="color:${cfg.color}">
            <span class="bv-course-brand-dot" style="background:${cfg.color}; color:${cfg.color}"></span>
            ${cfg.label}
          </span>
        </div>

        <!-- Thumbnail -->
        <div class="bv-course-thumb" style="color:${cfg.color}">
          <!-- ẢNH THẬT: bỏ vào assets/images/course-${c.id}.jpg và thay div dưới bằng img -->
          <!-- <img src="${siteUrl(`assets/images/course-${c.id}.jpg`)}" alt="${c.title}" class="w-full h-full object-cover" loading="lazy" /> -->
          <div class="bv-course-thumb-inner" style="background: linear-gradient(135deg, ${cfg.color}15 0%, ${cfg.color}30 100%);">
            <div class="bv-course-thumb-icon">${cfg.icon}</div>
          </div>
          <span class="bv-course-mode-badge">${c.modeBadge}</span>
        </div>

        <!-- Tech metadata -->
        <div class="bv-course-meta">
          <div class="bv-course-meta-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            <div class="bv-course-meta-value">${c.duration}</div>
            <div class="bv-course-meta-label">Thời lượng</div>
          </div>
          <div class="bv-course-meta-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
            <div class="bv-course-meta-value">${c.target}</div>
            <div class="bv-course-meta-label">Mục tiêu</div>
          </div>
          <div class="bv-course-meta-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/></svg>
            <div class="bv-course-meta-value">${c.classSize}</div>
            <div class="bv-course-meta-label">Sĩ số</div>
          </div>
        </div>

        <!-- Body -->
        <div class="bv-course-body">
          <h3 class="bv-course-title">${c.title}</h3>
          <p class="bv-course-subtitle">${c.subtitle}</p>
          <ul class="bv-course-features">
            ${c.features.map((f) => `
              <li class="bv-course-feature">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                <span>${f}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <!-- Actions -->
        <div class="bv-course-actions">
          <a href="${siteHref('index.html')}#dang-ky-tu-van?course=${c.id}" class="bv-course-btn bv-course-btn-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            Đăng ký tư vấn
          </a>
          <a href="${siteUrl(`pages/courses.html#${c.id}`)}" class="bv-course-btn bv-course-btn-secondary">
            Chi tiết
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </div>
      </article>
    `;
  };

  // ===== Initial render =====
  grid.innerHTML = COURSES_DATA.map(renderCard).join('');

  // ===== Elements =====
  const cards = Array.from(grid.querySelectorAll('.bv-course-card'));
  const searchInput = document.getElementById('course-search');
  const searchClear = document.getElementById('course-search-clear');
  const suggestBox = document.getElementById('course-suggest');
  const resultCount = document.getElementById('result-count');
  const resetBtn = document.getElementById('filter-reset');
  const brandTabs = document.querySelectorAll('[data-brand]');
  const ageSelect = document.getElementById('filter-age');
  const modeSelect = document.getElementById('filter-mode');
  const goalSelect = document.getElementById('filter-goal');

  // ===== Update brand counts =====
  const updateBrandCounts = () => {
    const counts = { all: 0, diem10: 0, danhlingo: 0, schooli: 0, aitechco: 0 };
    cards.forEach((card) => {
      if (card.classList.contains('is-hidden')) return;
      const brand = card.dataset.brand;
      counts[brand] = (counts[brand] || 0) + 1;
      counts.all++;
    });
    document.querySelectorAll('[data-count]').forEach((el) => {
      const key = el.dataset.count;
      el.textContent = counts[key] || 0;
    });
  };

  // ===== Filter =====
  const applyFilter = () => {
    let visible = 0;
    const keyword = state.search.trim().toLowerCase();

    cards.forEach((card) => {
      const matchesBrand = state.brand === 'all' || card.dataset.brand === state.brand;
      const matchesAge = state.age === 'all' || card.dataset.age === state.age;
      const matchesMode = state.mode === 'all' || card.dataset.mode === state.mode;
      const matchesGoal = state.goal === 'all' || card.dataset.goal === state.goal;
      const matchesSearch = !keyword || card.dataset.search.includes(keyword);

      const show = matchesBrand && matchesAge && matchesMode && matchesGoal && matchesSearch;
      card.classList.toggle('is-hidden', !show);
      if (show) visible++;
    });

    resultCount.textContent = `${visible}/${cards.length}`;
    empty.classList.toggle('hidden', visible > 0);
    grid.classList.toggle('hidden', visible === 0);

    // Show/hide reset
    const hasFilter = state.search || state.brand !== 'all' || state.age !== 'all' || state.mode !== 'all' || state.goal !== 'all';
    resetBtn.classList.toggle('hidden', !hasFilter);

    // Update clear search
    searchClear.classList.toggle('hidden', !state.search);

    updateBrandCounts();
  };

  // ===== Search =====
  const SUGGESTIONS = ['Toán', 'Vật Lý', 'Hóa Học', 'Ngữ Văn', 'IELTS', 'Cambridge', 'Tiếng Anh giao tiếp', 'Tiếng Nhật', 'Tiếng Hoa', 'Luyện thi lớp 10', 'Luyện thi THPT', 'LMS', 'Lớp 1-1'];
  const showSuggest = (query) => {
    if (!query.trim()) { suggestBox.classList.add('hidden'); return; }
    const q = query.toLowerCase();
    const matches = SUGGESTIONS.filter((s) => s.toLowerCase().includes(q)).slice(0, 6);
    if (!matches.length) { suggestBox.classList.add('hidden'); return; }

    suggestBox.innerHTML = matches.map((s) => `
      <div class="bv-suggest-item" data-suggest="${s}">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
        <span>${s}</span>
      </div>
    `).join('');
    suggestBox.classList.remove('hidden');

    suggestBox.querySelectorAll('[data-suggest]').forEach((item) => {
      item.addEventListener('click', () => {
        searchInput.value = item.dataset.suggest;
        state.search = item.dataset.suggest;
        suggestBox.classList.add('hidden');
        applyFilter();
      });
    });
  };

  searchInput.addEventListener('input', (e) => {
    state.search = e.target.value;
    showSuggest(e.target.value);
    applyFilter();
  });
  searchInput.addEventListener('focus', () => {
    if (searchInput.value) showSuggest(searchInput.value);
  });
  document.addEventListener('click', (e) => {
    if (!e.target.closest('[data-search-wrapper]')) suggestBox.classList.add('hidden');
  });
  searchClear.addEventListener('click', () => {
    searchInput.value = '';
    state.search = '';
    suggestBox.classList.add('hidden');
    applyFilter();
    searchInput.focus();
  });

  // ===== Brand tabs =====
  brandTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      brandTabs.forEach((t) => t.classList.remove('is-active'));
      tab.classList.add('is-active');
      state.brand = tab.dataset.brand;
      applyFilter();
    });
  });

  // ===== Facets =====
  ageSelect.addEventListener('change', (e) => { state.age = e.target.value; applyFilter(); });
  modeSelect.addEventListener('change', (e) => { state.mode = e.target.value; applyFilter(); });
  goalSelect.addEventListener('change', (e) => { state.goal = e.target.value; applyFilter(); });

  // ===== Reset =====
  resetBtn.addEventListener('click', () => {
    state.search = '';
    state.brand = 'all';
    state.age = 'all';
    state.mode = 'all';
    state.goal = 'all';
    searchInput.value = '';
    searchClear.classList.add('hidden');
    brandTabs.forEach((t) => t.classList.toggle('is-active', t.dataset.brand === 'all'));
    ageSelect.value = 'all';
    modeSelect.value = 'all';
    goalSelect.value = 'all';
    suggestBox.classList.add('hidden');
    applyFilter();
  });

  // ===== Init =====
  applyFilter();

  // Expose flash function cho AI Quiz
  window.__flashCourse = (id) => {
    const card = grid.querySelector(`[data-course-id="${id}"]`);
    if (!card) return;
    // Reset filter để chắc chắn visible
    resetBtn.click();
    setTimeout(() => {
      const y = card.getBoundingClientRect().top + window.pageYOffset - 140;
      window.scrollTo({ top: y, behavior: 'smooth' });
      card.classList.add('is-flash');
      setTimeout(() => card.classList.remove('is-flash'), 1600);
    }, 100);
  };
}

/* =========================================================
   AI QUIZ MODAL
   ========================================================= */
function initAiQuizModal() {
  const backdrop = document.querySelector('[data-quiz-backdrop]');
  const panel = document.querySelector('[data-quiz-panel]');
  const trigger = document.querySelector('[data-ai-quiz-trigger]');
  const closeBtn = document.querySelector('[data-quiz-close]');
  const body = document.querySelector('[data-quiz-body]');
  const foot = document.querySelector('[data-quiz-foot]');
  const progressFill = document.querySelector('[data-quiz-progress]');
  const stepLabel = document.querySelector('[data-quiz-step]');
  if (!backdrop || !panel || !body) return;

  const state = { step: 1, age: null, goal: null, mode: null };

  const STEPS = {
    1: {
      question: 'Bạn (hoặc con) đang ở độ tuổi / cấp học nào?',
      options: [
        { value: 'tieu-hoc', label: 'Tiền tiểu học (5–6t)', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/></svg>` },
        { value: 'thcs', label: 'Khối THCS (Lớp 6–9)', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c0 1 2.5 3 6 3s6-2 6-3v-5"/></svg>` },
        { value: 'thpt', label: 'Khối THPT (Lớp 10–12)', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>` },
        { value: 'adult', label: 'Người lớn / Đi làm', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>` },
      ],
      stateKey: 'age',
    },
    2: {
      question: 'Mục tiêu học tập chính của bạn là gì?',
      options: [
        { value: 'luyen-thi', label: 'Luyện thi chuyển cấp / ĐH', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>` },
        { value: 'boi-duong', label: 'Bồi dưỡng điểm số', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>` },
        { value: 'giao-tiep', label: 'Giao tiếp phản xạ', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z"/></svg>` },
        { value: 'chung-chi', label: 'Chứng chỉ quốc tế', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 15 8l6 1-4.5 4.5L18 20l-6-3-6 3 1.5-6.5L3 9l6-1 3-6z"/></svg>` },
      ],
      stateKey: 'goal',
    },
    3: {
      question: 'Hình thức học bạn mong muốn?',
      options: [
        { value: 'campus', label: 'Campus trực tiếp', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M5 21V10l7-5 7 5v11"/><path d="M9 21v-6h6v6"/></svg>` },
        { value: 'online', label: 'Trực tuyến qua Schooli', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>` },
        { value: 'hybrid', label: 'Hỗn hợp (Blended)', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="3"/><circle cx="18" cy="18" r="3"/><path d="M6 9v6a3 3 0 0 0 3 3h6"/><path d="M18 15V9a3 3 0 0 0-3-3H9"/></svg>` },
      ],
      stateKey: 'mode',
    },
  };

  const renderStep = () => {
    const step = STEPS[state.step];
    progressFill.style.width = `${(state.step / 3) * 100}%`;
    stepLabel.textContent = state.step;

    body.innerHTML = `
      <div class="bv-quiz-question">${step.question}</div>
      <div class="bv-quiz-options">
        ${step.options.map((o) => `
          <button type="button" data-option="${o.value}" class="bv-quiz-option ${state[step.stateKey] === o.value ? 'is-selected' : ''}">
            ${o.icon}
            <span>${o.label}</span>
          </button>
        `).join('')}
      </div>
    `;

    body.querySelectorAll('[data-option]').forEach((btn) => {
      btn.addEventListener('click', () => {
        state[step.stateKey] = btn.dataset.option;
        body.querySelectorAll('[data-option]').forEach((b) => b.classList.remove('is-selected'));
        btn.classList.add('is-selected');
        updateFooter();
      });
    });

    updateFooter();
  };

  const updateFooter = () => {
    const step = STEPS[state.step];
    const canNext = !!state[step.stateKey];
    const isLast = state.step === 3;

    foot.innerHTML = `
      ${state.step > 1 ? `
        <button type="button" class="bv-modal-btn bv-modal-btn-ghost" data-quiz-prev>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg>
          Quay lại
        </button>
      ` : ''}
      <button type="button" class="bv-modal-btn bv-modal-btn-primary" data-quiz-next ${canNext ? '' : 'disabled'}>
        ${isLast ? 'Xem gợi ý' : 'Tiếp tục'}
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
      </button>
    `;

    const prev = foot.querySelector('[data-quiz-prev]');
    const next = foot.querySelector('[data-quiz-next]');
    if (prev) prev.addEventListener('click', () => { state.step--; renderStep(); });
    if (next) next.addEventListener('click', () => {
      if (state.step < 3) { state.step++; renderStep(); }
      else showResult();
    });
  };

  const showResult = () => {
    // Logic: match course theo age + goal + mode, ưu tiên age + goal
    const matches = COURSES_DATA.filter((c) =>
      (c.age === state.age || c.age === 'moi-lua-tuoi') &&
      (c.goal === state.goal || c.mode === state.mode)
    ).slice(0, 2);

    if (!matches.length) {
      body.innerHTML = `
        <div class="bv-quiz-result">
          <div class="bv-quiz-result-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          </div>
          <h4>Chưa tìm được khóa phù hợp</h4>
          <p>Vui lòng thử lại hoặc liên hệ tư vấn để được hỗ trợ chi tiết.</p>
        </div>
      `;
    } else {
      body.innerHTML = `
        <div class="bv-quiz-result">
          <div class="bv-quiz-result-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 15 8l6 1-4.5 4.5L18 20l-6-3-6 3 1.5-6.5L3 9l6-1 3-6z"/></svg>
          </div>
          <h4>AI gợi ý ${matches.length} khóa học phù hợp</h4>
          <p>Dựa trên phân tích độ tuổi, mục tiêu và hình thức học của bạn.</p>
          <div class="bv-quiz-result-courses">
            ${matches.map((c) => {
              const cfg = BRAND_CONFIG[c.brand];
              return `
                <div class="bv-quiz-result-course" data-goto-course="${c.id}">
                  <span class="dot" style="background:${cfg.color}"></span>
                  <div>
                    <div class="name">${c.title}</div>
                    <div class="brand">${cfg.label} · ${c.modeBadge}</div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;
      body.querySelectorAll('[data-goto-course]').forEach((el) => {
        el.addEventListener('click', () => {
          close();
          if (window.__flashCourse) window.__flashCourse(el.dataset.gotoCourse);
        });
      });
    }

    progressFill.style.width = '100%';
    stepLabel.textContent = '✓';
    foot.innerHTML = `
      <button type="button" class="bv-modal-btn bv-modal-btn-ghost" data-quiz-restart>
        Làm lại
      </button>
      <button type="button" class="bv-modal-btn bv-modal-btn-primary" data-quiz-close-result>
        Xong
      </button>
    `;
    foot.querySelector('[data-quiz-restart]').addEventListener('click', () => {
      state.step = 1; state.age = null; state.goal = null; state.mode = null;
      renderStep();
    });
    foot.querySelector('[data-quiz-close-result]').addEventListener('click', close);
  };

  const open = () => {
    state.step = 1; state.age = null; state.goal = null; state.mode = null;
    renderStep();
    backdrop.classList.add('is-open');
    panel.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  };
  const close = () => {
    backdrop.classList.remove('is-open');
    panel.classList.remove('is-open');
    document.body.style.overflow = '';
  };

  trigger?.addEventListener('click', open);
  closeBtn?.addEventListener('click', close);
  backdrop?.addEventListener('click', close);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
}








/* =========================================================
   NEWS PAGE
   ========================================================= */
function initNewsPage() {
  const grid = document.getElementById('news-grid');
  if (!grid || typeof NEWS_DATA === 'undefined') return;

  const brandCfg = NEWS_BRAND_CONFIG;
  const tabs = document.querySelectorAll('[data-category]');
  const featuredSection = document.getElementById('featured-section');
  const resultCount = document.getElementById('news-result-count');
  const empty = document.getElementById('news-empty');
  const trendingList = document.getElementById('news-trending');

  const state = { category: 'all', search: '' };

  // Icon cho từng brand
  const BRAND_ICON = {
    banviet: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M5 21V10l7-5 7 5v11"/><path d="M9 21v-6h6v6"/></svg>`,
    diem10: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c0 1 2.5 3 6 3s6-2 6-3v-5"/></svg>`,
    danhlingo: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z"/></svg>`,
    aitechco: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/></svg>`,
    schooli: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M5 21V10l7-5 7 5v11"/><path d="M9 21v-6h6v6"/></svg>`,
  };

  // ===== Render news card =====
  const renderCard = (p) => {
    const cfg = brandCfg[p.brand];
    return `
      <article class="bv-news-card" data-post-id="${p.id}" data-brand="${p.brand}" data-search="${(p.title + ' ' + p.excerpt).toLowerCase()}">
        <div class="bv-news-thumb">
          <!-- ẢNH THẬT: bỏ vào assets/images/news-${p.slug}.jpg -->
          <!-- <img src="${siteUrl(`assets/images/news-${p.slug}.jpg`)}" alt="${p.title}" class="w-full h-full object-cover" loading="lazy" /> -->
          <div class="bv-news-thumb-inner" style="background: linear-gradient(135deg, ${cfg.color}18 0%, ${cfg.color}30 100%); color: ${cfg.color}">
            <div class="bv-news-thumb-icon">${BRAND_ICON[p.brand]}</div>
          </div>
          <span class="bv-news-brand-tag" style="background: ${cfg.color}">${p.brandName}</span>
        </div>
        <div class="bv-news-body">
          <div class="bv-news-meta">
            <span>${p.date}</span>
            <span class="opacity-40">·</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            <span>${p.readTime}</span>
          </div>
          <h3 class="bv-news-title">${p.title}</h3>
          <p class="bv-news-excerpt">${p.excerpt}</p>
        </div>
        <div class="bv-news-footer">
          <a href="#" class="bv-news-readmore">
            Đọc tiếp
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </div>
      </article>
    `;
  };

  // Render initial
  grid.innerHTML = NEWS_DATA.posts.map(renderCard).join('');

  // Render trending
  if (trendingList) {
    trendingList.innerHTML = NEWS_DATA.trending.map((t) => {
      const cfg = brandCfg[t.brand];
      return `
        <a href="#" class="bv-trending-item">
          <div class="bv-trending-thumb" style="background: linear-gradient(135deg, ${cfg.color} 0%, ${cfg.color}dd 100%)">
            ${BRAND_ICON[t.brand].replace('width="24" height="24"', 'width="18" height="18"')}
          </div>
          <div class="min-w-0 flex-1">
            <div class="bv-trending-title">${t.title}</div>
            <div class="bv-trending-date">${t.date}</div>
          </div>
        </a>
      `;
    }).join('');
  }

  // ===== Filter =====
  const cards = Array.from(grid.querySelectorAll('.bv-news-card'));

  const applyFilter = () => {
    let visible = 0;
    const keyword = state.search.trim().toLowerCase();

    cards.forEach((card) => {
      const matchCat = state.category === 'all' || card.dataset.brand === state.category;
      const matchSearch = !keyword || card.dataset.search.includes(keyword);
      const show = matchCat && matchSearch;
      card.classList.toggle('is-hidden', !show);
      if (show) visible++;
    });

    resultCount.textContent = visible;
    empty.classList.toggle('hidden', visible > 0);
    grid.classList.toggle('hidden', visible === 0);

    // Ẩn featured khi filter
    const isFiltering = state.category !== 'all' || state.search;
    if (featuredSection) featuredSection.classList.toggle('hidden', isFiltering);

    // Update counts
    updateCounts();
  };

  const updateCounts = () => {
    const counts = { all: 0, banviet: 0, diem10: 0, danhlingo: 0, aitechco: 0 };
    cards.forEach((c) => {
      if (c.classList.contains('is-hidden') && state.category !== 'all') return;
      const brand = c.dataset.brand;
      // aitechco tab gộp cả schooli
      if (brand === 'schooli') counts.aitechco++;
      else counts[brand] = (counts[brand] || 0) + 1;
      counts.all++;
    });
    document.querySelectorAll('[data-count]').forEach((el) => {
      el.textContent = counts[el.dataset.count] || 0;
    });
  };

  // ===== Tabs =====
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('is-active'));
      tab.classList.add('is-active');
      state.category = tab.dataset.category;
      applyFilter();
    });
  });

  // ===== Search =====
  const searchInput = document.getElementById('news-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.search = e.target.value;
      applyFilter();
    });
  }

  // ===== Sidebar consult =====
  const consultForm = document.getElementById('sidebar-consult');
  consultForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const phone = consultForm.querySelector('[name="phone"]').value.trim();
    if (!phone || !/^[0-9+\s\-().]{8,}$/.test(phone)) {
      alert('Vui lòng nhập số điện thoại hợp lệ');
      return;
    }
    showToast('Cảm ơn bạn! Chuyên gia Bản Việt sẽ gọi lại trong 24h.');
    consultForm.reset();
  });

  // ===== Newsletter =====
  const newsletterForm = document.getElementById('newsletter-form');
  newsletterForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = newsletterForm.querySelector('[name="email"]').value.trim();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      alert('Vui lòng nhập email hợp lệ');
      return;
    }
    showToast(`Đã đăng ký! Kiểm tra hộp thư ${email} để xác nhận.`);
    newsletterForm.reset();
  });

  // Init
  applyFilter();
}