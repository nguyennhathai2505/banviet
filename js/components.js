/* =========================================================
   BẢN VIỆT — Web Components (Header mới + Footer placeholder)
   ========================================================= */

const SITE_ROOT_URL = new URL('../', document.currentScript.src);

function siteUrl(path) {
  return new URL(path, SITE_ROOT_URL).href;
}

function siteHref(href) {
  if (!href.startsWith('#')) return siteUrl(href);
  return document.getElementById(href.slice(1)) ? href : `${siteUrl('index.html')}${href}`;
}

/* ---------- SVG Icons (inline, viết tay) ---------- */
const ICONS = {
  search: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>`,

  phone: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,

  chevron: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>`,

  menu: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="18" y2="18"/></svg>`,

  close: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,

  arrowRight: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`,

  gradCap: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c0 1 2.5 3 6 3s6-2 6-3v-5"/><path d="M22 10v6"/></svg>`,

  chatLang: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z"/><path d="M8 10h.01"/><path d="M12 10h.01"/><path d="M16 10h.01"/></svg>`,

  codeChip: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v2"/><path d="M15 2v2"/><path d="M9 20v2"/><path d="M15 20v2"/><path d="M2 9h2"/><path d="M2 15h2"/><path d="M20 9h2"/><path d="M20 15h2"/></svg>`,

  school: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M5 21V10l7-5 7 5v11"/><path d="M9 21v-6h6v6"/><path d="M12 2v3"/></svg>`,
};

/* ---------- NAV & ECOSYSTEM DATA ---------- */
const NAV_ITEMS = [
  { label: 'Trang chủ', href: 'index.html' },
  { label: 'Hệ sinh thái', href: 'pages/ecosystem.html', dropdown: true },
  { label: 'Khóa học', href: 'pages/courses.html' },
  { label: 'Về chúng tôi', href: 'pages/about.html' },
  { label: 'Tin tức', href: 'pages/news.html' },
];

const ECOSYSTEM = [
  { iconKey: 'gradCap', name: 'Điểm 10+', desc: 'Smart Culture & K12', href: '#diem10' },
  { iconKey: 'chatLang', name: 'DanhLingo', desc: 'Rapid Language Engine', href: '#danhlingo' },
  { iconKey: 'codeChip', name: 'Aitechco', desc: 'EdTech Core & Infrastructure', href: '#aitechco' },
  { iconKey: 'school', name: 'Schooli', desc: 'Virtual Campus 24/7', href: '#schooli' },
];

function renderMegaCards() {
  return ECOSYSTEM.map(
    (u) => `
    <a href="${siteHref(u.href)}" class="bv-mega-card">
      <div class="flex-shrink-0 w-9 h-9 rounded-lg bg-gradient-to-br from-electric/10 to-cyanAccent/10 border border-electric/15 flex items-center justify-center text-electric">
        ${ICONS[u.iconKey]}
      </div>
      <div class="min-w-0">
        <div class="font-bold text-navy text-sm">${u.name}</div>
        <div class="text-[11px] text-navy/50 mt-0.5 leading-snug">${u.desc}</div>
      </div>
    </a>
  `).join('');
}

/* =========================================================
   <bv-header>
   ========================================================= */
class BvHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="bv-header" id="bvHeader">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-[72px] gap-3">

            <!-- BRAND -->
            <a href="${siteUrl('index.html')}" class="flex items-center gap-2.5 flex-shrink-0 group">
              <img src="${siteUrl('assets/images/logo-banviet.png')}" alt="Bản Việt" class="h-12 w-auto"
                   onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />
              <div class="hidden flex-col leading-none" style="display:none;">
                <span class="font-extrabold text-base text-navy tracking-tight">BẢN VIỆT</span>
                <span class="text-[9px] uppercase tracking-[0.2em] text-navy/40 font-bold mt-0.5">Ecosystem</span>
              </div>
              <!-- Pill EdTech Ecosystem -->
              <span class="hidden sm:inline-flex items-center gap-1.5 px-2 py-1 rounded-md
                           bg-electric/[0.06] border border-electric/20">
                <span class="w-1.5 h-1.5 rounded-full bg-electric animate-pulse shadow-glow-blue"></span>
                <span class="font-mono text-[10px] font-bold tracking-widest text-electric uppercase">EdTech</span>
              </span>
            </a>

            <!-- NAV desktop -->
            <nav class="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
              ${NAV_ITEMS.map((item) => {
                if (item.dropdown) {
                  return `
                    <div class="relative" data-dropdown-wrapper>
                      <button type="button" class="bv-nav-link" data-dropdown-toggle aria-expanded="false" aria-haspopup="true">
                        ${item.label}
                        <span class="transition-transform" data-chevron>${ICONS.chevron}</span>
                      </button>
                      <div class="bv-dropdown" data-dropdown-menu>
                        <div class="bg-white rounded-2xl border border-navy/[0.08] shadow-[0_20px_50px_-12px_rgba(15,35,58,0.18)] p-2.5">
                          <div class="grid grid-cols-1 gap-1">
                            ${renderMegaCards()}
                          </div>
                          <div class="mt-2 pt-2 border-t border-navy/[0.06] px-2 pb-1">
                            <a href="${siteUrl('pages/ecosystem.html')}" class="text-xs font-bold text-electric hover:text-electric-600 inline-flex items-center gap-1">
                              Xem tất cả hệ sinh thái ${ICONS.arrowRight}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  `;
                }
                return `<a href="${siteHref(item.href)}" class="bv-nav-link">${item.label}</a>`;
              }).join('')}
            </nav>

            <!-- ACTIONS desktop -->
            <div class="hidden lg:flex items-center gap-2 flex-shrink-0">
              <button type="button" aria-label="Tìm kiếm" data-search-open
                class="w-9 h-9 rounded-lg flex items-center justify-center text-navy/60 hover:bg-navy/[0.04] hover:text-electric transition-colors">
                ${ICONS.search}
              </button>
              <a href="${siteHref('#tra-cuu')}" class="hidden xl:inline-flex items-center px-4 h-9 rounded-lg
                  text-sm font-semibold text-navy border border-navy/15
                  hover:border-electric hover:text-electric transition-colors">
                Tra cứu lộ trình học
              </a>
              <a href="${siteHref('#dang-ky-tu-van')}" class="inline-flex items-center px-4 h-9 rounded-lg
                  text-sm font-semibold text-white
                  bg-gradient-to-r from-navy via-navy-800 to-electric
                  hover:shadow-glow-blue hover:-translate-y-0.5 transition-all">
                Đăng ký tư vấn
              </a>
            </div>

            <!-- MOBILE actions -->
            <div class="flex lg:hidden items-center gap-1">
              <button type="button" aria-label="Tìm kiếm" data-search-open
                class="w-9 h-9 rounded-lg flex items-center justify-center text-navy/70 hover:bg-navy/[0.04] transition-colors">
                ${ICONS.search}
              </button>
              <button type="button" aria-label="Mở menu" data-drawer-open
                class="w-9 h-9 rounded-lg flex items-center justify-center text-navy hover:bg-navy/[0.04] transition-colors">
                ${ICONS.menu}
              </button>
            </div>

          </div>
        </div>
      </header>

      <!-- MOBILE DRAWER -->
      <div class="bv-drawer-backdrop" data-drawer-backdrop></div>
      <aside class="bv-drawer" data-drawer aria-hidden="true">
        <div class="flex items-center justify-between px-5 h-[72px] border-b border-slate-100">
          <span class="font-extrabold text-base text-navy">BẢN VIỆT</span>
          <button type="button" aria-label="Đóng menu" data-drawer-close
            class="w-9 h-9 rounded-lg flex items-center justify-center text-navy/70 hover:bg-slate-100 transition-colors">
            ${ICONS.close}
          </button>
        </div>
        <nav class="px-3 py-4">
          ${NAV_ITEMS.map((item) => {
            if (item.dropdown) {
              return `
                <div class="mb-1">
                  <button type="button" data-accordion-toggle
                    class="w-full flex items-center justify-between px-3 py-3 rounded-lg text-navy font-semibold hover:bg-slate-50 transition-colors">
                    <span>${item.label}</span>
                    <span class="transition-transform text-navy/40" data-accordion-chevron>${ICONS.chevron}</span>
                  </button>
                  <div class="bv-accordion-content" data-accordion-content>
                    <div class="pl-2 pr-2 pt-1 pb-2 space-y-1">
                      ${ECOSYSTEM.map(
                        (u) => `
                        <a href="${siteHref(u.href)}" class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors">
                          <span class="w-8 h-8 rounded-lg bg-gradient-to-br from-electric/10 to-cyanAccent/10 border border-electric/15 flex items-center justify-center text-electric flex-shrink-0">${ICONS[u.iconKey]}</span>
                          <div class="min-w-0">
                            <div class="font-bold text-navy text-sm">${u.name}</div>
                            <div class="text-[11px] text-navy/50 truncate">${u.desc}</div>
                          </div>
                        </a>`
                      ).join('')}
                    </div>
                  </div>
                </div>
              `;
            }
            return `<a href="${siteHref(item.href)}" class="block px-3 py-3 rounded-lg text-navy font-semibold hover:bg-slate-50 transition-colors">${item.label}</a>`;
          }).join('')}
        </nav>
        <div class="px-5 pt-2 pb-6 mt-auto border-t border-slate-100 space-y-2">
          <a href="${siteHref('#tra-cuu')}" class="flex items-center justify-center h-11 rounded-xl font-semibold text-sm text-navy border border-navy/15 hover:bg-slate-50">
            Tra cứu lộ trình học
          </a>
          <a href="${siteHref('#dang-ky-tu-van')}" class="flex items-center justify-center h-11 rounded-xl text-white text-sm font-semibold bg-gradient-to-r from-navy via-navy-800 to-electric">
            Đăng ký tư vấn
          </a>
        </div>
      </aside>

      <!-- SEARCH SPOTLIGHT -->
      <div class="bv-search-backdrop" data-search-backdrop></div>
      <div class="bv-search-panel" data-search-panel role="dialog" aria-modal="true" aria-label="Tìm kiếm">
        <div class="bg-white rounded-2xl shadow-[0_30px_80px_-20px_rgba(10,25,47,0.4)] border border-navy/[0.08] overflow-hidden">
          <div class="flex items-center gap-3 px-5 py-4 border-b border-navy/[0.06]">
            <span class="text-navy/40">${ICONS.search}</span>
            <input type="text" placeholder="Tìm kiếm khóa học, thương hiệu, tài liệu..." data-search-input
              class="flex-1 bg-transparent outline-none text-navy placeholder:text-navy/40 text-[15px]" />
            <kbd class="hidden sm:inline-block px-2 py-1 text-[10px] font-mono font-bold text-navy/40 bg-navy/[0.04] rounded">ESC</kbd>
          </div>
          <div class="px-5 py-6 text-center text-sm text-navy/40">Nhập từ khóa để bắt đầu</div>
        </div>
      </div>
    `;
  }
}

/* =========================================================
   <bv-footer> — PLACEHOLDER (Message 3 sẽ code đầy đủ)
   ========================================================= */
/* =========================================================
   <bv-footer> — 3 tầng đầy đủ
   ========================================================= */
class BvFooter extends HTMLElement {
  connectedCallback() {
    const campuses = [
      'Quận 1', 'Quận 3', 'Quận 7', 'Bình Thạnh',
      'Tân Bình', 'Thủ Đức', 'Gò Vấp', 'Nhà Bè'
    ];

    this.innerHTML = `
      <footer class="bg-navy text-white">

        <!-- ========== TẦNG 1: Network Status ========== -->
        <div class="border-b border-white/[0.06]">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">

            <div class="flex items-center justify-between gap-4 mb-8">
              <div>
                <div class="font-mono text-[11px] font-bold tracking-[0.15em] text-cyanAccent uppercase">Network Status</div>
                <h3 class="mt-1 text-xl sm:text-2xl font-extrabold text-white">Mạng lưới 8 Campus TP.HCM &amp; Toàn cầu</h3>
              </div>
              <div class="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.9)]"></span>
                <span class="font-mono text-[10px] font-bold tracking-wider text-emerald-400 uppercase">All Systems Online</span>
              </div>
            </div>

            <!-- Campus list -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-8">
              ${campuses.map((name) => `
                <div class="bv-campus-pin">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" class="text-cyanAccent flex-shrink-0"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                  <span class="text-sm font-semibold">${name}</span>
                </div>
              `).join('')}
            </div>

            <!-- Online status -->
            <div class="flex flex-wrap items-center gap-4 pt-6 border-t border-white/[0.06]">
              <div class="flex items-center gap-2 text-sm">
                <span class="w-2 h-2 rounded-full bg-cyanAccent animate-pulse"></span>
                <span class="text-white/70">Schooli Online —</span>
                <span class="font-bold text-cyanAccent">Sẵn sàng phục vụ 24/7 toàn cầu</span>
              </div>
              <div class="text-xs text-white/40 font-mono">UPTIME 99.9%</div>
            </div>

          </div>
        </div>

        <!-- ========== TẦNG 2: Directory ========== -->
        <div class="border-b border-white/[0.06]">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

              <!-- Brand -->
              <div class="lg:col-span-1">
                <a href="${siteUrl('index.html')}" class="inline-flex items-center gap-2.5 mb-4">
                  <img src="${siteUrl('assets/images/logo-banviet.png')}" alt="Bản Việt" class="h-10 w-auto brightness-0 invert"
                       onerror="this.style.display='none';this.nextElementSibling.style.display='block';" />
                  <span class="hidden font-extrabold text-lg text-white" style="display:none;">BẢN VIỆT</span>
                </a>
                <p class="text-sm text-white/55 leading-relaxed mb-4">
                  Hệ sinh thái EdTech &amp; AI hàng đầu Việt Nam từ 2010, kết nối tri thức và công nghệ vì thế hệ tương lai.
                </p>
                <div class="flex items-center gap-2 mt-4">
                  <a href="tel:0933398787" class="inline-flex items-center gap-2 text-sm text-white/70 hover:text-cyanAccent transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    0933 39 8787
                  </a>
                </div>
              </div>

              <!-- Cột 1 -->
              <div>
                <h4 class="font-bold text-white text-sm mb-4">Về Bản Việt</h4>
                <ul class="space-y-2.5 text-sm">
                  <li><a href="${siteHref('#ve-chung-toi')}" class="text-white/55 hover:text-cyanAccent transition-colors">Giới thiệu</a></li>
                  <li><a href="${siteHref('#loi-the')}" class="text-white/55 hover:text-cyanAccent transition-colors">Tầm nhìn &amp; Sứ mệnh</a></li>
                  <li><a href="${siteHref('#stats')}" class="text-white/55 hover:text-cyanAccent transition-colors">Cột mốc phát triển</a></li>
                  <li><a href="${siteHref('#tin-tuc')}" class="text-white/55 hover:text-cyanAccent transition-colors">Tin tức &amp; Sự kiện</a></li>
                </ul>
              </div>

              <!-- Cột 2 -->
              <div>
                <h4 class="font-bold text-white text-sm mb-4">Khóa học K12</h4>
                <ul class="space-y-2.5 text-sm">
                  <li><a href="${siteHref('#diem10')}" class="text-white/55 hover:text-cyanAccent transition-colors">Luyện thi THPT</a></li>
                  <li><a href="${siteHref('#diem10')}" class="text-white/55 hover:text-cyanAccent transition-colors">Toán — Lý — Hóa</a></li>
                  <li><a href="${siteHref('#diem10')}" class="text-white/55 hover:text-cyanAccent transition-colors">Văn — Anh</a></li>
                  <li><a href="${siteHref('#diem10')}" class="text-white/55 hover:text-cyanAccent transition-colors">Cambridge K12</a></li>
                </ul>
              </div>

              <!-- Cột 3 -->
              <div>
                <h4 class="font-bold text-white text-sm mb-4">Ngoại ngữ</h4>
                <ul class="space-y-2.5 text-sm">
                  <li><a href="${siteHref('#danhlingo')}" class="text-white/55 hover:text-cyanAccent transition-colors">Tiếng Anh giao tiếp</a></li>
                  <li><a href="${siteHref('#danhlingo')}" class="text-white/55 hover:text-cyanAccent transition-colors">IELTS / TOEIC</a></li>
                  <li><a href="${siteHref('#danhlingo')}" class="text-white/55 hover:text-cyanAccent transition-colors">Tiếng Nhật — Hàn</a></li>
                  <li><a href="${siteHref('#danhlingo')}" class="text-white/55 hover:text-cyanAccent transition-colors">Luyện phản xạ AI</a></li>
                </ul>
              </div>

              <!-- Cột 4 -->
              <div>
                <h4 class="font-bold text-white text-sm mb-4">Nền tảng số</h4>
                <ul class="space-y-2.5 text-sm">
                  <li><a href="${siteHref('#schooli')}" class="text-white/55 hover:text-cyanAccent transition-colors">Schooli Online</a></li>
                  <li><a href="${siteHref('#aitechco')}" class="text-white/55 hover:text-cyanAccent transition-colors">LMS cho nhà trường</a></li>
                  <li><a href="${siteHref('#aitechco')}" class="text-white/55 hover:text-cyanAccent transition-colors">Giải pháp AI</a></li>
                  <li><a href="${siteHref('#dang-ky-tu-van')}" class="text-white/55 hover:text-cyanAccent transition-colors">Đăng ký tư vấn</a></li>
                </ul>
              </div>

            </div>
          </div>
        </div>

        <!-- ========== TẦNG 3: Legal & Tech Stack ========== -->
        <div>
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div class="flex flex-col lg:flex-row items-center justify-between gap-6">

              <!-- Subdomains -->
              <div class="flex flex-wrap items-center gap-2 justify-center lg:justify-start">
                ${[
                  { name: 'diem10cong.edu.vn', href: 'https://diem10cong.edu.vn' },
                  { name: 'danhlingo.edu.vn', href: 'https://danhlingo.edu.vn' },
                  { name: 'aitechco.vn', href: 'https://aitechco.vn' },
                  { name: 'schooli.edu.vn', href: 'https://schooli.edu.vn' },
                ].map((s) => `
                  <a href="${s.href}" target="_blank" rel="noopener noreferrer"
                    class="bv-subdomain-link">
                    <span>${s.name}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>
                  </a>
                `).join('')}
              </div>

              <!-- Copyright + legal -->
              <div class="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-white/40">
                <span>© 2026 Bản Việt. All rights reserved.</span>
                <span class="hidden sm:inline">·</span>
                <a href="#" class="hover:text-white/70 transition-colors">Chính sách bảo mật</a>
                <span class="hidden sm:inline">·</span>
                <a href="#" class="hover:text-white/70 transition-colors">Điều khoản</a>
              </div>

            </div>
          </div>
        </div>

      </footer>
    `;
  }
}

customElements.define('bv-header', BvHeader);
customElements.define('bv-footer', BvFooter);