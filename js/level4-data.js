const LEVEL4_DATA = {
    id: 4,
    title: "Define.xmlとの関係",
    icon: "📋",
    description: "ADRGとDefine.xmlの役割分担、VLM、整合性チェックを学ぶ",
    modules: [
        {
            id: 401,
            title: "ADRGとDefine.xmlの役割分担",
            duration: "15分",
            content: `<h2>ADRGとDefine.xmlの位置づけ</h2>
<p>ADRGとDefine.xmlはどちらもADaMデータセットに関するメタデータを提供しますが、その役割は明確に異なります。</p>

<table><thead><tr><th>特性</th><th>Define.xml</th><th>ADRG</th></tr></thead><tbody>
<tr><td>形式</td><td>構造化メタデータ（XML）</td><td>人間向け説明文書（PDF）</td></tr>
<tr><td>読者</td><td>機械可読 + レビューアー</td><td>レビューアー向け</td></tr>
<tr><td>主な内容</td><td>変数定義、コードリスト、Origin</td><td>導出ロジックの詳細、解析判断</td></tr>
<tr><td>更新頻度</td><td>データセット変更時</td><td>データセット変更時</td></tr>
</tbody></table>

<h2>記載の棲み分け</h2>
<table><thead><tr><th>情報項目</th><th>Define.xml</th><th>ADRG</th><th>備考</th></tr></thead><tbody>
<tr><td>変数の定義（Label, Type, Length）</td><td>○</td><td>-</td><td>Define.xmlがprimary</td></tr>
<tr><td>コードリスト</td><td>○</td><td>-</td><td>Define.xmlがprimary</td></tr>
<tr><td>Origin（CRF, Derived, Assigned）</td><td>○</td><td>-</td><td>Define.xmlがprimary</td></tr>
<tr><td>Computational Method（簡潔版）</td><td>○</td><td>-</td><td>Define.xmlに記載</td></tr>
<tr><td>導出ロジック（詳細版）</td><td>-</td><td>○</td><td>ADRGに詳細を記載</td></tr>
<tr><td>導出の背景・理由</td><td>-</td><td>○</td><td>ADRGのみ</td></tr>
<tr><td>VLM（Value Level Metadata）</td><td>○</td><td>○</td><td>Define.xml=定義、ADRG=説明</td></tr>
<tr><td>データセット一覧</td><td>○</td><td>○</td><td>両方に記載</td></tr>
<tr><td>解析集団の定義</td><td>△</td><td>○</td><td>ADRGに詳細を記載</td></tr>
<tr><td>TFLマッピング</td><td>-</td><td>○</td><td>ADRGのみ</td></tr>
<tr><td>Conformance結果</td><td>-</td><td>○</td><td>ADRGのみ</td></tr>
</tbody></table>

<h2>ADRGからDefine.xmlへの参照の書き方</h2>
<div class="info-box success"><div class="info-box-title">参照記載例</div>
<p>各変数の定義、ラベル、型、コードリスト等のメタデータはdefine.xml（define-adam.xml）を参照されたい。本ADRGでは、define.xmlに記載されている基本的なメタデータは繰り返さず、導出ロジックの詳細、解析上の判断、データ適合性に関する情報を中心に記載する。</p></div>

<div class="info-box warning"><div class="info-box-title">ポイントまとめ</div><ul>
<li>Define.xmlは構造化メタデータ（機械可読）、ADRGは人間向け説明文書</li>
<li>変数定義やコードリストはDefine.xmlに、導出の詳細や解析判断はADRGに記載</li>
<li>ADRGからDefine.xmlへの適切な参照により、重複記載を避ける</li>
<li>データセット一覧やVLMは両方に記載するが、記載の粒度が異なる</li>
</ul></div>`,
            quiz: [
                { id: "q401_1", type: "choice", question: "Define.xmlの主な特性として正しいものは？", options: ["人間向け説明文書", "構造化メタデータ（機械可読）", "統計解析計画書の補足", "規制当局への報告書"], answer: 1, explanation: "Define.xmlは構造化されたXML形式のメタデータであり、機械可読な形式です。" },
                { id: "q401_2", type: "choice", question: "導出ロジックの詳細版を記載すべき文書は？", options: ["Define.xml", "ADRG", "SAP", "SDRG"], answer: 1, explanation: "導出ロジックの詳細版はADRGに記載し、Define.xmlには簡潔版（Computational Method）を記載します。" },
                { id: "q401_3", type: "choice", question: "TFLマッピングを記載する文書は？", options: ["Define.xmlのみ", "ADRGのみ", "両方に記載", "SAPのみ"], answer: 1, explanation: "TFLマッピングはADRGのみに記載します。Define.xmlには含まれません。" },
                { id: "q401_4", type: "choice", question: "コードリストを定義する文書は？", options: ["ADRG", "Define.xml", "SDRG", "CSR"], answer: 1, explanation: "コードリストはDefine.xmlがprimaryとして定義を担当します。" },
                { id: "q401_5", type: "fill", question: "Define.xmlのADaM版のファイル名は？（ハイフン含む英数字）", answer: "define-adam.xml", explanation: "ADaM版のDefine.xmlはdefine-adam.xmlというファイル名で配置されます。" }
            ]
        },
        {
            id: 402,
            title: "VLM（Value Level Metadata）",
            duration: "15分",
            content: `<h2>VLMとは</h2>
<p>VLM（Value Level Metadata）は、BDS構造のデータセットにおいて、PARAMCDの値ごとに異なるメタデータ（Origin, Method等）を定義する仕組みです。</p>

<h2>VLMの概念図（ADLBの例）</h2>
<table><thead><tr><th>レベル</th><th>対象</th><th>内容</th></tr></thead><tbody>
<tr><td>Dataset Level（全PARAMCD共通）</td><td>AVAL</td><td>Analysis Value (Num, 8)</td></tr>
<tr><td>Value Level: PARAMCD = HBA1C</td><td>AVAL</td><td>Origin = CRF, Unit = %, Method: AVAL = LBSTRESN</td></tr>
<tr><td>Value Level: PARAMCD = GLUC</td><td>AVAL</td><td>Origin = CRF, Unit = mg/dL, Method: AVAL = LBSTRESN</td></tr>
<tr><td>Value Level: PARAMCD = BMI</td><td>AVAL</td><td>Origin = Derived, Unit = kg/m2, Method: AVAL = WEIGHT / (HEIGHT/100)^2</td></tr>
</tbody></table>

<h2>Define.xmlとADRGでのVLMの扱い</h2>
<table><thead><tr><th>項目</th><th>Define.xml</th><th>ADRG</th></tr></thead><tbody>
<tr><td>VLMの定義</td><td>Where Clauseで構造的に定義</td><td>考え方と特記事項を説明</td></tr>
<tr><td>Origin情報</td><td>PARAMCD別にOriginを設定</td><td>Derivedパラメータの一覧を記載</td></tr>
<tr><td>Method</td><td>Computational Methodを設定</td><td>導出ロジックの詳細を説明</td></tr>
</tbody></table>

<h2>ADRGでのVLM記載例</h2>
<div class="info-box success"><div class="info-box-title">記載例: 導出パラメータ一覧</div>
<p>ADLBにおける一部のパラメータは、SDTMのLBドメインから直接取得するのではなく、導出によって作成している。これらのパラメータについてはDefine.xmlのValue Level MetadataにOrigin = 'Derived'と記載している。</p>
<p><strong>導出パラメータ一覧:</strong></p>
<ul>
<li>PARAMCD = 'BMI': WEIGHTとHEIGHTから算出</li>
<li>PARAMCD = 'EGFR': SCR, AGE, SEXからCKD-EPI式で算出</li>
<li>PARAMCD = 'HGBA1CC': HBA1CのCDISC標準単位への変換</li>
</ul>
<p>各パラメータの導出ロジック詳細はSection 7を参照。</p></div>

<h2>Where Clauseの概念</h2>
<p>Define.xmlではWhere Clauseを使用してVLMの適用条件を指定します。例えば「PARAMCD = 'HBA1C'」のような条件で、特定のパラメータに対するメタデータを定義します。</p>

<div class="info-box warning"><div class="info-box-title">ポイントまとめ</div><ul>
<li>VLMはPARAMCDごとに異なるメタデータを管理する仕組み</li>
<li>Define.xmlではWhere Clauseで構造的に定義し、ADRGでは考え方と特記事項を説明</li>
<li>Derivedパラメータは特にADRGでの説明が重要</li>
<li>Define.xmlとADRGの両方でVLMを扱うが、記載の粒度と目的が異なる</li>
</ul></div>`,
            quiz: [
                { id: "q402_1", type: "choice", question: "VLMの正式名称は？", options: ["Variable Level Metadata", "Value Level Metadata", "Validation Level Metadata", "Version Level Metadata"], answer: 1, explanation: "VLMはValue Level Metadata（値レベルメタデータ）の略です。" },
                { id: "q402_2", type: "choice", question: "VLMが主に使用されるデータ構造は？", options: ["ADSL", "BDS", "OCCDS", "SEND"], answer: 1, explanation: "VLMはBDS（Basic Data Structure）のデータセットで、PARAMCDごとに異なるメタデータを定義するために使用されます。" },
                { id: "q402_3", type: "choice", question: "Define.xmlでVLMの適用条件を指定するものは？", options: ["Origin", "Computational Method", "Where Clause", "Code List"], answer: 2, explanation: "Define.xmlではWhere Clauseを使用してVLMの適用条件（例: PARAMCD = 'HBA1C'）を指定します。" },
                { id: "q402_4", type: "choice", question: "Origin = 'Derived'のパラメータについてADRGで記載すべきことは？", options: ["コードリストの定義", "導出ロジックの詳細", "CRFページ番号", "変数のLabel"], answer: 1, explanation: "Origin = 'Derived'のパラメータは導出によって作成されるため、ADRGで導出ロジックの詳細を説明する必要があります。" }
            ]
        },
        {
            id: 403,
            title: "Define.xmlとADRGの整合性チェック",
            duration: "15分",
            content: `<h2>整合性チェックの重要性</h2>
<p>ADRGとDefine.xmlは互いに補完する文書であるため、提出前に両者の整合性を確認することが極めて重要です。不整合があると、規制当局のレビューアーに混乱を与え、照会事項の原因となります。</p>

<h2>整合性チェック項目</h2>
<table><thead><tr><th>チェック項目</th><th>確認内容</th><th>不整合の影響</th></tr></thead><tbody>
<tr><td>データセット一覧</td><td>Define.xmlに定義された全データセットがADRGでも説明されているか</td><td>説明のないデータセットはレビュー不可</td></tr>
<tr><td>Computational Method</td><td>Define.xmlのMethodとADRGのDerivation Logicが矛盾していないか</td><td>導出ロジックの信頼性が低下</td></tr>
<tr><td>Origin</td><td>Define.xmlでDerivedとしている変数の導出がADRGに記載されているか</td><td>導出の根拠が不明</td></tr>
<tr><td>コードリスト</td><td>ADRGで参照しているコードがDefine.xmlと一致しているか</td><td>データの解釈に混乱</td></tr>
<tr><td>VLM</td><td>Define.xmlのWhere ClauseとADRGの説明が整合しているか</td><td>パラメータ別の情報が矛盾</td></tr>
</tbody></table>

<h2>チェックプロセス</h2>
<div class="info-box tip"><div class="info-box-title">推奨される整合性チェックの手順</div>
<ol>
<li><strong>Step 1: データセット一覧の照合</strong> - Define.xmlのデータセット一覧とADRGのSection 4を照合</li>
<li><strong>Step 2: 変数レベルの確認</strong> - Define.xmlでOrigin = 'Derived'の変数がADRGで説明されているか確認</li>
<li><strong>Step 3: Method比較</strong> - Define.xmlのComputational MethodとADRGの導出ロジックを比較</li>
<li><strong>Step 4: コードリスト確認</strong> - ADRGで言及されているコード値がDefine.xmlのコードリストに含まれるか確認</li>
<li><strong>Step 5: VLM確認</strong> - パラメータ別のOriginやMethodがDefine.xmlとADRGで一致するか確認</li>
</ol></div>

<h2>よくある不整合の例</h2>
<table><thead><tr><th>不整合パターン</th><th>具体例</th><th>対策</th></tr></thead><tbody>
<tr><td>データセットの漏れ</td><td>ADVSがDefine.xmlにあるがADRGに説明がない</td><td>全データセットのクロスチェックリスト作成</td></tr>
<tr><td>導出ロジックの矛盾</td><td>Define.xmlでは「最後の値」、ADRGでは「最大値」</td><td>Define.xml作成とADRG作成の同期</td></tr>
<tr><td>変数名の不一致</td><td>ADRGでAGEGR1、Define.xmlではAGEGR1N</td><td>変数名の統一管理</td></tr>
<tr><td>バージョンの不一致</td><td>ADaM IGバージョンがDefine.xmlとADRGで異なる</td><td>メタデータの一元管理</td></tr>
</tbody></table>

<h2>自動化ツールの活用</h2>
<p>整合性チェックの効率化のために、以下のようなツールや手法の活用が推奨されます。</p>
<ul>
<li>Define.xmlからデータセット一覧を自動抽出してADRGと照合</li>
<li>Computational MethodのテキストとADRGの導出ロジックを並列表示</li>
<li>Pinnacle 21のチェック結果と連動した確認</li>
</ul>

<div class="info-box warning"><div class="info-box-title">ポイントまとめ</div><ul>
<li>ADRGとDefine.xmlの整合性は提出前の必須チェック項目</li>
<li>データセット一覧、導出ロジック、Origin、コードリスト、VLMの5項目を確認</li>
<li>不整合は規制当局からの照会事項の原因となる</li>
<li>自動化ツールを活用して効率的にチェックすることが推奨される</li>
</ul></div>`,
            quiz: [
                { id: "q403_1", type: "choice", question: "ADRGとDefine.xmlの整合性チェックで最初に行うべきことは？", options: ["VLMの確認", "データセット一覧の照合", "コードリストの確認", "バージョン番号の更新"], answer: 1, explanation: "まずDefine.xmlのデータセット一覧とADRGのデータセット説明セクションを照合することが推奨されます。" },
                { id: "q403_2", type: "choice", question: "Define.xmlでOrigin = 'Derived'の変数について確認すべきことは？", options: ["CRFページ番号が正しいか", "ADRGに導出ロジックが記載されているか", "コードリストが設定されているか", "SASプログラムが提出されているか"], answer: 1, explanation: "Origin = 'Derived'の変数はADRGで導出ロジックが説明されている必要があります。" },
                { id: "q403_3", type: "choice", question: "ADRGとDefine.xmlの不整合が引き起こす問題は？", options: ["データセットのファイルサイズ増大", "規制当局からの照会事項", "eCTDフォルダ構造の変更", "SASプログラムのエラー"], answer: 1, explanation: "不整合はレビューアーに混乱を与え、規制当局からの照会事項の原因となります。" },
                { id: "q403_4", type: "choice", question: "よくある不整合パターンとして正しいものは？", options: ["PDFのページ番号のずれ", "導出ロジックの矛盾（Define.xmlとADRGで異なる記載）", "フォントサイズの違い", "目次の書式の違い"], answer: 1, explanation: "Define.xmlのComputational MethodとADRGの導出ロジックが矛盾するケースは、よくある不整合パターンの一つです。" }
            ]
        }
    ]
};
