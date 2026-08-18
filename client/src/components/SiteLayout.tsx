import { type ReactNode } from "react";
import { Link, useLocation } from "wouter";
import {
  ArrowLeft,
  Building2,
  Home,
  MapPin,
  Menu,
  ShieldCheck,
} from "lucide-react";
import { brand } from "@/data/siteData";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { label: "الرئيسية", href: "/" },
  { label: "الخدمات", href: "/#services" },
  { label: "كيف نعمل", href: "/#process" },
  { label: "مناطق التغطية", href: "/coverage" },
  { label: "عن درع الأثر", href: "/about" },
];

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      href="/"
      className="brand-mark"
      aria-label="درع الأثر — الصفحة الرئيسية"
    >
      <span className="brand-symbol-wrap" aria-hidden="true">
        <img
          src={brand.logo}
          alt=""
          className="brand-symbol"
          width="52"
          height="52"
        />
      </span>
      {!compact && (
        <span className="brand-words">
          <strong>{brand.name}</strong>
          <small>وقاية تبدأ من فهم المكان</small>
        </span>
      )}
    </Link>
  );
}

function FooterLinkGroup({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="footer-links">
      <span>{title}</span>
      {children}
    </div>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  const [location] = useLocation();

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    if (href.startsWith("/#")) return false;
    return location.startsWith(href);
  };

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        تخطي إلى المحتوى
      </a>

      <div className="utility-bar">
        <div className="container utility-inner">
          <p>
            <ShieldCheck size={16} aria-hidden="true" />
            خدمة منظمة للمنازل والمنشآت
          </p>
          <div>
            <span>
              <Home size={15} aria-hidden="true" /> حلول سكنية
            </span>
            <span>
              <Building2 size={15} aria-hidden="true" /> حلول تجارية
            </span>
          </div>
        </div>
      </div>

      <header className="site-header">
        <div className="container header-inner">
          <BrandMark />

          <nav className="desktop-nav" aria-label="التنقل الرئيسي">
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className={isActive(item.href) ? "is-active" : undefined}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <Link className="primary-action header-cta" href="/coverage">
              <MapPin size={18} aria-hidden="true" />
              اختر مدينتك
            </Link>

            <Sheet>
              <SheetTrigger asChild>
                <button className="menu-trigger" aria-label="فتح قائمة التنقل">
                  <Menu size={23} aria-hidden="true" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="mobile-sheet" dir="rtl">
                <SheetTitle className="sr-only">قائمة درع الأثر</SheetTitle>
                <BrandMark />
                <p className="mobile-menu-intro">
                  اختر الخدمة أو انتقل إلى دليل التغطية للوصول إلى الصفحة الأقرب
                  لموقعك.
                </p>
                <nav className="mobile-nav" aria-label="التنقل عبر الجوال">
                  {navItems.map((item, index) => (
                    <SheetClose asChild key={item.href}>
                      <Link
                        href={item.href}
                        className={
                          isActive(item.href) ? "is-active" : undefined
                        }
                      >
                        <span>{String(index + 1).padStart(2, "0")}</span>
                        {item.label}
                        <ArrowLeft size={18} aria-hidden="true" />
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
                <div className="sheet-note">
                  <ShieldCheck size={21} aria-hidden="true" />
                  <div>
                    <b>بداية أوضح</b>
                    <p>
                      حدد مدينتك ثم اختر نوع المشكلة لنرتب مساراً مناسباً
                      للموقع.
                    </p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main id="main-content">{children}</main>

      <footer className="site-footer">
        <div className="container footer-top">
          <div className="footer-brand">
            <BrandMark />
            <p>
              دليل خدمي سعودي يشرح مسارات الوقاية ومكافحة الآفات للمنازل
              والمنشآت بلغة واضحة تبدأ من المعاينة.
            </p>
            <div className="footer-badge">
              <ShieldCheck size={18} aria-hidden="true" />
              <span>فحص · معالجة · متابعة</span>
            </div>
          </div>

          <FooterLinkGroup title="الخدمات">
            <Link href="/services/cockroaches">مكافحة الصراصير</Link>
            <Link href="/services/bed-bugs">مكافحة بق الفراش</Link>
            <Link href="/services/rodents">مكافحة القوارض</Link>
            <Link href="/services/termites">مكافحة النمل الأبيض</Link>
          </FooterLinkGroup>

          <FooterLinkGroup title="استكشف">
            <Link href="/coverage">دليل المناطق والمدن</Link>
            <Link href="/services/general-pest-control">المكافحة العامة</Link>
            <Link href="/about">منهج درع الأثر</Link>
          </FooterLinkGroup>

          <FooterLinkGroup title="مدن شائعة">
            <Link href="/locations/riyadh-city">الرياض</Link>
            <Link href="/locations/jeddah">جدة</Link>
            <Link href="/locations/dammam">الدمام</Link>
            <Link href="/locations/madinah-city">المدينة المنورة</Link>
          </FooterLinkGroup>
        </div>

        <div className="container footer-bottom">
          <span>
            © {new Date().getFullYear()} درع الأثر. جميع الحقوق محفوظة.
          </span>
          <span>المملكة العربية السعودية · التغطية حسب الموقع والموعد</span>
        </div>
      </footer>

      <nav className="mobile-action-bar" aria-label="إجراءات سريعة">
        <Link href="/#services">
          <ShieldCheck size={19} aria-hidden="true" />
          الخدمات
        </Link>
        <Link href="/coverage" className="mobile-action-primary">
          <MapPin size={19} aria-hidden="true" />
          اختر مدينتك
        </Link>
      </nav>
    </div>
  );
}
