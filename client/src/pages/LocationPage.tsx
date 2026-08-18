/** Design reminder — Desert Shield Calm: each local page must give human utility before local-search relevance. */
import { Link, useRoute } from "wouter";
import { ArrowLeft, Building2, Check, MapPinned, ShieldCheck } from "lucide-react";
import { Seo } from "@/components/Seo";
import { SiteLayout } from "@/components/SiteLayout";
import { cityCatalog, coverageRegions, serviceCatalog } from "@/data/siteData";

export default function LocationPage() {
  const [, params] = useRoute("/locations/:slug");
  const slug = params?.slug ?? "riyadh";
  const region = coverageRegions.find((item) => item.slug === slug);
  const city = cityCatalog.find((item) => item.slug === slug);
  const location = region ?? city ?? coverageRegions[0];
  const isRegion = Boolean(region);
  const title = isRegion ? `مكافحة حشرات ${location.label}` : city?.label ?? "مكافحة حشرات الرياض";
  const scope = isRegion ? region?.cities ?? [] : city?.neighborhoods ?? [];
  const scopeHeading = isRegion ? "مدن ومحافظات في الدليل" : "أحياء شائعة في الدليل";
  const intro = isRegion ? region?.intro : `صفحة محلية لخدمات الوقاية ومكافحة الآفات في ${city?.city}، تشمل الأحياء الشائعة والمناطق المحيطة عند ترتيب المعاينة.`;

  return (
    <SiteLayout>
      <Seo title={title} description={`${intro} استكشف مسارات الخدمة المتخصصة لدى درع الأثر.`} />
      <section className="inner-hero location-inner-hero"><div className="container inner-hero-grid"><div><span className="section-kicker light-kicker"><i /> دليل محلي</span><h1>{title}<br /><em>حولك تماماً.</em></h1><p>{intro}</p><a href="#services-local" className="primary-action">استعرض الخدمات المناسبة <ArrowLeft size={18}/></a></div><div className="hero-side-note location-note"><MapPinned size={29}/><p>{isRegion ? `العاصمة الإدارية: ${region?.capital}` : `المنطقة: ${city?.region}`}</p><small>التغطية الدقيقة تُرتب بحسب الموقع والموعد.</small></div></div></section>
      <section className="local-scope"><div className="container"><div className="scope-heading"><div><span className="section-kicker"><i /> أين نصل؟</span><h2>{scopeHeading}</h2></div><p>هذه قائمة إرشادية تساعدك على الوصول إلى الصفحة الملائمة. يشمل التنسيق المواقع السكنية والتجارية في نطاق المدينة أو المحافظة.</p></div><div className="scope-pills">{scope.map((item) => <span key={item}><Check size={15}/>{item}</span>)}</div></div></section>
      <section className="local-service-section" id="services-local"><div className="container"><div className="section-head compact-head"><div><span className="section-kicker"><i /> خدمات في {isRegion ? location.label : city?.city}</span><h2>اختر ما يطابق<br /><em>احتياج الموقع.</em></h2></div><p>كل صفحة خدمة تشرح مساراً عملياً، وتساعد على تجهيز المعلومات اللازمة قبل ترتيب المعاينة.</p></div><div className="local-service-grid">{serviceCatalog.map((service, index) => <Link href={`/services/${service.slug}`} key={service.slug} className={index === 0 ? "local-service-featured" : ""}><span>0{index + 1}</span><h3>{service.label}</h3><p>{service.summary}</p>{index === 0 && <small className="service-route-label">مسار حماية محلي</small>}<ArrowLeft size={18}/></Link>)}</div></div></section>
      <section className="location-callout"><div className="container callout-inner"><div><ShieldCheck size={26}/><h2>تبحث عن مدينة أو حي آخر؟</h2><p>انتقل إلى دليل المناطق؛ يعرض المدن والمحافظات الرئيسية داخل كل منطقة من مناطق المملكة.</p></div><Link href="/coverage" className="outline-action">عرض دليل التغطية <ArrowLeft size={17}/></Link></div></section>
      <section className="location-footer-strip"><div className="container"><Building2 size={20}/><p>خطة الخدمة للمنشآت تختلف عن المنازل بحسب الحركة ونوع التشغيل. ابدأ من المعاينة لتحديد الأولويات.</p></div></section>
    </SiteLayout>
  );
}
