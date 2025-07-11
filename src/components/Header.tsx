import { Button } from "@/components/ui/button";

export const Header = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511973367370", "_blank");
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-sm border-b border-white/20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo - ready for image replacement */}
        <div className="flex items-center">
          <div className="text-2xl font-bold text-white">
            Aulix
          </div>
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