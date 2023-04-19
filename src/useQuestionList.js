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
            '【正誤問題】13トリソミーでは馬蹄腎・臍ヘルニア・揺り椅子状の測定を認めることが多い。',
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
            '【正誤問題】Chediak-Higashi症候群では化生酸素の産生異常により殺菌能が低下する。',
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
          questionSentence: '【正誤問題】',
          answerImg: [],
          answer: '',
          commentary: '',
        },
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
