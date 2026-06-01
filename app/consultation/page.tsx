import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "オンライン専門医コンサルテーション",
};

export default function ConsultationPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="page-hero-label">Online Consultation</p>
          <h1 className="page-hero-title">オンライン専門医<br className="sp-only" />コンサルテーション</h1>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="section-label">Overview</p>
            <h2 className="section-title">サービス概要</h2>
          </div>
          <div className="overview-intro">
            <p>日々の診療で生じる臨床上の疑問——<br className="pc-only" />投薬調整、検査結果の解釈、紹介のタイミングなど——を、<br className="pc-only" />チャット形式で専門医に気軽に相談できるサービスです。</p>
          </div>

          <div className="consult-unlimited">
            <div className="consult-unlimited-item">
              <span className="consult-unlimited-number">365</span>
              <span className="consult-unlimited-unit">日</span>
              <p>いつでも相談可能</p>
            </div>
            <div className="consult-unlimited-divider"></div>
            <div className="consult-unlimited-item">
              <span className="consult-unlimited-number">無制限</span>
              <p>相談回数の上限なし</p>
            </div>
            <div className="consult-unlimited-divider"></div>
            <div className="consult-unlimited-item">
              <span className="consult-unlimited-number">全員、専門医</span>
              <p>相談を受ける医師は全員、<br />厚生労働省認定の専門医です。</p>
            </div>
          </div>

          <div className="consult-features">
            <div className="consult-feature-card">
              <div className="consult-feature-icon">
                <svg viewBox="0 0 48 48" fill="none"><path d="M8 12a4 4 0 014-4h24a4 4 0 014 4v18a4 4 0 01-4 4H20l-8 6V34a4 4 0 01-4-4V12z" stroke="currentColor" strokeWidth="1.5"/><path d="M16 18h16M16 24h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </div>
              <h3>チャットで気軽に</h3>
              <p>テキストベースで、空いた時間にいつでも相談・回答が可能です。</p>
            </div>
            <div className="consult-feature-card">
              <div className="consult-feature-icon">
                <svg viewBox="0 0 48 48" fill="none"><circle cx="24" cy="16" r="8" stroke="currentColor" strokeWidth="1.5"/><path d="M8 40c0-8.837 7.163-16 16-16s16 7.163 16 16" stroke="currentColor" strokeWidth="1.5"/><path d="M30 14l4-4M30 14h4M30 14v-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </div>
              <h3>複数の専門科に対応</h3>
              <p>循環器内科の他、精神科・脳神経内科・産婦人科の専門医にも相談可能です。</p>
            </div>
            <div className="consult-feature-card">
              <div className="consult-feature-icon">
                <svg viewBox="0 0 48 48" fill="none"><rect x="12" y="4" width="24" height="40" rx="4" stroke="currentColor" strokeWidth="1.5"/><path d="M20 8h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><circle cx="24" cy="38" r="2" stroke="currentColor" strokeWidth="1.5"/></svg>
              </div>
              <h3>専門病院紹介不要</h3>
              <p>患者様を紹介する手間なく、先生方のお手元で専門的な見解を得られます。</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONSULTATION EXAMPLE */}
      <section className="section consult-example-section">
        <div className="container">
          <div className="section-header">
            <p className="section-label">Example</p>
            <h2 className="section-title">相談事例イメージ</h2>
          </div>
          <p className="consult-example-note">※ 以下は相談の流れを示すイメージです。実際の症例とは異なります。</p>

          <div className="chat-device">
            <div className="chat-device-frame">
              {/* Phone Status Bar */}
              <div className="chat-status-bar">
                <span className="chat-time">10:30</span>
                <div className="chat-status-icons">
                  <svg viewBox="0 0 16 12" fill="currentColor" width="16"><path d="M1 8h2v4H1zM5 5h2v7H5zM9 2h2v10H9zM13 0h2v12h-2z"/></svg>
                  <svg viewBox="0 0 18 12" fill="currentColor" width="18"><rect x="0" y="0" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/><rect x="3" y="3" width="8" height="6" rx="1" fill="currentColor"/><path d="M17 4v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                </div>
              </div>

              {/* Chat Header */}
              <div className="chat-header">
                <div className="chat-header-back">
                  <svg viewBox="0 0 24 24" fill="none" width="20"><path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div className="chat-header-info">
                  <div className="chat-header-avatar">
                    <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5"/><path d="M4 20c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke="currentColor" strokeWidth="1.5"/></svg>
                  </div>
                  <div>
                    <p className="chat-header-name">MEC 専門医相談</p>
                    <p className="chat-header-status">循環器内科</p>
                  </div>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="chat-messages">
                <div className="chat-date-divider">
                  <span>2026年5月28日</span>
                </div>

                {/* Client Message 1 */}
                <div className="chat-msg chat-msg-client">
                  <div className="chat-bubble chat-bubble-client">
                    <p className="chat-bubble-title">徐脈に対しての薬剤調整相談</p>
                    <p>80歳台男性　狭心症に対し2回PCI歴あり</p>
                    <p>体調お変わりないが血圧94/46と平常値より低め、脈37回で実測中のリズム不整なし。</p>
                    <p>再検するが38回。</p>
                    <p>胸部症状や息切れ、眩暈等の自覚症状なし…</p>
                  </div>
                  <span className="chat-bubble-time">10:05</span>
                </div>

                {/* Client Message 2 */}
                <div className="chat-msg chat-msg-client">
                  <div className="chat-bubble chat-bubble-client">
                    <p>下記の投薬で、調整した方がよいものはありますか？</p>
                    <p>また今後の対応はどうすればよいですか？</p>
                  </div>
                  <span className="chat-bubble-time">10:08</span>
                </div>

                {/* MEC Response */}
                <div className="chat-msg chat-msg-mec">
                  <div className="chat-avatar-mec">MEC</div>
                  <div className="chat-bubble chat-bubble-mec">
                    <p className="chat-bubble-sender">循環器専門医</p>
                    <p>ご相談ありがとうございます。</p>
                    <p>まず心電図で、高度房室ブロックへの移行がないかを確認する事をご検討いただき、</p>
                    <p>その上で下記の投薬調整はいかがでしょうか。…</p>
                  </div>
                  <span className="chat-bubble-time">10:30</span>
                </div>
              </div>

              {/* Chat Input */}
              <div className="chat-input-bar">
                <div className="chat-input-field">メッセージを入力</div>
                <div className="chat-input-send">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUPPORTED DEPARTMENTS */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="section-label">Departments</p>
            <h2 className="section-title">対応科目</h2>
          </div>
          <div className="consult-departments-detail">
            <div className="consult-dept-detail primary">
              <div className="consult-dept-header">
                <h3>循環器内科</h3>
              </div>
              <div className="consult-dept-body">
                <div className="consult-dept-group">
                  <h4>1. 心疾患の管理・治療相談</h4>
                  <ul>
                    <li>心疾患患者の薬剤調整（新規開始、薬剤変更、中止検討）</li>
                    <li>抗血小板薬・抗凝固薬の継続・調整。訪問歯科での抜歯や出血イベント時の継続可否</li>
                    <li>浮腫に対する介入</li>
                  </ul>
                </div>
                <div className="consult-dept-group">
                  <h4>2. 心電図読影（12誘導心電図、ホルター心電図）</h4>
                  <p>写真やPDFをチャットに送付 →<br className="pc-only" />翌営業日までに所見をつけてご返信。</p>
                  <p className="consult-dept-note">※個人情報に関わる部分は、マスキングしていただく必要があります</p>
                  <p className="consult-dept-note">クライアント様自院で撮影したエコー画像の解析も承ります（別途相談）</p>
                </div>
              </div>
            </div>

            <div className="consult-dept-detail">
              <div className="consult-dept-header">
                <h3>脳神経内科</h3>
              </div>
              <div className="consult-dept-body">
                <ul>
                  <li>パーキンソニズムのマネジメント・薬剤調整</li>
                  <li>パーキンソン病患者の投薬調整</li>
                  <li>抗てんかん薬の減量・増量可否、投薬変更</li>
                  <li>認知症治療薬の選定</li>
                </ul>
              </div>
            </div>

            <div className="consult-dept-detail">
              <div className="consult-dept-header">
                <h3>精神科</h3>
              </div>
              <div className="consult-dept-body">
                <ul>
                  <li>せん妄マネジメント</li>
                  <li>抗うつ薬適応判断、薬剤選定・調整</li>
                </ul>
              </div>
            </div>

            <div className="consult-dept-detail">
              <div className="consult-dept-header">
                <h3>産科・婦人科</h3>
              </div>
              <div className="consult-dept-body">
                <ul>
                  <li>婦人科系相談全般</li>
                  <li>医療スタッフの産科・婦人科的悩み相談（妊娠中の悩み、更年期障害など）</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILS */}
      <section className="section details-section">
        <div className="container">
          <div className="consult-details-stack">
            <div className="consult-detail-row">
              <h3 className="consult-detail-title">ご利用方法</h3>
              <p className="consult-detail-text">チャットツール（LINE・Google Chat等）を通じて、テキストベースでご相談いただけます。画像の添付も可能です。</p>
            </div>
            <div className="consult-detail-row">
              <h3 className="consult-detail-title">ご契約形態</h3>
              <p className="consult-detail-text"><strong>月額制</strong> — ご利用頻度・対応科目に応じて、個別にお見積りいたします。</p>
            </div>
          </div>
          <div className="consult-standalone-note">
            <p>超音波検査支援サービスとのセットだけでなく、<strong>オンライン専門医相談サービスのみ</strong>のご利用も可能です。</p>
          </div>
        </div>
      </section>

      {/* OTHER SERVICE */}
      <section className="section">
        <div className="container">
          <div className="other-service-banner">
            <div className="other-service-content">
              <p className="other-service-label">Another Service</p>
              <h3 className="other-service-title">超音波検査支援サービス</h3>
              <p className="other-service-desc">心エコー・血管エコーの撮影から、循環器専門医による読影・臨床的助言まで、検査業務を包括的に支援いたします。</p>
              <Link href="/service" className="btn btn-white">詳細を見る</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta">
        <div className="container">
          <div className="cta-inner">
            <h2 className="cta-title">サービスについてのご質問はお気軽に</h2>
            <p className="cta-desc">対応科目・料金・ご利用方法など、お気軽にお問い合わせください。</p>
            <Link href="/contact" className="btn btn-white">お問い合わせはこちら</Link>
          </div>
        </div>
      </section>
    </>
  );
}
