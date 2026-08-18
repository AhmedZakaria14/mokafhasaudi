import { Link, useRoute } from "wouter";
import {
  ArrowLeft,
  Building2,
  Check,
  ChevronLeft,
  ClipboardCheck,
  Home,
  MapPinned,
  ShieldCheck,
} from "lucide-react";
import { Seo } from "@/components/Seo";
import { SiteLayout } from "@/components/SiteLayout";
import { cityCatalog, coverageRegions, serviceCatalog } from "@/data/siteData";

export default function LocationPage() {
  const [, params] = useRoute("/locations/:slug");
  const slug = params?.slug ?? "riyadh";
  const region = coverageRegions.find(item => item.slug === slug);
  const city = cityCatalog.find(item => item.slug === slug);
  const location = region ?? city ?? coverageRegions[0];
  const isRegion = Boolean(region);
  const title = isRegion
    ? `مكافحة حشرات ${location.label}`
    : (city?.label ?? "مكافحة حشرات الرياض");
  const scope = isRegion ? (region?.cities ?? []) : (city?.neighborhoods ?? []);
  const scopeHeading = isRegion
    ? "مدن ومحافظات ضمن نطاق الدليل"
    : "أحياء شائعة ضمن نطاق الدليل";
  const intro = isRegion
    ? region?.intro
    : `صفحة محلية لخدمات الوقاية ومكافحة الآفات في ${city?.city}، تشمل الأحياء الشائعة والمناطق المحيطة عند ترتيب المعاينة.`;

  return (
    <SiteLayout>
      <Seo
        title={title}
        description={`${intro} استكشف مسارات الخدمة المتخصصة لدى درع الأثر.`}
      />

      <section className="page-hero location-hero">
        <div className="page-hero-pattern" aria-hidden="true" />
        <div className="container">
          <nav className="breadcrumb breadcrumb-dark" aria-label="مسار الصفحة">
            <Link href="/">الرئيسية</Link>
            <ChevronLeft size={15} aria-hidden="true" />
            <Link href="/coverage">التغطية</Link>
            <ChevronLeft size={15} aria-hidden="true" />
            <span aria-current="page">
              {isRegion ? region?.label : city?.city}
            </span>
          </nav>

          <div className="page-hero-grid">
            <div>
              <span className="eyebrow eyebrow-light">
                <MapPinned size={17} aria-hidden="true" /> دليل محلي
              </span>
              <h1>
                {title}
                <span>بخطة تناسب موقعك.</span>
              </h1>
              <p>{intro}</p>
              <div className="page-hero-actions">
                <a
                  href="#services-local"
                  className="primary-action hero-primary"
                >
                  استعرض الخدمات <ArrowLeft size={18} aria-hidden="true" />
                </a>
                <Link href="/coverage" className="secondary-action on-dark">
                  مدينة أخرى <ChevronLeft size={18} aria-hidden="true" />
                </Link>
              </div>
            </div>

            <aside className="page-hero-aside location-aside">
              <div className="aside-icon">
                <MapPinned size={26} aria-hidden="true" />
              </div>
              <span>{isRegion ? "مركز المنطقة" : "المنطقة الإدارية"}</span>
              <b>{isRegion ? region?.capital : city?.region}</b>
              <p>
                تُحدد التغطية الدقيقة بحسب العنوان والموعد المتاح وطبيعة الموقع.
              </p>
            </aside>
          </div>
        </div>
      </section>

      <section className="section local-scope" aria-labelledby="scope-title">
        <div className="container local-scope-grid">
          <div>
            <span className="eyebrow">
              <MapPinned size={16} aria-hidden="true" /> أين نصل؟
            </span>
            <h2 id="scope-title">{scopeHeading}</h2>
            <p>
              قائمة إرشادية تساعدك على الوصول إلى الصفحة الملائمة، وتشمل المواقع
              السكنية والتجارية في النطاق.
            </p>
          </div>
          <div className="scope-pills">
            {scope.map(item => (
              <span key={item}>
                <Check size={16} aria-hidden="true" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section local-services"
        id="services-local"
        aria-labelledby="local-services-title"
      >
        <div className="container">
          <div className="section-heading compact-heading">
            <div>
              <span className="eyebrow">
                <ShieldCheck size={16} aria-hidden="true" /> خدمات محلية
              </span>
              <h2 id="local-services-title">اختر ما يطابق احتياج الموقع.</h2>
            </div>
            <p>
              كل صفحة خدمة تشرح مساراً عملياً وتوضح المعلومات المهمة قبل ترتيب
              المعاينة.
            </p>
          </div>

          <div className="local-service-grid">
            {serviceCatalog.map((service, index) => (
              <Link href={`/services/${service.slug}`} key={service.slug}>
                <div className="local-service-top">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <ShieldCheck size={20} aria-hidden="true" />
                </div>
                <h3>{service.label}</h3>
                <p>{service.summary}</p>
                <b>
                  تفاصيل المسار <ArrowLeft size={17} aria-hidden="true" />
                </b>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="location-type-strip" aria-label="أنواع المواقع">
        <div className="container location-type-grid">
          <article>
            <Home size={23} aria-hidden="true" />
            <div>
              <b>المواقع السكنية</b>
              <p>خصوصية أعلى وتركيز على مناطق الاستخدام اليومي.</p>
            </div>
          </article>
          <article>
            <Building2 size={23} aria-hidden="true" />
            <div>
              <b>المواقع التجارية</b>
              <p>خطة مرتبطة بحركة التشغيل ونقاط الدخول والتخزين.</p>
            </div>
          </article>
          <article>
            <ClipboardCheck size={23} aria-hidden="true" />
            <div>
              <b>موعد المعاينة</b>
              <p>النطاق النهائي يتحدد بعد وصف الموقع والعنوان.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="location-callout">
        <div className="container location-callout-card">
          <div>
            <span className="eyebrow eyebrow-light">
              <ShieldCheck size={16} aria-hidden="true" /> لست متأكداً من
              الصفحة؟
            </span>
            <h2>ارجع إلى دليل المناطق والمدن.</h2>
            <p>
              يعرض الدليل المدن والمحافظات الرئيسية داخل كل منطقة من مناطق
              المملكة.
            </p>
          </div>
          <Link href="/coverage" className="primary-action light-action">
            عرض دليل التغطية <ArrowLeft size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
