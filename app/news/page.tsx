import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "お知らせ・実績",
};

export default function NewsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="page-hero-label">News &amp; Results</p>
          <h1 className="page-hero-title">お知らせ・実績</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="news-placeholder">
            <div className="news-placeholder-icon">
              <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="8" y="12" width="48" height="40" rx="4" stroke="currentColor" strokeWidth="2"/>
                <path d="M8 22h48" stroke="currentColor" strokeWidth="2"/>
                <path d="M18 32h28M18 40h20M18 48h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h2 className="news-placeholder-title">準備中</h2>
            <p className="news-placeholder-text">お知らせ・実績は現在準備中です。<br />サービス開始後、導入事例やお知らせを順次掲載いたします。</p>
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
