import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-soft">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Hero background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-hero opacity-60"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 py-20">
          <div className="space-y-8">
            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
              Malak Medfai
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
              Développeur frontend passionné par l'expérience utilisateur
            </p>
            
            {/* Call to Action */}
            <div className="pt-8">
              <Button 
                variant="hero" 
                size="lg"
                className="text-lg px-8 py-6 rounded-full font-semibold"
              >
                Afficher mes projets
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-secondary rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-16 h-16 bg-accent rounded-full opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-primary rounded-full opacity-25 animate-pulse delay-500"></div>
      </section>
    </div>
  );
};

export default Index;
