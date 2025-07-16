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
    planejamentoSemanal: {
      title: "Planejamento Semanal",
      icon: FileText,
      whatsapp: `📚 *PLANEJAMENTO SEMANAL - TURMA 2 ANOS*

📅 Segunda-feira  
📋 Nome da vivência: "Descobrindo a amizade no brincar"  
📌 Código BNCC: EI01EO01  
🌱 Campo de Experiência: O eu, o outro e o nós (EO)  
🧸 Recursos: bolinhas de sabão, tecidos coloridos, brinquedos simples para compartilhar  
🎲 Desenvolvimento: Propor brincadeiras em duplas e pequenos grupos para estimular o convívio social e o respeito ao outro.

📅 Terça-feira  
📋 Nome da vivência: "Explorando o corpo em movimento"  
📌 Código BNCC: EI01CG02  
🌱 Campo de Experiência: Corpo, gestos e movimentos (CG)  
🧸 Recursos: cordas, cones, bolas, espaço aberto ao ar livre  
🎲 Desenvolvimento: Atividades de correr, pular, equilibrar-se e manipular objetos para desenvolver coordenação motora grossa e consciência corporal.

📅 Quarta-feira  
📋 Nome da vivência: "Brincando com cores e formas"  
📌 Código BNCC: EI01TS03  
🌱 Campo de Experiência: Traços, sons, cores e formas (TS)  
🧸 Recursos: folhas coloridas, giz de cera, pedras pintadas, instrumentos musicais simples  
🎲 Desenvolvimento: Atividades de pintura, desenho livre e exploração sonora para estimular a criatividade e percepção visual e auditiva.

📅 Quinta-feira  
📋 Nome da vivência: "Contação de histórias e sons"  
📌 Código BNCC: EI01EF04  
🌱 Campo de Experiência: Escuta, fala, pensamento e imaginação (EF)  
🧸 Recursos: fantoches simples, livros ilustrados, instrumentos musicais pequenos  
🎲 Desenvolvimento: Contação de histórias com uso de fantoches e músicas para incentivar a linguagem oral, atenção e imaginação.

📅 Sexta-feira  
📋 Nome da vivência: "Explorando o espaço e a quantidade"  
📌 Código BNCC: EI01ET05  
🌱 Campo de Experiência: Espaços, tempos, quantidades, relações e transformações (ET)  
🧸 Recursos: blocos de montar, recipientes para água, caixas, objetos naturais  
🎲 Desenvolvimento: Brincadeiras de empilhar, contar e observar mudanças de estados com objetos e materiais diversos para introduzir conceitos matemáticos simples.`,
      email: `
        <h1 style="color:#3b82f6;font-family:Arial">Planejamento Semanal - Educação Infantil (2 anos)</h1>
                                                <p style="color:#000000;font-family:Arial;font-size:14px">
                                                    Segue o planejamento para a semana, elaborado com muito carinho e alinhado à BNCC, focado nas crianças de 2 anos. As atividades priorizam o brincar livre, contato com a natureza e o uso de materiais simples.
                                                    <br>
                                                    <br>
                                                    <strong><span style="color:#000000;font-family:Arial;font-size:14px">Segunda-feira</span></strong>
                                                    <br>
                                                <ul style="color:#000000;font-family:Arial;font-size:12px">
                                                    <li>
                                                        <strong>Nome da vivência:</strong>
                                                         Descobrindo a amizade no brincar
                                                    </li>
                                                    <li>
                                                        <strong>Código BNCC:</strong>
                                                         EI01EO01
                                                    </li>
                                                    <li>
                                                        <strong>Campo de Experiência:</strong>
                                                         O eu, o outro e o nós (EO)
                                                    </li>
                                                    <li>
                                                        <strong>Recursos:</strong>
                                                         Bolinhas de sabão, tecidos coloridos, brinquedos simples para compartilhar
                                                    </li>
                                                    <li>
                                                        <strong>Desenvolvimento:</strong>
                                                         Brincadeiras em duplas e pequenos grupos para estimular o convívio social e o respeito ao outro.
                                                    </li>
                                                </ul>
                                                <br>
                                                <strong><span style="color:#000000;font-family:Arial;font-size:14px">Terça-feira</span></strong>
                                                <br>
                                                <ul style="color:#000000;font-family:Arial;font-size:12px">
                                                    <li>
                                                        <strong>Nome da vivência:</strong>
                                                         Explorando o corpo em movimento
                                                    </li>
                                                    <li>
                                                        <strong>Código BNCC:</strong>
                                                         EI01CG02
                                                    </li>
                                                    <li>
                                                        <strong>Campo de Experiência:</strong>
                                                         Corpo, gestos e movimentos (CG)
                                                    </li>
                                                    <li>
                                                        <strong>Recursos:</strong>
                                                         Cordas, cones, bolas, espaço aberto ao ar livre
                                                    </li>
                                                    <li>
                                                        <strong>Desenvolvimento:</strong>
                                                         Atividades de correr, pular, equilibrar-se e manipular objetos para desenvolver coordenação motora e consciência corporal.
                                                    </li>
                                                </ul>
                                                <br>
                                                <strong><span style="color:#000000;font-family:Arial;font-size:14px">Quarta-feira</span></strong>
                                                <br>
                                                <ul style="color:#000000;font-family:Arial;font-size:12px">
                                                    <li>
                                                        <strong>Nome da vivência:</strong>
                                                         Brincando com cores e formas
                                                    </li>
                                                    <li>
                                                        <strong>Código BNCC:</strong>
                                                         EI01TS03
                                                    </li>
                                                    <li>
                                                        <strong>Campo de Experiência:</strong>
                                                         Traços, sons, cores e formas (TS)
                                                    </li>
                                                    <li>
                                                        <strong>Recursos:</strong>
                                                         Folhas coloridas, giz de cera, pedras pintadas, instrumentos musicais simples
                                                    </li>
                                                    <li>
                                                        <strong>Desenvolvimento:</strong>
                                                         Pintura, desenho livre e exploração sonora para estimular criatividade e percepção visual e auditiva.
                                                    </li>
                                                </ul>
                                                <br>
                                                <strong><span style="color:#000000;font-family:Arial;font-size:14px">Quinta-feira</span></strong>
                                                <br>
                                                <ul style="color:#000000;font-family:Arial;font-size:12px">
                                                    <li>
                                                        <strong>Nome da vivência:</strong>
                                                         Contação de histórias e sons
                                                    </li>
                                                    <li>
                                                        <strong>Código BNCC:</strong>
                                                         EI01EF04
                                                    </li>
                                                    <li>
                                                        <strong>Campo de Experiência:</strong>
                                                         Escuta, fala, pensamento e imaginação (EF)
                                                    </li>
                                                    <li>
                                                        <strong>Recursos:</strong>
                                                         Fantoches simples, livros ilustrados, instrumentos musicais pequenos
                                                    </li>
                                                    <li>
                                                        <strong>Desenvolvimento:</strong>
                                                         Contação de histórias com fantoches e músicas para incentivar linguagem oral, atenção e imaginação.
                                                    </li>
                                                </ul>
                                                <br>
                                                <strong><span style="color:#000000;font-family:Arial;font-size:14px">Sexta-feira</span></strong>
                                                <br>
                                                <ul style="color:#000000;font-family:Arial;font-size:12px">
                                                    <li>
                                                        <strong>Nome da vivência:</strong>
                                                         Explorando o espaço e a quantidade
                                                    </li>
                                                    <li>
                                                        <strong>Código BNCC:</strong>
                                                         EI01ET05
                                                    </li>
                                                    <li>
                                                        <strong>Campo de Experiência:</strong>
                                                         Espaços, tempos, quantidades, relações e transformações (ET)
                                                    </li>
                                                    <li>
                                                        <strong>Recursos:</strong>
                                                         Blocos de montar, recipientes para água, caixas, objetos naturais
                                                    </li>
                                                    <li>
                                                        <strong>Desenvolvimento:</strong>
                                                         Brincadeiras de empilhar, contar e observar mudanças de estados com objetos e materiais para introduzir conceitos matemáticos simples.
                                                    </li>
                                                </ul>
                                                <br>
                                                <br>
                                                <hr>
                                                <p style="font-family:Arial;color:#555;font-size:11px">
                                                    Documento criado pela 
                                                    <b style="color:#3b82f6">Aulix</b>, a assistente de IA generativa amiga dos professores! 🧑</b>
                                                </p>
      `,
      googleDocs: "https://docs.google.com/document/d/1QkWqjXVp3KIrULb-bCVXDlAPXziFtNpnnHi_7JHobb0/edit?usp=sharing"
    },
    projetoPedagogico: {
      title: "Projeto Pedagógico",
      icon: Calendar,
      whatsapp: `📘 Projeto Pedagógico: Leitura para o 1º Ano — 30 alunos

**Tema:**  
Leitura para criar interesse por livros impressos

**Justificativa:**  
No 1º ano, é essencial estimular o gosto pela leitura desde cedo. O contato com livros impressos ajuda no desenvolvimento da linguagem, da imaginação, e na construção do hábito de leitura. A participação da família fortalece esse processo, criando um ambiente afetivo e colaborativo para o aprendizado.

**Objetivos Gerais:**  
- Desenvolver o interesse e o prazer pela leitura de livros impressos.  
- Estimular a relação entre os alunos e a família em torno da leitura.

**Objetivos Específicos:**  
- Incentivar a descoberta do mundo pelas palavras e imagens dos livros.  
- Promover a leitura compartilhada em sala e em casa.  
- Fomentar o uso do livro como fonte de conhecimento e lazer.  
- Desenvolver habilidades iniciais de linguagem oral e escrita.  

**Campos de Experiência e Habilidades da BNCC:**  
- Corpo, gestos e movimentos: para as interações durante rodas de leitura e dramatizações.  
- Traços, sons, cores e formas: para a interação com textos e ilustrações dos livros.  
- Escuta, fala, pensamento e imaginação: para estimular oralidade e compreensão.  
- Espaços, tempos, quantidades, relações e transformações: para compreender sequências e histórias.  
(Habilidades específicas podem ser detalhadas conforme o recurso BNCC)

**Etapas do Projeto:**  
- Seleção de livros adequados para o 1º ano, com ilustrações atrativas.  
- Roda de leitura semanal em sala para apresentar histórias e estimular o debate.  
- Atividades de registro simples: desenhos, recontar histórias oralmente, pequenas produções.  
- Envolvimento da família: empréstimo de livros para leitura em casa com participação dos pais/colegas.  
- Visitas à biblioteca da escola ou espaços de leitura no bairro.  
- Apresentações orais ou dramatizações com base nas leituras.  

**Cronograma:**  
- 1º bimestre – Apresentação do projeto, escolha dos livros e roda de leitura inicial.  
- 2º bimestre – Leitura compartilhada, registro e envolvimento da família com empréstimos.  
- 3º bimestre – Visita à biblioteca e atividades de dramatização.  
- 4º bimestre – Apresentações finais e avaliação do interesse e participação.  

**Recursos:**  
- Livros impressos selecionados para idade e interesse.  
- Material para registros (cadernos, lápis de cor, papéis).  
- Espaço para roda de leitura confortável e acolhedor.  
- Apoio da família na leitura em casa.  

**Avaliação:**  
- Observação contínua da participação nas rodas de leitura.  
- Registros das produções das crianças.  
- Relato da participação familiar.  
- Apreciação do interesse pelas leituras e progresso na linguagem oral e escrita.

**Referências:**  
- Base Nacional Comum Curricular (BNCC) – Educação Infantil e Ensino Fundamental, 1º ano.  
- Teorias construtivistas relacionadas à aprendizagem pela experiência e brincadeiras.  
- Literatura infantil adequada à faixa etária.
😊📚`,
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
              <span className="w-2 h-2 bg-accent-green rounded-full animate-pulse"></span>
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
                Com a <span className="text-accent-green font-semibold">Aulix</span>, professores da Educação Infantil ao Ensino Médio 
                geram documentos pedagógicos direto no <span className="text-accent-green font-semibold">WhatsApp</span> — em minutos e com base na BNCC.
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
                className="bg-gradient-success text-white font-semibold px-8 py-4 text-lg shadow-purple hover:shadow-purple hover:scale-105 transition-all duration-300"
              >
                Teste grátis por 24hs
              </Button>
              
              <Dialog open={isExamplesModalOpen} onOpenChange={setIsExamplesModalOpen}>
                <DialogTrigger asChild>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-primary text-primary hover:bg-primary/20 hover:shadow-glow font-medium px-8 py-4 text-lg backdrop-blur-sm border-2 transition-all duration-300"
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
                  
                  <Tabs defaultValue="planejamentoSemanal" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="planejamentoSemanal" className="flex items-center gap-2">
                        <FileText className="w-4 h-4" />
                        Planejamento Semanal
                      </TabsTrigger>
                      <TabsTrigger value="projetoPedagogico" className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Projeto Pedagógico
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
                      className="bg-gradient-success text-white font-semibold px-8 py-4 text-lg shadow-purple hover:shadow-purple hover:scale-105 transition-all duration-300"
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
                <div className="w-2 h-2 bg-accent-green rounded-full animate-pulse"></div>
                <span>Centenas de professores cadastrados</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent-orange rounded-full animate-pulse"></div>
                <span>Alinhado 100% à BNCC</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent-pink rounded-full animate-pulse"></div>
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
                  <div className="w-3 h-3 bg-accent-green rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-foreground">WhatsApp conectado</span>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-card border border-primary/20 rounded-2xl p-4 shadow-lg backdrop-blur-sm">
                <div className="text-center">
                  <div className="text-lg font-bold text-primary">Em minutos</div>
                  <div className="text-xs text-muted-foreground">Relatório pronto</div>
                </div>
              </div>
              
              <div className="absolute top-1/2 -right-8 bg-card border border-accent-yellow/30 rounded-xl p-3 shadow-lg backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent-yellow rounded-full animate-pulse"></div>
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
