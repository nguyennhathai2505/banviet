/* =========================================================
   BẢN VIỆT — Schooli Data
   ========================================================= */

const SCHOOLI_FEATURES = [
  {
    id: 'webrtc',
    num: '01',
    title: 'WebRTC Real-Time Connection',
    subtitle: 'Độ trễ siêu thấp',
    features: [
      'Truyền hình ảnh & âm thanh HD trực tiếp',
      'Không giật lag trên 4G/5G/Wi-Fi',
      'Tự động điều chỉnh chất lượng theo băng thông',
    ],
    icon: 'signal',
  },
  {
    id: 'whiteboard',
    num: '02',
    title: 'Bảng trắng & Bài tập tương tác',
    subtitle: 'Interactive Board',
    features: [
      'Giáo viên và học viên cùng thao tác realtime',
      'Giải bài tập và sửa bài trực tiếp trên màn hình',
      'Lưu snapshot bảng trắng vào kho bài giảng',
    ],
    icon: 'pen',
  },
  {
    id: 'recording',
    num: '03',
    title: 'Tự động ghi hình & Kho Video',
    subtitle: 'Auto-Recording Library',
    features: [
      'Tự động ghi lại toàn bộ buổi học',
      'Lưu trữ Cloud an toàn, truy cập 24/7',
      'Tua lại, tìm kiếm theo timestamp dễ dàng',
    ],
    icon: 'video',
  },
  {
    id: 'gradebook',
    num: '04',
    title: 'Theo dõi Tiến độ & Báo cáo AI',
    subtitle: 'Digital Gradebook',
    features: [
      'Báo cáo chuyên cần & bài tập tức thời',
      'Kết quả kiểm tra cập nhật tự động',
      'AI phân tích điểm mạnh — điểm yếu từng em',
    ],
    icon: 'chartCheck',
  },
];

const SCHOOLI_HUBS = [
  {
    id: 'van-hoa',
    title: 'Văn hóa & Luyện thi Online',
    partner: 'Điểm 10+',
    partnerColor: '#F97316',
    desc: 'Dành cho học sinh lớp 6–12 trên toàn quốc không có điều kiện đến 8 campus trực tiếp tại TP.HCM.',
    meta: ['Lớp 6–12', 'Luyện thi chuyển cấp', '24/7'],
    icon: 'gradCap',
    cta: 'Đăng ký học thử',
  },
  {
    id: 'ngoai-ngu',
    title: 'Ngoại ngữ Giao tiếp Online',
    partner: 'DanhLingo',
    partnerColor: '#DC2626',
    desc: 'Tiếng Anh, Hoa, Nhật, Hàn — tương tác 1-1 hoặc lớp nhóm nhỏ dành cho người bận rộn.',
    meta: ['Anh · Hoa · Nhật · Hàn', '1-1 / Nhóm nhỏ', '24/7'],
    icon: 'chatLang',
    cta: 'Đăng ký học thử',
  },
  {
    id: 'chuyen-de',
    title: 'Chứng chỉ & Chuyên đề ngắn hạn',
    partner: 'Schooli',
    partnerColor: '#0284C7',
    desc: 'Khóa ôn thi cấp tốc, phương pháp giải đề chuyển cấp / Đại học & chứng chỉ quốc tế.',
    meta: ['Cấp tốc', 'Chuyên đề', 'Chứng chỉ'],
    icon: 'award',
    cta: 'Đăng ký học thử',
  },
];