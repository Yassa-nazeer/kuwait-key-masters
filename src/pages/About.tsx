import { Award, Users, Clock, Shield, Target, Heart } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import progImg from "@/assets/programming.jpg";

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
              منذ سنوات طويلة ونحن نقدم خدمات فني المفاتيح في دولة الكويت بأعلى مستويات
              الاحترافية والجودة. بدأنا رحلتنا برؤية واضحة: تقديم خدمة سريعة وموثوقة
              لكل من يحتاجها، في أي وقت، وفي أي منطقة بالكويت.
            </p>
            <p className="text-muted-foreground leading-loose mb-4">
              اليوم، أصبح اسم "شركة الركن الدولي" مرادفاً للجودة والثقة في مجال فتح وبرمجة مفاتيح
              السيارات والأقفال. نعتمد على فريق من الفنيين المتخصصين المدربين على أحدث
              التقنيات وأجهزة البرمجة العالمية.
            </p>
            <p className="text-muted-foreground leading-loose">
              نؤمن أن خدمة العميل هي حجر الأساس لنجاحنا، ولذلك نضع رضاكم في مقدمة أولوياتنا
              ونعمل دائماً على تطوير خدماتنا لتلبية احتياجاتكم المتزايدة.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { n: "+10", l: "سنوات خبرة", icon: Clock },
              { n: "+5000", l: "عميل سعيد", icon: Users },
              { n: "+30", l: "ماركة سيارة", icon: Award },
              { n: "100%", l: "ضمان الجودة", icon: Shield },
            ].map((s) => (
              <div key={s.l} className="glass-card p-6 text-center">
                <s.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                <div className="text-3xl font-extrabold gold-text">{s.n}</div>
                <div className="text-sm text-muted-foreground">{s.l}</div>
              </div>
            ))}
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
