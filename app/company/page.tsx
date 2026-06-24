import type { Metadata } from "next";
import Link from "next/link";
import EmailCopy from "../../components/EmailCopy";

export const metadata: Metadata = {
  title: "会社概要",
};

export default function CompanyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="page-hero-label">Company</p>
          <h1 className="page-hero-title">会社概要</h1>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="section-label">Philosophy</p>
            <h2 className="section-title">企業理念</h2>
          </div>
          <div className="philosophy-inner">
            <div className="philosophy-card">
              <p className="philosophy-main">心血管エコー検査と専門医の知見を、<br className="pc-only" />すべての医療現場へ届ける。</p>
              <p className="philosophy-sub">透析クリニック様や訪問診療クリニック様が抱える<br className="pc-only" />循環器領域の課題に、専門的な検査と評価で寄り添い、<br className="pc-only" />患者様・クリニック・高次機能病院の三者が<br className="pc-only" />共に良い結果を得られる医療を実現します。</p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPANY INFO TABLE */}
      <section className="section company-info-section">
        <div className="container">
          <div className="section-header">
            <p className="section-label">Information</p>
            <h2 className="section-title">会社情報</h2>
          </div>
          <div className="company-table-wrapper">
            <table className="company-table">
              <tbody>
                <tr><th>会社名</th><td>Medical Echo Consulting合同会社</td></tr>
                <tr><th>代表者</th><td>畠山 翔翼</td></tr>
                <tr><th>設立</th><td>2026年6月</td></tr>
                <tr><th>所在地</th><td>〒107-0061 東京都港区北青山1-3-3 三橋ビル 3階</td></tr>
                <tr><th>事業内容</th><td>超音波検査支援サービス、オンライン専門医コンサルテーションサービス</td></tr>
                <tr><th>メール</th><td><EmailCopy /></td></tr>
              </tbody>
            </table>
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
