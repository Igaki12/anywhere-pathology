import { useState } from 'react'

export const useTechnicalTerm = () => {
  const [technicalTerm, setTechnicalTerm] = useState([
    // term[0]が代表名として大きく表示される。
    {
      term: ['概日リズム', 'circadian rhythm', 'フリーランリズム'],
      explanation:
        '周期が24時間の内因性リズム。ヒトの場合は24.48hr。環境因子（主に青色の光）に同調させて昼夜変化に一致させる。ヒトの場合は朝6時前後に約3～6時間の光照射(5000ルクス～10000ルクス)を受けることで、実時間と一致するようになる。※食事により末梢時計（例えば膵臓）は同調されるが、視交叉上核は同調されない。',
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
      term: ['癌'],
      explanation:
        '抑制の利かなくなった異常増殖細胞。増殖活性が強いので浸潤・転移あり。進行度を判定するためにTNM分類・Stage分類がある。',
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
        '左心不全・ショックなどによる代表的な浮腫のひとつ。肺胞内に水が溜まるので重くなる。本来空気がある肺胞部分に浸出液（血漿成分）が溜まっているように組織像はみえる。赤血球が溜まっているわけではないので暗赤色ではなくピンク色のように見える。',
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
