
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-16 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/20 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile image (left side) */}
          <div className="flex justify-center lg:justify-start animate-fade-in">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/40 p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-primary/30 to-accent/30">
                  <img 
                    src="https://media.licdn.com/dms/image/v2/D4D03AQGcL7w2A90PnQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1686865652579?e=1752710400&v=beta&t=YGsCK149Rxr9emt-m8gjI0WGVCwPogGDt2NhIUmX5eA" 
                    alt="Dhruv Bhatt" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 bg-dark-200 rounded-full px-4 py-2 border border-primary/30 glass-card">
                <span className="text-sm font-medium">7+ Years Experience</span>
              </div>
            </div>
          </div>
          
          {/* Text content (right side) */}
          <div className="text-center lg:text-left">
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                  Hi, I'm <span className="gradient-text">Dhruv Bhatt</span>
                </h1>
                <h2 className="text-xl md:text-2xl font-medium text-gray-300">
                  Building Scalable AI Solutions for the Real World
                </h2>
              </div>
              
              <p className="text-gray-400 max-w-lg mx-auto lg:mx-0">
                Data Scientist with 7+ years specializing in enterprise-grade ML systems. 
                Dual Masters in Computer Science and MBA, with a track record of 
                delivering impactful AI solutions across multiple industries.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Button 
                  className="bg-primary hover:bg-primary/90 text-white rounded-full px-8"
                  asChild
                >
                  <a href="#projects">View My Work</a>
                </Button>
                <Button 
                  variant="outline" 
                  className="rounded-full border-primary text-primary hover:bg-primary/10 px-8"
                  asChild
                >
                  <a href="#contact">Contact Me</a>
                </Button>
              </div>
              
              <div className="flex gap-6 justify-center lg:justify-start pt-6">
                <a 
                  href="https://www.linkedin.com/in/dhruv-bhatt-21892210b/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className=""><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a 
                  href="https://github.com/DhruvkBhatt" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className=""><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-400 hover:text-primary transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className=""><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
