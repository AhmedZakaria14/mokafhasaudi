/** Design reminder — Desert Shield Calm: speak with precise reassurance; use earned confidence, no inflated promises. */
import { ArrowLeft, Eye, Leaf, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { Seo } from "@/components/Seo";
import { SiteLayout } from "@/components/SiteLayout";
import { brand } from "@/data/siteData";

export default function AboutPage() {
  return (
    <SiteLayout>
      <Seo title="عن درع الأثر" description="تعرف على منهج درع الأثر في تنظيم خدمات الوقاية ومكافحة الآفات للمنازل والمنشآت في السعودية." />
      <section className="about-hero"><div className="container about-hero-grid"><div><span className="section-kicker light-kicker"><i /> عن العلامة</span><h1>الحماية لا تحتاج<br /><em>إلى ضجيج.</em></h1><p>درع الأثر هو إطار خدمي يقدّم مكافحة الآفات كقرار منظم: نفهم المكان أولاً، ثم نرتب ما يلائمه من معالجة ووقاية.</p><Link href="/coverage" className="primary-action">استكشف التغطية المحلية <ArrowLeft size={18}/></Link></div><div className="about-image"><img src={brand.commercial} alt="فني يجري فحصاً وقائياً داخل منشأة ضيافة حديثة"/></div></div></section>
      <section className="principles"><div className="container"><div className="section-head compact-head"><div><span className="section-kicker"><i /> مبدأ العمل</span><h2>ماذا يعني أن تكون<br /><em>الخطة مناسبة؟</em></h2></div><p>يعني أن تكون مفهومة، متناسبة مع الموقع، وأن تشمل ما قبل المعالجة وبعدها بدلاً من أن تتوقف عند إجراء واحد.</p></div><div className="principle-grid"><article><Eye size={24}/><h3>رؤية أوضح</h3><p>نقرأ الموقع، مؤشرات النشاط، ونقاط الوصول قبل ترتيب الخيار الملائم.</p></article><article><ShieldCheck size={24}/><h3>حماية عملية</h3><p>نرتب خطوات المعالجة والوقاية بما يتسق مع استخدام المكان.</p></article><article><Leaf size={24}/><h3>لغة هادئة</h3><p>نشرح ما يحتاجه العميل دون تخويف أو وعود غير واقعية.</p></article></div></div></section>
    </SiteLayout>
  );
}
