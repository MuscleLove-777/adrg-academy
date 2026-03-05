const LEVEL1_DATA = {
    id: 1,
    title: "ADRG基礎",
    icon: "📄",
    description: "ADRGの定義・目的・全体構造・Analysis Overviewを学ぶ",
    modules: [
        {
            id: 101,
            title: "ADRGとは何か",
            duration: "15分",
            content: `<h2>ADRGの定義</h2><p>ADRG（Analysis Data Reviewer's Guide）は、規制当局のレビューアーがADaM（Analysis Data Model）に基づく解析データセットを効率的に理解・レビューするためのガイド文書です。提出者がどのようにデータを導出し、解析に利用したかを体系的に説明します。</p>

<h2>ADRGの目的</h2>
<table><thead><tr><th>目的</th><th>説明</th></tr></thead><tbody>
<tr><td>レビュー効率化</td><td>レビューアーがADaMデータセットの構造と導出ロジックを迅速に理解</td></tr>
<tr><td>トレーサビリティの確保</td><td>SDTM→ADaM→TFLの紐付けを明確にする</td></tr>
<tr><td>品質の証明</td><td>データ適合性（Conformance）の結果と対応方針を示す</td></tr>
<tr><td>透明性の確保</td><td>複雑な導出ロジックや解析上の判断を文書化する</td></tr>
</tbody></table>

<h2>SDRGとの違い</h2>
<table><thead><tr><th>比較項目</th><th>SDRG</th><th>ADRG</th></tr></thead><tbody>
<tr><td>対象データ</td><td>SDTM</td><td>ADaM</td></tr>
<tr><td>主な内容</td><td>収集データの構造・変換</td><td>解析データの導出・解析方法</td></tr>
<tr><td>参照文書</td><td>Annotated CRF, Protocol</td><td>SAP, Define.xml (ADaM)</td></tr>
<tr><td>変換方向</td><td>Raw → SDTM</td><td>SDTM → ADaM</td></tr>
</tbody></table>

<h2>eCTD上の配置</h2>
<div class="info-box tip"><div class="info-box-title">配置パス</div><p>eCTD → Module 5 → 5.3.5.1 → datasets/, define.xml, sdrg.pdf, <strong>adrg.pdf</strong></p></div>

<h2>PhUSEのテンプレートと標準</h2>
<p>PhUSEのCSSワーキンググループがADRGのテンプレートを公開しています。このテンプレートは業界標準として広く採用されています。</p>

<div class="info-box warning"><div class="info-box-title">ポイントまとめ</div><ul>
<li>ADRGはADaMデータセットのレビューアー向けガイド文書</li>
<li>SDRGがSDTMを対象とするのに対し、ADRGはADaMを対象</li>
<li>FDA/PMDAともにADRGの提出を推奨・要求</li>
<li>PhUSEテンプレートが業界標準</li>
</ul></div>`,
            quiz: [
                { id: "q101_1", type: "choice", question: "ADRGの正式名称は？", options: ["Analysis Data Review Guide", "Analysis Data Reviewer's Guide", "ADaM Data Reviewer's Guide", "Analysis Dataset Review Guide"], answer: 1, explanation: "ADRGはAnalysis Data Reviewer's Guideの略です。" },
                { id: "q101_2", type: "choice", question: "ADRGが対象とするデータモデルは？", options: ["SDTM", "ADaM", "SEND", "CDASH"], answer: 1, explanation: "ADRGはADaM（Analysis Data Model）データセットを対象とします。" },
                { id: "q101_3", type: "choice", question: "ADRGの参照文書として重要なものは？", options: ["Annotated CRF", "SAP（統計解析計画書）", "治験届", "副作用報告書"], answer: 1, explanation: "ADRGはSAP（Statistical Analysis Plan）を参照文書として使用します。" },
                { id: "q101_4", type: "choice", question: "ADRGのテンプレートを公開している団体は？", options: ["FDA", "PhUSE", "ICH", "EMA"], answer: 1, explanation: "PhUSEのCSSワーキンググループがADRGのテンプレートを公開しています。" },
                { id: "q101_5", type: "fill", question: "ADRGのeCTDでの提出ファイル名は？（拡張子含む）", answer: "adrg.pdf", explanation: "ADRGはadrg.pdfとしてeCTDに配置されます。" }
            ]
        },
        {
            id: 102,
            title: "ADRGの全体構造",
            duration: "15分",
            content: `<h2>ADRG全体構造マップ</h2>
<table><thead><tr><th>#</th><th>セクション名</th><th>必須/推奨</th><th>内容概要</th></tr></thead><tbody>
<tr><td>1</td><td>Title Page</td><td>必須</td><td>試験番号、スポンサー名、作成日</td></tr>
<tr><td>2</td><td>Table of Contents</td><td>必須</td><td>目次</td></tr>
<tr><td>3</td><td>Introduction</td><td>必須</td><td>目的、略語一覧</td></tr>
<tr><td>4</td><td>Study Description</td><td>必須</td><td>試験概要、試験デザイン</td></tr>
<tr><td>5</td><td>Analysis Considerations</td><td>必須</td><td>解析集団、主要エンドポイント</td></tr>
<tr><td>6</td><td>Analysis Datasets</td><td>必須</td><td>各ADaMデータセットの説明</td></tr>
<tr><td>7</td><td>Derivation Details</td><td>必須</td><td>導出ロジックの詳細</td></tr>
<tr><td>8</td><td>Traceability</td><td>必須</td><td>TFL-ADaM-SDTMの追跡</td></tr>
<tr><td>9</td><td>Data Conformance</td><td>必須</td><td>バリデーション結果</td></tr>
<tr><td>10</td><td>Define.xml Reference</td><td>推奨</td><td>Define.xmlとの役割分担</td></tr>
<tr><td>11</td><td>Appendices</td><td>推奨</td><td>ソフトウェア情報、変更履歴</td></tr>
</tbody></table>

<h2>SDRGとの構造対比</h2>
<p>SDRGとADRGは類似の構造を持ちますが、ADRGには解析固有のセクション（Analysis Considerations、Derivation Details、Traceability）が追加されています。</p>

<h2>PhUSE推奨テンプレートの原則</h2>
<ol><li><strong>簡潔性</strong>: レビューアーが必要な情報に素早くアクセスできること</li>
<li><strong>網羅性</strong>: 全てのADaMデータセットと導出ロジックをカバー</li>
<li><strong>トレーサビリティ</strong>: SDTM→ADaM→TFLの追跡が可能</li>
<li><strong>整合性</strong>: Define.xml、SAPと矛盾しないこと</li></ol>

<div class="info-box warning"><div class="info-box-title">ポイントまとめ</div><ul>
<li>ADRGは9-11のセクションで構成</li>
<li>Analysis Considerations、Derivation Detailsは解析固有のセクション</li>
<li>簡潔性・網羅性・トレーサビリティ・整合性が4つの原則</li>
</ul></div>`,
            quiz: [
                { id: "q102_1", type: "choice", question: "ADRGでSDRGにない解析固有のセクションは？", options: ["Study Description", "Derivation Details", "Introduction", "Appendices"], answer: 1, explanation: "Derivation Details（導出ロジックの詳細）はADRG固有のセクションです。" },
                { id: "q102_2", type: "choice", question: "PhUSE推奨テンプレートの4原則に含まれないものは？", options: ["簡潔性", "網羅性", "複雑性", "整合性"], answer: 2, explanation: "4原則は簡潔性・網羅性・トレーサビリティ・整合性です。複雑性は含まれません。" },
                { id: "q102_3", type: "choice", question: "ADRGが整合性を保つべき文書は？", options: ["広報資料", "Define.xmlとSAP", "学会発表スライド", "営業資料"], answer: 1, explanation: "ADRGはDefine.xml、SAP（統計解析計画書）と矛盾しないことが求められます。" },
                { id: "q102_4", type: "choice", question: "ADRGの必須セクション数は？", options: ["7つ", "9つ", "11つ", "13つ"], answer: 1, explanation: "ADRGの必須セクションは9つです（推奨セクションが2つ追加）。" },
                { id: "q102_5", type: "fill", question: "TFL-ADaM-SDTMの追跡を表す英語の概念は？（英語1語）", answer: "Traceability", explanation: "Traceability（トレーサビリティ）はデータの追跡可能性を意味します。" }
            ]
        },
        {
            id: 103,
            title: "Analysis Overviewセクション",
            duration: "20分",
            content: `<h2>Analysis Overviewの役割</h2>
<p>Analysis Overviewセクションは、レビューアーが解析の全体像を把握するための最初の入口です。試験の目的、解析方針、主要な結果への道筋を簡潔に記述します。</p>

<h2>SAPとの関係</h2>
<p>ADRGはSAPの内容を繰り返すものではありません。SAPで定義された解析方針のうち、ADaMデータセットの構造と導出に直接関係する部分を要約して記載します。</p>
<table><thead><tr><th>項目</th><th>SAP</th><th>ADRG</th></tr></thead><tbody>
<tr><td>解析手法の詳細</td><td>詳細に記載</td><td>概要のみ参照</td></tr>
<tr><td>解析集団の定義</td><td>完全な定義</td><td>定義の要約 + ADaMでの実装</td></tr>
<tr><td>エンドポイント</td><td>統計的な定義</td><td>ADaM変数との対応</td></tr>
<tr><td>欠測値の扱い</td><td>統計的手法</td><td>ADaMでの実装（LOCF等）</td></tr>
</tbody></table>

<h2>エンドポイントとADaMの対応表</h2>
<table><thead><tr><th>エンドポイント</th><th>種別</th><th>ADaM Dataset</th><th>Key Variable</th><th>評価時点</th></tr></thead><tbody>
<tr><td>HbA1cのベースラインからの変化量</td><td>Primary</td><td>ADLB</td><td>CHG (PARAMCD='HBA1C')</td><td>Week 24</td></tr>
<tr><td>空腹時血糖値の変化量</td><td>Secondary</td><td>ADLB</td><td>CHG (PARAMCD='GLUC')</td><td>Week 24</td></tr>
<tr><td>有害事象の発現割合</td><td>Safety</td><td>ADAE</td><td>TRTEMFL = 'Y'</td><td>全期間</td></tr>
<tr><td>全生存期間</td><td>Exploratory</td><td>ADTTE</td><td>AVAL (PARAMCD='OS')</td><td>-</td></tr>
</tbody></table>

<h2>解析集団（Analysis Populations）</h2>
<table><thead><tr><th>解析集団</th><th>ADSL変数</th><th>定義</th></tr></thead><tbody>
<tr><td>ITT</td><td>ITTFL = 'Y'</td><td>ランダム化された全被験者</td></tr>
<tr><td>Modified ITT</td><td>MITTFL = 'Y'</td><td>ITTかつ1回以上投与</td></tr>
<tr><td>Per Protocol</td><td>PPROTFL = 'Y'</td><td>重大な逸脱のない被験者</td></tr>
<tr><td>Safety</td><td>SAFFL = 'Y'</td><td>1回以上治験薬投与</td></tr>
</tbody></table>

<div class="info-box warning"><div class="info-box-title">ポイントまとめ</div><ul>
<li>SAPの内容を繰り返すのではなく、ADaMとの関連に焦点を当てる</li>
<li>エンドポイントとADaMデータセット・変数の対応を明確に記載</li>
<li>解析集団の定義とADSLのPopulation Flagの対応を明示</li>
</ul></div>`,
            quiz: [
                { id: "q103_1", type: "choice", question: "ADRGとSAPの関係として正しいものは？", options: ["ADRGはSAPの内容を全て繰り返す", "ADRGはSAPのADaM関連部分のみ要約", "ADRGとSAPは無関係", "SAPはADRGの一部"], answer: 1, explanation: "ADRGはSAPで定義された解析方針のうちADaM関連部分を要約して記載します。" },
                { id: "q103_2", type: "choice", question: "Safety集団を識別するADSL変数は？", options: ["ITTFL", "SAFFL", "PPROTFL", "RANDFL"], answer: 1, explanation: "Safety集団はSAFFL = 'Y'により識別されます。" },
                { id: "q103_3", type: "choice", question: "ITT集団の定義として正しいものは？", options: ["治験薬を投与された全被験者", "ランダム化された全被験者", "プロトコルを遵守した被験者", "試験を完了した被験者"], answer: 1, explanation: "ITT（Intent-to-Treat）集団はランダム化された全ての被験者と定義されます。" },
                { id: "q103_4", type: "choice", question: "ADLBのCHG変数は何を表しますか？", options: ["ベースライン値", "ベースラインからの変化量", "解析用Visit", "解析フラグ"], answer: 1, explanation: "CHGはChange from Baseline（ベースラインからの変化量）を表します。" },
                { id: "q103_5", type: "fill", question: "Statistical Analysis Planの略称は？（3文字）", answer: "SAP", explanation: "SAP（Statistical Analysis Plan）は統計解析計画書です。" }
            ]
        }
    ]
};
