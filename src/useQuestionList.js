import { useState } from 'react'
import prostaticHyperplasia from './img/answer/prostaticHyperplasia.png'
import fattyLiver from './img/answer/fattyLiver.png'

// import from './img/answer/.png'

export const useQuestionList = () => {
  const appName = 'anywhere-pathology'
  const jpName = '病理学'
  const [questionList, setQuestionList] = useState([
    // ここに問題のリストを記述(選択式の場合は[0]に正解択をいれた配列をつくる)
    {
      groupTag: '2014豆テスト',
      groupContents: [
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】仮性肥大では実質細胞数は増加するが、その容積は逆に減少している。',
          answerImg: [],
          answer: '誤り...仮性肥大では間質の細胞数が増加し、容積が増加する。',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】前立腺肥大では実質細胞は過形成だが間質細胞は肥大を示す。',
          answerImg: [prostaticHyperplasia],
          answer: '誤り...間質細胞も過形成される',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '【正誤問題】高血圧では左心室に労働性肥大を生じる',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】萎縮とは正常の発達段階にあった組織や臓器の細胞数の減少である',
          answerImg: [],
          answer:
            '誤り...萎縮には数的委縮と単純萎縮があり、この文章は数的委縮の説明である。',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '【正誤問題】萎縮には機能障害は関連しない',
          answerImg: [],
          answer: '誤り...機能障害は関連する',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】低形成とは組織や臓器が正常の大きさまで達しないものである',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】変性とは正常代謝物の異常蓄積や異常代謝物の蓄積が、組織・細胞内に生じることである',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】グルコースはアルドラーゼによりソルビトールを生成し細胞浮腫の原因となる',
          answerImg: [],
          answer: '誤り...アルドラーゼではなくアルドスリダクターゼ',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】ポリオール代謝亢進により還元型グルタミンが減少し酸化ストレスが増加する',
          answerImg: [],
          answer: '誤り...還元型グルタミンではなく還元型グルタチオン',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】ポリオール代謝ではフルクトースから3-デオキシグルコソンが生成されAGE形成が著しい',
          answerImg: [],
          answer: '誤り...ポリオール代謝ではなくフルクトース代謝',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '【正誤問題】エンドセリンやNOは血管拡張因子である',
          answerImg: [],
          answer: '誤り...エンドセリンは血管収縮因子',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】糖尿病は続発性拡張型心筋症の原因となる',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】トリグリセリドはグリセロールと2個の脂肪酸からなる',
          answerImg: [],
          answer: '誤り...脂肪酸は3つ',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】血漿リポ蛋白の主成分はカイロミクロン、VLDL、LDL、HDLである',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】アポ蛋白は脂質と結合してリポ蛋白を形成し脂質を可溶化する',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】HDLはコレステロール密度が高く粥状動脈硬化を生じやすい',
          answerImg: [],
          answer: '誤り...HDLではなくLDL',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】糖が過剰な状況ではacetyl CoAからトリグリセリドが合成され脂肪細胞に貯蔵される',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】巨大化した脂肪細胞ではアディポネクチンが減少しインスリン耐性が低下する　',
          answerImg: [],
          answer: '誤り...インスリン耐性は増加する',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】高糖質により増加する酸化ストレスはミトコンドリアの抑制により減少する',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】過剰な遊離脂肪酸は膵β細胞のインスリン分泌を促進し肝での糖新生を亢進する',
          answerImg: [],
          answer: '誤り...インスリン分泌を抑制する',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】肝重量の70%以上のトリグリセライドの蓄積により脂肪肝が生じる',
          answerImg: [fattyLiver],
          answer: '誤り...70%ではなく7%',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】肝細胞障害による脂肪肝では中心肝静脈周囲の肝細胞に脂肪滴を生じやすい',
          answerImg: [fattyLiver],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】脂肪過剰摂取では小葉辺縁性の脂肪肝を生じることがある',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '【正誤問題】脂肪肝では肝間質の脂肪化生が見られる',
          answerImg: [fattyLiver],
          answer: '誤り...肝間質ではなく肝細胞で、脂肪化生ではなく脂肪変性',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】NASHでは小滴脂肪肝、水滴細胞出現、線維化、炎症細胞浸潤が見られる',
          answerImg: [],
          answer: '誤り...小滴脂肪肝ではなく大滴脂肪肝',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】単純性脂肪肝の10%がNASHによりその2%以下が肝硬変に進展すると言われる',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】高トリグリセリド血症ではlarge dense LDLが生成しやすい',
          answerImg: [],
          answer: '誤り...small dense LDLやVLDL',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】脂肪化生は間葉系幹細胞の脂肪細胞への分化により生ずる場合がある',
          answerImg: [],
          answer: '誤り...脂肪化生という言葉は存在しない',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】心筋の脂肪化は致死的不整脈の原因になる',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '【正誤問題】脳内には脂肪細胞は存在しない',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】終末糖化産物は蛋白等にメーラード反応や酸化ストレスなどで非酵素的に糖の修飾が生じたものである',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】終末糖化産物は粥状動脈硬化、脂肪肝、糖尿病合併症、アルツアイマー病、発癌に関与する',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】終末糖化産物は受容体であるRAGEを介し細胞増殖、細胞運動、血管新生を促進する',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】終末糖化産物はDNA付加体の増加をもたらす',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },

        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence:
        //     '',
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
      ],
    },
    {
      groupTag: '正誤問題集１',
      groupContents: [
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】13トリソミーでは馬蹄腎・臍ヘルニア・揺り椅子状の足底を認めることが多い。',
          answerImg: [],
          answer: '誤り...13ではない',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】1984年以降日本人の死因の第一位はがんである。',
          answerImg: [],
          answer: '誤り...1981年以降',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】1分子のグルコースから最も多くのATPを生成するのは解糖系である。',
          answerImg: [],
          answer: '誤り...解糖系ではなく電子伝達系',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】Ⅲ型アレルギーはTcやマクロファージにより好酸球が増殖することで生じる。',
          answerImg: [],
          answer: '誤り...Ⅲ型ではなくⅣ型',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】Ⅳ型アレルギーでは免疫複合体の形成により補体が活性化されることで細胞が傷害される。',
          answerImg: [],
          answer: '誤り...Ⅳ型ではなくⅢ型アレルギー',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】AA型アミロイドは血清アミロイドAAタンパクに由来する。',
          answerImg: [],
          answer: '誤り...AA蛋白ではなくA蛋白',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '【正誤問題】AGEの増加は大腸がんのリスクとなる',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】Alzheimer病ではβアミロイドが沈着した老人斑により錐体外路障害を認める。',
          answerImg: [],
          answer: '誤り...錐体外路障害ではない',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】CD4+T細胞にTGFβが作用するとTh1,Th17,ないしTregに分化する。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】Chediak-Higashi症候群では活性酸素の産生異常により殺菌能が低下する。',
          answerImg: [],
          answer: '',
          commentary: '',
        },

        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】COX1は外傷や炎症によって誘導され炎症を促進する。Coxib系はこれを阻害する。',
          answerImg: [],
          answer: '誤り...COX1ではなくCOX2',
          commentary: '',
        },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence:
        //     '【正誤問題】COX1は持続的発現を示し、COX2は発現誘導を受ける。',
        //   answerImg: [],
        //   answer: '正しい',
        //   commentary: '',
        // },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】COX1は持続的発現を示し、COX2は発現誘導を受ける。',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】COX2はアラキドン酸をプロスタグランジンへ変換する。',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】COX2は常時様々な組織で発現しており血小板凝集の促進や肝血流の維持に関与している。',
          answerImg: [],
          answer: '誤り...常時ではない',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】CpGアイランド（DNA中のCGの繰り返し領域）のメチル化が生じると下流の遺伝子の発現上昇がもたらされる。',
          answerImg: [],
          answer:
            '誤り...CpGアイランドのメチル化によって、下流の遺伝子は発現抑制される',
          commentary:
            '一般的にDNAメチル化は、その下流の遺伝子発現をエピジェネティックに抑制する。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】CpGアイランドのメチル化によってがん抑制遺伝子の発現が抑制される。',
          answerImg: [],
          answer: '正しい',
          commentary:
            '一般的にDNAメチル化は、その下流の遺伝子発現をエピジェネティックに抑制する。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】Criggler-Najar症候群では間接型ビリルビンが増加する。',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】炎症とは障害刺激に対する組織と微小循環の反応で障害刺激は外傷や病原体、外来異物のほかにも脂質の蓄積や悪性新生物が挙げられる。炎症の目的は病原刺激を除去し組織を修復することである。',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】DiGeorge症候群では胸腺の低形成により先天性にT細胞の異常を認める。',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】DNAのメチル化が招じるとそれを認識する蛋白とHDAC（ヒストン脱アセチル化酵素）の複合体が形成されヒストンが脱アセチル化される。これにより標的遺伝子の発現亢進が起きる。',
          answerImg: [],
          answer: '誤り...標的遺伝子の発現は抑制される。',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】DNAのメチル化はシトシンとアデニンで見られるが、アデニンのメチル化によるエピジェネティック制御の研究はシトシンと比べて進んでいない。',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】DNAのメチル化は分裂時にも維持されている。これは維持メチル化と呼ばれる反応によるものであり、ヒストン修飾とのクロストークが関与している。',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】DNAはメチル化を受けても脱メチル化酵素TETによって脱メチル化される。TETの異常はエピジェネティック制御を介し腫瘍化を促進する。',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】DNA修復機構のミスが生じると遺伝子変異が残存することとなるが、二本鎖切断の方が一本鎖切断よりもミスが生じやすい。',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】Duchenne型筋ジストロフィーではジストロフィンに異常がある。',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】Duchenne型筋ジストロフィーは三塩基リピート病である。',
          answerImg: [],
          answer: '誤り...',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】Eisenmenger化とは、先天性深枝間により肺血管抵抗の低下から左→右シャントが優勢になった状態を指す。',
          answerImg: [],
          answer: '誤り...',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】Fallot四徴症の症状は、左室肥大・心室中隔欠損・騎乗大動脈・肺動脈閉鎖であり、チアノーゼを伴わない。',
          answerImg: [],
          answer: '誤り...左室肥大ではなく右室',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】Goodpasture症候群、溶血性貧血、Henoch-Schnlein紫斑症はⅡ型アレルギーで起こる。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '【正誤問題】HbA1cは終末糖化産物ではない',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】HIF-1αは転写因子であり低酸素時にVEGF,GLUT1などの発現を誘導する。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】Hirschsprung病では、神経節を欠損し、外来神経は過形成である。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】HIVは感染後数週間で血中のRNA量が急上昇するが、その後の数年は安定した値に保たれる。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】HMGB1が高値のエンドトキシンショックでは予後良好である。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】HMGB1は炎症性サイトカインのひとつでショックを憎悪する。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】HNPCCは右側結腸に好発し、関連癌として大腸癌以外に腎盂・尿管癌や小腸癌などがある。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】Hutchinson-Gilford症候群では大泉門の閉鎖不全による水頭症様の顔貌を呈する。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】IgM抗体はB細胞表面に受容体として存在しており、血清中では五量体を形成している。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】Kartagener症候群では内臓逆位を認め、線毛機能不全を呈し、巨大結腸症を合併する。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】MELASやMERRFでは血中の尿酸やピルビン酸が高値となる。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】MEN2AではRETの突然変異による発症し、副甲状腺機能亢進や褐色細胞腫を認める。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】Menkes症候群は小腸での銅吸収障害をきたす伴性劣性遺伝病で、末期には肝硬変の像を呈する。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】MLH1、MSH2、MGMTなどDNAミスマッチ修復遺伝子はエピジェネティックな影響を受ける。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】NASHでは小滴性脂肪肝・水滴細胞出現・線維化・炎症細胞浸潤が見られる。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】P53は4量体であり4量体結合ドメインとDNA結合ドメインを持つ。これをもとに考えるとP53は4量体結合ドメインの片アレルの変異のみで1/16まで正常蛋白量が落ちることになる。',
          answerImg: [],
          answer: '',
          commentary: '',
        },

        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】P53はDNA損傷に反応しp21などを誘導し細胞終期を停止し遺伝子を修復する。遺伝子が修復不能なほど損傷した場合はアポトーシスを誘導する。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】P53やRbといったがん抑制遺伝子の欠損した家系が報告されており（P53欠損はLi-Fraumeni症候群、Rb欠損は家族性網膜芽細胞腫）悪性腫瘍を若年で発症する。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】PARP阻害薬は一本鎖切断修復酵素の阻害薬でありBRCA1、BRCA2に異常のある悪性腫瘍に適応がある。BRCA1、BRCA2に異常のある細胞はDNAを修復できず分裂致死となる。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】Turner症候群では父親由来のX染色体が喪失していることが多く、卵巣は痕跡的である。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】von Reclinghausen 病では多発性の神経線維腫や皮膚にカフェオレ斑がみられる。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】Warburg効果とは酵素存在下でも解糖系に偏ったエネルギー酸性を行うがん細胞の特性である。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】Warburg効果により酸化ストレスの生成を低減できるとされる',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】αklothoはランゲルハンス島におけるインスリンの分泌を制御する。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】α-リノレン酸はn6頚の不飽和脂肪酸でアラキドン酸を経てプロスタグランジンになる。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】アザシチジンはDNMT(DNAメチルトランスフェラーゼ)に結合し失活させることでDNAメチル化を促進する。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】アポトーシスの主な経路は1.デスレセプター、2.生存シグナルの除去、3.RIPK経路の活性化が挙げられる。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】アミロイド、ヒアリン、フィブリノイドはHE染色の染色性の違いから鑑別される。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】アラキドン酸はシクロオキシゲナーゼCOX1・2によって代謝され、プロスタグランジンH2(PGH2)が産生される。これらはトロンボキサンや他のプロスタグランジンの基質になる。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】インスリン抵抗性は動脈硬化を抑制する。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】ウイルス性心筋炎は心筋細胞間にリンパ球浸潤がみられる。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】ウェルシュ菌は食中毒菌であり腸内には常在しない',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】がんの経過中に高カルシウム血症をきたすと腎不全を引き起こす可能性がある。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】がん幹細胞は、自己再生能と腫瘍を構成する様々な系統のがん細胞をつくり、一個から新しい集団をつくる多分化能をもつ。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】がん幹細胞を標的とした治療にWNT経路やNOTCH経路のような肝細胞性を維持するための経路の阻害や肝細胞マーカーに対する抗体治療などが挙げられる。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】がん細胞は伝的変化とクローン選択を受けながら不均一な細胞集団を作り出していると考えられているが、がん細胞の大部分を占める集団ではなく、がん幹細胞に生じた変化が主に形質として受け継がれていく。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】クルーケンベルグ踵お湯が男性に生じることは無い',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】グルコースはアルドラーゼによりソルビトールを生成し細胞外浮腫の原因となる。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】グルタミノリシスによるエネルギー産生は腫瘍細胞に特異的である。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】グルタミンはDNA合成における窒素源とナウ',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】グルタミンはα-ケトグルタル酸に代謝されペントースリン酸経路に組み込まれる。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】グルタミンはオキサロ酢酸からアセチルCoAによりクエン酸を生成する。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】グルタミンはグルタチオンの原料として細胞のレドックスに関与する',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】グルタミンはリンゴ酸に代謝されマリック・エンザイムによりピルビン酸になる。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】コール酸はコレステロール排出に重要である',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】サーチュインは脈絡層におけるカルシウムイオンの輸送に関わる',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】すべての酸化ストレスを消失させることにより寿命が著明に延長される',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】たこつぼ型心筋症では心尖部の収縮能が亢進している',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】トランス型脂肪酸はLDLを増加させ粥状動脈硬化を促進する',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】トランス型脂肪酸は人工的な合成によって生成し自然界には存在しない',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】トランス型脂肪酸は同じ炭素数のシス型脂肪酸よりも融点が高い',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】トリグリセリドはグリセロールと3個の脂肪酸からなる',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】ヒストンがHistone acetyl transferase(HAT) によってアセチル化されると転写の亢進が起きる。この逆反応はHDACが行う。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】ヒストンにはヒストンテールと呼ばれるドメインが存在しアセチル化・リン酸化・メチル化・ユビキチン化の修飾を受ける。これをヒストン修飾と呼ぶ',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】ヒストンのメチル化とアセチル化はどの部位に生じても対象の遺伝子の発現を活性化させる。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】ヒストンのメチル化はリジン残基に生じる',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】ヒストンはH2A・H2B・H3・H4が2分子ずつ結合した8量体を形成しておりそれにDNAが巻き付く。巻き付いたDNAの外からH1が結合した構造をとり、ヒストンに巻き付いたDNAは転写抑制がかかっている。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】ヒトの悪性腫瘍のほとんどは体腔や消化管などの壁面や皮膚では体表の覆いとして一面に覆っている細胞の層である上皮から発生しており、癌と呼ばれる。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】ヒドロキシラジカルは脳梗塞や心筋梗塞の病変拡大に関与する。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】ビリルビン・メラニン・リポフスチン・胆汁はいずれもHE染色では褐色顆粒として認められる。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】ビリルビンが小腸で吸収され肝臓に戻ることを腸肝循環という。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】ビリルビンの直接型・間接型はvan Gieson反応の差である。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '【正誤問題】ピルビン酸はLDHにより乳酸を生成する。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】プロモーターDNAのメチル化ではMeCP複合体に含まれるHATにより脱アセチル化も生じる',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】プロモーターDNAのメチル化により転写因子の結合が阻害される',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】プロモーターDNAのメチル化はCpG islandのグアニンのメチル化を指す',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】ブロモドメインタンパク質はアセチル化ヒストンのアセチル基を認識しヒストンを除去する。これにより転写が促進される',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】ベーチェット病では再発性のアフタ性口内炎やドライアイの症状が見られる。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】ポリオール代謝亢進により還元型グルタミンが減少し酸化ストレスが増加する',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】マクロファージは RAGE やスカベンジャー受容体などを介し終末糖化産物による炎症作用を発現する',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】マクロファージは抗原提示細胞であり、Fc受容体とMHCクラスⅡ分子を有している。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】ミューテーター遺伝子としてミスマッチ修復にかかわるMHLや一本鎖切断修復、二本鎖切断修復にかかわる BRCA1/2 がある',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】リウマチ性心筋炎は溶連菌感染が関与している',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】リポフスチンなどの老廃物にも終末糖化産物が蓄積している',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】リンパ球はB細胞とT細胞に大別され、 B細胞は抗体産生を行い、 T細胞は他の白血球の活動を調節する',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】るいそう、低脂肪食、 野菜食は大腸癌のリスクファクターである',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】悪性腫瘍はDNAの配列や染色体の構造を伴っていることがほとんどでこの変化を突然変異と呼ぶ。これは遺伝子突然変異と染色体突然変異に大別される',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】悪性腫瘍は増殖シグナルの活性化や生存シグナルの活性化が生じており、 周囲組織と関係なく自立的に増殖する。良性腫瘍ではこのような現象が観察されることは無い。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】悪性腫瘍は良性腫瘍と異なり周囲組織への浸潤転移を生じる。 癌では基底膜の破壊、 脈管侵襲として観察され、 肉腫では脈管への浸潤破壊の結果出血が見られる',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】異型狭心症は、冠動脈に血栓が一時的に生じて発症する',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】異型狭心症は、冠動脈の内腔が血栓により閉塞し生じる',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】遺伝子転座ではキメラ蛋白を生じることがあり、代表的なものに慢性骨髄性白血病のBCR/ABL遺伝子融合がある',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】遺伝子突然変異はDNAの配列に生じた変化であり、 一方染色体突然変異は染色体単位での大きな構造変化をさす',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】遺伝子突然変異は塩基の置換や挿入、 欠失があるが、 変異が生じた原因による特徴は特にない',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】炎症の四徴のひとつである浮腫は間質に体液が漏れ出して組織が腫脹している。 血管の透過性が亢進している場合を炎症性浮腫と呼び比重の低い漏出液が見られる',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】炎症メディエーターはケモカイン、C5a、 リポキシゲナーゼ等の血管作動性メディエーターとヒスタミン、ブラジキニンなどの走化性因子に大別される',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】炎症時の発赤、 発熱は毛細血管の開大による血流の増加を反映している。 また、血管透過性の亢進による滲出液 (transudate) が血管外に流出することにより腫脹が起きる',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】黄色のビリルビンは酸化されて青色のビリベルジンになる',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】加齢による発癌リスクの上昇は幹細胞分裂回数と関連する',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】家族性大腸腺腫症に脳腫瘍を合併するものを Gardner 症候群という。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】過酸化脂質は脂肪内に蓄積し肥満にける遺伝子異常に関与する',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】過酸化水素は好中球などで細菌などの分解に用いられる',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】我々は常に自然放射線や活性酸素種、紫外線やアルコール、ベンツピレン等の変異原にさらされておりDNA損傷が生じている',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】拡張型心筋症では線維化がみられ、 拡張障害が主にみられる',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】活性化癌遺伝子よりも癌抑制遺伝子の失活のほうが家族性癌症候群の原因として多い',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】活性酸素分子種の中で酵素的に分解されないのはスーパーオキサイドである',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】幹細胞はニッチシグナルに依存し幹細胞性を保っている。これらのシグナルは多段階発ガンで獲得すると考えられている変異に対応する',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】肝では星細胞、 肺では肺胞マクロファージ、 骨髄では骨髄巨核球が線維化を惹起する',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】肝や膵の星細胞はエタノール (飲酒) により活性化される',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】肝細胞障害による脂肪肝では中心肝静脈周囲の肝細胞に脂肪滴を生じやすい',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】肝重量の70%以上のトリグリセリドの蓄積により脂肪肝が生じる',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】間接型ビリルビンはミトコンドリアの酸化的リン酸化を阻害する',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】間接型ビリルビンは血中では免疫グロブリンと結合して運搬される',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】癌幹細胞の性質として抗がん剤に耐性をもつ、 活性酸素の除去能力が強い (ALDH1 等の高発現) 足場非依存性の増殖 (スフェロイド形成能)、 幹細胞マーカーの発現があげられる ',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】癌関連遺伝子には癌遺伝子、 癌抑制遺伝子があり Gatekeeper genes と呼ばれる. 他に遺伝子修復にかかわる Caretaker genes がある',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】癌抑制遺伝子が完全に不活化されるためには両アレルに変異を生じる必要があるが突然変異の生じる確立から考えると理論上ほぼ起こりえないほど低い。 実際には片アレルの変異が生じてから有糸組み換えを生じることで両アレルの変異が形成されておりこの現象をヘテロ接合性の消失 (LOH) とよぶ',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】癌抑制遺伝子の代表的なものにP53,RAS MYC等がある',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】急性炎症は炎症の急性期の反応で病原体と傷害された組織の除去、 炎症メディエーターの産生、 炎症細胞の動因が生じ、 最後に炎症メディエーターにたいする特異的阻害物質が働き炎症が終結する',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】牛肉の摂取は大腸癌のリスクファクターである',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】巨大化した脂肪細胞ではアディポネクチンが増加しインスリン耐性が低下する',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】強皮症では抗 Scl-70 抗体陽性となり、 Raynaud 現象や Gotton 徴候を認める。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】筋ジストロフィーでは、 骨格筋に神経原性萎縮を生じる',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】筋ジストロフィーでは線維化や脂肪化により仮性肥大を起こすことがある',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】結合体とは卵性双生児にみられることのある二重(重複)奇形である。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】血液の流入が増加しての血は起こり、小動脈が拡張する',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】血中ビリルビンが2mg/dl以上になると顕在性の黄疸を生じる',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】血糖の急激な上昇は酸化的リン酸化から乳酸発酵への代謝変更をもたらす',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】血漿由来の炎症性メディエーターにキニンや補体 (C3a, C5a) があり細胞由来のものにヒスタミンやセロトニン NOがある',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】抗原提示を受けたB細胞は Th1 および Th2 サイトカインを分泌し形質細胞に分化する。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】高カルシウム血症では不整脈、 神経炎、 意識障害などを生じる',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '【正誤問題】高血圧は心筋症の原因となる',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】高血圧は本態性高血圧と二次性高血圧に分けられ、二次性高血圧の方が圧倒的に多い',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】高血圧緊急症とは、血圧の著明な高値を示し、 臓器障害が生じる切迫した病態を指す',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】高血糖や酸化ストレスは蛋白質における終末糖化産物の形成を促進する',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】高脂肪食・高糖質食は大腸発癌・転移を促進する',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】高糖質により増加する酸化ストレスはミトコンドリアの抑制により減少する',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】最も頻度が高い先天性心疾患は心房中隔欠損(ASD)である',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】細動脈硬化症には血管壁に硝子化が認められる',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】細胞性免疫においてTcはパーフォリンにより細胞膜を破壊し、 細胞に壊死を誘導する。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】細胞内活性酸素の発生源としてミトコンドリアとNAD(P)H レダクターゼが重要である',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】細胞由来の炎症性メディエーターでもヒスタミンやHMGB1は細胞内で合成され貯蔵されている。 また、リン脂質やアラキドン酸の代謝に由来するものがある',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】酸化ストレスの一つである一酸化窒素は虚血性心疾患に抑制性に働く',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】酸化ストレスは蛋白変性やDNA損傷を惹き起こす',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】子宮頸部の生検で良性の変化を浸潤癌と誤って診断したために子宮全摘となったが、 病院長には報告しなかった。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '【正誤問題】脂質は酸化ストレスを蓄積する',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】脂肪過剰摂取では小葉辺縁性の脂肪肝を生じることが多い',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】脂肪過剰摂取では大滴性の脂肪肝を生じることが多い',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '【正誤問題】脂肪肝では間質の脂肪化生が見られる',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】自己抗原に対して反応性を有するT細胞は胸腺組織において負の選択により排除される。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】自然免疫とは感染や外来異物に対してその侵入前から体内に備わっている免疫システムで上皮による防御、好中球やマクロファージによる貪食細胞受容体を介した免疫システムがある',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】実質とは問質組織以外の組織細胞であり、 線維組織・脂肪組織炎症細胞などが含まれる',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】若年性の動脈硬化や早老性の白髪は Werner 症候群の主要徴候である。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】腫瘍の間質は腫瘍細胞が生存するための重要な栄養供給源となる。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】腫瘍形成は多段階からなる複雑なステップを経て生じる。 これらの変化には癌遺伝子の活性化と癌抑制遺伝子の不活化の両方が含まれる。 これを多段階発ガンとよぶ',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】収縮型心筋症では心筋細胞は肥大し、錯綜配列が認められる',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】終末糖化産物は粥状動脈硬化、 脂肪肝、 糖尿病合併症、アルツハイマー病、発癌に関与する',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】終末糖化産物は受容体であるCAGE を介し細胞増殖、細胞運動、血管新生を促進する',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】終末糖化産物は蛋白等に酸化ストレス刺激により酵素反応により糖の修飾が生じたものである',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】終末糖化産物もHMGB1 も RAGE の受容体になる',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】終末糖化産物遺伝子は複数の転写 variant を有する',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】上皮の発生源についてはすべて外胚葉由来でありそれゆえ、 癌という病理組織学的な分類は組織の発生学的な起源と連動している',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】上皮組織には共通した構造として基底膜を伴う。 基底膜は間質と呼ばれる支持結合織の層と上皮細胞の層を隔離している',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】常染色体優性遺伝病の患者が健常者と結婚した場合に子の2人に1人は保因者となる。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】食道閉鎖・食道気管瘻で最も頻度が高いのは、 Gross C型で、 食道と気管に交通はない',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】食物を加熱することにより発癌物質が発生する可能性がある',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】唇顎口蓋裂の発生機序は口唇と口蓋の低形成ないし無形成である。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】心サルコイドーシスでは、胸の形成がみられる',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】心筋梗塞の発症後から、マクロファージが認められる',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】心筋梗塞発症から約2日経過した症例では強い線維化がみられる',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】心原性脳塞栓は心房細動により主に右房に形成された血栓がはがれることで生じる。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】心室中隔欠損 (VSD)では、 1歳ほどは自然閉鎖が期待でき経過観察が可能である',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】心臓粘液腫は殆どが心房中隔に発生し、 悪性化はまれである',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】心不全では血管透過性が亢進し浮腫を生じる',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】真核生物のDNAは普段ヒストンという八量体のたんぱく質に巻きついて存在しており転写される際にはDNAがヒストンから乖離する。 これはDNAのメチル化とヒストン修飾によって制御されておりエビジェネティック制御と呼ばれている',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '【正誤問題】真性動脈瘤では動脈壁の破綻がみられる ',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】神経芽腫は MYCN 遺伝子異常がある場合予後不良である',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】神経性筋萎縮では萎縮筋線維の束状の集族が見られる',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】腎癌の手術標本において、 今までにあまり見たことのない組織像であったため腎腫瘍病理の専門家にコンサルテーションを依頼した。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】水素ガスにより効率よく酸化ストレスを除去できる',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '【正誤問題】成人胸腺は退縮しているのが正常である',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】正常幹細胞においてステムセルニッチから離れた細胞は分化を開始する。 がん細胞にも癌幹細胞ニッチが存在しその中に癌幹細胞が存在すると考えられている',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】正常幹細胞に遺伝子異常が入り、 癌幹細胞に変化する現象が確認されている。 自己複製能を持っていない前駆細胞などは癌幹細胞になれない',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】生成された終末糖化産物を分解する薬剤はまだ開発されていない',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】生体から完全に酸化ストレスを除去することががん予防のゴールのひとつである',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】赤血球のエネルギー代謝は主にミトコンドリアによる',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】染色体突然変異によって正常蛋白の発現量の変化が起きることがあるが、 この変化は腫瘍の悪性化には関与しない',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】線維化にはTGF-β、bFGF、 アンギオテンシンII などの因子が抑制性に関与する',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】組織幹細胞や生殖細胞ではhTERT によりテロメラーゼの活性化が抑えられている。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】組織型の分化度の低い悪性腫瘍はより分化しているものと比較して癌幹細胞の数が多くの転移が形成される',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】組織形態を決定している遺伝子が発見され遺伝子から形態を予測できる',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】多くの癌ではアポトーシスを抑制する生存シグナルが活性化しており ERK 経路や Akt 経路がそれにあたる',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】大型血管にみられる粥状動脈硬化には、外膜にアテロームが形成される',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】大腸癌の手術標本において、リンパ管、静脈侵襲の有無を精査するために免疫染色と特殊染色を行った。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】大腸発がんには COX2. iNOS. 終末糖化産物などによる慢性炎症が関与している',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】大動脈瘤の大半は、 粥状動脈硬化性で、 腹部大動脈に好発する',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】単純性脂肪肝の10%がNASHになりその2%以下が肝硬変に進展すると言われる',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】短時間に最も多くのエネルギーを供給できるのはフォスファーゲンである',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】胆汁酸中のdeoxycholic acid には大腸発がん促進作用がある',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】胆道結石、胆道癌、 転移性肝癌、膵炎は閉塞性黄疸の原因となる',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】胆嚢癌、乳癌、子宮内膜癌、大腸癌は体重増加と伴にリスクが増大する',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】中型筋性動脈に生じる動脈硬化病変では、中膜の硝子化がみられる',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】腸管内常在菌は年齢とともにいわゆる善玉菌が減少する',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】腸内環境ではオピオイドが形成されやすく免疫系に影響を与える',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】腸内細菌の発酵作用によりブチル酸などのエピジェネティック阻害の抑制物質が生成する',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】腸内細菌の変化は大腸癌のリスクとは関係しない',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】直接型ビリルビンは血液脳関門を通過しやすい',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】陳旧性心筋梗塞の症例では心筋間に線維性瘢痕が形成されている',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】低形成とは組織や臓器が正常の大きさまで達しないものである ',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】分化ながん細胞ほど核クロマチンは凝集しており、細胞の極性も保たれる。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】糖が過剰な状況では acetyl CoA からトリグリセリドが合成され脂肪細胞に貯蔵される',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】糖尿病により最も発癌リスクが高まるのは胃癌である',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】糖尿病性神経障害では末期では激痛は消失することが多い',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】糖尿病性神経障害の原因として高血糖、 酸化ストレス、終末糖化産物、 PKCE 活性化が挙げられる',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】動物性脂肪は飽和脂肪酸に富み融点が植物性脂肪よりも低い',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】動脈硬化は脳梗塞や虚血性心疾患のリスク因子である',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】動脈酸素分圧の上昇とプロスタグランジンの低下により、動脈管は閉鎖する',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】同じ個体に発癌物質・発癌プロモーターが同時に作用し発癌することを two hit theory という',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】同一のシグナル経路 (例えば KRAS と PI3K や Akt) 内での変異はそうでないもの (例えば KRAS とAPC) と比較して重複することが多い',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】二本鎖切断の修復機構には非相同末端連結と相同組み換え修復があるが後者ではエラーがおきやすい',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '【正誤問題】日本人の約1/3が癌により死亡する',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '【正誤問題】乳酸は酸化的リン酸化を促進する',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】乳腺針生検で乳癌を見逃し数か月後に周囲組織への癌の浸潤とリンパ管侵襲をきたしたが、 主治医にはその事実を伝えなかった。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '【正誤問題】乳頭筋断裂は心筋梗塞の合併症である',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '【正誤問題】脳梗塞では凝固壊死を呈する',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】排除が遅れたアポトーシス細胞は抗原性を示すことがある',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '【正誤問題】肺梗塞では、肺胞内に出血がみられる',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】梅毒では腹部大動脈に大動脈瘤を形成しやすく、栄養血管の炎症と中膜弾性板の破壊がみられる',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '【正誤問題】白血病は出血傾向のリスクである',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】白内障では水晶体に変性蛋白が蓄積することで視力低下をきたす。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '【正誤問題】発癌物質はDNAに付加体を生じる',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】伴性劣性遺伝病 (X連鎖性劣性遺伝病) はいかなる場合でも女性に発症することはない。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】晩期型の先天性梅毒では Hutchinson の歯、 伝令性難聴、角膜炎を認めることが多い。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】肥大型心筋症では、 心室中隔が対称性に肥厚する',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】肥満 糖尿病、高脂血症、高血圧は動脈硬化を助長する 「死の四重奏」である。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】非上皮性の悪性腫瘍の中で体中のさまざまな結合組織から生じるものを肉腫と呼ぶ。 これらの組織は中胚葉起源である',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】非上皮性の悪性腫瘍の中で免疫担当細胞を含むさまざまな造血組織から発生する悪性腫瘍はリンパ系列の腫瘍と骨髄球系列の腫瘍に大別される。 これらの組織は中胚葉起源である',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】病理専門医研修指導医でありながら、 レジデントから依頼された剖検標本のチェックを正当な理由なく怠った。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】父親由来の15q11-13 の欠失ではUBE3A の機能喪失によりAngelman症候群を発症する。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】変異によってニッチシグナルの下流が恒常活性化するとニッチから独立することができる。ニッチシグナルから完全に独立した細胞はすべて悪性腫瘍細胞となる',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】変性とは正常代謝物の異常蓄積や異常代謝物の蓄積が、 組織細胞内に生じることである',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】網膜芽細胞腫では遺伝子異常が認められ、 常染色体優性遺伝である',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】良性腫瘍は悪性腫瘍と比較して増殖能が乏しいために変性や壊死が生じやすい。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】老人肺では弾性線維の減少により気腔が拡大するが肺胞は破壊されない。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】顆粒白血球は貪食作用の強い好中球、 アレルギー性の炎症に関与する好酸球、ヒスタミンを放出する好塩基球がある',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence: '【正誤問題】',
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence: '【正誤問題】',
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence: '【正誤問題】',
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence: '【正誤問題】',
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence: '【正誤問題】',
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence: '【正誤問題】',
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence: '【正誤問題】',
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence: '【正誤問題】',
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence: '【正誤問題】',
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence: '【正誤問題】',
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
      ],
    },
    {
      groupTag: '正誤問題集２',
      groupContents: [
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '【正誤問題】',
          answerImg: [],
          answer: '',
          commentary: '',
        },
      ],
    },
    {
      groupTag: '出席確認',
      groupContents: [
        {
          detailInfo: '4/18午前',
          questionImg: [],
          questionSentence:
            '【正誤問題】COX2はアラキドン酸をプロスタグランジンへ変換する。',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '4/18午前',
          questionImg: [],
          questionSentence:
            '【正誤問題】α-リノレン酸はn6系の不飽和脂肪酸でアラキドン酸を経てプロスタグランジンになる',
          answerImg: [],
          answer:
            '誤り...α-リノレン酸はn3系不飽和脂肪酸で、DHA・EPAに変換され動脈硬化や血栓の抑止にはたらくといわれている。',
          commentary: '',
        },
        {
          detailInfo: '4/18午前',
          questionImg: [],
          questionSentence:
            '【正誤問題】ウェルシュ菌は食中毒菌であり腸内には常在しない。',
          answerImg: [],
          answer: '正しい',
          commentary: '加齢とともに腸内に増えるといわれている。',
        },
        {
          detailInfo: '4/18午前',
          questionImg: [],
          questionSentence:
            '【正誤問題】ヒドロキシラジカルは脳梗塞や心筋梗塞の病変拡大に寄与する',
          answerImg: [],
          answer: '正しい',
          commentary: 'ヒドロキシラジカルは活性酸素ROSの中心的な物質。',
        },
        {
          detailInfo: '4/18午前',
          questionImg: [],
          questionSentence:
            '【正誤問題】加齢による発がんリスクの上昇は幹細胞分裂回数と関連する',
          answerImg: [],
          answer: '正しい',
          commentary: '一般的にがん細胞は組織幹細胞から生まれる',
        },
        {
          detailInfo: '4/18午前',
          questionImg: [],
          questionSentence:
            '【正誤問題】我々は常に自然放射線や活性酸素種、紫外線やアルコール、ベンツピレン等の変異原にさらされておりDNA損傷が生じている。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '4/18午前',
          questionImg: [],
          questionSentence:
            '【正誤問題】活性酸素分子種の中で酵素的に分解されないのはヒドロキシラジカルである。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '4/18午前',
          questionImg: [],
          questionSentence:
            '【正誤問題】赤身肉の摂取は大腸がんのリスクファクターである',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '4/18午前',
          questionImg: [],
          questionSentence:
            '【正誤問題】高脂肪食・高糖質食は大腸発がん・転移を促進する。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '4/18午前',
          questionImg: [],
          questionSentence:
            '【正誤問題】腫瘍形成は多段階からなる複雑なステップを経て生じる。これらの変化にはがん遺伝子の活性化とがん抑制遺伝子の不活化の両方が含まれる。これを多段階発がんと呼ぶ。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '4/18午前',
          questionImg: [],
          questionSentence:
            '【正誤問題】終末糖化産物は蛋白などに酸化ストレス刺激により酵素反応により糖の修飾が生じたものである。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '4/18午前',
          questionImg: [],
          questionSentence:
            '【正誤問題】成人胸腺は退縮しているのが正常である。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '4/18午前',
          questionImg: [],
          questionSentence:
            '【正誤問題】単純性脂肪肝の10%がNASHになりその2%以下が肝硬変に進展するといわれる。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '4/18午前',
          questionImg: [],
          questionSentence:
            '【正誤問題】直接型ビリルビンは血液脳関門を通過しやすい',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '4/18午前',
          questionImg: [],
          questionSentence:
            '【正誤問題】間接型ビリルビンはミトコンドリアの酸化的リン酸化を阻害する',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '4/18午前',
          questionImg: [],
          questionSentence:
            '【正誤問題】3価鉄はFenton反応によりヒドロキシラジカルを生成し発がんに関与する',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '4/18午前',
          questionImg: [],
          questionSentence:
            '【正誤問題】副甲状腺ホルモンは骨へのカルシウム沈着を促進する。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '4/18午前',
          questionImg: [],
          questionSentence: '【正誤問題】フィブリノイド壊死は動脈炎で見られる',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '4/18午前',
          questionImg: [],
          questionSentence:
            '【正誤問題】アミロイドβはタンパク折り畳み障害により発生する。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        // {
        //   detailInfo: '4/18午前',
        //   questionImg: [],
        //   questionSentence:
        //     '【正誤問題】アミロイドβはタンパク折り畳み障害により発生する。',
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
      ],
    },
    {
      groupTag: '反転講義',
      groupContents: [
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '細胞死の分類について述べよ',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: 'programmed cell deathとは何か？',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: 'ネクローシスの形態的特徴は何か？',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: 'アポトーシスの形態的特徴は何か？',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '壊疽とは何か？',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '乾酪壊死とは何か？',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence: '',
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence: '',
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence: '',
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence: '',
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence: '',
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
      ],
    },
  ])
  const showQuestionList = () => {
    return questionList
  }
  return {
    showQuestionList,
    appName,
    jpName,
  }
}
