const pptxgen = require("pptxgenjs");

const W = 13.333, H = 7.5;
const NAVY = "1B3A5C", TEAL = "2A9D8F", WHITE = "FFFFFF";
const INK = "22303C", MUTED = "667888", GRAY = "7D8A98";
const CARD = "F5F8FA", LINE = "DCE4EA", TEALTINT = "E4F2EF", NAVYTINT = "E7EDF3";
const JP = "Noto Sans JP";

const pptx = new pptxgen();
pptx.defineLayout({ name: "W16x9", width: W, height: H });
pptx.layout = "W16x9";
pptx.author = "Medical Echo Consulting LLC";
pptx.title = "協業スキームのご提案";

/* ---------- helpers ---------- */
const t = (o) => Object.assign({ fontFace: JP, color: INK, margin: 0 }, o);

function header(slide, title) {
  slide.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: W, h: 0.06, fill: { color: TEAL }, line: { color: TEAL, width: 0 } });
  slide.addText(title, t({ x: 0.6, y: 0.34, w: 10.5, h: 0.6, fontSize: 28, bold: true, color: NAVY }));
}

function footer(slide, n, onDark) {
  slide.addText(`MEC × BearMedi Confidential　|　${n}`, t({
    x: W - 4.6, y: H - 0.52, w: 4.0, h: 0.28, align: "right",
    fontSize: 9, color: onDark ? "9FB6C9" : "9AA7B4",
  }));
}

function chip(slide, label, x, y, w, h, kind) {
  const style = {
    clinic: { fill: "EEF1F4", line: "C9D3DB", color: "43535F" },
    mec:    { fill: TEALTINT, line: TEAL,     color: "1D6F65" },
    bm:     { fill: NAVYTINT, line: NAVY,     color: NAVY },
    tag:    { fill: WHITE,    line: "C9D3DB", color: MUTED },
  }[kind];
  slide.addShape(pptx.ShapeType.roundRect, {
    x, y, w, h, rectRadius: 0.08,
    fill: { color: style.fill }, line: { color: style.line, width: 1 },
  });
  slide.addText(label, t({ x, y, w, h, align: "center", valign: "middle", fontSize: 12, bold: true, color: style.color }));
}

function arrow(slide, x1, x2, y, opts = {}) {
  slide.addShape(pptx.ShapeType.line, {
    x: x1, y, w: x2 - x1, h: 0,
    line: { color: opts.color || NAVY, width: opts.width || 1.5, endArrowType: "triangle", dashType: opts.dash ? "dash" : "solid" },
  });
}

function arrowLabel(slide, text, x, w, y, color) {
  slide.addText(text, t({ x, y, w, h: 0.26, align: "center", fontSize: 8.5, color: color || MUTED }));
}

function card(slide, x, y, w, h, fill) {
  slide.addShape(pptx.ShapeType.roundRect, {
    x, y, w, h, rectRadius: 0.03,
    fill: { color: fill || CARD }, line: { color: LINE, width: 1 },
  });
}

/* polyline drawn as individual line segments (flipV for upward legs) */
function polyline(slide, pts, color, width) {
  for (let i = 0; i < pts.length - 1; i++) {
    const [x1, y1] = pts[i], [x2, y2] = pts[i + 1];
    slide.addShape(pptx.ShapeType.line, {
      x: Math.min(x1, x2), y: Math.min(y1, y2),
      w: Math.abs(x2 - x1), h: Math.abs(y2 - y1),
      flipV: y2 < y1,
      line: { color, width },
    });
  }
}

