import { Award, Users, Clock, Shield, Target, Heart, CircleCheck, Phone, MessageCircle } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import progImg from "@/assets/programming.jpg";
import poster1 from "@/assets/brand-poster-1.jpg";
import poster2 from "@/assets/brand-poster-2.jpg";

const About = () => {
  return (
    <>
      <PageHero title="من نحن" subtitle="قصة نجاح بُنيت على الثقة والاحترافية" image={progImg} />

      <section className="container mx-auto section-padding">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="animate-fade-up">
            <h2 className="text-3xl font-extrabold mb-4">
              <span className="gold-text">شركة الركن الدولي</span> — اسم تثق به
            </h2>
            <p className="text-muted-foreground leading-loose mb-4">
              منذ أكثر من عشر سنوات ونحن في <strong className="text-foreground">شركة الركن الدولي لكهرباء السيارات</strong> نقدم
              خدمات فني المفاتيح وبرمجة المفاتيح الذكية في جميع مناطق دولة الكويت بأعلى مستويات الاحترافية والجودة.
              بدأنا رحلتنا برؤية واضحة: تقديم خدمة سريعة وموثوقة لكل من يحتاجها، في أي وقت، وفي أي منطقة بالكويت،
              تحت شعارنا الذي لا نحيد عنه: <strong className="gold-text">الأمانة والسرعة</strong>.
            </p>
            <p className="text-muted-foreground leading-loose mb-4">
              اليوم، أصبح اسم "شركة الركن الدولي" مرادفاً للجودة والثقة في مجال فتح وبرمجة مفاتيح السيارات والأقفال،
              وتخصصنا في برمجة جميع أنواع المفاتيح العادية والذكية، وبرمجة جميع أنواع الريموتات لكافة الماركات
              اليابانية والأمريكية والأوروبية والكورية والصينية، باستخدام أحدث أجهزة البرمجة المعتمدة عالمياً.
            </p>
            <p className="text-muted-foreground leading-loose mb-4">
              نمتلك فريقاً من الفنيين المدربين والمتخصصين الذين يتعاملون مع كل حالة بدقة عالية وحرفية متناهية،
              سواء كانت فتح سيارة مغلقة بدون أي ضرر، أو برمجة مفتاح بديل، أو نسخ مفاتيح، أو فتح أقفال المنازل
              والتجوريات. خدمتنا متنقلة 24 ساعة لنصل إليك أينما كنت في الكويت خلال دقائق معدودة.
            </p>
            <p className="text-muted-foreground leading-loose mb-6">
              نؤمن أن خدمة العميل هي حجر الأساس لنجاحنا، ولذلك نضع رضاكم في مقدمة أولوياتنا، ونعمل دائماً على
              تطوير خدماتنا واقتناء أحدث الأجهزة لتلبية احتياجاتكم المتزايدة. ثقة عملائنا هي سر نجاحنا، ونفخر
              بخدمة آلاف العملاء في جميع محافظات الكويت على مدار الساعة.
            </p>
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
          <div className="space-y-4">
            <img src={poster1} alt="بوستر شركة الركن الدولي لكهرباء السيارات" className="w-full rounded-2xl shadow-2xl" loading="lazy" width={1024} height={1408} />
            <div className="grid grid-cols-2 gap-4">
              {[
                { n: "+10", l: "سنوات خبرة", icon: Clock },
                { n: "+5000", l: "عميل سعيد", icon: Users },
                { n: "+30", l: "ماركة سيارة", icon: Award },
                { n: "100%", l: "ضمان الجودة", icon: Shield },
              ].map((s) => (
                <div key={s.l} className="glass-card p-4 text-center">
                  <s.icon className="h-7 w-7 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-extrabold gold-text">{s.n}</div>
                  <div className="text-xs text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Second poster showcase */}
      <section className="container mx-auto section-padding">
        <div className="glass-card overflow-hidden grid md:grid-cols-2 items-center gap-0">
          <img src={poster2} alt="شركة الركن الدولي - خدمات برمجة المفاتيح" className="w-full h-full object-cover" loading="lazy" width={1024} height={1408} />
          <div className="p-8 md:p-10">
            <h3 className="text-2xl md:text-3xl font-extrabold mb-4">
              لماذا تختار <span className="gold-text">شركة الركن الدولي؟</span>
            </h3>
            <ul className="space-y-3">
              {[
                "خبرة طويلة تتجاوز 10 سنوات في فتح وبرمجة مفاتيح السيارات",
                "أحدث أجهزة البرمجة العالمية لجميع الماركات والموديلات",
                "فتح السيارات بدون أي ضرر وبأعلى درجات الأمان",
                "خدمة طوارئ متنقلة 24 ساعة في كل مناطق الكويت",
                "أسعار تنافسية وعادلة بدون أي رسوم خفية",
                "ضمان كامل على جميع الخدمات المقدمة",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2 text-sm md:text-base">
                  <CircleCheck className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container mx-auto section-padding">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Target, title: "رؤيتنا", desc: "أن نكون الخيار الأول والأكثر ثقة لخدمات المفاتيح والأقفال في دولة الكويت من خلال تقديم خدمة استثنائية تفوق توقعات عملائنا." },
            { icon: Heart, title: "رسالتنا", desc: "تقديم خدمات فنية متكاملة لفتح وبرمجة المفاتيح بأحدث التقنيات وأعلى معايير الجودة، مع الحرص على راحة العميل وأمانه." },
            { icon: Shield, title: "قيمنا", desc: "الأمانة والمصداقية، السرعة في الاستجابة، الاحترافية في التنفيذ، والأسعار العادلة لكل عملائنا الكرام في جميع أنحاء الكويت." },
          ].map((c) => (
            <div key={c.title} className="glass-card p-8">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-glow shadow-lg">
                <c.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3 gold-text">{c.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto section-padding">
        <div className="glass-card p-8 md:p-12">
          <h2 className="text-3xl font-extrabold mb-6 text-center">
            ماذا يميزنا عن <span className="gold-text">غيرنا؟</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { t: "خبرة طويلة", d: "أكثر من 10 سنوات من الخبرة العملية في مجال فني المفاتيح." },
              { t: "أحدث الأجهزة", d: "نمتلك أحدث أجهزة البرمجة المعتمدة عالمياً لجميع الماركات." },
              { t: "خدمة 24 ساعة", d: "متاحون لخدمتك على مدار الساعة، طوال أيام الأسبوع." },
              { t: "خدمة متنقلة", d: "نصل إليك في أي مكان بالكويت، لا داعي للتنقل." },
              { t: "أسعار مناسبة", d: "أسعارنا تنافسية وعادلة بدون أي مفاجآت." },
              { t: "ضمان على الخدمة", d: "نقدم ضماناً على جميع خدماتنا لراحتك التامة." },
            ].map((f) => (
              <div key={f.t} className="flex gap-4">
                <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary font-extrabold">
                  ✓
                </div>
                <div>
                  <h4 className="font-bold mb-1">{f.t}</h4>
                  <p className="text-sm text-muted-foreground">{f.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default About;
