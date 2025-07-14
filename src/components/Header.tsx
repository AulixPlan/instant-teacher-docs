import { Button } from "@/components/ui/button";

export const Header = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511973367370?text=Ol%C3%A1%2C%20como%20voc%C3%AA%20pode%20me%20ajudar%3F", "_blank");
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-card/20 backdrop-blur-sm border-b border-primary/20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/logo_aulix_white.png" 
            alt="Aulix"
            className="h-8 w-auto"
          />
        </div>

        {/* CTA Button */}
        <Button 
          onClick={handleWhatsAppClick}
          className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-medium backdrop-blur-sm"
        >
          Fale com a Aulix no WhatsApp
        </Button>
      </div>
    </header>
  );
};
