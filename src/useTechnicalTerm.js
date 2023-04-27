import { useState } from 'react'

export const useTechnicalTerm = () => {
  const [technicalTerm, setTechnicalTerm] = useState([
    // term[0]が代表名として大きく表示される。
    {
      term: ['RAGE', 'AGE受容体'],
      explanation:
        'RAGEはAGE（終末糖化産物）やHMGB1の受容体で、活性化されることによって1.増殖、2.活性酸素生成、3.血管新生、4.細胞運動を促進する。糖尿病/メタボ実験マウスで発癌前の大腸粘膜で増大していて、がん細胞の増殖・がんの進展の要因として重視されている。',
    },
    {
      term: ['病理解剖'],
      explanation:
        '臨床側の疑問点（clinical question）に答える、例えば死因の究明などを目的とした解剖。その他に系統解剖（網羅的）・法医解剖が解剖にはある、',
    },
    {
      term: ['Next-generation sequence', 'NGS'],
      explanation:
        '次世代シーケンサー。遺伝子を網羅的にしらべることによって、がんなどに対する個別化医療の選択肢に貢献している。',
    },
    {
      term: ['核異型'],
      explanation:
        '細胞一つ一つの核の大きさ（核の腫大）の異型を指す。核の割合(N/C比)が高くなってくる→がん',
    },
    {
      term: ['構造異型'],
      explanation: '一つ一つの腺管のような、構造的な異型を指す',
    },
    {
      term: ['N/C比'],
      explanation:
        'Nuclear（核）と Cytoplasm（細胞）の比。核の腫大（N/C比が高い）ことはがん診断の指標となる。核が１層でなく2層～3層にわたって見えているような状態になることもある。',
    },
    {
      term: ['分化度'],
      explanation:
        '分化が高い⇔分化が低い。高分化・中分化・低分化であらわすこともある。本来1本であるはずの腺管が分岐していたりすると分化が低いといわれ、がんが疑われる。',
    },
    {
      term: ['上皮内腫瘍'],
      explanation:
        '上皮の中にとどまっている、進行度としては最も軽いがん。浸潤なし・転移なし。一番治療がしやすい。',
    },
    {
      term: ['TNM分類'],
      explanation:
        'がんの進行度をあらわす指標。T因子(深達度)・N因子(リンパ節転移)・M因子(遠隔転移)の3つの観点で分類される。',
    },
    {
      term: ['免疫染色'],
      explanation:
        '腫瘍の陽的となりえるような特定のタンパク質に特異的に結合する免疫を用いた染色。通常そのタンパク質が発現していれば茶色に染色される。新しい腫瘍マーカーの探索や、効果的ながん治療法の選択に利用される。',
    },
    {
      term: ['特殊染色'],
      explanation:
        '免疫組織化学とは異なる手法で染色され、色素・粘液用物質・沈着物などの同定に用いられる。Azan染色（線維が青く見える）・Congo red染色（アミロイドで赤く染まる）・Elaslica van Gieson(EVG)染色（血管の弾性繊維を染める）・PAS染色（粘液を染める）・ベルリンブルー染色（鉄を染め慢性的に血流が弱い場合は沈着した鉄が青く染まる）・チールネルゼン染色（特殊な菌体を染める）など。',
    },
    {
      term: ['浮腫', 'edema'],
      explanation:
        '組織間隙に液体が過剰に貯留すること。肺水腫・脳水腫・皮下浮腫が代表的。炎症や熱傷時に血管浸透性が亢進し静脈やリンパ管の閉塞による局所性浮腫を生じることがあり、心不全・肝硬変・ネフローゼ症候群などで体液や電解質代謝に異常をきたしたときに全身性浮腫を生じる。原因としては静脈圧の上昇（心機能・血管通過障害）・リンパ管の閉塞（外科手術後・悪性腫瘍・フィラリア）・膠質浸透圧の低下（肝硬変→肝臓・ネフローゼ症候群→腎臓）・血管透過性の亢進（ヒスタミン・ロイコトリエン・熱傷・アレルギーなど）・塩分過剰摂取（水分過剰摂取）が挙げられる。',
    },
    {
      term: ['脳浮腫'],
      explanation:
        '代表的な浮腫のひとつ。浮腫が生じると水が溜まってすかすかな層が発生する。',
    },
    {
      term: ['肺水腫'],
      explanation:
        '左心不全・ショックなどによる代表的な浮腫のひとつ。肺胞内に水が溜まるので重くなる。本来空気がある肺胞部分に浸出液（血漿成分）が溜まっているように組織像はみえる。赤血球が溜まっているわけではないので暗赤色ではなくピンク色のように見える。レントゲン画像では真っ黒→真っ白に映る。',
    },
    {
      term: ['心不全細胞'],
      explanation:
        '肺浮腫でみられる、ヘモジデリン（赤血球がうっ血し変質した成分）を貪食したマクロファージ。茶色に見える。',
    },
    {
      term: ['充血', 'うっ血'],
      explanation:
        '生理的な（正常な範囲の）血液の流入を充血といい、対して心臓に戻る静脈で異常に血液が流入するとうっ血と呼ばれる。悪化し細胞内まで出血すると水腫と呼ばれる。代表的なうっ血として、肺うっ血（←左心不全）・肝うっ血（←右心不全）慢性的な肝うっ血はうっ血性肝硬変を引きおこし、肝臓全体が暗赤色に変色し、中心静脈周囲実質が真っ赤・暗赤色に変化する。',
    },
    {
      term: ['脾臓うっ血'],
      explanation:
        'もともと色は暗いので変色は目立たないが、うっ血すると全体的に肥大（10cm以上）し、白脾髄が拡大する',
    },
    {
      term: ['点状出血'],
      explanation: '毛細血管や細動脈の破綻による血液の流出。',
    },
    {
      term: ['血腫'],
      explanation: '軟部組織への出血',
    },
    {
      term: ['くも膜下出血'],
      explanation:
        '脳と硬膜の間のくも膜への出血。外傷や高度な動脈硬化などで脳内の血管が破綻する。脳は頭蓋骨で封鎖されているので周辺組織を圧迫しやすい。',
    },
    {
      term: ['大動脈瘤破裂'],
      explanation:
        '正常より圧力に弱い血管や新生血管が先天的などである場合に血管が破綻して出血する。',
    },
    {
      term: ['白血病'],
      explanation:
        '白血病では産生する血球のバランスがおかしくなり、血小板が減少することによって出血傾向（→循環障害）を示す。',
    },
    {
      term: ['vWF', 'フォンウィルブランドファクター'],
      explanation:
        '血液凝固に対して促進性の役割をもつ内皮細胞由来のサイトカイン。',
    },
    {
      term: ['血友病'],
      explanation:
        '凝固因子の8(→血友病A)9(→血友病B)番が先天的に欠損している遺伝子疾患。男性に多い疾患（X染色体上）。出血による（ヘモグロビン由来の）ヘモジデリン沈着がみられ、慢性的に出血のリスクにさらされる。',
    },
    {
      term: ['血栓'],
      explanation:
        '血小板・フィブリン・細胞成分などを含む凝固した血液塊で、内皮細胞の障害・血液の変化・不整脈などが原因で引き起こされる。脳梗塞・肺梗塞（エコノミークラス症候群）を引き起こす。赤色血栓（赤血球由来）・白色血栓（フィブリン由来）と、その混合の混合血栓に分類され、見た目で区別される。長期の血栓の場合は再疎通され血流が維持されている場合がある。',
    },
    {
      term: ['塞栓'],
      explanation:
        '血液に不溶性の物質が、血管の内腔を閉塞すること。主に細胞成分由来の血栓だけでなく、気体・細菌・脂肪（骨髄由来の油滴）・腫瘍（肺に多い）・羊水・コレステリン（動脈硬化由来コレステロールのような紡錘形）・骨髄（骨折後や手術後に骨髄由来の組織が詰まる）・寄生虫（日本住血吸虫など）由来の塞栓も含まれる。',
    },
    {
      term: ['梗塞'],
      explanation:
        '肉眼的に出血性・貧血性に分類され、臓器によって出血壊死・凝固壊死・融解壊死しやすさが異なる。例えば二重動脈支配下にある肺では出血壊死が多く境界が明瞭、側副血流のない終動脈の支配下にある腸管では出血性壊死が多く変色したり穿孔を引き起こし感染症を引き起こす場合がある。一方脾臓は貧血性の凝固壊死が多く白色を示す。脳実質は梗塞周辺の細胞が液体に置き換わり融解壊死を起こし嚢胞となる場合が多い。',
    },
    {
      term: ['二重動脈支配'],
      explanation:
        '肝臓（門脈・肝動脈）、肺（肺動脈・気管支動脈）が該当する。出血性梗塞を起こしやすい。',
    },
    {
      term: [
        '播種性血管内凝固症候群',
        'disseminated intravascular coagulation',
        'DIC',
      ],
      explanation:
        '前身の微小血管内にフィブリン血栓が生じ、血小板や凝固因子が急激に消費され、線溶系が活性化する。悪性腫瘍（前骨髄性白血病・固形癌）や重篤な感染症、ショック、火傷・外傷、薬剤、妊娠中毒などによって、全身に出血傾向が起こる。複数の臓器に微小フィブリン血栓（腎糸球体・肺）・巣状壊死（微小梗塞）・出血（点状出血・斑状出血など）がみられるようになる。',
    },
    {
      term: ['循環血液量減少性ショック'],
      explanation:
        '主家kつ・高度の火傷等によって、循環血液量減少を引き起こし末梢血管虚脱→虚血→アシドーシスを引き起こす。血液量の3分の1以上を喪失することで急性出血を引き起こす。',
    },
    {
      term: ['血液分布異常性ショック'],
      explanation:
        'アナフィラキシーショック（蜂や造影剤に対するアレルギー反応による全身浮腫→呼吸困難）・神経原性ショック（脊髄損傷などの外傷などにより徐脈がおこり心拍出量低下を伴うショック）、敗血症性ショック（初期は高心拍出量→warm shockだが晩期になると心拍出量が減りcold shockとなり救命困難となる。ショックの終末期になると多臓器不全を引き起こす）',
    },
    {
      term: ['心原性ショック'],
      explanation:
        '心筋梗塞等により心臓のポンプ機能が傷害され低心拍出量→左心不全・肺水腫・アシドーシスを引き起こす。左心室の4割以上の障害によって発生する。',
    },
    {
      term: ['閉塞性ショック'],
      explanation:
        '心タンポナーデ・緊張性気胸などにより心臓が拡張できない状況となり静脈還流量の減少→左室の充満不全→心拍出量低下を引き起こすショック。',
    },
    {
      term: ['敗血症'],
      explanation:
        '感染症により血中で菌が増殖している状態で、好中球が蓄積して化膿性脾炎がみられる。敗血症性ショックでは、組織灌流の低下を伴うため、高熱＆頻脈＆低血圧＆高乳酸値（細胞単位で酸化的リン酸化が不足し解糖系由来の乳酸が増加するため）＆末梢血管の拡張がみられる。通常グラム陰性の内毒素血症によって引き起こされ、シトロバクター陽性血液培養（血液中で増殖するかどうか）が重要な検査となる。',
    },
    {
      term: ['転写', 'RNAポリメラーゼ'],
      explanation:
        'DNAの二本鎖がほどけた転写開始地点から、RNAポリメラーゼはアンチセンス鎖の3’→5’方向に転写を行う。チミンはウラシルとして合成される。',
    },
    {
      term: ['tRNA', 'トランスファーRNA'],
      explanation: 'mRNAで指定されたコードに対する',
    },
    {
      term: ['一塩基置換'],
      explanation:
        '塩基が1個分別の塩基に置き換わる変化。サイレント変異（タンパク質に変化なし）・ミスセンス変異（アミノ酸が一つ置換）・ナンセンス変異（終止コドンに置き換わりタンパク質に大きな変化をもたらす）の3種類に大別される。',
    },
    {
      term: ['SNIP', 'Single Nucleotide Polymorphism'],
      explanation:
        'DNA塩基配列の点変異。同種個体間で多様性があり、1%以上の変異を指す。酒に強い体質・弱い体質など。',
    },
    {
      term: ['ショック', '5P'],
      explanation:
        'ショック症状として5P(蒼白pallor・虚脱prostration・冷汗perspiration・脈拍蝕知不能pulselessness・呼吸不全pulmonary deficiency)が挙げられる。ショックが起こると肺（肺水腫・フィブリンの硝子膜形成）・腎臓（副腎皮質壊死・骨髄巨核球）・腎臓（皮質の明瞭化；壊死して蒼白な皮質・出血して暗赤色の髄質）・肝臓（肝小葉中心性壊死）・心臓（線維に垂直な収縮帯壊死）など、多臓器にわたって壊死が出てくるのが特徴。',
    },
    {
      term: ['ダウン症候群'],
      explanation:
        '第21番染色体が1本多い染色体異常。減数分裂時の不分離が原因。',
    },
    {
      term: ['チミンダイマー'],
      explanation:
        '紫外線によって塩基が変化して、隣同士のチミンが変異を起こして2量体を形成してしまう遺伝子変異。',
    },
    {
      term: ['ベンゾピレン'],
      explanation:
        '肝臓でCYP1A1によってジオールエポキシドに変換され、発がん性をもつ。',
    },
    {
      term: ['周辺塩基配列シグニチャー'],
      explanation:
        '一塩基置換などの変異について、置換された塩基だけでなくその塩基の周辺の塩基についてクラスターに分けて解析を行うことによって、がんの原因をしらべる。',
    },
    {
      term: ['ミスマッチ修復', 'MMR'],
      explanation:
        '主にDNA複製中の新生鎖の修復。MutSαがミスマッチを探して、MutLαとともに異常部分の一本鎖を切断する。',
    },
    {
      term: ['塩基除去修復', 'BER'],
      explanation:
        'ROSや脱プリン化などの軽い（DNAらせん構造にゆがみが生じない程度の）内因性の損傷を修復する。異常塩基をピンポイントで除去して、修復する。',
    },
    {
      term: ['ヌクレオチド除去修復', 'NER'],
      explanation:
        '紫外線や発がん物質などの外因性由来の重い（DNAらせん構造に歪みがある場合に）損傷がある場合に生じる1本鎖修復機構。XPEなどがDNA損傷を認識すると、XPAなどと複合体を形成し、広範囲にDNA鎖を切断し修復合成・再連結を行う。XPA・XPB・XPC・XPD・XPEなどの遺伝子によって行われ、関連疾患としてXeroderma pigmuntosum;XP（色素性乾皮症）がある。',
    },
    {
      term: ['相同組み換え修復', 'HR'],
      explanation:
        'DNA二本鎖の切断が生じたときに、正常の配列（姉妹染色分体）をもとに修復する機構で、姉妹染色分体をもとに修復するので非常に正確。姉妹染色分体が存在するS期・G2期でおこる。',
    },
    {
      term: ['非相同末端連結', 'NHEJ'],
      explanation:
        'DNA二本鎖の切断が生じたときに、ガイドRNA（目的の場所を認識するRNA）とCas9タンパク質（DNAを切断する酵素）によって行われるおおざっぱな修復。変異が生じやすいので、ゲノム編集技術に利用されている。',
    },
    {
      term: ['クロマチン再構成複合体'],
      explanation:
        'ATPを用いてヌクレオソームがずれるのを触媒して、凝縮したクロマチンを緩める。',
    },
    {
      term: ['リジン'],
      explanation:
        '一文字表記：Kのアミノ酸。ヒストン修飾（アセチル化・メチル化・ユビキチン化など）の対象となる。H3K9...H3の9番目のリジンK',
    },
    {
      term: ['ヒストンアセチル化'],
      explanation:
        'エピジェネティクスのひとつ。HAT（ヒストンアセチル転移酵素）によりヒストンアセチル化されると、転写が促進され、HDAC（ヒストン脱アセチル化酵素）により脱アセチル化されると、転写が抑制される。アセチル化ヒストンにはBRDが接触し転写を促進する。',
    },
    {
      term: ['DNAメチル化'],
      explanation:
        'CpG配列のシトシンがメチル化される。DNAメチル基転移酵素DNMTによって行われ、通常DNA複製とともにメチル化状態はDNMT1によって維持され、de novoメチル化も行われるため、細胞の分化状況を反映していると考えられている。高度にメチル化されている領域では転写が制限される。CG配列が高密度に存在している箇所をCpGアイランド呼ぶが、この部分ではDNAメチル化は殆どされていない。',
    },
    {
      term: ['クロピドグレル'],
      explanation:
        '血小板凝集阻害として使われる薬剤。ADP（→血小板凝集作用）受容体拮抗薬として作用する。',
    },
    {
      term: ['心筋梗塞'],
      explanation:
        '冠動脈に血栓が起きると心筋梗塞となる。広範囲の心筋梗塞の場合は心原性ショックを引き起こす。',
    },
    {
      term: ['ヘモジデリン'],
      explanation:
        'うっ血した臓器で沈着する、ヘモグロビン由来の物質。例えば肺浮腫では臓器が茶色く染まる。',
    },
    {
      term: ['肺梗塞'],
      explanation:
        '肺の血管が梗塞し、肺胞内へ出血する。肺水腫と異なり血球成分も肺胞内で見られるようになる。',
    },
    {
      term: ['出血性ショック'],
      explanation:
        '比較的早期の場合はカテコールアミンやADH（抗利尿ホルモン）の血中濃度が上昇するが、進行すると末梢血管が虚脱・虚血状態になりアシドーシス・LDHが増加する。',
    },
    {
      term: ['先天性代謝異常症'],
      explanation:
        'アミノ酸や金属・ビタミンの代謝、ミトコンドリア、リソソームに先天的な異常をもつ疾患の総称。新生児マススクリーニングによる検査が実施されている。',
    },
    {
      term: ['フェニルケトン尿症', 'phenylketonuria'],
      explanation:
        'L-フェニルアラニン→チロシンに変換する酵素：フェニルアラニンヒドロキシラーゼPHAが先天的に欠損しているアミノ酸代謝異常症。12番染色体に位置するPAH遺伝子のミスセンス変異（常染色体劣性遺伝病）。精神発達遅延・尿などのネズミ臭・けいれん発作など。',
    },
    {
      term: ['Fabry病'],
      explanation:
        'ライソゾームに存在する加水分解酵素のひとつであるα-ガラクトシダーゼA活性の低下によって蓄積が生じるライソソーム病。ミスセンス変異によるX性染色体劣性遺伝病。症状として四肢末端痛・低汗症・無汗症→20代になると腎障害・心肥大・角膜混濁・脳血管障害を生じる。女性はヘテロでも発症することがある。',
    },
    {
      term: ['糖原病', 'glycogen storage disease'],
      explanation:
        '肝臓（主にⅠ型）・筋肉などにグリコーゲンが異常に蓄積する、糖質代謝異常症。Ⅰ型は常染色体劣性遺伝病。対症療法しか存在しない。',
    },
    {
      term: ['鎌状赤血球貧血症'],
      explanation:
        'アフリカで多い、赤血球が鎌状になる常染色体優性遺伝病。ヘモグロビンを構成するβグロビンの146個目のアミノ酸の6番目のアミノ酸がグルタミン酸→バリンに置換されることで発症する。変異をヘテロで持つ場合はマラリア耐性を持つ。',
    },
    {
      term: ['ダウン症候群'],
      explanation: '21番染色体のトリソミー。',
    },
    {
      term: ['ターナー症候群'],
      explanation: '女性の性染色体がXのモノソミーとなる染色体異常。',
    },
    {
      term: ['クラインフェルター症候群'],
      explanation: '男性の性染色体がXXYとなる染色体異常。',
    },
    {
      term: ['上皮性腫瘍', '癌腫'],
      explanation:
        'がんは上皮由来→上皮性腫瘍（皮膚癌・大腸癌・胃癌・腎癌など） OR 上皮由来ではない→非上皮性腫瘍（神経膠芽腫・骨肉腫・急性骨髄性白血病・平滑筋肉腫・過形成性星細胞腫・悪性リンパ腫など）に分類される。癌腫は遺伝子変異が多く、肉腫は染色体突然変異が多いとされている。',
    },
    {
      term: ['脈管内進入'],
      explanation:
        '悪性度が増した、がんが浸潤し転移する過程で重要となる要素。侵入後の循環腫瘍細胞CTCは条件が悪く、細胞死（→アノイキス）しやすい。',
    },
    {
      term: ['上皮間葉転換', 'EMT', 'Epithelial mesenchymal transition'],
      explanation:
        '上皮由来細胞が間葉細胞としての性質をもつこと。Eカドヘリンの発現↓かつビメンチンの発現↑によって運動性・浸潤性が増す。EMT調節遺伝子として、Snail1,Slug,Twistなどが挙げられる。転移後の細胞は再び上皮細胞としての機能を持つMETが起こる場合がある。',
    },
    {
      term: [
        'マトリックス・メタロプロテアーゼ',
        'Matrix metalloprotease',
        'MMP',
      ],
      explanation:
        '分泌型と膜型に分類される。がん細胞にとってさらに深い浸潤のための通路を形成する。pro-MMP2がMT1-MMP,TIMP2と複合体を形成することによって活性化される。正常細胞では間質の維持・正常組織の増殖・血管新生の役割を果たしている。',
    },
    {
      term: ['血行性転移'],
      explanation:
        'がん細胞が静脈を介して転移する。消化器がん→肝臓、骨肉腫→肺転移が良く知られる。',
    },
    {
      term: ['リンパ性転移'],
      explanation:
        'がん細胞がリンパ管を介して転移する。乳がん→リンパ節が良く知られる。',
    },
    {
      term: ['播種性転移'],
      explanation:
        '胸腔・腹腔・骨髄腔を介して、がん細胞が散布される。3次元的に大きくなるため、非常に予後不良となる。',
    },
    {
      term: ['多段階発癌'],
      explanation:
        '正常上皮が段階を経てがん細胞へと変異していく流れ。腺腫→癌となる場合と新規に発癌する場合がある。特に膵癌で顕著。',
    },
    {
      term: ['シスプラチン', 'CDDP'],
      explanation:
        '増殖細胞の増殖をターゲットにしている、最初期の抗がん剤（白金製剤）。髪の毛などにも影響が出る。',
    },
    {
      term: ['Gatekeeper genes'],
      explanation:
        '腫瘍がもつ遺伝子変異のうち、がん遺伝子・がん抑制遺伝子を指す。',
    },
    {
      term: ['Caretaker genes'],
      explanation:
        'ミューテーター遺伝子を指す。腫瘍が持っている遺伝子変異のひとつ。',
    },
    {
      term: ['がん遺伝子', 'oncogenes'],
      explanation:
        '活性化によって癌を促進する遺伝子の総称。細胞増殖にアクセルに働いたり、細胞死を回避する。',
    },
    {
      term: ['RAS'],
      explanation:
        'シグナル遺伝子群の上流に位置するタンパク質で、RASに点突然変異をもつことによって膵がん(90%)・大腸がん・肺がん・AMLを発がんするといわれている。',
    },
    {
      term: ['慢性骨髄性白血病', 'CML'],
      explanation:
        '染色体の構造変化（9-22染色体間の転座）により、フィラデルフィア染色体が生じて、強いチロシンキナーゼ活性をもつ融合タンパク質が合成されることによって、白血病を発症する。分子標的薬イマチニブにより、適応すれば5年生存率は9割を超えるようになった。',
    },
    {
      term: [
        'がん抑制遺伝子',
        'tumor suppressor genes',
        'P53',
        'p16',
        'Rb',
        'APC',
      ],
      explanation:
        '細胞増殖にブレーキに働いたり、細胞死を誘導する、正常な細胞ではがんを抑制する遺伝子の総称。転写抑制(P53,Rb)・細胞周期制御(p16)・ユビキチン化(APC)・DNA修復(BRCA1,BRCA2)などを制御している。両アレルに変異が入ってがん化する理論→2hit theoryは今では否定されていて、ヘテロ接合性が遺伝子組み換えにより消失してがん抑制遺伝子が不活性化されるLost Of Hetero/LOHという理論が現在は主流。',
    },
    {
      term: ['CDK', 'サイクリン依存性キナーゼ', 'Cyclin-dependent kinase'],
      explanation:
        'サイクリンとCDKの複合体が細胞周期を制御している。サイクリンD-CDK4/6がR点（G0期）を制御する。',
    },
    {
      term: ['ネクローシス'],
      explanation:
        'アポトーシスとは異なる、プログラムされていない想定外の細胞死。',
    },
    {
      term: ['ミューテーター遺伝子'],
      explanation:
        'ミスマッチ修復、DNA切断修復機構などの遺伝子修復に関わる遺伝子。Caretamer geneとも呼ばれ、この遺伝子が変異することによって発がんしやすくなる。MLH1・MLH2の変異/μサテライト不安定性MSI→lynch症候群・大腸がん、BRCA1/BRCA2の変異→乳がん・卵巣がんなど',
    },
    {
      term: ['PARP阻害剤'],
      explanation:
        'PARP1を阻害することによって、BRCA1・2に異常がある乳がん細胞はDNA修復できなくなり細胞死することを利用した抗がん剤。',
    },
    {
      term: ['スプライシング変異'],
      explanation:
        'U2AF35とSF3B1が、骨髄異形成症候群で見出された遺伝子で、スプライシングに関わるタンパク質を変異させ発がんさせやすくする。',
    },
    {
      term: ['粥状硬化', 'atherosclerosis'],
      explanation:
        '中型～大型血管の動脈硬化による循環障害。粥状硬化性大動脈瘤は腹部大動脈に好発し、多くは紡錘状。高血圧が原因で、粥状硬化巣の潰瘍などを生じ、悪化すると破裂する。',
    },
    {
      term: ['細動脈硬化症', 'arteriolosclerosis'],
      explanation: '小型～細動脈の動脈硬化による循環障害。',
    },
    {
      term: ['Mönckeberg'],
      explanation:
        'Mönckeberg型中膜硬化症は小型～中型筋型動脈の動脈硬化（中膜が変性し、輪状の石灰化を認める）による循環障害。大腿動脈や、骨盤内臓器の動脈に見られる。',
    },
    {
      term: ['Foam cell'],
      explanation: '脂質を食べたマクロファージ',
    },
    // {
    //   term: ['動脈瘤'],
    //   explanation:
    //     '動脈が限局性に瘤状に拡張したもの。拡張した動脈の壁によって真性（動脈壁が3層構造を保って拡張）・仮性（動脈壁が破綻した状態で拡張）にも分類される。粥腫のなかに入口と出口の亀裂が生じると、血流が真腔と偽腔に分割され解離が生じて痛む。高血圧・梅毒・Marfan症候群などが原因となる。',
    // },
    {
      term: ['梅毒'],
      explanation:
        '梅毒にかかると梅毒性大動脈瘤を引き起こす。この梅毒性大動脈瘤は真性動脈瘤で、vasa vasorum(動脈を栄養する動脈)に炎症が起こり、その血管が閉塞し中膜弾性繊維が変性消失して大動脈瘤に発展する。内膜ではなく中膜の変性（萎縮）なので、ちりめん状（樹皮状）の大動脈を呈する。',
    },
    {
      term: ['Marfan'],
      explanation:
        '先天的な問題で中膜が壊死してムチンが蓄積する、嚢胞性中膜壊死が生じ動脈瘤がおこりやすくなる。若い高身長の男性に多い。',
    },
    {
      term: ['高安動脈炎', 'Takayasu arteritis'],
      explanation:
        '大型血管炎での炎症のひとつで、別名脈なし病（鎖骨から末端の動脈の拍動が消失するため）。若い女性に多く、おそらく自己免疫疾患。vasa vasorumへのリンパ球浸潤がみられる。',
    },
    {
      term: ['側頭動脈炎', '巨細胞性動脈炎'],
      explanation:
        '限局的な動脈（大型～中型）の肉芽腫性炎症。内膜・内弾性膜の弾性繊維の断裂。',
    },
    {
      term: ['川崎病'],
      explanation:
        '小児に見られる、急性熱性皮膚粘膜リンパ節症候群（血管炎）。原因不明だがウイルス性ではないかといわれている。全身の血管の炎症（中型～小型筋型動脈）。炎症が続くと冠動脈瘤を形成し、狭窄・血栓を形成する。',
    },
    {
      term: ['ANCA', 'Anti-neutrophil cytoplasmic antibody'],
      explanation:
        '抗好中球細胞質抗体。P-ANCAとC-ANCAに分類され、いずれもANCA関連血管炎（小型・細動脈～毛細血管～細静脈）を生じる。腎臓では壊死製糸球体腎炎、肺では肺胞出血・間質性肺炎、喘息なども合併する。',
    },
    {
      term: ['Buerger'],
      explanation:
        'Buerger病は、閉塞性血栓性血管炎(Thromboangitis obliterans:TAO)で、喫煙者・若年成人男性の上下肢に内膜のフィブリノイド変性・肉芽腫性血管炎を生じる。末梢の潰瘍壊疽・間欠性跛行をきたす。',
    },
    {
      term: ['AMI', 'Acute myocardial infarction', '急性心筋梗塞'],
      explanation:
        '心臓冠動脈の閉塞により、支配領域への血管が途絶し、急激な貧血性壊死が生じる。組織的にほとんど（浮腫のみ）変化がないのが急性、数か月単位で梗塞が続き線維化した組織に置き換わるとやや白い組織像が見えるようになる。好中球・マクロファージが梗塞部位に見られるのは48時間後以降である。',
    },
    {
      term: ['間欠性跛行'],
      explanation:
        '末梢動脈疾患で、少し歩くと足が痛くなったりしびれたりすることで歩けなくなるが、少し休むとまた歩けるようになる現象。動脈硬化・Buerger病（血管炎）・Raynaud病（動脈壁の線維性肥厚）などにより足に十分な血液を送れなくなる事が原因。',
    },
    {
      term: ['虚血性心疾患', '心筋虚血'],
      explanation:
        '心臓冠動脈の狭窄・閉塞が原因で心筋虚血が生じる病態。動脈硬化性がほとんど。冠動脈の動脈硬化は、程度・状態によって狭心症・心不全/心筋線維化（硬化が進行し血栓形成なし）・急性心筋梗塞（血栓形成あり）・異型狭心症（硬化は軽度であるが攣縮がみられる）へと進行していく。',
    },
    {
      term: ['結核'],
      explanation:
        '1950年まで日本人の死因1位。特効薬としてストレプトマイシンが発見された後、完治する病気に。',
    },
    {
      term: ['悪性新生物'],
      explanation:
        '日本人の2人に1人がかかり、3人に1人ががんが原因で死ぬ。年間80万人が罹患し、40万人が死亡する日本人の死因1位。がんは遺伝子の病気であるが、生活習慣病であり、発がんには体質（遺伝子多型）や因子への曝露による突然変異の蓄積が問題となるが、組織幹細胞の増殖を続けることによる単純な老化による部分も大きい。環境因子・遺伝・DNA複製の影響はがんの種類によって異なり、肺がん・食道がん・大腸がんなどが環境因子の影響が大きいのに対して、脳腫瘍・骨肉腫などは（組織幹細胞の）単純な細胞増殖による影響が大きい。その他、感染症もがんの原因となる（→胃がん・肝臓がん・子宮頸がん）が、いずれも減少傾向にある。',
    },
    {
      term: ['大腸癌', '大腸がん'],
      explanation:
        '大腸がんは欧米や日本で多く、90%が食事（特に牛肉の脂質や赤身肉）や飲酒に原因があるとされる。アルコール自体は大腸まで到達することなく血中に吸収されるが、腸内細菌によってアセトアルデヒドに変換されると粘膜障害・炎症・悪玉腸内細菌の増加・粘膜の異常増殖→発がんを誘導する。',
    },

    {
      term: ['喉頭癌', '喉頭がん'],
      explanation:
        '喉頭癌の原因の95%が喫煙にあるとされる。喉頭癌以外にも、肺癌(70%)・食道癌(50%)も喫煙の影響が大きい。',
    },
    {
      term: ['ROS', 'reactive oxygen species', '活性酸素', '酸化ストレス'],
      explanation:
        '活性酸素(ROS)は主にミトコンドリアの不調で生成される、Superoxide , Hydroxy radical（ヒドロキシラジカル） , 過酸化水素 , 一重項酸素などの酸化ストレス群。BMIが高い=肥満であると酸化ストレスが増す。活性酸素は殺菌・シグナル伝達・生理活性など生存・分化に必須の機能を持っているが、特に二価鉄で引き起こされるヒドロキシラジカルは過酸化脂質として蓄積されDNAや蛋白などを切断・変性してしまうため発がんの原因となる。',
    },
    {
      term: ['肥満'],
      explanation:
        '肥満（→メタボ・糖尿病）はDNAメチル化・酸化ストレス・蛋白の糖化・AGE形成・脂肪ホルモンの変化を誘導し、メタボリック症候群、発がんの原因となる。',
    },
    {
      term: ['メタボ', 'メタボリック症候群'],
      explanation:
        'Age(P=0.0121),BMI(0.0044),ウエスト/腹囲(0.0003),内臓脂肪(0.00001未満),アディポネクチン(0.0326)がリスク因子として知られている。そのうち内臓脂肪が最もハイリスク因子。メタボリック症候群は大腸がんリスクを増加させる。また悪性度が高くなる。',
    },
    {
      term: ['糖尿病'],
      explanation:
        '糖尿病患者はインスリン抵抗性が増してIGF(Insulin-like Growth Factor)-1が活性化され、また高血糖は酸化ストレスを招いたり腫瘍増殖速度を増大させるので、糖尿病は肝臓がん（←脂肪肝）・膵臓がん・大腸癌のリスクを増大させる。糖尿病と合併したがんは悪性度が高い（転移が多い・再発が多い）とされる。',
    },
    {
      term: [
        'AGE',
        'advanced glycation end products',
        '終末糖化産物',
        'カルボキシメチルリジン',
        'ペントシジン',
        'CML',
      ],
      explanation:
        '蛋白や脂質に非酵素的な糖の修飾が生じた状態。高血糖・酸化ストレス・加熱によって糖化が起こり、様々な物質が存在する。初期にはCML/カルボキシメチルリジンが多く生成される。最初に発見されたAGEとしてペントシジンが知られる。AGEに結合するレセプターであるRAGEの発現が上がるとがん細胞の増殖・活性酸素生成・血管新生、AGEがHMGB1を糖化させる→分泌促進されるとマクロファージ系細胞抑制などを促進して大腸がんの原因となる。生物活性をもち、ユビキチン・プロテアソーム活性を阻害し、細胞内タンパク（コラーゲンなど長寿命・SODなどROSへの高暴露・HMGB1などLys rich）を糖化することによりタンパク機能を障害し、またマクロファージ活性化による炎症誘導を行う。',
    },
    {
      term: ['HMGB1'],
      explanation:
        '通常は核内でヒストンと結合しているHMGB1は、多数のリジン残基を持つ。AGEによって糖化されることによって、マクロファージや樹状細胞のがん抑制活動を抑制してしまう。',
    },
    {
      term: ['ニトロソ化合物'],
      explanation: 'ハムなどの貯蔵肉に多く含まれる。発がん性物質。',
    },
    {
      term: ['アクリルアミド', 'ヘテロサイクリックアミン'],
      explanation:
        'タンパク+加熱によって生成される。食事中に含まれる、発がん性物質。',
    },
    {
      term: ['ω-3', 'α-リノレン酸'],
      explanation:
        'オリーブオイルに含まれるω-3系列の脂肪酸（α-リノレン酸）は善玉で、EPAやDHAに変化し動脈硬化と血栓を抑制する。',
    },
    {
      term: ['ω-6', 'コーンオイル', 'オイル', 'リノール酸'],
      explanation:
        '一般的なコーン由来のオイルにはリノール酸が含まれており、これはω-6系列の脂肪酸で悪玉。COX2（がんなどで発現量が増加）によってプロスタグランジンE2に分解され、慢性炎症・免疫力低下を招き発がんの原因となる。ただし、発がん抑制効果もある（この方向の酵素15LOX1は発現は発がん過程で抑制されてしまう）。また、リノール酸はがん細胞に冬眠を誘導し再発リスクを高める',
    },
    {
      term: ['トランス脂肪酸', 'エライジン酸'],
      explanation:
        'オレイン酸を加熱・水素化することでトランス酸/エライジン酸となり、マーガリンやショートニングとして利用される。LDL増加→動脈硬化によって虚血性心疾患のリスクを増大させる。また、がん転移を促進させる',
    },
    // {
    //   term: ['がん幹細胞'],
    //   explanation:
    //     'がん細胞の中でも比較的未分化ながん細胞。組織や時間をまたいでがん細胞に分化するため、転移や再発に関わる。',
    // },
    {
      term: ['ウェルシュ菌', 'Welsh'],
      explanation:
        '病原性の腸内細菌。芽胞に包まれると加熱でも死滅せず、ウェルシュ菌毒素によって食中毒を招く（タイトジャンクションを壊す）。老年になると（低濃度で）悪玉菌として腸内に増え、大腸表面の発がんを促進する。またウェルシュ菌毒素はがん細胞に上皮間葉転換EMTを促進し転移を誘導する',
    },
    {
      term: ['過形成'],
      explanation:
        '細胞数の増加による臓器容積の増大。細胞個々の容積の拡大をあらわす「肥大」とは区別される。前立腺肥大は肥大ではなく過形成に分類される。',
    },
    {
      term: ['低形成'],
      explanation:
        '正常レベルまでの分化・成長が行われなかった結果、臓器容積が縮小する退行性病変。発達段階は正常である「萎縮」とは区別される。',
    },
    {
      term: ['退縮'],
      explanation:
        '老化よりもっと早い段階で行われる萎縮。胸腺（脂肪化）・骨髄（一部を残して脂肪化）など',
    },
    {
      term: ['水腎症'],
      explanation:
        '尿路が閉鎖された結果、腎盂に蓄積した尿によって腎臓実質が圧迫されて萎縮してしまう疾患。',
    },
    {
      term: ['真性肥大'],
      explanation:
        '実質細胞の個々の容積の増大による臓器容積の増大。心肥大など（心筋細胞は数が増えにくい）',
    },
    {
      term: ['仮性肥大'],
      explanation:
        '実質細胞ではなく間質細胞の増加による臓器容積の増大。筋ジストロフィーの筋組織など（間質細胞が肥大して全体が膨らんでいるように見える）',
    },
    {
      term: ['脂肪化'],
      explanation:
        '脂肪内トリグリセリドが蓄積する、または脂肪細胞の供給により心筋・膵臓（→膵リポマトーシス）・骨髄（←再生不良性貧血が原因）などが脂肪化する。',
    },
    {
      term: ['線維化'],
      explanation:
        'コラーゲンを生成する線維芽細胞（組織全般）か星細胞（肝臓・膵臓のみ）が異常に活性化され組織が線維化される。肝炎などで死んだ実質細胞の埋め合わせなどが原因で線維化する（→肝硬変）。その他、膵線維化→慢性膵炎、肺線維化→肺線維症、骨髄線維化→骨髄線維症など。',
    },
    {
      term: ['変性'],
      explanation:
        '病的過程に伴う代謝異常による生理活性物質の異常蓄積。正常物質（脂質・糖・ビリルビンなど）が蓄積する場合と、異常物質（AGE・アミロイドなど）が蓄積する場合がある。',
    },
    {
      term: ['脂肪肝'],
      explanation:
        '肝細胞内へのトリグリセリドの蓄積。肝重量の7%以上/肝細胞の5%以上に脂肪滴が細胞内に発生すると脂肪肝に分類される。糖尿病・飢餓時の脂肪利用亢進（→大滴型）、アルコール性肝炎、肝臓毒などによって肝細胞障害（→小滴型）による脂肪酸酸化障害などが原因。',
    },
    {
      term: ['NASH', '非アルコール性脂肪肝炎'],
      explanation:
        '肥満・高血糖・高脂血症などによる酸化ストレス・LPSの負担が大きすぎると、肝細胞が傷害され、炎症細胞が浸潤する。変性を起こして膨らんでいる風船細胞が特徴的。後に線維化して肝硬変・肝細胞癌を引き起こす。単純脂肪肝NAFL→NASH(10%が進行)→肝硬変(NASHの2%が進行)→肝細胞癌(肝硬変のうち10~15%が発がん)',
    },
    {
      term: [
        'ARB',
        'Angiotensin Receptor Blocker',
        'アンギオテンシン受容体阻害剤',
      ],
      explanation:
        'AGEの生成を抑制する現時点で最も効果的な薬剤。生成されてしまったAGEを減らす方法は未だに見つかっていない。',
    },
    {
      term: ['Criggler-Najar', 'グルクロン酸抱合障害'],
      explanation:
        'ビリルビン代謝の、グルクロン酸抱合に障害があり間接ビリルビン濃度が高くなってしまう肝細胞性黄疸。核黄疸を合併することがある、最も危険な黄疸の分類。',
    },
    {
      term: ['ヘモジデローシス'],
      explanation:
        '過剰鉄の組織球・マクロファージへの貪食・沈着→組織がレンガ色への変化（機能障害は出るが実質細胞は無事）。鉄代謝異常。',
    },
    {
      term: ['ヘモクロマトーシス'],
      explanation:
        '網内系細胞＋実質細胞内への鉄沈着→実質細胞内への鉄沈着→実質細胞の障害による臓器障害：肝硬変・膵硬変（ブロンズ糖尿病）。鉄代謝異常。鉄や電子供与体が酸化ストレスとなって発がんに至る',
    },
    {
      term: ['痛風'],
      explanation:
        '尿酸の代謝異常。男性に多い。針状の尿酸由来の血症を肉芽腫が取り囲み、足の親指の付け根が腫れる。痛風腎とよばれる、高尿酸血症による腎障害を引き起こす。',
    },
    {
      term: ['PTH', 'パラトルモン'],
      explanation:
        '副甲状腺から分泌されるパラトルモンPTHは、骨の分解や尿中カルシウムの再吸収を促進することによって血中カルシウム濃度を上げる働きをもつ。血中カルシウム濃度は通常4.5~5.5mEqの範囲内に調整されている。',
    },
    {
      term: ['COX', 'cyclooxygenase', 'シクロオキシゲナーゼ'],
      explanation:
        'アラキドン酸はホスホリパーゼA₂とシクロオキシゲナーゼCOXの働きによってプロスタノイドに代謝される。NSAIDsによって活動が阻害され、特にアスピリンは不可逆的にCOXを阻害する。COX1は非誘導型（ほぼ全ての細胞に常時発現している）で止血作用・生理的な働きを行うプロスタグランジン(TXA₂など)を合成する。COX2は誘導型（炎症箇所で刺激依存性に発現する）で炎症など病的な状態ではたらくプロスタグランジン(PGI₂など)の合成を行う。NSAIDsやステロイドでCOXは阻害され抗炎症作用を示す。',
    },
    {
      term: [
        '炎症性メディエーター',
        '炎症メディエーター',
        '血管作動性メディエーター',
        '走化性因子',
      ],
      explanation:
        '炎症性メディエーターは、炎症作用の中間物質としてはたらき、血管作動性メディエーター（ヒスタミン・セロトニン・ブラジキニン・トロンボキサン・ロイコトリエン・プロスタグランジン・NO →血管拡張・透過性亢進など ）と走化性因子（ケモカイン・サイトカイン・C5aなどの補体成分 → 好中球・マクロファージ・リンパ球などの遊走を促進）に分類される',
    },
    {
      term: ['LOX', 'Lipoxygenase', 'リポキシゲナーゼ'],
      explanation:
        '細胞膜リン脂質であるアラキドン酸からホスホリパーゼA2で切り出され、LOXによってロイコトリエンやリポキシンが生成される（リポキシゲナーゼ経路）。同じアラキドン酸からCOXによって合成されるプロスタノイドとは異なり抗炎症作用に寄与する。',
    },
    {
      term: ['急性炎症'],
      explanation:
        '組織損傷に対する最初の生体反応。炎症性メディエーターを産生することで増幅され、これが阻害されると炎症は終結する。組織分類がある。',
    },
    {
      term: ['慢性炎症'],
      explanation:
        '急性炎症で上手く治療できない組織損傷が慢性炎症へ移行する。毛細血管の造成angiogenesisや線維化fibrosisがみられ、組織の破壊と再構築が生じる→不可逆的な組織リモデリング。炎症細胞は急性炎症とは異なり貪食細胞のマクロファージ・リンパ球・形質細胞が主体となり、アザン染色で広く染まるようになる。',
    },
    {
      term: ['スカベンジャー'],
      explanation:
        '抗酸化作用を持つ物質のこと。活性酸素ROSを代謝する作用を持つ。グルタチオンGSH・カタラーゼ・SOD・ビタミンE・ビタミンC・ポリフェノールなど。SOD→活性酸素、カタラーゼ→過酸化水素など、様々な活性酸素を無毒化するが、ヒドロキシラジカルOHだけは無毒化できない',
    },
    {
      term: ['TAM', '腫瘍随伴マクロファージ', 'Tumor Associated Macrophage'],
      explanation:
        '腫瘍周辺に分布するマクロファージ。腫瘍初期に多いM1マクロファージ（Th1応答によって分化し、抗腫瘍的）と腫瘍後期に多いM2マクロファージ（Th2応答によって分化し、腫瘍促進的→免疫抑制作用のあるサイトカインを分泌する）に分類されるが、境界はあいまい。腫瘍増殖サイトカインであるIL-6、TNF-αを分泌したり、浸潤を容易にするMMPsやEMT促進作用のあるTGF-β分泌したり、血管新生増殖因子であるHIF-1αが発現すると血管新生を促進してしまう。その他、T細胞の機能を低下させたり、免疫抑制作用を持つTregをの機能を亢進させたりすることで、TAMは腫瘍へ様々な影響を与えている。',
    },
    {
      term: ['CAF', 'がん関連線維芽細胞', 'Cancer Associated Fibroblast'],
      explanation:
        '様々な間葉系由来細胞（血管内皮・周皮細胞・脂肪細胞・MSC・上皮細胞）が分化し不均一な集団となっているため、特定の単一のマーカーをもつわけではないが、腫瘍の周囲で細胞増殖・免疫抑制・腫瘍の悪性化に関わり腫瘍にとって有利な環境を整えている。特にECMを分解することなどによってがんの浸潤を助けている。',
    },
    {
      term: ['TEC', '腫瘍血管内皮細胞', 'Tumor Endothelial Cell'],
      explanation:
        '腫瘍毛細血管は正常と比べて接着が疎らで、管径が太い傾向にある。→プロテオグリカンA分泌によって転移しやすくなる・間質浮腫によって圧力差が無いので、薬剤が到達しにくい。また、腫瘍細胞から分泌されるIL-8によってABCB1の発現が亢進されることによっても、抗がん剤耐性を獲得することが発見されている。',
    },
    {
      term: ['TAN', '腫瘍関連好中球', 'Tumor Associated Neutrophil'],
      explanation:
        '腫瘍初期に多いN1好中球（抗腫瘍的）と腫瘍後期に多いN2好中球（腫瘍促進的）に分類される。ROSによってがん細胞の遺伝子変異を促進する場合がある。病原体除去に使われるNETs（DNAやヒストンで構成するネットのようなもの）ががん細胞をトラップすることで転移を助けているという報告がある。',
    },
    {
      term: ['PD-1', 'ニボルマブ', 'オブジーボ'],
      explanation:
        '免疫細胞にPD-1芽」発言している事を発見し、それをもとにニボルマブ（オブジーボ）を開発した。免疫チェックポイント阻害剤。しかし、そもそも免疫細胞が集まっていないがんも多い。',
    },
    {
      term: ['がん幹細胞', 'WNT', 'NOTCH'],
      explanation:
        '自己複製能・多分化能をもつがん細胞。1個から新しい集団を作れるため、がんの転移・再発に深く関与している。放射線治療抵抗性・活性酸素除去能（ALDH1活性亢進）・DNA修復能の亢進など。薬剤排出トランスポーターが過剰発現しており、分裂が緩やかであるため抗がん剤抵抗性をもつ。がん幹細胞のWNT経路やNOTCH経路をターゲットにした治療法が研究されている。分化したがん細胞からは容易にがん幹細胞へ戻れる。',
    },
    {
      term: ['AYA', 'Adolescent and young adult'],
      explanation: '思春期～若年成人。AYAがんは小児がんの別名。',
    },
    {
      term: ['小児がん'],
      explanation:
        '死亡数は少ないが死因として重要で、大人のがんとは異なる種類であるので早期発見や予防が難しい。生活習慣ではなく遺伝が原因のものもある（10％）。肉腫が多く症状が出にくい他、血行性転移を生じやすいが、治療の効果は大きい（放射線治療は二次がんのリスクがある）。白血病・脳腫瘍・リンパ腫など。',
    },
    {
      term: ['腫瘍崩壊症候群'],
      explanation:
        '悪性腫瘍の治療の際に抗がん剤治療や放射線治療の硬化が優れており、腫瘍が急速に死滅するときに起きる。尿酸が増えるなど、様々な異常が出現する。小児がんの際に多い。',
    },
    {
      term: ['神経芽腫', 'neuroblastoma'],
      explanation:
        '胎児期の神経堤細胞由来。MYCN遺伝子異常で、5歳児まで（特に1歳前後）に多い。',
    },
    {
      term: ['網膜芽細胞踵', 'retinoblastoma'],
      explanation: 'Rb遺伝子の不活化により家族性網膜芽細胞腫を発生する。',
    },
    {
      term: ['RMS', '横紋筋肉腫', 'rabdomyosarcoma'],
      explanation:
        '未分化間葉系細胞から発生する悪性腫瘍。症に軟部悪性腫瘍の約半数が該当。平均発症年齢は7歳と若い。',
    },
    {
      term: ['小脳星細胞腫', 'astrocytoma'],
      explanation:
        '小児(5~14歳)に、小脳に好発し、嚢胞性病変を示す。摘出手術で完治し、5年生存率は8割以上。小脳失調や水頭症を併発しやすい。',
    },
    {
      term: ['髄芽腫', 'medulloblastoma'],
      explanation:
        '高悪性度腫瘍の一つ。放射線療法や化学療法が有効だが、小脳星細胞腫と比べると生存率は低い。ロゼット構造。',
    },
    {
      term: ['上衣腫', 'ependymoma'],
      explanation:
        '上衣細胞由来で、脳室・第4脳室・脊髄で小児期にみられる。血管中心性偽ロゼットがみられる。なかには円形空隙を中心にもつ上衣ロゼットがみられることもある。',
    },
    {
      term: ['ASD', '先天性心奇形'],
      explanation:
        '心奇形の10%程度、新生児の1%程度。動脈血と静脈血が混じるので上室性頻脈・肺高血圧・心不全を引き起こす。L-Rシャントでは動脈血が逃げるだけなので軽症だが、R-Lシャントになると動脈血中の酸素濃度が低下するのでチアノーゼ・肺高血圧となり重篤な状態となる（この変化をEisenmenger化という。）',
    },
    {
      term: ['VSD', '心室中隔欠損'],
      explanation:
        'Eisenmenger化（R-Lシャントへ変化すること）が比較的遅く、思春期以降。',
    },
    {
      term: ['動脈管開存'],
      explanation:
        '正常では出生後、動脈酸素分圧上昇・プロスタグランジン濃度低下を受けることで動脈管が閉じるが、出生後のPGE2濃度が高く持続していたりすると動脈管開存を引き起こす。プロスタグランジン合成阻害剤としてインドメタシンが有効。',
    },
    {
      term: ['Fallot四徴症', 'Fallot'],
      explanation:
        '右室肥大・高位心室中隔欠損・騎乗大動脈・肺動脈狭窄の４徴。もともとR-Lシャントでチアノーゼを発症するが、出下時よりチアノーゼがあると予後不良。蹲踞の姿勢をとる。',
    },
    {
      term: ['肺分画症'],
      explanation:
        '異常動脈による肺の一部の体循環による潅流。気管支に繋がっていない部分で慢性炎症を起こすこともある。',
    },
    {
      term: ['Kartagener症候群', 'Kartagener'],
      explanation:
        '内臓逆位による3肺左肺。根本的な原因は繊毛機能不全で、繊毛に異常があるため慢性副鼻腔炎・不妊症・中耳炎・水頭症なども合併する。',
    },
    {
      term: ['食道閉鎖', '食道気管支廔'],
      explanation:
        '胎生5週で食道と気管は分離するが、分離の異常により種々の奇形が生じる。Gross分類によるC型（上部食道は盲端、下部食道は気管と瘻孔で交通する奇形）が全体の85%を占める。羊水過多など',
    },
    {
      term: ['Hirschsprung病', '巨大結腸症', 'aganglinosis'],
      explanation:
        'アウエルバッハ神経叢の一部欠損により巨大結腸を生じる。蠕動欠如→慢性機能性イレウスが原因。狭窄部の口側腸管は高度に拡張する。',
    },
    {
      term: ['鎖肛'],
      explanation:
        '肛門が閉塞していて排便以上・腹部膨満・嘔吐をきたす。膀胱と連結している場合は尿混濁なども。二分脊髄等を合併している事も多い。',
    },
    {
      term: ['腸重積'],
      explanation:
        '腸管が陥入してしまい血行障害→イレウスにより間欠的腹痛・嘔吐・粘血便を引き起こす。',
    },
    {
      term: ['先天性胆道閉塞'],
      explanation:
        '出生前後のウイルス感染による胆道系の炎症が原因でグリソン鞘の線維化→胆汁性肝硬変を引き起こす。外科的手術を行う必要がある。',
    },
    {
      term: ['ダウン症', 'Down症候群'],
      explanation:
        '21番染色体のトリソミーで、700~1000人に1人の割合。精神遅延・成長遅延・VSDなどの先天性心疾患・消化管奇形・白血病などを合併する。両眼解離・耳介変形が特徴的で、余分なタンパク質が蓄積して早期にアルツハイマー病を発症する。',
    },
    {
      term: ['Eisenmenger化', 'Eisenmenger'],
      explanation:
        '心房中隔欠損ASDや心室中隔欠損VSDにより生じた左→右シャントが、肺血管抵抗増大によって右→左シャントに変化しチアノーゼ・肺高血圧などを引き起こし重症化する。',
    },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },

    // {
    //   term: ['癌'],
    //   explanation:
    //     '総称の「がん」のうち、上皮由来の上皮性腫瘍のみ、漢字の「癌」と呼ばれる。抑制の利かなくなった異常増殖細胞。増殖活性が強いので浸潤・転移あり。進行度を判定するためにTNM分類・Stage分類がある。',
    // },
  ])
  const showTechnicalTerm = () => {
    return technicalTerm.filter(
      (value) => value.term && value.term !== [] && value.term !== [''],
    )
  }
  return {
    showTechnicalTerm,
  }
}
