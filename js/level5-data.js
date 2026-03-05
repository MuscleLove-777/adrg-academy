const LEVEL5_DATA = {
    id: 5,
    title: "PMDA提出の留意点",
    icon: "🏛",
    description: "日本（PMDA）への電子データ提出、JP拡張、国際共同治験における留意点",
    modules: [
        {
            id: 501,
            title: "PMDA電子データ提出の要件",
            duration: "15分",
            content: `<h2>PMDA電子データ提出の背景</h2>
<p>PMDAは2016年10月から新医薬品の承認申請における電子データ提出を義務化しました。当初は新有効成分含有医薬品が対象でしたが、2020年4月にバイオシミラー等も対象に追加され、対象範囲が拡大しています。</p>

<h2>PMDAとFDAの要件比較</h2>
<table><thead><tr><th>項目</th><th>FDA</th><th>PMDA</th><th>差異のポイント</th></tr></thead><tbody>
<tr><td>ADRGの言語</td><td>英語</td><td>英語（日本語の補足可）</td><td>PMDAは英語を基本とするが日本語補足資料を添付可能</td></tr>
<tr><td>ファイル形式</td><td>PDF</td><td>PDF</td><td>同じ</td></tr>
<tr><td>ADaM IGバージョン</td><td>最新推奨</td><td>通知で指定</td><td>PMDAは使用可能なバージョンを通知で指定</td></tr>
<tr><td>JP拡張変数</td><td>該当なし</td><td>あり</td><td>PMDA固有の拡張変数を使用する場合がある</td></tr>
<tr><td>文字コード</td><td>UTF-8</td><td>UTF-8</td><td>同じ（日本語文字を含む場合もUTF-8）</td></tr>
<tr><td>データセットサイズ</td><td>5GB制限</td><td>同様の制限</td><td>大規模データは分割が必要</td></tr>
</tbody></table>

<h2>日本語対応の留意点</h2>
<div class="info-box tip"><div class="info-box-title">日本語関連の4つの留意点</div>
<ol>
<li><strong>データセット内の日本語</strong>: ADaMデータセットに日本語文字列は原則含めない。MedDRA-Jの日本語Termは別管理</li>
<li><strong>Define.xmlの日本語</strong>: TranslatedText要素で日本語の記載が可能。変数ラベルの日本語訳は任意</li>
<li><strong>ADRGの補足資料</strong>: 英語ADRGの補足として日本語資料を添付可能。PMDAレビューアーの理解を助ける目的</li>
<li><strong>コードリスト</strong>: CDISC Controlled Terminologyの英語版を使用。日本語訳は参考情報として記載可能</li>
</ol></div>

<h2>PMDA提出時のファイル構成</h2>
<table><thead><tr><th>ファイル</th><th>言語</th><th>必須/任意</th><th>備考</th></tr></thead><tbody>
<tr><td>ADRG（adrg.pdf）</td><td>英語</td><td>必須</td><td>PhUSEテンプレート準拠</td></tr>
<tr><td>Define.xml</td><td>英語</td><td>必須</td><td>ADaM版</td></tr>
<tr><td>ADaMデータセット</td><td>-</td><td>必須</td><td>SAS xpt形式</td></tr>
<tr><td>日本語補足資料</td><td>日本語</td><td>任意</td><td>PMDA向け補足説明</td></tr>
</tbody></table>

<div class="info-box warning"><div class="info-box-title">ポイントまとめ</div><ul>
<li>PMDAは2016年から電子データ提出を義務化しており、ADRGの提出も要求されている</li>
<li>ADRGは原則英語で作成するが、日本語の補足資料を添付できる</li>
<li>ADaM IGバージョンはPMDA通知で指定されるため、最新の通知を確認する必要がある</li>
<li>ADaMデータセットに日本語文字列は原則含めない</li>
</ul></div>`,
            quiz: [
                { id: "q501_1", type: "choice", question: "PMDAが電子データ提出を義務化した年は？", options: ["2010年", "2014年", "2016年", "2020年"], answer: 2, explanation: "PMDAは2016年10月から新医薬品の承認申請における電子データ提出を義務化しました。" },
                { id: "q501_2", type: "choice", question: "PMDA提出のADRGの言語として正しいものは？", options: ["日本語のみ", "英語のみ", "英語（日本語の補足可）", "日本語と英語の併記"], answer: 2, explanation: "ADRGは英語を基本としますが、日本語の補足資料を添付することが可能です。" },
                { id: "q501_3", type: "choice", question: "PMDAのADaM IGバージョンの指定方法は？", options: ["常に最新版を使用", "通知で指定", "スポンサーが自由に選択", "FDAと同じバージョン"], answer: 1, explanation: "PMDAは使用可能なADaM IGバージョンを通知で指定しています。" },
                { id: "q501_4", type: "choice", question: "ADaMデータセットにおける日本語文字列の扱いは？", options: ["必ず含める", "原則含めない", "日本語のみ使用", "英語と日本語を併記"], answer: 1, explanation: "ADaMデータセットに日本語文字列は原則含めず、MedDRA-Jの日本語Term等は別管理とします。" }
            ]
        },
        {
            id: 502,
            title: "JP拡張と国際共同治験",
            duration: "15分",
            content: `<h2>JP拡張（Japanese Extension）とは</h2>
<p>PMDAはCDISC標準に対して日本固有の拡張を定義しています。ADRGではこれらの拡張変数を使用する場合、その旨を明記する必要があります。</p>

<h2>ADSLのJP拡張変数例</h2>
<table><thead><tr><th>変数名</th><th>Label</th><th>説明</th></tr></thead><tbody>
<tr><td>JPRNFL</td><td>Japanese Population Flag</td><td>日本人集団フラグ</td></tr>
</tbody></table>

<h2>ADRGでのJP拡張変数の記載例</h2>
<div class="info-box success"><div class="info-box-title">記載例: ADSL - JP Extension Variables</div>
<p>本試験は国際共同治験であるため、ADSLに以下のJP拡張変数を追加している。</p>
<p><strong>JPRNFL (Japanese Population Flag):</strong></p>
<ul>
<li>日本の実施医療機関で登録された被験者を識別するフラグ</li>
<li>JPRNFL = 'Y': 日本の施設で登録</li>
<li>JPRNFL = null: 日本以外の施設で登録</li>
</ul>
<p><strong>導出ロジック:</strong><br>
IF SITEID in ('JPN001', 'JPN002', ..., 'JPN015')<br>
THEN JPRNFL = 'Y'<br>
ELSE JPRNFL = null</p>
<p>本変数は日本人部分集団解析に使用する。対応するTFL: Table 14.1.1J, Table 14.3.1J</p></div>

<h2>国際共同治験におけるADRGの構成</h2>
<table><thead><tr><th>方法</th><th>構成</th><th>メリット</th><th>デメリット</th></tr></thead><tbody>
<tr><td>方法1: 単一ADRG + JPセクション</td><td>グローバル共通セクション + Japan-Specificセクション</td><td>一つの文書で完結</td><td>文書が長くなる場合がある</td></tr>
<tr><td>方法2: グローバルADRG + 日本語補足</td><td>英語のグローバルADRG + 日本語補足資料</td><td>グローバルADRGに変更不要</td><td>複数文書の管理が必要</td></tr>
</tbody></table>

<h2>方法1の詳細構成</h2>
<div class="info-box tip"><div class="info-box-title">単一ADRG + JPセクションの構成例</div>
<p><strong>Section 1-9:</strong> グローバル共通の記載<br>
<strong>Section 10: Japan-Specific</strong></p>
<ul>
<li>JP拡張変数の説明</li>
<li>日本人部分集団解析の説明</li>
<li>PMDA固有の留意点</li>
</ul></div>

<h2>日本人部分集団解析の記載</h2>
<p>国際共同治験では、日本人部分集団解析の結果も重要です。ADRGには以下の情報を含めることが推奨されます。</p>
<ul>
<li>日本人部分集団の定義と識別方法（JPRNFL変数の説明）</li>
<li>日本人部分集団用のTFLとADaMの対応</li>
<li>グローバル解析と日本人部分集団解析の関係</li>
</ul>

<div class="info-box warning"><div class="info-box-title">ポイントまとめ</div><ul>
<li>JP拡張変数（JPRNFL等）を使用する場合はADRGに明記する</li>
<li>国際共同治験では「単一ADRG + JPセクション」または「グローバルADRG + 日本語補足」の2つの方法がある</li>
<li>日本人部分集団解析の定義と対応TFLを記載する</li>
<li>JP拡張変数の導出ロジックもADRGに詳細を記載する</li>
</ul></div>`,
            quiz: [
                { id: "q502_1", type: "choice", question: "日本人集団フラグを表すJP拡張変数は？", options: ["SAFFL", "ITTFL", "JPRNFL", "PPROTFL"], answer: 2, explanation: "JPRNFL（Japanese Population Flag）が日本人集団を識別するフラグです。" },
                { id: "q502_2", type: "choice", question: "JPRNFLの値として正しい組み合わせは？", options: ["'Y'または'N'", "'Y'またはnull", "'1'または'0'", "'TRUE'または'FALSE'"], answer: 1, explanation: "JPRNFLは'Y'（日本の施設で登録）またはnull（日本以外）の値を取ります。ADaMのフラグ変数と同じ規則です。" },
                { id: "q502_3", type: "choice", question: "国際共同治験でのADRG構成方法として正しくないものは？", options: ["単一ADRG + JPセクション", "グローバルADRG + 日本語補足", "日本語のみのADRGを別途作成", "グローバル共通セクション + Japan-Specific"], answer: 2, explanation: "ADRGは原則英語で作成します。日本語のみのADRGを作成する方法は推奨されていません。" },
                { id: "q502_4", type: "choice", question: "JP拡張変数をADRGに記載する際に含めるべき情報は？", options: ["変数の定義と導出ロジックのみ", "変数の定義、導出ロジック、対応TFL", "変数名のみ", "SASプログラムコード"], answer: 1, explanation: "JP拡張変数については定義、導出ロジック、対応するTFLを含めて記載します。" }
            ]
        },
        {
            id: 503,
            title: "PMDA提出チェックリスト",
            duration: "15分",
            content: `<h2>PMDA提出時のチェックリスト</h2>
<p>PMDA向けにADRGを提出する際は、FDA向けの一般的なチェックに加え、PMDA固有の確認項目があります。以下のチェックリストを活用してください。</p>

<table><thead><tr><th>#</th><th>チェック項目</th><th>確認内容</th></tr></thead><tbody>
<tr><td>1</td><td>ADaM IGバージョン</td><td>PMDA通知で指定されたバージョンを使用しているか</td></tr>
<tr><td>2</td><td>JP拡張変数</td><td>必要なJP拡張変数が含まれているか</td></tr>
<tr><td>3</td><td>文字コード</td><td>UTF-8で作成されているか</td></tr>
<tr><td>4</td><td>ファイル形式</td><td>PDF形式で、しおり（Bookmark）が設定されているか</td></tr>
<tr><td>5</td><td>言語</td><td>英語で記載されているか（日本語補足は別ファイル）</td></tr>
<tr><td>6</td><td>データセットサイズ</td><td>サイズ制限を超えていないか</td></tr>
<tr><td>7</td><td>Pinnacle 21</td><td>PMDA推奨バージョンで実行しているか</td></tr>
<tr><td>8</td><td>Define.xml</td><td>PMDA要件に準拠しているか</td></tr>
<tr><td>9</td><td>日本人部分集団</td><td>日本人部分集団解析の記載が十分か</td></tr>
<tr><td>10</td><td>eCTD配置</td><td>正しいモジュールに配置されているか</td></tr>
</tbody></table>

<h2>FDAとPMDAのConformanceに関する期待</h2>
<table><thead><tr><th>規制当局</th><th>Conformanceに関する要件</th></tr></thead><tbody>
<tr><td>FDA</td><td>Pinnacle 21の結果をADRGに含めること。Errorは全て解消するか合理的な理由を記載すること</td></tr>
<tr><td>PMDA</td><td>FDAと同様の基準。日本固有の拡張変数に対する追加チェックも推奨</td></tr>
</tbody></table>

<h2>eCTD配置の確認</h2>
<div class="info-box tip"><div class="info-box-title">ADRGのeCTD配置場所</div>
<p>ADRGはeCTDのModule 5に配置されます。</p>
<p>配置パス: eCTD &rarr; Module 5 &rarr; 5.3.5.1 &rarr; datasets/ 内にadrg.pdfとして配置</p>
<p>同じフォルダにdefine.xml、ADaMデータセット（xptファイル）も配置されます。</p></div>

<h2>よくある PMDA 固有の指摘事項</h2>
<table><thead><tr><th>指摘事項</th><th>対策</th></tr></thead><tbody>
<tr><td>ADaM IGバージョンが通知と異なる</td><td>最新のPMDA通知を確認し、指定バージョンを使用する</td></tr>
<tr><td>JP拡張変数の説明が不十分</td><td>導出ロジックと使用するTFLを明記する</td></tr>
<tr><td>日本人部分集団解析の記載がない</td><td>国際共同治験の場合はJPセクションを設ける</td></tr>
<tr><td>PDFのしおりが設定されていない</td><td>目次に対応したBookmarkを設定する</td></tr>
<tr><td>Pinnacle 21のバージョンが古い</td><td>PMDA推奨バージョンで再実行する</td></tr>
</tbody></table>

<div class="info-box warning"><div class="info-box-title">ポイントまとめ</div><ul>
<li>PMDA提出では10項目のチェックリストで確認することが推奨される</li>
<li>ADaM IGバージョン、JP拡張変数、日本人部分集団はPMDA固有の確認項目</li>
<li>FDAとPMDAのConformance要件は基本的に同様だが、PMDA固有の追加チェックがある</li>
<li>PDFのしおり（Bookmark）設定とeCTDの正しい配置も重要な確認項目</li>
</ul></div>`,
            quiz: [
                { id: "q503_1", type: "choice", question: "PMDA提出時にPDFに設定すべきものは？", options: ["パスワード", "しおり（Bookmark）", "電子署名", "透かし"], answer: 1, explanation: "ADRG（PDF形式）にはしおり（Bookmark）を設定し、各セクションへのナビゲーションを容易にする必要があります。" },
                { id: "q503_2", type: "choice", question: "PMDAとFDAのConformance要件の違いは？", options: ["PMDAはConformanceチェック不要", "PMDAはFDAと同様の基準に加えJP拡張変数の追加チェックを推奨", "FDAのみPinnacle 21を要求", "要件に違いはない"], answer: 1, explanation: "PMDAはFDAと同様の基準を適用しつつ、日本固有の拡張変数に対する追加チェックも推奨しています。" },
                { id: "q503_3", type: "choice", question: "ADRGのeCTD配置場所は？", options: ["Module 1", "Module 3", "Module 5", "Module 7"], answer: 2, explanation: "ADRGはeCTDのModule 5（5.3.5.1のdatasets/フォルダ内）に配置されます。" },
                { id: "q503_4", type: "choice", question: "PMDA固有の指摘事項として多いものは？", options: ["英語の文法ミス", "JP拡張変数の説明不十分", "フォントサイズの問題", "表の罫線スタイル"], answer: 1, explanation: "JP拡張変数の説明が不十分である点は、PMDA固有のよくある指摘事項です。" },
                { id: "q503_5", type: "fill", question: "日本の医薬品規制当局の略称は？（4文字）", answer: "PMDA", explanation: "PMDA（Pharmaceuticals and Medical Devices Agency）は独立行政法人 医薬品医療機器総合機構です。" }
            ]
        }
    ]
};
