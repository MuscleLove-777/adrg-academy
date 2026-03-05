const LEVEL6_DATA = {
    id: 6,
    title: "レビューと実践テンプレート",
    icon: "🎓",
    description: "ADRGレビューチェックリスト、よくある指摘事項、実践テンプレートの活用",
    modules: [
        {
            id: 601,
            title: "ADRGレビュープロセス",
            duration: "15分",
            content: `<h2>レビュープロセスの全体像</h2>
<p>ADRGのレビューは段階的なプロセスで行われます。各段階で異なる視点からの確認を行い、品質を確保します。</p>

<table><thead><tr><th>Phase</th><th>レビュー名</th><th>担当者</th><th>確認の観点</th></tr></thead><tbody>
<tr><td>Phase 1</td><td>自己レビュー</td><td>作成者</td><td>記載の網羅性、誤字脱字、論理的整合性</td></tr>
<tr><td>Phase 2</td><td>ピアレビュー</td><td>同僚のプログラマー/統計家</td><td>技術的正確性、導出ロジックの妥当性</td></tr>
<tr><td>Phase 3</td><td>QCレビュー</td><td>品質管理チーム</td><td>標準準拠、フォーマット、整合性</td></tr>
<tr><td>Phase 4</td><td>メディカルレビュー</td><td>医学専門家</td><td>臨床的妥当性の確認</td></tr>
<tr><td>Phase 5</td><td>最終承認</td><td>プロジェクトリーダー/統計責任者</td><td>全体の品質と提出可否の判断</td></tr>
</tbody></table>

<h2>総合チェックリスト: 全体構造・形式（カテゴリA）</h2>
<table><thead><tr><th>#</th><th>チェック項目</th></tr></thead><tbody>
<tr><td>A-1</td><td>表紙に試験番号、スポンサー名、作成日、バージョンが記載されているか</td></tr>
<tr><td>A-2</td><td>目次が正しく、全セクションへのリンクが機能するか</td></tr>
<tr><td>A-3</td><td>ページ番号が正しく振られているか</td></tr>
<tr><td>A-4</td><td>PDFのしおり（Bookmark）が設定されているか</td></tr>
<tr><td>A-5</td><td>PhUSEテンプレートの推奨構成に準拠しているか</td></tr>
<tr><td>A-6</td><td>略語一覧に使用した全略語が含まれているか</td></tr>
</tbody></table>

<h2>チェックリスト: Analysis Overview（カテゴリB）</h2>
<table><thead><tr><th>#</th><th>チェック項目</th></tr></thead><tbody>
<tr><td>B-1</td><td>試験目的が正確に記載されているか</td></tr>
<tr><td>B-2</td><td>解析集団の定義がSAPと一致しているか</td></tr>
<tr><td>B-3</td><td>Population Flagsと解析集団の対応が明記されているか</td></tr>
<tr><td>B-4</td><td>主要エンドポイントとADaMデータセットの対応が記載されているか</td></tr>
<tr><td>B-5</td><td>解析期間の定義が明確か</td></tr>
</tbody></table>

<h2>レビュー効率化のヒント</h2>
<div class="info-box tip"><div class="info-box-title">効率的なレビューのポイント</div>
<ol>
<li><strong>チェックリストの活用</strong>: 印刷して使用し、複数レビューアーで分担</li>
<li><strong>Define.xmlとの自動比較</strong>: ツールを使ってADRGとDefine.xmlの整合性を自動チェック</li>
<li><strong>テンプレートの標準化</strong>: 社内標準テンプレートを整備し、過去のADRGを参考にする</li>
<li><strong>段階的レビュー</strong>: 構造 → 内容 → 整合性の順でレビュー</li>
</ol></div>

<div class="info-box warning"><div class="info-box-title">ポイントまとめ</div><ul>
<li>レビューは5段階（自己→ピア→QC→メディカル→最終承認）で実施</li>
<li>チェックリストは全体構造・形式とAnalysis Overviewの2カテゴリで構成</li>
<li>段階的レビュー（構造→内容→整合性）が効率的</li>
<li>複数レビューアーで分担し、各段階で異なる視点から確認する</li>
</ul></div>`,
            quiz: [
                { id: "q601_1", type: "choice", question: "ADRGレビューの最初の段階は？", options: ["ピアレビュー", "自己レビュー", "QCレビュー", "メディカルレビュー"], answer: 1, explanation: "ADRGレビューの最初の段階は作成者による自己レビュー（Phase 1）です。" },
                { id: "q601_2", type: "choice", question: "臨床的妥当性を確認するレビュー段階は？", options: ["自己レビュー", "ピアレビュー", "QCレビュー", "メディカルレビュー"], answer: 3, explanation: "メディカルレビュー（Phase 4）では医学専門家が臨床的妥当性を確認します。" },
                { id: "q601_3", type: "choice", question: "チェックリストA-4の確認項目は？", options: ["ページ番号", "PDFのしおり（Bookmark）", "目次のリンク", "略語一覧"], answer: 1, explanation: "A-4はPDFのしおり（Bookmark）が設定されているかを確認する項目です。" },
                { id: "q601_4", type: "choice", question: "効率的なレビューの順序として推奨されるものは？", options: ["内容→構造→整合性", "整合性→構造→内容", "構造→内容→整合性", "内容→整合性→構造"], answer: 2, explanation: "構造→内容→整合性の順でレビューすることが効率的とされています。" }
            ]
        },
        {
            id: 602,
            title: "よくある指摘事項と対策",
            duration: "20分",
            content: `<h2>チェックリスト: Analysis Datasets（カテゴリC）</h2>
<table><thead><tr><th>#</th><th>チェック項目</th></tr></thead><tbody>
<tr><td>C-1</td><td>全てのADaMデータセットが説明されているか</td></tr>
<tr><td>C-2</td><td>各データセットのレコード構造が明記されているか</td></tr>
<tr><td>C-3</td><td>SDTMソースドメインが記載されているか</td></tr>
<tr><td>C-4</td><td>主要導出変数のロジックが記載されているか</td></tr>
<tr><td>C-5</td><td>データセット一覧がDefine.xmlと一致しているか</td></tr>
</tbody></table>

<h2>チェックリスト: Derivation Logic（カテゴリD）</h2>
<table><thead><tr><th>#</th><th>チェック項目</th></tr></thead><tbody>
<tr><td>D-1</td><td>全てのPopulation Flagsの導出ロジックが記載されているか</td></tr>
<tr><td>D-2</td><td>Analysis Flags（ANL01FL等）の条件が明確か</td></tr>
<tr><td>D-3</td><td>ベースラインの定義が明確か</td></tr>
<tr><td>D-4</td><td>Date Imputationルールが記載されているか</td></tr>
<tr><td>D-5</td><td>Visit Windowの定義と優先ルールが記載されているか</td></tr>
<tr><td>D-6</td><td>複雑な導出のロジックに曖昧さがないか</td></tr>
<tr><td>D-7</td><td>導出ロジックがDefine.xmlのComputational Methodと矛盾していないか</td></tr>
</tbody></table>

<h2>チェックリスト: Traceability / Conformance / 整合性（カテゴリE-G）</h2>
<table><thead><tr><th>#</th><th>チェック項目</th></tr></thead><tbody>
<tr><td>E-1</td><td>TFL-ADaMマッピング表が完備されているか</td></tr>
<tr><td>E-2</td><td>全TFLに使用ADaMデータセットと主要変数が明記されているか</td></tr>
<tr><td>F-1</td><td>Pinnacle 21のバージョンが記載されているか</td></tr>
<tr><td>F-2</td><td>全データセットのError/Warning/Noticeのサマリーがあるか</td></tr>
<tr><td>F-3</td><td>全てのErrorが解消されているか</td></tr>
<tr><td>F-4</td><td>残存Warningに対する対応方針が記載されているか</td></tr>
<tr><td>G-1</td><td>ADRGの内容がSAPと矛盾していないか</td></tr>
<tr><td>G-2</td><td>ADRGの内容がDefine.xmlと矛盾していないか</td></tr>
<tr><td>G-3</td><td>ADRGの内容がCSRと矛盾していないか</td></tr>
</tbody></table>

<h2>よくある指摘事項と対策</h2>
<table><thead><tr><th>#</th><th>指摘事項</th><th>対策</th></tr></thead><tbody>
<tr><td>1</td><td>Population Flagの導出条件が不明確</td><td>全条件をIF-THEN形式で記載。エッジケースも明記</td></tr>
<tr><td>2</td><td>ベースラインの定義に曖昧さがある</td><td>選択ルール、優先ルール、例外を全て記載</td></tr>
<tr><td>3</td><td>Date Imputationルールが未記載</td><td>全てのケース（日不明、月不明、年不明）の処理を記載</td></tr>
<tr><td>4</td><td>TFLとADaMの対応が不完全</td><td>全TFLに対するマッピング表を作成</td></tr>
<tr><td>5</td><td>Pinnacle 21のWarningに説明がない</td><td>全Warningに対応方針を記載</td></tr>
<tr><td>6</td><td>Define.xmlとの不整合</td><td>提出前にクロスチェックを実施</td></tr>
<tr><td>7</td><td>Visit Windowの定義が不明確</td><td>Windowの範囲と重複時の優先ルールを表で明示</td></tr>
<tr><td>8</td><td>ADTTEの打ち切り定義が曖昧</td><td>各パラメータのイベント定義・打ち切り定義を表で整理</td></tr>
<tr><td>9</td><td>ソフトウェア情報が古い</td><td>実際に使用したバージョンを確認して記載</td></tr>
<tr><td>10</td><td>ADRGのバージョン管理が不十分</td><td>変更履歴（Change History）を付録に記載</td></tr>
</tbody></table>

<div class="info-box warning"><div class="info-box-title">ポイントまとめ</div><ul>
<li>チェックリストはC（Datasets）、D（Derivation）、E（Traceability）、F（Conformance）、G（整合性）の5カテゴリで構成</li>
<li>最も多い指摘はPopulation Flagsの不明確さ、ベースライン定義の曖昧さ、Date Imputationの未記載</li>
<li>全Warningへの個別対応方針を記載することが重要</li>
<li>SAP、Define.xml、CSRとの矛盾がないことを提出前に確認する</li>
</ul></div>`,
            quiz: [
                { id: "q602_1", type: "choice", question: "最も多いADRGの指摘事項は？", options: ["ソフトウェア情報の記載漏れ", "Population Flagの導出条件が不明確", "PDFのフォーマットエラー", "略語一覧の不備"], answer: 1, explanation: "Population Flagの導出条件が不明確であることは、最もよくある指摘事項の一つです。" },
                { id: "q602_2", type: "choice", question: "Date Imputationルールの記載で網羅すべきケースは？", options: ["日不明のみ", "日不明と月不明", "日不明、月不明、年不明", "記載不要"], answer: 2, explanation: "全てのケース（日不明、月不明、年不明）の処理を記載する必要があります。" },
                { id: "q602_3", type: "choice", question: "ADRGの整合性を確認すべき文書の組み合わせは？", options: ["SAP、Define.xml、CSR", "SAP、CRF、Protocol", "Define.xml、SDRG、CRF", "CSR、Protocol、ICF"], answer: 0, explanation: "ADRGはSAP、Define.xml、CSRの3つの文書との整合性を確認する必要があります。" },
                { id: "q602_4", type: "choice", question: "Pinnacle 21のWarningへの対応として適切なものは？", options: ["全て無視する", "全Warningに対応方針を記載", "Warningの数だけ報告", "Warningは記載不要"], answer: 1, explanation: "残存する全てのWarningに対して合理的な理由と対応方針を個別に記載します。" },
                { id: "q602_5", type: "fill", question: "ADRGの変更履歴を記載するセクション名は？（英語2語）", answer: "Change History", explanation: "変更履歴はChange Historyとして付録に記載することが推奨されます。" }
            ]
        },
        {
            id: 603,
            title: "良い記載例・悪い記載例",
            duration: "20分",
            content: `<h2>記載品質の基準</h2>
<table><thead><tr><th>項目</th><th>良い記載の特徴</th><th>悪い記載の特徴</th></tr></thead><tbody>
<tr><td>Population Flags</td><td>IF-THEN形式で全条件を明記、例外も記載</td><td>「薬を飲んだ人」のような曖昧な記述</td></tr>
<tr><td>ベースライン</td><td>選択ルール、優先順位、例外を全て記載</td><td>「最後の値」のみ</td></tr>
<tr><td>Date Imputation</td><td>各ケースのImputationルールを表で整理</td><td>記載なし</td></tr>
<tr><td>TFLマッピング</td><td>全TFLに対する完全なマッピング表</td><td>「ADaMを使用して作成」のみ</td></tr>
<tr><td>Conformance</td><td>全Warningへの個別対応方針を記載</td><td>「問題なし」のみ</td></tr>
<tr><td>データセット説明</td><td>目的、構造、キー変数、ソース、導出の全項目を記載</td><td>データセット名のみの記載</td></tr>
</tbody></table>

<h2>Introductionセクション</h2>
<div class="info-box success"><div class="info-box-title">良い例</div>
<p><strong>1. INTRODUCTION</strong></p>
<p><strong>1.1 Purpose</strong></p>
<p>This Analysis Data Reviewer's Guide (ADRG) provides the reviewer with context for the analysis datasets submitted in support of the New Drug Application (NDA) for [Drug Name] for the treatment of [Indication].</p>
<p>This document describes the analysis datasets created in ADaM format based on the CDISC Analysis Data Model Implementation Guide Version 1.3 (ADaM IG v1.3).</p>
<p>The Statistical Analysis Plan (SAP, document number: SAP-XXXX-001, Version 2.0, dated DD-MMM-YYYY) should be consulted for full details of the planned analyses.</p></div>

<div class="info-box danger"><div class="info-box-title">悪い例</div>
<p>1. Introduction<br>This document is the ADRG for study XXXX.</p>
<p><strong>問題点:</strong> 目的が不明確、参照文書の情報がない、略語一覧がない。</p></div>

<h2>Analysis Datasetsセクション</h2>
<div class="info-box success"><div class="info-box-title">良い例</div>
<p><strong>4.2 ADSL (Subject-Level Analysis Dataset)</strong></p>
<p><strong>Purpose:</strong> ADSL contains one record per subject with subject-level variables used across all efficacy and safety analyses.</p>
<p><strong>Record Structure:</strong> One record per subject (USUBJID)</p>
<p><strong>Number of Subjects:</strong> 450 (as per final database lock)</p>
<p><strong>Key Variables:</strong> STUDYID, USUBJID, TRT01P, TRT01A, SAFFL, ITTFL, PPROTFL, TRTSDT, TRTEDT, AGE, SEX, RACE</p>
<p><strong>Source SDTM Domains:</strong> DM, DS, EX, SV, MH, SC</p></div>

<div class="info-box danger"><div class="info-box-title">悪い例</div>
<p>4.2 ADSL<br>ADSL is the subject level dataset. It has demographic variables and flags.</p>
<p><strong>問題点:</strong> レコード構造の説明なし、キー変数の記載なし、ソースドメインの記載なし、導出変数の説明なし。</p></div>

<h2>Population Flagsセクション</h2>
<div class="info-box success"><div class="info-box-title">良い例</div>
<p><strong>5.1.1 Safety Population Flag (SAFFL)</strong></p>
<p><strong>Definition:</strong> All subjects who received at least one dose of the study drug.</p>
<p><strong>Derivation Logic:</strong></p>
<p>Step 1: IF at least one record exists in EX where EXDOSE > 0 AND EXSTDTC is not missing THEN SAFFL = 'Y' ELSE SAFFL = 'N'</p>
<p>Step 2: Manual overrides - Subject SUBJ-123 was set to SAFFL = 'N' despite having an EX record, per Medical Monitor decision (subject received wrong drug). This override is documented in the trial note TN-2024-005.</p>
<p><strong>Validation:</strong> SAFFL = 'Y': 425 subjects, SAFFL = 'N': 25 subjects, Total: 450 subjects</p></div>

<div class="info-box danger"><div class="info-box-title">悪い例</div>
<p>5.1.1 SAFFL<br>SAFFL is Y if the subject took the drug.</p>
<p><strong>問題点:</strong> 正確な条件が記載されていない、ソース変数がない、例外処理の記載がない。</p></div>

<div class="info-box warning"><div class="info-box-title">ポイントまとめ</div><ul>
<li>良い記載は「明確・具体的・追跡可能」、悪い記載は「曖昧・情報不足・根拠なし」</li>
<li>IntroductionにはADRGの目的、参照文書、略語一覧を含める</li>
<li>データセット説明には目的、レコード構造、キー変数、ソースドメインを含める</li>
<li>Population Flagsは全条件をIF-THEN形式で記載し、例外も明記する</li>
</ul></div>`,
            quiz: [
                { id: "q603_1", type: "choice", question: "良い記載の3つの特徴は？", options: ["簡潔・省略・効率的", "明確・具体的・追跡可能", "詳細・長文・網羅的", "形式的・標準的・簡易的"], answer: 1, explanation: "良い記載は「明確・具体的・追跡可能」であることが特徴です。" },
                { id: "q603_2", type: "choice", question: "Introductionセクションに含めるべき情報は？", options: ["解析結果の要約", "目的、参照文書、略語一覧", "全データセットの変数一覧", "Pinnacle 21の結果"], answer: 1, explanation: "Introductionには目的（Purpose）、参照文書（SAPへの参照等）、略語一覧を含めます。" },
                { id: "q603_3", type: "choice", question: "SAFFLの良い記載例に含まれるべき要素は？", options: ["定義のみ", "定義と導出ロジックと例外処理", "変数名のみ", "SASプログラムコード"], answer: 1, explanation: "SAFFLの記載には定義（Definition）、導出ロジック（Derivation Logic）、例外処理（Manual overrides）を含めます。" },
                { id: "q603_4", type: "choice", question: "データセット説明で「悪い例」とされる記載パターンは？", options: ["レコード構造、キー変数、ソースドメインを含む記載", "データセット名のみの簡潔な記載", "導出ロジックの詳細を含む記載", "SDTMソースを含む記載"], answer: 1, explanation: "データセット名のみの記載は、レコード構造やキー変数の情報が欠如しており「悪い例」とされます。" }
            ]
        },
        {
            id: 604,
            title: "実践テンプレートの活用",
            duration: "15分",
            content: `<h2>ADRGテンプレート全体構成</h2>
<table><thead><tr><th>セクション</th><th>タイトル</th><th>内容</th></tr></thead><tbody>
<tr><td>1</td><td>Introduction</td><td>Purpose, Acronyms and Abbreviations</td></tr>
<tr><td>2</td><td>Study Description</td><td>Protocol Overview, Study Design</td></tr>
<tr><td>3</td><td>Analysis Considerations</td><td>Analysis Populations, Primary Endpoints, Statistical Methods Overview</td></tr>
<tr><td>4</td><td>Analysis Datasets</td><td>Dataset Overview, ADSL, ADAE, ADLB, ADVS, ADTTE</td></tr>
<tr><td>5</td><td>Derivation Details</td><td>Population Flags, Analysis Flags, Baseline Definitions, Date Imputation, Visit Windowing</td></tr>
<tr><td>6</td><td>Analysis Results Traceability</td><td>TFL to ADaM Mapping, ADaM to SDTM Traceability</td></tr>
<tr><td>7</td><td>Data Conformance</td><td>Conformance Rules Applied, Validation Results, Issue Resolution</td></tr>
<tr><td>8</td><td>Software Information</td><td>使用ソフトウェアのバージョン情報</td></tr>
<tr><td>App A</td><td>Change History</td><td>変更履歴</td></tr>
<tr><td>App B</td><td>Additional Derivation Details</td><td>追加の導出ロジック詳細</td></tr>
</tbody></table>

<h2>表紙の記載項目</h2>
<div class="info-box success"><div class="info-box-title">表紙テンプレート</div>
<table><thead><tr><th>項目</th><th>記載例</th></tr></thead><tbody>
<tr><td>Study Number</td><td>ABC-2024-001</td></tr>
<tr><td>Study Title</td><td>A Randomized, Double-Blind, Placebo-Controlled Study...</td></tr>
<tr><td>Sponsor</td><td>ABC Pharmaceutical Co., Ltd.</td></tr>
<tr><td>Document Version</td><td>1.0</td></tr>
<tr><td>Date</td><td>DD-MMM-YYYY</td></tr>
<tr><td>Author</td><td>[Author Name], Statistical Programmer</td></tr>
<tr><td>Reviewer</td><td>[Reviewer Name], Lead Statistician</td></tr>
<tr><td>ADaM IG Version</td><td>1.3</td></tr>
<tr><td>SDTM IG Version</td><td>3.4</td></tr>
<tr><td>Conformance Tool</td><td>Pinnacle 21 Enterprise v4.1.1</td></tr>
<tr><td>Software</td><td>SAS 9.4 (TS1M7)</td></tr>
</tbody></table></div>

<h2>Data Conformanceセクションの記載テンプレート</h2>
<div class="info-box success"><div class="info-box-title">良い記載例</div>
<p><strong>7. DATA CONFORMANCE</strong></p>
<p><strong>7.1 Conformance Rules Applied</strong></p>
<ul>
<li>ADaM Implementation Guide v1.3</li>
<li>ADaM Validation Checks v3.0.0</li>
<li>Pinnacle 21 Enterprise Version 4.1.1</li>
<li>Executed on: DD-MMM-YYYY</li>
</ul>
<p><strong>7.2 Validation Results Summary</strong>（データセット別にError/Warning/Notice数をサマリー表で記載）</p>
<p><strong>7.3 Warning Details and Resolution</strong>（各Warningに対して、Message、Resolution、影響の説明を記載）</p></div>

<h2>テンプレート活用のベストプラクティス</h2>
<div class="info-box tip"><div class="info-box-title">実務でのヒント</div>
<ol>
<li><strong>社内テンプレートの整備</strong>: PhUSEテンプレートをベースにカスタマイズ。プロジェクトタイプ別（Phase I, Phase II/III, 国際共同治験等）のテンプレートを用意</li>
<li><strong>過去のADRGの参照</strong>: 同一疾患領域の過去ADRGを参考にする。規制当局から指摘を受けた点を反映する</li>
<li><strong>早期着手</strong>: ADRGはADaM作成と並行して着手する。データベースロック前に構造部分を完成させる</li>
<li><strong>バージョン管理</strong>: 変更履歴を付録に記載する。主要な変更には理由を明記する</li>
<li><strong>自動化の活用</strong>: Define.xmlからデータセット一覧を自動生成。Pinnacle 21結果のサマリーを自動反映。TFLマッピング表の自動生成</li>
</ol></div>

<h2>ADRGの着手タイミング</h2>
<table><thead><tr><th>タイミング</th><th>作業内容</th></tr></thead><tbody>
<tr><td>SAP確定後</td><td>テンプレート選択、全体構成の決定、Section 1-3の下書き</td></tr>
<tr><td>ADaM仕様書作成時</td><td>Section 4-5の下書き（データセット説明、導出ロジック）</td></tr>
<tr><td>ADaM作成完了時</td><td>Section 6-7の作成（トレーサビリティ、Conformance結果）</td></tr>
<tr><td>DBロック後</td><td>被験者数等の確定情報を反映、最終レビュー</td></tr>
</tbody></table>

<div class="info-box warning"><div class="info-box-title">ポイントまとめ</div><ul>
<li>ADRGは8セクション + 付録の構成が標準的</li>
<li>表紙には試験情報、作成者情報、使用した標準のバージョンを明記</li>
<li>社内テンプレートの整備と過去ADRGの参照が効率的な作成に有効</li>
<li>ADRGはADaM作成と並行して早期に着手することが推奨される</li>
<li>自動化ツールを活用してDefine.xmlとの整合性確保やサマリー生成を効率化</li>
</ul></div>`,
            quiz: [
                { id: "q604_1", type: "choice", question: "ADRGの表紙に含めるべき情報は？", options: ["解析結果のサマリー", "試験番号、スポンサー名、ADaM IGバージョン", "全データセットの変数一覧", "TFLマッピング表"], answer: 1, explanation: "表紙には試験番号、スポンサー名、作成日、バージョン、ADaM IGバージョン等の基本情報を記載します。" },
                { id: "q604_2", type: "choice", question: "ADRGの着手タイミングとして最も早いものは？", options: ["DBロック後", "ADaM作成完了時", "SAP確定後", "TFL作成完了後"], answer: 2, explanation: "SAP確定後にテンプレート選択と全体構成の決定を行い、早期にADRG作成に着手します。" },
                { id: "q604_3", type: "choice", question: "テンプレート活用のベストプラクティスとして適切でないものは？", options: ["PhUSEテンプレートをベースにカスタマイズ", "過去のADRGを参考にする", "DBロック後に一から作成を開始する", "自動化ツールを活用する"], answer: 2, explanation: "DBロック後に一から作成を開始するのは非効率です。ADaM作成と並行して早期に着手することが推奨されます。" },
                { id: "q604_4", type: "choice", question: "Data ConformanceセクションのValidation Results Summaryに含めるべき情報は？", options: ["プログラマーの評価コメント", "データセット別のError/Warning/Notice数", "使用したPCのスペック", "レビュー所要時間"], answer: 1, explanation: "Validation Results Summaryにはデータセット別のError/Warning/Notice数をサマリー表で記載します。" },
                { id: "q604_5", type: "fill", question: "ADRGのテンプレートを公開しているワーキンググループの略称は？（4文字）", answer: "PhUSE", explanation: "PhUSE（Pharmaceutical Users Software Exchange）のCSSワーキンググループがADRGのテンプレートを公開しています。" }
            ]
        }
    ]
};
