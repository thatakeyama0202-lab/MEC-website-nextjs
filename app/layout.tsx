import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollAnimator from "@/components/ScrollAnimator";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-noto",
});

export const metadata: Metadata = {
  title: {
    default: "MEC | Medical Echo Consulting合同会社",
    template: "%s | MEC - Medical Echo Consulting合同会社",
  },
  description: "循環器専門医が伴走する、心血管ケアのアウトソーシング。透析医院・訪問診療クリニック様のための循環器専門医パートナーサービス。",
};

// Google Analytics の測定ID（例: G-XXXXXXXXXX）
// Vercel の環境変数 NEXT_PUBLIC_GA_ID に設定する。未設定ならGAは読み込まない
const gaId = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`${inter.variable} ${notoSansJP.variable}`}>
        <Header />
        {children}
        <Footer />
        <ScrollAnimator />
      </body>
      {/* 測定IDが設定されている場合のみ Google Analytics を全ページに読み込む */}
      {gaId && <GoogleAnalytics gaId={gaId} />}
    </html>
  );
}
