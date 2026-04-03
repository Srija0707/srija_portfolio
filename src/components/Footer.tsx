import { Mail, Linkedin, Github, ArrowUp, Heart } from 'lucide-react';
import { useState, useEffect } from 'react';

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const contactLinks = [
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:Gurramsrija07@gmail.com',
      color: 'hover:text-emerald-400',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/srija-g-0968111a0/',
      color: 'hover:text-emerald-400',
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/Srija0707',
      color: 'hover:text-emerald-400',
    },
  ];

  return (
    <footer id="contact" className="relative px-4 sm:px-6 lg:px-8 py-12 border-t border-emerald-500/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
            Let's Connect
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg mb-8">
            Feel free to reach out for collaborations or just a friendly hello
          </p>

          <div className="flex items-center justify-center gap-6">
            {contactLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group p-4 backdrop-blur-xl bg-white/10 dark:bg-gray-800/30 rounded-xl border border-emerald-500/20 shadow-lg shadow-emerald-500/10 transition-all duration-300 hover:shadow-emerald-500/30 hover:scale-110 ${link.color}`}
                  aria-label={link.name}
                >
                  <Icon size={24} className="transition-transform group-hover:scale-110" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="border-t border-emerald-500/10 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center sm:text-left">
              © {new Date().getFullYear()} Srija Gurram. All rights reserved.
            </p>
            <p className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              Made with <Heart size={16} className="text-red-500 animate-pulse" /> and lots of code
            </p>
          </div>
        </div>
      </div>

      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-full shadow-xl shadow-emerald-500/50 transition-all duration-300 hover:scale-110 hover:shadow-emerald-500/70 z-50 animate-bounce"
          aria-label="Back to top"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </footer>
  );
};

export default Footer;
