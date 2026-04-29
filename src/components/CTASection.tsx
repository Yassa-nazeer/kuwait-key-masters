import { Phone, MessageCircle } from "lucide-react";

const CTASection = () => (
  <section className="container mx-auto px-4 py-16">
    <div className="glass-card overflow-hidden relative p-8 md:p-12 text-center">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      <div className="relative">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          محتاج <span className="gold-text">فني مفاتيح</span> دلوقتي؟
        </h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          نصل إليك في أي مكان بالكويت خلال دقائق. خدمة 24 ساعة، أسعار مناسبة، وضمان على الخدمة.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a href="tel:25747027" className="btn-gold">
            <Phone className="h-5 w-5" />
            اتصل: 25747027
          </a>
          <a
            href="https://wa.me/96525747027"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--whatsapp))] px-6 py-3 font-bold text-white shadow-lg transition-all hover:scale-105"
          >
            <MessageCircle className="h-5 w-5" />
            واتساب الآن
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default CTASection;
