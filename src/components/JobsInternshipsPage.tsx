import React from "react";
import { Link } from "react-router-dom";
import { 
  Briefcase, 
  ChevronRight, 
  Building2, 
  MapPin, 
  ClipboardList, 
  Clock, 
  CheckCircle2,
  Check,
  ArrowLeft,
  Globe,
  ExternalLink,
  Info
} from "lucide-react";
import { motion } from "motion/react";
import "./JobsInternshipsPage.css";

interface JobOpportunity {
  title: string;
  organization: string;
  region: string;
  type: string;
  deadline: string;
  link?: string;
}

const OPPORTUNITIES: JobOpportunity[] = [
  {
    title: "Internet Policy Analyst Intern",
    organization: "Internet Society (ISOC)",
    region: "Global (Remote)",
    type: "Internship",
    deadline: "Ongoing",
    link: "https://careers.internetsociety.org/"
  },
  {
    title: "Cyber Diplomacy Fellow",
    organization: "U.S. State Department",
    region: "U.S. / Global",
    type: "Fellowship",
    deadline: "Varies",
    link: "https://www.state.gov/"
  },
  {
    title: "Digital Rights Researcher",
    organization: "Access Now",
    region: "Global",
    type: "Job",
    deadline: "Open until filled",
    link: "https://www.accessnow.org/jobs/"
  },
  {
    title: "Internet Governance Volunteer",
    organization: "IGF Secretariat",
    region: "Remote",
    type: "Volunteer",
    deadline: "Rolling",
    link: "https://www.intgovforum.org/"
  },
  {
    title: "Youth IGF Coordinator",
    organization: "Regional Youth IGF (example)",
    region: "Regional",
    type: "Internship",
    deadline: "March 2025"
  }
];

const JobsInternshipsPage: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="jobs-container"
    >
      <header className="jobs-header">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2000" 
            alt="Modern office" 
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 border border-white/30 text-white text-xs font-bold mb-6 backdrop-blur-sm">
              <Briefcase size={14} /> Career Opportunities
            </div>
            <h1 className="text-white text-5xl md:text-7xl font-black tracking-tight mb-6">
              Jobs & Internships
            </h1>
            <p className="text-white/90 text-xl max-w-2xl mx-auto font-medium">
              Explore career opportunities and internships in Internet Governance and Digital Policy.
            </p>
          </motion.div>
        </div>
      </header>

      <main className="jobs-main">
        <div className="max-w-4xl mx-auto px-4">
          <div className="breadcrumb mb-12 flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400">
            <Link to="/" className="hover:text-indigo-600 dark:hover:text-indigo-400">Home</Link>
            <ChevronRight size={14} />
            <span className="text-slate-900 dark:text-white">Jobs & Internships</span>
          </div>


          <section className="intro-card glass-card mb-16 border-l-4 border-l-indigo-500">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-indigo-600 mb-4 flex items-center gap-2 dark:text-indigo-400">
                  <Info size={20} /> About This Section
                </h3>
                <p className="text-slate-700 font-medium mb-6 dark:text-slate-300">
                  Browse open jobs, internships, and volunteer opportunities in:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Internet Governance",
                    "Tech Policy & Cybersecurity",
                    "Privacy & Digital Rights",
                    "Open Digital Ecosystems"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 dark:bg-indigo-900/40 dark:text-indigo-400">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className="text-sm font-semibold">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </section>

          <div className="mb-12">
            <h2 className="text-3xl font-black text-slate-900 flex items-center gap-3 mb-2 dark:text-white">
              <Briefcase className="text-indigo-500" size={32} /> Current Opportunities
            </h2>

            <div className="h-1 w-20 bg-indigo-500 rounded-full" />
          </div>

          <div className="space-y-6">
            {OPPORTUNITIES.map((job, idx) => (
              <motion.article 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="job-card group glass-card border-l-4 border-l-indigo-500"
              >
                <div className="flex flex-col h-full">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                    <h4 className="text-2xl font-bold text-slate-900 tracking-tight group-hover:text-indigo-600 transition-colors dark:text-white dark:group-hover:text-indigo-400">
                      {job.link ? (
                        <a href={job.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          {job.title} <ExternalLink size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      ) : (
                        job.title
                      )}
                    </h4>

                    <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold border border-indigo-100">
                      {job.type}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                    <div className="flex items-center gap-3 text-slate-600">
                      <div className="p-2 rounded-lg bg-slate-50 text-indigo-500">
                        <Building2 size={18} />
                      </div>
                      <div>
                        <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Organization</span>
                        <p className="text-sm font-bold text-slate-700 dark:text-slate-300">{job.organization}</p>

                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-slate-600">
                      <div className="p-2 rounded-lg bg-slate-50 text-indigo-500">
                        <MapPin size={18} />
                      </div>
                      <div>
                        <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Region</span>
                        <p className="text-sm font-bold text-slate-700 dark:text-slate-300">{job.region}</p>

                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-slate-600">
                      <div className="p-2 rounded-lg bg-slate-50 text-indigo-500">
                        <ClipboardList size={18} />
                      </div>
                      <div>
                        <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Type</span>
                        <p className="text-sm font-bold text-slate-700 dark:text-slate-300">{job.type}</p>

                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-slate-600">
                      <div className="p-2 rounded-lg bg-slate-50 text-indigo-500">
                        <Clock size={18} />
                      </div>
                      <div>
                        <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Deadline</span>
                        <p className="text-sm font-bold text-slate-700 dark:text-slate-300">{job.deadline}</p>

                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <section className="mt-20 p-10 rounded-[2.5rem] bg-indigo-50 border border-indigo-100 relative overflow-hidden dark:bg-indigo-950/20 dark:border-indigo-900/50">
            <div className="absolute -bottom-10 -right-10 opacity-10 text-indigo-500 dark:text-indigo-400">
              <CheckCircle2 size={200} />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-black text-indigo-600 mb-4 flex items-center gap-2 dark:text-indigo-400">
                <CheckCircle2 size={24} /> How to Contribute
              </h3>
              <p className="text-slate-600 font-medium mb-6 dark:text-slate-400">
                To keep this list fresh and inclusive of global opportunities:
              </p>

              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-slate-700 text-sm font-bold dark:text-slate-300">

                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  Add new positions via pull request
                </li>
                <li className="flex items-center gap-3 text-slate-700 text-sm font-bold dark:text-slate-300">

                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  Suggest listings via GitHub Issue or our submission form
                </li>
              </ul>
              <div className="mt-8">
                <Link to="/contributing" className="inline-flex items-center gap-2 text-indigo-600 font-black hover:gap-3 transition-all">
                  Go to Contribution Guide <ChevronRight size={20} />
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>


    </motion.div>
  );
};

export default JobsInternshipsPage;
