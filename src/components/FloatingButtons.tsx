import { Phone, MessageCircle } from "lucide-react";

const FloatingButtons = () => {
  // دالة مساعدة لتسجيل التحويل قبل الانتقال للرابط
  const handleConversion = (url: string) => {
    if (typeof (window as any).gtag_report_conversion === 'function') {
      (window as any).gtag_report_conversion(url);
    } else {
      // في حال فشل تحميل الكود لأي سبب، نفتح الرابط بشكل طبيعي
      window.location.href = url;
    }
  };

  return (
    <>
      {/* WhatsApp - left */}
      <a
        href="https://wa.me/96566610023?text=مرحبا%20شركة%20الركن%20الدولي،%20أحتاج%20خدمة%20فني%20مفاتيح"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="واتساب"
        onClick={(e) => {
          e.preventDefault(); // نوقف الانتقال التلقائي للحظة
          handleConversion("https://wa.me/96566610023?text=مرحبا%20شركة%20الركن%20الدولي،%20أحتاج%20خدمة%20فني%20مفاتيح");
        }}
        className="float-btn left-6 bg-[hsl(var(--whatsapp))] animate-pulse-ring"
      >
        <MessageCircle className="h-7 w-7" fill="currentColor" />
      </a>

      {/* Call - right */}
      <a
        href="tel:66610023"
        aria-label="اتصال"
        onClick={(e) => {
          e.preventDefault(); // نوقف الانتقال التلقائي للحظة
          handleConversion("tel:66610023");
        }}
        className="float-btn right-6 bg-gradient-to-br from-primary to-primary-glow text-primary-foreground"
      >
        <Phone className="h-6 w-6" />
      </a>
    </>
  );
};

export default FloatingButtons;
