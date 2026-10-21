/* =========================================================
   BẢN VIỆT — Header interactions
   (scroll effect, dropdown, search modal, mobile drawer)
   Chạy SAU khi components.js define xong.
   ========================================================= */

(function initHeader() {
  // Chờ <bv-header> được render (custom element connectedCallback)
  const tryInit = () => {
    const header = document.getElementById('bvHeader');
    if (!header) {
      requestAnimationFrame(tryInit);
      return;
    }
    setupScrollEffect(header);
    setupDropdown();
    setupSearchModal();
    setupMobileDrawer();
  };
  tryInit();
})();

/* ---------- 1. Scroll effect ---------- */
function setupScrollEffect(header) {
  const onScroll = () => {
    if (window.scrollY > 8) header.classList.add('is-scrolled');
    else header.classList.remove('is-scrolled');
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

/* ---------- 2. Desktop dropdown ---------- */
function setupDropdown() {
  const wrapper = document.querySelector('[data-dropdown-wrapper]');
  if (!wrapper) return;

  const toggle = wrapper.querySelector('[data-dropdown-toggle]');
  const menu = wrapper.querySelector('[data-dropdown-menu]');
  const chevron = wrapper.querySelector('[data-chevron]');
  let closeTimer = null;

  const open = () => {
    clearTimeout(closeTimer);
    menu.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    if (chevron) chevron.style.transform = 'rotate(180deg)';
  };
  const close = () => {
    menu.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    if (chevron) chevron.style.transform = 'rotate(0deg)';
  };

  // Hover mở/đóng (có delay nhỏ để tránh giật)
  wrapper.addEventListener('mouseenter', open);
  wrapper.addEventListener('mouseleave', () => {
    closeTimer = setTimeout(close, 120);
  });

  // Click toggle (cho touch / keyboard)
  toggle.addEventListener('click', (e) => {
    e.preventDefault();
    const isOpen = menu.classList.contains('is-open');
    isOpen ? close() : open();
  });

  // Đóng khi click ra ngoài
  document.addEventListener('click', (e) => {
    if (!wrapper.contains(e.target)) close();
  });

  // Đóng bằng ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });
}

/* ---------- 3. Search spotlight modal ---------- */
function setupSearchModal() {
  const backdrop = document.querySelector('[data-search-backdrop]');
  const panel = document.querySelector('[data-search-panel]');
  const input = document.querySelector('[data-search-input]');
  const openers = document.querySelectorAll('[data-search-open]');
  if (!backdrop || !panel) return;

  const open = () => {
    backdrop.classList.add('is-open');
    panel.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    setTimeout(() => input && input.focus(), 120);
  };
  const close = () => {
    backdrop.classList.remove('is-open');
    panel.classList.remove('is-open');
    document.body.style.overflow = '';
  };

  openers.forEach((btn) => btn.addEventListener('click', open));
  backdrop.addEventListener('click', close);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });
}

/* ---------- 4. Mobile drawer + accordion ---------- */
function setupMobileDrawer() {
  const backdrop = document.querySelector('[data-drawer-backdrop]');
  const drawer = document.querySelector('[data-drawer]');
  const openBtn = document.querySelector('[data-drawer-open]');
  const closeBtn = document.querySelector('[data-drawer-close]');
  if (!drawer) return;

  const open = () => {
    backdrop.classList.add('is-open');
    drawer.classList.add('is-open');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };
  const close = () => {
    backdrop.classList.remove('is-open');
    drawer.classList.remove('is-open');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  openBtn && openBtn.addEventListener('click', open);
  closeBtn && closeBtn.addEventListener('click', close);
  backdrop && backdrop.addEventListener('click', close);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });

  // Accordion trong drawer
  const accToggle = drawer.querySelector('[data-accordion-toggle]');
  const accContent = drawer.querySelector('[data-accordion-content]');
  const accChevron = drawer.querySelector('[data-accordion-chevron]');
  if (accToggle && accContent) {
    accToggle.addEventListener('click', () => {
      const isOpen = accContent.classList.contains('is-open');
      accContent.classList.toggle('is-open', !isOpen);
      if (accChevron) accChevron.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
    });
  }
}