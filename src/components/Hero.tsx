import { Button } from "@/components/ui/button";
import { Download, Linkedin, Mail, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profileImage from "@/assets/trina-profile.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img 
                src={profileImage} 
                alt="Trina Banerjee" 
                className="w-48 h-48 rounded-full object-cover border-4 border-primary shadow-2xl"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Trina Banerjee
          </h1>
          <p className="text-xl md:text-2xl gradient-text font-semibold mb-4">
            Lead, Service Integration Engineer
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            13+ years of experience in middleware technology and implementation, 
            specializing in MuleSoft ESB, IBM Integration Bus, and building scalable 
            RESTful APIs and microservices architectures.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center mb-12">
            <Button size="lg" className="group" asChild>
              <a href="/Trina_Banerjee_Resume.pdf" download="Trina_Banerjee_Resume.pdf">
                Download Resume
                <Download className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center">
            <Button 
              size="icon" 
              variant="ghost" 
              className="hover:text-primary"
              asChild
            >
              <a 
                href="https://www.linkedin.com/in/trina-b-b58212180/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
