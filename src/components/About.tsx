
import { cn } from "@/lib/utils";

interface EducationItemProps {
  year: string;
  degree: string;
  institution: string;
  grade?: string;
  index: number;
}

const EducationItem = ({ year, degree, institution, grade, index }: EducationItemProps) => {
  return (
    <div 
      className="timeline-container animate-fade-in" 
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      <div className="timeline-dot"></div>
      <div className="font-medium text-primary">{year}</div>
      <h3 className="text-xl font-medium mt-1">{degree}</h3>
      <p className="text-gray-400">{institution}</p>
      {grade && <p className="text-gray-500 text-sm mt-1">Grade: {grade}</p>}
    </div>
  );
};

const About = () => {
  const educationData = [
    {
      year: "2024",
      degree: "Software Development & Problem Solving",
      institution: "Scaler",
    },
    {
      year: "2023",
      degree: "MBA, Digital-Finance & Banking",
      institution: "OP-JINDAL",
    },
    {
      year: "2021",
      degree: "M.Tech in Computer Science",
      institution: "BITS Pilani",
      grade: "85%",
    },
    {
      year: "2018",
      degree: "B.Tech in Computer Science",
      institution: "Dharmsinh Desai University",
      grade: "81.8%",
    },
  ];

  return (
    <section id="about" className="py-20 bg-dark-300">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Bio Summary */}
          <div className="space-y-6">
            <div className="glass-card p-6 rounded-xl animate-fade-in">
              <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  As a seasoned Data Scientist with over 7 years of experience, I've developed expertise in building
                  machine learning systems, developing AI pipelines, and delivering scalable data science solutions
                  for enterprise impact.
                </p>
                <p>
                  My dual expertise in technical implementation and business strategy allows me to bridge the gap
                  between complex data problems and business objectives, delivering solutions that drive
                  real-world value.
                </p>
                <p>
                  I've worked across multiple industries including finance, CPG, and automotive,
                  leading teams and implementing cutting-edge ML/AI solutions that transform data
                  into strategic business assets.
                </p>
              </div>
            </div>
            
            <div className="glass-card p-6 rounded-xl animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <h3 className="text-2xl font-semibold mb-4">My Approach</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  I believe in building AI solutions that are not just technically sound but also aligned with
                  business goals and scalable for enterprise needs. My approach combines rigorous data science
                  methodology with pragmatic business acumen.
                </p>
                <p>
                  Whether it's developing algorithms for stock market forecasting, implementing fraud detection
                  systems, or creating AI-powered assistants, I focus on delivering solutions that provide
                  measurable value and drive innovation.
                </p>
              </div>
            </div>
          </div>
          
          {/* Education Timeline */}
          <div>
            <div className="glass-card p-6 rounded-xl h-full">
              <h3 className="text-2xl font-semibold mb-6">Education</h3>
              <div className="space-y-2">
                {educationData.map((item, index) => (
                  <EducationItem 
                    key={index}
                    year={item.year}
                    degree={item.degree}
                    institution={item.institution}
                    grade={item.grade}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
