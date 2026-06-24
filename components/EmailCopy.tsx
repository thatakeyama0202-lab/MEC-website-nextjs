"use client";

import { useState } from "react";

export default function EmailCopy({ className }: { className?: string }) {
  const email = "info@med-echo-consult.com";
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <button type="button" className={`email-copy ${className ?? ""}`} onClick={handleCopy} title="クリックしてコピー">
      <svg className="email-copy-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M2 7l10 6 10-6" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
      <span className="email-copy-address">{email}</span>
      <svg className="email-copy-clipboard" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="9" y="9" width="11" height="11" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M5 15V5a2 2 0 012-2h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
      {copied && <span className="email-copy-toast">コピーしました</span>}
    </button>
  );
}
