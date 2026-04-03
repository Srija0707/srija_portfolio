import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Code2 } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const techStack = ['Java', 'Spring Boot', 'Microservices', 'Kafka', 'AWS', 'SQL'];

  return (
    <section
      id="home"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 relative overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-teal-500/5"></div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Role badge */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 backdrop-blur-xl bg-emerald-500/10 border border-emerald-500/30 rounded-full">
              <Code2 className="text-emerald-400" size={16} />
              <span className="text-emerald-400 font-medium text-sm tracking-wide">SOFTWARE ENGINEER</span>
            </div>
          </div>

          {/* Name - large and bold */}
          <h1 className="text-center mb-10">
            <span className="block text-6xl sm:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-white via-emerald-100 to-teal-100 bg-clip-text text-transparent leading-tight tracking-tight drop-shadow-2xl">
              Srija Gurram
            </span>
          </h1>

          {/* Main headline - impactful */}
          <div className="text-center max-w-5xl mx-auto mb-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-100 dark:text-gray-100 leading-tight mb-4">
              I build <span className="text-emerald-400">scalable backend systems</span> that power real-world applications at scale.
            </h2>
          </div>

          {/* Supporting line */}
          <p className="text-center text-lg sm:text-xl text-gray-400 dark:text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
            Focused on performance, reliability, and system design — not just writing code.
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12 max-w-3xl mx-auto">
            {techStack.map((tech, index) => (
              <div
                key={tech}
                className={`px-4 py-2 backdrop-blur-xl bg-white/5 border border-emerald-500/20 rounded-lg text-gray-300 text-sm font-medium hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all duration-300 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                style={{ transitionDelay: `${400 + index * 50}ms` }}
              >
                {tech}
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              onClick={() => scrollToSection('projects')}
              className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg font-semibold text-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/50 hover:scale-105"
            >
              <span>Explore My Projects</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="group flex items-center gap-2 px-8 py-4 backdrop-blur-xl bg-white/5 border border-white/20 text-white rounded-lg font-semibold text-lg hover:bg-white/10 hover:border-white/30 transition-all duration-300"
            >
              <span>Get In Touch</span>
            </button>
          </div>

          {/* Stats section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { label: 'Years Experience', value: '2+' },
              { label: 'Performance Boost', value: '20%' },
              { label: 'Error Reduction', value: '15%' },
            ].map((stat, index) => (
              <div
                key={index}
                className={`text-center backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-emerald-500/20 hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all duration-500 hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${700 + index * 100}ms` }}
              >
                <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent mb-2 drop-shadow-lg">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base text-gray-400 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
