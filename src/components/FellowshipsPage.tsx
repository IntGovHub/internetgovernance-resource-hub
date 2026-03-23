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
  ChevronRight
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import "./FellowshipsPage.css";

const FellowshipsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const opportunities = [
    {
      month: "January 2026",
      items: [
        {
          title: "Internet Society Global Fellowship",
          org: "Internet Society (ISOC)",
          region: "Global",
          funding: "Full funding + travel",
          deadline: "January 31, 2026",
          link: "https://www.isoc.org/fellowship"
        },
        {
          title: "DiploFoundation Online Training",
          org: "DiploFoundation",
          region: "Global / Remote",
          funding: "Scholarships available",
          deadline: "January 20, 2026",
          link: "https://diplo.org/academy"
        }
      ]
    },
    {
      month: "February 2026",
      items: [
        {
          title: "ICANN Fellowship Program",
          org: "ICANN",
          region: "Global",
          funding: "Full + accommodation",
          deadline: "February 10, 2026",
          link: "https://www.icann.org/fellowships"
        },
        {
          title: "Forum on Digital Diplomacy Mentorship",
          org: "Forum on Digital Diplomacy",
          region: "Europe, Americas, Asia",
          funding: "Limited scholarships",
          deadline: "February 28, 2026",
          link: "https://www.forumdd.org/"
        }
      ]
    },
    {
      month: "March 2026",
      items: [
        {
          title: "Cybersecurity Research Initiative Scholarship",
          org: "CCRI",
          region: "North America",
          funding: "Up to $50,000",
          deadline: "March 15, 2026",
          link: "https://www.ccri.research/"
        },
        {
          title: "Mozilla Fellow in Internet Policy",
          org: "Mozilla Foundation",
          region: "Global",
          funding: "Stipend + support",
          deadline: "March 31, 2026",
          link: "https://www.mozilla.org/fellowships/"
        },
        {
          title: "IGF 2026 Fellowship Programme",
          org: "Internet Governance Forum (IGF) / UN DESA",
          region: "Global (Developing countries, LDCs, LLDCs, transitional economies)",
          funding: "IGF Trust Fund (travel, stipend, office facilities in Geneva)",
          deadline: "March 31, 2026",
          link: "https://www.intgovforum.org/en/content/igf-2026-fellowship-programme",
          description: "6-month fellowship cycle (May–November 2026). Apply with CV, motivation letter and nomination form via vacancies@intgovforum.org."
        }
      ]
    },
    {
      month: "April 2026",
      items: [
        {
          title: "ARTICLE 19 Youth Fellowship",
          org: "ARTICLE 19",
          region: "Global",
          funding: "Full support + mentoring",
          deadline: "April 30, 2026",
          link: "https://www.article19.org/"
        },
        {
          title: "ITU Fellowship Program",
          org: "ITU",
          region: "Global",
          funding: "Full fellowship",
          deadline: "April 15, 2026",
          link: "https://www.itu.int/scholarships"
        }
      ]
    },
    {
      month: "May 2026",
      items: [
        {
          title: "APC Global Fellowship",
          org: "Association for Progressive Communications (APC)",
          region: "Global, focus on Global South",
          funding: "Full funding",
          deadline: "May 31, 2026",
          link: "https://www.apc.org/"
        }
      ]
    },
    {
      month: "June 2026",
      items: [
        {
          title: "dotEveryone Digital Society Fellowship",
          org: "dotEveryone",
          region: "UK / Europe",
          funding: "Supported through grant",
          deadline: "June 30, 2026",
          link: "https://www.doteveryone.org.uk/"
        }
      ]
    },
    {
      month: "July 2026",
      items: [
        {
          title: "UN Global Internet Summit Scholar",
          org: "UN & Partner Organizations",
          region: "Global",
          funding: "Full sponsorship",
          deadline: "July 15, 2026",
          link: "https://www.ungis.org/"
        }
      ]
    }
  ];

  const filteredOpportunities = useMemo(() => {
    if (!searchQuery.trim()) return opportunities;
    const query = searchQuery.toLowerCase();
    
    return opportunities.map(section => ({
      ...section,
      items: section.items.filter(item => 
        item.title.toLowerCase().includes(query) ||
        item.org.toLowerCase().includes(query) ||
        item.region.toLowerCase().includes(query) ||
        (item.description && item.description.toLowerCase().includes(query))
      )
    })).filter(section => section.items.length > 0);
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
            alt="Education Banner" 
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-green-600/80 to-green-900/90" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <h1 className="text-white drop-shadow-2xl">
              <GraduationCap size={72} className="header-icon text-green-300" /> 
              Fellowships & Scholarships
            </h1>
            <p className="text-green-50/90">Access elite educational and professional development programs in Internet Governance</p>
          </motion.div>
          
          {/* Internal Search Bar */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="fellowships-search-wrapper"
          >
            <div className="relative max-w-2xl mx-auto mt-10">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60" size={20} />
              <input 
                type="text" 
                placeholder="Search fellowships, organizations, or regions..."
                className="fellowships-search-input"
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

      <main className="fellowships-main shadow-2xl">
        <div className="fellowships-breadcrumb dark:text-slate-400">
          <Link to="/" className="dark:text-indigo-400">Home</Link> <ChevronRight size={14} className="inline mx-1" /> <span className="dark:text-slate-200">Fellowships & Scholarships</span>
        </div>


        <div className="fellowships-intro">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-green-100 rounded-lg text-green-600">
              <Filter size={20} />
            </div>
            <h3 className="m-0">About This Section</h3>
          </div>
          <p className="mb-4 text-slate-600 dark:text-slate-400"><strong>Discover curated opportunities</strong> to advance your career in the digital policy landscape. We track programs focused on:</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
            <ul>
              <li><Check size={18} className="text-green-600" /> Internet Governance Excellence</li>
              <li><Check size={18} className="text-green-600" /> Tech Policy & Digital Rights</li>
            </ul>
            <ul>
              <li><Check size={18} className="text-green-600" /> Cybersecurity & Trust</li>
              <li><Check size={18} className="text-green-600" /> Emerging Leaders Development</li>
            </ul>
          </div>
        </div>

        <div className="flex items-center justify-between mb-8">
          <h2 className="fellowships-section-title m-0 border-0 pb-0">
            <Book size={32} className="inline mr-3 text-green-600" /> 
            {searchQuery ? `Search Results (${filteredOpportunities.reduce((acc, s) => acc + s.items.length, 0)})` : "Fellowships & Opportunities"}
          </h2>
        </div>

        <AnimatePresence mode="popLayout">
          {filteredOpportunities.length > 0 ? (
            filteredOpportunities.map((section, sIdx) => (
              <motion.div 
                key={section.month}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: sIdx * 0.05 }}
              >
                <h3 className="fellowships-month-title">
                  <Calendar size={24} className="inline mr-3 text-green-600" /> {section.month}
                </h3>
                <div className="space-y-6">
                  {section.items.map((item, iIdx) => (
                    <motion.div 
                      key={item.title} 
                      layout
                      className="opportunity-card group glass-card"
                    >
                      <div className="flex flex-col md:flex-row justify-between gap-6">
                        <div className="flex-1">
                          <div className="opportunity-title">
                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-2 text-2xl font-black tracking-tight">
                              {item.title} <ExternalLink size={18} className="opacity-0 group-hover:opacity-100 transition-opacity text-green-600" />
                            </a>
                          </div>
                          <div className="opportunity-details mt-4">
                            <div className="detail-item">
                              <Building size={18} className="text-green-600" />
                              <span className="detail-label">Organization:</span>
                              <span className="detail-text">{item.org}</span>
                            </div>
                            <div className="detail-item">
                              <MapPin size={18} className="text-green-600" />
                              <span className="detail-label">Region:</span>
                              <span className="detail-text">{item.region}</span>
                            </div>
                            <div className="detail-item">
                              <Coins size={18} className="text-green-600" />
                              <span className="detail-label">Funding:</span>
                              <span className="detail-text">{item.funding}</span>
                            </div>
                            <div className="detail-item">
                              <Clock size={18} className="text-green-600" />
                              <span className="detail-label">Deadline:</span>
                              <span className="detail-text font-bold text-slate-900 dark:text-white">{item.deadline}</span>

                            </div>
                          </div>
                          {item.description && (
                            <p className="mt-4 text-slate-500 text-sm leading-relaxed bg-slate-50 p-3 rounded-lg border-l-4 border-slate-200 dark:bg-slate-900/50 dark:border-slate-700 dark:text-slate-400">
                              {item.description}
                            </p>

                          )}
                        </div>
                        
                        <div className="flex flex-col items-start md:items-end gap-4 min-w-[180px]">
                          <span className="funding-badge">
                            <CheckCircle size={16} /> Funding Available
                          </span>
                          <a 
                            href={item.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="apply-btn w-full text-center m-0"
                          >
                            Apply Now
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
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
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">No opportunities found</h3>
              <p className="text-slate-500 mt-2 dark:text-slate-400">Try adjusting your search terms or filters.</p>

              <button 
                onClick={() => setSearchQuery("")}
                className="mt-6 text-green-600 font-bold hover:underline"
              >
                Clear all searches
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="contribute-box">
          <h3><CheckCircle size={24} /> How to Contribute</h3>
          <p className="text-gray-600 mb-4">Help us keep this list updated:</p>
          <ul className="list-disc ml-6 text-gray-600 space-y-2 dark:text-slate-400">
            <li>Submit new opportunities via <Link to="/contributing" className="text-green-600 underline dark:text-green-400">GitHub Pull Request</Link></li>
            <li>Report expired programs via <Link to="/contributing" className="text-green-600 underline dark:text-green-400">GitHub Issue</Link></li>
            <li>Learn more on our <Link to="/contributing" className="text-green-600 underline font-bold dark:text-green-400">Contributing Page</Link></li>
          </ul>

        </div>
      </main>


    </motion.div>
  );
};

export default FellowshipsPage;
