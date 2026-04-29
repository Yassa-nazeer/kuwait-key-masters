import { Link } from "react-router-dom";
import { Phone, MessageCircle, MapPin, Clock, Key } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-border/50 bg-background/60">
      <div className="container mx-auto px-4 py-12 grid gap-8 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-glow">
              <Key className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-lg font-extrabold gold-text">أبو مي للمفاتيح</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            فني مفاتيح سيارات متنقل في الكويت، خدمة 24 ساعة بأحدث الأجهزة وأسعار مناسبة.
          </p>
        </div>

        <div>
          <h4 className="mb-3 font-bold text-primary">روابط سريعة</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/services" className="hover:text-primary">خدماتنا</Link></li>
            <li><Link to="/cars" className="hover:text-primary">السيارات المدعومة</Link></li>
            <li><Link to="/areas" className="hover:text-primary">مناطق التغطية</Link></li>
            <li><Link to="/about" className="hover:text-primary">من نحن</Link></li>
            <li><Link to="/contact" className="hover:text-primary">اتصل بنا</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 font-bold text-primary">تواصل معنا</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /><a href="tel:25747027" dir="ltr">+965 25747027</a></li>
            <li className="flex items-center gap-2"><MessageCircle className="h-4 w-4 text-success" /><a href="https://wa.me/96525747027" dir="ltr">WhatsApp</a></li>
            <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-accent" />متاح 24 ساعة طوال الأسبوع</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-destructive" />جميع مناطق دولة الكويت</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 font-bold text-primary">خدمتنا تشمل</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• فتح السيارات بدون ضرر</li>
            <li>• برمجة مفاتيح وريموتات</li>
            <li>• نسخ مفاتيح السيارات</li>
            <li>• فتح منازل وأقفال</li>
            <li>• تصليح أقفال السيارات</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/50 py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} أبو مي لفني المفاتيح - جميع الحقوق محفوظة
      </div>
    </footer>
  );
};

export default Footer;
