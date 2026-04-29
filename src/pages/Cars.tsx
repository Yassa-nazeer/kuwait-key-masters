import { useMemo, useState } from "react";
import { Search, Phone, MessageCircle, KeyRound, Cpu, Fingerprint, Car as CarIcon, X } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import keysImg from "@/assets/car-keys.jpg";

const PHONE = "96525747027";
const WA_LINK = (text: string) =>
  `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`;

type KeyKind = "smart" | "remote" | "regular" | "transponder";

interface Brand {
  name: string;
  en: string;
  category: string;
  keys: KeyKind[];
  popular?: string[];
}

const KEY_LABEL: Record<KeyKind, { ar: string; icon: typeof KeyRound }> = {
  smart: { ar: "مفتاح ذكي (سمارت)", icon: Fingerprint },
  remote: { ar: "ريموت قابل للطي", icon: Cpu },
  regular: { ar: "مفتاح عادي / كتالوج", icon: KeyRound },
  transponder: { ar: "مفتاح شرائحي (شفرة)", icon: KeyRound },
};

const CATEGORIES = [
  "الكل",
  "ياباني",
  "ألماني",
  "أمريكي",
  "كوري",
  "بريطاني",
  "إيطالي",
  "فاخر",
] as const;

const BRANDS: Brand[] = [
  { name: "تويوتا", en: "Toyota", category: "ياباني", keys: ["smart", "remote", "transponder"], popular: ["كامري", "كورولا", "لاندكروزر", "برادو"] },
  { name: "لكزس", en: "Lexus", category: "فاخر", keys: ["smart", "remote"], popular: ["LX 570", "ES", "RX", "GX"] },
  { name: "نيسان", en: "Nissan", category: "ياباني", keys: ["smart", "remote", "transponder"], popular: ["باترول", "صني", "التيما", "ماكسيما"] },
  { name: "هوندا", en: "Honda", category: "ياباني", keys: ["smart", "remote"], popular: ["أكورد", "سيفيك", "CR-V"] },
  { name: "ميتسوبيشي", en: "Mitsubishi", category: "ياباني", keys: ["remote", "transponder"], popular: ["باجيرو", "لانسر", "ASX"] },
  { name: "مازدا", en: "Mazda", category: "ياباني", keys: ["smart", "remote"], popular: ["6", "CX-5", "CX-9"] },
  { name: "سوزوكي", en: "Suzuki", category: "ياباني", keys: ["remote", "transponder"], popular: ["جراند فيتارا", "سويفت"] },
  { name: "إنفينيتي", en: "Infiniti", category: "فاخر", keys: ["smart", "remote"], popular: ["QX80", "Q50", "QX60"] },
  { name: "أكورا", en: "Acura", category: "فاخر", keys: ["smart", "remote"], popular: ["MDX", "TLX"] },

  { name: "مرسيدس", en: "Mercedes", category: "ألماني", keys: ["smart", "remote"], popular: ["S-Class", "E-Class", "G-Class", "GLE"] },
  { name: "BMW", en: "BMW", category: "ألماني", keys: ["smart", "remote"], popular: ["X5", "X7", "7 Series", "5 Series"] },
  { name: "أودي", en: "Audi", category: "ألماني", keys: ["smart", "remote"], popular: ["Q7", "Q8", "A6", "A8"] },
  { name: "بورش", en: "Porsche", category: "فاخر", keys: ["smart", "remote"], popular: ["كايين", "باناميرا", "ماكان"] },
  { name: "فولكس فاجن", en: "Volkswagen", category: "ألماني", keys: ["smart", "remote", "transponder"], popular: ["تيجوان", "باسات", "جولف"] },

  { name: "هيونداي", en: "Hyundai", category: "كوري", keys: ["smart", "remote", "transponder"], popular: ["سوناتا", "إلنترا", "توسان", "سنتافي"] },
  { name: "كيا", en: "Kia", category: "كوري", keys: ["smart", "remote", "transponder"], popular: ["سيراتو", "سبورتاج", "سورنتو", "تيلورايد"] },
  { name: "جينيسيس", en: "Genesis", category: "كوري", keys: ["smart", "remote"], popular: ["G80", "G90", "GV80"] },

  { name: "فورد", en: "Ford", category: "أمريكي", keys: ["smart", "remote", "transponder"], popular: ["إكسبيديشن", "إكسبلورر", "موستانج", "F-150"] },
  { name: "شيفروليه", en: "Chevrolet", category: "أمريكي", keys: ["remote", "transponder"], popular: ["تاهو", "سوبربان", "كمارو", "إمبالا"] },
  { name: "GMC", en: "GMC", category: "أمريكي", keys: ["smart", "remote"], popular: ["يوكن", "سييرا", "أكاديا"] },
  { name: "كاديلاك", en: "Cadillac", category: "أمريكي", keys: ["smart", "remote"], popular: ["إسكاليد", "CT6", "XT5"] },
  { name: "كرايسلر", en: "Chrysler", category: "أمريكي", keys: ["remote", "transponder"], popular: ["300C"] },
  { name: "دودج", en: "Dodge", category: "أمريكي", keys: ["remote", "transponder"], popular: ["تشارجر", "تشالنجر", "دورانجو"] },
  { name: "جيب", en: "Jeep", category: "أمريكي", keys: ["smart", "remote"], popular: ["جراند شيروكي", "رانجلر"] },
  { name: "لينكولن", en: "Lincoln", category: "أمريكي", keys: ["smart", "remote"], popular: ["نافيجيتور", "أفياتور"] },

  { name: "لاند روفر", en: "Land Rover", category: "بريطاني", keys: ["smart", "remote"], popular: ["ديسكفري", "ديفندر"] },
  { name: "رنج روفر", en: "Range Rover", category: "بريطاني", keys: ["smart", "remote"], popular: ["فوج", "سبورت", "إيفوك"] },
  { name: "جاكوار", en: "Jaguar", category: "بريطاني", keys: ["smart", "remote"], popular: ["F-Pace", "XF"] },
  { name: "بنتلي", en: "Bentley", category: "فاخر", keys: ["smart"], popular: ["كونتيننتال", "بنتايجا"] },
  { name: "رولز رويس", en: "Rolls-Royce", category: "فاخر", keys: ["smart"], popular: ["جوست", "كولينان"] },

  { name: "فيراري", en: "Ferrari", category: "إيطالي", keys: ["smart"], popular: ["488", "روما"] },
  { name: "لامبورجيني", en: "Lamborghini", category: "إيطالي", keys: ["smart"], popular: ["أوروس", "هوراكان"] },
  { name: "مازيراتي", en: "Maserati", category: "إيطالي", keys: ["smart", "remote"], popular: ["جيبلي", "ليفانتي"] },
];

const Cars = () => {
  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState<(typeof CATEGORIES)[number]>("الكل");
  const [selected, setSelected] = useState<Brand | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return BRANDS.filter((b) => {
      const matchCat = activeCat === "الكل" || b.category === activeCat;
      const matchQ =
        !q ||
        b.name.toLowerCase().includes(q) ||
        b.en.toLowerCase().includes(q) ||
        (b.popular || []).some((p) => p.toLowerCase().includes(q));
      return matchCat && matchQ;
    });
  }, [query, activeCat]);

  return (
    <>
      <PageHero
        title="السيارات المدعومة"
        subtitle="نخدم +30 ماركة عالمية — يابانية، أمريكية، أوروبية، كورية، فاخرة ورياضية"
        image={keysImg}
      />

      {/* Search + filters */}
      <section className="container mx-auto px-4 -mt-6 md:-mt-10 relative z-10">
        <div className="glass-card p-4 md:p-6">
          <div className="relative mb-4">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="ابحث عن ماركة سيارتك أو الموديل... (مثال: لاندكروزر، باترول، BMW)"
              className="pr-11 h-12 text-base bg-background/60 border-border/60"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <Button
                key={cat}
                size="sm"
                variant={activeCat === cat ? "default" : "secondary"}
                onClick={() => setActiveCat(cat)}
                className={
                  activeCat === cat
                    ? "bg-gradient-to-r from-primary to-primary-glow text-primary-foreground border-0"
                    : ""
                }
              >
                {cat}
              </Button>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-3">
            عرض <span className="gold-text font-bold">{filtered.length}</span> ماركة
          </p>
        </div>
      </section>

      {/* Brands grid */}
      <section className="container mx-auto section-padding pt-8">
        {filtered.length === 0 ? (
          <div className="glass-card p-10 text-center">
            <CarIcon className="h-12 w-12 mx-auto mb-3 text-muted-foreground" />
            <p className="text-lg mb-2">لم يتم العثور على نتائج</p>
            <p className="text-muted-foreground text-sm mb-4">
              تواصل معنا مباشرة، فنحن نتعامل مع جميع الماركات تقريباً
            </p>
            <a href={WA_LINK("مرحباً، أحتاج خدمة لمفتاح سيارتي")}>
              <Button className="bg-[hsl(var(--whatsapp))] hover:bg-[hsl(var(--whatsapp))]/90 text-white">
                <MessageCircle className="h-4 w-4" /> تواصل واتساب
              </Button>
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
            {filtered.map((b) => (
              <button
                key={b.name}
                onClick={() => setSelected(b)}
                className="glass-card group p-4 md:p-5 text-center hover:scale-105 hover:border-primary/60 transition-all duration-300 cursor-pointer relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="text-base md:text-lg font-extrabold mb-1 group-hover:gold-text transition-colors">
                    {b.name}
                  </div>
                  <div className="text-[10px] md:text-xs text-muted-foreground mb-2">
                    {b.en}
                  </div>
                  <Badge variant="secondary" className="text-[10px]">
                    {b.category}
                  </Badge>
                  <div className="flex justify-center gap-1 mt-3 opacity-70 group-hover:opacity-100">
                    {b.keys.slice(0, 3).map((k) => {
                      const Icon = KEY_LABEL[k].icon;
                      return (
                        <Icon key={k} className="h-3.5 w-3.5 text-primary" />
                      );
                    })}
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}

        <div className="mt-8 glass-card p-5 md:p-6 text-center">
          <p className="text-sm md:text-base text-muted-foreground">
            <span className="gold-text font-bold">ملاحظة:</span> القائمة لا تشمل كل الماركات.
            إذا لم تجد سيارتك، تواصل معنا — نتعامل مع جميع الماركات والموديلات تقريباً في الكويت.
          </p>
        </div>
      </section>

      {/* Brand details dialog */}
      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="max-w-lg glass-card border-border/60" dir="rtl">
          {selected && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">
                  مفاتيح <span className="gold-text">{selected.name}</span>
                  <span className="text-sm text-muted-foreground font-normal mr-2">
                    ({selected.en})
                  </span>
                </DialogTitle>
                <DialogDescription>
                  نوفر جميع خدمات المفاتيح لـ {selected.name} — فتح، برمجة، نسخ، وصيانة.
                </DialogDescription>
              </DialogHeader>

              <div>
                <h4 className="font-bold mb-3 text-sm">أنواع المفاتيح المدعومة:</h4>
                <div className="space-y-2">
                  {selected.keys.map((k) => {
                    const Icon = KEY_LABEL[k].icon;
                    return (
                      <div
                        key={k}
                        className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 border border-border/40"
                      >
                        <div className="h-9 w-9 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-primary-foreground">
                          <Icon className="h-4 w-4" />
                        </div>
                        <span className="font-medium text-sm">{KEY_LABEL[k].ar}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {selected.popular && selected.popular.length > 0 && (
                <div>
                  <h4 className="font-bold mb-2 text-sm">موديلات شائعة نخدمها:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selected.popular.map((m) => (
                      <Badge key={m} variant="outline" className="border-primary/40">
                        {m}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              <div className="grid grid-cols-2 gap-2 pt-2">
                <a
                  href={WA_LINK(
                    `مرحباً أبو مي، أحتاج خدمة مفتاح لسيارة ${selected.name} (${selected.en})`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-[hsl(var(--whatsapp))] hover:bg-[hsl(var(--whatsapp))]/90 text-white">
                    <MessageCircle className="h-4 w-4" /> واتساب
                  </Button>
                </a>
                <a href={`tel:+${PHONE}`}>
                  <Button className="w-full btn-gold">
                    <Phone className="h-4 w-4" /> اتصال مباشر
                  </Button>
                </a>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <CTASection />
    </>
  );
};

export default Cars;
