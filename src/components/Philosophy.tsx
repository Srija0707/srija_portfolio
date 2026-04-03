import { useEffect, useRef, useState } from 'react';
import { Layers, Zap, Shield, Scale } from 'lucide-react';

const Philosophy = () => {
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

  const principles = [
    {
      icon: Layers,
      title: 'Scalability First',
      description: 'Every system should be designed to handle 10x the current load without major refactoring.',
      example: 'When building APIs at MetLife, I designed for 500K daily transactions even though we started with 50K. Six months later, the system handled the growth seamlessly.',
    },
    {
      icon: Zap,
      title: 'Performance is a Feature',
      description: 'Users notice milliseconds. Every query, every endpoint, every operation should be optimized.',
      example: 'Reduced API response time by 20% through SQL optimization and caching strategies—turning frustration into satisfaction.',
    },
    {
      icon: Shield,
      title: 'Reliability Over Perfection',
      description: 'A system that works 99.9% of the time beats a perfect system that fails 1% of the time.',
      example: 'Implemented circuit breakers and fallback mechanisms in microservices to ensure graceful degradation under load.',
    },
    {
      icon: Scale,
      title: 'Maintainable Code',
      description: 'Code is read 10x more than written. Write for the next engineer, not just the compiler.',
      example: 'Reduced production errors by 15% through comprehensive unit testing and clear architectural patterns that the entire team could follow.',
    },
  ];

  return (
    <section
      id="philosophy"
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
            How I Think as a Backend Engineer
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto">
            Beyond the code—the principles that guide every architectural decision I make
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <div
                key={index}
                className={`group backdrop-blur-xl bg-white/10 dark:bg-gray-800/30 rounded-2xl p-6 sm:p-8 border border-emerald-500/20 shadow-xl shadow-emerald-500/10 transition-all duration-700 hover:shadow-emerald-500/30 hover:scale-[1.02] ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-4 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <Icon size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                      {principle.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pl-4 border-l-2 border-emerald-500/30">
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-medium mb-2">
                    Real Example:
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed italic">
                    {principle.example}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div
          className={`backdrop-blur-xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 rounded-2xl p-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 text-center">
            My Engineering Mantra
          </h3>
          <p className="text-center text-lg text-gray-700 dark:text-gray-300 leading-relaxed italic">
            "The best backend systems are invisible. They just work—fast, reliable, and scalable—so users never have to think about what's happening behind the scenes."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
