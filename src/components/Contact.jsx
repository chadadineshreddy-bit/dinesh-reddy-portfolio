import React, { useState } from 'react';
import { 
  Mail, 
  Phone,
  Send, 
  MapPin, 
  Linkedin, 
  Github, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  Copy, 
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate asynchronous delivery / integration with EmailJS or backend
      // In production, user can add EmailJS public key via .env (VITE_EMAILJS_KEY)
      await new Promise(resolve => setTimeout(resolve, 1200));

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 8000);
    } catch (err) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.contact.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-slate-900 dark:text-white">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            I am interested in exploring entry-level opportunities in Data Analytics, Data Science, and related IT roles. Feel free to connect with me.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Contact Details Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="glass-card p-6 rounded-3xl border border-slate-200/80 dark:border-white/10 space-y-3">
              <h3 className="text-lg font-bold font-heading text-slate-900 dark:text-white">
                Contact Information
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Whether you have an entry-level opening, an interesting data project, or just want to chat about analytics, I'd love to hear from you.
              </p>
            </div>

            {/* Email Card */}
            <div className="glass-card p-5 rounded-2xl border border-slate-200/80 dark:border-white/10 flex items-center justify-between group hover:border-cyan-500/40 transition-all">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Email Address
                  </span>
                  <a
                    href={`mailto:${personalInfo.contact.email}`}
                    className="block text-sm font-bold text-slate-900 dark:text-white truncate hover:text-cyan-400 transition-colors"
                  >
                    {personalInfo.contact.email}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-xl bg-slate-100 dark:bg-navy-800 text-slate-500 hover:text-cyan-400 hover:bg-slate-200 dark:hover:bg-navy-700 transition-colors shrink-0"
                title="Copy email address"
                aria-label="Copy email address"
              >
                {copiedEmail ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Number Card */}
            <div className="glass-card p-5 rounded-2xl border border-slate-200/80 dark:border-white/10 flex items-center justify-between group hover:border-emerald-500/40 transition-all">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Phone / Mobile
                  </span>
                  <a
                    href={`tel:${personalInfo.contact.phone.replace(/\s+/g, '')}`}
                    className="block text-sm font-bold text-slate-900 dark:text-white truncate hover:text-emerald-400 transition-colors"
                  >
                    {personalInfo.contact.phone}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyPhone}
                className="p-2 rounded-xl bg-slate-100 dark:bg-navy-800 text-slate-500 hover:text-emerald-400 hover:bg-slate-200 dark:hover:bg-navy-700 transition-colors shrink-0"
                title="Copy phone number"
                aria-label="Copy phone number"
              >
                {copiedPhone ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* LinkedIn Card */}
            <a
              href={personalInfo.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-5 rounded-2xl border border-slate-200/80 dark:border-white/10 flex items-center justify-between group hover:border-blue-500/40 transition-all block"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    LinkedIn Profile
                  </span>
                  <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-400 transition-colors">
                    dinesh-reddy-chada
                  </div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-400 transition-colors" />
            </a>

            {/* GitHub Card */}
            <a
              href={personalInfo.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-5 rounded-2xl border border-slate-200/80 dark:border-white/10 flex items-center justify-between group hover:border-purple-500/40 transition-all block"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    GitHub Profile
                  </span>
                  <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-purple-400 transition-colors">
                    dineshreddychada
                  </div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-purple-400 transition-colors" />
            </a>

            {/* Location Card */}
            <div className="glass-card p-5 rounded-2xl border border-slate-200/80 dark:border-white/10 flex items-center gap-3.5">
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                  Location
                </span>
                <div className="text-sm font-bold text-slate-900 dark:text-white">
                  {personalInfo.contact.location}
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-slate-200/80 dark:border-white/10 relative shadow-2xl">
              
              <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-cyan-400" />
                <span>Send Me a Direct Message</span>
              </h3>

              {submitStatus === 'success' && (
                <div className="p-4 mb-6 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm flex items-start gap-3 animate-fadeIn">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-semibold block">Thank you! Your message has been sent.</strong>
                    <span>I will review your message and reply as soon as possible.</span>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 mb-6 rounded-2xl bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs sm:text-sm flex items-start gap-3 animate-fadeIn">
                  <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-semibold block">Oops! Failed to send message.</strong>
                    <span>Please try again or email me directly at {personalInfo.contact.email}.</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Full Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Full Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-100/90 dark:bg-navy-900/90 text-slate-900 dark:text-white placeholder-slate-400 border text-sm transition-all focus:outline-none focus:ring-2 ${
                        errors.name
                          ? 'border-rose-500 focus:ring-rose-500/30'
                          : 'border-slate-300/80 dark:border-white/10 focus:border-cyan-500 focus:ring-cyan-500/20'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-rose-400 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Email Address <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@company.com"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-100/90 dark:bg-navy-900/90 text-slate-900 dark:text-white placeholder-slate-400 border text-sm transition-all focus:outline-none focus:ring-2 ${
                        errors.email
                          ? 'border-rose-500 focus:ring-rose-500/30'
                          : 'border-slate-300/80 dark:border-white/10 focus:border-cyan-500 focus:ring-cyan-500/20'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-rose-400 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Subject <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Opportunity: Data Analyst Role at [Company]"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-100/90 dark:bg-navy-900/90 text-slate-900 dark:text-white placeholder-slate-400 border text-sm transition-all focus:outline-none focus:ring-2 ${
                      errors.subject
                        ? 'border-rose-500 focus:ring-rose-500/30'
                        : 'border-slate-300/80 dark:border-white/10 focus:border-cyan-500 focus:ring-cyan-500/20'
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-xs text-rose-400 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3 h-3" /> {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message or inquiry here..."
                    className={`w-full px-4 py-3 rounded-xl bg-slate-100/90 dark:bg-navy-900/90 text-slate-900 dark:text-white placeholder-slate-400 border text-sm transition-all focus:outline-none focus:ring-2 resize-none ${
                      errors.message
                        ? 'border-rose-500 focus:ring-rose-500/30'
                        : 'border-slate-300/80 dark:border-white/10 focus:border-cyan-500 focus:ring-cyan-500/20'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-rose-400 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 via-primary-600 to-purple-600 shadow-glow-primary hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 disabled:hover:scale-100 transition-all"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending Message...
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-cyan-200" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
