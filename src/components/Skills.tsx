import { useEffect, useRef, useState } from 'react';
import { Code, Database, Cloud, Wrench } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: typeof Code;
  skills: Array<{ name: string; context: string }>;
}

const Skills = () => {
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

  const skillCategories: SkillCategory[] = [
    {
      title: 'Core Languages',
      icon: Code,
      skills: [
        { name: 'Java', context: 'Built high-volume transaction systems' },
        { name: 'JavaScript/TypeScript', context: 'Full-stack development' },
        { name: 'SQL', context: 'Query optimization & data modeling' },
      ],
    },
    {
      title: 'Backend Engineering',
      icon: Wrench,
      skills: [
        { name: 'Spring Boot', context: 'RESTful APIs & microservices' },
        { name: 'Spring Security', context: 'OAuth2/JWT authentication' },
        { name: 'Hibernate/JPA', context: 'ORM & database optimization' },
        { name: 'Microservices', context: 'Distributed system design' },
      ],
    },
    {
      title: 'Data & Messaging',
      icon: Database,
      skills: [
        { name: 'MySQL/PostgreSQL', context: 'Production database management' },
        { name: 'Redis', context: 'Caching & session storage' },
        { name: 'Apache Kafka', context: 'Event-driven architecture' },
      ],
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      skills: [
        { name: 'AWS', context: 'EC2, S3, cloud deployment' },
        { name: 'Docker', context: 'Container orchestration' },
        { name: 'Jenkins', context: 'CI/CD pipelines' },
        { name: 'Git', context: 'Version control & collaboration' },
      ],
    },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
            Technical Arsenal
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto">
            Not just a list of buzzwords—these are the tools I use daily to build production systems at scale
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className={`backdrop-blur-xl bg-white/10 dark:bg-gray-800/30 rounded-2xl p-6 sm:p-8 border border-emerald-500/20 shadow-xl shadow-emerald-500/10 transition-all duration-700 hover:shadow-emerald-500/20 hover:scale-[1.02] ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${categoryIndex * 150}ms` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-200">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className={`group transition-all duration-300 ${
                        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                      }`}
                      style={{
                        transitionDelay: `${(categoryIndex * 150) + (skillIndex * 50)}ms`,
                      }}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                          {skill.name}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                        {skill.context}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
