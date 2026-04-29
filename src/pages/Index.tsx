import { Link } from "react-router-dom";
import { Phone, MessageCircle, Shield, Zap, Clock, MapPin, Award, KeyRound, Car, Home, Wrench, CircleCheck, Star } from "lucide-react";
import hero from "@/assets/hero-locksmith.jpg";
import keysImg from "@/assets/car-keys.jpg";
import progImg from "@/assets/programming.jpg";
import openImg from "@/assets/car-opening.jpg";
import homeImg from "@/assets/home-lock.jpg";
import vanImg from "@/assets/mobile-service.jpg";
import poster1 from "@/assets/brand-poster-1.jpg";
import poster2 from "@/assets/brand-poster-2.jpg";
import CTASection from "@/components/CTASection";

const services = [
  { icon: Car, title: "فتح السيارات", desc: "فتح جميع أنواع السيارات بدون أي ضرر باستخدام أحدث الأدوات", img: openImg },
  { icon: KeyRound, title: "برمجة المفاتيح والريموتات", desc: "برمجة مفاتيح ذكية، ريموتات بصمة، وكل أنواع الأقفال الإلكترونية", img: progImg },
  { icon: Wrench, title: "نسخ مفاتيح السيارات", desc: "عمل ونسخ نسخة احتياطية لمفتاح سيارتك بدقة عالية", img: keysImg },
  { icon: Home, title: "فتح المنازل والأقفال", desc: "فتح أبواب المنازل والتجوريات والمكاتب باحترافية تامة", img: homeImg },
];

const features = [
  { icon: Clock, title: "خدمة 24 ساعة", desc: "نخدمك طوال الأسبوع، ليلًا ونهارًا" },
  { icon: Zap, title: "وصول سريع", desc: "نصل إليك في أي مكان خلال دقائق" },
  { icon: Shield, title: "ضمان وأمان", desc: "خدمة آمنة 100% بدون أي ضرر" },
  { icon: Award, title: "خبرة وكفاءة", desc: "فنيون متخصصون بأحدث التقنيات" },
  { icon: MapPin, title: "كل الكويت", desc: "خدمة متنقلة لكل المناطق والمحافظات" },
  { icon: CircleCheck, title: "أسعار مناسبة", desc: "أفضل قيمة وأسعار في السوق" },
];

