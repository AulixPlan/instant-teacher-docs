import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, Cookie } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Mostrar o aviso após 2 segundos para não ser intrusivo
      const timer = setTimeout(() => {
        setShowConsent(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowConsent(false);
  };

  const dismissConsent = () => {
    localStorage.setItem('cookie-consent', 'dismissed');
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <>
      <div className="fixed bottom-4 left-4 right-4 z-50 animate-fade-in">
        <div className="max-w-4xl mx-auto bg-gradient-card backdrop-blur-sm border border-primary/20 rounded-xl shadow-card p-4 md:p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 mt-1">
              <Cookie className="w-5 h-5 text-accent-yellow" />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-foreground mb-2">
                    🍪 Consentimento de Cookies
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Utilizamos cookies para melhorar sua experiência de navegação, 
                    analisar o tráfego do site e personalizar o conteúdo. Ao continuar 
                    navegando, você concorda com o uso de cookies.
                  </p>
                </div>
                
                <button
                  onClick={dismissConsent}
                  className="flex-shrink-0 p-1 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Fechar aviso"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 mt-4">
                <Button
                  onClick={acceptCookies}
                  className="bg-gradient-success text-white hover:shadow-glow hover:scale-105 transition-all duration-300"
                >
                  Aceitar Cookies
                </Button>
                
                <Dialog open={isPrivacyModalOpen} onOpenChange={setIsPrivacyModalOpen}>
                  <DialogTrigger asChild>
                    <Button 
                      variant="outline" 
                      className="border-primary/30 text-primary hover:bg-primary/10"
                    >
                      Política de Privacidade
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold">🔒 Política de Privacidade — Aulix Planejamento</DialogTitle>
                    </DialogHeader>
                    <div className="prose prose-sm max-w-none">
                      <p>A <strong>Aulix</strong> é de propriedade da 63.301.599 FLAVIO DEL FIOL COSTA, inscrita no CNPJ sob nº 63.301.599/0001-13, inscrição estadual isenta, com sede à R. Joaquim Távora, 1383 - CEP: 04015-003 - São Paulo - SP.</p>
                      
                      <p>A <strong>Aulix</strong> adota o compromisso de respeitar a privacidade de seus usuários. Ao fornecer informações pessoais e ao acessar o nosso site e whatsapp, o Usuário automaticamente concorda com as regras estabelecidas no presente termo de Política de Privacidade, motivo pelo qual recomendamos a sua leitura antes de prosseguir na navegação ou na contratação de nossos serviços.</p>
                      
                      <p>A <strong>Aulix</strong> segue as orientações da LEI GERAL DE PROTEÇÃO DE DADOS (LGPD) – LEI Nº 13.709/18</p>
                      
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
                      <p>Todo o conteúdo e informações constantes neste site, são de propriedade da <strong>Aulix</strong> e não podem ser copiados, reproduzidos, publicados ou transferidos sem autorização expressa da <strong>Aulix</strong>, sob pena de ser o infrator responsabilizado civil e criminalmente, nos termos da legislação aplicável aos direitos autorais e de propriedade intelectual.</p>
                      
                      <h3 className="text-lg font-semibold mt-6 mb-3">8. Alterações nesta Política</h3>
                      <p>Esta política poderá ser atualizada sem aviso prévio. Recomendamos a revisão periódica.</p>
                      
                      <hr className="my-6" />
                      <p className="text-center font-semibold">Última atualização: abril/2026</p>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
