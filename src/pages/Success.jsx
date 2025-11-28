import React from "react";

export default function Success({ setCurrentPage, formData, setFormData }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-12 max-w-2xl w-full text-center">
        <div className="mx-auto bg-gradient-to-br from-green-400 to-emerald-500 w-24 h-24 rounded-full flex items-center justify-center mb-8 shadow-xl shadow-green-500/50 animate-bounce">
          <Check className="h-12 w-12 text-white" strokeWidth={3} />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Inscription réussie! 🎉
        </h2>
        <p className="text-xl text-gray-200 mb-4">
          Un email de confirmation a été envoyé à
        </p>
        <p className="text-2xl font-bold text-green-300 mb-8">
          {formData.email}
        </p>
        <p className="text-gray-300 mb-10">
          Veuillez vérifier votre boîte de réception (et vos spams)
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
            Inscrire un autre participant
          </button>
          <button
            onClick={() => setCurrentPage("landing")}
            className="px-8 py-3 bg-white/10 backdrop-blur-md text-white border border-white/30 rounded-full font-semibold hover:bg-white/20 transition-all"
          >
            Retour à l'accueil
          </button>
        </div>
      </div>
    </div>
  );
}
