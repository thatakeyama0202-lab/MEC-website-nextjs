import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

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
              <div className="greeting-role">代表社員</div>
              <h3 className="greeting-name">畠山 翔翼<span className="greeting-ruby">（はたけやま つばさ）</span></h3>
              <div className="greeting-body">
                <p>循環器内科医として、岩手県立中央病院や榊原記念病院で、<br className="pc-only" />急性期から亜急性期病院での診療に従事してまいりました。</p>
                <p>臨床現場で抱いた問題意識を、<br className="pc-only" />自身の専門分野を活かして解決できると考え、<br className="pc-only" />主に透析クリニック様・在宅クリニック様へ向けた</p>
                <ul className="greeting-services">
                  <li>心・血管領域 超音波検査支援</li>
                  <li>オンライン専門医相談</li>
                </ul>
                <p>をご提供するサービスの立ち上げに至りました。</p>
                <p>何卒よろしくお願い申し上げます。</p>
              </div>
            </div>
            <div className="greeting-photo">
              <Image src="/ceo.png" alt="代表 畠山 翔翼" width={400} height={400} className="greeting-photo-img" priority />
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

      {/* BACKGROUND STORY */}
      <section className="section story-compact-section">
        <div className="container">
          <div className="section-header">
            <p className="section-label">Background</p>
            <h2 className="section-title">事業立ち上げの経緯</h2>
          </div>

          <div className="story-compact-grid">
            <div className="story-compact-card">
              <div className="story-compact-num">01</div>
              <h4 className="story-compact-heading">現場で見た課題</h4>
              <p>急性期病院での勤務を通じ、透析・在宅クリニックから重症心血管疾患患者様が多数搬送される現状を認識。弁膜症・狭心症に起因する心不全等が重症化し、治療に難渋する事例が多々ありました。</p>
              <div className="story-compact-impact">
                <span>患者様：QOLの低下</span>
                <span>クリニック：通院終了・関係悪化</span>
                <span>高次病院：リソース不足</span>
              </div>
            </div>

            <div className="story-compact-card">
              <div className="story-compact-num">02</div>
              <h4 className="story-compact-heading">なぜこのようなことに？</h4>
              <p>ハイリスク患者に対する適切な評価・介入がなされていないことが主因。</p>
              <div className="story-compact-causes">
                <span>エコー検査ができていない</span>
                <span>専門医へ気軽に相談できる場がない</span>
              </div>
            </div>

            <div className="story-compact-card">
              <div className="story-compact-num">03</div>
              <h4 className="story-compact-heading">心血管エコー検査の&ldquo;壁&rdquo;</h4>
              <p>心エコー検査は測定項目が多岐にわたり、結果の評価も複雑。非専門医の先生方が循環器の専門知識を一から学び直すのは困難であり、心血管エコー検査が敬遠されがちです。</p>
            </div>

            <div className="story-compact-card">
              <div className="story-compact-num">04</div>
              <h4 className="story-compact-heading">エコーの強みと解決への道筋</h4>
              <p>機械・撮影できる人・評価できる人がいれば、場所を選ばず質の高いサービスが提供可能。直接機材を持ち込み、検査技師が撮影、専門医が評価する場を設けることで解決を目指します。</p>
              <div className="story-compact-vision">
                <span>患者様：早期の専門的評価</span>
                <span>クリニック：継続的フォロー支援</span>
                <span>高次病院：円滑な連携</span>
              </div>
            </div>
          </div>

          <div className="story-compact-closing">
            <p>心血管疾患への介入を通じて、<br className="pc-only" />患者・クリニック・総合病院への&ldquo;三方良し&rdquo;を実現してまいります。</p>
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
