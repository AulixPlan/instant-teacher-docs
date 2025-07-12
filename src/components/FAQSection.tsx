import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, MessageCircle, Clock, Shield, BookOpen, Users } from "lucide-react";

export const FAQSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511973367370", "_blank");
  };

  const faqs = [
    {
      question: "Como funciona a Aulix? É realmente pelo WhatsApp?",
      answer: "Sim! A Aulix funciona 100% pelo WhatsApp. Você adiciona nosso número, envia suas informações (turma, atividade, objetivos) e em poucos minutos recebe seu documento pronto. Não precisa baixar app nem aprender nada novo - é tudo no WhatsApp que você já usa todos os dias."
    },
    {
      question: "Quanto tempo leva para receber meus documentos?",
      answer: "Em média, seus documentos ficam prontos entre 2 a 5 minutos! Relatórios individuais podem levar até 3 minutos, enquanto planejamentos semanais ficam prontos em até 5 minutos. Muito mais rápido que fazer manualmente, não é?"
    },
    {
      question: "Os documentos seguem a BNCC?",
      answer: "Absolutamente! Todos os documentos são gerados seguindo rigorosamente a Base Nacional Comum Curricular (BNCC). A Aulix conhece todas as competências e habilidades por faixa etária e componente curricular, garantindo que seus planejamentos estejam sempre alinhados."
    },
    {
      question: "Posso usar na Educação Infantil e no Ensino Fundamental?",
      answer: "Sim! A Aulix atende desde a Educação Infantil até o Ensino Médio. Temos templates específicos para cada modalidade: berçário, maternal, pré-escola, fundamental I e II, e ensino médio. Cada documento é adaptado para a faixa etária correspondente."
    },
    {
      question: "Como funciona o teste grátis de 24 horas?",
      answer: "É simples: você se cadastra pelo WhatsApp e tem acesso completo por 24 horas. Pode gerar quantos documentos quiser, testar todos os tipos (relatórios, planejamentos, avaliações). Não pedimos cartão de crédito e você pode cancelar a qualquer momento."
    },
    {
      question: "E se eu não gostar? Posso cancelar?",
      answer: "Claro! Você pode cancelar a qualquer momento, sem burocracia. Basta enviar uma mensagem no WhatsApp pedindo o cancelamento. Não fazemos cobrança automática sem avisar e respeitamos totalmente sua decisão."
    },
    {
      question: "Quantos documentos posso gerar por mês?",
      answer: "No plano mensal e anual, você tem documentos ILIMITADOS! Pode gerar quantos relatórios, planejamentos e avaliações precisar. Não há limite de uso - perfeito para professores que atendem várias turmas."
    },
    {
      question: "A linguagem dos documentos é profissional?",
      answer: "Sim! Todos os documentos são gerados com linguagem técnica e pedagógica adequada. A Aulix foi treinada com milhares de documentos de referência, garantindo que o texto seja sempre profissional e apropriado para apresentar à coordenação."
    },
    {
      question: "Funciona para todas as disciplinas?",
      answer: "Sim! A Aulix gera documentos para todas as disciplinas: Português, Matemática, Ciências, História, Geografia, Arte, Educação Física, Inglês e muito mais. Também atende áreas específicas como Psicopedagogia e Educação Especial."
    },
    {
      question: "Tenho suporte se precisar de ajuda?",
      answer: "Sempre! Nosso suporte é humanizado e funciona pelo próprio WhatsApp. Nossa equipe está disponível para tirar dúvidas, ajudar com documentos específicos e garantir que você aproveite ao máximo a Aulix. Resposta rápida garantida!"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 text-primary border-primary/30">
            <HelpCircle className="w-4 h-4 mr-2" />
            Perguntas Frequentes
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Tire suas dúvidas sobre a{" "}
            <span className="text-primary">Aulix</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            As perguntas mais comuns dos professores que já usam nossa IA pedagógica
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto mb-12">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background rounded-lg border shadow-soft animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <span className="font-semibold text-foreground pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12 animate-fade-in">
          <Card className="bg-background text-center p-6 shadow-soft">
            <CardContent className="p-0">
              <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold text-foreground mb-1">2-5 min</div>
              <div className="text-sm text-muted-foreground">Documentos prontos</div>
            </CardContent>
          </Card>
          
          <Card className="bg-background text-center p-6 shadow-soft">
            <CardContent className="p-0">
              <Users className="w-8 h-8 text-secondary mx-auto mb-3" />
              <div className="text-2xl font-bold text-foreground mb-1">2.000+</div>
              <div className="text-sm text-muted-foreground">Professores ativos</div>
            </CardContent>
          </Card>
          
          <Card className="bg-background text-center p-6 shadow-soft">
            <CardContent className="p-0">
              <BookOpen className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold text-foreground mb-1">10+</div>
              <div className="text-sm text-muted-foreground">Tipos de documentos</div>
            </CardContent>
          </Card>
          
          <Card className="bg-background text-center p-6 shadow-soft">
            <CardContent className="p-0">
              <Shield className="w-8 h-8 text-secondary mx-auto mb-3" />
              <div className="text-2xl font-bold text-foreground mb-1">100%</div>
              <div className="text-sm text-muted-foreground">Alinhado à BNCC</div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in">
          <div className="bg-gradient-card rounded-2xl p-8 shadow-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-muted-foreground mb-6">
              Fale diretamente conosco pelo WhatsApp! Nossa equipe está pronta para 
              esclarecer qualquer questão e te ajudar a começar.
            </p>
            <button 
              onClick={handleWhatsAppClick}
              className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              Falar com Suporte
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};