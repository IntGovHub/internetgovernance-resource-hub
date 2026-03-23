import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { 
  BookOpen, 
  FileText, 
  ClipboardList, 
  Coins, 
  Users, 
  Search, 
  ArrowLeft, 
  ChevronRight,
  Globe,
  Download,
  ExternalLink,
  Info,
  Sparkles
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import "./LearningToolkitsPage.css";

interface ToolkitItem {
  title: string;
  from: string;
  year?: string;
  description: string;
  type: "Guide" | "Template" | "Case Study" | "Toolkit";
  category: string;
  link: string;
}

const TOOLKITS_DATA: ToolkitItem[] = [
  {
    title: "Starting Your First Youth IGF: A Beginner's Guide",
    from: "Global Youth IGF Community",
    year: "2024",
    description: "A comprehensive walkthrough covering team building, venues, stakeholder engagement, and measuring impact.",
    type: "Guide",
    category: "Step-by-Step Guides",
    link: "#"
  },
  {
    title: "IGF Event Proposal Template",
    from: "Africa IGF",
    description: "Ready-to-use template for submitting event proposals to stakeholders or funders.",
    type: "Template",
    category: "Templates",
    link: "#"
  },
  {
    title: "Session Planning & Agenda Template",
    from: "European Youth IGF",
    description: "Structured template for organizing multi-track IGF events with sample timings.",
    type: "Template",
    category: "Templates",
    link: "#"
  },
  {
    title: "Building Kenya's First Youth IGF from Scratch",
    from: "Kenya Youth IGF",
    description: "Real-world account of launching a national Youth IGF with limited resources.",
    type: "Case Study",
    category: "Case Studies",
    link: "#"
  },
  {
    title: "Sample Grant Application for Youth IGF Events",
    from: "Latin America & Caribbean Youth IGF",
    description: "Successful grant application template including budget justification.",
    type: "Template",
    category: "Fundraising & Grants",
    link: "#"
  },
  {
    title: "Diversity & Inclusion Toolkit for IGF Events",
    from: "Youth IGF Global Initiative",
    description: "Best practices for ensuring diverse participation across gender, geography, and more.",
    type: "Toolkit",
    category: "Engagement & Outreach",
    link: "#"
  }
];

const LearningToolkitsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredToolkits = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    return TOOLKITS_DATA.filter(item => 
      item.title.toLowerCase().includes(query) ||
      item.from.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.type.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const categories = useMemo(() => {
    const cats = Array.from(new Set(TOOLKITS_DATA.map(item => item.category)));
    return cats;
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="toolkits-container"
    >
      <header className="toolkits-header">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=2000" 
            alt="Library" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-600/80 to-indigo-900/90" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-indigo-100 text-xs font-bold mb-6 backdrop-blur-sm">
              <Sparkles size={14} className="text-indigo-300" /> Knowledge Base
            </div>
            <h1 className="text-white text-5xl md:text-7xl font-black tracking-tight mb-6">
              Learning & Toolkits
            </h1>
            <p className="text-indigo-50/90 text-xl max-w-2xl mx-auto font-medium">
              Practical resources, guides, and templates curated from the global Internet Governance community.
            </p>
          </motion.div>

          <div className="mt-12 max-w-2xl mx-auto relative group">
            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-indigo-300 group-focus-within:text-white transition-colors">
              <Search size={20} />
            </div>
            <input 
              type="text" 
              placeholder="Search toolkits by keyword, region, or type..." 
              className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl py-5 pl-14 pr-6 text-white placeholder:text-indigo-200/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </header>

      <main className="toolkits-main">
        <div className="max-w-6xl mx-auto px-4">
          <div className="breadcrumb mb-12 flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400">
            <Link to="/" className="hover:text-indigo-600 dark:hover:text-indigo-400">Home</Link>
            <ChevronRight size={14} />
            <Link to="/youth" className="hover:text-indigo-600 dark:hover:text-indigo-400">Youth Zone</Link>
            <ChevronRight size={14} />
            <span className="text-slate-900 dark:text-white">Learning & Toolkits</span>
          </div>


          <section className="intro-card glass-card mb-16">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-indigo-50 text-indigo-600">
                <Info size={24} />
              </div>
               <div>
                 <h3 className="text-xl font-bold text-slate-900 mb-4 dark:text-white">Empowering Your Initiative</h3>
                 <p className="text-slate-600 leading-relaxed dark:text-slate-400">
                   Find step-by-step guides, session templates, and advocacy toolkits curated from the global Internet Governance community to help you build or scale your initiatives.
                 </p>
               </div>

            </div>
          </section>

          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400">
              {filteredToolkits.length} {filteredToolkits.length === 1 ? 'Resource' : 'Resources'} Found
            </h2>
          </div>

          <div className="space-y-16">
            {categories.map(category => {
              const itemsInCategory = filteredToolkits.filter(item => item.category === category);
              if (itemsInCategory.length === 0) return null;

              return (
                <div key={category} className="category-section">
                  <h2 className="category-title flex items-center gap-3 text-2xl font-black text-slate-900 mb-8 dark:text-white">

                    {category === "Step-by-Step Guides" && <BookOpen className="text-indigo-600" size={28} />}
                    {category === "Templates" && <FileText className="text-indigo-600" size={28} />}
                    {category === "Case Studies" && <ClipboardList className="text-indigo-600" size={28} />}
                    {category === "Fundraising & Grants" && <Coins className="text-indigo-600" size={28} />}
                    {category === "Engagement & Outreach" && <Users className="text-indigo-600" size={28} />}
                    {category}
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {itemsInCategory.map((item, idx) => (
                      <motion.article 
                        key={item.title}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="toolkit-card group glass-card"
                      >
                        <div className="flex flex-col h-full">
                          <div className="flex items-start justify-between mb-4">
                            <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-[10px] font-bold uppercase tracking-wider dark:bg-indigo-900/40 dark:text-indigo-300">

                              {item.type}
                            </span>
                            <div className="flex gap-2">
                              <button className="p-2 rounded-lg bg-slate-50 text-slate-400 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
                                <Download size={18} />
                              </button>
                            </div>
                          </div>
                          
                          <h4 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors dark:text-white dark:group-hover:text-indigo-400">
                            <a href={item.link} className="flex items-center gap-2">
                              {item.title}
                            </a>
                          </h4>

                          
                          <div className="space-y-2 mb-6">
                            <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">

                              <Globe size={14} className="text-indigo-400" />
                              <span className="font-medium">From:</span> {item.from}
                            </div>
                            {item.year && (
                               <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">

                                <Sparkles size={14} className="text-indigo-400" />
                                <span className="font-medium">Year:</span> {item.year}
                              </div>
                            )}
                          </div>
                          
                          <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow dark:text-slate-400">
                            {item.description}
                          </p>

                          
                          <div className="pt-6 border-t border-slate-100 mt-auto">
                            <a 
                              href={item.link} 
                              className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 hover:gap-3 transition-all"
                            >
                              Access Resource <ExternalLink size={14} />
                            </a>
                          </div>
                        </div>
                      </motion.article>
                    ))}
                  </div>
                </div>
              );
            })}

            {filteredToolkits.length === 0 && (
              <div className="py-20 text-center">
                <div className="mx-auto w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center text-slate-300 mb-6">
                  <Search size={40} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 dark:text-white">No resources found</h3>
                <p className="text-slate-500 mb-8 dark:text-slate-400">Try matching your search with a different keyword or region.</p>

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
            <Globe size={200} />
          </div>
          <div className="relative z-10 max-w-2xl">
            <h3 className="text-3xl font-black mb-6">Contribute to the Library</h3>
            <p className="text-slate-400 text-lg mb-8">
              Have a toolkit or guide that helped your local community? Share it with the global network.
            </p>
            <Link 
              to="/contributing" 
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-900/20"
            >
              Submit a Resource <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </div>


    </motion.div>
  );
};

export default LearningToolkitsPage;
