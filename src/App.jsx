import { useState } from "react";
import {
  Check,
  Sparkles,
  Calendar,
  MapPin,
  Users,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

const CONFERENCE_OPTIONS = [
  "Intelligence Artificielle",
  "Cybersécurité",
  "Développement Web",
  "Cloud Computing",
  "Data Science",
];

const WORKSHOP_OPTIONS = [
  "Hackathon",
  "Robotique",
  "Développement Mobile",
  "Blockchain",
  "Réseaux Informatiques",
];

export default function App() {
  const [currentPage, setCurrentPage] = useState("landing");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    level: "",
    university: "",
    conferences: [],
    workshops: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      const currentArray = [...formData[name]];
      if (checked) {
        currentArray.push(value);
      } else {
        const index = currentArray.indexOf(value);
        if (index > -1) currentArray.splice(index, 1);
      }
      setFormData({ ...formData, [name]: currentArray });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbwui7UznEc-e2Mj7FPqTxT3xAOO7CxiNQSOmm6n3l8KuciIupxlyyZ0q4SV6d9S4CRB/exec";

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("fullName", formData.fullName);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("level", formData.level);
      formDataToSend.append("university", formData.university);
      formDataToSend.append("conferences", formData.conferences.join(", "));
      formDataToSend.append("workshops", formData.workshops.join(", "));

      const response = await fetch(scriptURL, {
        method: "POST",
        body: formDataToSend,
      });

      const result = await response.json();

      if (result.status === "success") {
        setCurrentPage("success");
      } else {
        alert(result.message || "Une erreur est survenue. Veuillez réessayer.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Erreur lors de l'envoi du formulaire. Veuillez réessayer.");
    }
  };

  // Landing Page
  if (currentPage === "landing") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Header */}
        <header className="absolute top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">
                  التجمع الوطني الثاني
                </h1>
                <p className="text-xs text-cyan-300">
                  للنوادي العلمية للإعلام الآلي
                </p>
              </div>
            </div>
            <button
              onClick={() => setCurrentPage("register")}
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all transform hover:scale-105"
            >
              سجل الآن
            </button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute w-96 h-96 bg-purple-500/30 rounded-full blur-3xl top-20 left-10 animate-pulse"></div>
            <div className="absolute w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl bottom-20 right-10 animate-pulse delay-1000"></div>
          </div>

          <div className="container mx-auto relative z-10">
            <div className="text-center max-w-5xl mx-auto">
              <div className="inline-block mb-6 px-6 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-500/30 backdrop-blur-sm">
                <p className="text-cyan-300 font-semibold">1-4 ديسمبر 2025</p>
              </div>

              <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mb-6 leading-tight">
                التحول الرقمي من خلال
                <br />
                البيانات الذكية
              </h1>

              <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">
                رؤى جديدة لعالم متغير
              </p>

              <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                الجمهورية الجزائرية الديمقراطية الشعبية
                <br />
                وزارة التعليم العالي والبحث العلمي
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <button
                  onClick={() => setCurrentPage("register")}
                  className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-bold text-lg shadow-xl shadow-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/50 transition-all transform hover:scale-105 flex items-center space-x-2 space-x-reverse"
                >
                  <span>ابدأ التسجيل الآن</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  href="#about"
                  className="px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-full font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all"
                >
                  اكتشف المزيد
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {[
                  { icon: Calendar, label: "أيام", value: "4" },
                  { icon: Users, label: "مشاركين", value: "500+" },
                  { icon: GraduationCap, label: "ورش عمل", value: "10+" },
                  { icon: MapPin, label: "جامعات", value: "30+" },
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all"
                  >
                    <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                    <p className="text-3xl font-bold text-white mb-1">
                      {stat.value}
                    </p>
                    <p className="text-gray-400 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4 bg-black/30 backdrop-blur-sm">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                عن الحدث
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto"></div>
            </div>

            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl mb-12">
              <p className="text-xl text-gray-300 leading-relaxed text-right mb-8">
                تنظم{" "}
                <strong className="text-cyan-400">
                  جامعة قسنطينة 2 عبد الحميد مهري
                </strong>{" "}
                بالتعاون مع{" "}
                <strong className="text-cyan-400">
                  مديرية الخدمات الجامعية قسنطينة - الخروب
                </strong>{" "}
                التجمع الوطني الثاني للنوادي العلمية للإعلام الآلي.
              </p>

              <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-2xl p-6 border border-purple-500/30">
                <h3 className="text-2xl font-bold text-white mb-4 text-right">
                  تحت إشراف وتأطير اللجنة العلمية:
                </h3>
                <ul className="space-y-2 text-right text-gray-300">
                  <li className="flex items-center justify-end space-x-3 space-x-reverse">
                    <span>الأستاذ الدكتور مزيود شاكر</span>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  </li>
                  <li className="flex items-center justify-end space-x-3 space-x-reverse">
                    <span>الأستاذ الدكتور بورامول عبد الكريم</span>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  </li>
                  <li className="flex items-center justify-end space-x-3 space-x-reverse">
                    <span>الدكتور صندلي محمد</span>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "مؤتمرات علمية",
                  desc: "محاضرات من خبراء دوليين في مجال التكنولوجيا والذكاء الاصطناعي",
                  icon: "🎤",
                },
                {
                  title: "ورش عمل تطبيقية",
                  desc: "تدريب عملي على أحدث التقنيات والأدوات البرمجية",
                  icon: "💻",
                },
                {
                  title: "فرص التواصل",
                  desc: "التقاء بطلاب وباحثين من مختلف الجامعات الجزائرية",
                  icon: "🤝",
                },
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:border-cyan-500/50 transition-all group"
                >
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-3xl p-12 shadow-2xl shadow-purple-500/30">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                انضم إلى التحول الرقمي
              </h2>
              <p className="text-xl text-cyan-100 mb-8">
                لا تفوت فرصة المشاركة في أكبر تجمع وطني للإعلام الآلي
              </p>
              <button
                onClick={() => setCurrentPage("register")}
                className="px-10 py-4 bg-white text-purple-900 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
              >
                سجل مجاناً الآن
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black/50 backdrop-blur-md border-t border-white/10 py-8">
          <div className="container mx-auto px-4 text-center">
            <p className="text-gray-400">
              © 2025 جامعة قسنطينة 2 عبد الحميد مهري - جميع الحقوق محفوظة
            </p>
            <p className="mt-2 text-sm text-gray-500">
              وزارة التعليم العالي والبحث العلمي - الجمهورية الجزائرية
              الديمقراطية الشعبية
            </p>
          </div>
        </footer>
      </div>
    );
  }

  // Registration Page
  if (currentPage === "register") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Header */}
        <header className="bg-black/30 backdrop-blur-md border-b border-white/10">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <button
              onClick={() => setCurrentPage("landing")}
              className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center space-x-2 space-x-reverse"
            >
              <ArrowRight className="w-5 h-5" />
              <span className="font-semibold">العودة للرئيسية</span>
            </button>
            <div className="flex items-center space-x-3 space-x-reverse">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-white font-bold">التسجيل</span>
            </div>
          </div>
        </header>

        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
                نموذج التسجيل
              </h2>
              <p className="text-xl text-gray-300">
                املأ البيانات للمشاركة في الحدث
              </p>
            </div>

            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white mb-2 font-semibold">
                      الاسم الكامل *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm transition-all"
                      placeholder="أدخل اسمك الكامل"
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2 font-semibold">
                      البريد الإلكتروني *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm transition-all"
                      placeholder="example@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2 font-semibold">
                      رقم الهاتف *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm transition-all"
                      placeholder="+213 XX XXX XX XX"
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2 font-semibold">
                      المستوى الدراسي *
                    </label>
                    <select
                      name="level"
                      value={formData.level}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm transition-all"
                    >
                      <option value="" className="bg-slate-800">
                        اختر المستوى
                      </option>
                      <option value="Licence 1" className="bg-slate-800">
                        Licence 1
                      </option>
                      <option value="Licence 2" className="bg-slate-800">
                        Licence 2
                      </option>
                      <option value="Licence 3" className="bg-slate-800">
                        Licence 3
                      </option>
                      <option value="Master 1" className="bg-slate-800">
                        Master 1
                      </option>
                      <option value="Master 2" className="bg-slate-800">
                        Master 2
                      </option>
                      <option value="Doctorat" className="bg-slate-800">
                        Doctorat
                      </option>
                      <option value="Autre" className="bg-slate-800">
                        Autre
                      </option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-white mb-2 font-semibold">
                      الجامعة (اختياري)
                    </label>
                    <input
                      type="text"
                      name="university"
                      value={formData.university}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm transition-all"
                      placeholder="اسم الجامعة"
                    />
                  </div>
                </div>

                {/* Conferences */}
                <div>
                  <h4 className="text-xl font-bold text-white mb-4">
                    المؤتمرات (اختر واحداً على الأقل)
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {CONFERENCE_OPTIONS.map((conf) => (
                      <label
                        key={conf}
                        className="flex items-center space-x-3 space-x-reverse bg-white/5 p-4 rounded-xl border border-white/20 hover:bg-white/10 hover:border-cyan-500/50 transition-all cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          name="conferences"
                          value={conf}
                          checked={formData.conferences.includes(conf)}
                          onChange={handleChange}
                          className="h-5 w-5 text-cyan-500 rounded focus:ring-cyan-500"
                        />
                        <span className="text-white font-medium">{conf}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Workshops */}
                <div>
                  <h4 className="text-xl font-bold text-white mb-4">
                    ورش العمل (اختر واحداً على الأقل)
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {WORKSHOP_OPTIONS.map((workshop) => (
                      <label
                        key={workshop}
                        className="flex items-center space-x-3 space-x-reverse bg-white/5 p-4 rounded-xl border border-white/20 hover:bg-white/10 hover:border-cyan-500/50 transition-all cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          name="workshops"
                          value={workshop}
                          checked={formData.workshops.includes(workshop)}
                          onChange={handleChange}
                          className="h-5 w-5 text-cyan-500 rounded focus:ring-cyan-500"
                        />
                        <span className="text-white font-medium">
                          {workshop}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 px-6 rounded-xl font-bold text-lg shadow-xl shadow-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/50 transition-all transform hover:scale-105"
                >
                  تأكيد التسجيل
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Success Page
  if (currentPage === "success") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 flex items-center justify-center p-4">
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-12 max-w-2xl w-full text-center">
          <div className="mx-auto bg-gradient-to-br from-green-400 to-emerald-500 w-24 h-24 rounded-full flex items-center justify-center mb-8 shadow-xl shadow-green-500/50 animate-bounce">
            <Check className="h-12 w-12 text-white" strokeWidth={3} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            تم التسجيل بنجاح! 🎉
          </h2>
          <p className="text-xl text-gray-200 mb-4">
            تم إرسال بريد إلكتروني للتأكيد إلى
          </p>
          <p className="text-2xl font-bold text-green-300 mb-8">
            {formData.email}
          </p>
          <p className="text-gray-300 mb-10">
            يرجى التحقق من صندوق الوارد (وصندوق البريد العشوائي أيضاً)
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                setCurrentPage("register");
                setFormData({
                  fullName: "",
                  email: "",
                  phone: "",
                  level: "",
                  university: "",
                  conferences: [],
                  workshops: [],
                });
              }}
              className="px-8 py-3 bg-white text-green-900 rounded-full font-bold hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              تسجيل مشارك آخر
            </button>
            <button
              onClick={() => setCurrentPage("landing")}
              className="px-8 py-3 bg-white/10 backdrop-blur-md text-white border border-white/30 rounded-full font-semibold hover:bg-white/20 transition-all"
            >
              العودة للرئيسية
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
