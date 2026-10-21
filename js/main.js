/* =========================================================
   BẢN VIỆT — Main entry
   (Khởi tạo chung, có thể mở rộng cho từng trang sau này)
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
  // Log môi trường (tiện debug)
  console.log('%c Bản Việt ',
    'background:linear-gradient(90deg,#2563eb,#4f46e5);color:#fff;padding:4px 10px;border-radius:6px;font-weight:bold;',
    'Demo ready 🚀'
  );

  // TODO: Các init riêng cho từng trang có thể thêm ở đây,
  // hoặc tách file riêng (js/home.js, js/about.js, ...) và import tương ứng.
});

/* =========================================================
   SCROLL REVEAL — IntersectionObserver
   Áp dụng cho .reveal-left và .reveal-up
   ========================================================= */
(function initScrollReveal() {
  const els = document.querySelectorAll('.reveal-left, .reveal-up');
  if (!els.length) return;

  // Nếu trình duyệt không hỗ trợ → hiện luôn
  if (!('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); // chỉ chạy 1 lần
        }
      });
    },
    {
      threshold: 0.15,          // 15% phần tử vào viewport là trigger
      rootMargin: '0px 0px -60px 0px', // trigger sớm hơn 1 chút
    }
  );

  els.forEach((el) => observer.observe(el));
})();