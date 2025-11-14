import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-gradient mb-4">PlaywrightPro</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Advanced Python automation framework with comprehensive testing capabilities, 
              beautiful reporting, and modern development practices.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="hover:bg-primary/10"
                onClick={() => window.open('https://github.com/shaymc3', '_blank')}
              >
                <Github className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="hover:bg-primary/10"
                onClick={() => window.open('https://www.linkedin.com/in/shaycohen27', '_blank')}
              >
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="hover:bg-primary/10"
                onClick={() => window.open('mailto:shayc.qa@gmail.com')}
              >
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button 
                className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Features
              </button>
              <button 
                className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Demo
              </button>
              <button 
                className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                onClick={() => document.getElementById('guide')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Installation
              </button>
              <button 
                className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                About
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Technologies</h4>
            <div className="space-y-2 text-muted-foreground">
              <div>Playwright</div>
              <div>Python</div>
              <div>pytest</div>
              <div>Allure Reports</div>
              <div>pandas</div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} PlaywrightPro. Built with{" "}
            <Heart className="inline h-4 w-4 text-red-500 mx-1" />
            and modern web technologies.
          </p>
          <p className="text-muted-foreground text-sm mt-2 md:mt-0">
            Powered by React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;