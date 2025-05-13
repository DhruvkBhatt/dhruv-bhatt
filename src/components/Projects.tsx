
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  tools: string[];
  image: string;
  link?: string;
  github?: string;
  index: number;
}

const ProjectCard = ({ title, description, tools, image, link, github, index }: ProjectCardProps) => {
  return (
    <div 
      className="glass-card rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in transform hover:-translate-y-2"
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      <div className="h-48 bg-dark-100 relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover opacity-70 transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-300 to-transparent"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tools.map((tool, i) => (
            <span 
              key={i} 
              className="bg-dark-300/60 text-gray-400 text-xs px-2 py-1 rounded-full"
            >
              {tool}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3">
          {link && (
            <Button 
              variant="outline" 
              size="sm" 
              className="text-xs border-primary/50 text-primary hover:bg-primary/10 px-3 rounded-full"
              asChild
            >
              <a href={link} target="_blank" rel="noopener noreferrer">
                <svg className="mr-1.5 h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
                Live Demo
              </a>
            </Button>
          )}
          
          {github && (
            <Button 
              variant="outline" 
              size="sm" 
              className="text-xs border-gray-500/50 text-gray-400 hover:bg-dark-100 px-3 rounded-full"
              asChild
            >
              <a href={github} target="_blank" rel="noopener noreferrer">
                <svg className="mr-1.5 h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                GitHub
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState<string>("all");
  
  const projects = [
    {
      title: "Stock Market Forecasting",
      description: "Advanced time series forecasting model for stock market prediction with high accuracy.",
      tools: ["Python", "TensorFlow", "Time Series", "Finance"],
      image: "/placeholder.svg",
      categories: ["Finance", "Forecasting"]
    },
    {
      title: "Investor Transcript Summarization",
      description: "AI-powered tool that analyzes and summarizes investor call transcripts for key insights.",
      tools: ["NLP", "Transformers", "Finance", "Python"],
      image: "/placeholder.svg",
      categories: ["Finance", "NLP"]
    },
    {
      title: "Distributor Fraud Detection",
      description: "ML system to detect fraudulent activities in distributor networks with high precision.",
      tools: ["Machine Learning", "Python", "Data Analysis"],
      image: "/placeholder.svg",
      categories: ["Finance", "Security"]
    },
    {
      title: "AI Chat Assistant",
      description: "Intelligent chat assistant built with advanced NLP and conversational AI technologies.",
      tools: ["NLP", "GenAI", "Streamlit", "Python"],
      image: "/placeholder.svg",
      link: "https://dhruvbhatt-aichat.streamlit.app/",
      categories: ["NLP", "Web App"]
    },
    {
      title: "Travel Website",
      description: "Modern travel website with booking capabilities and personalized recommendations.",
      tools: ["Web Development", "UI/UX", "JavaScript"],
      image: "/placeholder.svg",
      link: "https://www.maachamundatravel.com/",
      categories: ["Web App"]
    },
    {
      title: "Resource Prediction System",
      description: "ML-based system for predicting and optimizing resource allocation in enterprise environments.",
      tools: ["Machine Learning", "Python", "Optimization"],
      image: "/placeholder.svg",
      categories: ["Forecasting", "Enterprise"]
    }
  ];
  
  const categories = ["all", "Finance", "NLP", "Forecasting", "Web App", "Security", "Enterprise"];
  
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.categories.includes(filter));

  return (
    <section id="projects" className="py-20">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        
        <div className="flex flex-wrap justify-center gap-2 mt-8 mb-12">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={filter === category ? "default" : "outline"}
              size="sm"
              className={cn(
                "rounded-full capitalize",
                filter === category 
                  ? "bg-primary hover:bg-primary/90" 
                  : "text-gray-400 border-gray-700 hover:bg-dark-100"
              )}
              onClick={() => setFilter(category)}
            >
              {category}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tools={project.tools}
              image={project.image}
              link={project.link}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
