import {
  consultComparisonCopy,
  commonMethods,
  mecAnswers,
  type MecAnswerIcon,
} from "./ConsultComparison.data";

// 後段の各行に付ける小さなアイコン（既存アイコンと同じ線画スタイルのインラインSVG）
const icons: Record<MecAnswerIcon, React.ReactNode> = {
  cost: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8.5 8l3.5 4.5L15.5 8M9 13.5h6M9 16h6M12 12.5V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  time: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  online: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 20h8M12 17v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8.5 11h7M12 8.5v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
};

/**
 * オンライン専門医コンサルティング 比較セクション
 * 左（前段）：よくある3つの方法と課題、右（後段）：MECなら、を同じ行で1対1に並べる
 */
export default function ConsultComparison() {
  return (
    <div className="consult-compare">
      <h2 className="consult-compare-title">{consultComparisonCopy.heading}</h2>

      <div className="consult-compare-grid">
        {/* 列見出し（PCでは左右の列の上、スマホでは各グループの上に表示） */}
        <h3 className="consult-compare-colhead consult-compare-colhead-before">
          {consultComparisonCopy.beforeHeading}
        </h3>
        <h3 className="consult-compare-colhead consult-compare-colhead-after">
          {consultComparisonCopy.afterHeading}
        </h3>

        {/* 行ごとに「前段 → 後段」を並べ、同じ行の高さを揃える */}
        {commonMethods.map((method, i) => {
          const answer = mecAnswers[i];
          const isLast = i === commonMethods.length - 1;
          return (
            <ConsultCompareRow key={method.title} index={i} isLast={isLast} method={method} answer={answer} />
          );
        })}
      </div>

      <p className="consult-compare-note">{consultComparisonCopy.note}</p>
    </div>
  );
}

type RowProps = {
  index: number;
  isLast: boolean;
  method: (typeof commonMethods)[number];
  answer: (typeof mecAnswers)[number];
};

// 1行分（前段セル＋後段セル）。CSS Grid の同じ行に置くことで高さが揃う
function ConsultCompareRow({ index, isLast, method, answer }: RowProps) {
  const lastClass = `${index === 0 ? " is-first" : ""}${isLast ? " is-last" : ""}`;
  return (
    <>
      <div className={`consult-compare-cell consult-compare-before${lastClass}`}>
        <span className="consult-compare-num">{index + 1}</span>
        <div>
          <p className="consult-compare-method">{method.title}</p>
          <p className="consult-compare-issue-label">課題:</p>
          <ul className="consult-compare-issues">
            {method.issues.map((issue) => (
              <li key={issue} className="consult-compare-issue">
                <span className="consult-compare-issue-mark" aria-hidden="true">◆</span>
                {issue}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* 後段：「見出し」と「内容」を別々のボックスに分けて並べる */}
      <div className={`consult-compare-cell consult-compare-after${lastClass}`}>
        <div className="consult-compare-label-box">
          <span className="consult-compare-icon">{icons[answer.icon]}</span>
          <p className="consult-compare-label">{answer.label}</p>
        </div>
        <span className="consult-compare-arrow" aria-hidden="true">→</span>
        <div className="consult-compare-answer-box">
          <p className="consult-compare-answer">{answer.text}</p>
        </div>
      </div>
    </>
  );
}
