import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MessageCircle, Shield, Users, Clock, Instagram, Facebook } from "lucide-react";
import { useState } from "react";

export const CTASection = () => {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511973367370?text=Ol%C3%A1%2C%20como%20voc%C3%AA%20pode%20me%20ajudar%3F", "_blank");
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
      © 2025 <b style={{ color: '#3b82f6' }}>Aulix</b>, a assistente de IA generativa amiga dos professores! 🧑‍🏫<br />
      Todos os direitos reservados. | Desenvolvido com ❤️ para educadores brasileiros.
            </p>
            
            {/* Privacy Policy and Terms Links */}
            <div className="flex justify-center gap-6 mt-4">
              <Dialog open={isPrivacyModalOpen} onOpenChange={setIsPrivacyModalOpen}>
                <DialogTrigger asChild>
                  <button className="text-white/60 hover:text-white text-sm underline transition-colors">
                    Política de Privacidade
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold">🔒 Política de Privacidade — Aulix Planejamento</DialogTitle>
                  </DialogHeader>
                  <div className="prose prose-sm max-w-none">
                    <p>A <strong>Aulix</strong> é de propriedade da DEL FIOL TECH LTDA, inscrita no CNPJ sob nº 15.543.532/0001-42, inscrição estadual isenta, com sede à Estrada Municipal Teodor Condiev 970, Sala 502 - Jardim Marchissolo - CEP: 13171-105 - Sumaré - SP.</p>
                    
                    <p>A DEL FIOL TECH LTDA adota o compromisso de respeitar a privacidade de seus usuários. Ao fornecer informações pessoais e ao acessar o nosso site e whatsapp, o Usuário automaticamente concorda com as regras estabelecidas no presente termo de Política de Privacidade, motivo pelo qual recomendamos a sua leitura antes de prosseguir na navegação ou na contratação de nossos serviços.</p>
                    
                    <p>A DEL FIOL TECH LTDA segue as orientações da LEI GERAL DE PROTEÇÃO DE DADOS (LGPD) – LEI Nº 13.709/18</p>
                    
                    <p>Esta política tem como objetivo esclarecer como as suas informações são coletadas, usadas e protegidas ao utilizar os serviços da Aulix.</p>
                    
                    <h3 className="text-lg font-semibold mt-6 mb-3">1. Coleta de Dados</h3>
                    <p>Coletamos as seguintes informações:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Nome, e-mail e número de WhatsApp (quando fornecidos);</li>
                      <li>Informações pedagógicas necessárias para gerar planejamentos (ex.: faixa etária, número de alunos, recursos disponíveis);</li>
                      <li>Dados de navegação via cookies (como páginas acessadas e tempo de visita).</li>
                    </ul>
                    
                    <h3 className="text-lg font-semibold mt-6 mb-3">2. Uso das Informações</h3>
                    <p>As informações coletadas são utilizadas para:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Personalizar os planejamentos pedagógicos;</li>
                      <li>Entrar em contato com o usuário;</li>
                      <li>Melhorar nossos serviços e funcionalidades;</li>
                      <li>Enviar comunicações relevantes (você pode optar por não recebê-las).</li>
                    </ul>
                    
                    <h3 className="text-lg font-semibold mt-6 mb-3">3. Compartilhamento de Dados</h3>
                    <p>Não vendemos, trocamos ou transferimos suas informações pessoais para terceiros, exceto quando necessário para o funcionamento do serviço (por exemplo, serviços de pagamento).</p>
                    
                    <h3 className="text-lg font-semibold mt-6 mb-3">4. Armazenamento e Segurança</h3>
                    <p>Utilizamos medidas técnicas e organizacionais para proteger seus dados contra acessos não autorizados. O acesso às informações é restrito a membros autorizados da equipe.</p>
                    
                    <h3 className="text-lg font-semibold mt-6 mb-3">5. Direitos do Usuário</h3>
                    <p>Você pode:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Solicitar acesso, correção ou exclusão de seus dados pessoais;</li>
                      <li>Revogar consentimentos a qualquer momento;</li>
                      <li>Entrar em contato pelo WhatsApp: +55 (11) 97336-7370 para exercer seus direitos.</li>
                    </ul>
                    
                    <h3 className="text-lg font-semibold mt-6 mb-3">6. Cookies</h3>
                    <p>Utilizamos cookies para melhorar a experiência de navegação. Ao continuar usando o site, você concorda com seu uso. Você pode desativá-los nas configurações do seu navegador.</p>
                    
                    <h3 className="text-lg font-semibold mt-6 mb-3">7. Direitos Autorais</h3>
                    <p>Todo o conteúdo e informações constantes neste site, são de propriedade da DEL FIOL TECH LTDA e não podem ser copiados, reproduzidos, publicados ou transferidos sem autorização expressa da DEL FIOL TECH LTDA, sob pena de ser o infrator responsabilizado civil e criminalmente, nos termos da legislação aplicável aos direitos autorais e de propriedade intelectual.</p>
                    
                    <h3 className="text-lg font-semibold mt-6 mb-3">8. Alterações nesta Política</h3>
                    <p>Esta política poderá ser atualizada sem aviso prévio. Recomendamos a revisão periódica.</p>
                    
                    <hr className="my-6" />
                    <p className="text-center font-semibold">Última atualização: julho/2025</p>
                  </div>
                </DialogContent>
              </Dialog>
              
              <Dialog open={isTermsModalOpen} onOpenChange={setIsTermsModalOpen}>
                <DialogTrigger asChild>
                  <button className="text-white/60 hover:text-white text-sm underline transition-colors">
                    Termos de Uso
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold">📜 Termos de Uso — Aulix Planejamento</DialogTitle>
                  </DialogHeader>
                  <div className="prose prose-sm max-w-none">
                    <p>Seja bem-vindo(a) ao site da Aulix, sua assistente de inteligência artificial voltada à criação de planejamentos pedagógicos alinhados à BNCC (Base Nacional Comum Curricular). Ao acessar ou utilizar este site, você concorda com os seguintes Termos de Uso:</p>
                    
                    <h3 className="text-lg font-semibold mt-6 mb-3">1. Objetivo do Serviço</h3>
                    <p>A Aulix é uma agente de IA que oferece suporte a professores na criação de planejamentos de aula personalizados. O serviço inclui um teste gratuito durante um período de 24 horas e, posteriormente, a possibilidade de uma assinatura mensal ou anual para uso contínuo.</p>
                    
                    <h3 className="text-lg font-semibold mt-6 mb-3">2. Uso Responsável</h3>
                    <p>O usuário se compromete a utilizar a plataforma de maneira ética, sem violar leis, direitos de terceiros ou os presentes termos.</p>
                    
                    <h3 className="text-lg font-semibold mt-6 mb-3">3. Assinatura</h3>
                    <p>Após o teste gratuito, o usuário poderá contratar uma assinatura mensal no valor de R$29,99 ou anual no valor de R$299,90. A assinatura pode ser paga por cartão de crédito / débito, boleto ou Pix. No caso do pagamento por boleto a assinatura é liberada após a compensação do mesmo.</p>
                    
                    <h3 className="text-lg font-semibold mt-6 mb-3">4. Cancelamento</h3>
                    <p>O usuário pode cancelar a assinatura a qualquer momento. O cancelamento não dá direito a reembolso proporcional do valor pago, salvo em caso de falha no serviço.</p>
                    
                    <h3 className="text-lg font-semibold mt-6 mb-3">5. Propriedade Intelectual</h3>
                    <p>Todos os textos, imagens, funcionalidades e conteúdos gerados pela Aulix são protegidos por direitos autorais e pertencem à Aulix Planejamento. É proibida a reprodução sem autorização.</p>
                    
                    <h3 className="text-lg font-semibold mt-6 mb-3">6. Modificações</h3>
                    <p>A Aulix se reserva o direito de modificar estes termos a qualquer momento, sendo responsabilidade do usuário revisá-los periodicamente.</p>
                    
                    <hr className="my-6" />
                    <p className="text-center font-semibold">Última atualização: julho/2025</p>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
