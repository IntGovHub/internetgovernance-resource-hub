import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { 
  Mic, 
  ChevronRight, 
  Search, 
  Brain, 
  Languages, 
  CalendarCheck, 
  Linkedin, 
  UserCircle, 
  Github, 
  Mail, 
  Lightbulb,
  Globe,
  ExternalLink,
  X
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import "./SpeakerBankPage.css";

interface Speaker {
  name: string;
  country: string;
  expertise: string;
  languages: string;
  availableFor: string;
  bio?: string;
  link: string;
  linkType: 'linkedin' | 'profile';
}

const SPEAKERS: Speaker[] = [
  {
    name: "Yao Amevi Amessinou Sossou",
    country: "Benin/Austria",
    expertise: "Internet Governance, Digital Policy, Youth Participation, AI Governance, Platform Regulation (DSA), Data Protection.",
    languages: "English, French, German (Conversational)",
    availableFor: "Panels, Workshops, Moderation, Policy Dialogues, Trainings.",
    bio: "Policy researcher and practitioner with extensive experience in youth engagement. Currently serves as Policy Chair of NPOC at ICANN.",
    link: "https://www.linkedin.com/in/ameviy/",
    linkType: 'linkedin'
  },
  {
    name: "Amina Said",
    country: "Kenya",
    expertise: "AI Ethics, Youth Participation, Digital Inclusion.",
    languages: "English, Swahili",
    availableFor: "Panels, Moderation.",
    link: "https://linkedin.com/in/aminasaid",
    linkType: 'linkedin'
  },
  {
    name: "Daniel Kojo",
    country: "Ghana",
    expertise: "IGF Strategy, Policy Advocacy.",
    languages: "English",
    availableFor: "Panels, Training.",
    link: "https://example.com/daniel",
    linkType: 'profile'
  },
  {
    name: "Linh Nguyen",
    country: "Vietnam",
    expertise: "Cybersecurity, Privacy, Women in IG.",
    languages: "English, Vietnamese",
    availableFor: "Speaking, Mentorship.",
    link: "https://example.com/linh",
    linkType: 'profile'
  }
];

const SpeakerBankPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSpeakers = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return SPEAKERS;
    
    return SPEAKERS.filter(speaker => 
      speaker.name.toLowerCase().includes(query) ||
      speaker.country.toLowerCase().includes(query) ||
      speaker.expertise.toLowerCase().includes(query) ||
      speaker.languages.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="speaker-bank-container"
    >
      <header className="speaker-bank-header">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=2000" 
            alt="Speaker on stage" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-indigo-800 to-slate-900 opacity-90" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold mb-6 backdrop-blur-sm">
              <Mic size={14} className="text-indigo-400" /> Global Expert Network
            </div>
            <h1 className="text-white text-5xl md:text-7xl font-black tracking-tight mb-6">
              Youth IGF Speaker Bank
            </h1>
            <p className="text-white/80 text-xl max-w-2xl mx-auto font-medium mb-10">
              Discover diverse voices and subject matter experts from the global Youth IGF community.
            </p>

            <div className="relative max-w-2xl mx-auto group">
              <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none text-white/40 group-focus-within:text-indigo-400 transition-colors">
                <Search size={20} />
              </div>
              <input 
                type="text" 
                placeholder="Search experts by name, country, or topic..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-2xl py-5 pl-14 pr-14 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white/20 transition-all backdrop-blur-md text-lg"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-5 flex items-center text-white/40 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </header>

      <main className="speaker-bank-main">
        <div className="max-w-5xl mx-auto px-4">
          <div className="breadcrumb mb-12 flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400">
            <Link to="/" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span>Youth</span>
            <ChevronRight size={14} />
            <span className="text-slate-900 dark:text-white">Speaker Bank</span>
          </div>


          <section className="cta-card glass-card mb-16 border-l-4 border-l-indigo-500">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-indigo-600 mb-4 flex items-center gap-2">
                  <Lightbulb size={24} /> Want to join the Speaker Bank?
                </h3>
                <p className="text-slate-700 font-medium mb-8 dark:text-slate-300">
                  We're looking for diverse speakers in digital rights, governance, security, and more. All submissions are reviewed before publication.
                </p>

                <div className="flex flex-wrap gap-4">
                  <a 
                    href="https://github.com/Botsyoelily/internetgovernance-resource-hub/issues/new?template=speaker-profile.yml" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-all"
                  >
                    <Github size={18} /> Submit via GitHub
                  </a>
                  <a 
                    href="mailto:lilybotsyoe@gmail.com" 
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-50 text-indigo-700 font-bold hover:bg-indigo-100 transition-all border border-indigo-100"
                  >
                    <Mail size={18} /> Email Details
                  </a>
                </div>
              </div>
            </div>
          </section>

          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-black text-slate-900 flex items-center gap-3 mb-2 dark:text-white">

                📋 Directory of Experts
              </h2>
              <div className="h-1 w-20 bg-indigo-500 rounded-full" />
            </div>
            <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">
              {filteredSpeakers.length === SPEAKERS.length ? "Showing all experts" : 
               filteredSpeakers.length === 0 ? "No results found" : 
               `Showing ${filteredSpeakers.length} expert${filteredSpeakers.length === 1 ? "" : "s"}`}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredSpeakers.length > 0 ? (
                filteredSpeakers.map((speaker, idx) => (
                  <motion.article 
                    key={speaker.name}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ delay: idx * 0.05 }}
                    className="speaker-card group glass-card border-l-4 border-l-indigo-500"
                  >
                    <div className="flex flex-col h-full">
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-8">
                        <div>
                          <h4 className="text-3xl font-black text-slate-900 tracking-tight mb-1 group-hover:text-indigo-600 transition-colors dark:text-white dark:group-hover:text-indigo-400">
                            {speaker.name} <span className="text-slate-400 font-medium dark:text-slate-500">| {speaker.country}</span>
                          </h4>

                          <div className="flex items-center gap-1.5 text-indigo-600 font-bold text-sm">
                            <Globe size={14} /> {speaker.country}
                          </div>
                        </div>
                        <a 
                          href={speaker.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-50 text-indigo-700 text-sm font-bold border border-indigo-100 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all"
                        >
                          {speaker.linkType === 'linkedin' ? <Linkedin size={18} /> : <UserCircle size={18} />}
                          {speaker.linkType === 'linkedin' ? "LinkedIn Profile" : "View Profile"}
                          <ExternalLink size={14} />
                        </a>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                        <div className="flex gap-4">
                          <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                            <Brain size={20} />
                          </div>
                          <div>
                            <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Expertise:</span>
                            <p className="text-sm font-semibold text-slate-700 leading-relaxed dark:text-slate-300">{speaker.expertise}</p>

                          </div>
                        </div>

                        <div className="flex gap-4">
                          <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                            <Languages size={20} />
                          </div>
                          <div>
                            <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Languages:</span>
                            <p className="text-sm font-semibold text-slate-700 leading-relaxed dark:text-slate-300">{speaker.languages}</p>

                          </div>
                        </div>

                        <div className="flex gap-4">
                          <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                            <CalendarCheck size={20} />
                          </div>
                          <div>
                            <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Available For:</span>
                            <p className="text-sm font-semibold text-slate-700 leading-relaxed dark:text-slate-300">{speaker.availableFor}</p>

                          </div>
                        </div>
                      </div>

                      {speaker.bio && (
                        <div className="pt-6 border-t border-slate-100">
                          <p className="text-slate-500 text-[0.95rem] leading-relaxed font-medium dark:text-slate-400">
                            {speaker.bio}
                          </p>

                        </div>
                      )}
                    </div>
                  </motion.article>
                ))
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-20 glass-card"
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-slate-100 text-slate-400 mb-6">
                    <Search size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2 dark:text-white">No experts found</h3>
                  <p className="text-slate-500 font-medium mb-8 max-w-md mx-auto dark:text-slate-400">
                    Try matching your search with name, country, or specific expertise.
                  </p>

                  <button 
                    onClick={() => setSearchQuery("")}
                    className="px-8 py-3 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition-all"
                  >
                    Clear Search
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>


    </motion.div>
  );
};

export default SpeakerBankPage;
