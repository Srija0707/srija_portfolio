import { GraduationCap, Lightbulb, Target, Zap } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const About = () => {
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
      id="about"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
            The Story Behind The Code
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto">
            More than just a backend engineer—I'm a systems thinker who believes great software starts with understanding the problem deeply.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div
            className={`backdrop-blur-xl bg-white/10 dark:bg-gray-800/30 rounded-2xl p-8 border border-emerald-500/20 shadow-xl shadow-emerald-500/10 transition-all duration-700 hover:shadow-emerald-500/30 hover:scale-[1.02] ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">
              My Journey
            </h3>
            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                I didn't fall into engineering by accident. I chose it because I love solving puzzles that matter—the kind where the solution can process millions of transactions or shave 20% off response times for real users.
              </p>
              <p>
                Over the past 2+ years at MetLife and Tech Mahindra, I've learned that great code isn't just about algorithms. It's about understanding business impact, making architectural trade-offs, and building systems that teams can maintain and scale.
              </p>
              <p>
                My sweet spot? Distributed systems, microservices, and event-driven architectures. The messier the data flow, the more I thrive.
              </p>
            </div>
          </div>

          <div
            className={`backdrop-blur-xl bg-white/10 dark:bg-gray-800/30 rounded-2xl p-8 border border-emerald-500/20 shadow-xl shadow-emerald-500/10 transition-all duration-700 hover:shadow-emerald-500/30 hover:scale-[1.02] ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg">
                <GraduationCap size={28} className="text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-200">
                Education
              </h3>
            </div>
            <div className="space-y-2 mb-6">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                Master's in Computer Science
              </h4>
              <p className="text-emerald-600 dark:text-emerald-400 font-medium">
                Texas A&M University, Texas
              </p>
              <p className="text-gray-600 dark:text-gray-400">May 2025</p>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Deepening my expertise in distributed systems, advanced algorithms, and system design—constantly pushing my understanding of what makes software truly scalable and resilient.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Lightbulb,
              title: 'How I Think',
              description: 'I start by asking "why?" before "how?" Understanding the problem deeply leads to simpler, more elegant solutions.',
            },
            {
              icon: Target,
              title: 'What Drives Me',
              description: 'Impact. I want to build systems that handle real scale, serve real users, and solve real business problems.',
            },
            {
              icon: Zap,
              title: 'My Approach',
              description: 'Balance speed with quality. Ship fast, iterate faster. Make it work, make it right, then make it fast.',
            },
          ].map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className={`backdrop-blur-xl bg-white/10 dark:bg-gray-800/30 rounded-2xl p-6 border border-emerald-500/20 shadow-xl shadow-emerald-500/10 transition-all duration-700 hover:shadow-emerald-500/30 hover:scale-[1.05] ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${600 + index * 100}ms` }}
              >
                <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg w-fit mb-4">
                  <Icon size={24} className="text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
                  {card.title}
                </h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
