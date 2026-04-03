import { useEffect, useRef, useState } from 'react';
import { Briefcase, Calendar } from 'lucide-react';

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  highlights: string[];
}

const Experience = () => {
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

  const experiences: ExperienceItem[] = [
    {
      company: 'MetLife, USA',
      role: 'Software Engineer',
      period: 'June 2025 - Present',
      highlights: [
        'Reduced API response time by 20% through SQL query optimization and database tuning across claims and policy management systems',
        'Architected and deployed microservices handling 50K+ daily transactions with 99.9% uptime',
        'Implemented OAuth2/JWT authentication protecting 100K+ user accounts with zero security breaches',
        'Built event-driven pipelines with Apache Kafka processing 1M+ messages daily, improving system responsiveness by 30%',
        'Shipped 15+ production features in Agile sprints, consistently meeting tight deadlines without sacrificing quality',
      ],
    },
    {
      company: 'Tech Mahindra, India',
      role: 'Software Engineer',
      period: 'April 2022 - July 2023',
      highlights: [
        'Engineered backend services processing $10M+ in daily financial transactions with zero data loss',
        'Reduced execution time by 20% through query optimization and workflow refactoring across high-volume systems',
        'Decreased production errors by 15% through comprehensive unit testing and proactive debugging',
        'Delivered 10+ scalable features by collaborating directly with product and business stakeholders',
      ],
    },
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className="max-w-5xl mx-auto w-full">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
            Where I've Made an Impact
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            2+ years building systems that scale, focusing on results that matter
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 to-teal-600 transform sm:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative mb-12 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-x-0' : index % 2 === 0 ? 'opacity-0 -translate-x-10' : 'opacity-0 translate-x-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className={`flex items-center mb-4 sm:mb-0 ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
                <div className={`w-full ${index % 2 === 0 ? 'sm:w-1/2 sm:pr-8 sm:text-right' : 'sm:w-1/2 sm:pl-8'}`}>
                  <div className="backdrop-blur-xl bg-white/10 dark:bg-gray-800/30 rounded-2xl p-6 sm:p-8 border border-emerald-500/20 shadow-xl shadow-emerald-500/10 hover:shadow-emerald-500/20 hover:scale-[1.02] transition-all duration-300">
                    <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'sm:justify-end' : ''}`}>
                      <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg">
                        <Briefcase size={24} className="text-white" />
                      </div>
                      <div className={index % 2 === 0 ? 'sm:text-right' : ''}>
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-200">
                          {exp.role}
                        </h3>
                        <p className="text-emerald-600 dark:text-emerald-400 font-semibold">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    <div className={`flex items-center gap-2 mb-4 text-gray-600 dark:text-gray-400 ${index % 2 === 0 ? 'sm:justify-end' : ''}`}>
                      <Calendar size={16} />
                      <span className="text-sm">{exp.period}</span>
                    </div>

                    <ul className={`space-y-3 ${index % 2 === 0 ? 'sm:text-right' : ''}`}>
                      {exp.highlights.map((highlight, hIndex) => (
                        <li
                          key={hIndex}
                          className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed flex items-start gap-2"
                        >
                          <span className="text-emerald-500 mt-1.5 flex-shrink-0">●</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="absolute left-4 sm:left-1/2 w-4 h-4 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full transform sm:-translate-x-1/2 border-4 border-gray-900 dark:border-gray-900 shadow-lg shadow-emerald-500/50" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
