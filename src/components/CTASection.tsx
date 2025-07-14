import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Shield, Users, Clock, Instagram, Facebook } from "lucide-react";

export const CTASection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511973367370", "_blank");
  };

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 opacity-95"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl animate-float" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Urgency Badge */}
          <Badge className="bg-white/20 text-white border-white/30 mb-6">
            <Users className="w-4 h-4 mr-2" />
            Centenas de professores já usam a Aulix
          </Badge>

          {/* Main CTA Headline */}
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
            Pare de perder seus fins de semana com{" "}
            <span className="text-yellow-300">relatórios e planejamentos</span>
          </h2>

          <p className="text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed">
            Comece agora e economize horas toda semana! 
            Seus documentos pedagógicos prontos em minutos, direto no WhatsApp.
          </p>

          {/* Risk-Free Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Clock className="w-6 h-6 text-yellow-300 flex-shrink-0" />
              <span className="font-medium">Teste grátis por 24 horas</span>
            </div>
            <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Shield className="w-6 h-6 text-yellow-300 flex-shrink-0" />
              <span className="font-medium">Cancele a qualquer tempo</span>
            </div>
            <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <MessageCircle className="w-6 h-6 text-yellow-300 flex-shrink-0" />
              <span className="font-medium">Suporte humanizado</span>
            </div>
          </div>

          {/* Main CTA Button */}
          <div className="mb-8">
            <Button 
              size="lg" 
              variant="cta" 
              onClick={handleWhatsAppClick}
              className="text-xl px-12 py-6 h-auto bg-gradient-success hover:shadow-glow hover:scale-110 transition-all duration-300"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Quero meus documentos prontos com a Aulix
            </Button>
          </div>

          {/* Contact Information */}
          <div className="text-center space-y-4">
            <p className="text-white/80">
              Fale agora com a Aulix:{" "}
              <a 
                href="tel:+5511973367370" 
                className="font-bold text-yellow-300 hover:text-yellow-200 transition-colors"
              >
                (11) 97336-7370
              </a>
            </p>
            
            <div className="flex justify-center gap-6">
              <a 
                href="https://www.instagram.com/aulixplanejamento" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors font-medium flex items-center gap-2"
              >
                <Instagram className="w-5 h-5" />
                Instagram
              </a>
              <a 
                href="https://facebook.com/aulixplanejamento" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors font-medium flex items-center gap-2"
              >
                <Facebook className="w-5 h-5" />
                Facebook
              </a>
            </div>
          </div>

          {/* Final Guarantee */}
          <div className="mt-12 inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
            <Shield className="w-5 h-5 text-yellow-300" />
            <span className="text-sm font-medium">
              Garantia de satisfação • Risco zero • Suporte completo
            </span>
          </div>

          {/* Copyright */}
          <div className="mt-16 pt-8 border-t border-white/20 text-center">
            <div className="flex justify-center mb-4">
              <img 
                src="/lovable-uploads/logo_aulix_white.png" 
                alt="Aulix"
                className="h-8 w-auto opacity-80"
              />
            </div>
            <p className="text-white/60 text-sm">
              © 2025 <b style="color:#3b82f6;">Aulix</b>, a assistente de IA generativa amiga dos professores! 🧑‍🏫<br />
              Todos os direitos reservados. | Desenvolvido com ❤️ para educadores brasileiros.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
