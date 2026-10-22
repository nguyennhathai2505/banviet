/* =========================================================
   BẢN VIỆT — Điểm 10+ Data
   ========================================================= */

const DIEM10_COURSES = [
  {
    id: 'tien-tieu-hoc',
    title: 'Tiền tiểu học — Hành trang vào lớp 1',
    subtitle: 'Chuẩn bị toàn diện cho trẻ 5–6 tuổi trước khi vào lớp 1',
    age: '5–6 tuổi',
    mode: 'campus',
    modeBadge: 'Campus',
    features: [
      'Làm quen chữ cái, số đếm và tư duy logic',
      'Rèn kỹ năng tự lập & giao tiếp tự tin',
      'Đánh giá sẵn sàng vào lớp 1 cùng chuyên gia',
    ],
  },
  {
    id: 'boi-duong-6-12',
    title: 'Bồi dưỡng văn hóa lớp 6–12',
    subtitle: 'Toán · KHTN · Lý · Hóa · Văn · Anh — Học thật, thi thật',
    age: 'Lớp 6–12',
    mode: 'hybrid',
    modeBadge: 'Hybrid',
    features: [
      'Lộ trình cá nhân hóa theo năng lực từng em',
      'Báo cáo học lực tự động hàng tuần cho phụ huynh',
      'Cam kết điểm số đầu ra bằng văn bản',
    ],
  },
  {
    id: 'luyen-thi-chuyen-cap',
    title: 'Luyện thi chuyển cấp & Đại học',
    subtitle: 'Lớp 9–12 ôn thi vào 10, THPT QG và trường chuyên',
    age: 'Lớp 9–12',
    mode: 'hybrid',
    modeBadge: 'Hybrid',
    features: [
      'Chuyên đề trọng tâm theo ma trận đề thi',
      'Phòng luyện đề online 24/7',
      'Giáo viên chấm chữa 1-1 và cố vấn học tập',
    ],
  },
  {
    id: 'cambridge-kids',
    title: 'Tiếng Anh Cambridge trẻ em',
    subtitle: 'Starters · Movers · Flyers cho trẻ 7–14 tuổi',
    age: '7–14 tuổi',
    mode: 'campus',
    modeBadge: 'Campus',
    features: [
      'Giáo trình Cambridge chuẩn bản quyền',
      'Luyện 4 kỹ năng theo format thi thật',
      'Mock test Cambridge hàng tháng',
    ],
  },
  {
    id: 'math-science-en',
    title: 'Math & Science bằng tiếng Anh',
    subtitle: 'Lớp 1–12, song ngữ Cambridge — Tư duy toàn cầu',
    age: 'Lớp 1–12',
    mode: 'hybrid',
    modeBadge: 'Hybrid',
    features: [
      'Dạy Toán & Khoa học hoàn toàn bằng tiếng Anh',
      'Giáo viên chuẩn Cambridge, phát âm bản xứ',
      'Lộ trình tích hợp chứng chỉ Cambridge Primary',
    ],
  },
  {
    id: 'tenplus-summer',
    title: 'TenPlus Summer — Bán trú hè',
    subtitle: 'Khóa hè 6–15 tuổi, kỹ năng thực nghiệm & trải nghiệm',
    age: '6–15 tuổi',
    mode: 'summer',
    modeBadge: 'Khóa hè',
    features: [
      'Bán trú hè trọn gói, an toàn, có camera 24/7',
      'Học kỹ năng sống & thí nghiệm khoa học',
      'Hoạt động ngoại khóa & dã ngoại cuối tuần',
    ],
  },
];

const DIEM10_CAMPUSES = [
  { id: 'go-vap', name: 'Gò Vấp', address: '123 Nguyễn Oanh, P.17, Gò Vấp', phone: '0933 39 8787', hours: 'T2–T7 · 8:00 – 20:30', pinX: 320, pinY: 120 },
  { id: 'binh-thanh', name: 'Bình Thạnh', address: '45 Điện Biên Phủ, P.15, Bình Thạnh', phone: '0933 39 8787', hours: 'T2–T7 · 8:00 – 20:30', pinX: 420, pinY: 180 },
  { id: 'tan-binh', name: 'Tân Bình', address: '78 Hoàng Văn Thụ, P.4, Tân Bình', phone: '0933 39 8787', hours: 'T2–T7 · 8:00 – 20:30', pinX: 280, pinY: 200 },
  { id: 'tan-phu', name: 'Tân Phú', address: '256 Tân Sơn Nhì, P. Tân Sơn Nhì, Tân Phú', phone: '0933 39 8787', hours: 'T2–T7 · 8:00 – 20:30', pinX: 200, pinY: 240 },
  { id: 'quan-3', name: 'Quận 3', address: '89 Võ Văn Tần, P.6, Quận 3', phone: '0933 39 8787', hours: 'T2–T7 · 8:00 – 20:30', pinX: 400, pinY: 280 },
  { id: 'quan-7', name: 'Quận 7', address: '512 Nguyễn Thị Thập, P. Bình Thuận, Quận 7', phone: '0933 39 8787', hours: 'T2–T7 · 8:00 – 20:30', pinX: 520, pinY: 380 },
  { id: 'quan-10', name: 'Quận 10', address: '167 Tô Hiến Thành, P.13, Quận 10', phone: '0933 39 8787', hours: 'T2–T7 · 8:00 – 20:30', pinX: 340, pinY: 300 },
  { id: 'thu-duc', name: 'Thủ Đức', address: '99 Võ Văn Ngân, P. Bình Thọ, TP. Thủ Đức', phone: '0933 39 8787', hours: 'T2–T7 · 8:00 – 20:30', pinX: 560, pinY: 240 },
];