/* =========================================================
   SLIDE 1 — 表紙
   ========================================================= */
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };

  // background echo / ECG line art (behind content, left area)
  const base = 6.55;
  const pts = [];
  let x = 0.0;
  const beat = (x0) => ([
    [x0, base], [x0 + 0.22, base - 0.16], [x0 + 0.40, base], [x0 + 0.56, base],
    [x0 + 0.66, base + 0.20], [x0 + 0.78, base - 0.95], [x0 + 0.92, base + 0.34],
    [x0 + 1.04, base], [x0 + 1.34, base], [x0 + 1.60, base - 0.30], [x0 + 1.88, base],
  ]);
  while (x < 8.2) { pts.push(...beat(x)); x += 2.7; }
  pts.push([x, base], [8.9, base]);
  polyline(s, pts, "D6EAE6", 2.25);

  // navy panel (right third)
  s.addShape(pptx.ShapeType.rect, { x: 8.9, y: 0, w: W - 8.9, h: H, fill: { color: NAVY }, line: { color: NAVY, width: 0 } });
  s.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 8.9, h: 0.06, fill: { color: TEAL }, line: { color: TEAL, width: 0 } });

  s.addText("MEDICAL ECHO CONSULTING  ×  BEARMEDI", t({
    x: 0.8, y: 1.42, w: 7.6, h: 0.3, fontSize: 11, bold: true, color: TEAL, charSpacing: 1.5,
  }));
  s.addText("協業スキームのご提案", t({ x: 0.8, y: 1.88, w: 7.8, h: 1.0, fontSize: 40, bold: true, color: NAVY }));
  s.addText("契約形態と費用設計の整理", t({ x: 0.8, y: 2.98, w: 7.8, h: 0.5, fontSize: 20, color: "3E5A73" }));

  s.addText(
    [
      { text: "2026年8月21日　打ち合わせ議事整理", options: { breakLine: true } },
      { text: "株式会社BearMedi　安藤様", options: { breakLine: true } },
      { text: "Medical Echo Consulting合同会社（MEC）　畠山", options: {} },
    ],
    t({ x: 0.8, y: 4.15, w: 7.6, h: 1.2, fontSize: 12, color: "51616F", lineSpacing: 22 })
  );

  // panel: 本日の論点
  s.addText("本日の論点", t({ x: 9.5, y: 2.05, w: 3.4, h: 0.4, fontSize: 16, bold: true, color: WHITE }));
  const items = [
    ["1", "協業契約の形態", "再委託型 ／ 3者契約型"],
    ["2", "費用設計と資金の流れ", "クリニック→MEC→BM"],
  ];
  items.forEach(([n, head, sub], i) => {
    const y = 2.85 + i * 1.45;
    s.addShape(pptx.ShapeType.ellipse, { x: 9.5, y, w: 0.5, h: 0.5, fill: { color: TEAL }, line: { color: TEAL, width: 0 } });
    s.addText(n, t({ x: 9.5, y, w: 0.5, h: 0.5, align: "center", valign: "middle", fontSize: 15, bold: true, color: WHITE }));
    s.addText(head, t({ x: 10.15, y: y - 0.02, w: 2.9, h: 0.6, fontSize: 15, bold: true, color: WHITE }));
    s.addText(sub, t({ x: 10.15, y: y + 0.5, w: 2.9, h: 0.3, fontSize: 10.5, color: "A9C2D4" }));
  });

  footer(s, 1, true);
  s.addNotes("表紙。本日の論点は「契約形態」と「費用設計」の2点。");
}

