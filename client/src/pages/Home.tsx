import { useState } from "react";
import { Link } from "wouter";
import {
  ArrowLeft,
  Building2,
  Check,
  ChevronLeft,
  CircleDotDashed,
  ClipboardCheck,
  Home as HomeIcon,
  MapPinned,
  Search,
  ShieldCheck,
  Sparkles,
  Sprout,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Seo } from "@/components/Seo";
import { SiteLayout } from "@/components/SiteLayout";
import { coverageRegions, faqs, serviceCatalog } from "@/data/siteData";

const serviceIcons = [
  Sparkles,
  HomeIcon,
  ShieldCheck,
  Building2,
  Sprout,
  CircleDotDashed,
];

const trustPoints = [
  "معاينة تسبق قرار المعالجة",
  "خطة واضحة للمنازل والمنشآت",
  "تغطية محلية في مناطق المملكة",
];

export default function Home() {
  const [activeRegion, setActiveRegion] = useState<
    (typeof coverageRegions)[number]
  >(coverageRegions[0]);

  return (
    <SiteLayout>
      <Seo
        title="مكافحة حشرات في السعودية"
        description="درع الأثر: دليل خدمات الوقاية ومكافحة الآفات للمنازل والمنشآت في مناطق ومدن السعودية، بخطة تبدأ من المعاينة الدقيقة."
      />

      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-pattern" aria-hidden="true" />
        <div className="container hero-grid">
          <div className="hero-copy reveal">
            <span className="eyebrow eyebrow-light">
              <ShieldCheck size={17} aria-hidden="true" />
              وقاية مدروسة في مدن السعودية
            </span>
            <h1 id="hero-title">
              أوقف المشكلة عند
              <span>أول نقطة دخول.</span>
            </h1>
            <p>
              حلول منظمة لمكافحة الآفات تبدأ بفهم المكان، وتنتقل إلى معالجة
              مناسبة وخطوات وقاية قابلة للتطبيق داخل المنزل أو المنشأة.
            </p>

            <div className="hero-actions">
              <Link className="primary-action hero-primary" href="/coverage">
                اكتشف التغطية في مدينتك
                <ArrowLeft size={19} aria-hidden="true" />
              </Link>
              <a className="secondary-action on-dark" href="#services">
                استعرض الخدمات
                <ChevronLeft size={18} aria-hidden="true" />
              </a>
            </div>

            <ul className="hero-checks" aria-label="مزايا منهج الخدمة">
              {trustPoints.map(point => (
                <li key={point}>
                  <Check size={16} aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div
            className="hero-visual reveal reveal-delay"
            aria-label="تصور لمسار حماية الموقع"
          >
            <div className="protection-board">
              <div className="board-head">
                <div>
                  <span className="status-dot" aria-hidden="true" />
                  <b>خطة حماية الموقع</b>
                </div>
                <small>فحص منظم</small>
              </div>

              <div className="protection-map" aria-hidden="true">
                <span className="map-grid" />
                <div className="home-outline">
                  <HomeIcon size={58} />
                  <span className="shield-node">
                    <ShieldCheck size={30} />
                  </span>
                </div>
                <i className="scan-point point-one" />
                <i className="scan-point point-two" />
                <i className="scan-point point-three" />
                <span className="scan-line" />
              </div>

              <div className="board-metrics">
                <div>
                  <span>01</span>
                  <p>
                    <b>فحص الموقع</b>
                    <small>قراءة النقاط الحساسة</small>
                  </p>
                </div>
                <div>
                  <span>02</span>
                  <p>
                    <b>اختيار المسار</b>
                    <small>حسب نوع النشاط</small>
                  </p>
                </div>
                <div>
                  <span>03</span>
                  <p>
                    <b>تثبيت الوقاية</b>
                    <small>توصيات للمتابعة</small>
                  </p>
                </div>
              </div>
            </div>

            <div className="floating-proof proof-top">
              <MapPinned size={19} aria-hidden="true" />
              <span>
                <b>13 منطقة</b>
                <small>ضمن دليل التغطية</small>
              </span>
            </div>
            <div className="floating-proof proof-bottom">
              <ShieldCheck size={19} aria-hidden="true" />
              <span>
                <b>6 خدمات</b>
                <small>مسارات متخصصة</small>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="ركائز الخدمة">
        <div className="container trust-grid">
          <article>
            <Search size={23} aria-hidden="true" />
            <div>
              <b>فحص قبل الإجراء</b>
              <p>لأن كل موقع يختلف في مصدر النشاط ونقاط الدخول.</p>
            </div>
          </article>
          <article>
            <ClipboardCheck size={23} aria-hidden="true" />
            <div>
              <b>خطوات يمكن فهمها</b>
              <p>تجهيز، معالجة، ثم توصيات وقائية واضحة.</p>
            </div>
          </article>
          <article>
            <MapPinned size={23} aria-hidden="true" />
            <div>
              <b>دليل محلي واسع</b>
              <p>مناطق ومدن وأحياء شائعة في أنحاء المملكة.</p>
            </div>
          </article>
        </div>
      </section>

      <section
        className="section service-section"
        id="services"
        aria-labelledby="services-title"
      >
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">
                <Sparkles size={16} aria-hidden="true" /> مسارات متخصصة
              </span>
              <h2 id="services-title">اختر المشكلة، وسنوضح لك بداية المسار.</h2>
            </div>
            <p>
              صُممت كل خدمة حول سلوك مختلف للآفة داخل الموقع، حتى تصل إلى
              معلومات مفيدة قبل ترتيب المعاينة.
            </p>
          </div>

          <div className="service-grid">
            {serviceCatalog.map((service, index) => {
              const Icon = serviceIcons[index];
              return (
                <Link
                  href={`/services/${service.slug}`}
                  key={service.slug}
                  className={`service-card ${index === 0 ? "service-card-featured" : ""}`}
                >
                  <div className="service-card-top">
                    <span className="service-icon">
                      <Icon size={24} aria-hidden="true" />
                    </span>
                    <small>{String(index + 1).padStart(2, "0")}</small>
                  </div>
                  <h3>{service.label}</h3>
                  <p>{service.summary}</p>
                  <span className="card-link">
                    تفاصيل الخدمة <ArrowLeft size={17} aria-hidden="true" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="section process-section"
        id="process"
        aria-labelledby="process-title"
      >
        <div className="container process-grid">
          <div className="process-intro">
            <span className="eyebrow eyebrow-light">
              <ClipboardCheck size={16} aria-hidden="true" /> مسار الخدمة
            </span>
            <h2 id="process-title">ثلاث مراحل تحوّل الملاحظة إلى خطة واضحة.</h2>
            <p>
              لا نختصر المشكلة في رش سريع. نقرأ الموقع أولاً، نرتب الأولويات، ثم
              نوضح إجراءات الوقاية بعد المعالجة.
            </p>
            <Link href="/about" className="secondary-action on-dark">
              تعرف على منهجنا <ArrowLeft size={18} aria-hidden="true" />
            </Link>
          </div>

          <div className="process-steps">
            <article>
              <span>01</span>
              <div>
                <Search size={22} aria-hidden="true" />
                <h3>نقرأ الموقع</h3>
              </div>
              <p>نحدد مناطق النشاط وعوامل الجذب ومسارات الدخول قبل أي توصية.</p>
            </article>
            <article>
              <span>02</span>
              <div>
                <ClipboardCheck size={22} aria-hidden="true" />
                <h3>نرتب المعالجة</h3>
              </div>
              <p>
                نختار الأولويات ونوضح المطلوب قبل الزيارة بما يناسب نوع المكان.
              </p>
            </article>
            <article>
              <span>03</span>
              <div>
                <ShieldCheck size={22} aria-hidden="true" />
                <h3>نثبت الوقاية</h3>
              </div>
              <p>نقدّم خطوات عملية تساعد على تقليل فرص عودة النشاط مستقبلاً.</p>
            </article>
          </div>
        </div>
      </section>

      <section
        className="section coverage-section"
        aria-labelledby="coverage-title"
      >
        <div className="container">
          <div className="section-heading coverage-heading">
            <div>
              <span className="eyebrow">
                <MapPinned size={16} aria-hidden="true" /> دليل التغطية
              </span>
              <h2 id="coverage-title">
                ابدأ من منطقتك، ثم انتقل إلى المدينة الأقرب.
              </h2>
            </div>
            <Link href="/coverage" className="secondary-action">
              عرض الدليل الكامل <ArrowLeft size={18} aria-hidden="true" />
            </Link>
          </div>

          <div
            className="region-selector"
            role="tablist"
            aria-label="مناطق التغطية"
          >
            {coverageRegions.map(region => (
              <button
                key={region.slug}
                type="button"
                role="tab"
                aria-selected={activeRegion.slug === region.slug}
                onClick={() => setActiveRegion(region)}
              >
                {region.label}
              </button>
            ))}
          </div>

          <article className="active-region-card" aria-live="polite">
            <div className="region-summary">
              <span>
                <MapPinned size={18} aria-hidden="true" /> العاصمة الإدارية:{" "}
                {activeRegion.capital}
              </span>
              <h3>{activeRegion.label}</h3>
              <p>{activeRegion.intro}</p>
              <Link
                href={`/locations/${activeRegion.slug}`}
                className="primary-action"
              >
                استعرض نطاق المنطقة <ArrowLeft size={18} aria-hidden="true" />
              </Link>
            </div>
            <div className="region-cities">
              <small>مدن ومحافظات ضمن الدليل</small>
              <div>
                {activeRegion.cities.map(city => (
                  <span key={city}>
                    <Check size={15} aria-hidden="true" />
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>

      <section
        className="section audience-section"
        aria-labelledby="audience-title"
      >
        <div className="container">
          <div className="section-heading compact-heading">
            <div>
              <span className="eyebrow">
                <ShieldCheck size={16} aria-hidden="true" /> حسب طبيعة الموقع
              </span>
              <h2 id="audience-title">الحماية تتكيّف مع استخدام المكان.</h2>
            </div>
            <p>
              حركة المنزل تختلف عن المطعم أو المكتب، ولذلك تختلف معها نقاط الفحص
              والأولويات.
            </p>
          </div>

          <div className="audience-grid">
            <article className="audience-card audience-home">
              <span className="audience-icon">
                <HomeIcon size={29} aria-hidden="true" />
              </span>
              <small>01 · للمنازل</small>
              <h3>راحة العائلة وخصوصية المساحة أولاً.</h3>
              <p>
                تركيز على المطابخ، غرف النوم، الحدائق، ومناطق الاستخدام اليومي.
              </p>
              <Link href="/services/general-pest-control">
                استكشف الحلول السكنية <ArrowLeft size={17} />
              </Link>
            </article>
            <article className="audience-card audience-business">
              <span className="audience-icon">
                <Building2 size={29} aria-hidden="true" />
              </span>
              <small>02 · للمنشآت</small>
              <h3>خطة تراعي التشغيل وحركة الزوار.</h3>
              <p>
                قراءة للمداخل، التخزين، نقاط الخدمة، وإيقاع العمل داخل الموقع.
              </p>
              <Link href="/about">
                تعرف على منهج المنشآت <ArrowLeft size={17} />
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section faq-section" aria-labelledby="faq-title">
        <div className="container faq-grid">
          <div className="faq-intro">
            <span className="eyebrow">
              <CircleDotDashed size={16} aria-hidden="true" /> أسئلة شائعة
            </span>
            <h2 id="faq-title">إجابات تختصر عليك الخطوة الأولى.</h2>
            <p>
              تعرف على طريقة اختيار الخدمة وتجهيز الموقع قبل ترتيب المعاينة.
            </p>
            <div className="faq-help">
              <ShieldCheck size={20} aria-hidden="true" />
              <span>
                <b>لم تجد نوع المشكلة؟</b>ابدأ من خدمة المكافحة العامة.
              </span>
            </div>
          </div>

          <Accordion type="single" collapsible className="faq-accordion">
            {faqs.map((faq, index) => (
              <AccordionItem value={`faq-${index}`} key={faq.question}>
                <AccordionTrigger className="faq-trigger">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="faq-answer">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="final-cta" aria-labelledby="final-title">
        <div className="container final-cta-card">
          <div>
            <span className="eyebrow eyebrow-light">
              <MapPinned size={16} aria-hidden="true" /> الخطوة الأولى
            </span>
            <h2 id="final-title">اعرف نطاق التغطية المناسب لموقعك.</h2>
            <p>
              اختر منطقتك أو مدينتك، ثم انتقل إلى الخدمة التي تطابق احتياج
              المكان.
            </p>
          </div>
          <Link href="/coverage" className="primary-action light-action">
            افتح دليل المدن <ArrowLeft size={19} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
