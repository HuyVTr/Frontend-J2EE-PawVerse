import { Mail, Phone, MapPin, Github, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-br from-primary-600 to-orange-700 text-white py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 text-sm font-bold mb-6">
            <MessageCircle size={16} />
            Liên hệ với chúng tôi
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">Liên hệ</h1>
          <p className="text-white/80 text-lg">Mọi thắc mắc về dự án, vui lòng liên hệ qua thông tin bên dưới</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16 space-y-8">

        {/* Leader Info */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h2 className="text-2xl font-black text-gray-900 mb-6">Thông tin liên hệ</h2>

          <div className="flex items-center gap-5 mb-8 p-5 bg-primary-50 rounded-2xl">
            <div className="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center text-white font-black text-2xl shrink-0">
              F
            </div>
            <div>
              <p className="text-xl font-black text-gray-900">Nguyễn Hải Đăng</p>
              <p className="text-primary-600 font-bold">a.k.a Farol Nguyen</p>
              <p className="text-gray-500 text-sm mt-1">Leader · Admin · Developer</p>
            </div>
          </div>

          <div className="space-y-5">
            <a
              href="mailto:farolnguyen824@gmail.com"
              className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-primary-200 hover:bg-primary-50 transition-all group"
            >
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-500 group-hover:bg-red-500 group-hover:text-white transition-all shrink-0">
                <Mail size={22} />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">Email</p>
                <p className="text-gray-900 font-bold">farolnguyen824@gmail.com</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 rounded-xl border border-gray-100">
              <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 shrink-0">
                <Phone size={22} />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">Hotline</p>
                <p className="text-gray-900 font-bold">1900 xxxx</p>
                <p className="text-gray-400 text-xs mt-0.5">(Demo — không gọi được)</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl border border-gray-100">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-500 shrink-0">
                <MapPin size={22} />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">Địa chỉ</p>
                <p className="text-gray-900 font-bold">Đại học HUTECH — Khu E</p>
                <p className="text-gray-500 text-sm">Phân khu đào tạo E1, Khu Công nghệ cao TP.HCM</p>
                <p className="text-gray-500 text-sm">Phường Hiệp Phú, TP. Thủ Đức, TP.HCM</p>
              </div>
            </div>

            <a
              href="https://github.com/farolnguyen"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-gray-300 hover:bg-gray-50 transition-all group"
            >
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-gray-700 group-hover:bg-gray-900 group-hover:text-white transition-all shrink-0">
                <Github size={22} />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">GitHub</p>
                <p className="text-gray-900 font-bold">farolnguyen</p>
              </div>
            </a>
          </div>
        </div>

        {/* Note */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
          <p className="text-amber-800 font-medium text-sm leading-relaxed">
            📌 PawVerse là dự án đồ án học thuật của sinh viên HUTECH. Mọi phản hồi về kỹ thuật hoặc góp ý về dự án đều được hoan nghênh qua email trên.
          </p>
        </div>
      </div>
    </div>
  );
}
