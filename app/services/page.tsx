import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "サービス詳細",
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="page-hero-label">Services</p>
          <h1 className="page-hero-title">サービス詳細</h1>
          <p className="page-hero-catch">MECが提供する2つのサービスを<br className="pc-only" />ご紹介いたします。</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-select">
            <Link href="/service" className="service-select-card">
              <div className="service-select-icon">
                <svg viewBox="0 0 56 56" fill="none"><path d="M28 4C16.954 4 8 12.954 8 24s8.954 20 20 20 20-8.954 20-20S39.046 4 28 4z" stroke="currentColor" strokeWidth="1.5"/><path d="M22 24c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="currentColor" strokeWidth="1.5"/><path d="M18 24c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="currentColor" strokeWidth="1.5"/><circle cx="28" cy="24" r="2" fill="currentColor"/></svg>
              </div>
              <div className="service-select-content">
                <p className="service-select-label">Ultrasound Support</p>
                <h2 className="service-select-title">超音波検査支援サービス</h2>
                <p className="service-select-desc">検査技師の派遣から循環器専門医の読影まで、<br className="pc-only" />専門チームがまとめて支援。<br className="pc-only" />心エコー・頸動脈エコー・下肢動脈/静脈エコーに対応。</p>
                <span className="service-select-btn">詳細を見る →</span>
              </div>
            </Link>

            <Link href="/consultation" className="service-select-card">
              <div className="service-select-icon">
                <svg viewBox="0 0 56 56" fill="none"><path d="M12 16a4 4 0 014-4h24a4 4 0 014 4v18a4 4 0 01-4 4H24l-8 6V38a4 4 0 01-4-4V16z" stroke="currentColor" strokeWidth="1.5"/><path d="M20 22h16M20 28h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </div>
              <div className="service-select-content">
                <p className="service-select-label">Online Consultation</p>
                <h2 className="service-select-title">オンライン専門医<br className="sp-only" />コンサルテーション</h2>
                <p className="service-select-desc">循環器内科・精神科・脳神経内科・産婦人科の専門医に、<br className="pc-only" />チャット形式で気軽に相談。<br className="pc-only" />365日・相談回数無制限でご利用いただけます。</p>
                <span className="service-select-btn">詳細を見る →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta">
        <div className="container">
          <div className="cta-inner">
            <h2 className="cta-title">サービスについてのご質問はお気軽に</h2>
            <p className="cta-desc">検査内容・対応科目・料金など、<br className="pc-only" />お気軽にお問い合わせください。</p>
            <Link href="/contact" className="btn btn-white">お問い合わせはこちら</Link>
          </div>
        </div>
      </section>
    </>
  );
}
