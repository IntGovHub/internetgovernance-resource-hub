import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Star,
  ChevronRight,
  Search,
  User,
  Calendar,
  Pen,
  Github,
  Mail,
  Globe,
  ExternalLink,
  Linkedin,
  X,
  Quote
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import "./SuccessStoriesPage.css";

interface SuccessStory {
  title: string;
  author: string;
  location: string;
  year: string;
  category: string;
  content: string;
  takeaway: string;
  image: string;
  link?: string;
  linkText?: string;
  linkType?: 'linkedin' | 'website';
}

const STORIES: SuccessStory[] = [
  {
    title: "Building Kenya's First Youth IGF",
    author: "Amina Said & Team",
    location: "Kenya",
    year: "2024",
    category: "Community Building",
    content: "After attending the global IGF, a group of young Kenyans recognized the need for local youth voices in Internet Governance discussions. They launched Kenya Youth IGF in 2024, bringing together 150+ young people from across the country for a two-day forum on digital rights and policy. The event produced concrete policy recommendations that were submitted to the national IGF and resulted in two youth representatives being appointed to Kenya's IGF multistakeholder group.",
    takeaway: "Start small, document everything, and don't wait for perfect conditions — the community will show up if you build the space.",
    image: "/images/success-stories.png",
    link: "https://linkedin.com/in/aminasaid",
    linkText: "Contact Amina",
    linkType: 'linkedin'
  },
  {
    title: "From Fellow to Policy Influencer",
    author: "Daniel Kojo",
    location: "Ghana",
    year: "2023",
    category: "Policy Influence",
    content: "As an IGF Fellowship recipient, Daniel conducted research on data protection gaps in West Africa. His work caught the attention of Ghana's Data Protection Commission, leading to an invitation to contribute to national data governance guidelines. The research findings influenced three specific provisions in Ghana's updated data protection framework, particularly around youth data rights and consent mechanisms.",
    takeaway: "Rigorous research + strategic relationship-building = real policy impact. Fellows should actively share their work with relevant policymakers.",
    image: "/images/success-stories.png",
    link: "https://example.com/daniel",
    linkText: "Visit Website",
    linkType: 'website'
  },
  {
    title: "Connecting Women Across Borders",
    author: "Asia-Pacific Women in Cybersecurity Collective",
    location: "Asia-Pacific",
    year: "2023-2024",
    category: "Capacity Building",
    content: "What started as an informal Signal group of 15 women working in cybersecurity policy across Asia-Pacific has grown into a 200+ member network. The collective now runs monthly knowledge-sharing sessions, maintains a job board, and has successfully advocated for increased women's representation at regional IGF events. In 2024, 40% of speakers at APrIGF were women, up from 22% in 2022.",
    takeaway: "Informal networks can evolve into powerful advocacy platforms. Create the space first, structure can come later.",
    image: "/images/success-stories.png"
  }
];

const SuccessStoriesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredStories = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return STORIES;

    return STORIES.filter(story =>
      story.title.toLowerCase().includes(query) ||
      story.author.toLowerCase().includes(query) ||
      story.location.toLowerCase().includes(query) ||
      story.category.toLowerCase().includes(query) ||
      story.content.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="success-stories-container"
    >
      <header className="success-stories-header">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2000"
            alt="Success and collaboration"
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-violet-700 opacity-90" />
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold mb-6 backdrop-blur-sm">
              <Star size={14} className="text-yellow-300 fill-yellow-300" /> Impact & Advocacy
            </div>
            <h1 className="text-white text-5xl md:text-7xl font-black tracking-tight mb-6">
              Success Stories
            </h1>
            <p className="text-white/80 text-xl max-w-2xl mx-auto font-medium mb-10">
              Real stories showing how collaboration and advocacy create meaningful change in the global digital landscape.
            </p>

            <div className="relative max-w-2xl mx-auto group">
              <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none text-white/40 group-focus-within:text-white transition-colors">
                <Search size={20} />
              </div>
              <input
                type="text"
                placeholder="Search stories by theme, country, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-2xl py-5 pl-14 pr-14 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/20 transition-all backdrop-blur-md text-lg"
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

      <main className="success-stories-main">
        <div className="max-w-4xl mx-auto px-4">
          <div className="breadcrumb mb-12 flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400">
            <Link to="/" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-slate-900 dark:text-white">Success Stories</span>
          </div>


          <section className="cta-card glass-card mb-16 border-l-4 border-l-indigo-500">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-indigo-600 mb-4 flex items-center gap-2">
                  <Pen size={24} /> Share Your Success Story
                </h3>
                <p className="text-slate-700 font-medium mb-8 dark:text-slate-300">
                  We welcome stories from individuals, communities, and organizations working in Internet Governance. Your journey can inspire others.
                </p>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://github.com/Botsyoelily/internetgovernance-resource-hub/issues/new?template=success-story.yml"
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
                    <Mail size={18} /> Email Us
                  </a>
                </div>
              </div>
            </div>
          </section>

          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-black text-slate-900 flex items-center gap-3 mb-2 dark:text-white">

                📖 Inspiring Stories
              </h2>
              <div className="h-1 w-20 bg-indigo-500 rounded-full" />
            </div>
            <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">
              {filteredStories.length === STORIES.length ? "Showing all stories" :
                filteredStories.length === 0 ? "No results found" :
                  `Showing ${filteredStories.length} stor${filteredStories.length === 1 ? "y" : "ies"}`}
            </div>
          </div>

          <div className="space-y-12">
            <AnimatePresence mode="popLayout">
              {filteredStories.length > 0 ? (
                filteredStories.map((story, idx) => (
                  <motion.article
                    key={story.title}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ delay: idx * 0.1 }}
                    className="story-card group glass-card border-l-4 border-l-indigo-500 overflow-hidden !p-0"
                  >
                    <div className="flex flex-col md:flex-row h-full">
                      <div className="md:w-1/3 relative overflow-hidden">
                        <img
                          src={story.image}
                          alt={story.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-indigo-600/10 group-hover:bg-transparent transition-colors" />
                      </div>

                      <div className="flex-1 p-8 md:p-10 flex flex-col">
                        <h3 className="text-3xl font-black text-slate-900 tracking-tight mb-4 group-hover:text-indigo-600 transition-colors dark:text-white dark:group-hover:text-indigo-400">
                          {story.title}
                        </h3>


                        <div className="flex flex-wrap gap-y-2 gap-x-6 mb-8 text-sm font-bold text-slate-500">
                          <span className="flex items-center gap-2 dark:text-slate-400">
                            <User size={16} className="text-indigo-500" />
                            By: {story.author} | {story.location}
                          </span>

                          <span className="flex items-center gap-2 dark:text-slate-400">
                            <Calendar size={16} className="text-indigo-500" />
                            {story.year}
                          </span>

                          <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-[10px] uppercase tracking-widest border border-indigo-100">
                            {story.category}
                          </span>
                        </div>

                        <div className="story-content text-slate-700 font-medium leading-relaxed mb-8 dark:text-slate-300">
                          {story.content}
                        </div>


                        <div className="takeaway-box p-6 rounded-2xl bg-slate-50 border border-slate-100 relative mb-8 dark:bg-slate-900/50 dark:border-slate-800">
                          <div className="absolute top-4 right-4 text-slate-200 dark:text-slate-800">
                            <Quote size={40} />
                          </div>
                          <p className="text-slate-900 font-bold relative z-10 dark:text-white">
                            <span className="text-indigo-600 mr-2 uppercase text-xs tracking-widest dark:text-indigo-400">Key Takeaway:</span>
                            {story.takeaway}
                          </p>
                        </div>


                        {story.link && (
                          <div className="mt-auto">
                            <a
                              href={story.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-indigo-600 font-black hover:gap-3 transition-all"
                            >
                              {story.linkType === 'linkedin' ? <Linkedin size={18} /> : <Globe size={18} />}
                              {story.linkText} <ExternalLink size={16} />
                            </a>
                          </div>
                        )}
                      </div>
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
                  <h3 className="text-2xl font-bold text-slate-900 mb-2 dark:text-white">No stories found</h3>
                  <p className="text-slate-500 font-medium mb-8 max-w-md mx-auto dark:text-slate-400">
                    Try matching your search with theme, country, or category.
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

export default SuccessStoriesPage;
