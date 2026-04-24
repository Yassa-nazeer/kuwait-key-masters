import { useMemo, useState } from "react";
import { Search, MapPin } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import vanImg from "@/assets/mobile-service.jpg";

const governorates = [
  {
    name: "محافظة العاصمة",
    areas: ["مدينة الكويت", "الشرق", "المرقاب", "القبلة", "الدسمة", "الدعية", "الشامية", "الشويخ", "الفيحاء", "كيفان", "الروضة", "العديلية", "اليرموك", "السرة", "قرطبة", "الصليبخات", "الدوحة", "النهضة", "غرناطة", "القادسية", "بنيد القار"],
  },
  {
    name: "محافظة حولي",
    areas: ["حولي", "السالمية", "الجابرية", "بيان", "مشرف", "سلوى", "الرميثية", "الشعب", "البدع", "ميدان حولي", "النقرة", "الزهراء", "حطين", "الشهداء", "السلام"],
  },
  {
    name: "محافظة الفروانية",
    areas: ["الفروانية", "العارضية", "خيطان", "الرقعي", "الرابية", "الأندلس", "إشبيلية", "جليب الشيوخ", "العمرية", "صباح الناصر", "الفردوس", "العيون", "الضجيج", "الرحاب", "الري", "أبرق خيطان"],
  },
  {
    name: "محافظة مبارك الكبير",
    areas: ["مبارك الكبير", "صباح السالم", "أبو فطيرة", "أبو الحصانية", "العدان", "القصور", "القرين", "المسايل", "المسيلة", "الفنيطيس", "الفنطاس", "صبحان"],
  },
  {
    name: "محافظة الأحمدي",
    areas: ["الأحمدي", "الفحيحيل", "المهبولة", "أبو حليفة", "المنقف", "الفنطاس", "الظهر", "الرقة", "هدية", "الصباحية", "علي صباح السالم", "فهد الأحمد", "جابر العلي", "المسيلة", "ميناء عبدالله", "الوفرة", "الزور", "الخيران", "مدينة صباح الأحمد"],
  },
  {
    name: "محافظة الجهراء",
    areas: ["الجهراء", "النعيم", "العيون", "القصر", "تيماء", "الواحة", "النسيم", "سعد العبدالله", "جابر الأحمد", "أوها", "الصليبية", "كبد", "العبدلي", "الصبية", "الروضتين"],
  },
];

const Areas = () => {
  const [query, setQuery] = useState("");
  const [activeGov, setActiveGov] = useState<string>("الكل");

  const filtered = useMemo(() => {
    return governorates
      .filter((g) => activeGov === "الكل" || g.name === activeGov)
      .map((g) => ({
        ...g,
        areas: g.areas.filter((a) => a.includes(query.trim())),
      }))
      .filter((g) => g.areas.length > 0);
  }, [query, activeGov]);

  const totalAreas = governorates.reduce((acc, g) => acc + g.areas.length, 0);

  return (
    <>
      <PageHero
        title="مناطق التغطية"
        subtitle={`خدمتنا تصل إلى جميع محافظات ومناطق الكويت — أكثر من ${totalAreas} منطقة`}
        image={vanImg}
      />

      <section className="container mx-auto section-padding">
        {/* Search + Filter */}
        <div className="glass-card p-5 md:p-6 mb-8 sticky top-20 z-30">
          <div className="grid md:grid-cols-[1fr_auto] gap-4 items-center">
            <div className="relative">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="ابحث عن منطقتك..."
                className="w-full rounded-full border border-border bg-background/60 pr-11 pl-4 py-3 outline-none focus:border-primary transition"
              />
            </div>
            <div className="text-sm text-muted-foreground text-center md:text-right">
              <span className="gold-text font-bold text-lg">{filtered.reduce((a, g) => a + g.areas.length, 0)}</span> منطقة
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {["الكل", ...governorates.map((g) => g.name)].map((g) => (
              <button
                key={g}
                onClick={() => setActiveGov(g)}
                className={`rounded-full px-4 py-1.5 text-sm font-bold transition-all ${
                  activeGov === g ? "bg-primary text-primary-foreground shadow-md" : "bg-secondary/60 hover:bg-secondary"
                }`}
              >
                {g}
              </button>
            ))}
          </div>
        </div>

        {/* Areas grid */}
        <div className="space-y-8">
          {filtered.length === 0 && (
            <div className="glass-card p-10 text-center text-muted-foreground">
              لم نجد منطقة بهذا الاسم. جرب اسماً آخر أو اتصل بنا مباشرة.
            </div>
          )}

          {filtered.map((g) => (
            <div key={g.name} className="glass-card p-6 md:p-8 animate-fade-up">
              <h3 className="text-xl md:text-2xl font-extrabold mb-5 flex items-center gap-2">
                <MapPin className="h-6 w-6 text-primary" />
                <span className="gold-text">{g.name}</span>
                <span className="text-sm text-muted-foreground font-normal">({g.areas.length})</span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {g.areas.map((a) => (
                  <div key={a} className="rounded-xl bg-secondary/40 border border-border/40 px-3 py-2 text-center text-sm hover:bg-primary/10 hover:border-primary/40 transition-colors">
                    {a}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default Areas;
