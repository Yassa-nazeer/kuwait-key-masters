import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import keysImg from "@/assets/car-keys.jpg";

const brands = [
  { name: "تويوتا", category: "ياباني", color: "from-red-500/20 to-red-600/10" },
  { name: "لكزس", category: "ياباني فاخر", color: "from-slate-400/20 to-slate-500/10" },
  { name: "نيسان", category: "ياباني", color: "from-red-600/20 to-red-700/10" },
  { name: "هوندا", category: "ياباني", color: "from-blue-500/20 to-blue-600/10" },
  { name: "ميتسوبيشي", category: "ياباني", color: "from-red-500/20 to-orange-500/10" },
  { name: "مرسيدس", category: "ألماني فاخر", color: "from-slate-300/20 to-slate-400/10" },
  { name: "BMW", category: "ألماني فاخر", color: "from-blue-400/20 to-blue-500/10" },
  { name: "أودي", category: "ألماني فاخر", color: "from-slate-400/20 to-red-500/10" },
  { name: "بورش", category: "رياضي فاخر", color: "from-yellow-500/20 to-amber-600/10" },
  { name: "فولكس فاجن", category: "ألماني", color: "from-blue-600/20 to-blue-700/10" },
  { name: "هيونداي", category: "كوري", color: "from-blue-500/20 to-cyan-500/10" },
  { name: "كيا", category: "كوري", color: "from-red-600/20 to-orange-500/10" },
  { name: "جينيسيس", category: "كوري فاخر", color: "from-slate-500/20 to-slate-600/10" },
  { name: "فورد", category: "أمريكي", color: "from-blue-700/20 to-blue-800/10" },
  { name: "شيفروليه", category: "أمريكي", color: "from-yellow-500/20 to-amber-600/10" },
  { name: "GMC", category: "أمريكي", color: "from-red-600/20 to-red-700/10" },
  { name: "كرايسلر", category: "أمريكي", color: "from-slate-400/20 to-slate-500/10" },
  { name: "دودج", category: "أمريكي", color: "from-red-500/20 to-red-600/10" },
  { name: "جيب", category: "دفع رباعي", color: "from-green-600/20 to-green-700/10" },
  { name: "لاند روفر", category: "بريطاني فاخر", color: "from-green-500/20 to-emerald-600/10" },
  { name: "رنج روفر", category: "بريطاني فاخر", color: "from-slate-500/20 to-slate-700/10" },
  { name: "جاكوار", category: "بريطاني فاخر", color: "from-amber-500/20 to-yellow-600/10" },
  { name: "بنتلي", category: "فاخر", color: "from-amber-600/20 to-yellow-700/10" },
  { name: "رولز رويس", category: "فاخر جداً", color: "from-slate-300/20 to-amber-400/10" },
  { name: "فيراري", category: "رياضي", color: "from-red-600/20 to-red-700/10" },
  { name: "لامبورجيني", category: "رياضي", color: "from-yellow-500/20 to-orange-600/10" },
  { name: "مازيراتي", category: "رياضي فاخر", color: "from-blue-600/20 to-slate-600/10" },
  { name: "إنفينيتي", category: "ياباني فاخر", color: "from-slate-400/20 to-slate-500/10" },
  { name: "أكورا", category: "ياباني فاخر", color: "from-slate-500/20 to-red-500/10" },
  { name: "سوزوكي", category: "ياباني", color: "from-red-500/20 to-blue-500/10" },
];

const keyTypes = [
  { title: "مفاتيح ذكية (بصمة)", desc: "Smart Keys - مفاتيح بدون لمس مع زر تشغيل" },
  { title: "مفاتيح ريموت", desc: "ريموت كنترول قابل للطي مع شفرة مفتاح" },
  { title: "مفاتيح عادية وكتالوج", desc: "مفاتيح ميكانيكية تقليدية للسيارات القديمة" },
  { title: "مفاتيح جلد فاخرة", desc: "أغلفة جلدية فاخرة لحماية مفتاحك" },
];

const Cars = () => {
  return (
    <>
      <PageHero title="السيارات المدعومة" subtitle="نخدم جميع ماركات السيارات اليابانية والأمريكية والأوروبية والكورية" image={keysImg} />

      {/* Key Types */}
      <section className="container mx-auto section-padding">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold mb-3">أنواع <span className="gold-text">المفاتيح</span> التي نتعامل معها</h2>
          <p className="text-muted-foreground">نتعامل مع جميع تقنيات المفاتيح الحديثة والقديمة</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {keyTypes.map((k) => (
            <div key={k.title} className="glass-card p-6 text-center hover:-translate-y-1 transition-transform">
              <h3 className="font-bold mb-2 gold-text">{k.title}</h3>
              <p className="text-sm text-muted-foreground">{k.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Brands */}
      <section className="container mx-auto section-padding">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold mb-3">الماركات <span className="gold-text">المدعومة</span></h2>
          <p className="text-muted-foreground">+30 ماركة عالمية - نخدمها جميعاً</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {brands.map((b) => (
            <div key={b.name} className={`glass-card p-5 text-center bg-gradient-to-br ${b.color} hover:scale-105 transition-all duration-300 cursor-default`}>
              <div className="text-lg font-extrabold mb-1">{b.name}</div>
              <div className="text-xs text-muted-foreground">{b.category}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 glass-card p-6 text-center">
          <p className="text-muted-foreground">
            <span className="gold-text font-bold">ملاحظة:</span> القائمة لا تشمل كل الماركات.
            إذا لم تجد سيارتك، تواصل معنا — نتعامل مع جميع الماركات والموديلات تقريباً.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default Cars;
