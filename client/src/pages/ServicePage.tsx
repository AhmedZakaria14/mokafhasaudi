/** Design reminder — Desert Shield Calm: service pages should read like a composed field brief, not a keyword template. */
import { Link, useRoute } from "wouter";
import { ArrowLeft, CheckCircle2, ClipboardList, MapPinned, ShieldCheck } from "lucide-react";
import { Seo } from "@/components/Seo";
import { SiteLayout } from "@/components/SiteLayout";
import { coverageRegions, serviceCatalog } from "@/data/siteData";

export default function ServicePage() {
  const [, params] = useRoute("/services/:slug");
  const service = serviceCatalog.find((item) => item.slug === params?.slug) ?? serviceCatalog[0];

  return (
    <SiteLayout>
      <Seo title={`${service.label} في السعودية`} description={`${service.summary} تعرّف على منهج درع الأثر وخطوات ترتيب المعاينة للمنازل والمنشآت في السعودية.`} />
      <section className="inner-hero service-inner-hero">
        <div className="container inner-hero-grid">
          <div><span className="section-kicker light-kicker"><i /> {service.eyebrow}</span><h1>{service.label}<br /><em>بمنهج واضح.</em></h1><p>{service.summary}</p><Link href="/coverage" className="primary-action">اختر مدينتك أولاً <ArrowLeft size={18} /></Link></div>
          <div className="hero-side-note"><ShieldCheck size={28} /><p>كل موقع له ظروفه، لهذا تُرتّب التفاصيل بعد المعاينة لا قبلها.</p></div>
        </div>
      </section>
      <section className="service-detail"><div className="container detail-grid"><div><span className="section-kicker"><i /> نظرة على المسار</span><h2>من الفحص إلى<br /><em>الوقاية العملية.</em></h2><p className="lead-text">{service.description}</p></div><div className="service-steps">{service.steps.map((step, index) => <article key={step}><span>0{index + 1}</span><p>{step}</p><CheckCircle2 size={19} /></article>)}</div></div></section>
      <section className="service-context"><div className="container context-grid"><article><ClipboardList size={22}/><h3>قبل الزيارة</h3><p>صف نوع الموقع، وأين ظهرت المؤشرات، وهل تتكرر في وقت أو منطقة محددة. هذا الوصف يجعل بداية المعاينة أكثر دقة.</p></article><article><MapPinned size={22}/><h3>في أي مدينة؟</h3><p>يضم الدليل مناطق المملكة ومدناً رئيسية وأحياء شائعة، حتى تصل إلى صفحة محلية أكثر صلة بمكانك.</p></article><article><ShieldCheck size={22}/><h3>بعد المعالجة</h3><p>الوقاية جزء من المسار: ترتيب نقاط حساسة وعادات بسيطة تقلل عوامل الجذب ومسارات الدخول مستقبلاً.</p></article></div></section>
      <section className="service-locations"><div className="container"><div className="section-head compact-head"><div><span className="section-kicker"><i /> تغطية الخدمة</span><h2>الخدمة ضمن<br /><em>دليل وطني.</em></h2></div><p>استكشف منطقتك للوصول إلى المدن والمحافظات والأحياء الشائعة المرتبطة بها.</p></div><div className="location-link-grid protection-list">{coverageRegions.map((region, index) => <Link key={region.slug} href={`/locations/${region.slug}`}><span>0{index + 1}</span>{region.label}<ArrowLeft size={17}/></Link>)}</div></div></section>
    </SiteLayout>
  );
}
