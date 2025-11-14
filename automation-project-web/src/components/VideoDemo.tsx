import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Maximize } from "lucide-react";
import { useState } from "react";

const VideoDemo = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="demo" className="py-20 gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">See It In Action</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Watch how our automation framework handles complex testing scenarios with ease
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-border card-shadow">
            <div className="relative aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
              {!isPlaying ? (
                <div className="text-center">
                  <Button
                    size="lg"
                    className="gradient-primary hover:scale-110 transition-all duration-300 glow-effect mb-4"
                    onClick={() => setIsPlaying(true)}
                  >
                    <Play className="mr-2 h-6 w-6" />
                    Play Demo Video
                  </Button>
                  <p className="text-muted-foreground">
                    5 minute overview of the automation framework
                  </p>
                </div>
              ) : (
                 <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0"
                  title="Automation Framework Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />

              )}
              
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-4 right-4 text-white/70 hover:text-white"
              >
                <Maximize className="h-4 w-4" />
              </Button>
            </div>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <Card className="p-6 bg-card/50 border-border text-center">
              <h3 className="text-2xl font-bold text-primary mb-2">250+</h3>
              <p className="text-muted-foreground">Test Cases Automated</p>
            </Card>
            <Card className="p-6 bg-card/50 border-border text-center">
              <h3 className="text-2xl font-bold text-accent mb-2">95%</h3>
              <p className="text-muted-foreground">Test Coverage</p>
            </Card>
            <Card className="p-6 bg-card/50 border-border text-center">
              <h3 className="text-2xl font-bold text-primary mb-2">70%</h3>
              <p className="text-muted-foreground">Time Saved</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoDemo;