import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MessageCircle, Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export const Footer = () => {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511973367370?text=Ol%C3%A1%2C%20como%20voc%C3%AA%20pode%20me%20ajudar%3F", "_blank");
  };

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/logo_aulix_white.png" 
                alt="Aulix"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              A assistente de IA generativa amiga dos professores! 
              Criamos documentos pedagógicos em minutos, direto no WhatsApp.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/aulixplanejamento" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://facebook.com/aulixplanejamento" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={handleWhatsAppClick}
                  className="text-slate-300 hover:text-white transition-colors flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Teste Grátis
                </button>
              </li>
              <li>
                <a href="#features" className="text-slate-300 hover:text-white transition-colors">
                  Recursos
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-slate-300 hover:text-white transition-colors">
                  Preços
                </a>
              </li>
              <li>
                <a href="#faq" className="text-slate-300 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contato</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4" />
                <span>+55 (11) 97336-7370</span>
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <Mail className="w-4 h-4" />
                <span>contato@aulix.com.br</span>
              </li>
              <li className="flex items-start gap-2 text-slate-300">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span className="text-xs">
                  R. Joaquim Tavora, 1383<br />
                  Vila Mariana<br />
                  CEP: 04015-003 - São Paulo - SP
                </span>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Empresa</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Dialog open={isPrivacyModalOpen} onOpenChange={setIsPrivacyModalOpen}>
                  <DialogTrigger asChild>
                    <button className="text-slate-300 hover:text-white transition-colors text-left">
                      Política de Privacidade
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold">🔒 Política de Privacidade — Aulix Planejamento</DialogTitle>
                    </DialogHeader>
                    <div className="prose prose-sm max-w-none">
                      <p>A <strong>Aulix</strong> é de propriedade da 63.301.599 FLAVIO DEL FIOL COSTA, inscrita no CNPJ sob nº 63.301.599/0001-13, inscrição estadual isenta, com sede à R. Joaquim Távora, 1383 - CEP: 04015-003 - São Paulo - SP.</p>
                      
                      <p>A Aulix adota o compromisso de respeitar a privacidade de seus usuários. Ao fornecer informações pessoais e ao acessar o nosso site e whatsapp, o Usuário automaticamente concorda com as regras estabelecidas no presente termo de Política de Privacidade, motivo pelo qual recomendamos a sua leitura antes de prosseguir na navegação ou na contratação de nossos serviços.</p>
                      
                      <p>A Aulix segue as orientações da LEI GERAL DE PROTEÇÃO DE DADOS (LGPD) – LEI Nº 13.709/18</p>
                      
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
                        <li>Entrar em contato pelo email: contato@aulix.com.br para exercer seus direitos.</li>
                      </ul>
                      
                      <h3 className="text-lg font-semibold mt-6 mb-3">6. Cookies</h3>
                      <p>Utilizamos cookies para melhorar a experiência de navegação. Ao continuar usando o site, você concorda com seu uso. Você pode desativá-los nas configurações do seu navegador.</p>
                      
                      <h3 className="text-lg font-semibold mt-6 mb-3">7. Direitos Autorais</h3>
                      <p>Todo o conteúdo e informações constantes neste site, são de propriedade da Aulix e não podem ser copiados, reproduzidos, publicados ou transferidos sem autorização expressa da Aulix, sob pena de ser o infrator responsabilizado civil e criminalmente, nos termos da legislação aplicável aos direitos autorais e de propriedade intelectual.</p>
                      
                      <h3 className="text-lg font-semibold mt-6 mb-3">8. Alterações nesta Política</h3>
                      <p>Esta política poderá ser atualizada sem aviso prévio. Recomendamos a revisão periódica.</p>
                      
                      <hr className="my-6" />
                      <p className="text-center font-semibold">Última atualização: abril/2026</p>
                    </div>
                  </DialogContent>
                </Dialog>
              </li>
              <li>
                <Dialog open={isTermsModalOpen} onOpenChange={setIsTermsModalOpen}>
                  <DialogTrigger asChild>
                    <button className="text-slate-300 hover:text-white transition-colors text-left">
                      Termos de Uso
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold">📜 Termos de Uso — Aulix Documentações Pedagógicas</DialogTitle>
                    </DialogHeader>
                    <div className="prose prose-sm max-w-none">
                      <p>Seja bem-vindo(a) ao site da Aulix, sua assistente de inteligência artificial voltada à criação de documentações pedagógicas alinhadas à BNCC (Base Nacional Comum Curricular). Ao acessar ou utilizar este site, você concorda com os seguintes Termos de Uso:</p>
                      
                      <h3 className="text-lg font-semibold mt-6 mb-3">1. Objetivo do Serviço</h3>
                      <p>A Aulix é uma agente de IA que oferece suporte a professores na criação de documentações pedagógicas personalizadas. O serviço inclui um teste gratuito durante um período de 24 horas e, posteriormente, a possibilidade de uma assinatura mensal ou anual para uso contínuo.</p>
                      
                      <h3 className="text-lg font-semibold mt-6 mb-3">2. Uso Responsável</h3>
                      <p>O usuário se compromete a utilizar a plataforma exclusivamente para os fins propostos, ou seja, a criação de documentações pedagógicas. É expressamente proibido o uso da Aulix para finalidades que não estejam relacionadas ao contexto educacional previsto. Qualquer uso indevido, incluindo, mas não se limitando a, tentativas de gerar conteúdos fora desse escopo, será considerado abuso e implicará na <b>suspensão imediata da assinatura, sem direito a reembolso</b>.</p>
                      
                      <h3 className="text-lg font-semibold mt-6 mb-3">3. Assinatura</h3>
                      <p>Após o teste gratuito, o usuário poderá contratar uma assinatura mensal no valor de R$19,90 ou anual no valor de R$199,90. A assinatura pode ser paga por cartão de crédito / débito, boleto ou Pix. No caso do pagamento por boleto a assinatura é liberada após a compensação do mesmo.</p>
                      
                      <h3 className="text-lg font-semibold mt-6 mb-3">4. Cancelamento</h3>
                      <p>O usuário pode cancelar a assinatura a qualquer momento. O cancelamento não dá direito a reembolso proporcional do valor pago, salvo em caso de falha no serviço.</p>
                      
                      <h3 className="text-lg font-semibold mt-6 mb-3">5. Propriedade Intelectual</h3>
                      <p>Todos os textos, imagens, funcionalidades e conteúdos gerados pela Aulix são protegidos por direitos autorais e pertencem à Aulix Documentações Pedagógicas. É proibida a reprodução sem autorização.</p>
                      
                      <h3 className="text-lg font-semibold mt-6 mb-3">6. Modificações</h3>
                      <p>A Aulix se reserva o direito de modificar estes termos a qualquer momento, sendo responsabilidade do usuário revisá-los periodicamente.</p>
                      
                      <hr className="my-6" />
                      <p className="text-center font-semibold">Última atualização: janeiro/2025</p>
                    </div>
                  </DialogContent>
                </Dialog>
              </li>
              <li>
                <span className="text-slate-300 text-xs">
                  CNPJ: 63.301.599/0001-13
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm text-center md:text-left">
              © 2025 <span className="text-primary font-semibold">Aulix</span>, a assistente de IA generativa amiga dos professores! 🧑‍🏫<br />
              Todos os direitos reservados. | Desenvolvido com ❤️ para educadores brasileiros.
            </p>
            
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-gradient-success text-white hover:shadow-glow hover:scale-105 transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Fale Conosco
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};
