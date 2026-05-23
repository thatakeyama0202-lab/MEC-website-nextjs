import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "事業概要",
};

export default function ServicePage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="page-hero-label">Service &amp; Business</p>
          <h1 className="page-hero-title">事業概要</h1>
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
            <p>透析クリニック様および在宅診療クリニック様向けに、<strong>超音波検査の支援サービス</strong>、<strong>オンライン専門医コンサルテーションサービス</strong>を提供いたします。</p>
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
                <svg viewBox="0 0 48 48" fill="none"><path d="M8 12a4 4 0 014-4h24a4 4 0 014 4v18a4 4 0 01-4 4H20l-8 6V34a4 4 0 01-4-4V12z" stroke="currentColor" strokeWidth="1.5"/><path d="M16 18h16M16 24h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </div>
              <h3>オンライン相談</h3>
              <p>クリニックDr⇄専門医で臨床的疑問等を相談できるプラットフォームを付帯。循環器内科の他、精神科・脳神経内科・産婦人科にも対応。</p>
            </div>
          </div>
        </div>
      </section>

      {/* BACKGROUND */}
      <section className="section story-section">
        <div className="container">
          <div className="section-header">
            <p className="section-label">Background</p>
            <h2 className="section-title">事業立ち上げの経緯</h2>
          </div>

          <div className="story-block">
            <div className="story-number">01</div>
            <div className="story-content">
              <h3 className="story-heading">現場で見た課題</h3>
              <p>急性期病院での勤務を通じて、透析患者様や在宅クリニックからの重症心血管疾患患者様が多数搬送されてくる現状を認識いたしました。</p>
              <p>特に透析患者様においては、弁膜症や狭心症に起因する心不全、下肢動脈閉塞症などが重症化した場合、治療に難渋する事例が多々見受けられます。その結果、治療不成功や合併症、入院期間の長期化などによりADLが低下し、廃用症候群による退院困難といった事例が頻発しております。</p>
              <div className="story-impact">
                <h4>三者にとって不幸な転帰</h4>
                <div className="impact-grid">
                  <div className="impact-item">
                    <div className="impact-label">患者様</div>
                    <p>QOLの低下</p>
                  </div>
                  <div className="impact-item">
                    <div className="impact-label">クリニック</div>
                    <p>患者様の通院終了、ご家族様や搬送先病院との関係悪化</p>
                  </div>
                  <div className="impact-item">
                    <div className="impact-label">高次機能病院</div>
                    <p>医療リソースの不足、入院期間長期化に伴う赤字</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="story-block">
            <div className="story-number">02</div>
            <div className="story-content">
              <h3 className="story-heading">なぜこのようなことになるのか？</h3>
              <p className="story-answer">ハイリスク患者に対する適切な評価・介入がなされていないことが主たる原因の一つ。</p>
              <div className="cause-list">
                <div className="cause-item">
                  <span className="cause-marker"></span>
                  <p>評価の大部分をカバーできるエコー検査ができていない</p>
                </div>
                <div className="cause-item">
                  <span className="cause-marker"></span>
                  <p>専門医へ気軽に相談できる場がない（専門病院紹介は実は敷居が高い）</p>
                </div>
              </div>
            </div>
          </div>

          <div className="story-block">
            <div className="story-number">03</div>
            <div className="story-content">
              <h3 className="story-heading">心血管エコー検査の&ldquo;壁&rdquo;</h3>
              <p>心臓・血管領域のエコー検査、特に心エコー検査は、測定項目が多岐にわたり、結果の評価も複雑です。</p>
              <p>現状、超音波検査を専門技師が代行するサービスは複数存在しますが、結果に基づき臨床にどのように活用すべきか——という評価までは十分に実施されていないのが現状です。</p>
              <p>非専門医の先生方が、循環器の専門的な知識を一から学び直すのは困難です。そのため、循環器専門ではない透析クリニック様や訪問診療クリニック様においては、心血管エコー検査が敬遠されがちです。</p>
            </div>
          </div>

          <div className="story-block">
            <div className="story-number">04</div>
            <div className="story-content">
              <h3 className="story-heading">エコーの強みと解決への道筋</h3>
              <div className="strength-box">
                <p><strong>エコーの強み：</strong>機械、撮影できる人、評価できる人がいれば、場所を選ばず質の高いサービスが提供可能。</p>
              </div>
              <p>直接エコー機材を持ち込み、専門技師が撮影し、専門的な評価＋相談をできる場を設けることで、&ldquo;三方一両損&rdquo;の問題を解決できるのではないか——。</p>
              <div className="solution-impact">
                <h4>MECがもたらす好循環</h4>
                <div className="impact-grid positive">
                  <div className="impact-item">
                    <div className="impact-label">患者様</div>
                    <p>重篤化する前に介入、安定した治療につながる</p>
                  </div>
                  <div className="impact-item">
                    <div className="impact-label">クリニック</div>
                    <p>患者様の安定した通院継続、専門機関へ安定した紹介</p>
                  </div>
                  <div className="impact-item">
                    <div className="impact-label">高次機能病院</div>
                    <p>安定した病態で治療戦略（入念な術前検査）→ 良好な治療成績</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="story-block">
            <div className="story-number">05</div>
            <div className="story-content">
              <h3 className="story-heading">最適なエコーデバイスの探索</h3>
              <p>最適なエコーデバイスを探索しました。その条件は、<strong>可能な限りコンパクト</strong>であり、<strong>必要十分な心機能評価が実施できる</strong>機器であることでした。</p>
              <div className="device-comparison">
                <div className="device-card problem">
                  <h4>従来のポータブル機の課題</h4>
                  <p>コンパクトさゆえにCW機能（Continuous Wave Doppler）やTDI機能が搭載されておらず、弁膜症や心不全の評価を十分に実施できない点にありました。</p>
                </div>
                <div className="device-arrow">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M12 4v16m0 0l6-6m-6 6l-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                </div>
                <div className="device-card solution">
                  <h4>Kosmos Plus による解決</h4>
                  <p>KosmosPlusは、従来のポータブル機が抱えていたCW機能に関する課題を解決し、特に大動脈弁狭窄症や肺高血圧（体液バランス評価に利用）の評価を可能にしました。これにより、一通りの心機能評価が実現可能となりました。</p>
                </div>
              </div>
            </div>
          </div>

          <div className="story-block summary-block">
            <div className="story-content">
              <div className="story-summary">
                <p>透析クリニック様や在宅診療においては、循環器疾患を抱える患者様が一定数存在し、専門的な評価体制が不十分であるため、重症化してから救急搬送となるケースが少なくありません。これは患者様の不利益だけでなく、高次機能病院にも大きな負担をもたらしています。</p>
                <p>心血管エコー検査は、循環器領域における診断・治療方針決定に不可欠であり、適切な機器と専門知識を有する人材があれば場所を問わず実施可能です。</p>
                <p><strong>本サービスは、リスクを抱える患者様に対し早期に心エコーを実施し、専門医の見解を主治医にフィードバックすることにより、適切な治療介入と安定した紹介を実現いたします。</strong></p>
              </div>
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
                <p>専門スタッフが現地へ赴き、超音波検査業務全般を実施いたします。</p>
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
                <p>クリニック様の手出しのないよう、<br />最大限調整をいたします</p>
              </div>
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
