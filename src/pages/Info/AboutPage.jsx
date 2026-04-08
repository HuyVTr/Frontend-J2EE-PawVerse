import { Link } from 'react-router-dom';
import { GraduationCap, AlertTriangle, Heart, Users, Calendar, ExternalLink } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-br from-primary-600 to-orange-700 text-white py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 text-sm font-bold mb-6">
            <GraduationCap size={16} />
            Dự án đồ án sinh viên
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">Về PawVerse</h1>
          <p className="text-white/80 text-lg">Tìm hiểu thêm về dự án và nhóm thực hiện</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16 space-y-10">

        {/* Warning Banner */}
        <div className="bg-amber-50 border-2 border-amber-400 rounded-2xl p-6 flex gap-4">
          <AlertTriangle className="text-amber-500 shrink-0 mt-1" size={28} />
          <div>
            <h2 className="text-amber-800 font-black text-lg mb-1">⚠️ Lưu ý quan trọng</h2>
            <p className="text-amber-700 font-medium leading-relaxed">
              Đây <strong>không phải</strong> trang thương mại điện tử thật. PawVerse là dự án đồ án học thuật,
              được xây dựng với mục đích học tập và trình bày. Vui lòng <strong>đừng thanh toán bất kỳ khoản phí nào</strong> khi sử dụng web này.
            </p>
          </div>
        </div>

        {/* Project Info */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 space-y-6">
          <h2 className="text-2xl font-black text-gray-900 flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center">
              <GraduationCap className="text-primary-600" size={22} />
            </div>
            Giới thiệu dự án
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              <strong className="text-gray-900">PawVerse</strong> là trang web đồ án môn học <strong>Java EE (J2EE)</strong> được
              thực hiện bởi sinh viên trường <strong className="text-primary-600">Đại học HUTECH</strong>.
            </p>
            <p>
              Dự án mô phỏng một nền tảng thương mại điện tử chuyên về đồ dùng thú cưng, bao gồm các tính năng:
              mua sắm trực tuyến, đặt lịch dịch vụ thú cưng, quản lý đơn hàng, hệ thống chat AI, và nhiều tính năng khác.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="bg-gray-50 rounded-xl p-4 text-center">
              <Calendar className="text-primary-600 mx-auto mb-2" size={24} />
              <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Thời gian</p>
              <p className="text-gray-900 font-black">Tháng 3 – 4/2026</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 text-center">
              <GraduationCap className="text-primary-600 mx-auto mb-2" size={24} />
              <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Trường</p>
              <p className="text-gray-900 font-black">ĐH HUTECH</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 text-center">
              <Users className="text-primary-600 mx-auto mb-2" size={24} />
              <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Môn học</p>
              <p className="text-gray-900 font-black">Java EE (J2EE)</p>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 space-y-4">
          <h2 className="text-2xl font-black text-gray-900 flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center">
              <Heart className="text-primary-600" size={22} />
            </div>
            Nhóm thực hiện
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Dự án được thực hiện bởi nhóm sinh viên HUTECH, dưới sự dẫn dắt của <strong className="text-gray-900">Nguyễn Hải Đăng</strong> (a.k.a Farol Nguyen) với vai trò Leader và quản trị hệ thống.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-primary-700 transition-colors"
            >
              <ExternalLink size={16} />
              Liên hệ nhóm
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
