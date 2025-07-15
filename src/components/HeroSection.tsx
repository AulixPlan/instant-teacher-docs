import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, FileText, Calendar, Target, ExternalLink, Mail, Smartphone } from "lucide-react";
import { useState } from "react";
import heroTeacher from "@/assets/hero-teacher.jpg";

export const HeroSection = () => {
  const [isExamplesModalOpen, setIsExamplesModalOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Quero testar a Aulix!");
    window.open(`https://wa.me/5511973367370?text=${message}`, "_blank");
  };

  const handleAulixWhatsApp = () => {
    const message = encodeURIComponent("Faça o meu agora mesmo!");
    window.open(`https://wa.me/5511973367370?text=${message}`, "_blank");
  };

  const examples = {
    planoAula: {
      title: "Plano de Aula",
      icon: FileText,
      whatsapp: `📚 *PLANO DE AULA - 3º ANO FUNDAMENTAL*

🎯 *Disciplina:* Matemática
📅 *Data:* 15/03/2024
⏰ *Duração:* 50 minutos

*TEMA:* Multiplicação - Conceitos Iniciais

*OBJETIVOS:*
• Compreender o conceito de multiplicação como adição de parcelas iguais
• Resolver problemas simples envolvendo multiplicação
• Desenvolver o raciocínio lógico-matemático

*HABILIDADES BNCC:*
(EF03MA07) Resolver e elaborar problemas de multiplicação

*METODOLOGIA:*
1️⃣ Roda de conversa sobre situações do cotidiano
2️⃣ Atividade prática com material concreto
3️⃣ Exercícios no caderno
4️⃣ Jogo educativo em duplas

*RECURSOS:*
• Tampinhas coloridas
• Folha de atividades
• Quadro e giz

*AVALIAÇÃO:*
Observação da participação e resolução dos exercícios propostos

✅ Documento gerado pela Aulix em 2 minutos!`,
      email: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h1 style="color: #2c3e50; text-align: center; margin-bottom: 30px;">📚 PLANO DE AULA - 3º ANO FUNDAMENTAL</h1>
            
            <div style="background-color: #ecf0f1; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h2 style="color: #34495e; margin-top: 0;">Informações Gerais</h2>
              <p><strong>Disciplina:</strong> Matemática</p>
              <p><strong>Data:</strong> 15/03/2024</p>
              <p><strong>Duração:</strong> 50 minutos</p>
              <p><strong>Tema:</strong> Multiplicação - Conceitos Iniciais</p>
            </div>

            <div style="margin-bottom: 20px;">
              <h2 style="color: #34495e;">🎯 Objetivos</h2>
              <ul style="line-height: 1.6;">
                <li>Compreender o conceito de multiplicação como adição de parcelas iguais</li>
                <li>Resolver problemas simples envolvendo multiplicação</li>
                <li>Desenvolver o raciocínio lógico-matemático</li>
              </ul>
            </div>

            <div style="margin-bottom: 20px;">
              <h2 style="color: #34495e;">📋 Habilidades BNCC</h2>
              <p style="background-color: #e8f5e8; padding: 10px; border-radius: 5px; font-weight: bold;">
                (EF03MA07) Resolver e elaborar problemas de multiplicação
              </p>
            </div>

            <div style="margin-bottom: 20px;">
              <h2 style="color: #34495e;">🔧 Metodologia</h2>
              <ol style="line-height: 1.6;">
                <li>Roda de conversa sobre situações do cotidiano</li>
                <li>Atividade prática com material concreto</li>
                <li>Exercícios no caderno</li>
                <li>Jogo educativo em duplas</li>
              </ol>
            </div>

            <div style="text-align: center; margin-top: 30px; padding: 20px; background-color: #e3f2fd; border-radius: 8px;">
              <p style="margin: 0; color: #1976d2; font-weight: bold;">✅ Documento gerado pela Aulix em 2 minutos!</p>
            </div>
          </div>
        </div>
      `,
      googleDocs: "https://docs.google.com/document/d/1example-plano-aula/edit"
    },
    diarioBordo: {
      title: "Diário de Bordo",
      icon: Calendar,
      whatsapp: `📝 *DIÁRIO DE BORDO - TURMA MATERNAL II*

📅 *Data:* 20/03/2024
👥 *Turma:* Maternal II (3-4 anos)
👩‍🏫 *Professora:* Maria Silva

*ATIVIDADES REALIZADAS:*

🌅 *ACOLHIDA (8h-8h30):*
• Roda de conversa sobre o fim de semana
• Música "Bom dia coleguinha"
• 18 crianças presentes

🎨 *ATIVIDADE DIRIGIDA (8h30-9h30):*
• Pintura com tinta guache - tema "Família"
• Desenvolvimento da coordenação motora fina
• Expressão artística e criatividade

🍎 *LANCHE (9h30-10h):*
• Frutas da estação
• Conversa sobre alimentação saudável

🏃‍♀️ *RECREIO (10h-10h30):*
• Brincadeiras livres no parque
• Interação social entre as crianças

📚 *HISTÓRIA (10h30-11h):*
• "O Patinho Feio" - Hans Christian Andersen
• Discussão sobre diferenças e aceitação

*OBSERVAÇÕES:*
• João demonstrou maior interesse nas atividades artísticas
• Ana precisa de apoio na socialização
• Turma muito participativa na roda de conversa

*PRÓXIMAS AÇÕES:*
• Atividade de colagem para João
• Dinâmicas de grupo para Ana

✅ Registro completo gerado pela Aulix!`,
      email: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h1 style="color: #2c3e50; text-align: center; margin-bottom: 30px;">📝 DIÁRIO DE BORDO - TURMA MATERNAL II</h1>
            
            <div style="background-color: #fff3e0; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h2 style="color: #e65100; margin-top: 0;">Informações da Turma</h2>
              <p><strong>Data:</strong> 20/03/2024</p>
              <p><strong>Turma:</strong> Maternal II (3-4 anos)</p>
              <p><strong>Professora:</strong> Maria Silva</p>
              <p><strong>Crianças presentes:</strong> 18</p>
            </div>

            <div style="margin-bottom: 20px;">
              <h2 style="color: #34495e;">🌅 Acolhida (8h-8h30)</h2>
              <ul style="line-height: 1.6;">
                <li>Roda de conversa sobre o fim de semana</li>
                <li>Música "Bom dia coleguinha"</li>
              </ul>
            </div>

            <div style="margin-bottom: 20px;">
              <h2 style="color: #34495e;">🎨 Atividade Dirigida (8h30-9h30)</h2>
              <ul style="line-height: 1.6;">
                <li>Pintura com tinta guache - tema "Família"</li>
                <li>Desenvolvimento da coordenação motora fina</li>
                <li>Expressão artística e criatividade</li>
              </ul>
            </div>

            <div style="margin-bottom: 20px;">
              <h2 style="color: #34495e;">📋 Observações Importantes</h2>
              <div style="background-color: #e8f5e8; padding: 15px; border-radius: 5px;">
                <p>• João demonstrou maior interesse nas atividades artísticas</p>
                <p>• Ana precisa de apoio na socialização</p>
                <p>• Turma muito participativa na roda de conversa</p>
              </div>
            </div>

            <div style="text-align: center; margin-top: 30px; padding: 20px; background-color: #e3f2fd; border-radius: 8px;">
              <p style="margin: 0; color: #1976d2; font-weight: bold;">✅ Registro completo gerado pela Aulix!</p>
            </div>
          </div>
        </div>
      `,
      googleDocs: "https://docs.google.com/document/d/1example-diario-bordo/edit"
    },
    projetoPedagogico: {
      title: "Projeto Pedagógico",
      icon: Target,
      whatsapp: `🌱 *PROJETO PEDAGÓGICO: "PEQUENOS CIENTISTAS"*

🎯 *Público-alvo:* 1º ano do Ensino Fundamental
📅 *Duração:* 4 semanas (Abril/2024)
🔬 *Área:* Ciências da Natureza

*JUSTIFICATIVA:*
Despertar a curiosidade científica nas crianças através de experimentos simples e observação da natureza, desenvolvendo o pensamento crítico e investigativo.

*OBJETIVOS GERAIS:*
• Estimular a curiosidade científica
• Desenvolver habilidades de observação
• Promover o trabalho em equipe
• Introduzir conceitos básicos de ciências

*HABILIDADES BNCC:*
(EF01CI01) Comparar características de diferentes materiais
(EF01CI02) Localizar, nomear e representar partes do corpo
(EF01CI03) Discutir as razões pelas quais os hábitos de higiene são necessários

*CRONOGRAMA:*

📅 *Semana 1:* Estados da Água
• Experimento: gelo derretendo
• Observação da chuva
• Registro em desenhos

📅 *Semana 2:* Plantas e Germinação
• Plantio de feijão no algodão
• Observação diária do crescimento
• Diário da plantinha

📅 *Semana 3:* Corpo Humano
• Exploração dos 5 sentidos
• Jogos sensoriais
• Higiene pessoal

📅 *Semana 4:* Feira de Ciências
• Apresentação dos experimentos
• Exposição dos registros
• Convite às famílias

*RECURSOS NECESSÁRIOS:*
• Materiais para experimentos
• Sementes de feijão
• Lupas
• Cartolinas para registro

*AVALIAÇÃO:*
Observação contínua da participação, curiosidade demonstrada e registros produzidos pelas crianças.

🔬 Projeto completo desenvolvido pela Aulix!`,
      email: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h1 style="color: #2c3e50; text-align: center; margin-bottom: 30px;">🌱 PROJETO PEDAGÓGICO: "PEQUENOS CIENTISTAS"</h1>
            
            <div style="background-color: #e8f5e8; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h2 style="color: #2e7d32; margin-top: 0;">Informações Gerais</h2>
              <p><strong>Público-alvo:</strong> 1º ano do Ensino Fundamental</p>
              <p><strong>Duração:</strong> 4 semanas (Abril/2024)</p>
              <p><strong>Área:</strong> Ciências da Natureza</p>
            </div>

            <div style="margin-bottom: 20px;">
              <h2 style="color: #34495e;">🎯 Justificativa</h2>
              <p style="line-height: 1.6; text-align: justify;">
                Despertar a curiosidade científica nas crianças através de experimentos simples e observação da natureza, 
                desenvolvendo o pensamento crítico e investigativo.
              </p>
            </div>

            <div style="margin-bottom: 20px;">
              <h2 style="color: #34495e;">📋 Objetivos Gerais</h2>
              <ul style="line-height: 1.6;">
                <li>Estimular a curiosidade científica</li>
                <li>Desenvolver habilidades de observação</li>
                <li>Promover o trabalho em equipe</li>
                <li>Introduzir conceitos básicos de ciências</li>
              </ul>
            </div>

            <div style="margin-bottom: 20px;">
              <h2 style="color: #34495e;">📅 Cronograma</h2>
              <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
                <p><strong>Semana 1:</strong> Estados da Água</p>
                <p><strong>Semana 2:</strong> Plantas e Germinação</p>
                <p><strong>Semana 3:</strong> Corpo Humano</p>
                <p><strong>Semana 4:</strong> Feira de Ciências</p>
              </div>
            </div>

            <div style="text-align: center; margin-top: 30px; padding: 20px; background-color: #e3f2fd; border-radius: 8px;">
              <p style="margin: 0; color: #1976d2; font-weight: bold;">🔬 Projeto completo desenvolvido pela Aulix!</p>
            </div>
          </div>
        </div>
      `,
      googleDocs: "https://docs.google.com/document/d/1example-projeto-pedagogico/edit"
    }
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
              
              <Dialog open={isExamplesModalOpen} onOpenChange={setIsExamplesModalOpen}>
                <DialogTrigger asChild>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-primary text-primary hover:bg-primary/10 font-medium px-8 py-4 text-lg backdrop-blur-sm border-2"
                  >
                    Veja exemplos de documentos
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-center">
                      Alguns Exemplos de Documentos Gerados pela Aulix
                    </DialogTitle>
                    <DialogDescription className="text-center text-lg">
                      Estes são só aguns exemplos dos documentos criados pela nossa IA pedagógica, no total são mais de 10 tipos diferentes de documentos!
                    </DialogDescription>
                  </DialogHeader>
                  
                  <Tabs defaultValue="planoAula" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="planoAula" className="flex items-center gap-2">
                        <FileText className="w-4 h-4" />
                        Plano de Aula
                      </TabsTrigger>
                      <TabsTrigger value="diarioBordo" className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Diário de Bordo
                      </TabsTrigger>
                      <TabsTrigger value="projetoPedagogico" className="flex items-center gap-2">
                        <Target className="w-4 h-4" />
                        Projeto Pedagógico
                      </TabsTrigger>
                    </TabsList>

                    {Object.entries(examples).map(([key, example]) => (
                      <TabsContent key={key} value={key} className="space-y-6">
                        <div className="text-center">
                          <Badge variant="outline" className="text-primary border-primary/30 mb-4">
                            <example.icon className="w-4 h-4 mr-2" />
                            {example.title}
                          </Badge>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          {/* WhatsApp Format */}
                          <Card className="bg-gradient-to-b from-green-50 to-green-100 border-green-200">
                            <CardHeader>
                              <CardTitle className="flex items-center gap-2 text-green-700">
                                <Smartphone className="w-5 h-5" />
                                Formato WhatsApp
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="bg-white rounded-lg p-4 shadow-inner max-h-60 overflow-y-auto">
                                <pre className="whitespace-pre-wrap text-sm font-mono text-gray-800">
                                  {example.whatsapp}
                                </pre>
                              </div>
                            </CardContent>
                          </Card>

                          {/* Email Format */}
                          <Card className="bg-gradient-to-b from-blue-50 to-blue-100 border-blue-200">
                            <CardHeader>
                              <CardTitle className="flex items-center gap-2 text-blue-700">
                                <Mail className="w-5 h-5" />
                                Formato Email
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="bg-white rounded-lg p-4 shadow-inner max-h-60 overflow-y-auto">
                                <div dangerouslySetInnerHTML={{ __html: example.email }} />
                              </div>
                            </CardContent>
                          </Card>
                        </div>

                        {/* Google Docs Link */}
                        <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
                          <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                              <div>
                                <h3 className="font-semibold text-purple-700 mb-2">
                                  📄 Documento no Google Docs
                                </h3>
                                <p className="text-purple-600 text-sm">
                                  Acesse o documento completo formatado e editável
                                </p>
                              </div>
                              <Button 
                                variant="outline" 
                                className="border-purple-300 text-purple-700 hover:bg-purple-100"
                                onClick={() => window.open(example.googleDocs, '_blank')}
                              >
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Abrir no Google Docs
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </TabsContent>
                    ))}
                  </Tabs>

                  {/* CTA Button */}
                  <div className="text-center pt-6 border-t">
                    <Button 
                      onClick={handleAulixWhatsApp}
                      size="lg"
                      className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Faça o seu agora mesmo!
                    </Button>
                    <p className="text-sm text-muted-foreground mt-2">
                      Converse com a Aulix e crie seus documentos em minutos
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            
            {/* Trust indicators */}
            <div className="flex flex-col sm:flex-row gap-6 pt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span>Centenas de professores cadastrados</span>
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
                  <div className="text-lg font-bold text-primary">Em minutos</div>
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