/* =========================================================
   SLIDE 2 — 契約形態：2つのパターン
   ========================================================= */
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  header(s, "契約形態：2つのパターン");

  const cy = 1.28, ch = 2.5;

  /* --- パターン① --- */
  card(s, 0.6, cy, 5.85, ch);
  s.addShape(pptx.ShapeType.roundRect, { x: 0.9, y: cy + 0.22, w: 2.55, h: 0.4, rectRadius: 0.1, fill: { color: NAVY }, line: { color: NAVY, width: 0 } });
  s.addText("パターン①　再委託型", t({ x: 0.9, y: cy + 0.22, w: 2.55, h: 0.4, align: "center", valign: "middle", fontSize: 12, bold: true, color: WHITE }));

  chip(s, "クリニック", 0.9, cy + 1.05, 1.55, 0.52, "clinic");
  chip(s, "MEC", 3.15, cy + 1.05, 1.25, 0.52, "mec");
  chip(s, "BM", 5.05, cy + 1.05, 1.25, 0.52, "bm");
  arrow(s, 2.52, 3.08, cy + 1.31);
  arrow(s, 4.47, 4.98, cy + 1.31);
  arrowLabel(s, "業務委託", 2.25, 1.1, cy + 0.76);
  arrowLabel(s, "再委託", 4.18, 1.1, cy + 0.76);

  s.addText("超音波検査支援＋オンラインコンサルティング契約は\nクリニック ↔ MEC 間で締結", t({
    x: 0.9, y: cy + 1.78, w: 5.25, h: 0.6, fontSize: 10.5, color: MUTED, lineSpacing: 15,
  }));

  /* --- パターン② --- */
  card(s, 6.9, cy, 5.85, ch);
  s.addShape(pptx.ShapeType.roundRect, { x: 7.2, y: cy + 0.22, w: 2.75, h: 0.4, rectRadius: 0.1, fill: { color: TEAL }, line: { color: TEAL, width: 0 } });
  s.addText("パターン②　3者契約型", t({ x: 7.2, y: cy + 0.22, w: 2.75, h: 0.4, align: "center", valign: "middle", fontSize: 12, bold: true, color: WHITE }));

  const rows = [
    ["クリニック", "MEC", "mec", "コンサルティング契約\n（心エコー・心電図読影を含む専門コンサル）"],
    ["クリニック", "BM", "bm", "検査技師の非常勤契約"],
  ];
  rows.forEach(([a, b, kind, desc], i) => {
    const y = cy + 0.98 + i * 0.82;
    chip(s, a, 7.2, y, 1.3, 0.46, "clinic");
    s.addText("⇔", t({ x: 8.53, y, w: 0.3, h: 0.46, align: "center", valign: "middle", fontSize: 13, bold: true, color: GRAY }));
    chip(s, b, 8.86, y, 0.9, 0.46, kind);
    s.addText(desc, t({ x: 9.9, y, w: 2.78, h: 0.46, valign: "middle", fontSize: 9, color: INK, lineSpacing: 12.5 }));
  });

  /* --- データフロー band --- */
  const by = 4.06, bh = 2.5;
  card(s, 0.6, by, 12.15, bh, WHITE);
  s.addText("②のデータフロー（実務上）", t({ x: 0.9, y: by + 0.2, w: 4.5, h: 0.36, fontSize: 14, bold: true, color: NAVY }));

  // legend
  s.addShape(pptx.ShapeType.line, { x: 9.15, y: by + 0.38, w: 0.42, h: 0, line: { color: NAVY, width: 1.5 } });
  s.addText("契約・納品の流れ", t({ x: 9.68, y: by + 0.24, w: 1.35, h: 0.28, fontSize: 9, color: MUTED }));
  s.addShape(pptx.ShapeType.line, { x: 11.1, y: by + 0.38, w: 0.42, h: 0, line: { color: TEAL, width: 1.5, dashType: "dash" } });
  s.addText("データの流れ", t({ x: 11.63, y: by + 0.24, w: 1.1, h: 0.28, fontSize: 9, color: MUTED }));

  // 名目 row
  const r1 = by + 0.92;
  chip(s, "名目", 0.9, r1, 0.78, 0.46, "tag");
  const seq = [["BM", 1.9, 1.0, "bm"], ["クリニック", 3.9, 1.5, "clinic"], ["MEC", 6.4, 1.0, "mec"], ["クリニック", 8.4, 1.5, "clinic"]];
  seq.forEach(([lbl, x, w, k]) => chip(s, lbl, x, r1, w, 0.46, k));
  [[2.95, 3.85, "納品"], [5.45, 6.35, "読影依頼"], [7.45, 8.35, "完成品納品"]].forEach(([x1, x2, lbl]) => {
    arrow(s, x1, x2, r1 + 0.23);
    arrowLabel(s, lbl, x1 - 0.15, x2 - x1 + 0.3, r1 - 0.06);
  });

  // 実務 row
  const r2 = by + 1.75;
  chip(s, "実務", 0.9, r2, 0.78, 0.46, "tag");
  chip(s, "BM", 1.9, r2, 1.0, 0.46, "bm");
  chip(s, "MEC", 3.9, r2, 1.0, 0.46, "mec");
  arrow(s, 2.95, 3.85, r2 + 0.23, { color: TEAL, dash: true });
  arrowLabel(s, "直接共有", 2.8, 1.2, r2 - 0.06, TEAL);
  s.addText("クリニック許諾のもと、エコー画像・動画＋仮レポートを直接授受（Google Drive / Dropbox 想定）", t({
    x: 5.15, y: r2 + 0.06, w: 7.4, h: 0.36, fontSize: 11, color: INK,
  }));

  footer(s, 2);
  s.addNotes("①は再委託型。②は3者契約型で、契約上は名目フロー、実務はクリニック許諾のもとBM→MECで直接授受。");
}

