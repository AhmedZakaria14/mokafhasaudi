import { Link } from "wouter";
import {
  ArrowLeft,
  Check,
  ChevronLeft,
  Eye,
  Leaf,
  MapPinned,
  Search,
  ShieldCheck,
} from "lucide-react";
import { Seo } from "@/components/Seo";
import { SiteLayout } from "@/components/SiteLayout";

export default function AboutPage() {
  return (
    <SiteLayout>
      <Seo
        title="عن درع الأثر"
        description="تعرف على منهج درع الأثر في تنظيم خدمات الوقاية ومكافحة الآفات للمنازل والمنشآت في السعودية."
      />

      <section className="page-hero about-hero">
        <div className="page-hero-pattern" aria-hidden="true" />
        <div className="container">
          <nav className="breadcrumb breadcrumb-dark" aria-label="مسار الصفحة">
            <Link href="/">الرئيسية</Link>
            <ChevronLeft size={15} aria-hidden="true" />
            <span aria-current="page">عن درع الأثر</span>
          </nav>

          <div className="page-hero-grid about-hero-grid">
            <div>
              <span className="eyebrow eyebrow-light">
                <ShieldCheck size={17} aria-hidden="true" /> عن العلامة
              </span>
              <h1>
                الحماية الجيدة لا تحتاج إلى ضجيج.
                <span>تحتاج إلى قرار واضح.</span>
              </h1>
              <p>
                درع الأثر إطار خدمي يقدّم مكافحة الآفات كمسار منظم: نفهم المكان
                أولاً، ثم نرتب ما يلائمه من معالجة ووقاية.
              </p>
              <div className="page-hero-actions">
                <Link href="/coverage" className="primary-action hero-primary">
                  استكشف التغطية <ArrowLeft size={18} aria-hidden="true" />
                </Link>
                <a href="#principles" className="secondary-action on-dark">
                  مبادئ العمل <ChevronLeft size={18} aria-hidden="true" />
                </a>
              </div>
            </div>

            <aside className="about-manifesto" aria-label="مبادئ المنهج">
              <div>
                <span>01</span>
                <b>نفهم</b>
                <small>الموقع والمؤشرات</small>
              </div>
              <div>
                <span>02</span>
                <b>نرتب</b>
                <small>المعالجة والأولوية</small>
              </div>
              <div>
                <span>03</span>
                <b>نحمي</b>
                <small>بخطوات متابعة</small>
              </div>
              <ShieldCheck
                className="manifesto-shield"
                size={74}
                aria-hidden="true"
              />
            </aside>
          </div>
        </div>
      </section>

      <section
        className="section principles-section"
        id="principles"
        aria-labelledby="principles-title"
      >
        <div className="container">
          <div className="section-heading compact-heading">
            <div>
              <span className="eyebrow">
                <Eye size={16} aria-hidden="true" /> مبدأ العمل
              </span>
              <h2 id="principles-title">ماذا يعني أن تكون الخطة مناسبة؟</h2>
            </div>
            <p>
              أن تكون مفهومة، متناسبة مع الموقع، وتشمل ما قبل المعالجة وبعدها
              بدلاً من التوقف عند إجراء واحد.
            </p>
          </div>

          <div className="principle-grid">
            <article>
              <span>01</span>
              <Eye size={27} aria-hidden="true" />
              <h3>رؤية أوضح</h3>
              <p>
                نقرأ الموقع، مؤشرات النشاط، ونقاط الوصول قبل ترتيب الخيار
                الملائم.
              </p>
            </article>
            <article>
              <span>02</span>
              <ShieldCheck size={27} aria-hidden="true" />
              <h3>حماية عملية</h3>
              <p>نرتب خطوات المعالجة والوقاية بما يتسق مع استخدام المكان.</p>
            </article>
            <article>
              <span>03</span>
              <Leaf size={27} aria-hidden="true" />
              <h3>لغة هادئة</h3>
              <p>نشرح ما يحتاجه العميل دون تخويف أو وعود غير واقعية.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section method-story" aria-labelledby="story-title">
        <div className="container method-story-grid">
          <div className="method-story-panel">
            <div className="story-panel-head">
              <ShieldCheck size={24} aria-hidden="true" />
              <div>
                <b>قرار وقائي</b>
                <span>مبني على بيانات الموقع</span>
              </div>
            </div>
            <ul>
              <li>
                <Check size={17} aria-hidden="true" /> نوع المكان واستخدامه
              </li>
              <li>
                <Check size={17} aria-hidden="true" /> نقاط النشاط والدخول
              </li>
              <li>
                <Check size={17} aria-hidden="true" /> مستوى التدخل المطلوب
              </li>
              <li>
                <Check size={17} aria-hidden="true" /> خطة الوقاية والمتابعة
              </li>
            </ul>
            <div className="story-route" aria-hidden="true">
              <i />
              <i />
              <i />
            </div>
          </div>

          <div className="method-story-copy">
            <span className="eyebrow eyebrow-light">
              <Search size={16} aria-hidden="true" /> لماذا نبدأ بالمعاينة؟
            </span>
            <h2 id="story-title">لأن الأثر الظاهر ليس دائماً مصدر المشكلة.</h2>
            <p>
              تساعد المعاينة على ربط العلامات بمسارات الدخول ومصادر الرطوبة أو
              الغذاء وطبيعة تشغيل المكان، وبذلك تكون التوصية أكثر ارتباطاً
              بالحالة الفعلية.
            </p>
            <div className="story-stat-row">
              <div>
                <b>13</b>
                <span>منطقة في الدليل</span>
              </div>
              <div>
                <b>6</b>
                <span>مسارات متخصصة</span>
              </div>
              <div>
                <b>3</b>
                <span>مراحل للخدمة</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="container about-cta-inner">
          <div>
            <span className="eyebrow">
              <MapPinned size={16} aria-hidden="true" /> ابدأ محلياً
            </span>
            <h2>اعثر على الصفحة الأقرب لمدينتك.</h2>
          </div>
          <Link href="/coverage" className="primary-action">
            افتح دليل التغطية <ArrowLeft size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
