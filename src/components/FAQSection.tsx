import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { HelpCircle, MessageCircle, Clock, Shield, BookOpen, Users, User } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from "emailjs-com";
import { useState } from "react";
import { toast } from "@/components/ui/sonner";

const formSchema = z.object({
  nome: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  whatsapp: z.string().regex(/^[\d\s\(\)\-\+]+$/, "Número de telefone inválido").min(10, "WhatsApp deve ter pelo menos 10 dígitos"),
  serie: z.string().min(1, "Selecione uma série"),
  assunto: z.string().min(1, "Selecione um assunto"),
  mensagem: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
});

type FormData = z.infer<typeof formSchema>;

export const FAQSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      email: "",
      whatsapp: "",
      serie: "",
      assunto: "",
      mensagem: "",
    },
  });

  const handleAulixWhatsApp = () => {
    const message = encodeURIComponent("Olá, me explique como você funciona");
    window.open(`https://wa.me/5511973367370?text=${message}`, "_blank");
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      await emailjs.send(
        'service_uoc33lw',
        'template_aulix',
        {
          nome: data.nome,
          email: data.email,
          whatsapp: data.whatsapp,
          serie: data.serie,
          assunto: data.assunto,
          mensagem: data.mensagem,
        },
        'zmFe_onX09Tz3Acxd' // Você precisa substituir pela sua chave pública do EmailJS
      );
      
      toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
      form.reset();
      setIsModalOpen(false);
    } catch (error) {
      toast.error("Erro ao enviar mensagem. Tente novamente.");
      console.error('EmailJS error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqs = [
    {
      question: "Como funciona a Aulix? É realmente pelo WhatsApp?",
      answer: "Sim! A Aulix funciona 100% pelo WhatsApp. É só mandar uma mensagem e começar a conversar, A Aulix vai pedir algumas informações (turma, atividade, objetivos) e em poucos minutos você recebe seu documento pronto. Não precisa baixar app nem aprender nada novo - é tudo no WhatsApp que você já usa todos os dias. E se você quiser a Aulix ainda envia um link para o documento no Google docs ou direto para o seu email!"
    },
    {
      question: "Quanto tempo leva para receber meus documentos?",
      answer: "Seus documentos ficam prontos em minutos! Relatórios individuais podem levar até 3 minutos, enquanto planejamentos semanais ficam prontos em até 5 minutos. Muito mais rápido que fazer manualmente, não é?"
    },
    {
      question: "Os documentos seguem a BNCC?",
      answer: "Absolutamente! Todos os documentos são gerados seguindo rigorosamente a Base Nacional Comum Curricular (BNCC). A Aulix conhece todas as competências e habilidades por faixa etária e componente curricular, garantindo que seus planejamentos estejam sempre alinhados."
    },
    {
      question: "Posso usar na Educação Infantil, no Ensino Fundamental e no Ensino Médio?",
      answer: "Sim! A Aulix atende desde a Educação Infantil até o Ensino Médio. Temos templates específicos para cada modalidade: berçário, maternal, pré-escola, fundamental I e II, e ensino médio. Cada documento é adaptado para a faixa etária correspondente."
    },
    {
      question: "Como funciona o teste grátis de 24 horas?",
      answer: "É simples: basta enviar sua primeira mensagem pelo WhatsApp e seu acesso completo será liberado por 24 horas. Nesse período você pode gerar os documentos que quiser, testar todos os tipos (relatórios, planejamentos, avaliações). Não pedimos cartão de crédito para você testar."
    },
    {
      question: "E depois de assinar, se eu não quiser mais? Posso cancelar?",
      answer: "Claro! Você pode cancelar a qualquer momento, sem burocracia. Basta enviar uma mensagem no WhatsApp pedindo o cancelamento."
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
      question: "Usar a Aulix não é a mesma coisa que usar o chatGPT ou alguma outra plataforma de IA?",
      answer: "Não, porque a Aulix já foi treinada especificamente para a Educação por nossa equipe especializada; entendendo a linguagem pedagógica, seguindo a BNCC automaticamente e entregando documentos prontos, no formato certo, direto no WhatsApp. Usando um chat de IA você teria que saber pedir o documento correto, verificar como adaptar à BNCC, ajustar o formato manualmente, copiar, colar, revisar... Com a Aulix é só mandar fazer e responder algumas perguntas e você recebe tudo prontinho, formatado e organizado. É a diferença entre montar o quebra cabeça ou receber ele pronto na sua mão!"
    },
    {
      question: "Posso fazer as perguntas por voz?",
      answer: "Sim! Você pode mandar suas perguntas por voz, a Aulix entende dessa forma também. Dependendo do tipo de documento talvez você até queira mandar alguma imagem, experimente!"
    },
    {
      question: "Usar a Aulix é 'trapacear'? Não seria mais honesto eu mesma escrever tudo?",
      answer: "De jeito nenhum. Usar a Aulix não é trapacear — é usar tecnologia como apoio, não como substituição. Você continua responsável pelo conteúdo, pelos alunos e pela pedagogia. A Aulix só automatiza o que é burocrático, repetitivo e consome seu tempo. Assim como você usa um computador pra digitar ou o Google pra pesquisar, usar uma IA especializada pra gerar documentos é só mais uma ferramenta pra facilitar seu trabalho. O mérito continua sendo todo seu."
    },
    {
      question: "Tenho suporte se precisar de ajuda?",
      answer: "Sempre! Nosso suporte é humanizado e funciona pelo próprio WhatsApp. Nossa equipe está disponível em horário comercial para tirar dúvidas, ajudar com documentos específicos e garantir que você aproveite ao máximo a Aulix. Respostas em até 24hs nos dias úteis!"
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
              <div className="text-2xl font-bold text-foreground mb-1">100+</div>
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
              Converse com a Aulix! Ela poderá esclarecer qualquer questão e te ajudar a começar. Se precisar peça para conversar com um humano e nossa equipe entrará em contato.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleAulixWhatsApp}
                className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                Falar com a Aulix
              </Button>

              <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogTrigger asChild>
                  <Button 
                    variant="outline"
                    className="inline-flex items-center gap-2 border-primary text-primary hover:bg-primary/10 font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    <User className="w-5 h-5" />
                    Falar com um Humano
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Falar com um Humano</DialogTitle>
                    <DialogDescription>
                      Preencha o formulário abaixo e nossa equipe entrará em contato com você.
                    </DialogDescription>
                  </DialogHeader>
                  
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="nome"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nome Completo *</FormLabel>
                            <FormControl>
                              <Input placeholder="Seu nome completo" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email *</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="seu@email.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="whatsapp"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>WhatsApp *</FormLabel>
                            <FormControl>
                              <Input placeholder="(11) 99999-9999" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="serie"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Série *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Selecione a série" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="educacao-infantil-i">Educação Infantil I</SelectItem>
                                <SelectItem value="educacao-infantil-ii">Educação Infantil II</SelectItem>
                                <SelectItem value="ensino-fundamental">Ensino Fundamental</SelectItem>
                                <SelectItem value="ensino-medio">Ensino Médio</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="assunto"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Assunto *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Selecione o assunto" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="duvida">Dúvida</SelectItem>
                                <SelectItem value="informacao">Informação</SelectItem>
                                <SelectItem value="suporte">Suporte</SelectItem>
                                <SelectItem value="sugestao">Sugestão</SelectItem>
                                <SelectItem value="elogio">Elogio</SelectItem>
                                <SelectItem value="depoimento">Depoimento</SelectItem>
                                <SelectItem value="reclamacao">Reclamação</SelectItem>
                                <SelectItem value="parceria">Parceria</SelectItem>
                                <SelectItem value="outros">Outros</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="mensagem"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Mensagem *</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Descreva sua dúvida ou mensagem..."
                                className="min-h-[100px]"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="flex gap-3 pt-4">
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="flex-1 bg-primary hover:bg-primary/90"
                        >
                          {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                        </Button>
                      </div>
                    </form>
                  </Form>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
