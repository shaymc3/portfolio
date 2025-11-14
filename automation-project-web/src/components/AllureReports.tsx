import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, ExternalLink, FileText, BarChart3, Clock } from "lucide-react";
import { useState } from "react";
import allureDashboard from "@/assets/allure-dashboard.jpg";
import allureResults from "@/assets/allure-results.jpg";
import allureTimeline from "@/assets/allure-timeline.jpg";

const AllureReports = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 'dashboard',
      title: 'Test Dashboard',
      description: 'Overview of test execution with key metrics and statistics',
      image: allureDashboard,
      features: ['Test Summary', 'Success Rate', 'Execution Timeline', 'Environment Info']
    },
    {
      id: 'results',
      title: 'Detailed Results',
      description: 'Comprehensive test case results with logs and attachments',
      image: allureResults,
      features: ['Test Cases', 'Error Details', 'Screenshots', 'Step-by-Step Logs']
    },
    {
      id: 'timeline',
      title: 'Timeline & Trends',
      description: 'Historical test execution data and performance trends',
      image: allureTimeline,
      features: ['Execution History', 'Trend Analysis', 'Performance Metrics', 'Comparison Tools']
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section id="reports" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Allure Reports</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Beautiful, comprehensive test reports with detailed insights and interactive features
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 px-4">
            {/* Screenshot Carousel */}
            <Card className="bg-card/50 border-border card-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center text-xl">
                    <FileText className="mr-2 h-5 w-5 text-primary" />
                    {currentSlideData.title}
                  </CardTitle>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={prevSlide}
                      className="h-8 w-8 p-0"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={nextSlide}
                      className="h-8 w-8 p-0"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{currentSlideData.description}</p>
              </CardHeader>
              <CardContent className="p-0">
                <div className="relative aspect-video bg-muted rounded-md overflow-hidden">
                  <img
                    src={currentSlideData.image}
                    alt={currentSlideData.title}
                    className="w-50 h-full object-cover transition-opacity duration-300 border-5 border-border rounded-md"
                  />
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentSlide ? 'bg-primary' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-semibold mb-3">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {currentSlideData.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Report Information */}
            <div className="space-y-6">
              <Card className="bg-card/50 border-border card-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <BarChart3 className="mr-2 h-5 w-5 text-primary" />
                    Report Highlights
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Total Test Cases</span>
                      <Badge variant="secondary" className="text-lg px-3 py-1">342</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Success Rate</span>
                      <Badge className="bg-green-500/10 text-green-500 text-lg px-3 py-1">94.7%</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Execution Time</span>
                      <Badge variant="outline" className="text-lg px-3 py-1">18m 32s</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Report Size</span>
                      <Badge variant="outline" className="text-lg px-3 py-1">2.4 MB</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border card-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Clock className="mr-2 h-5 w-5 text-primary" />
                    Latest Report
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-sm text-muted-foreground">
                      Last generated: <span className="text-foreground font-mono">2024-01-15 14:32:18</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Environment: <Badge variant="outline" className="ml-1">Production</Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Browser: <Badge variant="outline" className="ml-1">Chrome 120.0</Badge>
                    </div>
                    <Button 
                      className="w-full mt-4"
                      onClick={() => window.open('https://playwright-automation-reports.netlify.app', '_blank')}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Live Report
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary/10 border-primary/20 card-shadow">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <h4 className="font-semibold text-primary mb-2">💡 Interactive Features</h4>
                    <ul className="text-sm text-muted-foreground space-y-1 text-left">
                      <li>• Click on test cases to see detailed execution logs</li>
                      <li>• Filter results by status, tags, or test suites</li>
                      <li>• Download attachments and screenshots</li>
                      <li>• Compare test runs across different environments</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllureReports;