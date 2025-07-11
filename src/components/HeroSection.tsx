import { Button } from "@/components/ui/button";
import heroTeacher from "@/assets/hero-teacher.jpg";

export const HeroSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511973367370", "_blank");
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background to-card overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-secondary/10 rounded-full blur-xl"></div>
      
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[calc(100vh-6rem)]">
          
          {/* Content */}
          <div className="space-y-8 order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-primary/30">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
              Inteligência Artificial para Educação
            </div>
            
            {/* Main headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-primary">Chega de perder horas</span><br />
                <span className="text-foreground">com </span>
                <span className="text-primary font-extrabold">relatórios e planos de aula</span>
              </h1>
              
              <div className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Com a <span className="text-secondary font-semibold">Aulix</span>, professores da Educação Infantil ao Ensino Médio 
                geram documentos pedagógicos direto no <span className="text-secondary font-semibold">WhatsApp</span> — em minutos e com base na BNCC.
              </div>
            </div>
            
            {/* Subheadline */}
            <p className="text-lg text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">Relatórios, planejamentos, avaliações e muito mais.</span> 
              <br />Tudo pronto em instantes, com linguagem profissional e alinhada às diretrizes educacionais.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                onClick={handleWhatsAppClick}
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Teste grátis por 24hs
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary/10 font-medium px-8 py-4 text-lg backdrop-blur-sm border-2"
              >
                Veja exemplos de documentos
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="flex flex-col sm:flex-row gap-6 pt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span>Mais de 1.000 professores cadastrados</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span>Alinhado 100% à BNCC</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span>Suporte gratuito</span>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative order-1 lg:order-2">
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={heroTeacher} 
                  alt="Professora jovem e feliz usando celular"
                  className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -left-6 bg-card border border-primary/20 rounded-2xl p-4 shadow-lg backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-foreground">WhatsApp conectado</span>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-card border border-primary/20 rounded-2xl p-4 shadow-lg backdrop-blur-sm">
                <div className="text-center">
                  <div className="text-lg font-bold text-primary">3 min</div>
                  <div className="text-xs text-muted-foreground">Relatório pronto</div>
                </div>
              </div>
              
              <div className="absolute top-1/2 -right-8 bg-card border border-secondary/20 rounded-xl p-3 shadow-lg backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-xs font-medium text-foreground">BNCC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};