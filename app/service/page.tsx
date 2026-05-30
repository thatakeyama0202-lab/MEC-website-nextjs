import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "超音波検査支援サービス",
};

export default function ServicePage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="page-hero-label">Ultrasound Support Service</p>
          <h1 className="page-hero-title">超音波検査支援サービス</h1>
        </div>
      </section>

      {/* SERVICE OVERVIEW */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="section-label">Overview</p>
            <h2 className="section-title">サービス概要</h2>
          </div>
          <div className="overview-intro">
            <p>透析クリニック様・在宅診療クリニック様を対象に、心エコー・血管エコーの撮影から、循環器専門医（日本循環器学会認定）による読影・臨床的助言まで、超音波検査業務を包括的に支援いたします。</p>
          </div>
          <div className="overview-cards">
            <div className="overview-card">
              <div className="overview-card-icon">
                <svg viewBox="0 0 48 48" fill="none"><path d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4z" stroke="currentColor" strokeWidth="1.5"/><path d="M18 24c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="currentColor" strokeWidth="1.5"/><path d="M14 24c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="currentColor" strokeWidth="1.5"/><circle cx="24" cy="24" r="2" fill="currentColor"/></svg>
              </div>
              <h3>エコー検査の実施</h3>
              <p>クリニック様へエコーを持参し、超音波検査を行います。</p>
            </div>
            <div className="overview-card">
              <div className="overview-card-icon">
                <svg viewBox="0 0 48 48" fill="none"><rect x="6" y="8" width="36" height="32" rx="3" stroke="currentColor" strokeWidth="1.5"/><path d="M6 16h36" stroke="currentColor" strokeWidth="1.5"/><path d="M16 24h16M16 30h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </div>
              <h3>専門医レポートの納品</h3>
              <p>結果をレポートへまとめ、専門医のコメント付きで画像とともにお返しします。</p>
            </div>
            <div className="overview-card">
              <div className="overview-card-icon">
                <svg viewBox="0 0 48 48" fill="none"><path d="M12 8h24a4 4 0 014 4v20a4 4 0 01-4 4H12a4 4 0 01-4-4V12a4 4 0 014-4z" stroke="currentColor" strokeWidth="1.5"/><path d="M16 20h16M16 26h10M16 32h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M32 14l4-4M32 14h4M32 14v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </div>
              <h3>臨床的アドバイス</h3>
              <p>検査結果を臨床判断にどう活かすかという評価・助言まで一貫して提供します。</p>
            </div>
          </div>
        </div>
      </section>

      {/* OPERATION */}
      <section className="section operation-section">
        <div className="container">
          <div className="section-header">
            <p className="section-label">Operation</p>
            <h2 className="section-title">具体的な運用</h2>
          </div>
          <div className="operation-flow">
            <div className="op-step">
              <div className="op-step-num">1</div>
              <div className="op-step-content">
                <h4>ヒアリング</h4>
                <p>当社よりクリニック様へヒアリングを実施し、業務内容の詳細確認を行います（業務委託契約）。</p>
              </div>
            </div>
            <div className="op-step">
              <div className="op-step-num">2</div>
              <div className="op-step-content">
                <h4>検査実施</h4>
                <p>超音波検査の経験を有する臨床検査技師が現地へ赴き、検査業務全般を実施いたします。</p>
              </div>
            </div>
            <div className="op-step">
              <div className="op-step-num">3</div>
              <div className="op-step-content">
                <h4>レポート作成・アドバイス</h4>
                <p>撮影した画像・動画を基にレポートを作成し、超音波検査を専門とする循環器内科医師が臨床的アドバイスを行います。</p>
              </div>
            </div>
            <div className="op-step">
              <div className="op-step-num">4</div>
              <div className="op-step-content">
                <h4>レポート納品</h4>
                <p>レポートは撮影から<strong>3〜5日以内</strong>にPDF形式にて送付いたします。</p>
              </div>
            </div>
          </div>
          <div className="operation-example">
            <p>例）超音波検査撮影、画像解析、レポート作成、その他超音波検査に関連する業務全般の支援をいたします。</p>
          </div>
        </div>
      </section>

      {/* DETAILS */}
      <section className="section details-section">
        <div className="container">
          <div className="details-grid">
            <div className="detail-card">
              <h3 className="detail-heading">対象検査</h3>
              <ul className="detail-list">
                <li>心エコー</li>
                <li>頸動脈エコー</li>
                <li>下肢動脈エコー</li>
                <li>下肢静脈エコー</li>
              </ul>
              <p className="detail-note">（今後拡充予定）</p>
            </div>
            <div className="detail-card">
              <h3 className="detail-heading">契約形態</h3>
              <p className="detail-value">業務請負契約</p>
              <p className="detail-sub">自前の検査機器をお持ちでない場合でも、当社より持参いたします。</p>
            </div>
            <div className="detail-card">
              <h3 className="detail-heading">料金</h3>
              <p className="detail-value">ご相談</p>
              <p className="detail-sub">1作業あたりの料金を、オーダー件数・作業時間で都度お見積りをお出しいたします。</p>
              <div className="detail-highlight">
                <p>ご契約内容やオーダー件数によっては、クリニック様のご負担を抑えられるよう料金設計をご相談させていただきます。実際のご負担額は、件数・作業時間等の条件に応じて個別にお見積りいたします。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OTHER SERVICE */}
      <section className="section">
        <div className="container">
          <div className="other-service-banner">
            <div className="other-service-content">
              <p className="other-service-label">Another Service</p>
              <h3 className="other-service-title">オンライン専門医コンサルテーションサービス</h3>
              <p className="other-service-desc">循環器内科をはじめ、精神科・脳神経内科・産婦人科の専門医に、日々の臨床上の疑問をオンラインで相談できるサービスです。</p>
              <Link href="/consultation" className="btn btn-white">詳細を見る</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta">
        <div className="container">
          <div className="cta-inner">
            <h2 className="cta-title">サービスについてのご質問はお気軽に</h2>
            <p className="cta-desc">検査内容・対応エリア・料金など、お気軽にお問い合わせください。</p>
            <Link href="/contact" className="btn btn-white">お問い合わせはこちら</Link>
          </div>
        </div>
      </section>
    </>
  );
}
