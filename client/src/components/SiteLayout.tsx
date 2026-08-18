/**
 * Design reminder — Desert Shield Calm: warm editorial shell, clear actions, asymmetry only where it improves hierarchy.
 */
import { type ReactNode } from "react";
import { Link } from "wouter";
import { Menu, ShieldCheck } from "lucide-react";
import { brand } from "@/data/siteData";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { label: "الخدمات", href: "/#services" },
  { label: "كيف نعمل", href: "/#process" },
  { label: "دليل التغطية", href: "/coverage" },
  { label: "عن درع الأثر", href: "/about" },
];

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="brand-mark" aria-label="درع الأثر — الصفحة الرئيسية">
      <img src={brand.logo} alt="رمز درع الأثر" className="brand-symbol" />
      {!compact && (
        <span className="brand-words">
          <strong className="wordmark-text"><i />درع الأثر</strong>
          <small>لوقاية المكان</small>
        </span>
      )}
    </Link>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container header-inner">
          <BrandMark />
          <nav className="desktop-nav" aria-label="التنقل الرئيسي">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>{item.label}</Link>
            ))}
          </nav>
          <div className="header-actions">
            <Link className="outline-action desktop-cta" href="/coverage">
              <ShieldCheck size={17} /> اعثر على مدينتك
            </Link>
            <Sheet>
              <SheetTrigger asChild>
                <button className="menu-trigger" aria-label="فتح قائمة التنقل"><Menu size={22} /></button>
              </SheetTrigger>
              <SheetContent side="left" className="mobile-sheet" dir="rtl">
                <SheetTitle className="sr-only">قائمة درع الأثر</SheetTitle>
                <BrandMark />
                <nav className="mobile-nav" aria-label="التنقل عبر الجوال">
                  {navItems.map((item, index) => (
                    <SheetClose asChild key={item.href}>
                      <Link href={item.href}><span>0{index + 1}</span>{item.label}</Link>
                    </SheetClose>
                  ))}
                </nav>
                <div className="sheet-note">
                  <ShieldCheck size={18} />
                  <p>ابدأ من دليل المدن، ثم اختر الخدمة الأقرب لاحتياج موقعك.</p>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <BrandMark />
            <p>منصة تعريفية لخطط وقاية ومكافحة آفات للمنازل والمنشآت في مدن المملكة.</p>
          </div>
          <div className="footer-links">
            <span>استكشف</span>
            <Link href="/coverage">دليل المناطق والمدن</Link>
            <Link href="/services/general-pest-control">المكافحة العامة</Link>
            <Link href="/about">منهج درع الأثر</Link>
          </div>
          <div className="footer-links">
            <span>صفحات شائعة</span>
            <Link href="/locations/riyadh-city">مكافحة حشرات الرياض</Link>
            <Link href="/locations/jeddah">مكافحة حشرات جدة</Link>
            <Link href="/locations/dammam">مكافحة حشرات الدمام</Link>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} درع الأثر. محتوى توعوي وخدمي.</span>
          <span>السعودية · تغطية حسب الموعد والموقع</span>
        </div>
      </footer>
    </div>
  );
}
