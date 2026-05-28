import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "代表挨拶",
};

export default function GreetingPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="page-hero-label">Greeting</p>
          <h1 className="page-hero-title">代表挨拶</h1>
        </div>
      </section>

      {/* CEO GREETING */}
      <section className="section greeting-section">
        <div className="container">
          <div className="greeting-inner">
            <div className="greeting-text">
              <div className="greeting-role">CEO</div>
              <h3 className="greeting-name">畠山 翔翼<span className="greeting-ruby">（はたけやま つばさ）</span></h3>
              <div className="greeting-body">
                <p>循環器内科医として、岩手県立中央病院や榊原記念病院で、急性期から亜急性期病院での診療に従事してまいりました。</p>
                <p>臨床現場で抱いた問題意識を、自身の専門分野を活かして解決できると考え、主に透析クリニック様・在宅クリニック様へ向けた</p>
                <ul className="greeting-services">
                  <li>心・血管領域 超音波検査支援</li>
                  <li>オンライン専門医相談</li>
                </ul>
                <p>をご提供するサービスの立ち上げに至りました。</p>
                <p>何卒よろしくお願い申し上げます。</p>
              </div>
            </div>
            <div className="greeting-photo">
              <div className="greeting-photo-placeholder">
                <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="40" cy="30" r="14" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 68c0-15.464 12.536-28 28-28s28 12.536 28 28" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <p>代表写真</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUALIFICATIONS */}
      <section className="section qualifications-section">
        <div className="container">
          <div className="qual-grid">
            <div className="qual-card">
              <h4 className="qual-heading">専門分野</h4>
              <p className="qual-content">循環器（特に心エコー検査、MRI/CT検査）</p>
            </div>
            <div className="qual-card">
              <h4 className="qual-heading">資格</h4>
              <ul className="qual-list">
                <li>内科専門医</li>
                <li>循環器専門医</li>
                <li>SHD経食道エコー認定医</li>
                <li>周術期経食道エコー認定医（JB-POT）</li>
                <li>認定産業医</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta">
        <div className="container">
          <div className="cta-inner">
            <h2 className="cta-title">まずはお気軽にご相談ください</h2>
            <p className="cta-desc">超音波検査支援・専門医コンサルテーションに関するご質問・ご相談を承ります。</p>
            <Link href="/contact" className="btn btn-white">お問い合わせはこちら</Link>
          </div>
        </div>
      </section>
    </>
  );
}
