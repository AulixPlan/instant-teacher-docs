import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Calendar, 
  ClipboardList, 
  BookOpen, 
  FolderOpen, 
  Target,
  Stethoscope,
  MessageSquare,
  Users,
  HelpCircle,
  Clock,
  Heart,
  Smartphone,
  FileCheck,
  GraduationCap,
  Mail
} from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: Calendar,
      title: "Planejamento Pedagógico",
      description: "Planejamentos completos alinhados à BNCC para todas as disciplinas"
    },
    {
      icon: FileText,
      title: "Plano de Aula",
      description: "Planos detalhados com objetivos, metodologia e avaliação"
    },
    {
      icon: ClipboardList,
      title: "Relatório Descritivo",
      description: "Relatórios individuais com linguagem profissional e pedagógica"
    },
    {
      icon: BookOpen,
      title: "Diário de Bordo",
      description: "Registros diários das atividades e desenvolvimento dos alunos"
    },
    {
      icon: FolderOpen,
      title: "Portfólio",
      description: "Organização e documentação do progresso dos estudantes"
    },
    {
      icon: Target,
      title: "Projeto Pedagógico",
      description: "Projetos temáticos e interdisciplinares estruturados"
    },
    {
      icon: Stethoscope,
      title: "Avaliação Diagnóstica",
      description: "Instrumentos de avaliação e análise de desempenho"
    },
    {
      icon: MessageSquare,
      title: "Mini-histórias",
      description: "Narrativas pedagógicas e registros especiais"
    },
    {
      icon: Users,
      title: "Encaminhamentos",
      description: "Documentos para especialistas e profissionais de apoio"
    },
    {
      icon: HelpCircle,
      title: "Consultas BNCC",
      description: "Tire dúvidas sobre competências e habilidades da Base Nacional"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 text-primary border-primary/30">
            Recursos Completos
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Tudo que você precisa para{" "}
            <span className="text-primary">documentar seu trabalho</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Mais de 10 tipos de documentos pedagógicos gerados automaticamente, 
            sempre alinhados com a BNCC e com linguagem profissional
          </p>
        </div>

        {/* Before/After Demonstration */}
        <div className="mb-20 animate-scale-in">
          <div className="bg-gradient-card rounded-2xl p-8 shadow-card max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8">
              Veja a diferença: <span className="text-destructive">Antes</span> vs <span className="text-secondary">Depois</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {/* Vídeo "Antes" */}
              <div className="relative rounded-lg overflow-hidden shadow-soft">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-auto object-cover"
                  poster="/placeholder-before.jpg"
                >
                  <source src="/videos/antes-aulix.mp4" type="video/mp4" />
                  <source src="/videos/antes-aulix.webm" type="video/webm" />
                  Seu navegador não suporta vídeos HTML5.
                </video>
                <div className="absolute top-4 left-4 bg-destructive/90 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  ❌ Antes
                </div>
              </div>
              
              {/* Vídeo "Depois" */}
              <div className="relative rounded-lg overflow-hidden shadow-soft">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-auto object-cover"
                  poster="/placeholder-depois.jpg"
                >
                  <source src="/videos/depois-aulix.mp4" type="video/mp4" />
                  <source src="/videos/depois-aulix.webm" type="video/webm" />
                  Seu navegador não suporta vídeos HTML5.
                </video>
                <div className="absolute top-4 left-4 bg-secondary/90 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  ✅ Depois
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive rounded-full px-4 py-2 mb-4">
                  <span className="font-semibold">❌ Sem a Aulix</span>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Horas perdidas nos fins de semana</li>
                  <li>Documentos desorganizados</li>
                  <li>Linguagem informal</li>
                  <li>Estresse e sobrecarga</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary rounded-full px-4 py-2 mb-4">
                  <span className="font-semibold">✅ Com a Aulix</span>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Documentos prontos em minutos</li>
                  <li>Organização profissional</li>
                  <li>Linguagem pedagógica correta</li>
                  <li>Mais tempo para você</li>
                </ul>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-center mb-8">
              A Aulix faz o <span className="text-destructive">Plano</span>. Você vive o <span className="text-secondary">Propósito!</span>
            </h3>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index}
                className="bg-gradient-card hover:shadow-card transition-all duration-300 border-0 shadow-soft group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Benefits */}
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-6 gap-8 animate-fade-in">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Clock className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Ganha Tempo</h3>
            <p className="text-sm text-muted-foreground">Economize horas toda semana</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-secondary/10 rounded-full flex items-center justify-center mb-4">
              <Heart className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="font-semibold mb-2">Evita Sobrecarga</h3>
            <p className="text-sm text-muted-foreground">Menos stress com burocracia</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Smartphone className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Direto no WhatsApp</h3>
            <p className="text-sm text-muted-foreground">Nada de app novo para aprender</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-secondary/10 rounded-full flex items-center justify-center mb-4">
              <FileCheck className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="font-semibold mb-2">Melhora Organização</h3>
            <p className="text-sm text-muted-foreground">Documentos sempre estruturados</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <GraduationCap className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Foco nos Alunos</h3>
            <p className="text-sm text-muted-foreground">Mais tempo para ensinar</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-secondary/10 rounded-full flex items-center justify-center mb-4">
              <Mail className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="font-semibold mb-2">Múltiplos Formatos</h3>
            <p className="text-sm text-muted-foreground">WhatsApp, email ou Google Docs</p>
          </div>
        </div>
      </div>
    </section>
  );
};
