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
          <p className="page-hero-catch">検査技師の派遣から循環器専門医の読影まで、<br className="pc-only" />専門チームがまとめて支援。<br />自院での雇用・育成は不要です。</p>
        </div>
      </section>

      {/* SERVICE OVERVIEW */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="section-label">Overview</p>
            <h2 className="section-title">循環器エコー検査の「撮影」と「解釈」、<br className="pc-only" />まとめて支援します</h2>
          </div>
          <div className="svc-intro">
            <p>透析・在宅医療の現場では、<br className="pc-only" />心臓・血管の評価が欠かせません。<br />一方で心血管エコーには、二つのハードルがあります。</p>
            <div className="svc-hurdles">
              <div className="svc-hurdle">
                <div className="svc-hurdle-num">1</div>
                <p>質の高い撮影に<strong>技術を要する</strong></p>
              </div>
              <div className="svc-hurdle">
                <div className="svc-hurdle-num">2</div>
                <p>臨床に活かすための<strong>読影・解釈が難しい</strong></p>
              </div>
            </div>
            <p className="svc-intro-emphasis">Medical Echo Consulting（MEC）は、<br className="pc-only" />この<strong>撮影と解釈の両方</strong>を、<br />検査技師と循環器専門医がチームで<br className="pc-only" />まとめて支援します。</p>
          </div>
        </div>
      </section>

      {/* SERVICE FLOW */}
      <section className="section svc-flow-section">
        <div className="container">
          <div className="section-header">
            <p className="section-label">Flow</p>
            <h2 className="section-title">サービスの流れ</h2>
          </div>
          <div className="svc-flow">
            <div className="svc-flow-step">
              <div className="svc-flow-num">1</div>
              <div className="svc-flow-content">
                <h4>ご依頼受付</h4>
                <p>件数・日程のご相談</p>
              </div>
            </div>
            <div className="svc-flow-arrow">
              <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <div className="svc-flow-step">
              <div className="svc-flow-num">2</div>
              <div className="svc-flow-content">
                <h4>検査技師による撮影</h4>
                <p>現地へ訪問し検査を実施</p>
              </div>
            </div>
            <div className="svc-flow-arrow">
              <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <div className="svc-flow-step">
              <div className="svc-flow-num">3</div>
              <div className="svc-flow-content">
                <h4>専門医による読影・レポート作成</h4>
                <p>循環器専門医が遠隔で読影</p>
              </div>
            </div>
            <div className="svc-flow-arrow">
              <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <div className="svc-flow-step">
              <div className="svc-flow-num">4</div>
              <div className="svc-flow-content">
                <h4>臨床的コメント・ご相談対応</h4>
                <p>レポートへのコメント／オンライン相談</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TARGET EXAMS */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="section-label">Examinations</p>
            <h2 className="section-title">対象検査</h2>
          </div>
          <div className="exam-grid">
            <div className="exam-card">
              <div className="exam-card-icon exam-card-icon-heart">
                <span>&#9829;</span>
              </div>
              <h3 className="exam-card-title">心エコー</h3>
              <p className="exam-card-target">心筋症、弁膜症</p>
            </div>
            <div className="exam-card">
              <div className="exam-card-icon">
                <svg viewBox="0 0 56 56" fill="none"><ellipse cx="28" cy="14" rx="10" ry="12" stroke="currentColor" strokeWidth="1.5"/><path d="M22 24c-2 3-4 8-4 14v6h20v-6c0-6-2-11-4-14" stroke="currentColor" strokeWidth="1.5"/><path d="M24 18v16M32 18v16" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="2 3"/><path d="M18 34h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </div>
              <h3 className="exam-card-title">頸動脈エコー</h3>
              <p className="exam-card-target">頸動脈狭窄症</p>
            </div>
            <div className="exam-card">
              <div className="exam-card-icon">
                <svg viewBox="0 0 56 56" fill="none"><path d="M24 6v10c0 2-1 4-3 6l-3 4c-1.5 2-2 4-2 6v14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M32 6v10c0 2 1 4 3 6l3 4c1.5 2 2 4 2 6v14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M16 46h10M30 46h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M20 32h16" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="2 3"/><ellipse cx="28" cy="42" rx="6" ry="2" stroke="currentColor" strokeWidth="1.2"/></svg>
              </div>
              <h3 className="exam-card-title">下肢動脈エコー</h3>
              <p className="exam-card-target">閉塞性動脈硬化症</p>
            </div>
            <div className="exam-card">
              <div className="exam-card-icon">
                <svg viewBox="0 0 56 56" fill="none"><path d="M28 6v44" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M28 12c4 2 6 6 6 10s-6 8-6 12" stroke="currentColor" strokeWidth="1.5"/><path d="M28 12c-4 2-6 6-6 10s6 8 6 12" stroke="currentColor" strokeWidth="1.5"/><circle cx="28" cy="10" r="2.5" fill="currentColor"/><circle cx="34" cy="22" r="2" fill="currentColor" opacity="0.5"/><circle cx="22" cy="22" r="2" fill="currentColor" opacity="0.5"/><path d="M20 44h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </div>
              <h3 className="exam-card-title">下肢静脈エコー</h3>
              <p className="exam-card-target">深部静脈血栓症</p>
            </div>
          </div>
        </div>
      </section>

      {/* MERIT */}
      <section className="section svc-merit-section">
        <div className="container">
          <div className="section-header">
            <p className="section-label">Merit</p>
            <h2 className="section-title">導入のメリット</h2>
          </div>
          <div className="merit-grid">
            <div className="merit-card">
              <div className="merit-card-badge">01</div>
              <h3 className="merit-card-title">ワンストップ</h3>
              <p>検査の手配からレポート、専門医コメントまで、一連の流れをまとめてご依頼いただけます。</p>
            </div>
            <div className="merit-card">
              <div className="merit-card-badge">02</div>
              <h3 className="merit-card-title">雇用・育成の負担を抑制</h3>
              <p>自院で検査技師や循環器専門医を直接雇用・育成する必要がありません。必要な検査を、必要なときに、必要な分だけご利用いただけます。</p>
            </div>
            <div className="merit-card">
              <div className="merit-card-badge">03</div>
              <h3 className="merit-card-title">循環器専門医が読影に関与</h3>
              <p>心血管領域の読影・レポート作成を専門医が担当します。</p>
            </div>
          </div>
        </div>
      </section>

      {/* NOTICE */}
      <section className="section">
        <div className="container">
          <div className="svc-notice">
            <div className="svc-notice-icon">
              <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/><path d="M12 8v5M12 16h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </div>
            <div className="svc-notice-content">
              <h4>ご留意事項</h4>
              <p>本サービスは、主治医の診療を補助する検査支援サービスです。<br className="pc-only" />診察・診断を行うものではなく、最終的な診断および治療方針の決定は主治医が行います。</p>
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
