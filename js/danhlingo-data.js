/* =========================================================
   BẢN VIỆT — DanhLingo Data
   ========================================================= */

const DANHLINGO_LANGUAGES = [
  {
    id: 'english',
    name: 'Tiếng Anh',
    subtitle: 'Giao tiếp Tốc độ cao',
    flagKey: 'uk',
    color: '#1E40AF',
    target: 'Người đi làm, chuẩn hóa phát âm, giao tiếp công sở & phỏng vấn.',
    format: 'Offline sáng/tối hoặc Online tương tác 1-1 / lớp nhỏ qua Schooli.',
    features: [
      'Chuẩn hóa phát âm IPA cùng giáo viên bản xứ',
      'Bộ 500 mẫu câu công sở tần suất cao',
      'Mock interview & đàm phán thực chiến',
    ],
  },
  {
    id: 'chinese',
    name: 'Tiếng Hoa',
    subtitle: 'Giao tiếp Ứng dụng',
    flagKey: 'cn',
    color: '#DC2626',
    target: 'Luyện phản xạ Pinyin, giao tiếp thương mại, đánh hàng & làm việc với đối tác Trung Quốc.',
    format: 'Offline sáng/tối · Lộ trình tối ưu cho người mới bắt đầu.',
    features: [
      'Luyện Pinyin chuẩn ngay từ buổi đầu',
      'Bộ từ vựng thương mại & order hàng',
      'Role-play đàm phán với đối tác Trung',
    ],
  },
  {
    id: 'japanese',
    name: 'Tiếng Nhật',
    subtitle: 'Giao tiếp Công việc',
    flagKey: 'jp',
    color: '#B91C1C',
    target: 'Phản xạ Kaiwa, tác phong doanh nghiệp Nhật, luyện phỏng vấn đơn hàng/IT.',
    format: 'Offline sáng/tối · Tích hợp bộ từ vựng chuyên ngành.',
    features: [
      'Phản xạ Kaiwa theo tình huống thực tế',
      'Tác phong & văn hóa doanh nghiệp Nhật',
      'Bộ từ vựng chuyên ngành IT / sản xuất',
    ],
  },
  {
    id: 'korean',
    name: 'Tiếng Hàn',
    subtitle: 'Giao tiếp Phản xạ',
    flagKey: 'kr',
    color: '#1E3A8A',
    target: 'Giao tiếp đời sống, du lịch, làm việc tại doanh nghiệp Hàn Quốc.',
    format: 'Offline sáng/tối · Phương pháp phản xạ âm thanh trực quan.',
    features: [
      'Phản xạ âm thanh qua audio-native method',
      'Mẫu câu du lịch & đời sống phổ biến',
      'Tình huống làm việc tại doanh nghiệp Hàn',
    ],
  },
];

/* Schedule matrix: 3 ca × 3 hình thức */
const DANHLINGO_SCHEDULE = {
  morning: {
    label: 'Ca sáng',
    times: ['7:00 – 8:30', '9:00 – 10:30', '10:30 – 12:00'],
    modes: ['Offline Campus', 'Online 1-1 (Schooli)', 'Online nhóm nhỏ (Schooli)'],
    // data[timeIndex][modeIndex] = status
    data: [
      ['available', 'available', 'available'],
      ['available', 'available', 'nearly'],
      ['available', 'full', 'available'],
    ],
  },
  evening: {
    label: 'Ca tối',
    times: ['18:00 – 19:30', '19:30 – 21:00', '20:00 – 21:30'],
    modes: ['Offline Campus', 'Online 1-1 (Schooli)', 'Online nhóm nhỏ (Schooli)'],
    data: [
      ['nearly', 'available', 'available'],
      ['available', 'available', 'full'],
      ['available', 'nearly', 'available'],
    ],
  },
};

/* Spaced repetition demo words */
const DANHLINGO_SRS_WORDS = [
  { word: 'Schedule', phonetic: '/ˈskedʒ.uːl/', status: 'mastered', interval: 'Đã thuộc' },
  { word: 'Meeting', phonetic: '/ˈmiː.tɪŋ/', status: 'review', interval: 'Ôn lại sau 2h' },
  { word: 'Deadline', phonetic: '/ˈded.laɪn/', status: 'new', interval: 'Học lần đầu' },
];