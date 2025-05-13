
import { cn } from "@/lib/utils";

interface ExperienceItemProps {
  company: string;
  role: string;
  period: string;
  description: string;
  tags: string[];
  index: number;
}

const ExperienceItem = ({ company, role, period, description, tags, index }: ExperienceItemProps) => {
  return (
    <div 
      className="timeline-container animate-fade-in" 
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      <div className="timeline-dot"></div>
      <div className="bg-dark-100/40 rounded-xl p-6 glass-card">
        <h3 className="text-xl font-semibold">{company}</h3>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-1 mb-3">
          <span className="text-primary font-medium">{role}</span>
          <span className="hidden sm:block text-gray-500">•</span>
          <span className="text-gray-400 text-sm">{period}</span>
        </div>
        <p className="text-gray-300">{description}</p>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, i) => (
            <span 
              key={i} 
              className="bg-dark-300/80 text-xs text-gray-300 px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      company: "Fractal Analytics",
      role: "Sr. Data Scientist / Lead Engineer",
      period: "Dec 2023 – Present",
      description: "Leading data science teams to develop and deploy enterprise-grade AI solutions. Architecting scalable ML pipelines and mentoring junior data scientists.",
      tags: ["AI Pipelines", "MLOps", "Team Leadership", "Enterprise AI"]
    },
    {
      company: "KPIT",
      role: "Senior Engineer / Lead Engineer",
      period: "Jan 2022 – Dec 2023",
      description: "Developed innovative AI solutions for automotive clients. Led cross-functional teams in implementing data-driven decision systems for automotive applications.",
      tags: ["Automotive AI", "Cloud-native", "CI/CD", "Data Engineering"]
    },
    {
      company: "NetApp India",
      role: "Member of Technical Staff",
      period: "Jan 2021 – Dec 2021",
      description: "Designed and implemented data storage solutions with ML capabilities. Optimized data pipelines for improved performance and reliability.",
      tags: ["Data Storage", "Python", "Machine Learning", "Optimization"]
    },
    {
      company: "Freelancer",
      role: "ML Consultant",
      period: "2018 – 2020",
      description: "Provided ML consulting services on Upwork and Fiverr. Developed custom machine learning solutions for clients across various industries.",
      tags: ["Consulting", "ML Solutions", "Client Management", "Remote Work"]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="section-container">
        <h2 className="section-title">Experience</h2>
        
        <div className="mt-12 max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceItem 
              key={index}
              company={exp.company}
              role={exp.role}
              period={exp.period}
              description={exp.description}
              tags={exp.tags}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
