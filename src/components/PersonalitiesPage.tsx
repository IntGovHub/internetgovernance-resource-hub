import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { 
  Users, 
  Search, 
  ChevronRight, 
  Award, 
  Target, 
  Linkedin, 
  Twitter, 
  Globe, 
  ExternalLink,
  Info,
  Sparkles,
  MapPin
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import "./PersonalitiesPage.css";

interface Personality {
  name: string;
  region: string;
  affiliation: string;
  knownFor: string;
  focus: string;
  linkedin?: string;
  twitter?: string;
  website?: string;
}

const PERSONALITIES_DATA: Personality[] = [
  {
    name: "Avri Doria",
    region: "International",
    affiliation: "Independent Internet Governance Researcher and Consultant",
    knownFor: "Long-time participant in ICANN, IETF, and IGF processes; pioneer in multistakeholder governance models.",
    focus: "Multistakeholder governance, Internet architecture, Policy development.",
    linkedin: "https://linkedin.com",
    website: "https://example.com"
  },
  {
    name: "Vint Cerf",
    region: "United States",
    affiliation: "VP and Chief Internet Evangelist at Google",
    knownFor: "Co-designer of TCP/IP protocols, one of the 'fathers of the Internet'.",
    focus: "Internet architecture, Digital inclusion, Future of connectivity.",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com"
  },
  {
    name: "Fiona Alexander",
    region: "United States",
    affiliation: "Former NTIA Associate Administrator for Global Affairs",
    knownFor: "Leading the IANA transition process and championing multistakeholder governance.",
    focus: "DNS policy, ICANN governance, Multistakeholder processes.",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com"
  }
];

const PersonalitiesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPersonalities = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    return PERSONALITIES_DATA.filter(p => 
      p.name.toLowerCase().includes(query) ||
      p.affiliation.toLowerCase().includes(query) ||
      p.focus.toLowerCase().includes(query) ||
      p.region.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="personalities-container"
    >
      <header className="personalities-header">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2000" 
            alt="People collaborating" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-800/80 to-indigo-950" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-indigo-100 text-xs font-bold mb-6 backdrop-blur-sm">
              <Users size={14} className="text-indigo-300" /> Community Leaders
            </div>
            <h1 className="text-white text-5xl md:text-7xl font-black tracking-tight mb-6">
              IG Personalities
            </h1>
            <p className="text-indigo-50/90 text-xl max-w-2xl mx-auto font-medium">
              Voices that shape the future of the internet. Policymakers, researchers, activists, and technologists.
            </p>
          </motion.div>

          <div className="mt-12 max-w-2xl mx-auto relative group">
            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-indigo-300 group-focus-within:text-white transition-colors">
              <Search size={20} />
            </div>
            <input 
              type="text" 
              placeholder="Search leaders by name, affiliation, or focus..." 
              className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl py-5 pl-14 pr-6 text-white placeholder:text-indigo-200/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </header>

      <main className="personalities-main">
        <div className="max-w-6xl mx-auto px-4">
          <div className="breadcrumb mb-12 flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400">
            <Link to="/" className="hover:text-indigo-600 dark:hover:text-indigo-400">Home</Link>
            <ChevronRight size={14} />
            <span className="text-slate-900 dark:text-white">IG Personalities</span>
          </div>


          <section className="intro-card glass-card mb-16">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-950/30 dark:text-indigo-400">

                <Info size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 dark:text-white">About Personalities</h3>
                <p className="text-slate-600 leading-relaxed dark:text-slate-400">
                  A curated directory of people making waves in Internet Governance spaces. These individuals represent diverse stakeholders including civil society, government, private sector, and the technical community.
                </p>

              </div>
            </div>
          </section>

          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400">
              {filteredPersonalities.length} {filteredPersonalities.length === 1 ? 'Leader' : 'Leaders'} Found
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredPersonalities.map((person) => (
                <motion.article 
                  key={person.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="personality-card group glass-card"
                >
                  <div className="flex flex-col h-full">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h4 className="text-2xl font-black text-slate-900 tracking-tight group-hover:text-indigo-600 transition-colors dark:text-white dark:group-hover:text-indigo-400">
                          {person.name}
                        </h4>

                        <div className="flex items-center gap-2 text-slate-400 text-sm font-bold mt-1">
                          <MapPin size={14} /> {person.region}
                        </div>
                      </div>
                      <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all dark:bg-indigo-950/30 dark:text-indigo-400 dark:group-hover:bg-indigo-600 dark:group-hover:text-white">
                        <Users size={24} />
                      </div>

                    </div>

                    <p className="text-indigo-600 font-bold text-sm mb-6 leading-tight dark:text-indigo-400">
                      {person.affiliation}
                    </p>


                    <div className="space-y-6 flex-grow">
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-slate-50 text-indigo-500">
                          <Award size={18} />
                        </div>
                        <div>
                          <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Known For</span>
                          <p className="text-slate-600 text-sm leading-relaxed dark:text-slate-400">{person.knownFor}</p>

                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-slate-50 text-indigo-500">
                          <Target size={18} />
                        </div>
                        <div>
                          <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Focus</span>
                          <p className="text-slate-600 text-sm leading-relaxed dark:text-slate-400">{person.focus}</p>

                        </div>
                      </div>
                    </div>

                    <div className="pt-8 border-t border-slate-100 mt-8 flex items-center justify-between">
                      <div className="flex gap-4">
                        {person.linkedin && (
                          <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-600 transition-colors">
                            <Linkedin size={20} />
                          </a>
                        )}
                        {person.twitter && (
                          <a href={person.twitter} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-600 transition-colors">
                            <Twitter size={20} />
                          </a>
                        )}
                        {person.website && (
                          <a href={person.website} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-600 transition-colors">
                            <Globe size={20} />
                          </a>
                        )}
                      </div>
                      <button className="text-sm font-bold text-indigo-600 hover:gap-2 flex items-center gap-1 transition-all">
                        View Profile <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>

            {filteredPersonalities.length === 0 && (
              <div className="col-span-full py-20 text-center">
                <div className="mx-auto w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center text-slate-300 mb-6">
                  <Search size={40} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 dark:text-white">No leaders found</h3>
                <p className="text-slate-500 mb-8 dark:text-slate-400">Try matching your search with name, affiliation, or focus.</p>

                <button 
                  onClick={() => setSearchQuery("")}
                  className="px-8 py-3 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition-all"
                >
                  Clear Search
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      <div className="max-w-6xl mx-auto px-4 mt-20">
        <div className="p-12 rounded-[3rem] bg-indigo-600 text-white relative overflow-hidden shadow-2xl shadow-indigo-200">
          <div className="absolute -bottom-20 -right-20 opacity-10">
            <Users size={300} />
          </div>
          <div className="relative z-10 max-w-2xl">
            <h3 className="text-3xl font-black mb-6">Nominate a Personality</h3>
            <p className="text-indigo-100 text-lg mb-8">
              Is there someone we missed? Help us expand our directory by nominating influential voices in the IG space.
            </p>
            <Link 
              to="/contributing" 
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-indigo-600 font-bold hover:bg-indigo-50 transition-all"
            >
              Learn How to Contribute <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </div>


    </motion.div>
  );
};

export default PersonalitiesPage;
