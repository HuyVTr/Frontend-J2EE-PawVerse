import { Cookie } from 'lucide-react';

const sections = [
  { title: '1. Cookie là gì?', content: 'Cookie là các tệp dữ liệu nhỏ được lưu trên trình duyệt của bạn khi truy cập website. Chúng giúp website ghi nhớ trạng thái và cải thiện trải nghiệm người dùng.' },
  { title: '2. Chúng tôi sử dụng gì?', content: 'PawVerse sử dụng localStorage (không phải cookie truyền thống) để lưu trữ JWT token đăng nhập và các tùy chọn người dùng như giỏ hàng, wishlist. Không có cookie theo dõi quảng cáo.' },
  { title: '3. Cookie bên thứ ba', content: 'Website tích hợp Google reCAPTCHA (để bảo vệ form đăng nhập) và đăng nhập OAuth (Google, GitHub, Discord). Các dịch vụ này có thể đặt cookie theo chính sách riêng của họ.' },
  { title: '4. Kiểm soát cookie', content: 'Bạn có thể xóa dữ liệu lưu trữ cục bộ bất kỳ lúc nào bằng cách: Đăng xuất khỏi tài khoản, hoặc vào Settings trình duyệt → Clear browsing data → Cached images and files, Cookies.' },
  { title: '5. Lưu ý', content: 'PawVerse là dự án đồ án học thuật. Chúng tôi không thu thập dữ liệu người dùng cho mục đích thương mại hay quảng cáo.' },
];

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-primary-600 to-orange-700 text-white py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 text-sm font-bold mb-6"><Cookie size={16} />Chính sách Cookie</div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">Cookies</h1>
          <p className="text-white/80">Cập nhật lần cuối: Tháng 4/2026</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 py-16 space-y-6">
        {sections.map((s) => (
          <div key={s.title} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-lg font-black text-gray-900 mb-3">{s.title}</h2>
            <p className="text-gray-600 leading-relaxed">{s.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
