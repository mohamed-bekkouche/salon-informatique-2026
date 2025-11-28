import { useState } from "react";
import {
  Sparkles,
  GraduationCap,
  ArrowLeft,
  Mail,
  Phone,
  User,
  School,
  Loader,
  Calendar,
  Clock,
  MapPin,
  BookOpen,
  Award,
  ChevronRight,
} from "lucide-react";
import { CONFERENCE_OPTIONS } from "../data/conferences";
import { WORKSHOP_OPTIONS } from "../data/workshops";

export default function Registration({
  setCurrentPage,
  formData,
  setFormData,
}) {
  const [isLoading, setIsLoading] = useState(false);

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

    // Validation
    if (formData.conferences.length === 0 || formData.workshops.length === 0) {
      alert("Veuillez sélectionner au moins une conférence et un atelier");
      return;
    }

    setIsLoading(true);
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
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Header */}
      <header className="z-10 bg-black/30 backdrop-blur-xl border-b border-white/10 sticky top-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-14 h-14 rounded-full flex items-center justify-center">
                <img loading="lazy" src="/logo.webp" className="w-full" />
              </div>
              <span className="text-white font-bold text-lg sm:text-xl">
                Inscription
              </span>
            </div>
            <button
              onClick={() => setCurrentPage("landing")}
              className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center space-x-2 group"
              disabled={isLoading}
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-semibold hidden sm:inline">Retour</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="relative z-10 py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          {/* Header Section */}
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-block mb-4 sm:mb-6">
              <div className="flex items-center gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-full">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                <span className="text-cyan-300 font-semibold text-xs sm:text-sm tracking-wider uppercase">
                  Rejoignez-nous
                </span>
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mb-3 sm:mb-4 tracking-tight px-4">
              Formulaire d'inscription
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Remplissez les informations pour participer à l'événement
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 lg:p-10">
            <div className="space-y-6 sm:space-y-8">
              {/* Personal Info Section */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                  <div className="p-2 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Informations personnelles
                  </h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label className="block text-white text-sm sm:text-base font-semibold">
                      Nom complet<span className="text-red-400 ml-1">*</span>
                    </label>
                    <div className="relative group">
                      <User className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-focus-within:text-cyan-400 transition-colors" />
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        disabled={isLoading}
                        className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-3.5 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                        placeholder="Entrez votre nom complet"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="block text-white text-sm sm:text-base font-semibold">
                      Email<span className="text-red-400 ml-1">*</span>
                    </label>
                    <div className="relative group">
                      <Mail className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-focus-within:text-cyan-400 transition-colors" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={isLoading}
                        className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-3.5 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                        placeholder="exemple@email.com"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="block text-white text-sm sm:text-base font-semibold">
                      Téléphone<span className="text-red-400 ml-1">*</span>
                    </label>
                    <div className="relative group">
                      <Phone className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-focus-within:text-cyan-400 transition-colors" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        disabled={isLoading}
                        className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-3.5 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                        placeholder="+213 XX XXX XX XX"
                      />
                    </div>
                  </div>

                  {/* Level */}
                  <div className="space-y-2">
                    <label className="block text-white text-sm sm:text-base font-semibold">
                      Niveau d'étude<span className="text-red-400 ml-1">*</span>
                    </label>
                    <div className="relative group">
                      <GraduationCap className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-focus-within:text-cyan-400 transition-colors pointer-events-none" />
                      <select
                        name="level"
                        value={formData.level}
                        onChange={handleChange}
                        required
                        disabled={isLoading}
                        className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-3.5 bg-white/5 border border-white/20 rounded-xl text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm transition-all appearance-none disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                      >
                        <option value="" className="bg-slate-800">
                          Sélectionnez votre niveau
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
                      <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 rotate-90 pointer-events-none" />
                    </div>
                  </div>

                  {/* University */}
                  <div className="space-y-2 lg:col-span-2">
                    <label className="block text-white text-sm sm:text-base font-semibold">
                      Université{" "}
                      <span className="text-gray-400 text-sm font-normal">
                        (Facultatif)
                      </span>
                    </label>
                    <div className="relative group">
                      <School className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-focus-within:text-cyan-400 transition-colors" />
                      <input
                        type="text"
                        name="university"
                        value={formData.university}
                        onChange={handleChange}
                        disabled={isLoading}
                        className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-3.5 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                        placeholder="Nom de l'université"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Conferences Section */}
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                  <div className="p-2 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      Conférences
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm">
                      Sélectionnez au moins une conférence
                    </p>
                  </div>
                  <div className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded-full">
                    <span className="text-cyan-300 font-semibold text-xs sm:text-sm">
                      {formData.conferences.length} /{" "}
                      {CONFERENCE_OPTIONS.length}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
                  {CONFERENCE_OPTIONS.map((conf) => (
                    <label
                      key={conf.value}
                      className={`relative group flex items-start p-4 sm:p-5 rounded-xl border transition-all cursor-pointer ${
                        formData.conferences.includes(conf.value)
                          ? "bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-cyan-500/50 shadow-lg shadow-cyan-500/10"
                          : isLoading
                          ? "bg-white/5 border-white/10 opacity-50 cursor-not-allowed"
                          : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-cyan-500/30"
                      }`}
                    >
                      <input
                        type="checkbox"
                        name="conferences"
                        value={conf.value}
                        checked={formData.conferences.includes(conf.value)}
                        onChange={handleChange}
                        disabled={isLoading}
                        className="h-5 w-5 text-cyan-500 rounded-md focus:ring-cyan-500 mt-0.5 flex-shrink-0 disabled:cursor-not-allowed"
                      />
                      <div className="ml-3 flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h4 className="text-white font-semibold text-sm sm:text-base leading-tight group-hover:text-cyan-300 transition-colors">
                            {conf.label}
                          </h4>
                        </div>
                        <p className="text-cyan-300 text-xs sm:text-sm mb-2">
                          {conf.speaker}
                        </p>
                        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-gray-400 text-xs">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span>{conf.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{conf.time}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            <span>{conf.location}</span>
                          </div>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Workshops Section */}
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                  <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      Ateliers
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm">
                      Sélectionnez au moins un atelier
                    </p>
                  </div>
                  <div className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full">
                    <span className="text-purple-300 font-semibold text-xs sm:text-sm">
                      {formData.workshops.length} / {WORKSHOP_OPTIONS.length}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
                  {WORKSHOP_OPTIONS.map((workshop) => (
                    <label
                      key={workshop.value}
                      className={`relative group flex items-start p-4 sm:p-5 rounded-xl border transition-all cursor-pointer ${
                        formData.workshops.includes(workshop.value)
                          ? "bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-500/50 shadow-lg shadow-purple-500/10"
                          : isLoading
                          ? "bg-white/5 border-white/10 opacity-50 cursor-not-allowed"
                          : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-purple-500/30"
                      }`}
                    >
                      <input
                        type="checkbox"
                        name="workshops"
                        value={workshop.value}
                        checked={formData.workshops.includes(workshop.value)}
                        onChange={handleChange}
                        disabled={isLoading}
                        className="h-5 w-5 text-purple-500 rounded-md focus:ring-purple-500 mt-0.5 flex-shrink-0 disabled:cursor-not-allowed"
                      />
                      <div className="ml-3 flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h4 className="text-white font-semibold text-sm sm:text-base leading-tight group-hover:text-purple-300 transition-colors">
                            {workshop.label}
                          </h4>
                        </div>
                        <p className="text-purple-300 text-xs sm:text-sm mb-2">
                          {workshop.speaker}
                        </p>
                        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-gray-400 text-xs">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span>{workshop.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{workshop.time}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            <span>{workshop.location}</span>
                          </div>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4 sm:pt-6">
                <button
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className={`w-full text-white py-4 sm:py-5 px-6 rounded-xl font-bold text-base sm:text-lg shadow-xl transition-all transform hover:scale-[1.02] flex items-center justify-center space-x-3 ${
                    isLoading
                      ? "bg-gray-600 cursor-not-allowed shadow-none"
                      : "bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 hover:shadow-2xl hover:shadow-cyan-500/50"
                  }`}
                >
                  {isLoading ? (
                    <>
                      <Loader className="w-5 h-5 sm:w-6 sm:h-6 animate-spin" />
                      <span>Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <span>Confirmer l'inscription</span>
                      <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                    </>
                  )}
                </button>
                <p className="text-center text-gray-400 text-xs sm:text-sm mt-4">
                  En vous inscrivant, vous acceptez nos conditions d'utilisation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
