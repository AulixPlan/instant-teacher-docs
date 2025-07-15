import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MessageCircle, Check, Clock, Shield, Zap, AlertTriangle, ExternalLink } from "lucide-react";
import { useState } from "react";

export const PricingSection = () => {
  const [isMonthlyModalOpen, setIsMonthlyModalOpen] = useState(false);
  const [isAnnualModalOpen, setIsAnnualModalOpen] = useState(false);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511973367370", "_blank");
  };

  const handleMonthlySubscription = () => {
    window.open("https://sandbox.asaas.com/c/paxpelj839y3s8xq", "_blank");
    setIsMonthlyModalOpen(false);
  };

  const handleAnnualSubscription = () => {
    window.open("https://sandbox.asaas.com/c/7mq05ckrl33jjn6q", "_blank");
    setIsAnnualModalOpen(false);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 text-primary border-primary/30">
            Teste grátis por 24h
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Escolha seu plano e{" "}
            <span className="text-primary">economize horas toda semana</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experimente gratuitamente e veja como a Aulix pode transformar sua rotina pedagógica
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Free Trial */}
          <Card className="relative bg-gradient-card hover:shadow-card transition-all duration-300 animate-scale-in">
            <CardHeader className="text-center pb-4">
              <Badge variant="secondary" className="w-fit mx-auto mb-2">
                <Clock className="w-4 h-4 mr-1" />
                Teste Grátis
              </Badge>
              <CardTitle className="text-2xl">24 Horas</CardTitle>
              <div className="text-3xl font-bold text-primary">Grátis</div>
              <p className="text-muted-foreground">Experimente todos os recursos</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span>Acesso completo por 24h</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span>Todos os tipos de documentos</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span>Base BNCC</span>
                </li>
              </ul>
              <Button 
                className="w-full" 
                variant="outline"
                onClick={handleWhatsAppClick}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Testar Grátis
              </Button>
            </CardContent>
          </Card>

          {/* Monthly Plan - Most Popular */}
          <Card className="relative bg-gradient-card hover:shadow-card transition-all duration-300 border-2 border-primary/50 animate-scale-in transform scale-105">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-gradient-success text-white px-4 py-1">
                <Zap className="w-4 h-4 mr-1" />
                Mais Popular
              </Badge>
            </div>
            <CardHeader className="text-center pb-4 pt-8">
              <CardTitle className="text-2xl">Plano Mensal</CardTitle>
              <div className="text-4xl font-bold text-primary">R$ 29,90</div>
              <div className="text-muted-foreground">/mês</div>
              <p className="text-muted-foreground">Para professores dedicados</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span>Documentos ilimitados</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span>10+ tipos de documentos</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span>Suporte prioritário</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span>Atualizações constantes</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span>Cancele quando quiser</span>
                </li>
              </ul>
              <Dialog open={isMonthlyModalOpen} onOpenChange={setIsMonthlyModalOpen}>
                <DialogTrigger asChild>
                  <Button 
                    className="w-full" 
                    variant="hero"
                    size="lg"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Assinar Agora
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px]">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-center text-primary">
                      🎉 Excelente Escolha!
                    </DialogTitle>
                    <DialogDescription className="text-center text-lg">
                      Parabéns por escolher o Plano Mensal da Aulix!
                    </DialogDescription>
                  </DialogHeader>
                  
                  <div className="space-y-6">
                    {/* Observação importante */}
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                      <div className="flex items-start">
                        <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 mr-3 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-yellow-800 mb-2">*ATENÇÃO*</p>
                          <p className="text-yellow-700 text-sm leading-relaxed">
                            Em uma das próximas telas você deverá preencher corretamente seu número de telefone. 
                            Esse número deve ser o número de WhatsApp que você irá acessar o sistema 
                            (o acesso será liberado somente para esse número).
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Informações de liberação */}
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <h3 className="font-semibold text-green-800 mb-2">⚡ Liberação do Acesso:</h3>
                      <ul className="text-green-700 text-sm space-y-1">
                        <li>• <strong>PIX e Cartão de Crédito:</strong> Acesso liberado em minutos</li>
                        <li>• <strong>Boleto:</strong> Até 3 dias úteis após compensação</li>
                      </ul>
                    </div>

                    {/* Botão de ação */}
                    <div className="pt-4">
                      <Button
                        onClick={handleMonthlySubscription}
                        className="w-full bg-primary hover:bg-primary/90"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Continuar Pagamento
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>

          {/* Annual Plan */}
          <Card className="relative bg-gradient-card hover:shadow-card transition-all duration-300 animate-scale-in">
            <CardHeader className="text-center pb-4">
              <Badge variant="outline" className="w-fit mx-auto mb-2 text-secondary border-secondary/30">
                <Shield className="w-4 h-4 mr-1" />
                Melhor Valor
              </Badge>
              <CardTitle className="text-2xl">Plano Anual</CardTitle>
              <div className="text-4xl font-bold text-primary">R$ 299,90</div>
              <div className="text-muted-foreground">/ano</div>
              <div className="text-sm text-secondary font-medium">
                Economize R$ 58,90 no ano!
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span>Tudo do plano mensal</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span>2 meses grátis</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span>Economia e tranquilidade</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span>Acesso antecipado às novidades</span>
                </li>
              </ul>
              <Dialog open={isAnnualModalOpen} onOpenChange={setIsAnnualModalOpen}>
                <DialogTrigger asChild>
                  <Button 
                    className="w-full" 
                    variant="cta"
                    size="lg"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Escolher Anual
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px]">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-center text-secondary">
                      🎉 Excelente Escolha!
                    </DialogTitle>
                    <DialogDescription className="text-center text-lg">
                      Parabéns por escolher o Plano Anual da Aulix! Você economizou R$ 58,90!
                    </DialogDescription>
                  </DialogHeader>
                  
                  <div className="space-y-6">
                    {/* Observação importante */}
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                      <div className="flex items-start">
                        <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 mr-3 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-yellow-800 mb-2">*ATENÇÃO*</p>
                          <p className="text-yellow-700 text-sm leading-relaxed">
                            Em uma das próximas telas você deverá preencher corretamente seu número de telefone. 
                            Esse número deve ser o número de WhatsApp que você irá acessar o sistema 
                            (o acesso será liberado somente para esse número).
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Informações de liberação */}
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <h3 className="font-semibold text-green-800 mb-2">⚡ Liberação do Acesso:</h3>
                      <ul className="text-green-700 text-sm space-y-1">
                        <li>• <strong>PIX e Cartão de Crédito:</strong> Acesso liberado em minutos</li>
                        <li>• <strong>Boleto:</strong> Até 3 dias úteis após compensação</li>
                      </ul>
                    </div>

                    {/* Botão de ação */}
                    <div className="pt-4">
                      <Button
                        onClick={handleAnnualSubscription}
                        className="w-full bg-secondary hover:bg-secondary/90"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Continuar Pagamento
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        </div>

        {/* Guarantee */}
        <div className="text-center mt-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-secondary/10 rounded-full px-6 py-3">
            <Shield className="w-5 h-5 text-secondary" />
            <span className="font-medium">Garantia de satisfação - Cancele quando quiser</span>
          </div>
        </div>
      </div>
    </section>
  );
};
