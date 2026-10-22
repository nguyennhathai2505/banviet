/* =========================================================
   BẢN VIỆT — News Data
   ========================================================= */

const NEWS_DATA = {
  featured: {
    id: 'featured-20-10',
    brand: 'banviet',
    brandName: 'Bản Việt Group',
    category: 'Bản tin tiêu điểm',
    title: '20/10 — Bản Việt gửi yêu thương tới cô giáo và phụ huynh',
    excerpt:
      'Nhân ngày Phụ nữ Việt Nam 20/10, Bản Việt gửi lời tri ân sâu sắc tới đội ngũ nhà giáo và các bậc phụ huynh — những người đã đồng hành cùng hệ sinh thái trên hành trình kiến tạo thế hệ học tập thông minh.',
    date: '20/10/2026',
    readTime: '4 phút đọc',
    views: '1.2k',
    slug: 'featured-20-10',
  },

  posts: [
    {
      id: 'diem10-khai-giang-2027',
      brand: 'diem10',
      brandName: 'Điểm 10+',
      title: 'Điểm 10+ khai giảng lớp luyện thi THPT Quốc gia 2027',
      excerpt:
        'Chương trình luyện thi THPT 2027 chính thức khai giảng với lộ trình cá nhân hóa, cam kết điểm số đầu ra và báo cáo học lực tự động hàng tuần.',
      date: '18/10/2026',
      readTime: '3 phút đọc',
      slug: 'diem10-khai-giang-2027',
    },
    {
      id: 'danhlingo-9h-v2',
      brand: 'danhlingo',
      brandName: 'DanhLingo',
      title: 'DanhLingo ra mắt phiên bản 2.0 khóa "9 giờ giao tiếp"',
      excerpt:
        'Ứng dụng AI chấm phát âm realtime và mô phỏng tình huống thực tế giúp người đi làm rút ngắn lộ trình giao tiếp thành thạo xuống chỉ còn 9 giờ thực hành trọng tâm.',
      date: '15/10/2026',
      readTime: '4 phút đọc',
      slug: 'danhlingo-9h-v2',
    },
    {
      id: 'aitechco-fpt-expansion',
      brand: 'aitechco',
      brandName: 'Aitechco',
      title: 'Aitechco hợp tác FPT Cloud mở rộng hạ tầng EdTech toàn quốc',
      excerpt:
        'Hợp tác chiến lược giúp Aitechco nâng cấp hạ tầng máy chủ, đảm bảo uptime 99.9% cho hơn 500 trường học và tổ chức giáo dục trên toàn quốc.',
      date: '12/10/2026',
      readTime: '3 phút đọc',
      slug: 'aitechco-fpt-expansion',
    },
    {
      id: 'schooli-100k-class',
      brand: 'schooli',
      brandName: 'Schooli',
      title: 'Schooli cán mốc 100.000 lớp học trực tuyến chất lượng cao',
      excerpt:
        'Nền tảng phòng học ảo Schooli vừa ghi nhận lớp học thứ 100.000 với độ trễ thấp, bảng trắng tương tác và kết nối học viên toàn cầu 24/7.',
      date: '08/10/2026',
      readTime: '2 phút đọc',
      slug: 'schooli-100k-class',
    },
    {
      id: 'banviet-bao-cao-cds-2026',
      brand: 'banviet',
      brandName: 'Bản Việt Group',
      title: 'Bản Việt công bố báo cáo chuyển đổi số giáo dục 2026',
      excerpt:
        'Báo cáo tổng kết hành trình 15+ năm chuyển đổi số, cùng tầm nhìn 2030 đưa hệ sinh thái EdTech Việt vươn tầm khu vực.',
      date: '05/10/2026',
      readTime: '5 phút đọc',
      slug: 'banviet-bao-cao-cds-2026',
    },
  ],

  trending: [
    {
      id: 'trend-1',
      brand: 'diem10',
      brandName: 'Điểm 10+',
      title: 'Bí quyết ôn thi THPT hiệu quả với Pareto 20/80',
      date: '03/10/2026',
      slug: 'trend-1',
    },
    {
      id: 'trend-2',
      brand: 'danhlingo',
      brandName: 'DanhLingo',
      title: '5 sai lầm khi học IELTS người đi làm hay mắc phải',
      date: '01/10/2026',
      slug: 'trend-2',
    },
    {
      id: 'trend-3',
      brand: 'aitechco',
      brandName: 'Aitechco',
      title: 'LMS là gì? Tại sao trường học cần LMS trong 2026',
      date: '28/09/2026',
      slug: 'trend-3',
    },
    {
      id: 'trend-4',
      brand: 'schooli',
      brandName: 'Schooli',
      title: 'Học trực tuyến hiệu quả: 7 nguyên tắc vàng',
      date: '25/09/2026',
      slug: 'trend-4',
    },
    {
      id: 'trend-5',
      brand: 'banviet',
      brandName: 'Bản Việt Group',
      title: 'Hành trình 15 năm: Từ IAC 2010 đến Tập đoàn EdTech',
      date: '22/09/2026',
      slug: 'trend-5',
    },
  ],

  hotTopics: ['ChuyenDoiSo', 'Diem10Cong', 'DanhLingo9h', 'EdTech2026'],
};

/* Brand config */
const NEWS_BRAND_CONFIG = {
  banviet: { color: '#0A192F', name: 'Bản Việt' },
  diem10: { color: '#F97316', name: 'Điểm 10+' },
  danhlingo: { color: '#DC2626', name: 'DanhLingo' },
  aitechco: { color: '#00D2D3', name: 'Aitechco' },
  schooli: { color: '#0EA5E9', name: 'Schooli' },
};