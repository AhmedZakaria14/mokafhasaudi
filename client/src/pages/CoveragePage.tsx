import { useMemo, useState } from "react";
import { Link } from "wouter";
import {
  ArrowLeft,
  ChevronLeft,
  MapPinned,
  Search,
  ShieldCheck,
} from "lucide-react";
import { Seo } from "@/components/Seo";
import { SiteLayout } from "@/components/SiteLayout";
import { cityCatalog, coverageRegions } from "@/data/siteData";

const normalize = (value: string) =>
  value
    .trim()
    .toLocaleLowerCase("ar")
    .replace(/[أإآ]/g, "ا")
    .replace(/ة/g, "ه");

export default function CoveragePage() {
  const [query, setQuery] = useState("");
  const normalizedQuery = normalize(query);

  const filteredRegions = useMemo(
    () =>
      coverageRegions.filter(region =>
        normalize(
          [region.label, region.capital, ...region.cities].join(" ")
        ).includes(normalizedQuery)
      ),
    [normalizedQuery]
  );

  const filteredCities = useMemo(
    () =>
      cityCatalog.filter(city =>
        normalize(
          [city.label, city.city, city.region, ...city.neighborhoods].join(" ")
        ).includes(normalizedQuery)
      ),
    [normalizedQuery]
  );

  return (
    <SiteLayout>
      <Seo
        title="دليل تغطية مكافحة الحشرات في السعودية"
        description="استكشف صفحات مكافحة الحشرات حسب مناطق ومدن ومحافظات السعودية، ثم تعرف على الأحياء الشائعة ومسارات الخدمة المتخصصة."
      />

      <section className="page-hero directory-hero">
        <div className="page-hero-pattern" aria-hidden="true" />
        <div className="container">
          <nav className="breadcrumb breadcrumb-dark" aria-label="مسار الصفحة">
            <Link href="/">الرئيسية</Link>
            <ChevronLeft size={15} aria-hidden="true" />
            <span aria-current="page">دليل التغطية</span>
          </nav>
          <div className="directory-hero-grid">
            <div>
              <span className="eyebrow eyebrow-light">
                <MapPinned size={17} aria-hidden="true" /> 13 منطقة إدارية
              </span>
              <h1>دليل تغطية يصل بك إلى مدينتك.</h1>
              <p>
                ابحث باسم المنطقة أو المدينة أو الحي، ثم انتقل إلى الصفحة
                المحلية الأقرب لموقعك.
              </p>
            </div>

            <label className="coverage-search">
              <span>ابحث في دليل التغطية</span>
              <div>
                <Search size={21} aria-hidden="true" />
                <input
                  type="search"
                  value={query}
                  onChange={event => setQuery(event.target.value)}
                  placeholder="مثال: الرياض، جدة، الدمام..."
                  autoComplete="off"
                />
              </div>
              <small>
                يمكنك البحث باسم المنطقة، المدينة أو أحد الأحياء الشائعة.
              </small>
            </label>
          </div>
        </div>
      </section>

      <section
        className="section directory-main"
        aria-labelledby="regions-title"
      >
        <div className="container">
          <div className="section-heading compact-heading">
            <div>
              <span className="eyebrow">
                <MapPinned size={16} aria-hidden="true" /> المناطق
              </span>
              <h2 id="regions-title">كل منطقة تفتح مساراً محلياً أوضح.</h2>
            </div>
            <p>
              {normalizedQuery
                ? `نتائج البحث عن «${query.trim()}»`
                : "اختر منطقتك لاستعراض المدن والمحافظات الشائعة داخل نطاقها."}
            </p>
          </div>

          {filteredRegions.length > 0 ? (
            <div className="region-directory-grid">
              {filteredRegions.map((region, index) => (
                <Link
                  href={`/locations/${region.slug}`}
                  key={region.slug}
                  className={`region-directory-card ${region.slug === "riyadh" ? "region-directory-featured" : ""}`}
                >
                  <div className="region-card-head">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <MapPinned size={21} aria-hidden="true" />
                  </div>
                  <h3>{region.label}</h3>
                  <p>{region.intro}</p>
                  <div className="region-city-preview">
                    {region.cities.slice(0, 4).map(city => (
                      <span key={city}>{city}</span>
                    ))}
                  </div>
                  <b>
                    استعراض المنطقة <ArrowLeft size={17} aria-hidden="true" />
                  </b>
                </Link>
              ))}
            </div>
          ) : (
            <div className="directory-empty" role="status">
              <Search size={28} aria-hidden="true" />
              <h3>لم نجد منطقة مطابقة</h3>
              <p>جرّب كتابة اسم المدينة أو الحي بصيغة أقصر.</p>
              <button type="button" onClick={() => setQuery("")}>
                مسح البحث
              </button>
            </div>
          )}
        </div>
      </section>

      <section
        className="section city-directory"
        aria-labelledby="cities-title"
      >
        <div className="container">
          <div className="section-heading compact-heading">
            <div>
              <span className="eyebrow">
                <ShieldCheck size={16} aria-hidden="true" /> صفحات المدن
              </span>
              <h2 id="cities-title">انتقل مباشرة إلى المدن الرئيسية.</h2>
            </div>
            <p>
              صفحات محلية تعرض أحياء شائعة وخدمات مرتبطة باحتياج المنازل
              والمنشآت.
            </p>
          </div>

          {filteredCities.length > 0 ? (
            <div className="city-directory-links">
              {filteredCities.map(city => (
                <Link href={`/locations/${city.slug}`} key={city.slug}>
                  <span className="city-pin">
                    <MapPinned size={19} aria-hidden="true" />
                  </span>
                  <div>
                    <b>{city.city}</b>
                    <small>{city.region}</small>
                  </div>
                  <ArrowLeft size={18} aria-hidden="true" />
                </Link>
              ))}
            </div>
          ) : (
            normalizedQuery && (
              <p className="city-no-results">
                لا توجد صفحة مدينة مستقلة مطابقة، راجع نتائج المناطق أعلاه.
              </p>
            )
          )}
        </div>
      </section>
    </SiteLayout>
  );
}
