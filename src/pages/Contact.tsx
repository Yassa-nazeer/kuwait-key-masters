import { Phone, MessageCircle, Clock, MapPin, Mail } from "lucide-react";
import PageHero from "@/components/PageHero";
import homeImg from "@/assets/home-lock.jpg";

const Contact = () => {
  return (
    <>
      <PageHero title="اتصل بنا" subtitle="نحن متاحون 24 ساعة لخدمتك في جميع مناطق الكويت" image={homeImg} />

      <section className="container mx-auto section-padding">
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <a href="tel:25747027" className="glass-card p-8 group hover:scale-[1.02] transition-all">
            <div className="flex items-center gap-5">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-glow shadow-lg group-hover:rotate-6 transition-transform">
                <Phone className="h-8 w-8 text-primary-foreground" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">اتصل الآن</div>
                <div className="text-2xl md:text-3xl font-extrabold gold-text" dir="ltr">+965 25747027</div>
              </div>
            </div>
          </a>

          <a href="https://wa.me/96525747027" target="_blank" rel="noopener noreferrer" className="glass-card p-8 group hover:scale-[1.02] transition-all">
            <div className="flex items-center gap-5">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[hsl(var(--whatsapp))] shadow-lg group-hover:rotate-6 transition-transform">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">واتساب مباشر</div>
                <div className="text-2xl md:text-3xl font-extrabold text-success" dir="ltr">+965 25747027</div>
              </div>
            </div>
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {[
            { icon: Clock, title: "أوقات العمل", desc: "متاحون 24 ساعة طوال أيام الأسبوع، خدمة طوارئ بدون انقطاع." },
            { icon: MapPin, title: "موقع الخدمة", desc: "خدمة متنقلة لجميع محافظات الكويت — نصل إليك أينما كنت." },
            { icon: Mail, title: "للاستفسارات", desc: "تواصل معنا عبر الواتساب أو الهاتف للاستفسارات والحجوزات." },
          ].map((c) => (
            <div key={c.title} className="glass-card p-6 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-glow shadow-lg">
                <c.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold mb-2">{c.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>

        {/* Google Maps */}
        <div className="glass-card overflow-hidden mb-10">
          <div className="p-6 border-b border-border/50 flex items-center justify-between flex-wrap gap-3">
            <div>
              <h3 className="text-xl font-extrabold gold-text mb-1">موقعنا على الخريطة</h3>
              <p className="text-sm text-muted-foreground">يمكنك زيارتنا أو الاستدلال على موقعنا عبر خرائط جوجل</p>
            </div>
            <a
              href="https://goo.gl/maps/xrpMojuvQM65i7PP7"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold !px-5 !py-2 text-sm"
            >
              <MapPin className="h-4 w-4" /> فتح في خرائط جوجل
            </a>
          </div>
          <iframe
            title="موقع شركة الركن الدولي على الخريطة"
            src="https://www.google.com/maps?q=29.3375,47.9744&hl=ar&z=11&output=embed"
            width="100%"
            height="380"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block w-full border-0"
          ></iframe>
        </div>

        <div className="glass-card p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
              <span className="gold-text">سرعة في الوصول</span> — دقة في العمل
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto leading-loose">
              لا تتردد في التواصل معنا لأي خدمة من خدمات فني المفاتيح. فريقنا جاهز
              للوصول إليك في أي مكان بالكويت خلال دقائق. خدمة احترافية، أسعار مناسبة،
              وضمان على جميع الأعمال.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="tel:25747027" className="btn-gold text-lg !px-8 !py-4">
                <Phone className="h-5 w-5" /> اتصل: 25747027
              </a>
              <a href="https://wa.me/96525747027" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--whatsapp))] px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:scale-105">
                <MessageCircle className="h-5 w-5" /> راسلنا واتساب
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
