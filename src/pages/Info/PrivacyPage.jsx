import { Shield } from 'lucide-react';

const sections = [
  { title: '1. Thông tin thu thập', content: 'Chúng tôi thu thập tên, email, ảnh đại diện khi bạn đăng ký hoặc đăng nhập qua Google/GitHub/Discord. Ngoài ra, hệ thống ghi nhận lịch sử đơn hàng và hoạt động trên website.' },
  { title: '2. Mục đích sử dụng', content: 'Thông tin được dùng để cung cấp dịch vụ, gửi email xác nhận OTP, thông báo đơn hàng và đặt lịch. PawVerse không bán thông tin cá nhân cho bên thứ ba.' },
  { title: '3. Bảo mật dữ liệu', content: 'Mật khẩu được mã hóa bằng BCrypt. Xác thực sử dụng JWT. Kết nối database được bảo vệ qua môi trường production riêng biệt.' },
  { title: '4. Cookie và phiên đăng nhập', content: 'Website sử dụng localStorage để lưu token đăng nhập. Bạn có thể xóa dữ liệu này bất kỳ lúc nào bằng cách đăng xuất hoặc xóa cache trình duyệt.' },
  { title: '5. Lưu ý dự án học thuật', content: 'PawVerse là đồ án sinh viên HUTECH, không phải dịch vụ thương mại thật. Vui lòng không nhập thông tin thanh toán thật hay thông tin cá nhân nhạy cảm.' },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-primary-600 to-orange-700 text-white py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 text-sm font-bold mb-6"><Shield size={16} />Chính sách bảo mật</div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">Bảo mật</h1>
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
