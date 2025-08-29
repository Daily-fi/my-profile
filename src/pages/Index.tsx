import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Lamp, Linkedin, Twitter, Github, Mail } from "lucide-react";
// Using uploaded founder photo

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          
          {/* Avatar */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
            <img
                src="/lovable-uploads/4c08c45e-755c-423d-b5ac-3a92cf1e4424.png"
                alt="Mearaf Tadewos Tiranchie Profile"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary/20 shadow-2xl"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-hero opacity-20"></div>
            </div>
          </div>

          {/* Name & Title */}
          <div className="mb-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-hero-primary to-hero-secondary bg-clip-text text-transparent">
              Mearaf Tadewos Tiranchie
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-4">
              Tech Entrepreneur & Innovation Leader
            </h2>
            <div className="flex flex-wrap gap-2 justify-center mb-6">
              <Badge variant="secondary" className="text-sm">Founder</Badge>
              <Badge variant="secondary" className="text-sm">AI & Blockchain</Badge>
              <Badge variant="secondary" className="text-sm">Sustainability Advocate</Badge>
            </div>
          </div>

          {/* Bio */}
          <div className="mb-8 max-w-2xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Building the future of human-centered technology at the intersection of innovation and sustainability. 
              Passionate about creating solutions that enhance human potential while respecting our planet.
            </p>
          </div>

          {/* CTA Buttons */} 
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              variant="hero"
              size="lg"
              asChild
              className="group"
            >
              <a 
                href="https://placid.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Visit Placid
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              asChild
              className="hover:bg-gradient-hero hover:text-white hover:border-transparent transition-all duration-300"
            >
              <a 
                href="https://medium.com/@mearaftadewos/sustainably-thriving-borderless-city-0642fa6f8eca" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Lamp className="w-4 h-4" />
                Inspiration & Vision
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Linkedin className="w-5 h-5" href="https://www.linkedin.com/in/mearaf-tadewos-634228174/"/>
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Twitter className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Github className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Mail className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-hero-primary to-hero-secondary bg-clip-text text-transparent">
            Experience & Vision
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 bg-gradient-card border-primary/10 hover:border-primary/20 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-primary">Tech Innovation</h3>
              <p className="text-muted-foreground">
                Leading breakthrough initiatives in AI, sustainable technology, and human-computer interaction. 
                Focused on developing solutions that amplify human capabilities while maintaining ethical standards.
              </p>
            </Card>
            
            <Card className="p-6 bg-gradient-card border-primary/10 hover:border-primary/20 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-primary">Sustainable Future</h3>
              <p className="text-muted-foreground">
                Committed to building technology that serves humanity without compromising our planet. 
                Advocating for responsible innovation that balances progress with environmental stewardship.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-primary/10">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-muted-foreground mb-4">
            Ready to collaborate on the next breakthrough?
          </p>
          <Button 
            variant="placid"
            size="lg"
            asChild
            className="group"
          >
            <a 
              href="https://placid.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Explore Placid
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default Index;