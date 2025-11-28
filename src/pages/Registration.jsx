import {
  Sparkles,
  GraduationCap,
  ArrowLeft,
  Mail,
  Phone,
  User,
  School,
} from "lucide-react";
import { CONFERENCE_OPTIONS } from "./data/conferences";
import { WORKSHOP_OPTIONS } from "./data/workshops";

function Registration({ setCurrentPage, formData, setFormData }) {
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
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <header className="bg-black/30 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-white font-bold">Inscription</span>
          </div>
          <button
            onClick={() => setCurrentPage("landing")}
            className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center space-x-2"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold">Retour à l'accueil</span>
          </button>
        </div>
      </header>

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
              Formulaire d'inscription
            </h2>
            <p className="text-xl text-gray-300">
              Remplissez les informations pour participer à l'événement
            </p>
          </div>

          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white mb-2 font-semibold">
                    Nom complet
                    <span className="text-red-500 text-xl"> * </span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full pr-4 pl-9 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm transition-all"
                      placeholder="Entrez votre nom complet"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-white mb-2 font-semibold">
                    Email
                    <span className="text-red-500 text-xl"> * </span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pr-4 pl-9 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm transition-all"
                      placeholder="exemple@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-white mb-2 font-semibold">
                    Téléphone
                    <span className="text-red-500 text-xl"> * </span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full pr-4 pl-9 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm transition-all"
                      placeholder="+213 XX XXX XX XX"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-white mb-2 font-semibold">
                    Niveau d'étude
                    <span className="text-red-500 text-xl"> * </span>
                  </label>
                  <div className="relative">
                    <GraduationCap className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                    <select
                      name="level"
                      value={formData.level}
                      onChange={handleChange}
                      required
                      className="w-full pr-4 pl-9 py-3 bg-white/10 border border-white/30 rounded-xl text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm transition-all appearance-none"
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
                  </div>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-white mb-2 font-semibold">
                    Université (Facultatif)
                  </label>
                  <div className="relative">
                    <School className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="university"
                      value={formData.university}
                      onChange={handleChange}
                      className="w-full pr-4 pl-9 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm transition-all"
                      placeholder="Nom de l'université"
                    />
                  </div>
                </div>
              </div>

              {/* Conferences */}
              <div>
                <h4 className="text-xl font-bold text-white mb-4">
                  Conférences (sélectionnez au moins une)
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {CONFERENCE_OPTIONS.map((conf) => (
                    <label
                      key={conf.value}
                      className="flex items-center space-x-3 bg-white/5 p-4 rounded-xl border border-white/20 hover:bg-white/10 hover:border-cyan-500/50 transition-all cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        name="conferences"
                        value={conf.value}
                        checked={formData.conferences.includes(conf.value)}
                        onChange={handleChange}
                        className="h-5 w-5 text-cyan-500 rounded focus:ring-cyan-500"
                      />
                      <conf.icon className="w-5 h-5 text-purple-400" />
                      <span className="text-white font-medium">
                        {conf.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Workshops */}
              <div>
                <h4 className="text-xl font-bold text-white mb-4">
                  Ateliers (sélectionnez au moins un)
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {WORKSHOP_OPTIONS.map((workshop) => (
                    <label
                      key={workshop.value}
                      className="flex items-center space-x-3 bg-white/5 p-4 rounded-xl border border-white/20 hover:bg-white/10 hover:border-cyan-500/50 transition-all cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        name="workshops"
                        value={workshop.value}
                        checked={formData.workshops.includes(workshop.value)}
                        onChange={handleChange}
                        className="h-5 w-5 text-cyan-500 rounded focus:ring-cyan-500"
                      />
                      <workshop.icon className="w-5 h-5 text-purple-400" />
                      <span className="text-white font-medium">
                        {workshop.label}
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
                Confirmer l'inscription
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Registration;
