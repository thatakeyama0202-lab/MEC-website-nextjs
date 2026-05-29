import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-content">
          <p className="hero-label">Cardiovascular Care Outsourcing</p>
          <h1 className="hero-title">
            循環器専門医が伴走する、<br />心血管ケアのアウトソーシング
          </h1>
          <p className="hero-desc">
            心血管エコー検査支援から、日々の投薬相談まで。<br />
            MECは、透析医院・訪問診療クリニック様のための、<br className="pc-only" />
            循環器専門医パートナーサービスです。
          </p>
          <div className="hero-actions">
            <Link href="/service" className="btn btn-primary">サービス詳細を見る</Link>
            <Link href="/contact" className="btn btn-outline">お問い合わせ</Link>
          </div>
        </div>
        <div className="hero-scroll">
          <span>Scroll</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="section pain-section">
        <div className="container">
          <div className="section-header">
            <p className="section-label">Pain Points</p>
            <h2 className="section-title">こんなお悩み、ありませんか？</h2>
          </div>
          <div className="pain-grid">
            <div className="pain-card">
              <div className="pain-icon">
                <svg viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="1.5"/><path d="M24 16v12M20 32h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </div>
              <p className="pain-text">「在宅で診ている心不全の患者さん、最近浮腫が増えてきた。心エコーで評価したいけれど、わざわざ専門病院に紹介するほどでもない——」</p>
            </div>
            <div className="pain-card">
              <div className="pain-icon">
                <svg viewBox="0 0 48 48" fill="none"><rect x="8" y="6" width="32" height="36" rx="4" stroke="currentColor" strokeWidth="1.5"/><path d="M16 16h16M16 24h16M16 32h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </div>
              <p className="pain-text">「透析患者さんの心機能評価、定期的にやりたい。でも検査技師の確保も、結果の読影も、自院だけでは難しい——」</p>
            </div>
            <div className="pain-card">
              <div className="pain-icon">
                <svg viewBox="0 0 48 48" fill="none"><path d="M8 36V20a4 4 0 014-4h24a4 4 0 014 4v16" stroke="currentColor" strokeWidth="1.5"/><path d="M4 36h40" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><circle cx="24" cy="26" r="6" stroke="currentColor" strokeWidth="1.5"/></svg>
              </div>
              <p className="pain-text">「処方の調整に迷う症例。専門医にちょっと相談できるだけで、ずいぶん助かるのに——」</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="section problem-section">
        <div className="container">
          <div className="problem-content">
            <div className="problem-text">
              <p>透析クリニックにも、訪問診療の現場にも、心不全や心血管疾患を抱える患者様が数多くいらっしゃいます。</p>
              <p className="problem-highlight"><strong>透析患者様の死因のおよそ半数</strong>は心血管疾患。</p>
              <p>しかし、心血管エコー検査は専門性が高く、「検査」も「専門的判断」も敷居が高いのが現状です。かといって専門病院への紹介は、透析中・在宅療養中の患者様にとって大きな負担となります。</p>
            </div>
            <div className="problem-solution">
              <div className="solution-badge">MECの役割</div>
              <h3 className="solution-title">MECは、その&ldquo;敷居&rdquo;を下げるサービスです。</h3>
              <p className="solution-desc"><strong>MEC（Medical Echo Consulting）</strong>は、循環器専門医・心エコー認証医が運営する、透析医院・訪問診療クリニック様向けの医療パートナーサービスです。</p>
            </div>
          </div>
        </div>
      </section>

      {/* THREE PILLARS */}
      <section className="section pillars-section">
        <div className="container">
          <div className="section-header">
            <p className="section-label">Our Service</p>
            <h2 className="section-title">3つの柱</h2>
          </div>
          <div className="pillars-grid">
            <div className="pillar-card">
              <div className="pillar-number">01</div>
              <h3 className="pillar-title">検査を、サポート。</h3>
              <p className="pillar-desc">超音波検査の経験を有する臨床検査技師が、クリニック様へ訪問し、検査業務を支援します。</p>
            </div>
            <div className="pillar-card">
              <div className="pillar-number">02</div>
              <h3 className="pillar-title">判断を、専門医がサポート。</h3>
              <p className="pillar-desc">撮影画像を循環器専門医が読影し、臨床的アドバイスを含むレポートを納品します。</p>
            </div>
            <div className="pillar-card">
              <div className="pillar-number">03</div>
              <h3 className="pillar-title">相談を、いつでも。</h3>
              <p className="pillar-desc">心電図読影、投薬相談、日々の診療上の疑問を、オンラインで随時お受けします。</p>
            </div>
          </div>
          <div className="pillars-highlight">
            <div className="pillars-highlight-icon">
              <svg viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="1.5"/><path d="M16 24l6 6 10-12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <p className="pillars-highlight-text">すべて、<strong>クリニック様の手出しなし</strong>で<br />運用できる仕組みです。</p>
            <p className="pillars-highlight-note">※検査件数等で一部例外あり</p>
          </div>
        </div>
      </section>

      {/* SERVICE OVERVIEW */}
      <section className="section service-overview-section">
        <div className="container">
          <div className="section-header">
            <p className="section-label">Service Overview</p>
            <h2 className="section-title">サービス概要</h2>
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
          <div className="section-cta-link dual">
            <Link href="/service" className="btn btn-primary">超音波検査支援の詳細</Link>
            <Link href="/consultation" className="btn btn-outline">専門医コンサルの詳細</Link>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="section vision-section">
        <div className="container">
          <div className="vision-inner">
            <p className="vision-text">「検査の手間が軽くなる」「専門医に気軽に相談できる」<br />——その安心感を、患者様にも、クリニックにも届けたい。</p>
            <p className="vision-sub">それが、MECの目指す医療の形です。</p>
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
