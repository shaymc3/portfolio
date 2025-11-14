import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Copy, Check, Github, Terminal, Download } from "lucide-react";
import { useState } from "react";

const InstallationGuide = () => {
  const [copiedSteps, setCopiedSteps] = useState<{ [key: string]: boolean }>({});

  const copyToClipboard = (text: string, stepId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSteps({ ...copiedSteps, [stepId]: true });
    setTimeout(() => {
      setCopiedSteps({ ...copiedSteps, [stepId]: false });
    }, 2000);
  };

  const steps = [
    {
      id: 'clone',
      title: 'Clone Repository',
      command: 'git clone https://github.com/yourusername/playwright-automation.git',
      description: 'Clone the project from GitHub to your local machine'
    },
    {
      id: 'navigate',
      title: 'Navigate to Project',
      command: 'cd playwright-automation',
      description: 'Change to the project directory'
    },
    {
      id: 'install',
      title: 'Install Dependencies',
      command: 'pip install -r requirements.txt',
      description: 'Install all required Python packages'
    },
    {
      id: 'browsers',
      title: 'Install Browsers',
      command: 'playwright install',
      description: 'Download browser binaries for Playwright'
    },
    {
      id: 'run',
      title: 'Run Tests',
      command: 'pytest tests/ --alluredir=allure-results',
      description: 'Execute test suite and generate Allure reports'
    }
  ];

  const requirements = [
    'Python 3.8+',
    'pip package manager',
    'Git version control',
    'Node.js (for Playwright browsers)'
  ];

  return (
    <section id="guide" className="py-20 gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Get Started</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Follow these simple steps to clone and run the automation project locally
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <Card className="bg-card/50 border-border card-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Download className="mr-2 h-5 w-5 text-primary" />
                  Prerequisites
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {requirements.map((req, index) => (
                    <div key={index} className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-2" />
                      <span className="text-sm">{req}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 border-border card-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Github className="mr-2 h-5 w-5 text-primary" />
                  Repository
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Stars</span>
                    <Badge variant="secondary">127</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Forks</span>
                    <Badge variant="secondary">34</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Language</span>
                    <Badge className="bg-primary/10 text-primary">Python</Badge>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full mt-4"
                    onClick={() => window.open('https://github.com/yourusername/playwright-automation', '_blank')}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 border-border card-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Terminal className="mr-2 h-5 w-5 text-primary" />
                  Quick Start
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-sm text-muted-foreground">
                    Install everything at once:
                  </div>
                  <div className="bg-background/50 p-3 rounded-md relative">
                    <code className="text-sm text-primary">
                      curl -sSL install.sh | bash
                    </code>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute top-1 right-1 h-8 w-8 p-0"
                      onClick={() => copyToClipboard('curl -sSL install.sh | bash', 'quick')}
                    >
                      {copiedSteps.quick ? (
                        <Check className="h-3 w-3 text-green-500" />
                      ) : (
                        <Copy className="h-3 w-3" />
                      )}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="bg-card/50 border-border card-shadow">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">Step-by-Step Installation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {steps.map((step, index) => (
                  <div key={step.id} className="flex gap-4 min-w-0">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold text-primary">{index + 1}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground mb-3">{step.description}</p>
                      <div className="bg-background/50 p-4 rounded-md relative break-all">
                        <code className="text-primary font-mono text-sm break-words">{step.command}</code>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="absolute top-2 right-2 h-8 w-8 p-0 flex-shrink-0"
                          onClick={() => copyToClipboard(step.command, step.id)}
                        >
                          {copiedSteps[step.id] ? (
                            <Check className="h-4 w-4 text-green-500" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-primary/10 border border-primary/20 rounded-md">
                <h4 className="font-semibold text-primary mb-2">💡 Pro Tips</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Use virtual environment: <code className="text-primary">python -m venv venv</code></li>
                  <li>• Run tests in parallel: <code className="text-primary">pytest -n auto</code></li>
                  <li>• Generate HTML report: <code className="text-primary">allure serve allure-results</code></li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InstallationGuide;