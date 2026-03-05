const LEVEL2_DATA = {
    id: 2,
    title: "ADaMデータセット",
    icon: "📊",
    description: "ADSL、ADAE、ADLB、ADTTEなど主要ADaMデータセットの説明方法",
    modules: [
        {
            id: 201,
            title: "ADSL・ADAEの説明",
            duration: "20分",
            content: `<h2>ADaMデータセットの体系</h2>
<p>ADaMデータセットは3つの構造に分類されます。</p>
<table><thead><tr><th>構造</th><th>説明</th><th>例</th></tr></thead><tbody>
<tr><td>ADSL</td><td>被験者レベル（1レコード/被験者）</td><td>ADSL</td></tr>
<tr><td>BDS</td><td>Basic Data Structure（パラメータ単位の縦持ち）</td><td>ADLB, ADVS, ADTTE</td></tr>
<tr><td>OCCDS</td><td>Occurrence Data Structure（イベント単位）</td><td>ADAE, ADCM</td></tr>
</tbody></table>

<h2>ADSL（Subject-Level Analysis Dataset）</h2>
<p>ADSLはADaMの中核をなすデータセットで、被験者ごとに1レコードを持ちます。全てのADaMデータセットはADSLをマージして利用します。</p>
<table><thead><tr><th>変数名</th><th>Label</th><th>導出元</th><th>説明</th></tr></thead><tbody>
<tr><td>TRT01P</td><td>Planned Treatment</td><td>DM.ARM</td><td>計画投与群</td></tr>
<tr><td>TRT01A</td><td>Actual Treatment</td><td>DM.ACTARM</td><td>実投与群</td></tr>
<tr><td>SAFFL</td><td>Safety Pop Flag</td><td>EX, DM</td><td>安全性集団フラグ</td></tr>
<tr><td>ITTFL</td><td>ITT Pop Flag</td><td>DM.RANDFL</td><td>ITT集団フラグ</td></tr>
<tr><td>TRTSDT</td><td>Treatment Start Date</td><td>EX.EXSTDTC</td><td>投与開始日</td></tr>
<tr><td>TRTEDT</td><td>Treatment End Date</td><td>EX.EXENDTC</td><td>投与終了日</td></tr>
</tbody></table>

<h2>ADAE（Adverse Event Analysis Dataset）</h2>
<p>ADAEは有害事象の解析に使用するOCCDSのデータセットです。</p>
<table><thead><tr><th>変数名</th><th>導出ロジック概要</th></tr></thead><tbody>
<tr><td>TRTEMFL</td><td>ASTDT >= TRTSDT and ASTDT <= TRTEDT + 30 の場合 'Y'</td></tr>
<tr><td>ASTDT</td><td>AE.AESTDTCの不完全日付をImputationして導出</td></tr>
<tr><td>AENDT</td><td>AE.AEENDTCの不完全日付をImputationして導出</td></tr>
<tr><td>ADURN</td><td>AENDT - ASTDT + 1（有害事象の持続期間）</td></tr>
<tr><td>AOCCFL</td><td>被験者内で各PTの初回発現フラグ</td></tr>
</tbody></table>

<div class="info-box warning"><div class="info-box-title">ポイントまとめ</div><ul>
<li>ADaM は ADSL（被験者レベル）、BDS、OCCDSの3構造</li>
<li>全てのADaMデータセットはADSLとマージして使用</li>
<li>ADAEではTRTEMFL（治験薬投与下フラグ）が特に重要</li>
</ul></div>`,
            quiz: [
                { id: "q201_1", type: "choice", question: "ADSLのレコード構造は？", options: ["検査項目ごとに1レコード", "被験者ごとに1レコード", "来院ごとに1レコード", "有害事象ごとに1レコード"], answer: 1, explanation: "ADSLは被験者ごとに1レコードの構造です。" },
                { id: "q201_2", type: "choice", question: "ADAEのデータ構造は？", options: ["BDS", "ADSL", "OCCDS", "SEND"], answer: 2, explanation: "ADAEはOCCDS（Occurrence Data Structure）のデータセットです。" },
                { id: "q201_3", type: "choice", question: "TRTEMFLは何を示すフラグですか？", options: ["ベースラインレコード", "治験薬投与下の有害事象", "解析対象レコード", "プロトコル逸脱"], answer: 1, explanation: "TRTEMFLは治験薬投与下（Treatment-Emergent）の有害事象を識別するフラグです。" },
                { id: "q201_4", type: "choice", question: "ADSLの投与開始日変数の導出元は？", options: ["DM.RFSTDTC", "EX.EXSTDTC", "AE.AESTDTC", "SV.SVSTDTC"], answer: 1, explanation: "TRTSDTはEX.EXSTDTC（投与開始日）から導出されます。" },
                { id: "q201_5", type: "fill", question: "Basic Data Structureの略称は？（3文字）", answer: "BDS", explanation: "BDS（Basic Data Structure）はパラメータ単位の縦持ち構造です。" }
            ]
        },
        {
            id: 202,
            title: "ADLB・ADTTEの説明",
            duration: "20分",
            content: `<h2>ADLB（Laboratory Analysis Dataset）</h2>
<p>ADLBは臨床検査データの解析に使用するBDS（Basic Data Structure）のデータセットです。</p>

<h3>ADLBの主要導出変数</h3>
<table><thead><tr><th>変数名</th><th>Label</th><th>導出ロジック</th></tr></thead><tbody>
<tr><td>AVAL</td><td>Analysis Value</td><td>SDTM.LB.LBSTRESNをそのまま使用</td></tr>
<tr><td>BASE</td><td>Baseline Value</td><td>ABLFL = 'Y'のレコードのAVAL</td></tr>
<tr><td>CHG</td><td>Change from Baseline</td><td>AVAL - BASE</td></tr>
<tr><td>PCHG</td><td>Percent Change</td><td>(CHG / BASE) * 100</td></tr>
<tr><td>ABLFL</td><td>Baseline Record Flag</td><td>Visit Windowルールに基づく</td></tr>
<tr><td>AVISIT</td><td>Analysis Visit</td><td>Visit Windowに基づく解析用Visit</td></tr>
<tr><td>DTYPE</td><td>Derivation Type</td><td>LOCF, WOCF等のImputation手法</td></tr>
</tbody></table>

<h2>ADTTE（Time-to-Event Analysis Dataset）</h2>
<p>ADTTEは生存時間解析（Time-to-Event Analysis）に使用するBDSデータセットです。</p>

<h3>ADTTEの主要変数</h3>
<table><thead><tr><th>変数名</th><th>説明</th></tr></thead><tbody>
<tr><td>PARAMCD</td><td>イベントの種類（OS=全生存, PFS=無増悪生存等）</td></tr>
<tr><td>AVAL</td><td>イベントまでの時間（日数）</td></tr>
<tr><td>CNSR</td><td>打ち切りフラグ（0=イベント発生, 1=打ち切り）</td></tr>
<tr><td>STARTDT</td><td>起算日</td></tr>
<tr><td>ADT</td><td>イベント発生日/打ち切り日</td></tr>
<tr><td>EVNTDESC</td><td>イベントの詳細説明</td></tr>
<tr><td>CNSDTDSC</td><td>打ち切り理由</td></tr>
</tbody></table>

<h3>ADTTEのパラメータ例</h3>
<table><thead><tr><th>PARAMCD</th><th>PARAM</th><th>イベント定義</th><th>打ち切り定義</th></tr></thead><tbody>
<tr><td>OS</td><td>Overall Survival</td><td>全死因死亡</td><td>最終生存確認日</td></tr>
<tr><td>PFS</td><td>Progression Free Survival</td><td>増悪または死亡</td><td>最終腫瘍評価日</td></tr>
<tr><td>DFS</td><td>Disease Free Survival</td><td>再発または死亡</td><td>最終評価日</td></tr>
</tbody></table>

<div class="info-box warning"><div class="info-box-title">ポイントまとめ</div><ul>
<li>ADLBではBASE/CHG（ベースライン・変化量）が特に重要</li>
<li>ADTTEではCNSR（打ち切りフラグ）の定義が解析結果に直接影響</li>
<li>各データセットの説明には目的、レコード構造、キー変数、ソースドメイン、主要導出変数を含める</li>
</ul></div>`,
            quiz: [
                { id: "q202_1", type: "choice", question: "ADLBのCHGの計算式は？", options: ["AVAL + BASE", "AVAL - BASE", "AVAL * BASE", "AVAL / BASE"], answer: 1, explanation: "CHG（Change from Baseline）= AVAL - BASEです。" },
                { id: "q202_2", type: "choice", question: "ADTTEのCNSR=0は何を意味しますか？", options: ["打ち切り", "イベント発生", "欠測", "ベースライン"], answer: 1, explanation: "CNSR=0はイベント発生、CNSR=1は打ち切りを意味します。" },
                { id: "q202_3", type: "choice", question: "OSの正式名称は？", options: ["Overall Safety", "Overall Survival", "Overall Score", "Original Study"], answer: 1, explanation: "OS（Overall Survival）は全生存期間です。" },
                { id: "q202_4", type: "choice", question: "ADLBのABLFLは何を示しますか？", options: ["解析対象フラグ", "ベースラインレコードフラグ", "治験薬投与下フラグ", "初回発現フラグ"], answer: 1, explanation: "ABLFL（Baseline Record Flag）はベースラインレコードを識別するフラグです。" },
                { id: "q202_5", type: "fill", question: "Last Observation Carried Forwardの略称は？（4文字）", answer: "LOCF", explanation: "LOCF（Last Observation Carried Forward）は欠測値の補完手法の一つです。" }
            ]
        },
        {
            id: 203,
            title: "Derivation Logicの記載",
            duration: "20分",
            content: `<h2>導出ロジック記載の3原則</h2>
<div class="info-box tip"><div class="info-box-title">3つの原則</div>
<ol><li><strong>明確性</strong>: 曖昧さのない表現、全条件分岐を網羅、正確な変数名</li>
<li><strong>追跡可能性</strong>: ソース変数を明記、中間導出ステップも記載、Define.xmlと整合</li>
<li><strong>再現可能性</strong>: 独立した第三者が同じ結果を導出できるレベルで記述</li></ol></div>

<h2>Population Flagsの導出ロジック</h2>
<div class="info-box success"><div class="info-box-title">SAFFL（Safety Population Flag）</div>
<p>定義: 治験薬を少なくとも1回投与された被験者<br>
IF EXドメインに1レコード以上存在する (EXDOSE > 0)<br>
THEN SAFFL = 'Y'<br>
ELSE SAFFL = 'N'</p></div>

<h2>Date Imputation（日付補完）ルール</h2>
<table><thead><tr><th>状況</th><th>不完全要素</th><th>Imputationルール（開始日）</th><th>DTF</th></tr></thead><tbody>
<tr><td>AE開始日</td><td>日が不明</td><td>1日</td><td>D</td></tr>
<tr><td>AE開始日</td><td>月が不明</td><td>1月1日</td><td>M</td></tr>
<tr><td>AE終了日</td><td>日が不明</td><td>月末日</td><td>D</td></tr>
<tr><td>AE終了日</td><td>月が不明</td><td>12月31日</td><td>M</td></tr>
</tbody></table>

<h2>ベースラインの定義（ABLFL）</h2>
<div class="info-box tip"><div class="info-box-title">ベースライン選択ルール</div>
<ol><li>対象期間: 投与開始日（TRTSDT）以前の全ての観測値</li>
<li>選択: 投与開始日以前の最後の非欠測の観測値をベースラインとする</li>
<li>投与開始日当日の投与前の値がある場合はその値を優先</li>
<li>Unscheduled Visitの値もベースライン候補に含める</li></ol></div>

<h2>Visit Windowの定義</h2>
<table><thead><tr><th>AVISIT</th><th>Target Day</th><th>Window (Days)</th><th>AVISITN</th></tr></thead><tbody>
<tr><td>Baseline</td><td>1</td><td>-7 to 1</td><td>0</td></tr>
<tr><td>Week 4</td><td>29</td><td>15 to 42</td><td>4</td></tr>
<tr><td>Week 8</td><td>57</td><td>43 to 70</td><td>8</td></tr>
<tr><td>Week 12</td><td>85</td><td>71 to 98</td><td>12</td></tr>
<tr><td>Week 24</td><td>169</td><td>155 to 183</td><td>24</td></tr>
</tbody></table>

<div class="info-box warning"><div class="info-box-title">ポイントまとめ</div><ul>
<li>導出ロジックは「明確性」「追跡可能性」「再現可能性」の3原則に従う</li>
<li>Population Flagsは全条件をIF-THEN形式で明記</li>
<li>Date Imputationは保守的な方針で設定</li>
<li>ベースラインの選択ルールと例外を漏れなく記載</li>
</ul></div>`,
            quiz: [
                { id: "q203_1", type: "choice", question: "導出ロジック記載の3原則に含まれないものは？", options: ["明確性", "追跡可能性", "機密性", "再現可能性"], answer: 2, explanation: "3原則は明確性・追跡可能性・再現可能性です。" },
                { id: "q203_2", type: "choice", question: "AE開始日の日が不明な場合のImputationルールは？", options: ["15日", "1日", "月末日", "空白のまま"], answer: 1, explanation: "保守的に最も早い日（1日）でImputeします。" },
                { id: "q203_3", type: "choice", question: "DTF='M'は何を意味しますか？", options: ["日のみ補完", "月を含む補完", "年を含む補完", "時刻の補完"], answer: 1, explanation: "DTF='M'は月（Month）を含む補完が行われたことを示します。" },
                { id: "q203_4", type: "choice", question: "ベースラインの対象期間は？", options: ["投与開始日以降", "投与開始日以前", "全期間", "投与終了後"], answer: 1, explanation: "投与開始日（TRTSDT）以前の観測値がベースラインの候補です。" },
                { id: "q203_5", type: "fill", question: "Date Imputation Flagの変数名は？（3文字）", answer: "DTF", explanation: "DTF（Date Imputation Flag）が日付補完を記録する変数です。" }
            ]
        }
    ]
};
