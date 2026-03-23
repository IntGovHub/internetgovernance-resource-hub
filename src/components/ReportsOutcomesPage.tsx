import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { 
  FileText, 
  Search, 
  ChevronRight, 
  MapPin, 
  Users, 
  FileDigit, 
  Quote, 
  Gavel, 
  Archive,
  Globe,
  ExternalLink,
  Info,
  Sparkles,
  CalendarDays
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import "./ReportsOutcomesPage.css";

interface Report {
  title: string;
  year: string;
  location?: string;
  organizer?: string;
  description: string;
  links: { label: string; url: string; icon: React.ReactNode }[];
  isArchive?: boolean;
}

const REPORTS_DATA: Report[] = [
  {
    title: "Kenya Youth IGF | November 2024",
    year: "2024",
    location: "Nairobi, Kenya",
    organizer: "Kenya Youth IGF Team",
    description: "Key recommendations on youth data protection were submitted to the national IGF multistakeholder group.",
    links: [
      { label: "Outcome Document", url: "#", icon: <FileDigit size={14} /> },
      { label: "Full Report", url: "#", icon: <FileText size={14} /> },
      { label: "Policy Recommendations", url: "#", icon: <Gavel size={14} /> }
    ]
  },
  {
    title: "Asia-Pacific Youth IGF | August 2024",
    year: "2024",
    location: "Bangkok, Thailand",
    description: "Produced a youth statement delivered at the main APrIGF event in Bangkok.",
    links: [
      { label: "Youth Statement", url: "#", icon: <Quote size={14} /> },
      { label: "Session Reports", url: "#", icon: <FileText size={14} /> }
    ]
  },
  {
    title: "Ghana National IGF | October 2023",
    year: "2023",
    location: "Accra, Ghana",
    description: "Multi-stakeholder event addressing cybersecurity, digital identity, and e-governance.",
    links: [
      { label: "Outcome Document", url: "#", icon: <FileDigit size={14} /> },
      { label: "Youth Track Report", url: "#", icon: <FileText size={14} /> }
    ]
  },
  {
    title: "European Youth IGF | June 2023",
    year: "2023",
    location: "Brussels, Belgium",
    description: "Youth-led discussions on platform regulation and digital rights.",
    links: [
      { label: "Youth Messages", url: "#", icon: <Quote size={14} /> },
      { label: "Full Report", url: "#", icon: <FileText size={14} /> }
    ]
  },
  {
    title: "Africa IGF Reports Archive",
    year: "Regional Collections",
    description: "Collection of outcome documents from events across Africa from 2020-2024.",
    links: [
      { label: "Access Archive", url: "#", icon: <Archive size={14} /> }
    ],
    isArchive: true
  },
  {
    title: "Latin America & Caribbean Youth IGF Archives",
    year: "Regional Collections",
    description: "Comprehensive archive of Youth IGF reports from the LAC region.",
    links: [
      { label: "Access Archive", url: "#", icon: <Archive size={14} /> }
    ],
    isArchive: true
  }
];

const ReportsOutcomesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredReports = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    return REPORTS_DATA.filter(report => 
      report.title.toLowerCase().includes(query) ||
      report.description.toLowerCase().includes(query) ||
      (report.location && report.location.toLowerCase().includes(query)) ||
      (report.organizer && report.organizer.toLowerCase().includes(query))
    );
  }, [searchQuery]);

  const years = useMemo(() => {
    const uniqueYears = Array.from(new Set(REPORTS_DATA.map(r => r.year)));
    // Sort years descending, but keep "Regional Collections" at the end
    return uniqueYears.sort((a, b) => {
      if (a === "Regional Collections") return 1;
      if (b === "Regional Collections") return -1;
      return b.localeCompare(a);
    });
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="reports-container"
    >
      <header className="reports-header">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bbbda5366391?auto=format&fit=crop&q=80&w=2000" 
            alt="Data Charts" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/80 to-slate-950" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-indigo-100 text-xs font-bold mb-6 backdrop-blur-sm">
              <FileText size={14} className="text-indigo-300" /> Outcome Documents
            </div>
            <h1 className="text-white text-5xl md:text-7xl font-black tracking-tight mb-6">
              Reports & Outcomes
            </h1>
            <p className="text-indigo-50/90 text-xl max-w-2xl mx-auto font-medium">
              Outcome documents and takeaways from Internet Governance events worldwide.
            </p>
          </motion.div>

          <div className="mt-12 max-w-2xl mx-auto relative group">
            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-indigo-300 group-focus-within:text-white transition-colors">
              <Search size={20} />
            </div>
            <input 
              type="text" 
              placeholder="Search reports by country, city, or event..." 
              className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl py-5 pl-14 pr-6 text-white placeholder:text-indigo-200/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </header>

      <main className="reports-main">
        <div className="max-w-6xl mx-auto px-4">
          <div className="breadcrumb mb-12 flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400">
            <Link to="/" className="hover:text-indigo-600 dark:hover:text-indigo-400">Home</Link>
            <ChevronRight size={14} />
            <Link to="/youth" className="hover:text-indigo-600 dark:hover:text-indigo-400">Youth Zone</Link>
            <ChevronRight size={14} />
            <span className="text-slate-900 dark:text-white">Reports & Outcomes</span>
          </div>


          <section className="intro-card glass-card mb-16">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-indigo-50 text-indigo-600">
                <Info size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 dark:text-white">About This Section</h3>
                <p className="text-slate-600 leading-relaxed dark:text-slate-400">
                  Explore reports, youth statements, and policy recommendations from past gatherings to learn from international best practices and community impact. These documents represent the collective voice of the IG community.
                </p>
              </div>
            </div>
          </section>

          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400">
              {filteredReports.length} {filteredReports.length === 1 ? 'Report' : 'Reports'} Found
            </h2>
          </div>

          <div className="space-y-16">
            {years.map(year => {
              const reportsInYear = filteredReports.filter(r => r.year === year);
              if (reportsInYear.length === 0) return null;

              return (
                <div key={year} className="year-section">
                  <h2 className="year-title flex items-center gap-3 text-2xl font-black text-slate-900 mb-8 dark:text-white">

                    {year === "Regional Collections" ? <Globe className="text-indigo-600" size={28} /> : <CalendarDays className="text-indigo-600" size={28} />}
                    {year === "Regional Collections" ? year : `${year} Reports`}
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {reportsInYear.map((report, idx) => (
                      <motion.article 
                        key={report.title}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`report-card group glass-card ${report.isArchive ? 'border-l-4 border-l-indigo-500' : ''}`}
                      >
                        <div className="flex flex-col h-full">
                          <h4 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors dark:text-white dark:group-hover:text-indigo-400">
                            {report.title}
                          </h4>

                          
                          <div className="space-y-2 mb-6">
                            {report.location && (
                              <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">

                                <MapPin size={14} className="text-indigo-400" />
                                <span className="font-medium">Location:</span> {report.location}
                              </div>
                            )}
                            {report.organizer && (
                              <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                                <Users size={14} className="text-indigo-400" />
                                <span className="font-medium">Organizer:</span> {report.organizer}
                              </div>
                            )}
                          </div>
                          
                          <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow dark:text-slate-400">
                            {report.description}
                          </p>

                          
                          <div className="pt-6 border-t border-slate-100 mt-auto flex flex-wrap gap-3">
                            {report.links.map((link, lIdx) => (
                              <a 
                                key={lIdx}
                                href={link.url} 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 text-xs font-bold text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 transition-all border border-slate-100 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700 dark:hover:bg-indigo-900/40"
                              >
                                {link.icon} {link.label}
                              </a>

                            ))}
                          </div>
                        </div>
                      </motion.article>
                    ))}
                  </div>
                </div>
              );
            })}

            {filteredReports.length === 0 && (
              <div className="py-20 text-center">
                <div className="mx-auto w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center text-slate-300 mb-6">
                  <Search size={40} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 dark:text-white">No reports found</h3>
                <p className="text-slate-500 mb-8 dark:text-slate-400">Try matching your search with country, city, or event name.</p>

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
        <div className="p-12 rounded-[3rem] bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-10">
            <FileText size={200} />
          </div>
          <div className="relative z-10 max-w-2xl">
            <h3 className="text-3xl font-black mb-6">Submit an Outcome Document</h3>
            <p className="text-slate-400 text-lg mb-8">
              Did your local or regional IGF just conclude? Help us keep the hub updated by sharing your outcome documents and reports.
            </p>
            <Link 
              to="/contributing" 
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-900/20"
            >
              Learn How to Contribute <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </div>


    </motion.div>
  );
};

export default ReportsOutcomesPage;
