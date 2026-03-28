import React from "react";
import { Link } from "react-router-dom";
import { 
  Handshake, 
  Star, 
  CalendarDays, 
  Book, 
  Mic2, 
  Wrench, 
  CheckCircle, 
  GitBranch, 
  MessageSquare, 
  Users, 
  UserRound, 
  PenTool, 
  Code, 
  Github, 
  ArrowLeft,
  ChevronRight,
  Globe
} from "lucide-react";
import { motion } from "motion/react";
import "./ContributingPage.css";

const ContributingPage: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="contributing-container"
    >
      <header className="contributing-header relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=2000" 
            alt="Collaboration Banner" 
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-600/80 to-indigo-900/90" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <h1 className="text-white drop-shadow-2xl flex items-center justify-center gap-4 text-5xl md:text-7xl font-black tracking-tight">
              <Handshake size={64} className="text-indigo-300" /> 
              Contributing to IG Hub
            </h1>
            <p className="text-indigo-50/90 text-xl mt-6 max-w-2xl mx-auto font-medium">
              Join us in building a more connected and inclusive Internet Governance community
            </p>
          </motion.div>
        </div>
      </header>

      <main className="contributing-main shadow-2xl">
        <div className="contributing-breadcrumb">
          <Link to="/">Home</Link> <ChevronRight size={14} className="inline mx-1" /> Contributing
        </div>

        <div className="intro-text mb-16">
          <p className="text-2xl text-slate-700 leading-relaxed dark:text-slate-200">
            <strong>Thank you for your interest in contributing to IG Hub!</strong> This is a community-driven project — and we welcome your ideas, updates, and improvements.
          </p>

        </div>

        <section id="ways-to-contribute" className="mb-20">
          <h2 className="section-title flex items-center gap-3 text-3xl font-black text-slate-900 mb-10">
            <Star className="text-indigo-600" size={32} /> Ways to Contribute
          </h2>
          <div className="contribution-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article className="contribution-card group">
              <div className="card-icon bg-indigo-50 text-indigo-600 p-4 rounded-2xl w-fit mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <CalendarDays size={32} />
              </div>
              <h4 className="text-xl font-bold mb-3">Add Events & Opportunities</h4>
              <p className="text-slate-600 dark:text-slate-400">Share conferences, fellowships, jobs, funding programs, or speaking opportunities you know about.</p>
            </article>

            <article className="contribution-card group">
              <div className="card-icon bg-indigo-50 text-indigo-600 p-4 rounded-2xl w-fit mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <Book size={32} />
              </div>
              <h4 className="text-xl font-bold mb-3">Share Resources & Documents</h4>
              <p className="text-slate-600 dark:text-slate-400">Submit IGF-related documents, starter guides, toolkits, or educational materials.</p>
            </article>

            <article className="contribution-card group">
              <div className="card-icon bg-indigo-50 text-indigo-600 p-4 rounded-2xl w-fit mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <Star size={32} />
              </div>
              <h4 className="text-xl font-bold mb-3">Submit Success Stories</h4>
              <p className="text-slate-600 dark:text-slate-400">Share inspiring stories of impact, case studies, or youth initiatives in Internet Governance.</p>
            </article>

            <article className="contribution-card group">
              <div className="card-icon bg-indigo-50 text-indigo-600 p-4 rounded-2xl w-fit mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <Mic2 size={32} />
              </div>
              <h4 className="text-xl font-bold mb-3">Join the Speaker Bank</h4>
              <p className="text-slate-600 dark:text-slate-400">Add yourself or recommend others to the Youth IGF Speaker Bank.</p>
            </article>

            <article className="contribution-card group">
              <div className="card-icon bg-indigo-50 text-indigo-600 p-4 rounded-2xl w-fit mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <Wrench size={32} />
              </div>
              <h4 className="text-xl font-bold mb-3">Fix & Improve</h4>
              <p className="text-slate-600 dark:text-slate-400">Report typos, fix broken links, improve formatting, or enhance content clarity.</p>
            </article>
          </div>
        </section>

        <section id="submission-process" className="mb-20">
          <h2 className="section-title flex items-center gap-3 text-3xl font-black text-slate-900 mb-10 dark:text-white">
            <CheckCircle className="text-indigo-600" size={32} /> How to Submit
          </h2>


          <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 dark:bg-slate-900/50 dark:border-slate-800">

            <h3 className="flex items-center gap-3 text-2xl font-bold mb-8 dark:text-slate-100">
              <GitBranch className="text-indigo-600" size={28} /> Option 1: GitHub Pull Request (Recommended)
            </h3>

            <div className="steps-list space-y-8">
              <div className="step-item flex gap-6">
                <div className="step-number bg-indigo-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div className="step-content">
                  <h4 className="text-lg font-bold mb-2">Fork the Repository</h4>
                  <p className="text-slate-600 dark:text-slate-400">Click "Fork" on the GitHub repository to create your own copy.</p>
                </div>
              </div>

              <div className="step-item flex gap-6">
                <div className="step-number bg-indigo-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div className="step-content">
                  <h4 className="text-lg font-bold mb-2 dark:text-white">Make Your Edits</h4>
                  <p className="text-slate-600 dark:text-slate-400">Update or add content to the relevant data files or make code improvements to the application.</p>
                </div>
              </div>

              <div className="step-item flex gap-6">
                <div className="step-number bg-indigo-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div className="step-content">
                  <h4 className="text-lg font-bold mb-2 dark:text-white">Commit with a Clear Message</h4>
                  <p className="text-slate-600 dark:text-slate-400">Use a descriptive commit message like: <code className="dark:bg-slate-800 dark:text-indigo-300">Add new ISOC fellowship program</code></p>
                </div>
              </div>

              <div className="step-item flex gap-6">
                <div className="step-number bg-indigo-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div className="step-content">
                  <h4 className="text-lg font-bold mb-2 dark:text-white">Open a Pull Request</h4>
                  <p className="text-slate-600 dark:text-slate-400">Create a PR from your fork to the main branch with a brief description of your changes. We'll review and merge within 1–2 days!</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-slate-200">
              <h3 className="flex items-center gap-3 text-2xl font-bold mb-4 dark:text-slate-100">
                <MessageSquare className="text-indigo-600" size={28} /> Option 2: GitHub Issue
              </h3>
              <p className="text-slate-600 text-lg dark:text-slate-400">If you don't want to edit files directly, simply <strong>open a GitHub Issue</strong> with your suggestion or information. Our team will handle the rest.</p>

            </div>
          </div>
        </section>

        <section id="core-team" className="mb-20">
          <h2 className="section-title flex items-center gap-3 text-3xl font-black text-slate-900 mb-10">
            <Users className="text-indigo-600" size={32} /> Join the Core Team
          </h2>
          <p className="text-lg text-slate-600 mb-10">If you'd like to help <strong>regularly</strong>, review submissions, or co-maintain the repository:</p>

          <div className="cta-grid grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cta-card bg-white border border-slate-100 p-8 rounded-3xl shadow-sm hover:shadow-md transition-all text-center">
              <div className="mx-auto w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                <UserRound size={32} />
              </div>
              <h4 className="text-xl font-bold mb-3">Core Contributor</h4>
              <p className="text-slate-600 text-sm">Review PRs, manage submissions, and help maintain the hub</p>
            </div>

            <div className="cta-card bg-white border border-slate-100 p-8 rounded-3xl shadow-sm hover:shadow-md transition-all text-center">
              <div className="mx-auto w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                <PenTool size={32} />
              </div>
              <h4 className="text-xl font-bold mb-3">Content Curator</h4>
              <p className="text-slate-600 text-sm">Help identify, verify, and add new opportunities and resources</p>
            </div>

            <div className="cta-card bg-white border border-slate-100 p-8 rounded-3xl shadow-sm hover:shadow-md transition-all text-center">
              <div className="mx-auto w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                <Code size={32} />
              </div>
              <h4 className="text-xl font-bold mb-3">Developer</h4>
              <p className="text-slate-600 text-sm">Contribute code improvements, UI enhancements, or new features</p>
            </div>
          </div>

          <div className="mt-12 p-10 bg-indigo-600 text-white rounded-[2.5rem] shadow-xl shadow-indigo-200">
            <h4 className="text-2xl font-black mb-6">How to Apply:</h4>
            <ol className="space-y-4 text-indigo-50">
              <li className="flex items-start gap-3">
                <span className="font-bold">1.</span>
                <span>Open a GitHub Issue titled <strong>"I want to join the team"</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold">2.</span>
                <span>Briefly describe your background and interest in Internet Governance</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold">3.</span>
                <span>Share your GitHub profile or relevant experience</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold">4.</span>
                <span>We'll reach out to discuss collaboration opportunities!</span>
              </li>
            </ol>
          </div>
        </section>

        <section id="maintainers" className="mb-20">
          <h2 className="section-title flex items-center gap-3 text-3xl font-black text-slate-900 mb-10 dark:text-white">
            <Users className="text-indigo-600" size={32} /> Maintainers & Authors
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  <span className="text-xs text-slate-500 flex items-center gap-1 group-hover:text-indigo-600 transition-colors">
                    <Github size={10} /> View Profile
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <div className="btn-group flex flex-col sm:flex-row gap-4 justify-center mt-16">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center justify-center gap-2 bg-indigo-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100">
            <Github size={24} /> Go to GitHub
          </a>
          <Link to="/" className="btn-secondary flex items-center justify-center gap-2 bg-slate-100 text-slate-900 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-slate-200 transition-all dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700">
            <ArrowLeft size={24} /> Back to Hub
          </Link>

        </div>
      </main>


    </motion.div>
  );
};

export default ContributingPage;
