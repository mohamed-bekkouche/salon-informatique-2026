import {
  Check,
  Sparkles,
  Calendar,
  MapPin,
  Users,
  GraduationCap,
  ArrowRight,
  BookOpen,
  Award,
  Clock,
} from "lucide-react";
import { CONFERENCE_OPTIONS } from "./data/conferences";
import { WORKSHOP_OPTIONS } from "./data/workshops";

function Landing({ setCurrentPage }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="absolute top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">
                2ème Salon National des Clubs Informatiques
              </h1>
              <p className="text-xs text-cyan-300">
                Université de Constantine 2 - Algérie
              </p>
            </div>
          </div>
          <button
            onClick={() => setCurrentPage("register")}
            className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all transform hover:scale-105"
          >
            S'inscrire
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
              <p className="text-cyan-300 font-semibold">1-4 Décembre 2025</p>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mb-6 leading-tight">
              Transformation Numérique par
              <br />
              l'Intelligence des Données
            </h1>

            <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">
              Nouvelles perspectives pour un monde en mutation
            </p>

            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              République Algérienne Démocratique et Populaire
              <br />
              Ministère de l'Enseignement Supérieur et de la Recherche
              Scientifique
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button
                onClick={() => setCurrentPage("register")}
                className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-bold text-lg shadow-xl shadow-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/50 transition-all transform hover:scale-105 flex items-center space-x-2"
              >
                <span>Commencer l'inscription</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="#about"
                className="px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-full font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all"
              >
                En savoir plus
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { icon: Calendar, label: "Jours", value: "4" },
                { icon: Users, label: "Participants", value: "500+" },
                { icon: GraduationCap, label: "Ateliers", value: "10+" },
                { icon: MapPin, label: "Universités", value: "30+" },
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
              À propos de l'événement
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto"></div>
          </div>

          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl mb-12">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              L'
              <strong className="text-cyan-400">
                Université de Constantine 2 Abdelhamid Mehri
              </strong>{" "}
              organise en collaboration avec la{" "}
              <strong className="text-cyan-400">
                Direction des Services Universitaires de Constantine - El Khroub
              </strong>{" "}
              le 2ème Salon National des Clubs Informatiques.
            </p>

            <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-2xl p-6 border border-purple-500/30">
              <h3 className="text-2xl font-bold text-white mb-4">
                Sous la supervision du comité scientifique:
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>Prof. Dr. Mazioud Chaker</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>Prof. Dr. Bouramoul Abdelkrim</span>
                </li>
                <li className="flex items-center justify-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>Dr. Sandouli Mohammed</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Conférences Scientifiques",
                desc: "Conférences par des experts internationaux dans les domaines de la technologie et de l'intelligence artificielle",
                icon: "🎤",
              },
              {
                title: "Ateliers Pratiques",
                desc: "Formation pratique sur les dernières technologies et outils de programmation",
                icon: "💻",
              },
              {
                title: "Opportunités de Réseau",
                desc: "Rencontrez des étudiants et chercheurs des différentes universités algériennes",
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
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conference & Workshop Sections */}
      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Activités
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Conferences */}
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8">
              <div className="flex items-center mb-6">
                <BookOpen className="w-8 h-8 text-cyan-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">Conférences</h3>
              </div>
              <div className="space-y-4">
                {CONFERENCE_OPTIONS.map((conf) => (
                  <div
                    key={conf.value}
                    className="flex items-center p-4 bg-white/5 rounded-xl border border-white/10"
                  >
                    <conf.icon className="w-6 h-6 text-purple-400 mr-3" />
                    <span className="text-white font-medium">{conf.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Workshops */}
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8">
              <div className="flex items-center mb-6">
                <Award className="w-8 h-8 text-cyan-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">Ateliers</h3>
              </div>
              <div className="space-y-4">
                {WORKSHOP_OPTIONS.map((workshop) => (
                  <div
                    key={workshop.value}
                    className="flex items-center p-4 bg-white/5 rounded-xl border border-white/10"
                  >
                    <workshop.icon className="w-6 h-6 text-purple-400 mr-3" />
                    <span className="text-white font-medium">
                      {workshop.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-20 px-4 bg-black/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Programme
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto"></div>
          </div>

          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8">
            <div className="space-y-6">
              {[
                {
                  day: "1 Décembre",
                  title: "Ouverture et ateliers préliminaires",
                  icon: Clock,
                },
                {
                  day: "2 Décembre",
                  title: "Conférences scientifiques",
                  icon: BookOpen,
                },
                { day: "3 Décembre", title: "Ateliers avancés", icon: Award },
                {
                  day: "4 Décembre",
                  title: "Clôture et remise des certificats",
                  icon: Check,
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center p-4 bg-white/5 rounded-xl border border-white/10"
                >
                  <item.icon className="w-6 h-6 text-cyan-400 mr-4" />
                  <div>
                    <h4 className="text-lg font-bold text-white">{item.day}</h4>
                    <p className="text-gray-300">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-3xl p-12 shadow-2xl shadow-purple-500/30">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Rejoignez la transformation numérique
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Ne manquez pas cette opportunité de participer au plus grand
              rassemblement informatique national
            </p>
            <button
              onClick={() => setCurrentPage("register")}
              className="px-10 py-4 bg-white text-purple-900 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
            >
              Inscrivez-vous gratuitement maintenant
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-md border-t border-white/10 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 Université de Constantine 2 - Tous droits réservés
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Ministère de l'Enseignement Supérieur et de la Recherche
            Scientifique - République Algérienne
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Landing;
