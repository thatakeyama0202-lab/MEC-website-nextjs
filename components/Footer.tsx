import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <Image src="/logo.png" alt="MEC - Medical Echo Consulting" className="footer-logo-img" width={128} height={32} style={{ height: 32, width: "auto" }} />
          </div>
          <nav className="footer-nav">
            <Link href="/">ホーム</Link>
            <Link href="/about">ご挨拶・会社概要</Link>
            <Link href="/service">事業概要</Link>
            <Link href="/contact">お問い合わせ</Link>
          </nav>
        </div>
        <p className="copyright">&copy; 2026 Medical Echo Consulting合同会社 All Rights Reserved.</p>
      </div>
    </footer>
  );
}
