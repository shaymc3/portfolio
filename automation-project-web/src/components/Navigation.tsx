import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const navigationItems = [
    { name: 'Features', id: 'features' },
    { name: 'Demo', id: 'demo' },
    { name: 'Analytics', id: 'analytics' },
    { name: 'Guide', id: 'guide' },
    { name: 'About', id: 'about' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border/50' : 'bg-background/20 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-xl font-bold text-gradient hover:scale-105 transition-transform duration-300"
            >
              ShayCo
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-105"
              >
                {item.name}
              </button>
            ))}
          </div>
          
          {/* Social Links & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="hidden md:flex hover:bg-primary/10"
              onClick={() => window.open('https://github.com/shaymc3', '_blank')}
            >
              <Github className="h-4 w-4" />
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              className="hidden md:flex hover:bg-primary/10"
              onClick={() => window.open('https://www.linkedin.com/in/shaycohen27', '_blank')}
            >
              <Linkedin className="h-4 w-4" />
            </Button>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-card/95 backdrop-blur-md border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-md transition-colors duration-300"
                >
                  {item.name}
                </button>
              ))}
              
              <div className="flex space-x-2 px-3 py-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex-1 justify-center"
                  onClick={() => window.open('https://github.com/shaymc3', '_blank')}
                >
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </Button>
                
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex-1 justify-center"
                  onClick={() => window.open('https://www.linkedin.com/in/shaycohen27', '_blank')}
                >
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;