/* =========================================================
   SLIDE 3 — 3者契約の成立条件
   ========================================================= */
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  header(s, "3者契約の成立条件（MECからのご提案）");

  s.addText("3者契約（パターン②）を採用する場合、以下3点のクリアを前提条件としてご提案します。", t({
    x: 0.6, y: 1.05, w: 11.5, h: 0.36, fontSize: 13, color: "44586A",
  }));

  const cardsY = 1.68, cardH = 3.4, cardW = 3.85;
  const xs = [0.6, 4.75, 8.9];
  const data = [
    ["01", "職業紹介資格の取得（BM）", "クリニックとの非常勤契約仲介を\n適法に行うための体制整備"],
    ["02", "レベニューシェアへの同意", "作業ごとの収益の 30% を\nMECへお支払い"],
    ["03", "非迂回・直接取引禁止条項", "MECを介さないクリニックとの\n直接取引を契約上禁止"],
  ];

  data.forEach(([num, title, body], i) => {
    const x = xs[i];
    card(s, x, cardsY, cardW, cardH);
    s.addText(num, t({ x: x + 0.35, y: cardsY + 0.22, w: 1.0, h: 0.5, fontSize: 24, bold: true, color: "C3D3DE" }));

    const icx = x + cardW / 2;
    if (i === 0) {
      // 資格証：書面 + 認証印
      s.addShape(pptx.ShapeType.rect, { x: icx - 0.42, y: cardsY + 0.92, w: 0.84, h: 1.02, fill: { color: WHITE }, line: { color: NAVY, width: 1.5 } });
      [0.24, 0.44, 0.64].forEach((dy, k) => {
        s.addShape(pptx.ShapeType.line, { x: icx - 0.26, y: cardsY + 0.92 + dy, w: k === 2 ? 0.32 : 0.52, h: 0, line: { color: "A9BCCA", width: 1.5 } });
      });
      s.addShape(pptx.ShapeType.ellipse, { x: icx + 0.06, y: cardsY + 1.5, w: 0.36, h: 0.36, fill: { color: TEALTINT }, line: { color: TEAL, width: 1.5 } });
    } else if (i === 1) {
      s.addShape(pptx.ShapeType.ellipse, { x: icx - 0.62, y: cardsY + 0.86, w: 1.24, h: 1.24, fill: { color: WHITE }, line: { color: TEAL, width: 6 } });
      s.addText("30%", t({ x: icx - 0.62, y: cardsY + 0.86, w: 1.24, h: 1.24, align: "center", valign: "middle", fontSize: 22, bold: true, color: TEAL }));
    } else {
      s.addShape(pptx.ShapeType.ellipse, { x: icx - 0.56, y: cardsY + 0.9, w: 1.12, h: 1.12, fill: { color: WHITE }, line: { color: NAVY, width: 3 } });
      s.addShape(pptx.ShapeType.line, { x: icx - 0.36, y: cardsY + 1.1, w: 0.72, h: 0.72, line: { color: TEAL, width: 3 } });
    }

    s.addText(title, t({ x: x + 0.3, y: cardsY + 2.28, w: cardW - 0.6, h: 0.4, align: "center", fontSize: 14, bold: true, color: NAVY }));
    if (i === 1) {
      s.addText(
        [
          { text: "作業ごとの収益の ", options: { fontSize: 11, color: MUTED } },
          { text: "30%", options: { fontSize: 15, bold: true, color: TEAL } },
          { text: " を", options: { fontSize: 11, color: MUTED, breakLine: true } },
          { text: "MECへお支払い", options: { fontSize: 11, color: MUTED } },
        ],
        t({ x: x + 0.3, y: cardsY + 2.76, w: cardW - 0.6, h: 0.6, align: "center", lineSpacing: 16 })
      );
    } else {
      s.addText(body, t({ x: x + 0.3, y: cardsY + 2.78, w: cardW - 0.6, h: 0.6, align: "center", fontSize: 11, color: MUTED, lineSpacing: 16 }));
    }
  });

  s.addShape(pptx.ShapeType.rightArrow, {
    x: 2.6, y: 5.52, w: 8.13, h: 0.72,
    fill: { color: NAVY }, line: { color: NAVY, width: 0 },
  });
  s.addText("3条件クリア　→　3者契約の締結へ", t({
    x: 2.6, y: 5.52, w: 7.6, h: 0.72, align: "center", valign: "middle", fontSize: 16, bold: true, color: WHITE,
  }));

  footer(s, 3);
  s.addNotes("条件1は非常勤契約の仲介が職業紹介に該当し得るための対応。契約書化の際は社労士・弁護士の確認を推奨。データ直接授受はクリニックの書面許諾を取得しておくと安全。");
}

