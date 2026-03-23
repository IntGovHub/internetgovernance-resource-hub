import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { 
  Coins, 
  ArrowLeft, 
  Check, 
  Banknote, 
  Building, 
  Globe, 
  Clock, 
  CheckCircle,
  ExternalLink,
  Search,
  Filter,
  X,
  ChevronRight,
  Info,
  Lightbulb,
  PlusCircle
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import "./FundingPage.css";

const FundingPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const fundingPrograms = [
    {
      name: "Mozilla Internet Grants Program",
      provider: "Mozilla Foundation",
      amount: "Up to $100,000",
      regions: "Global",
      application: "Rolling basis",
      link: "https://www.mozilla.org/grants/",
      features: ["Internet health & privacy research", "Digital policy & advocacy", "Tech policy curriculum development"]
    },
    {
      name: "Ford Foundation Technology Program",
      provider: "Ford Foundation",
      amount: "Up to $250,000+",
      regions: "Global, focus on vulnerable regions",
      application: "Annual cycles",
      link: "https://www.fordfoundation.org/",
      features: ["Digital justice & equity work", "Internet rights advocacy", "Tech policy reform"]
    },
    {
      name: "MacArthur Foundation Digital Equity",
      provider: "MacArthur Foundation",
      amount: "Up to $500,000",
      regions: "Global",
      application: "By invitation",
      link: "https://www.macfound.org/",
      features: ["Digital inclusion projects", "Internet governance research", "Tech policy & human rights"]
    },
    {
      name: "Omidyar Network Tech & Society",
      provider: "Omidyar Network",
      amount: "$50K - $200K",
      regions: "Global",
      application: "Rolling basis",
      link: "https://www.omidyar.com/grants",
      features: ["Internet & society research", "Privacy & security initiatives", "Digital governance projects"]
    },
    {
      name: "ICANN Community Grants",
      provider: "ICANN",
      amount: "$20K - $100K",
      regions: "Global",
      application: "Annual",
      link: "https://www.icann.org/grants",
      features: ["Domain name policy research", "ICANN community capacity building", "Stakeholder engagement projects"]
    },
    {
      name: "Internet Society Community Grants",
      provider: "Internet Society",
      amount: "Up to $50,000",
      regions: "Global, priority to underserved regions",
      application: "Rolling basis",
      link: "https://www.isoc.org/grants",
      features: ["Internet development projects", "Community engagement", "Digital skills training"]
    },
    {
      name: "Shuttleworth Foundation Grants",
      provider: "Shuttleworth Foundation",
      amount: "Up to $500,000",
      regions: "Global",
      application: "Rolling",
      link: "https://www.shuttleworth.org/funding/",
      features: ["Open internet initiatives", "Technology policy advocacy", "Innovation in digital governance"]
    }
  ];

  const filteredPrograms = useMemo(() => {
    if (!searchQuery.trim()) return fundingPrograms;
    const query = searchQuery.toLowerCase();
    return fundingPrograms.filter(program => 
      program.name.toLowerCase().includes(query) ||
      program.provider.toLowerCase().includes(query) ||
      program.regions.toLowerCase().includes(query) ||
      program.features.some(f => f.toLowerCase().includes(query))
    );
  }, [searchQuery]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="funding-container"
    >
      <header className="funding-header">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=2000" 
            alt="Money and Finance" 
            className="w-full h-full object-cover"
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
            <h1>
              <Coins size={64} className="text-indigo-300" /> 
              Funding
            </h1>
            <p>Financial support and grants for Internet Governance projects and initiatives</p>
          </motion.div>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="funding-search-wrapper"
          >
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60" size={20} />
              <input 
                type="text" 
                placeholder="Search funding programs, providers, or regions..."
                className="funding-search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </header>

      <main className="funding-main">
        <div className="funding-breadcrumb dark:text-slate-400">
          <Link to="/" className="hover:text-indigo-600 dark:hover:text-indigo-400">Home</Link> <ChevronRight size={14} className="inline mx-1" /> Funding
        </div>


        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="funding-intro border-l-8 border-indigo-600 bg-indigo-50/50 p-10 rounded-3xl mb-16 dark:bg-indigo-950/20 dark:border-indigo-500"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-indigo-100 rounded-xl text-indigo-600 shadow-sm dark:bg-indigo-900/40 dark:text-indigo-400">
              <Info size={24} />
            </div>
            <h3 className="m-0 text-indigo-900 font-black text-2xl tracking-tight dark:text-white">About This Section</h3>
          </div>

          <p className="mb-6 text-slate-600 text-lg dark:text-slate-400"><strong>Find funding sources and grants</strong> for:</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-slate-700 font-medium dark:text-slate-300"><Check size={20} className="text-indigo-600 flex-shrink-0 dark:text-indigo-400" /> Internet Governance Research</li>

              <li className="flex items-center gap-3 text-slate-700 font-medium dark:text-slate-300"><Check size={20} className="text-indigo-600 flex-shrink-0 dark:text-indigo-400" /> Digital Policy Initiatives</li>

              <li className="flex items-center gap-3 text-slate-700 font-medium dark:text-slate-300"><Check size={20} className="text-indigo-600 flex-shrink-0 dark:text-indigo-400" /> Civil Society IG Projects</li>

            </ul>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-slate-700 font-medium dark:text-slate-300"><Check size={20} className="text-indigo-600 flex-shrink-0 dark:text-indigo-400" /> Tech Policy & Cybersecurity</li>

              <li className="flex items-center gap-3 text-slate-700 font-medium dark:text-slate-300"><Check size={20} className="text-indigo-600 flex-shrink-0 dark:text-indigo-400" /> Community & Advocacy Work</li>

            </ul>
          </div>
        </motion.div>

        <h2 className="text-4xl font-black tracking-tight text-slate-900 mb-12 flex items-center gap-4 border-b-8 border-indigo-600 pb-6 dark:text-white dark:border-indigo-500">
          <Banknote size={40} className="text-indigo-600 dark:text-indigo-400" /> 
          Available Funding Programs
        </h2>


        <div className="space-y-8">
          <AnimatePresence mode="popLayout">
            {filteredPrograms.length > 0 ? (
              filteredPrograms.map((program, idx) => (
                <motion.div 
                  key={program.name}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                   className="bg-white border border-slate-100 rounded-[2.5rem] p-10 mb-10 transition-all hover:shadow-2xl hover:shadow-indigo-100 hover:-translate-y-2 border-l-[16px] border-indigo-600 group dark:bg-slate-950 dark:border-slate-800 dark:border-l-indigo-600 dark:hover:shadow-indigo-900/10"
                >
                  <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                    <div className="flex-1">
                      <div className="mb-6">
                        <a 
                          href={program.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-2xl font-black text-slate-900 hover:text-indigo-600 transition-colors flex items-center gap-3 dark:text-white dark:hover:text-indigo-400"
                        >
                          {program.name} 
                          <ExternalLink size={20} className="opacity-0 group-hover:opacity-100 transition-opacity text-indigo-600 dark:text-indigo-400" />
                        </a>

                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400">

                            <Building size={20} />
                          </div>
                          <div>
                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">Provider</p>
                            <p className="font-bold text-slate-700 dark:text-slate-300">{program.provider}</p>

                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400">

                            <Coins size={20} />
                          </div>
                          <div>
                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">Grant Amount</p>
                            <p className="font-bold text-slate-700 dark:text-slate-300">{program.amount}</p>

                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400">

                            <Globe size={20} />
                          </div>
                          <div>
                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">Eligible Regions</p>
                            <p className="font-bold text-slate-700 dark:text-slate-300">{program.regions}</p>

                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400">

                            <Clock size={20} />
                          </div>
                          <div>
                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">Application</p>
                            <p className="font-bold text-slate-700 dark:text-slate-300">{program.application}</p>

                          </div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {program.features.map((feature, fIdx) => (
                          <span key={fIdx} className="px-3 py-1 bg-slate-50 text-slate-600 text-xs font-bold rounded-full border border-slate-100 dark:bg-slate-900 dark:text-slate-400 dark:border-slate-800">
                            {feature}
                          </span>
                        ))}

                      </div>
                    </div>
                    <div className="flex flex-col gap-4 w-full md:w-auto md:items-end">
                      <div className="px-6 py-3 bg-indigo-50 text-indigo-700 rounded-2xl font-black border border-indigo-100 flex items-center gap-2 shadow-sm dark:bg-indigo-900/40 dark:text-indigo-300 dark:border-indigo-800">
                        <CheckCircle size={20} /> {program.amount}
                      </div>

                      <a 
                        href={program.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full md:w-auto px-10 py-5 bg-indigo-600 text-white rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 hover:-translate-y-1 active:scale-95 whitespace-nowrap text-lg dark:shadow-none"
                      >
                        Apply Now <ExternalLink size={20} />
                      </a>

                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200"
              >
                <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-slate-100 text-slate-400 mb-4">
                  <Search size={40} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">No programs found</h3>
                <p className="text-slate-500 mt-2 dark:text-slate-400">Try adjusting your search terms.</p>

                <button 
                  onClick={() => setSearchQuery("")}
                  className="mt-6 text-indigo-600 font-bold hover:underline"
                >
                  Clear search
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-indigo-50/50 border-l-8 border-indigo-600 p-10 rounded-3xl mt-16 shadow-sm dark:bg-indigo-950/20 dark:border-indigo-500"
        >
          <h3 className="text-indigo-900 font-black text-2xl mb-8 flex items-center gap-3 tracking-tight dark:text-white">
            <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600 dark:bg-indigo-900/40 dark:text-indigo-400">
              <Lightbulb size={24} />
            </div>
            Funding Tips
          </h3>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-700 dark:text-slate-300">
            <li className="flex items-start gap-4 bg-white/50 p-4 rounded-2xl border border-indigo-100/50 dark:bg-slate-900/40 dark:border-indigo-900/30">
              <Check size={20} className="text-indigo-600 mt-1 flex-shrink-0 font-bold dark:text-indigo-400" />
              <span><strong className="text-indigo-900 dark:text-indigo-300">Research thoroughly</strong><br/><span className="text-sm text-slate-500 dark:text-slate-400">Match your project with funder priorities</span></span>
            </li>
            <li className="flex items-start gap-4 bg-white/50 p-4 rounded-2xl border border-indigo-100/50 dark:bg-slate-900/40 dark:border-indigo-900/30">
              <Check size={20} className="text-indigo-600 mt-1 flex-shrink-0 font-bold dark:text-indigo-400" />
              <span><strong className="text-indigo-900 dark:text-indigo-300">Read guidelines carefully</strong><br/><span className="text-sm text-slate-500 dark:text-slate-400">Each funder has specific eligibility criteria</span></span>
            </li>
            <li className="flex items-start gap-4 bg-white/50 p-4 rounded-2xl border border-indigo-100/50 dark:bg-slate-900/40 dark:border-indigo-900/30">
              <Check size={20} className="text-indigo-600 mt-1 flex-shrink-0 font-bold dark:text-indigo-400" />
              <span><strong className="text-indigo-900 dark:text-indigo-300">Build partnerships</strong><br/><span className="text-sm text-slate-500 dark:text-slate-400">Collaborations strengthen applications</span></span>
            </li>
            <li className="flex items-start gap-4 bg-white/50 p-4 rounded-2xl border border-indigo-100/50 dark:bg-slate-900/40 dark:border-indigo-900/30">
              <Check size={20} className="text-indigo-600 mt-1 flex-shrink-0 font-bold dark:text-indigo-400" />
              <span><strong className="text-indigo-900 dark:text-indigo-300">Timeline planning</strong><br/><span className="text-sm text-slate-500 dark:text-slate-400">Note application deadlines well in advance</span></span>
            </li>
          </ul>

        </motion.div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-slate-900 text-white p-10 rounded-3xl mt-10 shadow-xl border-l-8 border-indigo-500"
        >
          <h3 className="text-white font-black text-2xl mb-6 flex items-center gap-3 tracking-tight">
            <div className="p-2 bg-indigo-500/20 rounded-lg text-indigo-400">
              <PlusCircle size={24} />
            </div>
            How to Contribute
          </h3>
          <p className="text-slate-300 mb-8 text-lg">Help us expand this funding directory and support the IG community:</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
              <ChevronRight size={20} className="text-indigo-400 mb-3" />
              <p className="font-bold text-sm">Submit new sources via pull request</p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
              <ChevronRight size={20} className="text-indigo-400 mb-3" />
              <p className="font-bold text-sm">Report updated amounts or deadlines</p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
              <ChevronRight size={20} className="text-indigo-400 mb-3" />
              <p className="font-bold text-sm">Share via our submission form</p>
            </div>
          </div>
        </motion.div>
      </main>


    </motion.div>
  );
};

export default FundingPage;
