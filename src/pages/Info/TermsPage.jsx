import { FileText } from 'lucide-react';

const sections = [
  { title: '1. Chấp nhận điều khoản', content: 'Bằng cách truy cập và sử dụng PawVerse, bạn đồng ý tuân theo các điều khoản và điều kiện được nêu trong tài liệu này.' },
  { title: '2. Tính chất dự án', content: 'PawVerse là website đồ án học thuật của sinh viên Đại học HUTECH, thực hiện từ tháng 3 đến tháng 4 năm 2026. Đây không phải dịch vụ thương mại thật. Mọi giao dịch, đơn hàng, đặt lịch trên web này đều mang tính demo.' },
  { title: '3. Tài khoản người dùng', content: 'Bạn có trách nhiệm bảo mật thông tin đăng nhập của mình. Không sử dụng tài khoản cho mục đích vi phạm pháp luật hoặc gây ảnh hưởng đến hệ thống.' },
  { title: '4. Nội dung và đánh giá', content: 'Người dùng chịu trách nhiệm về nội dung đánh giá sản phẩm mình đăng. PawVerse có quyền xóa nội dung vi phạm mà không cần báo trước.' },
  { title: '5. Giới hạn trách nhiệm', content: 'Nhóm phát triển không chịu trách nhiệm về bất kỳ tổn thất nào phát sinh từ việc sử dụng website này. Toàn bộ thông tin sản phẩm, giá cả và dịch vụ chỉ mang tính minh họa.' },
  { title: '6. Thay đổi điều khoản', content: 'Chúng tôi có quyền cập nhật điều khoản bất kỳ lúc nào. Việc tiếp tục sử dụng website sau khi điều khoản thay đổi đồng nghĩa bạn chấp nhận điều khoản mới.' },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-primary-600 to-orange-700 text-white py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 text-sm font-bold mb-6"><FileText size={16} />Điều khoản sử dụng</div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">Điều khoản</h1>
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
