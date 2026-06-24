import { Resend } from "resend";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await request.json();
    const { company, name, email, subject, message } = body;

    if (!name || !email || !message) {
      return Response.json({ error: "必須項目が入力されていません" }, { status: 400 });
    }

    const subjectLabels: Record<string, string> = {
      echo: "超音波検査支援サービスについて",
      consult: "オンライン専門医相談について",
      estimate: "お見積もり・料金について",
      other: "その他",
    };

    const subjectLabel = subjectLabels[subject] || "未選択";

    await resend.emails.send({
      from: "MECお問い合わせ <noreply@med-echo-consult.com>",
      to: "info@med-echo-consult.com",
      replyTo: email,
      subject: `【お問い合わせ】${name}様 - ${subjectLabel}`,
      html: `
        <h2>ホームページからのお問い合わせ</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr><td style="padding:8px 12px;border:1px solid #ddd;background:#f9f9f9;font-weight:bold;width:160px;">医療機関名・会社名</td><td style="padding:8px 12px;border:1px solid #ddd;">${company || "未記入"}</td></tr>
          <tr><td style="padding:8px 12px;border:1px solid #ddd;background:#f9f9f9;font-weight:bold;">お名前</td><td style="padding:8px 12px;border:1px solid #ddd;">${name}</td></tr>
          <tr><td style="padding:8px 12px;border:1px solid #ddd;background:#f9f9f9;font-weight:bold;">メールアドレス</td><td style="padding:8px 12px;border:1px solid #ddd;">${email}</td></tr>
          <tr><td style="padding:8px 12px;border:1px solid #ddd;background:#f9f9f9;font-weight:bold;">お問い合わせ種別</td><td style="padding:8px 12px;border:1px solid #ddd;">${subjectLabel}</td></tr>
          <tr><td style="padding:8px 12px;border:1px solid #ddd;background:#f9f9f9;font-weight:bold;">お問い合わせ内容</td><td style="padding:8px 12px;border:1px solid #ddd;white-space:pre-wrap;">${message}</td></tr>
        </table>
      `,
    });

    return Response.json({ success: true });
  } catch {
    return Response.json({ error: "送信に失敗しました" }, { status: 500 });
  }
}
