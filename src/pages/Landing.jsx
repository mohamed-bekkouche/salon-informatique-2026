import {
  Calendar,
  MapPin,
  Users,
  GraduationCap,
  ArrowRight,
  BookOpen,
  Award,
  Clock,
  User,
  Award as AwardIcon,
  Coffee as CoffeeIcon,
  Sun as SunIcon,
  Moon as MoonIcon,
  Zap,
  Sparkles,
  ChevronDown,
  Sun,
  Coffee,
  Moon,
} from "lucide-react";
import { CONFERENCE_OPTIONS } from "../data/conferences";
import { WORKSHOP_OPTIONS } from "../data/workshops";
import { useState } from "react";

function Landing({ setCurrentPage }) {
  const [expandedDay, setExpandedDay] = useState(0);
  const [hoveredEvent, setHoveredEvent] = useState(null);
  const [hoveredConf, setHoveredConf] = useState(null);
  const [hoveredWork, setHoveredWork] = useState(null);

  const scheduleData = [
    {
      day: "Lundi 1 Décembre",
      icon: Sun,
      color: "yellow",
      gradient: "from-yellow-500 to-orange-500",
      events: [
        {
          time: "9h00 - 9h30",
          title: "Cérémonie d'ouverture",
          location: "Amphi4",
        },
        {
          time: "9h30 - 10h30",
          title: "Blockchain at the Power of AI: Rivalry or Complementarity?",
          speaker: "Pr Mehdi LABBANI",
          location: "Amphi4",
        },
        {
          time: "11h00 - 12h00",
          title: "Rethinking Assessment in the Age of AI",
          speaker: "Dr. Zakaria BENMOUNAH",
          location: "Amphi4",
        },
        {
          time: "12h00 - 13h00",
          title:
            "Beyond Chat: Shipping Reliable LLM + RAG Systems in the Real World",
          speaker: "Imad Eddine Ibrahim Bekkouch",
          location: "Amphi4",
        },
        { time: "13h00 - 14h00", title: "Pause déjeuner", isBreak: true },
      ],
    },
    {
      day: "Mardi 2 Décembre",
      icon: Coffee,
      color: "amber",
      gradient: "from-amber-500 to-orange-500",
      events: [
        {
          time: "9h00 - 9h30",
          title: "Cérémonie d'ouverture",
          location: "Amphi4",
        },
        {
          time: "9h30 - 10h30",
          title: "Agentic AI: Driving the Next Wave of Industrial Innovation",
          speaker: "Dr Sofiane OUAARI",
          location: "Amphi4",
        },
        {
          time: "11h00 - 12h00",
          title:
            "Toward Digital Sovereignty: How Artificial Intelligence and Blockchain Can Modernize Payments and Reinforce Financial Trust",
          speaker: "Pr Mehdi LABBANI",
          location: "Amphi4",
        },
        { time: "12h00 - 13h00", title: "Pause déjeuner", isBreak: true },
        {
          time: "14h00 - 16h00",
          title:
            "From Idea to Tech Venture: Building an Innovative Project in AI or Blockchain",
          speaker: "Pr. Mehdi LABBANI",
          location: "Room S33",
          isWorkshop: true,
        },
        {
          time: "14h00 - 16h00",
          title:
            "Build a Production-Ready RAG in 90 Minutes: From PDFs to Answers",
          speaker: "Imad Eddine Ibrahim Bekkouch",
          location: "Room S34",
          isWorkshop: true,
        },
      ],
    },
    {
      day: "Mercredi 3 Décembre",
      icon: Award,
      color: "purple",
      gradient: "from-purple-500 to-pink-500",
      events: [
        {
          time: "9h00 - 10h00",
          title:
            "L'IA générative : un nouvel outil pour apprendre, créer et innover",
          speaker: "Pr. Mahieddine Djoudi",
          location: "Amphi4",
        },
        {
          time: "10h00 - 11h00",
          title:
            "How to apply for PhD at the International Max Planck Research School for Intelligent Systems (IMPRS-IS)",
          speaker: "Dr. Sofiane OUAARI",
          location: "Amphi4",
        },
        {
          time: "11h00 - 12h00",
          title:
            "Contribution of Artificial Intelligence (imitation learning) in surgery: towards an autonomous and optimized robotic assistance",
          speaker: "Azzeddine Hani Benchalel & Samy Mebarki",
          location: "Amphi4",
        },
        {
          time: "10h30 - 12h00",
          title:
            "Build Your First IoT System: From Sensor Data to Real-Time Dashboard",
          speaker: "Dr. Zakaria BENZADRI",
          location: "Room S33",
          isWorkshop: true,
        },
        {
          time: "10h30 - 12h00",
          title:
            "AI-Driven Cyber Defense: Implementing AI-Powered Intrusion Detection System",
          speaker: "Dr. Hannache Oussama",
          location: "Room S34",
          isWorkshop: true,
        },
      ],
    },
    {
      day: "Jeudi 4 Décembre",
      icon: Moon,
      color: "blue",
      gradient: "from-blue-500 to-cyan-500",
      events: [
        {
          time: "Toute la journée",
          title: "Cérémonie de clôture et remise des prix",
          location: "Amphi4",
          isClosing: true,
        },
      ],
    },
  ];

  const CLUBS = [
    {
      name: "Start Coding Club",
      description: "Constantine - El Khroub",
      image: "/scc.webp",
    },
    {
      name: "Université Abdelhamid Mehri",
      description: "Constantine",
      image: "/unv2.webp",
    },
    {
      name: "DASCS",
      description: "Université de Constantine 2",
      image: "/dascs.webp",
    },
    {
      name: "Faculté de Technologie",
      description: "Université de Constantine 2",
      image: "/ntic.webp",
    },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="absolute top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center flex-wrap sm:flex-nowrap">
          <div className="flex items-center  gap-2">
            <div className="w-14 h-14 rounded-full flex items-center justify-center">
              <img src="/logo.webp" className="w-full" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">
                Computer science clubs Gathering 2nd edition{" "}
              </h1>
              <p className="text-xs text-cyan-300">
                Université de Constantine 2 - Algérie
              </p>
            </div>
          </div>
          <button
            onClick={() => setCurrentPage("register")}
            className="hidden sm:block px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all transform hover:scale-105"
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

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mb-6 leading-tight">
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
                { icon: Users, label: "Participants", value: "200+" },
                { icon: GraduationCap, label: "Ateliers", value: "4" },
                { icon: MapPin, label: "Universités", value: "20+" },
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
              Computer science clubs Gathering 2nd edition
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
                title: "Conférences Internationales",
                desc: "Conférences par des experts internationaux et locaux dans les domaines de l'IA, la cybersécurité et les technologies émergentes",
                icon: "🎤",
              },
              {
                title: "Ateliers Pratiques",
                desc: "Formations pratiques sur les dernières technologies et outils de programmation avec des experts du domaine",
                icon: "💻",
              },
              {
                title: "Opportunités de Réseau",
                desc: "Rencontrez des étudiants, chercheurs et professionnels des différentes universités algériennes",
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

      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 relative overflow-hidden">
        {/* Animated Background Elements */}
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

        <section className="py-20 px-4 relative z-10">
          <div className="container mx-auto max-w-7xl">
            {/* Header */}
            <div className="text-center mb-20">
              <div className="inline-block mb-6">
                <div className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-full">
                  <Zap className="w-5 h-5 text-cyan-400" />
                  <span className="text-cyan-300 font-semibold text-sm tracking-wider uppercase">
                    Événements à venir
                  </span>
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mb-6 tracking-tight">
                Conférences & Ateliers
              </h2>
              <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
                Découvrez nos événements exceptionnels animés par des experts
                reconnus
              </p>
              <div className="flex justify-center gap-2">
                <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full"></div>
                <div className="w-20 h-1.5 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full"></div>
                <div className="w-20 h-1.5 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full"></div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Conferences */}
              <div className="group">
                <div className="relative bg-gradient-to-br from-cyan-500/10 via-purple-500/5 to-transparent backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:scale-[1.02]">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/5 group-hover:to-purple-500/5 rounded-3xl transition-all duration-500"></div>

                  <div className="relative">
                    <div className="flex items-center mb-8">
                      <div className="p-3 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl shadow-lg shadow-cyan-500/50 mr-4">
                        <BookOpen className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-white">
                          Conférences
                        </h3>
                        <p className="text-cyan-300 text-sm">
                          Sessions d'inspiration
                        </p>
                      </div>
                      <div className="ml-auto px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full">
                        <span className="text-cyan-300 font-semibold text-sm">
                          {CONFERENCE_OPTIONS.length}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-5 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                      {CONFERENCE_OPTIONS.map((conf, idx) => (
                        <div
                          key={idx}
                          onMouseEnter={() => setHoveredConf(idx)}
                          onMouseLeave={() => setHoveredConf(null)}
                          className="group/card relative p-6 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                        >
                          {/* Animated Border Glow */}
                          {hoveredConf === idx && (
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl transition-opacity duration-300"></div>
                          )}

                          <div className="relative flex items-start gap-4">
                            <div
                              className={`hidden sm:block p-3 rounded-xl bg-gradient-to-br transition-all duration-300 ${
                                hoveredConf === idx
                                  ? "from-cyan-500 to-purple-500 shadow-lg shadow-cyan-500/50"
                                  : "from-cyan-500/20 to-purple-500/20"
                              }`}
                            >
                              <conf.icon
                                className={`w-6 h-6 transition-colors duration-300 ${
                                  hoveredConf === idx
                                    ? "text-white"
                                    : "text-cyan-400"
                                }`}
                              />
                            </div>

                            <div className="flex-1 min-w-0">
                              <h4 className="text-white font-bold text-lg mb-3 group-hover/card:text-cyan-300 transition-colors">
                                {conf.label}
                              </h4>

                              <div className="space-y-2">
                                <div className="flex items-center text-cyan-300 text-sm">
                                  <div className="p-1.5 bg-cyan-500/20 rounded-lg mr-2">
                                    <User className="w-3.5 h-3.5" />
                                  </div>
                                  <span className="font-medium">
                                    {conf.speaker}
                                  </span>
                                </div>

                                <div className="flex flex-wrap gap-3 text-gray-400 text-sm">
                                  <div className="flex items-center">
                                    <Calendar className="w-3.5 h-3.5 mr-1.5 text-purple-400" />
                                    <span>{conf.date}</span>
                                  </div>
                                  <div className="flex items-center">
                                    <Clock className="w-3.5 h-3.5 mr-1.5 text-purple-400" />
                                    <span>{conf.time}</span>
                                  </div>
                                </div>

                                <div className="flex items-center text-gray-400 text-sm">
                                  <MapPin className="w-3.5 h-3.5 mr-1.5 text-pink-400" />
                                  <span>{conf.location}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Workshops */}
              <div className="group">
                <div className="relative bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-transparent backdrop-blur-xl border border-purple-500/20 rounded-3xl p-8 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:scale-[1.02]">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/5 group-hover:to-pink-500/5 rounded-3xl transition-all duration-500"></div>

                  <div className="relative">
                    <div className="flex items-center mb-8">
                      <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-lg shadow-purple-500/50 mr-4">
                        <Award className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-white">
                          Ateliers
                        </h3>
                        <p className="text-purple-300 text-sm">
                          Formation pratique
                        </p>
                      </div>
                      <div className="ml-auto px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full">
                        <span className="text-purple-300 font-semibold text-sm">
                          {WORKSHOP_OPTIONS.length}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-5 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                      {WORKSHOP_OPTIONS.map((workshop, idx) => (
                        <div
                          key={idx}
                          onMouseEnter={() => setHoveredWork(idx)}
                          onMouseLeave={() => setHoveredWork(null)}
                          className="group/card relative p-6 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                        >
                          {/* Animated Border Glow */}
                          {hoveredWork === idx && (
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl transition-opacity duration-300"></div>
                          )}

                          <div className="relative flex items-start gap-4">
                            <div
                              className={`hidden sm:block p-3 rounded-xl bg-gradient-to-br transition-all duration-300 ${
                                hoveredWork === idx
                                  ? "from-purple-500 to-pink-500 shadow-lg shadow-purple-500/50"
                                  : "from-purple-500/20 to-pink-500/20"
                              }`}
                            >
                              <workshop.icon
                                className={`w-6 h-6 transition-colors duration-300 ${
                                  hoveredWork === idx
                                    ? "text-white"
                                    : "text-purple-400"
                                }`}
                              />
                            </div>

                            <div className="flex-1 min-w-0">
                              <h4 className="text-white font-bold text-lg mb-3 group-hover/card:text-purple-300 transition-colors">
                                {workshop.label}
                              </h4>

                              <div className="space-y-2">
                                <div className="flex items-center text-purple-300 text-sm">
                                  <div className="p-1.5 bg-purple-500/20 rounded-lg mr-2">
                                    <User className="w-3.5 h-3.5" />
                                  </div>
                                  <span className="font-medium">
                                    {workshop.speaker}
                                  </span>
                                </div>

                                <div className="flex flex-wrap gap-3 text-gray-400 text-sm">
                                  <div className="flex items-center">
                                    <Calendar className="w-3.5 h-3.5 mr-1.5 text-cyan-400" />
                                    <span>{workshop.date}</span>
                                  </div>
                                  <div className="flex items-center">
                                    <Clock className="w-3.5 h-3.5 mr-1.5 text-cyan-400" />
                                    <span>{workshop.time}</span>
                                  </div>
                                </div>

                                <div className="flex items-center text-gray-400 text-sm">
                                  <MapPin className="w-3.5 h-3.5 mr-1.5 text-pink-400" />
                                  <span>{workshop.location}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Schedule Section */}

      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <section className="py-20 px-4 relative z-10">
          <div className="container mx-auto max-w-6xl">
            {/* Header */}
            <div className="text-center mb-20">
              <div className="inline-block mb-6">
                <div className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-full">
                  <Calendar className="w-5 h-5 text-cyan-400" />
                  <span className="text-cyan-300 font-semibold text-sm tracking-wider uppercase">
                    4 Jours d'événements
                  </span>
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mb-6 tracking-tight">
                Programme Détaillé
              </h2>
              <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
                Découvrez le planning complet de nos conférences et ateliers
              </p>
              <div className="flex justify-center gap-2">
                <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full"></div>
                <div className="w-20 h-1.5 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full"></div>
                <div className="w-20 h-1.5 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full"></div>
              </div>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 opacity-20 hidden md:block"></div>

              {/* Days */}
              <div className="space-y-12">
                {scheduleData.map((day, dayIdx) => {
                  const DayIcon = day.icon;
                  const isExpanded = expandedDay === dayIdx;

                  return (
                    <div key={dayIdx} className="relative">
                      {/* Day Header */}
                      <div className="flex items-start gap-6 mb-8">
                        {/* Timeline Node */}
                        <div className="relative hidden md:block">
                          <div
                            className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${day.gradient} shadow-lg flex items-center justify-center transform transition-all duration-500 hover:scale-110 hover:rotate-6`}
                          >
                            <DayIcon className="w-8 h-8 text-white" />
                          </div>
                          <div
                            className={`absolute -inset-2 bg-gradient-to-br ${day.gradient} opacity-20 rounded-2xl blur-xl animate-pulse`}
                          ></div>
                        </div>

                        {/* Day Title */}
                        <div className="flex-1">
                          <button
                            onClick={() =>
                              setExpandedDay(isExpanded ? -1 : dayIdx)
                            }
                            className="w-full text-left group"
                          >
                            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                  <DayIcon
                                    className={`w-8 h-8 md:hidden text-${day.color}-400`}
                                  />
                                  <div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                                      {day.day}
                                    </h3>
                                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                                      <Sparkles className="w-4 h-4" />
                                      <span>
                                        {day.events.length} événements
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className={`p-2 rounded-lg bg-white/5 transition-transform duration-300 ${
                                    isExpanded ? "rotate-180" : ""
                                  }`}
                                >
                                  <ChevronDown className="w-6 h-6 text-cyan-400" />
                                </div>
                              </div>
                            </div>
                          </button>

                          {/* Events */}
                          <div
                            className={`mt-6 space-y-4 overflow-hidden transition-all duration-500 ${
                              isExpanded
                                ? "max-h-[5000px] opacity-100"
                                : "max-h-0 opacity-0"
                            }`}
                          >
                            {day.events.map((event, eventIdx) => (
                              <div
                                key={eventIdx}
                                onMouseEnter={() =>
                                  setHoveredEvent(`${dayIdx}-${eventIdx}`)
                                }
                                onMouseLeave={() => setHoveredEvent(null)}
                                className={`relative ml-0 md:ml-8 group/event ${
                                  isExpanded ? "animate-fadeIn" : ""
                                }`}
                                style={{
                                  animationDelay: `${eventIdx * 100}ms`,
                                }}
                              >
                                {/* Event Card */}
                                <div
                                  className={`relative bg-gradient-to-br backdrop-blur-xl border rounded-2xl p-6 transition-all duration-300 transform hover:-translate-y-1 ${
                                    event.isBreak
                                      ? "from-gray-500/10 to-gray-600/10 border-gray-500/20 hover:border-gray-400/50"
                                      : event.isWorkshop
                                      ? "from-purple-500/10 to-pink-500/10 border-purple-500/20 hover:border-purple-400/50 hover:shadow-xl hover:shadow-purple-500/10"
                                      : event.isClosing
                                      ? "from-cyan-500/10 to-blue-500/10 border-cyan-500/20 hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-500/10"
                                      : "from-white/5 to-white/10 border-white/20 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10"
                                  }`}
                                >
                                  {/* Glow Effect */}
                                  {hoveredEvent === `${dayIdx}-${eventIdx}` &&
                                    !event.isBreak && (
                                      <div
                                        className={`absolute -inset-1 bg-gradient-to-r ${
                                          event.isWorkshop
                                            ? "from-purple-500/20 to-pink-500/20"
                                            : "from-cyan-500/20 to-purple-500/20"
                                        } rounded-2xl blur-xl transition-opacity duration-300`}
                                      ></div>
                                    )}

                                  <div className="relative flex flex-col md:flex-row md:items-start gap-4">
                                    {/* Time Badge */}
                                    <div
                                      className={`flex-shrink-0 px-4 py-2 rounded-xl font-bold text-center border ${
                                        event.isBreak
                                          ? "bg-gray-500/20 border-gray-500/30 text-gray-300"
                                          : event.isWorkshop
                                          ? "bg-purple-500/20 border-purple-500/30 text-purple-300"
                                          : event.isClosing
                                          ? "bg-cyan-500/20 border-cyan-500/30 text-cyan-300"
                                          : "bg-cyan-500/20 border-cyan-500/30 text-cyan-300"
                                      }`}
                                    >
                                      <Clock className="w-4 h-4 mx-auto mb-1" />
                                      <div className="text-sm whitespace-nowrap">
                                        {event.time}
                                      </div>
                                    </div>

                                    {/* Event Details */}
                                    <div className="flex-1 min-w-0">
                                      <div className="flex items-start gap-3 mb-3">
                                        {event.isWorkshop && (
                                          <div className="mt-1 px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full">
                                            <span className="text-purple-300 text-xs font-semibold">
                                              ATELIER
                                            </span>
                                          </div>
                                        )}
                                        {event.isClosing && (
                                          <div className="mt-1 px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded-full">
                                            <span className="text-cyan-300 text-xs font-semibold">
                                              CLÔTURE
                                            </span>
                                          </div>
                                        )}
                                      </div>

                                      <h4
                                        className={`font-bold text-lg mb-3 transition-colors ${
                                          event.isBreak
                                            ? "text-gray-300"
                                            : "text-white group-hover/event:text-cyan-300"
                                        }`}
                                      >
                                        {event.title}
                                      </h4>

                                      {event.speaker && (
                                        <div className="flex items-center gap-2 text-purple-300 text-sm mb-2">
                                          <div className="p-1.5 bg-purple-500/20 rounded-lg">
                                            <User className="w-3.5 h-3.5" />
                                          </div>
                                          <span className="font-medium">
                                            {event.speaker}
                                          </span>
                                        </div>
                                      )}

                                      {event.location && (
                                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                                          <MapPin className="w-3.5 h-3.5 text-pink-400" />
                                          <span>{event.location}</span>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </div>

                                {/* Connecting Line */}
                                {eventIdx < day.events.length - 1 &&
                                  isExpanded && (
                                    <div className="hidden md:block absolute left-7 top-full w-0.5 h-4 bg-gradient-to-b from-cyan-500/50 to-transparent"></div>
                                  )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Day Connector */}
                      {dayIdx < scheduleData.length - 1 && (
                        <div className="hidden md:block absolute left-8 top-full w-0.5 h-12 bg-gradient-to-b from-cyan-500/30 to-transparent transform translate-y-4"></div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Legend */}
            <div className="mt-16 flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
                <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                <span className="text-gray-300 text-sm">Conférence</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 rounded-full">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-gray-300 text-sm">Atelier</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-500/10 backdrop-blur-sm border border-gray-500/20 rounded-full">
                <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                <span className="text-gray-300 text-sm">Pause</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Clubs & Organizations Photos */}
      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Nos Clubs & Organismes
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CLUBS.map((org, index) => (
              <div
                key={index}
                className="bg-white/10 rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all"
              >
                <div className=" rounded-xl w-full h-40 mb-4 flex items-center justify-center">
                  <img src={org.image} className="w-28 text-cyan-400" />
                </div>
                <h4 className="text-white font-semibold text-center mb-2">
                  {org.name}
                </h4>
                <p className="text-gray-400 text-sm text-center">
                  {org.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-3xl p-6 md:p-12 shadow-2xl shadow-purple-500/30">
            <h2 className="text-2xl md:text-5xl font-bold text-white mb-6">
              Rejoignez la transformation numérique
            </h2>
            <p className="text-lg md:text-xl text-cyan-100 mb-8">
              Ne manquez pas cette opportunité de participer au plus grand
              rassemblement informatique national
            </p>
            <button
              onClick={() => setCurrentPage("register")}
              className="px-6 md:px-10 py-4 bg-white text-purple-900 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
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
