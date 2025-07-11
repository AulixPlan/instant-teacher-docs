import { Button } from "@/components/ui/button";

export const Header = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511973367370", "_blank");
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-card/20 backdrop-blur-sm border-b border-primary/20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/ffc49d2b-f0f0-4987-bd9d-b2eb5806867c.png" 
            alt="Aulix"
            className="h-8 w-auto"
          />
        </div>

        {/* CTA Button */}
        <Button 
          onClick={handleWhatsAppClick}
          className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-medium backdrop-blur-sm"
        >
          Falar no WhatsApp
        </Button>
      </div>
    </header>
  );
};