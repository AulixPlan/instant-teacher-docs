import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

export const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511973367370", "_blank");
  };

  return (
    <>
      {/* Widget Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Tooltip/Message */}
        {isOpen && (
          <div className="absolute bottom-16 right-0 mb-2 animate-scale-in">
            <div className="bg-white rounded-lg shadow-lg p-4 max-w-xs relative">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="pr-6">
                <p className="text-sm font-medium text-gray-800 mb-2">
                  Fale agora com a Aulix, a assistente de IA generativa amiga dos professores! 🧑‍🏫
                </p>
                <button
                  onClick={handleWhatsAppClick}
                  className="bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-2 rounded-lg transition-colors duration-200 w-full"
                >
                  Conversar no WhatsApp
                </button>
              </div>
              {/* Arrow */}
              <div className="absolute bottom-[-8px] right-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
            </div>
          </div>
        )}

        {/* Main Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-float"
          style={{ animationDelay: '2s' }}
        >
          <MessageCircle className="w-6 h-6" />
        </button>

        {/* Pulse animation */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
      </div>
    </>
  );
};