import { Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Trina Banerjee. All rights reserved.
            </p>
          </div>

          <div className="flex gap-2">
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
            <Button 
              size="icon" 
              variant="ghost" 
              className="hover:text-primary"
              asChild
            >
              <a 
                href="mailto:trinabanerjee08@hotmail.com"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
