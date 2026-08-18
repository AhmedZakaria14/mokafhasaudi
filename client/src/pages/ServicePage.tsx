import { Link, useRoute } from "wouter";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronLeft,
  ClipboardList,
  MapPinned,
  Search,
  ShieldCheck,
} from "lucide-react";
import { Seo } from "@/components/Seo";
import { SiteLayout } from "@/components/SiteLayout";
import { coverageRegions, serviceCatalog } from "@/data/siteData";

export default function ServicePage() {
  const [, params] = useRoute("/services/:slug");
  const service =
    serviceCatalog.find(item => item.slug === params?.slug) ??
    serviceCatalog[0];

  return (
    <SiteLayout>
      <Seo
        title={`${service.label} في السعودية`}
        description={`${service.summary} تعرّف على منهج درع الأثر وخطوات ترتيب المعاينة للمنازل والمنشآت في السعودية.`}
      />

      <section className="page-hero page-hero-service">
        <div className="page-hero-pattern" aria-hidden="true" />
        <div className="container">
          <nav className="breadcrumb breadcrumb-dark" aria-label="مسار الصفحة">
            <Link href="/">الرئيسية</Link>
            <ChevronLeft size={15} aria-hidden="true" />
            <a href="/#services">الخدمات</a>
            <ChevronLeft size={15} aria-hidden="true" />
            <span aria-current="page">{service.label}</span>
          </nav>

          <div className="page-hero-grid">
            <div>
              <span className="eyebrow eyebrow-light">
                <ShieldCheck size={17} aria-hidden="true" /> {service.eyebrow}
              </span>
              <h1>
                {service.label}
                <span>بمنهج يبدأ من التشخيص.</span>
              </h1>
              <p>{service.summary}</p>
              <div className="page-hero-actions">
                <Link href="/coverage" className="primary-action hero-primary">
                  اختر مدينتك <ArrowLeft size={18} aria-hidden="true" />
                </Link>
                <a href="#service-plan" className="secondary-action on-dark">
                  تعرف على الخطوات <ChevronLeft size={18} aria-hidden="true" />
                </a>
              </div>
            </div>

            <aside className="page-hero-aside">
              <div className="aside-icon">
                <Search size={26} aria-hidden="true" />
              </div>
              <span>قاعدة الخدمة</span>
              <b>لا معالجة قبل قراءة ظروف الموقع.</b>
              <p>
                نوع المكان، نقطة النشاط، وتكرار المشكلة عناصر تحدد المسار
                المناسب.
              </p>
            </aside>
          </div>
        </div>
      </section>

      <section className="section service-plan-section" id="service-plan">
        <div className="container service-plan-grid">
          <div className="service-plan-copy">
            <span className="eyebrow">
              <ClipboardList size={16} aria-hidden="true" /> نظرة على المسار
            </span>
            <h2>من الملاحظة الأولى إلى وقاية قابلة للاستمرار.</h2>
            <p>{service.description}</p>
            <div className="service-plan-note">
              <ShieldCheck size={21} aria-hidden="true" />
              <span>
                <b>خطة بحسب الموقع</b>التفاصيل النهائية تتحدد بعد معرفة طبيعة
                المساحة ونطاق النشاط.
              </span>
            </div>
          </div>

          <div className="service-step-cards">
            {service.steps.map((step, index) => (
              <article key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <CheckCircle2 size={21} aria-hidden="true" />
                  <h3>{step}</h3>
                </div>
                <p>
                  {index === 0
                    ? "نجمع المؤشرات اللازمة لتحديد نقطة البداية بدقة."
                    : index === 1
                      ? "نرتب التدخل حسب الأولوية وطبيعة استخدام المكان."
                      : "نوضح الخطوات التي تساعد على الحد من تكرار المشكلة."}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section service-context-section"
        aria-labelledby="context-title"
      >
        <div className="container">
          <div className="section-heading compact-heading">
            <div>
              <span className="eyebrow">
                <ShieldCheck size={16} aria-hidden="true" /> قبل وبعد الخدمة
              </span>
              <h2 id="context-title">معلومات تجعل الزيارة أكثر فاعلية.</h2>
            </div>
            <p>
              ثلاث نقاط تساعد على تحويل الوصف الأولي إلى معاينة مرتبة ومسار
              مناسب للموقع.
            </p>
          </div>

          <div className="context-card-grid">
            <article>
              <span>01</span>
              <ClipboardList size={24} aria-hidden="true" />
              <h3>قبل الزيارة</h3>
              <p>
                صف نوع الموقع، وأين ظهرت المؤشرات، وهل تتكرر في وقت أو منطقة
                محددة.
              </p>
            </article>
            <article>
              <span>02</span>
              <MapPinned size={24} aria-hidden="true" />
              <h3>حدد مدينتك</h3>
              <p>
                استخدم دليل المناطق والمدن للوصول إلى صفحة محلية أكثر ارتباطاً
                بموقعك.
              </p>
            </article>
            <article>
              <span>03</span>
              <ShieldCheck size={24} aria-hidden="true" />
              <h3>بعد المعالجة</h3>
              <p>
                طبّق توصيات الوقاية الخاصة بالنقاط الحساسة وعوامل الجذب داخل
                المكان.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section
        className="section location-links-section"
        aria-labelledby="location-links-title"
      >
        <div className="container">
          <div className="section-heading compact-heading">
            <div>
              <span className="eyebrow">
                <MapPinned size={16} aria-hidden="true" /> تغطية الخدمة
              </span>
              <h2 id="location-links-title">الخدمة ضمن دليل وطني للمناطق.</h2>
            </div>
            <Link href="/coverage" className="secondary-action">
              كل المدن والمناطق <ArrowLeft size={18} aria-hidden="true" />
            </Link>
          </div>

          <div className="location-link-grid">
            {coverageRegions.map((region, index) => (
              <Link key={region.slug} href={`/locations/${region.slug}`}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <b>{region.label}</b>
                <small>{region.cities.slice(0, 3).join(" · ")}</small>
                <ArrowLeft size={18} aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
