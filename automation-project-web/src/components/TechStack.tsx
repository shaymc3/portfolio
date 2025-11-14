import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect, useRef, useState } from "react";

const TechStack = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const technologies = [
    { name: "Playwright", description: "Modern web automation framework", icon: "🎭" },
    { name: "Python", description: "Core programming language", icon: "🐍" },
    { name: "pytest", description: "Advanced testing framework", icon: "🧪" },
    { name: "pandas", description: "Data analysis and manipulation", icon: "🐼" },
    { name: "allure-pytest", description: "Beautiful test reporting", icon: "📊" },
    { name: "requests", description: "HTTP library for API testing", icon: "🌐" },
    { name: "loguru", description: "Advanced logging capabilities", icon: "📝" },
    { name: "pytest-xdist", description: "Parallel test execution", icon: "⚡" },
    { name: "openpyxl", description: "Excel file processing", icon: "📈" },
    { name: "Docker", description: "Containerization platform", icon: "🐳" }
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
    <section id="features" ref={sectionRef} className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Tech Stack</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built with cutting-edge technologies for robust automation and comprehensive testing
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <Card 
              key={tech.name}
              className={`p-6 bg-secondary/50 border-border hover:border-primary/50 transition-all duration-500 card-shadow hover:scale-105 ${
                isVisible ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                <div className="text-4xl mb-4">{tech.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{tech.name}</h3>
                <p className="text-muted-foreground">{tech.description}</p>
                <Badge variant="secondary" className="mt-3 bg-primary/10 text-primary border-primary/20">
                  Library
                </Badge>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;