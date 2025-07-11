import { Button } from "@/components/ui/button";
import { MessageCircle, FileText, Clock, Sparkles } from "lucide-react";
import heroTeacher from "@/assets/hero-teacher.jpg";

export const HeroSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511973367370", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-background/20"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary-glow/20 rounded-full blur-2xl animate-float" style={{animationDelay: '1s'}}></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Mais de 2.000 professores já usam!</span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                Chega de perder horas com{" "}
                <span className="text-primary-glow">relatórios e planos de aula</span>
              </h1>
              
              {/* Subheadline */}
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
                Com a <strong>Aulix</strong>, professores da Educação Infantil ao Ensino Médio geram 
                documentos pedagógicos direto no WhatsApp — em minutos e com base na BNCC.
              </p>
              
              <p className="text-lg text-white/80">
                Relatórios, planejamentos, avaliações e muito mais. Tudo pronto em instantes, 
                com linguagem profissional e alinhada às diretrizes educacionais.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                variant="cta" 
                onClick={handleWhatsAppClick}
                className="text-lg px-8 py-4 h-auto"
              >
                <MessageCircle className="w-5 h-5" />
                Começar agora no WhatsApp
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-4 h-auto bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
              >
                <FileText className="w-5 h-5" />
                Ver exemplos de documentos
              </Button>
            </div>

            {/* Features quick list */}
            <div className="flex flex-wrap gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-secondary" />
                <span>Em minutos</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-secondary" />
                <span>Base BNCC</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-secondary" />
                <span>Linguagem profissional</span>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative lg:pl-8">
            <div className="relative">
              <img 
                src={heroTeacher} 
                alt="Professora usando Aulix no WhatsApp" 
                className="w-full h-auto rounded-2xl shadow-card animate-scale-in"
              />
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-soft animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-secondary rounded-full"></div>
                  <span className="text-sm font-medium text-foreground">Relatório pronto!</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-soft animate-float" style={{animationDelay: '0.5s'}}>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium text-foreground">Via WhatsApp</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};