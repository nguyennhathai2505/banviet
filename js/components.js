/* =========================================================
   BẢN VIỆT — Web Components (Header & Footer)
   Dùng Light DOM để Tailwind CDN áp style trực tiếp.
   TẤT CẢ ICON ĐỀU LÀ INLINE SVG VIẾT TAY.
   ========================================================= */

/* ---------- SVG Icons (inline, tự vẽ) ---------- */
const ICONS = {
  search: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>`,

  phone: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,

  chevron: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>`,

  menu: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="18" y2="18"/></svg>`,

  close: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,

  mail: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg>`,

  pin: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,

  arrowRight: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`,

  /* ---------- Icon 4 đơn vị (vẽ tay) ---------- */

  // Điểm 10+: mũ tốt nghiệp
  gradCap: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c0 1 2.5 3 6 3s6-2 6-3v-5"/><path d="M22 10v6"/></svg>`,

  // DanhLingo: bong bóng hội thoại + chữ
  chatLang: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z"/><path d="M8 10h.01"/><path d="M12 10h.01"/><path d="M16 10h.01"/></svg>`,

  // Aitechco: chip / code
  codeChip: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v2"/><path d="M15 2v2"/><path d="M9 20v2"/><path d="M15 20v2"/><path d="M2 9h2"/><path d="M2 15h2"/><path d="M20 9h2"/><path d="M20 15h2"/></svg>`,

  // Schooli: toà nhà trường học
  school: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M5 21V10l7-5 7 5v11"/><path d="M9 21v-6h6v6"/><path d="M12 2v3"/></svg>`,
};

/* ---------- DATA: Nav & Lĩnh vực ---------- */
const NAV_ITEMS = [
  { label: 'Về Bản Việt', href: './index.html#ve-ban-viet' },
  { label: 'Lĩnh vực hoạt động', href: '#', dropdown: true },
  { label: 'Tin tức & Sự kiện', href: './index.html#tin-tuc' },
  { label: 'Tuyển dụng', href: './index.html#tuyen-dung' },
  { label: 'Liên hệ', href: './index.html#lien-he' },
];

const BUSINESS_UNITS = [
  {
    iconKey: 'gradCap',
    name: 'Điểm 10+',
    desc: 'Nền tảng học tập & luyện thi thông minh',
    href: '#diem10',
  },
  {
    iconKey: 'chatLang',
    name: 'DanhLingo',
    desc: 'Giải pháp học ngoại ngữ hiện đại',
    href: '#danhlingo',
  },
  {
    iconKey: 'codeChip',
    name: 'Aitechco',
    desc: 'Công nghệ & chuyển đổi số toàn diện',
    href: '#aitechco',
  },
  {
    iconKey: 'school',
    name: 'Schooli',
    desc: 'Quản lý trường học thông minh',
    href: '#schooli',
  },
];

/* ---------- HELPER: Render mega cards (desktop dropdown) ---------- */
function renderMegaCards() {
  return BUSINESS_UNITS.map(
    (u) => `
      <a href="${u.href}" class="bv-mega-card">
        <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center text-blue-600">
          ${ICONS[u.iconKey]}
        </div>
        <div class="min-w-0">
          <div class="font-semibold text-slate-900 text-sm">${u.name}</div>
          <div class="text-xs text-slate-500 mt-0.5 leading-snug">${u.desc}</div>
        </div>
      </a>
    `
  ).join('');
}

/* =========================================================
   <bv-header>
   ========================================================= */
class BvHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="bv-header" id="bvHeader">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-[76px] gap-4">

            <!-- ========== BRAND ========== -->
            <a href="./index.html" class="flex items-center gap-3 flex-shrink-0 group">
              <img src="./assets/images/logo.svg" alt="Bản Việt" class="h-11 w-auto" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />
              <div class="hidden flex-col leading-tight" style="display:none;">
                <span class="font-extrabold text-lg text-slate-900 tracking-tight">BẢN VIỆT</span>
                <span class="text-[10px] uppercase tracking-widest text-slate-400 font-semibold">Education &amp; Technology</span>
              </div>
              <div class="hidden sm:flex flex-col leading-tight">
                <span class="text-[10px] uppercase tracking-widest text-slate-400 font-semibold">Education &amp; Technology</span>
              </div>
            </a>

            <!-- ========== NAV (desktop) ========== -->
            <nav class="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              ${NAV_ITEMS.map((item) => {
                if (item.dropdown) {
                  return `
                    <div class="relative" data-dropdown-wrapper>
                      <button type="button" class="bv-nav-link" data-dropdown-toggle aria-expanded="false" aria-haspopup="true">
                        ${item.label}
                        <span class="transition-transform" data-chevron>${ICONS.chevron}</span>
                      </button>
                      <div class="bv-dropdown" data-dropdown-menu>
                        <div class="bg-white rounded-2xl border border-slate-100 shadow-xl shadow-slate-900/5 p-3">
                          <div class="grid grid-cols-2 gap-1">
                            ${renderMegaCards()}
                          </div>
                          <div class="mt-2 pt-2 border-t border-slate-100 px-2 pb-1">
                            <a href="#" class="text-xs font-semibold text-blue-600 hover:text-indigo-600 inline-flex items-center gap-1">
                              Xem tất cả lĩnh vực
                              ${ICONS.arrowRight}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  `;
                }
                return `<a href="${item.href}" class="bv-nav-link">${item.label}</a>`;
              }).join('')}
            </nav>

            <!-- ========== QUICK ACTIONS (desktop) ========== -->
            <div class="hidden lg:flex items-center gap-2 flex-shrink-0">
              <!-- Search -->
              <button type="button" aria-label="Tìm kiếm" data-search-open
                class="w-10 h-10 rounded-full flex items-center justify-center text-slate-600 hover:bg-slate-100 transition-colors">
                ${ICONS.search}
              </button>

              <!-- Hotline -->
              <a href="tel:0933398787"
                class="hidden xl:flex items-center gap-2 px-3 h-10 rounded-full text-slate-600 hover:bg-slate-100 transition-colors">
                ${ICONS.phone}
                <span class="text-sm font-semibold whitespace-nowrap">0933 39 8787</span>
              </a>

              <!-- CTA -->
              <a href="./index.html#lien-he"
                class="inline-flex items-center justify-center px-5 h-10 rounded-full text-white text-sm font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-[1.03] transition-all whitespace-nowrap">
                Liên hệ hợp tác
              </a>
            </div>

            <!-- ========== MOBILE: search + hamburger ========== -->
            <div class="flex lg:hidden items-center gap-1">
              <button type="button" aria-label="Tìm kiếm" data-search-open
                class="w-10 h-10 rounded-full flex items-center justify-center text-slate-600 hover:bg-slate-100 transition-colors">
                ${ICONS.search}
              </button>
              <button type="button" aria-label="Mở menu" data-drawer-open
                class="w-10 h-10 rounded-full flex items-center justify-center text-slate-700 hover:bg-slate-100 transition-colors">
                ${ICONS.menu}
              </button>
            </div>

          </div>
        </div>
      </header>

      <!-- ========== MOBILE DRAWER ========== -->
      <div class="bv-drawer-backdrop" data-drawer-backdrop></div>
      <aside class="bv-drawer" data-drawer aria-hidden="true">
        <div class="flex items-center justify-between px-5 h-[76px] border-b border-slate-100">
          <span class="font-extrabold text-slate-900">BẢN VIỆT</span>
          <button type="button" aria-label="Đóng menu" data-drawer-close
            class="w-10 h-10 rounded-full flex items-center justify-center text-slate-600 hover:bg-slate-100 transition-colors">
            ${ICONS.close}
          </button>
        </div>

        <nav class="px-3 py-4">
          ${NAV_ITEMS.map((item) => {
            if (item.dropdown) {
              return `
                <div class="mb-1">
                  <button type="button" data-accordion-toggle
                    class="w-full flex items-center justify-between px-3 py-3 rounded-lg text-slate-800 font-medium hover:bg-slate-50 transition-colors">
                    <span>${item.label}</span>
                    <span class="transition-transform" data-accordion-chevron>${ICONS.chevron}</span>
                  </button>
                  <div class="bv-accordion-content" data-accordion-content>
                    <div class="pl-2 pr-2 pt-1 pb-2 space-y-1">
                      ${BUSINESS_UNITS.map(
                        (u) => `
                        <a href="${u.href}" class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors">
                          <span class="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center text-blue-600 flex-shrink-0">${ICONS[u.iconKey]}</span>
                          <div class="min-w-0">
                            <div class="font-semibold text-slate-800 text-sm">${u.name}</div>
                            <div class="text-xs text-slate-500 truncate">${u.desc}</div>
                          </div>
                        </a>
                      `
                      ).join('')}
                    </div>
                  </div>
                </div>
              `;
            }
            return `<a href="${item.href}" class="block px-3 py-3 rounded-lg text-slate-800 font-medium hover:bg-slate-50 transition-colors">${item.label}</a>`;
          }).join('')}
        </nav>

        <div class="px-5 pt-2 pb-6 mt-auto border-t border-slate-100">
          <a href="tel:0933398787" class="flex items-center gap-2 py-3 text-slate-700 font-semibold">
            ${ICONS.phone} <span>0933 39 8787</span>
          </a>
          <a href="./index.html#lien-he"
            class="mt-2 flex items-center justify-center w-full h-11 rounded-full text-white text-sm font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:shadow-lg transition-all">
            Liên hệ hợp tác
          </a>
        </div>
      </aside>

      <!-- ========== SEARCH SPOTLIGHT MODAL ========== -->
      <div class="bv-search-backdrop" data-search-backdrop></div>
      <div class="bv-search-panel" data-search-panel role="dialog" aria-modal="true" aria-label="Tìm kiếm">
        <div class="bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
          <div class="flex items-center gap-3 px-5 py-4 border-b border-slate-100">
            <span class="text-slate-400">${ICONS.search}</span>
            <input type="text" placeholder="Tìm kiếm lĩnh vực, tin tức, dịch vụ..." data-search-input
              class="flex-1 bg-transparent outline-none text-slate-800 placeholder:text-slate-400 text-[15px]" />
            <kbd class="hidden sm:inline-block px-2 py-1 text-[10px] font-semibold text-slate-400 bg-slate-100 rounded">ESC</kbd>
          </div>
          <div class="px-5 py-6 text-center text-sm text-slate-400">
            Nhập từ khóa để bắt đầu tìm kiếm
          </div>
        </div>
      </div>
    `;
  }
}

/* =========================================================
   <bv-footer>
   ========================================================= */
class BvFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="bg-white border-t border-slate-100 mt-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

            <!-- Brand -->
            <div class="lg:col-span-1">
              <a href="./index.html" class="inline-flex items-center gap-2 mb-4">
                <img src="./assets/images/logo.svg" alt="Bản Việt" class="h-10 w-auto" onerror="this.style.display='none';this.nextElementSibling.style.display='block';" />
                <span class="hidden font-extrabold text-lg text-slate-900" style="display:none;">BẢN VIỆT</span>
              </a>
              <p class="text-sm text-slate-500 leading-relaxed">
                Hệ sinh thái giáo dục &amp; công nghệ, kết nối tri thức và đổi mới sáng tạo vì thế hệ Việt Nam.
              </p>
            </div>

            <!-- Liên kết -->
            <div>
              <h4 class="font-bold text-slate-900 text-sm mb-4 uppercase tracking-wide">Liên kết</h4>
              <ul class="space-y-2.5 text-sm">
                <li><a href="#" class="text-slate-600 hover:text-blue-600 transition-colors">Về Bản Việt</a></li>
                <li><a href="#" class="text-slate-600 hover:text-blue-600 transition-colors">Lĩnh vực hoạt động</a></li>
                <li><a href="#" class="text-slate-600 hover:text-blue-600 transition-colors">Tin tức &amp; Sự kiện</a></li>
                <li><a href="#" class="text-slate-600 hover:text-blue-600 transition-colors">Tuyển dụng</a></li>
              </ul>
            </div>

            <!-- Đơn vị -->
            <div>
              <h4 class="font-bold text-slate-900 text-sm mb-4 uppercase tracking-wide">Đơn vị</h4>
              <ul class="space-y-2.5 text-sm">
                <li><a href="#" class="text-slate-600 hover:text-blue-600 transition-colors">Điểm 10+</a></li>
                <li><a href="#" class="text-slate-600 hover:text-blue-600 transition-colors">DanhLingo</a></li>
                <li><a href="#" class="text-slate-600 hover:text-blue-600 transition-colors">Aitechco</a></li>
                <li><a href="#" class="text-slate-600 hover:text-blue-600 transition-colors">Schooli</a></li>
              </ul>
            </div>

            <!-- Liên hệ -->
            <div>
              <h4 class="font-bold text-slate-900 text-sm mb-4 uppercase tracking-wide">Liên hệ</h4>
              <ul class="space-y-3 text-sm">
                <li class="flex items-center gap-2 text-slate-600">
                  <span class="text-slate-400 flex-shrink-0">${ICONS.phone}</span>
                  <a href="tel:0933398787" class="hover:text-blue-600 transition-colors font-semibold">0933 39 8787</a>
                </li>
                <li class="flex items-center gap-2 text-slate-600">
                  <span class="text-slate-400 flex-shrink-0">${ICONS.mail}</span>
                  <a href="mailto:info@banviet.vn" class="hover:text-blue-600 transition-colors">info@banviet.vn</a>
                </li>
                <li class="flex items-center gap-2 text-slate-600">
                  <span class="text-slate-400 flex-shrink-0">${ICONS.pin}</span>
                  <span>Việt Nam</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="border-t border-slate-100">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p class="text-xs text-slate-500">© 2026 Bản Việt. All rights reserved.</p>
            <div class="flex items-center gap-4 text-xs text-slate-500">
              <a href="#" class="hover:text-blue-600 transition-colors">Chính sách bảo mật</a>
              <a href="#" class="hover:text-blue-600 transition-colors">Điều khoản</a>
            </div>
          </div>
        </div>
      </footer>
    `;
  }
}

/* ---------- Register ---------- */
customElements.define('bv-header', BvHeader);
customElements.define('bv-footer', BvFooter);