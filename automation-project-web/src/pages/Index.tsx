import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import VideoDemo from "@/components/VideoDemo";
import Analytics from "@/components/Analytics";
import AllureReports from "@/components/AllureReports";
import InstallationGuide from "@/components/InstallationGuide";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <Navigation />
      <div id="hero">
        <Hero />
      </div>
      <TechStack />
      <VideoDemo />
      <Analytics />
      <AllureReports />
      <InstallationGuide />
      <About />
      <Footer />
    </div>
  );
};

export default Index;
