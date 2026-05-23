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
            <Link href="/service" className="btn btn-primary">事業概要を見る</Link>
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
              <p>訪問診療においても、心不全をはじめとする循環器疾患は、日常的に向き合うテーマです。</p>
              <p>しかし、心臓・血管エコー検査は専門性が高く、結果の解釈にも循環器の専門知識を要します。だからこそ、「検査」と「専門的判断」への敷居は、意外なほど高い——そう感じていらっしゃる先生方は、決して少なくないのではないでしょうか。</p>
              <p>専門病院への紹介は、患者様にも、ご家族にも、そして先生方にも負担がかかります。とくに維持透析中の患者様や、在宅療養中の患者様にとって、外来通院や精査入院のハードルは決して低くありません。</p>
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
              <p className="pillar-desc">心血管エコーに精通した専門技師が、クリニック様へ訪問し、超音波検査業務を支援します。</p>
            </div>
            <div className="pillar-card">
              <div className="pillar-number">02</div>
              <h3 className="pillar-title">判断を、専門医が。</h3>
              <p className="pillar-desc">撮影画像を循環器専門医が読影し、臨床的アドバイスを含むレポートを納品します。</p>
            </div>
            <div className="pillar-card">
              <div className="pillar-number">03</div>
              <h3 className="pillar-title">相談を、いつでも。</h3>
              <p className="pillar-desc">心電図読影、投薬相談、日々の診療上の疑問を、オンラインで随時お受けします。</p>
            </div>
          </div>
          <div className="pillars-note">
            <p>すべて、<strong>クリニック様の手出しなし</strong>で運用できる仕組みです。</p>
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
