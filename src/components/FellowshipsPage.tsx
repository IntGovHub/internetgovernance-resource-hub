import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { 
  GraduationCap, 
  ArrowLeft, 
  Check, 
  Book, 
  Calendar, 
  Building, 
  MapPin, 
  Coins, 
  Clock, 
  CheckCircle,
  ExternalLink,
  Search,
  Filter,
  X,
  ChevronRight,
  Sparkles,
  Info
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import "./FellowshipsPage.css";

const FellowshipsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const opportunities = useMemo(() => [
    {
      title: "ICANN87 Annual General Meeting Fellowship",
      org: "ICANN",
      region: "Asia Pacific (Muscat, Oman)",
      funding: "Fully Funded (Travel, accommodation, stipend)",
      deadline: "19 April 2026",
      link: "https://webportalapp.com/sp/login_saml/icannp_fellowship_application",
      description: "Event Date: 17–22 October 2026.",
      month: "October 2026"
    },
    {
      title: "UN Global Internet Summit Scholar",
      org: "UN & Partner Organizations",
      region: "Global",
      funding: "Full sponsorship",
      deadline: "July 15, 2026",
      link: "https://www.ungis.org/",
      month: "July 2026"
    },
    {
      title: "dotEveryone Digital Society Fellowship",
      org: "dotEveryone",
      region: "UK / Europe",
      funding: "Supported through grant",
      deadline: "June 30, 2026",
      link: "https://www.doteveryone.org.uk/",
      month: "June 2026"
    },
    {
      title: "APC Global Fellowship",
      org: "Association for Progressive Communications (APC)",
      region: "Global, focus on Global South",
      funding: "Full funding",
      deadline: "May 31, 2026",
      link: "https://www.apc.org/",
      month: "May 2026"
    },
    {
      title: "Globethics Ethical AI Governance Fellowship",
      org: "Globethics",
      region: "Global (Hybrid/Online)",
      funding: "Partially Funded / Sponsored",
      deadline: "16 April 2026",
      link: "https://globethics.net/ethical-ai-governance-fellowship",
      description: "2026 Cohort - Programme dates vary. Includes training and network access.",
      month: "April 2026"
    },
    {
      title: "ITU Fellowship Program",
      org: "ITU",
      region: "Global",
      funding: "Full fellowship",
      deadline: "April 15, 2026",
      link: "https://www.itu.int/scholarships",
      month: "April 2026"
    },
    {
      title: "ARTICLE 19 Youth Fellowship",
      org: "ARTICLE 19",
      region: "Global",
      funding: "Full support + mentoring",
      deadline: "April 30, 2026",
      link: "https://www.article19.org/",
      month: "April 2026"
    },
    {
      title: "IGF 2026 Fellowship Programme",
      org: "Internet Governance Forum (IGF) / UN DESA",
      region: "Global (Developing countries, LDCs, LLDCs, transitional economies)",
      funding: "IGF Trust Fund (travel, stipend, office facilities in Geneva)",
      deadline: "March 31, 2026",
      link: "https://www.intgovforum.org/en/content/igf-2026-fellowship-programme",
      description: "6-month fellowship cycle (May–November 2026).",
      month: "March 2026"
    },
    {
      title: "Mozilla Fellow in Internet Policy",
      org: "Mozilla Foundation",
      region: "Global",
      funding: "Stipend + support",
      deadline: "March 31, 2026",
      link: "https://www.mozilla.org/fellowships/",
      month: "March 2026"
    },
    {
      title: "Cybersecurity Research Initiative Scholarship",
      org: "CCRI",
      region: "North America",
      funding: "Up to $50,000",
      deadline: "March 15, 2026",
      link: "https://www.ccri.research/",
      month: "March 2026"
    },
    {
      title: "Forum on Digital Diplomacy Mentorship",
      org: "Forum on Digital Diplomacy",
      region: "Europe, Americas, Asia",
      funding: "Limited scholarships",
      deadline: "February 28, 2026",
      link: "https://www.forumdd.org/",
      month: "February 2026"
    },
    {
      title: "ICANN Fellowship Program",
      org: "ICANN",
      region: "Global",
      funding: "Full + accommodation",
      deadline: "February 10, 2026",
      link: "https://www.icann.org/fellowships",
      month: "February 2026"
    },
    {
      title: "DiploFoundation Online Training",
      org: "DiploFoundation",
      region: "Global / Remote",
      funding: "Scholarships available",
      deadline: "January 20, 2026",
      link: "https://diplo.org/academy",
      month: "January 2026"
    },
    {
      title: "Internet Society Global Fellowship",
      org: "Internet Society (ISOC)",
      region: "Global",
      funding: "Full funding + travel",
      deadline: "January 31, 2026",
      link: "https://www.isoc.org/fellowship",
      month: "January 2026"
    }
  ], []);

  const filteredOpportunities = useMemo(() => {
    const query = searchQuery.toLowerCase();
    return opportunities.filter(item => 
      item.title.toLowerCase().includes(query) ||
      item.org.toLowerCase().includes(query) ||
      item.region.toLowerCase().includes(query) ||
      (item.description && item.description.toLowerCase().includes(query)) ||
      item.month.toLowerCase().includes(query)
    );
  }, [searchQuery, opportunities]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fellowships-container"
    >
      <header className="fellowships-header relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523240715630-971c7e91b7be?auto=format&fit=crop&q=80&w=2000" 
            alt="Education Background" 
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/80 to-indigo-950" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-200 text-xs font-bold mb-6">
              <Sparkles size={14} /> Capacity Building 2026
            </div>
            <h1 className="text-white text-5xl md:text-7xl font-black tracking-tight mb-6 flex items-center justify-center gap-4">
              Fellowships & Scholarships
            </h1>
            <p className="text-indigo-100/80 text-xl max-w-2xl mx-auto font-medium">
              Access elite educational and professional development programs in the Internet Governance ecosystem.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-12 max-w-2xl mx-auto relative group"
          >
            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-indigo-300 group-focus-within:text-white transition-colors">
              <Search size={20} />
            </div>
            <input 
              type="text" 
              placeholder="Search fellowships, organizations, or regions..."
              className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl py-5 pl-14 pr-6 text-white placeholder:text-indigo-200/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all dark:bg-slate-900/50 dark:border-slate-700/50"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </motion.div>
        </div>
      </header>

      <main className="fellowships-main">
        <div className="max-w-6xl mx-auto px-4">
          <div className="breadcrumb mb-12 flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400">
            <Link to="/" className="hover:text-indigo-600 dark:hover:text-indigo-400">Home</Link>
            <ChevronRight size={14} />
            <span className="text-slate-900 dark:text-white">Fellowships & Scholarships</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <section className="intro-card glass-card mb-12">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-950/30 dark:text-indigo-400">
                    <Info size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4 dark:text-white">About This Directory</h3>
                    <p className="text-slate-600 leading-relaxed mb-6 dark:text-slate-400">
                      Discover curated opportunities to advance your career in the digital policy landscape. Access programs focused on:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {["Internet Governance", "Tech Policy & Rights", "Cybersecurity", "Emerging Leaders"].map(tag => (
                        <div key={tag} className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                          <CheckCircle size={16} className="text-indigo-500" /> {tag}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              <div className="space-y-6">
                <AnimatePresence mode="popLayout">
                  {filteredOpportunities.map((item, idx) => (
                    <motion.div 
                      key={item.title} 
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="opportunity-card group glass-card dark:before:bg-slate-900/50"
                    >
                      <div className="flex flex-col md:flex-row justify-between gap-6">
                        <div className="flex-1">
                          <h4 className="text-2xl font-black tracking-tight mb-4 text-slate-900 dark:text-white">
                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors flex items-center gap-2 dark:hover:text-indigo-400">
                              {item.title} <ExternalLink size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                            <div className="flex items-start gap-3">
                              <Building size={18} className="text-indigo-500 mt-0.5" />
                              <div>
                                <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Organization</span>
                                <span className="text-slate-700 font-medium dark:text-slate-300">{item.org}</span>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <MapPin size={18} className="text-indigo-500 mt-0.5" />
                              <div>
                                <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Region</span>
                                <span className="text-slate-700 font-medium dark:text-slate-300">{item.region}</span>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <Coins size={18} className="text-indigo-500 mt-0.5" />
                              <div>
                                <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Funding</span>
                                <span className="text-slate-700 font-medium dark:text-slate-300">{item.funding}</span>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <Clock size={18} className="text-indigo-500 mt-0.5" />
                              <div>
                                <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Deadline</span>
                                <span className="text-slate-900 font-bold dark:text-white">{item.deadline}</span>
                              </div>
                            </div>
                          </div>
                          {item.description && (
                            <p className="mt-4 text-slate-500 text-sm leading-relaxed dark:text-slate-400">
                              {item.description}
                            </p>
                          )}
                        </div>
                        
                        <div className="flex flex-col items-start md:items-end gap-4 min-w-[160px]">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold border border-indigo-100 dark:bg-indigo-900/20 dark:text-indigo-400 dark:border-indigo-800">
                            <CheckCircle size={14} /> Funding Available
                          </span>
                          <a 
                            href={item.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="w-full md:w-auto px-6 py-3 rounded-xl bg-slate-900 text-white text-sm font-bold hover:bg-indigo-600 transition-all text-center dark:bg-indigo-600 dark:hover:bg-indigo-700"
                          >
                            Apply Now
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
                {filteredOpportunities.length === 0 && (
                  <div className="text-center py-20 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200 dark:bg-slate-900/20 dark:border-slate-800">
                    <Search size={48} className="mx-auto text-slate-300 mb-4" />
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">No results found</h3>
                    <p className="text-slate-500">Try adjusting your search terms.</p>
                  </div>
                )}
              </div>
            </div>

            <div className="lg:col-span-1">
              <aside className="sticky top-32 space-y-8">
                <div className="p-8 rounded-[2rem] bg-indigo-600 text-white shadow-xl shadow-indigo-200 dark:shadow-indigo-900/20">
                  <h3 className="text-2xl font-black mb-4">Contribute</h3>
                  <p className="text-indigo-100 mb-6 leading-relaxed">
                    Help us keep this list updated. Know a program that's missing?
                  </p>
                  <Link 
                    to="/contributing" 
                    className="block w-full py-4 rounded-2xl bg-white text-indigo-600 text-center font-bold hover:bg-slate-50 transition-colors"
                  >
                    Submit Entry
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </main>
    </motion.div>
  );
};

export default FellowshipsPage;
