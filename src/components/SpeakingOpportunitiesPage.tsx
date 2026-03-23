import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { 
  Mic2, 
  Calendar, 
  MapPin, 
  ExternalLink, 
  Search, 
  ChevronRight,
  Sparkles,
  ArrowRight,
  Info,
  CheckCircle,
  Clock,
  Globe,
  PenTool
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import "./SpeakingOpportunitiesPage.css";

interface OpportunityItem {
  title: string;
  organization: string;
  link: string;
  type: "Workshop" | "Panel" | "Presentation" | "Lightning Talk" | "Poster";
  deadline: string;
  eventDate: string;
  location: string;
  description: string;
  tags: string[];
}

const OPPORTUNITIES_DATA: OpportunityItem[] = [
  {
    title: "IGF 2026 Call for Workshops",
    organization: "Internet Governance Forum (UN)",
    link: "https://www.intgovforum.org/en/content/igf-2026-call-for-workshop-proposals",
    type: "Workshop",
    deadline: "May 15, 2026",
    eventDate: "November 2026",
    location: "TBD",
    description: "The annual call for workshop proposals for the Global IGF. Focus areas typically include Cybersecurity, Digital Rights, and Emerging Technologies.",
    tags: ["Policy", "Global", "Multistakeholder"]
  },
  {
    title: "RightsCon 2026 Call for Proposals",
    organization: "Access Now",
    link: "https://www.rightscon.org/call-for-proposals/",
    type: "Panel",
    deadline: "October 2025 (Estimated)",
    eventDate: "May 5–8, 2026",
    location: "Lusaka, Zambia & Online",
    description: "RightsCon is the world's leading summit on human rights in the digital age. They welcome proposals for panels, workshops, and lightning talks.",
    tags: ["Human Rights", "Digital Rights", "Civil Society"]
  },
  {
    title: "EuroDIG 2026 Call for Issues",
    organization: "European Dialogue on Internet Governance",
    link: "https://www.eurodig.org/get-involved/call-for-issues/",
    type: "Presentation",
    deadline: "December 2025 (Estimated)",
    eventDate: "May 26–27, 2026",
    location: "Brussels, Belgium",
    description: "Submit topics and issues you want to see discussed at the European regional IGF. This is the first step in shaping the program.",
    tags: ["Europe", "Regional", "Policy"]
  },
  {
    title: "IETF 125 Call for Presentations",
    organization: "Internet Engineering Task Force",
    link: "https://www.ietf.org/how/meetings/125/",
    type: "Presentation",
    deadline: "January 2026 (Estimated)",
    eventDate: "March 14–20, 2026",
    location: "Shenzhen, China",
    description: "Technical presentations and working group contributions for the development of open internet standards.",
    tags: ["Technical", "Standards", "Infrastructure"]
  },
  {
    title: "APrIGF 2026 Call for Workshops",
    organization: "Asia Pacific Regional IGF",
    link: "https://aprigf.asia/",
    type: "Workshop",
    deadline: "April 2026 (Estimated)",
    eventDate: "August 2026",
    location: "TBD",
    description: "The primary regional forum for the Asia Pacific region to discuss internet governance issues.",
    tags: ["Asia Pacific", "Regional", "Development"]
  },
  {
    title: "CPDP 2026 Call for Papers",
    organization: "Computers, Privacy and Data Protection",
    link: "https://www.cpdpconferences.org/",
    type: "Poster",
    deadline: "January 2026 (Estimated)",
    eventDate: "May 19–22, 2026",
    location: "Brussels, Belgium",
    description: "Academic and policy-oriented papers on privacy, data protection, and surveillance.",
    tags: ["Privacy", "Academic", "Data Protection"]
  }
];

const SpeakingOpportunitiesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredOpportunities = useMemo(() => {
    const query = searchQuery.toLowerCase();
    return OPPORTUNITIES_DATA.filter(item => 
      item.title.toLowerCase().includes(query) ||
      item.organization.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.tags.some(tag => tag.toLowerCase().includes(query))
    );
  }, [searchQuery]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="speaking-container"
    >
      <header className="speaking-header">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=2000" 
            alt="Speaker on Stage" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-violet-900/80 to-slate-950" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/20 border border-violet-400/30 text-violet-200 text-xs font-bold mb-6">
              <Sparkles size={14} /> Share Your Expertise
            </div>
            <h1 className="text-white text-5xl md:text-7xl font-black tracking-tight mb-6">
              Speaking Opportunities
            </h1>
            <p className="text-violet-100/80 text-xl max-w-2xl mx-auto font-medium">
              Find open calls for workshops, panels, and presentations at the world's most influential internet governance events.
            </p>
          </motion.div>

          <div className="mt-12 max-w-2xl mx-auto relative group">
            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-violet-300 group-focus-within:text-white transition-colors">
              <Search size={20} />
            </div>
            <input 
              type="text" 
              placeholder="Search by event, organization, or topic..." 
              className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl py-5 pl-14 pr-6 text-white placeholder:text-violet-200/50 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </header>

      <main className="speaking-main">
        <div className="max-w-6xl mx-auto px-4">
          <div className="breadcrumb mb-12 flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400">
            <Link to="/" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-slate-900 dark:text-white">Speaking Opportunities</span>
          </div>


          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <section className="intro-card glass-card mb-12">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-violet-50 text-violet-600 dark:bg-violet-950/30 dark:text-violet-400">

                    <Info size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4 dark:text-white">Why Speak at IG Events?</h3>
                    <p className="text-slate-600 leading-relaxed mb-6 dark:text-slate-400">
                      Speaking at Internet Governance forums allows you to influence global policy, share your community's perspective, and network with experts from government, civil society, and the private sector.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        "Influence Digital Policy", 
                        "Global Networking", 
                        "Capacity Building", 
                        "Community Advocacy"
                      ].map(benefit => (
                        <div key={benefit} className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">

                          <CheckCircle size={16} className="text-violet-500" /> {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              <div className="space-y-8">
                <AnimatePresence mode="popLayout">
                  {filteredOpportunities.length > 0 ? (
                    filteredOpportunities.map((opp, idx) => (
                      <motion.div 
                        key={opp.title}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="opportunity-card group glass-card"
                      >
                        <div className="flex flex-col md:flex-row justify-between gap-6">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-4">
                              <span className="px-3 py-1 rounded-lg bg-violet-50 text-violet-600 text-[10px] font-black uppercase tracking-wider dark:bg-violet-900/40 dark:text-violet-300">

                                {opp.type}
                              </span>
                              <span className="text-slate-400 text-xs font-medium flex items-center gap-1">
                                <Globe size={12} /> {opp.organization}
                              </span>
                            </div>
                            <h4 className="text-2xl font-black tracking-tight mb-4 group-hover:text-violet-600 transition-colors dark:text-white dark:group-hover:text-violet-400">
                              <a href={opp.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                {opp.title} <ExternalLink size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                              </a>
                            </h4>

                            <p className="text-slate-600 text-sm leading-relaxed mb-6 dark:text-slate-400">
                              {opp.description}
                            </p>

                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div className="flex items-start gap-3">
                                <Clock size={18} className="text-violet-500 mt-0.5" />
                                <div>
                                  <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Deadline</span>
                                  <span className="text-slate-900 font-bold dark:text-white">{opp.deadline}</span>

                                </div>
                              </div>
                              <div className="flex items-start gap-3">
                                <Calendar size={18} className="text-violet-500 mt-0.5" />
                                <div>
                                  <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Event Date</span>
                                  <span className="text-slate-700 font-medium dark:text-slate-300">{opp.eventDate}</span>

                                </div>
                              </div>
                              <div className="flex items-start gap-3">
                                <MapPin size={18} className="text-violet-500 mt-0.5" />
                                <div>
                                  <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Location</span>
                                  <span className="text-slate-700 font-medium dark:text-slate-300">{opp.location}</span>

                                </div>
                              </div>
                              <div className="flex items-start gap-3">
                                <PenTool size={18} className="text-violet-500 mt-0.5" />
                                <div>
                                  <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Topics</span>
                                  <div className="flex flex-wrap gap-1 mt-1">
                                    {opp.tags.map(tag => (
                                      <span key={tag} className="text-[10px] font-medium text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded dark:bg-slate-800 dark:text-slate-400">
                                        {tag}
                                      </span>
                                    ))}

                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-start md:items-end justify-center min-w-[160px]">
                            <a 
                              href={opp.link} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="w-full md:w-auto px-8 py-4 rounded-2xl bg-slate-900 text-white text-sm font-bold hover:bg-violet-600 transition-all text-center shadow-lg hover:shadow-violet-200 dark:bg-violet-600 dark:hover:bg-violet-700 dark:shadow-none"
                            >
                              Submit Proposal
                            </a>

                          </div>
                        </div>
                      </motion.div>
                    ))
                  ) : (
                    <div className="py-20 text-center glass-card">
                      <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-slate-50 text-slate-300 mb-4">
                        <Search size={32} />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">No opportunities found</h3>
                      <p className="text-slate-500 mt-2 dark:text-slate-400">Try adjusting your search terms or check back later.</p>

                    </div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <div className="lg:col-span-1">
              <aside className="sticky top-32 space-y-8">
                <div className="p-8 rounded-[2rem] bg-gradient-to-br from-violet-600 to-indigo-700 text-white shadow-xl shadow-violet-200">
                  <h3 className="text-2xl font-black mb-4">Speaker Tips</h3>
                  <p className="text-violet-100 mb-6 leading-relaxed text-sm">
                    Writing a winning proposal takes practice. Here are some quick tips to get you started:
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3 text-sm font-medium">
                      <div className="mt-1 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[10px]">1</div>
                      Focus on a specific, timely issue.
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium">
                      <div className="mt-1 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[10px]">2</div>
                      Ensure multistakeholder representation in your panel.
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium">
                      <div className="mt-1 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[10px]">3</div>
                      Highlight actionable outcomes and takeaways.
                    </li>
                  </ul>
                  <Link 
                    to="/youth/learning-toolkits" 
                    className="block w-full py-4 rounded-2xl bg-white text-violet-600 text-center font-bold hover:bg-violet-50 transition-colors"
                  >
                    View IG Toolkit
                  </Link>
                </div>

                <div className="p-8 rounded-[2rem] border border-slate-100 bg-white shadow-sm dark:bg-slate-950 dark:border-slate-800">
                  <h4 className="text-lg font-bold text-slate-900 mb-4 dark:text-white">Youth Speaker Bank</h4>
                  <p className="text-slate-500 text-sm mb-6 leading-relaxed dark:text-slate-400">
                    Are you a young expert looking for speaking roles? Register in our directory to be discovered by event organizers.
                  </p>
                  <Link 
                    to="/youth/speaker-bank" 
                    className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-slate-50 text-slate-900 font-bold hover:bg-slate-100 transition-colors dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
                  >
                    Join Speaker Bank <ArrowRight size={18} />
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

export default SpeakingOpportunitiesPage;
