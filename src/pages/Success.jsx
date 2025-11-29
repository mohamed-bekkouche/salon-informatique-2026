import {
  Check,
  Sparkles,
  PartyPopper,
  Mail,
  ArrowRight,
  Home,
  UserPlus,
  CheckCircle2,
} from "lucide-react";

export default function Success({ setCurrentPage, formData, setFormData }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-900 relative overflow-hidden flex items-center justify-center p-4">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Success Card */}
      <div className="relative z-10 max-w-3xl w-full">
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 lg:p-16">
          {/* Success Icon */}
          <div className="relative mx-auto w-28 h-28 sm:w-32 sm:h-32 mb-8">
            {/* Pulsing Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full blur-2xl opacity-40 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full blur-xl opacity-30 animate-ping"></div>

            {/* Icon Container */}
            <div className="relative w-full h-full bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center shadow-2xl shadow-emerald-500/50 animate-scaleIn">
              <Check
                className="w-14 h-14 sm:w-16 sm:h-16 text-white"
                strokeWidth={3}
              />
            </div>

            {/* Floating Sparkles */}
            <Sparkles
              className="absolute -top-2 -right-2 w-8 h-8 text-yellow-400 animate-bounce"
              style={{ animationDelay: "0.5s" }}
            />
            <Sparkles
              className="absolute -bottom-2 -left-2 w-6 h-6 text-emerald-400 animate-bounce"
              style={{ animationDelay: "1s" }}
            />
            <PartyPopper
              className="absolute -top-3 -left-3 w-7 h-7 text-pink-400 animate-bounce"
              style={{ animationDelay: "0.2s" }}
            />
          </div>

          {/* Success Message */}
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 mb-4 sm:mb-6 tracking-tight animate-fadeIn">
              Inscription réussie! 🎉
            </h2>

            <p
              className="text-base sm:text-lg md:text-xl text-gray-200 mb-4 animate-fadeIn"
              style={{ animationDelay: "0.2s" }}
            >
              Félicitations{" "}
              <span className="font-bold text-emerald-300">
                {formData.fullName}
              </span>
              ! Votre inscription a été confirmée.
            </p>

            {/* Email Confirmation Card */}
            <div
              className="inline-block bg-gradient-to-r from-emerald-500/20 to-green-500/20 backdrop-blur-sm border border-emerald-500/30 rounded-2xl p-4 sm:p-6 mb-6 animate-fadeIn"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="p-2 bg-emerald-500/20 rounded-lg">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-300" />
                </div>
                <p className="text-sm sm:text-base text-gray-200 font-medium">
                  Email de confirmation envoyé à:
                </p>
              </div>
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-emerald-300 break-all px-2">
                {formData.email}
              </p>
            </div>

            <p
              className="text-sm sm:text-base text-gray-300 mb-2 animate-fadeIn"
              style={{ animationDelay: "0.6s" }}
            >
              Veuillez vérifier votre boîte de réception
            </p>
            <p
              className="text-xs sm:text-sm text-gray-400 animate-fadeIn"
              style={{ animationDelay: "0.6s" }}
            >
              (N'oubliez pas de vérifier vos spams 📧)
            </p>
          </div>

          {/* What's Next Section */}
          <div
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6 mb-8 sm:mb-10 animate-fadeIn"
            style={{ animationDelay: "0.8s" }}
          >
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />
              Prochaines étapes
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm sm:text-base text-gray-300">
                <div className="w-6 h-6 flex-shrink-0 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400 font-bold text-xs">
                  1
                </div>
                <p>Vérifiez votre email pour la confirmation d'inscription</p>
              </div>
              <div className="flex items-start gap-3 text-sm sm:text-base text-gray-300">
                <div className="w-6 h-6 flex-shrink-0 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400 font-bold text-xs">
                  2
                </div>
                <p>Ajoutez l'événement à votre calendrier</p>
              </div>
              <div className="flex items-start gap-3 text-sm sm:text-base text-gray-300">
                <div className="w-6 h-6 flex-shrink-0 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400 font-bold text-xs">
                  3
                </div>
                <p>Préparez vos questions pour les sessions</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fadeIn"
            style={{ animationDelay: "1s" }}
          >
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
              className="flex-1 group relative overflow-hidden bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 py-4 rounded-xl font-bold text-sm sm:text-base shadow-xl shadow-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/50 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="relative flex items-center justify-center gap-2">
                <UserPlus className="w-5 h-5" />
                <span>Inscrire un autre participant</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform"></div>
            </button>

            <button
              onClick={() => setCurrentPage("landing")}
              className="flex-1 group bg-white/10 backdrop-blur-md text-white border-2 border-white/30 px-6 py-4 rounded-xl font-semibold text-sm sm:text-base hover:bg-white/20 hover:border-white/50 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="flex items-center justify-center gap-2">
                <Home className="w-5 h-5" />
                <span>Retour à l'accueil</span>
              </div>
            </button>
          </div>

          {/* Footer Note */}
          <div
            className="mt-8 pt-6 border-t border-white/10 text-center animate-fadeIn"
            style={{ animationDelay: "1.2s" }}
          >
            <p className="text-xs sm:text-sm text-gray-400">
              Vous avez des questions? Contactez-nous à{" "}
              <a
                href="mailto:startcodingclub2024@gmail.com"
                className="text-emerald-400 hover:text-emerald-300 underline transition-colors"
              >
                startcodingclub2024@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
