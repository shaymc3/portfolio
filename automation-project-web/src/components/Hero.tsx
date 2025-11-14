import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Play } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen gradient-hero flex items-center justify-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/10 blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-accent/10 blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="text-gradient">Playwright</span><br />
            <span className="text-foreground">Automation</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Advanced Python automation framework with comprehensive testing capabilities, 
            data analysis, and beautiful reporting.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="default" 
              size="lg" 
              className="gradient-primary hover:scale-105 transition-all duration-300 glow-effect"
              onClick={() => scrollToSection('demo')}
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/50 hover:bg-primary/10 hover:scale-105 transition-all duration-300"
              onClick={() => scrollToSection('guide')}
            >
              <Github className="mr-2 h-5 w-5" />
              Get Started
            </Button>
          </div>
          
          <div className="animate-bounce cursor-pointer" onClick={() => scrollToSection('features')}>
            <ArrowDown className="h-8 w-8 text-primary mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;