/* =========================================================
   SLIDE 4 — 費用設計と資金フロー
   ========================================================= */
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  header(s, "費用設計と資金フロー");

  // 前提ノート
  s.addShape(pptx.ShapeType.rect, { x: 0.6, y: 1.02, w: 12.15, h: 0.92, fill: { color: "F1F5F8" }, line: { color: "E1E9EF", width: 1 } });
  s.addText(
    [
      { text: "前提（透析クリニックへの契約時に説明済み）", options: { fontSize: 11, bold: true, color: NAVY, breakLine: true } },
      { text: "本サービスに目先の収益増は期待しない／中長期的な心血管イベントによる患者離脱リスクの低減と", options: { fontSize: 10.5, color: "4B5D6B", breakLine: true } },
      { text: "専門医コンサルを、最小限の持ち出しで利用いただく（月により例外あり）", options: { fontSize: 10.5, color: "4B5D6B" } },
    ],
    t({ x: 0.85, y: 1.14, w: 11.6, h: 0.72, lineSpacing: 15 })
  );

  // 資金フロー
  const fy = 2.62;
  chip(s, "クリニック", 1.3, fy, 2.1, 0.6, "clinic");
  chip(s, "MEC", 5.6, fy, 2.1, 0.6, "mec");
  chip(s, "BM", 9.9, fy, 2.1, 0.6, "bm");
  arrow(s, 3.5, 5.5, fy + 0.3);
  arrow(s, 7.8, 9.8, fy + 0.3);
  s.addText("検査支援費／コンサルティング費／交通費", t({ x: 3.0, y: fy - 0.34, w: 3.0, h: 0.3, align: "center", fontSize: 9, color: MUTED }));
  s.addText("①時給8,000円相当　②レベシェア30%", t({ x: 7.3, y: fy - 0.34, w: 3.0, h: 0.3, align: "center", fontSize: 9, color: MUTED }));

  // 表：クリニック → MEC
  s.addText("クリニック → MEC", t({ x: 0.6, y: 3.52, w: 6.0, h: 0.32, fontSize: 13, bold: true, color: NAVY }));
  const hdr = (txt) => ({ text: txt, options: { fontFace: JP, fontSize: 10, bold: true, color: WHITE, fill: { color: NAVY }, valign: "middle", margin: [4, 8, 4, 8] } });
  const cel = (txt, opt = {}) => ({ text: txt, options: Object.assign({ fontFace: JP, fontSize: 10, color: INK, valign: "middle", margin: [4, 8, 4, 8] }, opt) });

  s.addTable([
    [hdr("項目"), hdr("内容")],
    [cel("検査支援費", { bold: true }), cel("作業件数から作業時間を見積もり、約12,000円/h で請求")],
    [cel("コンサルティング費", { bold: true }), cel("月額固定")],
    [cel("交通費", { bold: true }), cel("実費")],
    [cel("最低保証", { bold: true }), cel("当日キャンセル・依頼僅少時　30,000円/回")],
  ], {
    x: 0.6, y: 3.9, w: 6.0, colW: [1.75, 4.25], rowH: [0.32, 0.42, 0.34, 0.34, 0.42],
    border: { type: "solid", color: "DDE5EB", pt: 1 },
  });

  // 3:7 配分バー
  s.addText("最低保証の配分", t({ x: 0.6, y: 5.92, w: 1.7, h: 0.3, fontSize: 10, bold: true, color: NAVY, valign: "middle", margin: 0, fontFace: JP }));
  const bx = 2.4, bw = 4.2, byy = 5.96, bhh = 0.26;
  s.addShape(pptx.ShapeType.rect, { x: bx, y: byy, w: bw * 0.3, h: bhh, fill: { color: TEAL }, line: { color: TEAL, width: 0 } });
  s.addShape(pptx.ShapeType.rect, { x: bx + bw * 0.3, y: byy, w: bw * 0.7, h: bhh, fill: { color: NAVY }, line: { color: NAVY, width: 0 } });
  s.addText("MEC 30%", t({ x: bx, y: byy, w: bw * 0.3, h: bhh, align: "center", valign: "middle", fontSize: 9, bold: true, color: WHITE }));
  s.addText("BM 70%", t({ x: bx + bw * 0.3, y: byy, w: bw * 0.7, h: bhh, align: "center", valign: "middle", fontSize: 9, bold: true, color: WHITE }));

  // 表：MEC → BM
  s.addText("MEC → BM", t({ x: 7.0, y: 3.52, w: 5.75, h: 0.32, fontSize: 13, bold: true, color: NAVY }));
  s.addTable([
    [hdr("契約形態"), hdr("支払い")],
    [cel("① 再委託型", { bold: true, fontSize: 9.5 }), cel("時給8,000円相当\n例：心エコー5件＋頸動脈1件＋下肢動脈2件＝3.5h → 28,000円", { fontSize: 9.5 })],
    [cel("② 3者契約型", { bold: true, fontSize: 9.5 }), cel("作業収益の レベシェア30% をMECへ\nBMの作業単価は調整相談（保険収益50%設定を想定 → 30%上乗せ額での請求を検討）", { fontSize: 9.5 })],
  ], {
    x: 7.0, y: 3.9, w: 5.75, colW: [1.45, 4.30], rowH: [0.34, 0.70, 0.95],
    border: { type: "solid", color: "DDE5EB", pt: 1 },
  });

  footer(s, 4);
  s.addNotes("金額はすべて税抜想定。最低保証30,000円/回はMEC3割・BM7割で配分。");
}

const out = process.argv[2] || "BearMedi_MEC_協業スキーム提案_20260821.pptx";
pptx.writeFile({ fileName: out }).then(() => console.log("written:", out));
