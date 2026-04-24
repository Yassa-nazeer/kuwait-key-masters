import { Car, KeyRound, Home, Wrench, Cpu, Copy, Shield, Zap, Fingerprint, Settings2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import keysImg from "@/assets/car-keys.jpg";

const allServices = [
  { icon: Car, title: "فتح جميع السيارات بدون ضرر", desc: "نقوم بفتح أي نوع من السيارات (يابانية، أمريكية، أوروبية، كورية) بدون إحداث أي ضرر بالقفل أو الباب باستخدام أدوات احترافية متخصصة." },
  { icon: KeyRound, title: "برمجة مفاتيح السيارات", desc: "برمجة المفاتيح الأصلية والبديلة لجميع موديلات السيارات الحديثة والقديمة. نملك أحدث أجهزة البرمجة المعتمدة." },
  { icon: Fingerprint, title: "برمجة الريموتات الذكية والبصمة", desc: "برمجة الريموت كنترول الذكي (Smart Key) والبصمة بمختلف أنواعها لجميع الماركات." },
  { icon: Copy, title: "عمل ونسخ مفاتيح السيارات", desc: "صب وعمل نسخة احتياطية من مفتاح سيارتك بدقة عالية ومطابقة تامة للمفتاح الأصلي." },
  { icon: Home, title: "فتح المنازل والشقق", desc: "فتح أبواب المنازل والشقق المغلقة بسرعة وأمان دون أي ضرر للقفل." },
  { icon: Shield, title: "فتح التجوريات (الخزائن)", desc: "فتح وإصلاح التجوريات والخزائن بمختلف أنواعها بالطرق الفنية الحديثة." },
  { icon: Wrench, title: "تصليح أقفال السيارات", desc: "إصلاح وصيانة أقفال السيارات التالفة، تغيير الكونتاكت، وتصليح الأبواب." },
  { icon: Cpu, title: "أجهزة برمجة متطورة", desc: "نستخدم أحدث الأجهزة العالمية للبرمجة وتشخيص أعطال أنظمة المفاتيح الإلكترونية." },
  { icon: Settings2, title: "تركيب أقفال جديدة", desc: "تركيب وتغيير أقفال الأبواب الحديثة بمختلف أنواعها وموديلاتها." },
  { icon: Zap, title: "خدمة طوارئ سريعة", desc: "خدمة الطوارئ المتنقلة على مدار 24 ساعة لتلبية احتياجاتك الفورية." },
];

const Services = () => {
  return (
    <>
      <PageHero title="خدماتنا الفنية" subtitle="حلول متكاملة لكل ما يخص المفاتيح والأقفال بأحدث التقنيات" image={keysImg} />

      <section className="container mx-auto section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allServices.map((s, i) => (
            <article key={s.title} className="glass-card p-6 hover:-translate-y-1 transition-all duration-300 group" style={{ animationDelay: `${i * 0.05}s` }}>
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-glow shadow-lg group-hover:rotate-6 transition-transform">
                <s.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container mx-auto section-padding">
        <div className="glass-card p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-6 text-center">
            <span className="gold-text">كيف نعمل؟</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { n: "1", t: "اتصل بنا", d: "اتصل أو راسلنا واتساب" },
              { n: "2", t: "حدد موقعك", d: "أخبرنا بمنطقتك في الكويت" },
              { n: "3", t: "نصل إليك", d: "فني متخصص خلال دقائق" },
              { n: "4", t: "إنجاز سريع", d: "خدمة احترافية بضمان" },
            ].map((step) => (
              <div key={step.n} className="text-center">
                <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-glow text-2xl font-extrabold text-primary-foreground shadow-lg">
                  {step.n}
                </div>
                <h3 className="font-bold mb-1">{step.t}</h3>
                <p className="text-sm text-muted-foreground">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default Services;
