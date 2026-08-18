import { ArrowLeft, Home, MapPinned, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { Seo } from "@/components/Seo";
import { SiteLayout } from "@/components/SiteLayout";

export default function NotFound() {
  return (
    <SiteLayout>
      <Seo
        title="الصفحة غير موجودة"
        description="تعذر العثور على الصفحة المطلوبة في موقع درع الأثر."
      />
      <section className="not-found-section">
        <div className="not-found-pattern" aria-hidden="true" />
        <div className="container not-found-card">
          <div className="not-found-code" aria-hidden="true">
            <span>4</span>
            <ShieldCheck size={72} />
            <span>4</span>
          </div>
          <span className="eyebrow">
            <MapPinned size={16} aria-hidden="true" /> المسار غير موجود
          </span>
          <h1>يبدو أن هذه الصفحة غيّرت موقعها.</h1>
          <p>
            يمكنك العودة إلى الصفحة الرئيسية أو الانتقال مباشرة إلى دليل المناطق
            والمدن.
          </p>
          <div className="not-found-actions">
            <Link href="/" className="primary-action">
              <Home size={18} aria-hidden="true" /> الصفحة الرئيسية
            </Link>
            <Link href="/coverage" className="secondary-action">
              دليل التغطية <ArrowLeft size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
