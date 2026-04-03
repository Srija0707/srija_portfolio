import { useEffect, useRef, useState } from 'react';
import { Brain, TrendingUp, ChevronDown, ChevronUp, Target, Wrench, AlertCircle, TrendingUp as Impact } from 'lucide-react';

interface Project {
  title: string;
  tagline: string;
  icon: typeof Brain;
  problem: string;
  approach: string;
  technologies: string[];
  challenges: string[];
  impact: string[];
}

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
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

  const projects: Project[] = [
    {
      title: 'Emotional Intelligence-Driven Financial Advisory Chatbot',
      tagline: 'AI that understands both your finances and your feelings',
      icon: Brain,
      problem: 'Financial advisory tools failed to account for user emotions during high-stress financial decisions. Generic responses left users feeling misunderstood, leading to poor engagement and suboptimal financial outcomes.',
      approach: 'Built an emotion-aware chatbot using PyTorch for intent classification and NLTK for sentiment analysis. Designed the system to detect emotional cues in user messages and adapt responses accordingly—offering reassurance during anxiety, celebrating wins, and providing rational guidance during panic.',
      technologies: ['Python', 'PyTorch', 'NLTK', 'REST API', 'Machine Learning', 'NLP'],
      challenges: [
        'Training sentiment models on limited financial conversation data—solved by transfer learning from general emotion datasets',
        'Balancing empathy with actionable advice—implemented a dual-response system that validates emotions before suggesting actions',
        'Real-time processing under 500ms—optimized model inference with quantization and caching strategies',
      ],
      impact: [
        'Achieved 87% accuracy in intent classification across 15+ financial scenarios',
        'Improved user engagement by 40% compared to traditional rule-based chatbots',
        'Modular architecture enables easy extension to multi-language support and voice interactions',
      ],
    },
    {
      title: 'Real-Time Expense Tracker & Analytics System',
      tagline: 'From transaction chaos to financial clarity',
      icon: TrendingUp,
      problem: 'Users struggled to understand their spending patterns due to delayed data processing and lack of real-time insights. Traditional expense trackers processed data in batches, causing lag between spending and awareness.',
      approach: 'Engineered a Spring Boot backend with event-driven architecture to process expenses as they happen. Built RESTful APIs for instant transaction logging, categorization, and trend analysis. Designed analytics engine to generate spending insights and predictive alerts.',
      technologies: ['Java', 'Spring Boot', 'REST APIs', 'MySQL', 'Event-Driven Architecture', 'React'],
      challenges: [
        'Processing high-frequency transaction data without bottlenecks—implemented async processing with message queues',
        'Generating complex analytics queries without impacting user experience—introduced read replicas and query optimization',
        'Ensuring data consistency across multiple concurrent users—applied optimistic locking and transaction isolation strategies',
      ],
      impact: [
        'Reduced API response time by 35% through database query optimization',
        'Enabled real-time expense tracking for 1000+ concurrent users',
        'Delivered actionable spending insights within seconds of transaction entry',
      ],
    },
  ];

  const toggleExpand = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <section
      id="projects"
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
            Case Studies
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto">
            Real problems. Thoughtful solutions. Measurable impact.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const isExpanded = expandedProject === index;
            return (
              <div
                key={index}
                className={`group backdrop-blur-xl bg-white/10 dark:bg-gray-800/30 rounded-2xl border border-emerald-500/20 shadow-xl shadow-emerald-500/10 transition-all duration-700 hover:shadow-emerald-500/30 overflow-hidden ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } ${isExpanded ? 'scale-[1.02]' : ''}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="p-6 sm:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-4 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <Icon size={32} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm sm:text-base text-emerald-600 dark:text-emerald-400 italic">
                        {project.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs sm:text-sm font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full border border-emerald-500/20 backdrop-blur-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Target size={20} className="text-emerald-500" />
                        <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200">The Problem</h4>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed pl-7">
                        {project.problem}
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Wrench size={20} className="text-emerald-500" />
                        <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200">My Approach</h4>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed pl-7">
                        {project.approach}
                      </p>
                    </div>

                    {isExpanded && (
                      <div className="space-y-6 animate-fadeIn">
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <AlertCircle size={20} className="text-emerald-500" />
                            <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200">Technical Challenges</h4>
                          </div>
                          <ul className="space-y-2 pl-7">
                            {project.challenges.map((challenge, cIndex) => (
                              <li
                                key={cIndex}
                                className="text-gray-700 dark:text-gray-300 leading-relaxed flex items-start gap-2"
                              >
                                <span className="text-emerald-500 mt-1.5 flex-shrink-0">●</span>
                                <span>{challenge}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <Impact size={20} className="text-emerald-500" />
                            <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200">Impact & Results</h4>
                          </div>
                          <ul className="space-y-2 pl-7">
                            {project.impact.map((result, rIndex) => (
                              <li
                                key={rIndex}
                                className="text-gray-700 dark:text-gray-300 leading-relaxed flex items-start gap-2"
                              >
                                <span className="text-emerald-500 mt-1.5 flex-shrink-0">✓</span>
                                <span className="font-medium">{result}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => toggleExpand(index)}
                    className="mt-6 flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold hover:text-emerald-500 transition-colors"
                  >
                    <span>{isExpanded ? 'Show Less' : 'View Full Case Study'}</span>
                    {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
