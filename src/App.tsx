/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  Globe,
  Users,
  Calendar,
  GraduationCap,
  Mic2,
  Briefcase,
  Coins,
  Trophy,
  UserCircle,
  Zap,
  Heart,
  ArrowRight,
  Menu,
  X,
  ChevronRight,
  Search,
  ExternalLink,
  Sparkles,
  Sun,
  Moon
} from "lucide-react";
import { useTheme } from "./context/ThemeContext";

import React, { useState, useEffect, useMemo } from "react";
import FellowshipsPage from "./components/FellowshipsPage";
import ContributingPage from "./components/ContributingPage";
import ConferencesPage from "./components/ConferencesPage";
import LearningToolkitsPage from "./components/LearningToolkitsPage";
import PersonalitiesPage from "./components/PersonalitiesPage";
import ReportsOutcomesPage from "./components/ReportsOutcomesPage";
import JobsInternshipsPage from "./components/JobsInternshipsPage";
import SpeakerBankPage from "./components/SpeakerBankPage";
import SuccessStoriesPage from "./components/SuccessStoriesPage";
import SpeakingOpportunitiesPage from "./components/SpeakingOpportunitiesPage";
import FundingPage from "./components/FundingPage";

// --- Data ---

const ALL_RESOURCES = [
  {
    category: "Conferences & Events",
    path: "/resources/conferences",
    items: [
      { name: "Global IGF", details: "The annual Internet Governance Forum convened by the UN.", link: "https://intgovforum.org" },
      { name: "EuroDIG", details: "The European Dialogue on Internet Governance.", link: "https://eurodig.org" },
      { name: "AfIGF", details: "The African Internet Governance Forum.", link: "https://afigf.africa" },
      { name: "APrIGF", details: "The Asia Pacific Regional Internet Governance Forum.", link: "https://aprigf.asia" },
    ]
  },
  {
    category: "Fellowships & Scholarships",
    path: "/resources/fellowships",
    items: [
      { name: "ISOC Fellowship", details: "Internet Society fellowship to the IGF.", link: "https://internetsociety.org" },
      { name: "ICANN Fellowship", details: "ICANN's program for community engagement.", link: "https://icann.org" },
      { name: "NextGen@ICANN", details: "Program for university students to engage with ICANN.", link: "https://icann.org" },
    ]
  },
  {
    category: "Speaking Opportunities",
    path: "/resources/speaking",
    items: [
      { name: "IGF Call for Workshops", details: "Submit your workshop proposals for the annual IGF.", link: "https://intgovforum.org" },
      { name: "RightsCon Call for Proposals", details: "Share your expertise at the leading summit on human rights in the digital age.", link: "https://rightscon.org" },
    ]
  },
  {
    category: "Jobs & Internships",
    path: "/resources/jobs",
    items: [
      { name: "ISOC Careers", details: "Work with the Internet Society.", link: "https://internetsociety.org/careers" },
      { name: "ICANN Jobs", details: "Join the team managing the internet's unique identifiers.", link: "https://icann.org/careers" },
      { name: "UN Careers", details: "Explore digital policy roles within the United Nations.", link: "https://careers.un.org" },
    ]
  },
  {
    category: "Funding Opportunities",
    path: "/resources/funding",
    items: [
      { name: "Beyond the Net", details: "ISOC grants for community-led projects.", link: "https://internetsociety.org/grants" },
      { name: "APNIC Foundation", details: "Grants for internet development in the Asia Pacific.", link: "https://apnicfoundation.org" },
    ]
  },
  {
    category: "Success Stories",
    path: "/resources/success-stories",
    items: [
      { name: "Youth Impact", details: "How young leaders influenced the Global Digital Compact." },
      { name: "Community Networks", details: "Success stories of bridging the digital divide." },
    ]
  },
  {
    category: "IG Personalities",
    path: "/resources/personalities",
    items: [
      { name: "Vint Cerf", details: "One of the 'fathers of the internet'." },
      { name: "Doreen Bogdan-Martin", details: "Secretary-General of the ITU." },
    ]
  },
  {
    category: "Youth Zone",
    path: "/youth",
    items: [
      { name: "Global Youth IGF", details: "The youth track of the global IGF.", link: "https://intgovforum.org/youth" },
      { name: "Regional Youth IGFs", details: "Find your local youth chapter." },
      { name: "Youth Speaker Directory", details: "Find young experts for your next event." },
      { name: "IGF Toolkit", details: "Official resources for starting a national/regional IGF.", link: "https://intgovforum.org" },
    ]
  }
];

