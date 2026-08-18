/** Design reminder — Desert Shield Calm: coverage is a navigable editorial directory, not a dense spreadsheet. */
import { Link } from "wouter";
import { ArrowLeft, MapPinned, Search } from "lucide-react";
import { Seo } from "@/components/Seo";
import { SiteLayout } from "@/components/SiteLayout";
import { cityCatalog, coverageRegions } from "@/data/siteData";

export default function CoveragePage() {
  return (
    <SiteLayout>
      <Seo title="دليل تغطية مكافحة الحشرات في السعودية" description="استكشف صفحات مكافحة الحشرات حسب مناطق ومدن ومحافظات السعودية، ثم تعرف على الأحياء الشائعة ومسارات الخدمة المتخصصة." />
      <section className="directory-hero"><div className="container"><span className="section-kicker light-kicker"><i /> من 13 منطقة إدارية</span><h1>دليل التغطية<br /><em>في مدن السعودية.</em></h1><p>اختر منطقتك للاطلاع على المدن والمحافظات، أو انتقل مباشرة إلى صفحة محلية لواحدة من المدن الرئيسية.</p><div className="directory-search-hint"><Search size={18}/><span>ابدأ باسم منطقتك، مدينتك، أو أقرب محافظة إلى موقعك.</span></div></div></section>
      <section className="directory-main"><div className="container"><div className="directory-heading"><div><span className="section-kicker"><i /> المناطق</span><h2>كل منطقة تفتح<br /><em>مساراً محلياً.</em></h2></div><p>تُعرض المدن والمحافظات الشائعة في كل صفحة ليكون التنقل واضحاً، فيما يتم تحديد موعد الخدمة ونطاقها الدقيق وفق موقع العميل.</p></div><div className="region-directory-grid">{coverageRegions.map((region, index) => <Link href={`/locations/${region.slug}`} key={region.slug} className={`region-directory-card ${index === 0 ? "region-directory-featured" : ""}`}><span>0{index + 1}</span><MapPinned size={21}/><h3>{region.label}</h3><p>{region.cities.slice(0, index === 0 ? 8 : 5).join(" · ")}</p>{index === 0 && <div className="featured-route"><i /><i /><i /><b>منطقة الانطلاق</b></div>}<b>استعراض المدن <ArrowLeft size={16}/></b></Link>)}</div></div></section>
      <section className="city-directory"><div className="container"><div className="section-head compact-head"><div><span className="section-kicker"><i /> صفحات مدن</span><h2>ابحث باسم<br /><em>مدينتك مباشرة.</em></h2></div><p>صفحات محلية بأحياء شائعة وأقسام خدمات مرتبطة باحتياج المنازل والمنشآت.</p></div><div className="city-directory-links">{cityCatalog.map((city) => <Link href={`/locations/${city.slug}`} key={city.slug}><span>{city.city}</span><small>{city.region}</small><ArrowLeft size={17}/></Link>)}</div></div></section>
    </SiteLayout>
  );
}
