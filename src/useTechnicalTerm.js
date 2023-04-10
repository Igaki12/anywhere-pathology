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