const Index = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={hero} alt="شركة الركن الدولي لكهرباء السيارات" className="h-full w-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-l from-background via-background/85 to-background/60" />
        </div>

        <div className="relative container mx-auto px-4 py-20 md:py-32 grid md:grid-cols-2 items-center gap-8">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary mb-4">
              <Star className="h-4 w-4 fill-primary" /> ثقة الزبائن سر نجاحنا
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4">
              <span className="gold-text">شركة الركن الدولي</span>
              <br />
              <span className="text-foreground">لكهرباء السيارات</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-6 max-w-lg">
              فنيون متخصصون ومدربون في فتح السيارات بدون كسر، برمجة مفاتيح جميع السيارات العادية والذكية، وبرمجة جميع أنواع الريموتات بأحدث الأجهزة. خدمة سريعة 24 ساعة في جميع مناطق الكويت.
            </p>
            <p className="mb-4 inline-block rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-sm font-bold text-primary">⭐ شعارنا: الأمانة والسرعة</p>

            <div className="flex flex-wrap gap-3 mb-8">
              <a href="tel:66610023" className="btn-gold">
                <Phone className="h-5 w-5" /> اتصل: 66610023
              </a>
              <a href="https://wa.me/96566610023" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--whatsapp))] px-6 py-3 font-bold text-white shadow-lg transition-all hover:scale-105">
                <MessageCircle className="h-5 w-5" /> واتساب
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {[
                { n: "+10", l: "سنوات خبرة" },
                { n: "24/7", l: "خدمة دائمة" },
                { n: "+5000", l: "عميل سعيد" },
              ].map((s) => (
                <div key={s.l} className="glass-card p-3 text-center">
                  <div className="text-2xl font-extrabold gold-text">{s.n}</div>
                  <div className="text-xs text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:block animate-float">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
              <img src={keysImg} alt="مفاتيح السيارات" className="relative rounded-3xl shadow-2xl" width={1024} height={1024} loading="eager" />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="container mx-auto section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3">لماذا <span className="gold-text">شركة الركن الدولي؟</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            نقدم لك خدمة فنية متكاملة بأعلى معايير الجودة والاحترافية
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={f.title} className="glass-card p-6 group hover:-translate-y-1 transition-transform duration-300" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-glow shadow-lg group-hover:scale-110 transition-transform">
                <f.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="container mx-auto section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3">خدماتنا <span className="gold-text">المتميزة</span></h2>
          <p className="text-muted-foreground">حلول سريعة بأحدث التقنيات</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div key={s.title} className="glass-card overflow-hidden group">
              <div className="relative h-52 overflow-hidden">
                <img src={s.img} alt={s.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                <div className="absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-glow shadow-lg">
                  <s.icon className="h-6 w-6 text-primary-foreground" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/services" className="btn-gold">عرض كل الخدمات</Link>
        </div>
      </section>

      {/* TRANSPORT COMPANY */}
      <section className="container mx-auto section-padding">
        <div className="glass-card overflow-hidden grid md:grid-cols-2 items-center">
          <img src={vanImg} alt="شركة النقل" className="h-full w-full object-cover min-h-[300px]" loading="lazy" />
          <div className="p-8 md:p-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 text-accent px-3 py-1 text-xs font-bold mb-3">
              <Car className="h-3 w-3" /> خدمة نقل سيارات
            </div>
            <h2 className="text-3xl font-extrabold mb-4">
              <span className="gold-text">شركة النقل</span>
            </h2>
            <p className="text-muted-foreground mb-6">
              خدمة نقل سيارات احترافية في جميع مناطق الكويت — سطحات حديثة وفريق مدرب لنقل سيارتك بأمان تام إلى أي وجهة على مدار 24 ساعة.
            </p>
            <ul className="space-y-2 mb-6">
              {["نقل سيارات بأمان كامل", "تغطية كل مناطق الكويت", "سطحات حديثة ومجهزة", "خدمة 24 ساعة طوال الأسبوع"].map((t) => (
                <li key={t} className="flex items-center gap-2 text-sm">
                  <CircleCheck className="h-5 w-5 text-success flex-shrink-0" /> {t}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <a href="tel:66610023" className="btn-gold">
                <Phone className="h-5 w-5" /> اتصل: 66610023
              </a>
              <a href="https://wa.me/96566610023" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--whatsapp))] px-6 py-3 font-bold text-white shadow-lg transition-all hover:scale-105">
                <MessageCircle className="h-5 w-5" /> واتساب
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BRAND POSTERS GALLERY */}
      <section className="container mx-auto section-padding">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
            معرض <span className="gold-text">شركة الركن الدولي</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            هويتنا البصرية تعكس احترافيتنا — صور رسمية لشركة الركن الدولي لكهرباء السيارات وبرمجة المفاتيح في الكويت
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[poster1, poster2].map((p, i) => (
            <a
              key={i}
              href="https://wa.me/96566610023"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card overflow-hidden group block"
            >
              <div className="relative">
                <img
                  src={p}
                  alt={`شركة الركن الدولي لكهرباء السيارات - بوستر رسمي ${i + 1}`}
                  className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                  loading="lazy"
                  width={1024}
                  height={1408}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 glass-card p-6 md:p-8 text-center">
          <h3 className="text-xl md:text-2xl font-extrabold mb-3">
            <span className="gold-text">شركة الركن الدولي</span> — الحل السريع لمشكلتك
          </h3>
          <p className="text-muted-foreground leading-loose max-w-3xl mx-auto">
            نحن في شركة الركن الدولي لكهرباء السيارات نقدم خدمات متكاملة لفتح وبرمجة مفاتيح جميع أنواع السيارات
            العادية والذكية، بالإضافة إلى برمجة جميع أنواع الريموتات بأحدث الأجهزة وأعلى التقنيات. فريقنا مكوّن من
            فنيين مدربين ومتخصصين بخبرة طويلة في جميع أنواع السيارات اليابانية والأمريكية والأوروبية والكورية.
            نصل إليك أينما كنت في جميع مناطق الكويت خلال دقائق، خدمة 24 ساعة، أمانة في التعامل، سرعة في الأداء،
            ودقة في العمل. اتصل الآن أو تواصل معنا واتساب على الرقم <strong className="gold-text" dir="ltr">66610023</strong>.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default Index;
