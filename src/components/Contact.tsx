import { useEffect, useRef, useState } from 'react';
import { Mail, Linkedin, MapPin, Phone, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className="max-w-5xl mx-auto w-full">
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          <h2 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
            Let's Build Something Great
          </h2>
          <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Looking for a backend engineer who can ship quickly, think strategically, and scale systems that matter?
          </p>
        </div>

        <div
          className={`backdrop-blur-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 dark:from-emerald-500/20 dark:to-teal-500/20 rounded-3xl p-8 sm:p-12 border border-emerald-500/30 shadow-2xl shadow-emerald-500/20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <div className="text-center mb-10">
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-6">
              I am currently seeking full-time opportunities where I can make an immediate impact on challenging technical problems.
            </p>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
              Open to roles in distributed systems, backend engineering, and platform architecture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <a
              href="mailto:Gurramsrija07@gmail.com"
              className="group flex items-center gap-4 p-6 backdrop-blur-xl bg-white/10 dark:bg-gray-800/30 rounded-xl border border-emerald-500/20 hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all duration-300 hover:scale-105"
            >
              <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg group-hover:scale-110 transition-transform">
                <Mail size={24} className="text-white" />
              </div>
              <div className="flex-1 text-left">
                <p className="text-sm text-gray-600 dark:text-gray-400">Email</p>
                <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  Gurramsrija07@gmail.com
                </p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/srija-g-0968111a0/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-6 backdrop-blur-xl bg-white/10 dark:bg-gray-800/30 rounded-xl border border-emerald-500/20 hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all duration-300 hover:scale-105"
            >
              <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg group-hover:scale-110 transition-transform">
                <Linkedin size={24} className="text-white" />
              </div>
              <div className="flex-1 text-left">
                <p className="text-sm text-gray-600 dark:text-gray-400">LinkedIn</p>
                <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  Connect with me
                </p>
              </div>
            </a>

            <a
              href="tel:+13619055983"
              className="group flex items-center gap-4 p-6 backdrop-blur-xl bg-white/10 dark:bg-gray-800/30 rounded-xl border border-emerald-500/20 hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all duration-300 hover:scale-105"
            >
              <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg group-hover:scale-110 transition-transform">
                <Phone size={24} className="text-white" />
              </div>
              <div className="flex-1 text-left">
                <p className="text-sm text-gray-600 dark:text-gray-400">Phone</p>
                <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  +1 (361) 905-5983
                </p>
              </div>
            </a>

            <div className="group flex items-center gap-4 p-6 backdrop-blur-xl bg-white/10 dark:bg-gray-800/30 rounded-xl border border-emerald-500/20">
              <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg">
                <MapPin size={24} className="text-white" />
              </div>
              <div className="flex-1 text-left">
                <p className="text-sm text-gray-600 dark:text-gray-400">Location</p>
                <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  San Francisco, CA
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="mailto:Gurramsrija07@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg font-semibold text-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/50 hover:scale-105"
            >
              <span>Get In Touch</span>
              <ArrowRight size={20} />
            </a>
          </div>
        </div>

        <div
          className={`text-center mt-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Prefer async communication? Email works best. I typically respond within 24 hours.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
