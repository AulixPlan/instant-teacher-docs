import { Button } from "@/components/ui/button";

export const Header = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511973367370", "_blank");
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-sm border-b border-white/20">
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
          variant="secondary"
          className="bg-white/20 text-white border border-white/30 hover:bg-white/30 backdrop-blur-sm"
        >
          Falar no WhatsApp
        </Button>
      </div>
    </header>
  );
};