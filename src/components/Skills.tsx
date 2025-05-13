
import { cn } from "@/lib/utils";

interface SkillCategoryProps {
  title: string;
  skills: string[];
  delay?: number;
}

const SkillCategory = ({ title, skills, delay = 0 }: SkillCategoryProps) => {
  return (
    <div 
      className="glass-card rounded-xl p-6 animate-fade-in" 
      style={{ animationDelay: `${delay}s` }}
    >
      <h3 className="text-xl font-semibold mb-4 gradient-text">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span 
            key={index}
            className="bg-dark-100/60 text-gray-300 px-3 py-1.5 rounded-full text-sm hover:bg-primary/20 hover:text-primary transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const skillsData = [
    {
      title: "Languages",
      skills: ["Python", "SQL", "R", "Java", "JavaScript", "C++", "C#", "COBOL"]
    },
    {
      title: "Libraries & Frameworks",
      skills: ["TensorFlow", "Scikit-learn", "Keras", "Pandas", "NumPy", "Matplotlib", "PyTorch", "NLTK", "Transformers"]
    },
    {
      title: "Tools & Platforms",
      skills: ["Docker", "Kubernetes", "Jenkins", "AWS", "Azure", "Power BI", "Tableau", "FastAPI", "Flask", "Streamlit"]
    },
    {
      title: "Specializations",
      skills: ["MLOps", "GenAI (GPT, RAG, Diffusion)", "Time Series Analysis", "Statistical Modeling", "Computer Vision", "NLP", "Reinforcement Learning"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-dark-300">
      <div className="section-container">
        <h2 className="section-title">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {skillsData.map((category, index) => (
            <SkillCategory 
              key={index}
              title={category.title}
              skills={category.skills}
              delay={index * 0.1}
            />
          ))}
        </div>

        <div className="mt-16 glass-card rounded-xl p-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <h3 className="text-xl font-semibold mb-6 text-center gradient-text">Technical Expertise</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/20 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 3H3v7h18V3z"></path><path d="M21 14H3v7h18v-7z"></path><path d="M7 7h.01"></path><path d="M7 18h.01"></path></svg>
              </div>
              <h4 className="font-medium">Data Engineering</h4>
              <p className="text-gray-400 text-sm">Building scalable data pipelines</p>
            </div>

            <div className="flex flex-col items-center text-center space-y-2">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/20 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><line x1="12" x2="12" y1="22" y2="12"></line></svg>
              </div>
              <h4 className="font-medium">Machine Learning</h4>
              <p className="text-gray-400 text-sm">Advanced ML models & algorithms</p>
            </div>

            <div className="flex flex-col items-center text-center space-y-2">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/20 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"></path><path d="M7 7h.01"></path></svg>
              </div>
              <h4 className="font-medium">AI Strategy</h4>
              <p className="text-gray-400 text-sm">Business-aligned AI solutions</p>
            </div>

            <div className="flex flex-col items-center text-center space-y-2">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/20 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path></svg>
              </div>
              <h4 className="font-medium">MLOps</h4>
              <p className="text-gray-400 text-sm">Continuous ML deployment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
