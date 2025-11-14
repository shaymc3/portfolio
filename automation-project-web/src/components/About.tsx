import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Mail, Github, Award, Code, Briefcase } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills = [
    "Test Automation",
    "Playwright",
    "Python",
    "Unitest",
    "API Testing",
    "CI/CD",
    "Performance Testing",
    "Quality Assurance"
  ];

const achievements = [
  { icon: Award, title: "QA Automation Enthusiast", description: "Recently started developing automated tests with Playwright and Pytest" },
  { icon: Code, title: "Personal Projects", description: "Built multiple automation scripts and testing frameworks for learning and practice" },
  { icon: Briefcase, title: "Continuous Learner", description: "Exploring API/UI testing, Docker, CI/CD, and new technologies regularly" }
];

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

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">About Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Automation engineer dedicated to delivering robust testing solutions
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className={`bg-card/50 border-border card-shadow ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-shrink-0">
                      <div className="w-32 h-32 rounded-full bg-gradient-primary p-1">
                        <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                          <div className="text-4xl font-bold text-gradient">JD</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-4 text-foreground">Shay Cohen</h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        I am a software tester with a passion for coding and a love for the field. 
                        Recently, I have focused on developing automated tests using Playwright, Pytest, and Python,
                        and I find great interest in everything related to automation and software quality testing.
                        I enjoy learning and implementing solutions that streamline the testing process and deliver accurate and reliable results.
                      </p>
                      
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        Additionally, I specialize in working with API and UI testing, including preparing well-structured reports in Allure,
                        and I conduct thorough Unitest testing. I am skilled in Docker and CI/CD workflows using GitHub Actions, 
                        and I always enjoy exploring and learning new technologies. 
                        I place strong emphasis on writing clean, organized, and readable code, 
                        believing that it is an essential part of professional development and testing. 
                        My work is based on order, professionalism, and achieving the highest quality results.
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {skills.map((skill) => (
                          <Badge 
                            key={skill} 
                            variant="secondary" 
                            className="bg-primary/10 text-primary border-primary/20"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex flex-wrap gap-3">
                        <Button
                          variant="default"
                          size="sm"
                          className="gradient-primary hover:scale-105 transition-all duration-300"
                          onClick={() => window.open('https://www.linkedin.com/in/shaycohen27', '_blank')}
                        >
                          <Linkedin className="mr-2 h-4 w-4" />
                          LinkedIn
                        </Button>
                        
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-primary/50 hover:bg-primary/10"
                          onClick={() => window.open('https://github.com/shaymc3', '_blank')}
                        >
                          <Github className="mr-2 h-4 w-4" />
                          GitHub
                        </Button>
                        
                        <Button
                          variant="ghost"
                          size="sm"
                          className="hover:bg-accent/10"
                          onClick={() => window.open('mailto:shayc.qa@email.com')}
                        >
                          <Mail className="mr-2 h-4 w-4" />
                          Contact
                        </Button>
                        
                        <Button
                          variant="secondary"
                          size="sm"
                          className="bg-secondary hover:bg-secondary/80"
                          onClick={() => window.open('https://shaymc3.github.io/portfolio', '_blank')}
                        >
                          Website
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <Card 
                  key={achievement.title}
                  className={`bg-card/50 border-border card-shadow hover:border-primary/50 transition-all duration-500 ${
                    isVisible ? 'animate-slide-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${(index + 1) * 0.2}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <achievement.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{achievement.title}</h4>
                        <p className="text-sm text-muted-foreground">{achievement.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              <Card className={`bg-card/50 border-border card-shadow ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold text-foreground mb-4">Let's Connect</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Interested in collaboration or have questions about automation testing?
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full border-primary/50 hover:bg-primary/10"
                    onClick={() => window.open('https://www.linkedin.com/in/shaycohen27', '_blank')}
                  >
                    <Linkedin className="mr-2 h-4 w-4" />
                    Connect on LinkedIn
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;