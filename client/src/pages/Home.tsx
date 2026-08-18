/**
 * Design reminder — Desert Shield Calm: confident editorial flow, lightly layered sand panels, clean conversion path.
 */
import { useState } from "react";
import { Link } from "wouter";
import {
  ArrowLeft, Building2, Check, ChevronLeft, CircleDotDashed, ClipboardCheck,
  Home as HomeIcon, MapPinned, Search, ShieldCheck, Sparkles, Sprout
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Seo } from "@/components/Seo";
import { SiteLayout } from "@/components/SiteLayout";
import { brand, coverageRegions, faqs, serviceCatalog } from "@/data/siteData";

const serviceIcons = [Sparkles, HomeIcon, ShieldCheck, Building2, Sprout, CircleDotDashed];

export default function Home() {
  const [activeRegion, setActiveRegion] = useState<(typeof coverageRegions)[number]>(coverageRegions[0]);

  return (
    <SiteLayout>
      <Seo title="مكافحة حشرات في السعودية" description="درع الأثر: دليل خدمات الوقاية ومكافحة الآفات للمنازل والمنشآت في مناطق ومدن السعودية، بخطة تبدأ من المعاينة الدقيقة." />

      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-backdrop" style={{ backgroundImage: `url(${brand.hero})` }} aria-hidden="true" />
        <div className="hero-wash" aria-hidden="true" />
        <div className="container hero-content">
          <div className="hero-copy rise">
            <span className="section-kicker light-kicker"><i /> وقاية تبدأ بفهم المكان</span>
            <h1 id="hero-title">الآفات تتوقف عند <em>خط الحماية.</em></h1>
            <p>حلول منظمة للمنازل والمنشآت في السعودية. نبدأ بقراءة الموقع، ثم نرتب المسار الأنسب للمعالجة والوقاية.</p>
            <div className="hero-actions">
              <Link className="primary-action" href="/coverage">استكشف التغطية في مدينتك <ArrowLeft size={18} /></Link>
              <a className="text-action" href="#process">كيف نرتب الزيارة؟ <ChevronLeft size={17} /></a>
            </div>
          </div>
          <aside className="hero-evidence rise-delayed" aria-label="مؤشرات الخدمة">
            <div><strong>13</strong><span>منطقة إدارية ضمن دليل التغطية</span></div>
            <div><strong>6</strong><span>مسارات علاج ووقاية متخصصة</span></div>
            <div><strong>3</strong><span>مراحل واضحة من الفحص إلى المتابعة</span></div>
          </aside>
        </div>
        <div className="hero-trail" aria-hidden="true"><span /><span /><span /></div>
      </section>

      <section className="trust-strip" aria-label="منهج الخدمة">
        <div className="container trust-grid">
          <p><ShieldCheck size={22} /><span><b>قرار مبني على معاينة</b>لا على وصف مختصر للمشكلة</span></p>
          <p><MapPinned size={22} /><span><b>دليل تغطية محلي</b>مدن ومحافظات وأحياء شائعة</span></p>
          <p><ClipboardCheck size={22} /><span><b>خطة قابلة للفهم</b>خطوات مرتبة قبل التنفيذ وبعده</span></p>
        </div>
      </section>

      <section className="service-section" id="services" aria-labelledby="services-title">
        <div className="container">
          <div className="section-head split-head">
            <div>
              <span className="section-kicker"><i /> مسارات متخصصة</span>
              <h2 id="services-title">خدمة تقرأ المشكلة<br /><em>قبل أن تعالجها.</em></h2>
            </div>
            <p>لا تبدأ كل الآفات من المكان نفسه، لذلك صمّمنا مسارات واضحة تساعدك على التعرف إلى ما يحتاجه موقعك قبل ترتيب المعاينة.</p>
          </div>
          <div className="service-list">
            {serviceCatalog.map((service, index) => {
              const Icon = serviceIcons[index];
              return (
                <Link href={`/services/${service.slug}`} key={service.slug} className="service-row">
                  <span className="service-number">0{index + 1}</span>
                  <span className="service-icon"><Icon size={22} /></span>
                  <span className="service-body"><b>{service.label}</b><small>{service.summary}</small></span>
                  <ArrowLeft className="service-arrow" size={20} />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="method-section" id="process" aria-labelledby="method-title">
        <div className="container method-wrap">
          <div className="method-visual">
            <img src={brand.inspection} alt="فني يقوم بفحص هادئ داخل مطبخ منزل سعودي" />
            <div className="image-stamp"><Search size={18} /><span>المعاينة ليست خطوة إضافية.<br />إنها بداية الخطة.</span></div>
          </div>
          <div className="method-copy">
            <span className="section-kicker"><i /> مسار الخدمة</span>
            <h2 id="method-title">ثلاث خطوات،<br /><em>قرارات أوضح.</em></h2>
            <div className="step-stack">
              <article><span>01</span><div><h3>نقرأ موقعك</h3><p>نحدد نوع المكان، مناطق النشاط، والعوامل المؤثرة قبل اقتراح أي إجراء.</p></div></article>
              <article><span>02</span><div><h3>نرتب المعالجة</h3><p>تُبنى الأولويات بحسب الحاجة ونطاق الموقع، مع توضيح ما يلزم قبل الزيارة.</p></div></article>
              <article><span>03</span><div><h3>نثبت الوقاية</h3><p>تُستكمل الخطة بتوصيات عملية تقلل فرص عودة المشكلة وتحسن جاهزية المكان.</p></div></article>
            </div>
          </div>
        </div>
      </section>

      <section className="coverage-section" id="coverage" aria-labelledby="coverage-title">
        <div className="container">
          <div className="section-head coverage-head">
            <div>
              <span className="section-kicker light-kicker"><i /> أين نغطي؟</span>
              <h2 id="coverage-title">دليل سعودي<br /><em>ينطلق من مدينتك.</em></h2>
            </div>
            <Link href="/coverage" className="outline-action on-dark">عرض الدليل الكامل <ArrowLeft size={17} /></Link>
          </div>
          <div className="coverage-stage">
            <div className="region-tabs" role="tablist" aria-label="مناطق التغطية">
              {coverageRegions.map((region, index) => (
                <button key={region.slug} role="tab" aria-selected={activeRegion.slug === region.slug} onClick={() => setActiveRegion(region)}>
                  <span>0{index + 1}</span>{region.label}
                </button>
              ))}
            </div>
            <article className="region-card" aria-live="polite">
              <span className="card-label">العاصمة الإدارية: {activeRegion.capital}</span>
              <h3>{activeRegion.label}</h3>
              <p>{activeRegion.intro}</p>
              <div className="city-pills">{activeRegion.cities.map((city) => <span key={city}>{city}</span>)}</div>
              <Link href={`/locations/${activeRegion.slug}`} className="region-link">استعرض مدن المنطقة <ArrowLeft size={17} /></Link>
            </article>
          </div>
        </div>
      </section>

      <section className="residential-section" aria-labelledby="residential-title">
        <div className="container residential-wrap">
          <div className="residential-copy">
            <span className="section-kicker"><i /> للمنازل والمنشآت</span>
            <h2 id="residential-title">حماية تتكيف مع<br /><em>إيقاع المكان.</em></h2>
            <p>المنزل، المقهى، مكتب العمل، والمستودع لا تتشابه في حركة الناس أو نقاط الحساسية. لذلك تبدأ الخطة من نوع الموقع، لا من قائمة خدمات عامة.</p>
            <div className="audience-points">
              <div><HomeIcon size={20} /><span><b>للمنازل</b>تركيز على الراحة، الخصوصية، والمناطق المستخدمة يومياً.</span></div>
              <div><Building2 size={20} /><span><b>للمنشآت</b>قراءة محيط التشغيل ونقاط الوصول وإيقاع المكان.</span></div>
            </div>
            <Link href="/services/general-pest-control" className="text-action dark-action">تعرف على خطة المكافحة العامة <ChevronLeft size={17} /></Link>
          </div>
          <div className="residential-image"><img src={brand.family} alt="منزل سعودي هادئ يرمز إلى الراحة بعد ترتيب خطة وقاية" /></div>
        </div>
      </section>

      <section className="faq-section" aria-labelledby="faq-title">
        <div className="container faq-wrap">
          <div className="faq-intro">
            <span className="section-kicker"><i /> إجابات أولية</span>
            <h2 id="faq-title">تعرف على الخطوة<br /><em>التالية بثقة.</em></h2>
            <p>هذه الإجابات تساعدك على ترتيب طلبك. أما الخطة المناسبة فتتحدد بعد معرفة موقعك ونوع الحاجة.</p>
          </div>
          <Accordion type="single" collapsible className="faq-accordion">
            {faqs.map((faq, index) => (
              <AccordionItem value={`faq-${index}`} key={faq.question}>
                <AccordionTrigger className="faq-trigger"><span>0{index + 1}</span>{faq.question}</AccordionTrigger>
                <AccordionContent className="faq-answer">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="final-cta" aria-labelledby="final-title">
        <div className="container final-cta-inner">
          <div><span className="section-kicker light-kicker"><i /> الخطوة الأولى</span><h2 id="final-title">ابدأ من المكان،<br /><em>ثم دع الخطة تتشكل.</em></h2></div>
          <div><p>افتح دليل التغطية، اختر مدينتك، ثم استكشف المسار الذي يطابق احتياج موقعك.</p><Link href="/coverage" className="primary-action sand-action">استكشف دليل المدن <ArrowLeft size={18} /></Link></div>
        </div>
      </section>
    </SiteLayout>
  );
}
