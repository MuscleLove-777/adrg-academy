const LEVEL3_DATA = {
    id: 3,
    title: "トレーサビリティ・適合性",
    icon: "🔗",
    description: "TFL-ADaM紐付け、Data Conformance、SDTMからのトレーサビリティ",
    modules: [
        {
            id: 301,
            title: "解析結果とデータセットの紐付け",
            duration: "20分",
            content: `<h2>トレーサビリティの全体像</h2>
<p>ADRGにおいて最も重要な役割の一つが、TFL（Tables, Figures, Listings）とADaMデータセットのトレーサビリティです。</p>
<div class="info-box tip"><div class="info-box-title">TFL - ADaM - SDTM の流れ</div>
<p>Table 14.1.1 (Demographics) ⟷ ADSL ⟷ DM, DS, EX<br>
Table 14.2.1 (AE Summary) ⟷ ADAE ⟷ AE<br>
Table 14.3.1 (Lab Results) ⟷ ADLB ⟷ LB<br>
Figure 14.4.1 (KM Plot) ⟷ ADTTE ⟷ AE, DS</p></div>

<h2>TFL to ADaM Mapping Table</h2>
<table><thead><tr><th>TFL番号</th><th>TFLタイトル</th><th>ADaM Dataset</th><th>Population</th><th>フィルタ条件</th></tr></thead><tbody>
<tr><td>Table 14.1.1</td><td>Summary of Demographics</td><td>ADSL</td><td>Safety</td><td>SAFFL='Y'</td></tr>
<tr><td>Table 14.2.1</td><td>Overall AE Summary</td><td>ADAE</td><td>Safety</td><td>SAFFL='Y' AND TRTEMFL='Y'</td></tr>
<tr><td>Table 14.2.3</td><td>SAE Summary</td><td>ADAE</td><td>Safety</td><td>SAFFL='Y' AND AESER='Y'</td></tr>
<tr><td>Table 14.3.1</td><td>Lab Results - Change from BL</td><td>ADLB</td><td>Safety</td><td>SAFFL='Y' AND ANL01FL='Y'</td></tr>
<tr><td>Figure 14.4.1</td><td>Kaplan-Meier: OS</td><td>ADTTE</td><td>ITT</td><td>ITTFL='Y'</td></tr>
</tbody></table>

<h2>解析プログラムとの対応</h2>
<table><thead><tr><th>情報項目</th><th>記載例</th></tr></thead><tbody>
<tr><td>ソフトウェア</td><td>SAS 9.4, R 4.3.1</td></tr>
<tr><td>OS</td><td>Linux x86_64, Windows Server 2019</td></tr>
<tr><td>乱数シード</td><td>ADTTE Bootstrap: seed = 12345</td></tr>
<tr><td>解析手法</td><td>PROC MIXED (MMRM), PROC LIFETEST</td></tr>
</tbody></table>

<div class="info-box warning"><div class="info-box-title">ポイントまとめ</div><ul>
<li>全TFLに対して使用するADaM、主要変数、集団、フィルタ条件を明記</li>
<li>複雑なTFLには詳細マッピング（集計項目と変数の対応）を記載</li>
<li>解析プログラムとソフトウェア情報も再現性確保のために記載</li>
</ul></div>`,
            quiz: [
                { id: "q301_1", type: "choice", question: "TFL to ADaM Mappingに含めるべき情報は？", options: ["プログラマーの連絡先", "使用ADaM、主要変数、集団、フィルタ条件", "CRFのページ番号", "データベースのパスワード"], answer: 1, explanation: "全TFLに対して使用ADaM、主要変数、集団、フィルタ条件を明記します。" },
                { id: "q301_2", type: "choice", question: "Safety解析で使用する投与群変数は？", options: ["TRT01P（計画投与群）", "TRT01A（実投与群）", "ARM", "ARMCD"], answer: 1, explanation: "Safety解析は実投与群（TRT01A）を使用するのが一般的です。" },
                { id: "q301_3", type: "choice", question: "Kaplan-Meier図のADaMデータセットは？", options: ["ADSL", "ADAE", "ADLB", "ADTTE"], answer: 3, explanation: "Kaplan-Meier図はADTTE（Time-to-Event Analysis Dataset）を使用します。" },
                { id: "q301_4", type: "choice", question: "再現性確保のために記載すべき情報は？", options: ["ソフトウェアバージョン", "オフィスの住所", "プロジェクト予算", "会議の議事録"], answer: 0, explanation: "ソフトウェアバージョン、OS等の情報を記載し再現性を確保します。" },
                { id: "q301_5", type: "fill", question: "Tables, Figures, and Listingsの略称は？（3文字）", answer: "TFL", explanation: "TFL（Tables, Figures, and Listings）は解析結果の帳票です。" }
            ]
        },
        {
            id: 302,
            title: "Data Conformanceセクション",
            duration: "15分",
            content: `<h2>Data Conformanceの概要</h2>
<p>Data Conformanceセクションは、ADaMデータセットがCDISC標準に準拠していることを示すセクションです。</p>

<h2>ADaM Conformance Rules</h2>
<table><thead><tr><th>Rule ID</th><th>カテゴリ</th><th>内容</th><th>重要度</th></tr></thead><tbody>
<tr><td>AD0001</td><td>Structure</td><td>ADSLは被験者あたり1レコード</td><td>Error</td></tr>
<tr><td>AD0002</td><td>Structure</td><td>BDSにPARAMCD, PARAMが存在</td><td>Error</td></tr>
<tr><td>AD0003</td><td>Variable</td><td>USUBJIDはADSLと一致</td><td>Error</td></tr>
<tr><td>AD0005</td><td>Derivation</td><td>BASEはABLFL='Y'のAVALと一致</td><td>Error</td></tr>
<tr><td>AD0015</td><td>Value</td><td>CHG = AVAL - BASEが成立</td><td>Warning</td></tr>
<tr><td>AD0020</td><td>Flag</td><td>Population Flagsは'Y'またはnull</td><td>Warning</td></tr>
</tbody></table>

<h2>バリデーション結果サマリー</h2>
<table><thead><tr><th>Dataset</th><th>Errors</th><th>Warnings</th><th>Notices</th></tr></thead><tbody>
<tr><td>ADSL</td><td>0</td><td>0</td><td>2</td></tr>
<tr><td>ADAE</td><td>0</td><td>2</td><td>5</td></tr>
<tr><td>ADLB</td><td>0</td><td>1</td><td>3</td></tr>
<tr><td>ADVS</td><td>0</td><td>0</td><td>1</td></tr>
<tr><td>ADTTE</td><td>0</td><td>1</td><td>0</td></tr>
<tr><td><strong>Total</strong></td><td><strong>0</strong></td><td><strong>4</strong></td><td><strong>13</strong></td></tr>
</tbody></table>

<h2>Issue対応方針の記載例</h2>
<div class="info-box success"><div class="info-box-title">良い記載例</div>
<p>AD0015 (ADLB): CHGとAVAL-BASEの差異 (12件) - 精度の違いによる丸め誤差。全件で差異は0.0001未満であり、解析結果に影響しない。</p></div>

<div class="info-box warning"><div class="info-box-title">ポイントまとめ</div><ul>
<li>Pinnacle 21によるバリデーション結果をデータセット別に記載</li>
<li>Errorは全て解消し、残存Warningには合理的な理由を記載</li>
<li>バリデーションツールのバージョン、ADaM IGバージョンを明記</li>
</ul></div>`,
            quiz: [
                { id: "q302_1", type: "choice", question: "AD0001ルールの内容は？", options: ["CHG = AVAL - BASE", "ADSLは被験者あたり1レコード", "Population Flagsは'Y'またはnull", "USUBJIDはADSLと一致"], answer: 1, explanation: "AD0001はADSLが被験者あたり1レコードであることを確認するルールです。" },
                { id: "q302_2", type: "choice", question: "Population Flagsの正しい値は？", options: ["'Y'または'N'", "'Y'またはnull", "'TRUE'または'FALSE'", "'1'または'0'"], answer: 1, explanation: "ADaM IG準拠ではPopulation Flagsは'Y'またはnull（空白）です。" },
                { id: "q302_3", type: "choice", question: "バリデーション結果のサマリーに含めるべき項目は？", options: ["データセット別のError/Warning/Notice数", "プログラマーの評価点", "実行時間", "メモリ使用量"], answer: 0, explanation: "データセットごとのError/Warning/Notice数をサマリー表で記載します。" },
                { id: "q302_4", type: "choice", question: "Issue対応方針として不適切なものは？", options: ["精度の違いによる丸め誤差と説明", "SAPに基づく仕様どおりと説明", "「Known issue」とだけ記載", "DTFフラグで補完情報を記録済みと説明"], answer: 2, explanation: "「Known issue」だけでは具体的な理由と対応が不明です。" },
                { id: "q302_5", type: "fill", question: "ADaMの実装ガイドの略称は？（英語2語の略、スペース区切り）", answer: "ADaM IG", explanation: "ADaM IG（ADaM Implementation Guide）です。" }
            ]
        },
        {
            id: 303,
            title: "SDTMからADaMへのトレーサビリティ",
            duration: "15分",
            content: `<h2>トレーサビリティの概念</h2>
<p>SDTMからADaMへの変換におけるトレーサビリティは、各ADaM変数のソースを明確にすることです。</p>

<h2>TRACEABILITY変数</h2>
<table><thead><tr><th>変数名</th><th>Label</th><th>説明</th><th>例</th></tr></thead><tbody>
<tr><td>SRCDOM</td><td>Source Domain</td><td>ソースとなるSDTMドメイン</td><td>'LB', 'AE'</td></tr>
<tr><td>SRCVAR</td><td>Source Variable</td><td>ソースとなるSDTM変数</td><td>'LBSTRESN', 'AESEV'</td></tr>
<tr><td>SRCSEQ</td><td>Source Sequence Number</td><td>ソースレコードの--SEQ</td><td>15</td></tr>
</tbody></table>

<h2>導出レベル別のトレーサビリティ</h2>
<table><thead><tr><th>Level</th><th>種類</th><th>説明</th><th>例</th></tr></thead><tbody>
<tr><td>Level 1</td><td>直接コピー (1:1)</td><td>SDTMをそのままコピー</td><td>DM.AGE → ADSL.AGE</td></tr>
<tr><td>Level 2</td><td>変換 (1:1)</td><td>変換して作成</td><td>LB.LBDTC → ADLB.ADT</td></tr>
<tr><td>Level 3</td><td>集約 (N:1)</td><td>複数レコードから導出</td><td>複数EX → ADSL.TRTSDT</td></tr>
<tr><td>Level 4</td><td>複合導出 (M:N)</td><td>複数ドメインから複合条件</td><td>DM+EX+DS → ADSL.SAFFL</td></tr>
</tbody></table>

<h2>変数レベルのトレーサビリティ（ADSLの例）</h2>
<table><thead><tr><th>ADaM Variable</th><th>SDTM Source</th><th>Level</th><th>導出概要</th></tr></thead><tbody>
<tr><td>AGE</td><td>DM.AGE</td><td>Level 1</td><td>直接コピー</td></tr>
<tr><td>TRT01P</td><td>DM.ARM</td><td>Level 2</td><td>リネーム</td></tr>
<tr><td>TRTSDT</td><td>EX.EXSTDTC</td><td>Level 3</td><td>最初の投与日（MIN）</td></tr>
<tr><td>SAFFL</td><td>DM, EX</td><td>Level 4</td><td>複合条件による導出</td></tr>
</tbody></table>

<div class="info-box warning"><div class="info-box-title">ポイントまとめ</div><ul>
<li>SRCDOM, SRCVAR, SRCSEQでSDTMレコードへの直接的な追跡が可能</li>
<li>導出レベル（直接コピー、変換、集約、複合導出）に応じて記載の詳細度を調整</li>
<li>データセットレベルと変数レベルの両方でトレーサビリティを記載</li>
</ul></div>`,
            quiz: [
                { id: "q303_1", type: "choice", question: "SRCDOMは何を表しますか？", options: ["ソースのADaMデータセット", "ソースのSDTMドメイン", "ソースのTFL番号", "ソースのCRFページ"], answer: 1, explanation: "SRCDOMはソースとなるSDTMドメインを表します。" },
                { id: "q303_2", type: "choice", question: "Level 4（複合導出）の例として正しいものは？", options: ["DM.AGE → ADSL.AGE", "DM+EX+DS → ADSL.SAFFL", "LB.LBDTC → ADLB.ADT", "DM.ARM → ADSL.TRT01P"], answer: 1, explanation: "Level 4は複数SDTMドメインから複合条件で導出するケースです。" },
                { id: "q303_3", type: "choice", question: "ADSL.TRTSDTの導出レベルは？", options: ["Level 1（直接コピー）", "Level 2（変換）", "Level 3（集約）", "Level 4（複合導出）"], answer: 2, explanation: "TRTSDTは複数のEXレコードからMINで集約するため Level 3です。" },
                { id: "q303_4", type: "choice", question: "トレーサビリティの記載で推奨されるものは？", options: ["変数レベルのみ", "データセットレベルのみ", "両方のレベル", "記載不要"], answer: 2, explanation: "データセットレベルと変数レベルの両方でトレーサビリティを記載します。" },
                { id: "q303_5", type: "fill", question: "ソースレコードのシーケンス番号を記録する変数名は？（6文字）", answer: "SRCSEQ", explanation: "SRCSEQ（Source Sequence Number）です。" }
            ]
        }
    ]
};