// --- Components ---

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();



  return (
    <nav className="fixed top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/80">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-200">
            <Globe size={24} />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">IntGovHub</span>

        </Link>

        <div className="hidden md:flex md:items-center md:gap-8">
          <Link to="/" className={`text-sm font-medium transition-colors hover:text-indigo-600 ${location.pathname === '/' ? 'text-indigo-600' : 'text-slate-600 dark:text-slate-400 dark:hover:text-indigo-400'}`}>Home</Link>
          <Link to="/#resources" className={`text-sm font-medium transition-colors hover:text-indigo-600 ${location.hash === '#resources' ? 'text-indigo-600' : 'text-slate-600 dark:text-slate-400 dark:hover:text-indigo-400'}`}>Resources</Link>
          <Link to="/youth" className={`text-sm font-medium transition-colors hover:text-indigo-600 ${location.pathname.startsWith('/youth') ? 'text-indigo-600' : 'text-slate-600 dark:text-slate-400 dark:hover:text-indigo-400'}`}>Youth Zone</Link>
          <Link to="/about" className={`text-sm font-medium transition-colors hover:text-indigo-600 ${location.pathname === '/about' ? 'text-indigo-600' : 'text-slate-600 dark:text-slate-400 dark:hover:text-indigo-400'}`}>About</Link>

          <button className="rounded-full bg-indigo-600 px-6 py-2 text-sm font-semibold text-white transition-all hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-200 active:scale-95">
            Join Ecosystem
          </button>

          <button
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-all hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 active:scale-95"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>


        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-600 transition-all dark:bg-slate-800 dark:text-slate-400"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button
            className="rounded-lg p-2 text-slate-600 dark:text-slate-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-slate-100 bg-white dark:border-slate-800 dark:bg-slate-950 md:hidden"

          >
            <div className="flex flex-col gap-4 p-4">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-sm font-medium text-slate-600 dark:text-slate-400">Home</Link>
              <Link to="/#resources" onClick={() => setIsMenuOpen(false)} className="text-sm font-medium text-slate-600 dark:text-slate-400">Resources</Link>
              <Link to="/youth" onClick={() => setIsMenuOpen(false)} className="text-sm font-medium text-slate-600 dark:text-slate-400">Youth Zone</Link>
              <Link to="/about" onClick={() => setIsMenuOpen(false)} className="text-sm font-medium text-slate-600 dark:text-slate-400">About</Link>

              <button className="w-full rounded-full bg-indigo-600 py-3 text-sm font-semibold text-white">
                Join Ecosystem
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => (
  <footer className="border-t border-slate-100 bg-white py-8 sm:py-12 dark:border-slate-800 dark:bg-slate-950">

    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white">
              <Globe size={18} />
            </div>
            <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">IntGovHub</span>

          </div>
          <p className="mt-4 max-w-md text-sm leading-6 text-slate-400">
            The Internet Governance Resource Hub is dedicated to fostering a more inclusive and informed digital governance landscape. Join us in shaping the future of the internet.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">Resources</h4>

          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li><Link to="/resources/conferences" className="hover:text-indigo-400 transition-colors">Events</Link></li>
            <li><Link to="/resources/fellowships" className="hover:text-indigo-400 transition-colors">Fellowships</Link></li>
            <li><Link to="/resources/jobs" className="hover:text-indigo-400 transition-colors">Jobs</Link></li>
            <li><Link to="/resources/funding" className="hover:text-indigo-400 transition-colors">Funding</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">Community</h4>

          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li><Link to="/youth" className="hover:text-indigo-400 transition-colors">Youth IGF</Link></li>
            <li><Link to="/youth/speaker-bank" className="hover:text-indigo-400 transition-colors">Speaker Bank</Link></li>
            <li><Link to="/contributing" className="hover:text-indigo-400 transition-colors">Contributing</Link></li>
            <li><Link to="/about" className="hover:text-indigo-400 transition-colors">Contact Us</Link></li>
          </ul>
        </div>
      </div>
      <div className="mt-10 border-t border-slate-800 pt-6 text-center">
        <p className="text-xs text-slate-500">
          &copy; {new Date().getFullYear()} Internet Governance Resource Hub. All rights reserved.
          <br />
          <a href="#" className="text-indigo-400 hover:text-indigo-300 transition-colors mt-1 inline-block">CC0 1.0 Universal License</a>
        </p>
      </div>
    </div>
  </footer>
);

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

// --- Pages ---

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const resources = [
    { icon: Calendar, title: "Conferences & Events", path: "/resources/conferences", description: "Stay updated on global and regional IG forums." },
    { icon: GraduationCap, title: "Fellowships & Scholarships", path: "/resources/fellowships", description: "Opportunities to learn and grow in the IG field." },
    { icon: Mic2, title: "Speaking Opportunities", path: "/resources/speaking", description: "Share your voice at international governance events." },
    { icon: Briefcase, title: "Jobs & Internships", path: "/resources/jobs", description: "Build your career in the internet governance ecosystem." },
    { icon: Coins, title: "Funding Opportunities", path: "/resources/funding", description: "Grants and support for your IG projects." },
    { icon: Trophy, title: "Success Stories", path: "/resources/success-stories", description: "Inspiring journeys from the IG community." },
    { icon: UserCircle, title: "IG Personalities", path: "/resources/personalities", description: "Meet the leaders shaping the future of the web." },
  ];

  const filteredResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase();
    const results: any[] = [];

    ALL_RESOURCES.forEach(cat => {
      cat.items.forEach(item => {
        if (
          item.name.toLowerCase().includes(query) ||
          item.details.toLowerCase().includes(query) ||
          cat.category.toLowerCase().includes(query)
        ) {
          results.push({ ...item, category: cat.category, path: cat.path });
        }
      });
    });
    return results;
  }, [searchQuery]);

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section
        className="relative pt-32 pb-20 overflow-hidden lg:pt-48 lg:pb-32 min-h-[80vh] flex items-center bg-transparent"
        style={{
          backgroundImage: "url('/images/heroimage.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-white/1 backdrop-blur-sm dark:bg-black/1" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/60 to-white dark:via-slate-950/60 dark:to-slate-950" />

        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-1.5 text-xs font-bold text-indigo-600 ring-1 ring-inset ring-indigo-600/20 dark:bg-indigo-950/30 dark:text-indigo-400 dark:ring-indigo-400/20"
            >

              <Sparkles size={14} /> Internet Governance Resource Hub
            </motion.div>
            <h1 className="mt-8 text-5xl font-black tracking-tight text-slate-900 sm:text-7xl lg:text-8xl drop-shadow-sm dark:text-white">

              Shape the <br />
              <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Digital Future</span>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-slate-600 font-medium drop-shadow-sm dark:text-slate-400">

              Your central gateway to the Internet Governance ecosystem. Find events, fellowships, jobs, and join the global movement shaping our digital world.
            </p>

            {/* Search Bar */}
            <div className="mx-auto mt-12 max-w-2xl drop-shadow-xl relative z-20">
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none text-slate-400 group-focus-within:text-indigo-600 transition-colors">
                  <Search size={20} />
                </div>
                <input
                  type="text"
                  placeholder="Search for fellowships, events, jobs..."
                  className="block w-full rounded-2xl border-0 bg-white py-5 pl-14 pr-4 text-slate-900 shadow-2xl shadow-indigo-100 ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg transition-all dark:bg-slate-900 dark:text-white dark:shadow-none dark:ring-slate-800 dark:placeholder:text-slate-500"

                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Search Results */}
            <AnimatePresence>
              {searchQuery && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="mx-auto mt-6 max-w-2xl text-left"
                >
                  <div className="rounded-2xl border border-slate-100 bg-white/80 backdrop-blur-xl p-4 shadow-2xl dark:border-slate-800 dark:bg-slate-900/80">

                    <p className="mb-4 px-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                      {filteredResults.length} Results for "{searchQuery}"
                    </p>
                    <div className="max-h-[400px] overflow-y-auto space-y-2 pr-2 custom-scrollbar">
                      {filteredResults.length > 0 ? (
                        filteredResults.map((result, idx) => (
                          <Link
                            key={idx}
                            to={result.path}
                            className="block rounded-xl p-4 transition-colors hover:bg-indigo-50 dark:hover:bg-indigo-900/20 group"

                          >
                            <div className="flex items-center justify-between">
                              <h4 className="font-bold text-slate-900 group-hover:text-indigo-600 dark:text-slate-200 dark:group-hover:text-indigo-400">{result.name}</h4>

                              <span className="text-[10px] font-bold uppercase tracking-tight text-indigo-500 bg-indigo-50 px-2 py-1 rounded-md dark:bg-indigo-950/50 dark:text-indigo-400">

                                {result.category}
                              </span>
                            </div>
                            <p className="mt-1 text-sm text-slate-500 line-clamp-1 dark:text-slate-400">{result.details}</p>

                          </Link>
                        ))
                      ) : (
                        <div className="py-8 text-center text-slate-400">
                          No resources found matching your search.
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {!searchQuery && (
              <div className="mt-12 flex items-center justify-center gap-x-6">
                <Link to="/#resources" className="rounded-full bg-indigo-600 px-8 py-4 text-base font-bold text-white shadow-xl shadow-indigo-200 transition-all hover:bg-indigo-700 hover:-translate-y-1 active:scale-95">
                  Explore Resources
                </Link>
                <Link to="/about" className="flex items-center gap-2 text-base font-bold leading-6 text-slate-900 transition-colors hover:text-indigo-600 dark:text-white dark:hover:text-indigo-400">

                  Learn more <ArrowRight size={18} />
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section id="resources" className="bg-slate-50 py-24 sm:py-32 dark:bg-slate-900/50">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl dark:text-white">Key Resources</h2>

            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
              Everything you need to navigate and contribute to the IG landscape.
            </p>

          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {resources.map((resource, index) => (
              <Link
                key={resource.title}
                to={resource.path}
                className="group relative flex flex-col items-start rounded-[2rem] border border-slate-200 bg-white p-10 transition-all hover:border-indigo-300 hover:shadow-2xl hover:shadow-indigo-100 hover:-translate-y-2 dark:border-slate-800 dark:bg-slate-950 dark:hover:shadow-indigo-900/10"

              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 transition-all group-hover:bg-indigo-600 group-hover:text-white group-hover:rotate-6 dark:bg-indigo-950/20 dark:text-indigo-400 dark:group-hover:bg-indigo-600 dark:group-hover:text-white">

                  <resource.icon size={32} />
                </div>
                <h3 className="mt-8 text-2xl font-black text-slate-900 dark:text-white">{resource.title}</h3>

                <p className="mt-4 text-slate-600 leading-relaxed dark:text-slate-400">{resource.description}</p>

                <div className="mt-8 flex items-center gap-2 text-sm font-bold text-indigo-600 transition-all group-hover:translate-x-2">
                  View details <ChevronRight size={18} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

const ResourcePage = ({ title, description, items }: { title: string, description: string, items: any[] }) => (
  <PageWrapper>
    <section className="pt-32 pb-20 lg:pt-48">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl dark:text-white">{title}</h1>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">{description}</p>

        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <div key={i} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-950">

              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-200">{item.name}</h3>

              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{item.details}</p>

              {item.link && (
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 hover:underline">
                  Learn more <ArrowRight size={14} />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  </PageWrapper>
);

const YouthZonePage = () => {
  const youthZone = [
    { title: "Learning & Toolkits", description: "Practical resources, guides, and templates for Internet Governance.", path: "/youth/learning-toolkits" },
    { title: "Speaker Bank", description: "A platform for young voices to be heard.", path: "/youth/speaker-bank" },
    { title: "Start Your Youth IGF", description: "Step-by-step guide to launching a local chapter.", path: "/youth/start-youth-igf" },
    { title: "Reports & Outcomes", description: "Key takeaways from youth-led governance sessions.", path: "/youth/reports" },
  ];

  return (
    <PageWrapper>
      <section className="pt-32 pb-20 lg:pt-48">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div>
              <span className="text-sm font-bold tracking-widest text-indigo-600 uppercase dark:text-indigo-400">Youth IGF Zone</span>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl dark:text-white">Empowering the Next Generation</h2>

              <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">

                The Youth Internet Governance Forum (Youth IGF) movement is a global initiative to involve young people in the internet governance dialogue.
              </p>
              <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
                {youthZone.map((item) => (
                  <Link key={item.title} to={item.path} className="flex flex-col gap-2 group">
                    <h4 className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors dark:text-slate-200 dark:group-hover:text-indigo-400">{item.title}</h4>

                    <p className="text-sm text-slate-600 dark:text-slate-400">{item.description}</p>

                  </Link>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-3xl bg-indigo-100">
                <img
                  src="/images/youthimage.jpg"
                  alt="Youth IGF"
                  className="h-full w-full object-cover mix-blend-multiply opacity-80"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

const AboutPage = () => (
  <PageWrapper>
    <section className="pt-32 pb-20 lg:pt-48">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl dark:text-white">About IntGovHub</h1>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            The Internet Governance Resource Hub (IntGovHub) is a community-driven platform designed to centralize and simplify access to key resources in the Internet Governance ecosystem.
          </p>

          <div className="mt-12 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-200">Our Mission</h3>

              <p className="mt-4 text-slate-600 dark:text-slate-400">
                To foster a more inclusive and informed digital governance landscape by providing a gateway for students, professionals, and policy makers to engage with the global IG movement.
              </p>

            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-200">Get Involved</h3>

              <p className="mt-4 text-slate-600 dark:text-slate-400">
                IntGovHub is a community-driven project. We welcome contributions from everyone.
                Learn how you can <Link to="/contributing" className="text-indigo-600 font-bold hover:underline dark:text-indigo-400">contribute to the hub</Link>.
              </p>

            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-200">Our Principles</h3>

              <ul className="mt-4 space-y-4 text-slate-600 dark:text-slate-400">

                <li className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-900/40 dark:text-indigo-400">
                    <Zap size={12} />
                  </div>
                  <span><strong className="dark:text-white">Open & Collaborative:</strong> Built on multi-stakeholder participation.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-900/40 dark:text-indigo-400">
                    <Heart size={12} />
                  </div>
                  <span><strong className="dark:text-white">For Everyone:</strong> Tailored resources for all levels of expertise.</span>
                </li>

              </ul>
            </div>

            <div className="pt-12 border-t border-slate-100 dark:border-slate-800">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 dark:text-white">Maintainers & Authors</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: "Lily Botsyoe", link: "https://github.com/Botsyoelily" },
                  { name: "Abigail Mesrenyame Dogbe", link: "https://github.com/mesrenyamedogbe" },
                  { name: "Shadrack M.K. Inusah", link: "https://github.com/KojoShaddy" },
                  { name: "Yao Amevi A. Sossou", link: "https://github.com/soyames" }
                ].map(author => (
                  <a 
                    key={author.name}
                    href={author.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-md hover:border-indigo-100 transition-all group dark:bg-slate-900/50 dark:border-slate-800"
                  >
                    <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold group-hover:bg-indigo-600 group-hover:text-white transition-all">
                      {author.name.charAt(0)}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-slate-900 dark:text-white leading-tight">{author.name}</span>
                      <span className="text-xs text-slate-500 group-hover:text-indigo-600 transition-colors">GitHub Profile</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </PageWrapper>
);

// --- Main App ---

const MainContent = () => {
  const { theme } = useTheme();
  const location = useLocation();


  // Scroll to top on route change OR to hash if present
  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen bg-white transition-colors duration-300 font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900 dark:bg-slate-950 dark:text-slate-50 dark:selection:bg-indigo-900/30 dark:selection:text-indigo-200">

      <Navbar />

      <main>
        <AnimatePresence mode="wait">
          {/* @ts-ignore - key is required for AnimatePresence to detect route changes */}
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/youth" element={<YouthZonePage />} />
            <Route path="/youth/learning-toolkits" element={<LearningToolkitsPage />} />
            <Route path="/youth/reports" element={<ReportsOutcomesPage />} />
            <Route path="/community/personalities" element={<PersonalitiesPage />} />
            <Route path="/contributing" element={<ContributingPage />} />

            {/* Resource Sub-pages */}
            <Route path="/resources/conferences" element={<ConferencesPage />} />
            <Route path="/resources/fellowships" element={<FellowshipsPage />} />
            <Route path="/resources/speaking" element={<SpeakingOpportunitiesPage />} />
            <Route path="/resources/jobs" element={<JobsInternshipsPage />} />
            <Route path="/resources/funding" element={<FundingPage />} />
            <Route path="/resources/success-stories" element={<SuccessStoriesPage />} />
            <Route path="/resources/personalities" element={<PersonalitiesPage />} />

            {/* Youth Zone Sub-pages */}
            <Route path="/youth/get-involved" element={
              <ResourcePage
                title="Get Involved"
                description="Join the global Youth IGF movement and make an impact."
                items={[
                  { name: "Global Youth IGF", details: "The youth track of the global IGF.", link: "https://intgovforum.org/youth" },
                  { name: "Regional Youth IGFs", details: "Find your local youth chapter." },
                ]}
              />
            } />
            <Route path="/youth/speaker-bank" element={<SpeakerBankPage />} />
            <Route path="/youth/start-youth-igf" element={
              <ResourcePage
                title="Start Your Youth IGF"
                description="Step-by-step guide to launching a local chapter."
                items={[
                  { name: "IGF Toolkit", details: "Official resources for starting a national/regional IGF.", link: "https://intgovforum.org" },
                  { name: "Mentorship Program", details: "Get guidance from experienced IG organizers." },
                ]}
              />
            } />
            <Route path="/youth/reports" element={<ReportsOutcomesPage />} />

            {/* Catch-all Resources page */}
            <Route path="/resources" element={<HomePage />} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}
