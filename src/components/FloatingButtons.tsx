import { Phone, MessageCircle } from "lucide-react";

const FloatingButtons = () => {
  return (
    <>
      {/* WhatsApp - left */}
      <a
        href="https://wa.me/96566610023?text=مرحبا%20شركة%20الركن%20الدولي،%20أحتاج%20خدمة%20فني%20مفاتيح"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="واتساب"
        className="float-btn left-6 bg-[hsl(var(--whatsapp))] animate-pulse-ring"
      >
        <MessageCircle className="h-7 w-7" fill="currentColor" />
      </a>

      {/* Call - right */}
      <a
        href="tel:66610023"
        aria-label="اتصال"
        className="float-btn right-6 bg-gradient-to-br from-primary to-primary-glow text-primary-foreground"
      >
        <Phone className="h-6 w-6" />
      </a>
    </>
  );
};

export default FloatingButtons;
