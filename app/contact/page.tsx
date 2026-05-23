"use client";

import type { FormEvent } from "react";

export default function ContactPage() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert("お問い合わせありがとうございます。\n※実際の送信にはサーバー側の設定が必要です。");
    (e.target as HTMLFormElement).reset();
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="page-hero-label">Contact</p>
          <h1 className="page-hero-title">お問い合わせ</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-layout">
            <div className="contact-info">
              <h2 className="contact-info-title">お問い合わせ先</h2>
              <p className="contact-info-desc">超音波検査支援サービス・オンライン専門医コンサルテーションに関するご質問・ご相談は、下記メールアドレスまでお気軽にお問い合わせください。担当者より2営業日以内にご返信いたします。</p>
              <div className="contact-detail">
                <div className="contact-detail-item">
                  <div className="contact-detail-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M2 7l10 6 10-6" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                  </div>
                  <div>
                    <p className="contact-detail-label">メール</p>
                    <a href="mailto:info@medical-echo-consult.com" className="contact-detail-value">info@medical-echo-consult.com</a>
                  </div>
                </div>
                <div className="contact-detail-item">
                  <div className="contact-detail-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.5"/>
                      <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                  </div>
                  <div>
                    <p className="contact-detail-label">所在地</p>
                    <p className="contact-detail-value">〒107-0061<br />東京都港区北青山1-3-3<br />三橋ビル 3階</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-form-wrapper">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="company">医療機関名・会社名</label>
                  <input type="text" id="company" name="company" placeholder="例：○○クリニック" />
                </div>
                <div className="form-group">
                  <label htmlFor="name">お名前 <span className="required">必須</span></label>
                  <input type="text" id="name" name="name" required placeholder="例：山田 太郎" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">メールアドレス <span className="required">必須</span></label>
                  <input type="email" id="email" name="email" required placeholder="例：example@mail.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">お問い合わせ種別</label>
                  <select id="subject" name="subject">
                    <option value="">選択してください</option>
                    <option value="echo">超音波検査支援サービスについて</option>
                    <option value="consult">オンライン専門医相談について</option>
                    <option value="estimate">お見積もり・料金について</option>
                    <option value="other">その他</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">お問い合わせ内容 <span className="required">必須</span></label>
                  <textarea id="message" name="message" rows={6} required placeholder="お問い合わせ内容をご記入ください"></textarea>
                </div>
                <p className="form-note">※ このフォームはデモ用です。実際の送信にはサーバー側の設定が必要です。</p>
                <button type="submit" className="btn btn-primary btn-full">送信する</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
