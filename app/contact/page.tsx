"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import EmailCopy from "../../components/EmailCopy";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.target as HTMLFormElement;
    const data = {
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
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
                    <EmailCopy />
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
                {status === "sent" && <p className="form-success">お問い合わせを送信しました。2営業日以内にご返信いたします。</p>}
                {status === "error" && <p className="form-error">送信に失敗しました。お手数ですがメールにて直接お問い合わせください。</p>}
                <button type="submit" className="btn btn-primary btn-full" disabled={status === "sending"}>
                  {status === "sending" ? "送信中..." : "送信する"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
