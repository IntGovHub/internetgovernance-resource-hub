import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { 
  Calendar, 
  MapPin, 
  Coins, 
  Clock, 
  ExternalLink, 
  Search, 
  ArrowLeft, 
  Globe, 
  CheckCircle, 
  ChevronRight,
  Info,
  Sparkles
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import "./ConferencesPage.css";

interface EventItem {
  title: string;
  link: string;
  region: string;
  date: string;
  funding: string;
  deadline: string;
  hasFunding: boolean;
  month: string;
}

const CONFERENCES_DATA: EventItem[] = [
  {
    title: "Trinidad and Tobago Internet Governance Forum (TTIGF)",
    link: "https://igf.tt/",
    region: "Caribbean (Hybrid/Port of Spain)",
    date: "January 29–30, 2026",
    funding: "Limited (Local support usually available)",
    deadline: "Ended",
    hasFunding: false,
    month: "January 2026"
  },
  {
    title: "FIRST Technical Colloquium Paris",
    link: "https://www.first.org/events/colloquia/paris2026/",
    region: "Europe (Paris, France)",
    date: "February 9–10, 2026",
    funding: "No",
    deadline: "Ended",
    hasFunding: false,
    month: "February 2026"
  },
  {
    title: "FIRST Technical Colloquium Bangalore",
    link: "https://www.first.org/events/colloquia/bangalore2026/",
    region: "Asia (Bangalore, India)",
    date: "February 10–11, 2026",
    funding: "No",
    deadline: "Ended",
    hasFunding: false,
    month: "February 2026"
  },
  {
    title: "The International Conference on Digital Platform Governance 2026",
    link: "https://www.unesco.org/en/articles/international-conference-digital-platform-governance-2026",
    region: "Africa (Pretoria, South Africa)",
    date: "February 11-13, 2026",
    funding: "No",
    deadline: "Registration ongoing",
    hasFunding: false,
    month: "February 2026"
  },
  {
    title: "ICANN85 Community Forum",
    link: "https://meetings.icann.org/en/meetings/icann85/",
    region: "Asia (Mumbai, India)",
    date: "March 7–12, 2026",
    funding: "Yes (ICANN Fellowship Program & NextGen)",
    deadline: "Fellowship applications likely due Oct 2025",
    hasFunding: true,
    month: "March 2026"
  },
  {
    title: "IETF 125",
    link: "https://www.ietf.org/how/meetings/125/",
    region: "Asia (Shenzhen, China)",
    date: "March 14–20, 2026",
    funding: "Yes (ISOC Fellowships & Fee Waivers)",
    deadline: "Fellowships likely close Dec 2025",
    hasFunding: true,
    month: "March 2026"
  },
  {
    title: "ARIN 57 Public Meeting",
    link: "https://arin.swoogo.com/arin57?i=05nkimj-5O6pwCTLfL78JoLwEboWrUn8",
    region: "North America (Louisville, Kentucky & Online)",
    date: "April 19–22, 2026",
    funding: "Yes (Fellowship Program - Travel & Virtual)",
    deadline: "January 26, 2026 (Applications currently open!)",
    hasFunding: true,
    month: "April 2026"
  },
  {
    title: "FIRST Cyber Threat Intelligence Conference",
    link: "https://www.first.org/conference/firstcti26/",
    region: "Europe (Munich, Germany)",
    date: "April 21–23, 2026",
    funding: "No",
    deadline: "CFP likely opens Nov 2025",
    hasFunding: false,
    month: "April 2026"
  },
  {
    title: "RightsCon 2026",
    link: "https://www.rightscon.org/",
    region: "Africa (Lusaka, Zambia & Online)",
    date: "May 5–8, 2026",
    funding: "Yes (Travel Support & Registration Waivers)",
    deadline: "Travel support applications typically launch Sept 2025",
    hasFunding: true,
    month: "May 2026"
  },
  {
    title: "CPDP 2026 (Computers, Privacy and Data Protection)",
    link: "https://www.cpdpconferences.org/",
    region: "Europe (Brussels, Belgium)",
    date: "May 19–22, 2026",
    funding: "Selective (Scholarships for students/NGOs)",
    deadline: "Early bird registration ends March 2, 2026",
    hasFunding: true,
    month: "May 2026"
  },
  {
    title: "EuroDIG 2026 (European Dialogue on Internet Governance)",
    link: "https://www.eurodig.org/",
    region: "Europe (Brussels, Belgium)",
    date: "May 26–27, 2026",
    funding: "Yes (YouthDIG & Travel Support)",
    deadline: "YouthDIG applications usually open Jan 2026",
    hasFunding: true,
    month: "May 2026"
  },
  {
    title: "FIRSTCON26 (38th Annual FIRST Conference)",
    link: "https://www.first.org/conference/2026/",
    region: "North America (Denver, USA)",
    date: "June 14–19, 2026",
    funding: "No",
    deadline: "CFP usually closes Jan 2026",
    hasFunding: false,
    month: "June 2026"
  },
  {
    title: "The United Nations Graduate Study Program",
    link: "https://www.ungeneva.org/en/engage/students-graduates/graduate-study-programme",
    region: "Europe (Geneva, Switzerland)",
    date: "June 29th - July 10th, 2026",
    funding: "No",
    deadline: "February 20th, 2026",
    hasFunding: false,
    month: "June 2026"
  }
];

const ConferencesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredEvents = useMemo(() => {
    const query = searchQuery.toLowerCase();
    return CONFERENCES_DATA.filter(event => 
      event.title.toLowerCase().includes(query) ||
      event.region.toLowerCase().includes(query) ||
      event.month.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const groupedEvents = useMemo(() => {
    const groups: { [key: string]: EventItem[] } = {};
    filteredEvents.forEach(event => {
      if (!groups[event.month]) {
        groups[event.month] = [];
      }
      groups[event.month].push(event);
    });
    return groups;
  }, [filteredEvents]);

  const months = ["January 2026", "February 2026", "March 2026", "April 2026", "May 2026", "June 2026"];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="conferences-container"
    >
      <header className="conferences-header">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1540575861501-7ad05823c9f5?auto=format&fit=crop&q=80&w=2000" 
            alt="Conference Hall" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/80 to-indigo-950" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-200 text-xs font-bold mb-6">
              <Sparkles size={14} /> Global IG Calendar 2026
            </div>
            <h1 className="text-white text-5xl md:text-7xl font-black tracking-tight mb-6">
              Conferences & Events
            </h1>
            <p className="text-indigo-100/80 text-xl max-w-2xl mx-auto font-medium">
              Stay updated with major forums, summits, and policy gatherings in the Internet Governance ecosystem.
            </p>
          </motion.div>

          <div className="mt-12 max-w-2xl mx-auto relative group">
            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-indigo-300 group-focus-within:text-white transition-colors">
              <Search size={20} />
            </div>
            <input 
              type="text" 
              placeholder="Search events, regions, or dates..." 
              className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl py-5 pl-14 pr-6 text-white placeholder:text-indigo-200/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all dark:bg-slate-900/50 dark:border-slate-700/50"

              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </header>

      <main className="conferences-main">
        <div className="max-w-6xl mx-auto px-4">
          <div className="breadcrumb mb-12 flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400">
            <Link to="/" className="hover:text-indigo-600 dark:hover:text-indigo-400">Home</Link>
            <ChevronRight size={14} />
            <span className="text-slate-900 dark:text-white">Conferences & Events</span>
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
                      This curated list highlights major gatherings related to Internet Governance, Tech Policy, Cybersecurity, and Digital Rights. Use this to find opportunities to attend, speak, or submit proposals.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {["Internet Governance", "Tech & Digital Policy", "Cybersecurity & Privacy", "Digital Inclusion"].map(tag => (
                        <div key={tag} className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">

                          <CheckCircle size={16} className="text-indigo-500" /> {tag}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              <div className="space-y-16">
                {months.map(month => groupedEvents[month] && (
                  <div key={month} className="month-section">
                    <h2 className="month-title flex items-center gap-3 text-2xl font-black text-slate-900 mb-8 dark:text-white">

                      <Calendar className="text-indigo-600" size={28} /> {month}
                    </h2>
                    <div className="space-y-6">
                      {groupedEvents[month].map((event, idx) => (
                        <motion.div 
                          key={event.title}
                          layout
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="event-card group glass-card dark:before:bg-slate-900/50"

                        >
                          <div className="flex flex-col md:flex-row justify-between gap-6">
                            <div className="flex-1">
                              <h4 className="text-2xl font-black tracking-tight mb-4">
                                <a href={event.link} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors flex items-center gap-2 dark:text-white dark:hover:text-indigo-400">
                                  {event.title} <ExternalLink size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>

                              </h4>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                                <div className="flex items-start gap-3">
                                  <MapPin size={18} className="text-indigo-500 mt-0.5" />
                                  <div>
                                    <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Region</span>
                                    <span className="text-slate-700 font-medium dark:text-slate-300">{event.region}</span>

                                  </div>
                                </div>
                                <div className="flex items-start gap-3">
                                  <Clock size={18} className="text-indigo-500 mt-0.5" />
                                  <div>
                                    <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Date</span>
                                    <span className="text-slate-700 font-medium dark:text-slate-300">{event.date}</span>

                                  </div>
                                </div>
                                <div className="flex items-start gap-3">
                                  <Coins size={18} className="text-indigo-500 mt-0.5" />
                                  <div>
                                    <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Funding</span>
                                    <span className="text-slate-700 font-medium dark:text-slate-300">{event.funding}</span>

                                  </div>
                                </div>
                                <div className="flex items-start gap-3">
                                  <Calendar size={18} className="text-indigo-500 mt-0.5" />
                                  <div>
                                    <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Deadline</span>
                                    <span className="text-slate-900 font-bold dark:text-white">{event.deadline}</span>

                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-start md:items-end gap-4 min-w-[160px]">
                              {event.hasFunding && (
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-bold border border-green-100 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800">

                                  <CheckCircle size={14} /> Funding Available
                                </span>
                              )}
                              <a 
                                href={event.link} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="w-full md:w-auto px-6 py-3 rounded-xl bg-slate-900 text-white text-sm font-bold hover:bg-indigo-600 transition-all text-center dark:bg-indigo-600 dark:hover:bg-indigo-700"

                              >
                                Visit Site
                              </a>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <aside className="sticky top-32 space-y-8">
                <div className="p-8 rounded-[2rem] bg-indigo-600 text-white shadow-xl shadow-indigo-200 dark:shadow-indigo-900/20">
                  <h3 className="text-2xl font-black mb-4 dark:text-white">Contribute</h3>

                  <p className="text-indigo-100 mb-6 leading-relaxed">
                    Know an event that's missing? Help us keep the IG community informed.
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center gap-3 text-sm font-medium">
                      <div className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center text-xs">1</div>
                      Fork our GitHub repo
                    </li>
                    <li className="flex items-center gap-3 text-sm font-medium">
                      <div className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center text-xs">2</div>
                      Add event details
                    </li>
                    <li className="flex items-center gap-3 text-sm font-medium">
                      <div className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center text-xs">3</div>
                      Submit a Pull Request
                    </li>
                  </ul>
                  <Link 
                    to="/contributing" 
                    className="block w-full py-4 rounded-2xl bg-white text-indigo-600 text-center font-bold hover:bg-slate-50 transition-colors dark:bg-indigo-500 dark:text-white dark:hover:bg-indigo-400"
                  >
                    Learn How
                  </Link>

                </div>

                <div className="p-8 rounded-[2rem] border border-slate-100 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950">
                  <h4 className="text-lg font-bold text-slate-900 mb-4 dark:text-white">Quick Links</h4>

                  <div className="space-y-3">
                    <a href="https://intgovforum.org" target="_blank" className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-colors group dark:hover:bg-slate-900">
                      <span className="text-sm font-medium text-slate-600 group-hover:text-indigo-600 dark:text-slate-400 dark:group-hover:text-indigo-400">Global IGF</span>

                      <ChevronRight size={16} className="text-slate-300 group-hover:text-indigo-600" />
                    </a>
                    <a href="https://icann.org" target="_blank" className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-colors group dark:hover:bg-slate-900">
                      <span className="text-sm font-medium text-slate-600 group-hover:text-indigo-600 dark:text-slate-400 dark:group-hover:text-indigo-400">ICANN Meetings</span>

                      <ChevronRight size={16} className="text-slate-300 group-hover:text-indigo-600" />
                    </a>
                    <a href="https://isoc.org" target="_blank" className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-colors group dark:hover:bg-slate-900">
                      <span className="text-sm font-medium text-slate-600 group-hover:text-indigo-600 dark:text-slate-400 dark:group-hover:text-indigo-400">ISOC Events</span>

                      <ChevronRight size={16} className="text-slate-300 group-hover:text-indigo-600" />
                    </a>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </main>


    </motion.div>
  );
};

export default ConferencesPage;
