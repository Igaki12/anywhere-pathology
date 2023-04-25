import { useState } from 'react'
import prostaticHyperplasia from './img/answer/prostaticHyperplasia.png'
import fattyLiver from './img/answer/fattyLiver.png'
import methylationDNA from './img/answer/methylationDNA.png'
import maintenanceMethylationDNA from './img/answer/maintenanceMethylationDNA.png'
import NHEJ from './img/answer/NHEJ.png'
import MMR from './img/answer/MMR.png'
import BRD4 from './img/answer/BRD4.png'
import histoneStructure from './img/answer/histoneStructure.png'
import coordinatedHistone from './img/answer/coordinatedHistone.png'
import acetylationHistone from './img/answer/acetylationHistone.png'
import tumorSuppressorGene from './img/answer/tumorSuppressorGene.png'
import PARP from './img/answer/PARP.png'
import mutationType from './img/answer/mutationType.png'
import LOH from './img/answer/LOH.png'
import hematopoieticStemCell from './img/answer/hematopoieticStemCell.png'
import gatekeeper from './img/answer/gatekeeper.png'
import chromosomalMutation from './img/answer/chromosomalMutation.png'
import carcinogenesisStep from './img/answer/carcinogenesisStep.png'
import carcinogenesis from './img/answer/carcinogenesis.png'
import cancer from './img/answer/cancer.png'
import programmedCellDeath from './img/answer/programmedCellDeath.png'
import necrosisApoptosis from './img/answer/necrosisApoptosis.png'
import necrosis from './img/answer/necrosis.png'
import cellDeathVariations from './img/answer/cellDeathVariations.png'
import cellDeath from './img/answer/cellDeath.png'
import nicheSignalCancer from './img/answer/nicheSignalCancer.png'
import nicheControlCancer from './img/answer/nicheControlCancer.png'
import moenckeberg from './img/answer/moenckeberg.png'
import hypertension from './img/answer/hypertension.png'
import hypermiaCongestion from './img/answer/hypermiaCongestion.png'
import cerebralInfarction from './img/answer/cerebralInfarction.png'
import cancerStemCell2 from './img/answer/cancerStemCell2.png'
import cancerStemCell1 from './img/answer/cancerStemCell1.png'
import atherosclerosis1 from './img/answer/atherosclerosis1.png'
import aneurysmTypes from './img/answer/aneurysmTypes.png'
import schoenleinHenoch from './img/answer/schoenleinHenoch.png'

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
          answerImg: [atherosclerosis1],
          answer: '誤り...HDLではなくLDL',
          commentary: 'HDLは善玉コレステロール',
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
      groupTag: '正誤問題集',
      groupContents: [
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】13トリソミーでは馬蹄腎・臍ヘルニア・揺り椅子状の足底を認めることが多い。',
          answerImg: [chromosomalMutation],
          answer: '誤り...13ではなく18のトリソミー',
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
          answerImg: [methylationDNA],
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
          answerImg: [methylationDNA],
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
            '【正誤問題】DNAのメチル化が生じるとそれを認識する蛋白とHDAC（ヒストン脱アセチル化酵素）の複合体が形成されヒストンが脱アセチル化される。これにより標的遺伝子の発現亢進が起きる。',
          answerImg: [methylationDNA],
          answer: '誤り...標的遺伝子の発現は抑制される。',
          commentary:
            'DNAメチル化は1.転写因子結合を阻害したり2.DNAメチル化認識タンパクMBPを介した制御を行うことで下流遺伝子の発現を抑制する。また、一般的にヒストンはHATによりアセチル化されると発現亢進され、HDACにより脱アセチル化されると発現抑制される。',
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
          answerImg: [maintenanceMethylationDNA],
          answer: '正しい',
          commentary:
            'DNAメチル化を維持する酵素DNMT1は、ユビキチン化されたH3ヒストンの23番目リシン残基と相互作用を介してメチル化部位へリクルートされる。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】DNAはメチル化を受けても脱酵素TETによって脱メチル化される。TETの異常はエピジェネティック制御を介し腫瘍化を促進する。',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】DNA修復機構のミスが生じると遺伝子変異が残存することとなるが、二本鎖切断の方が一本鎖切断よりもミスが生じやすい。',
          answerImg: [NHEJ],
          answer: '正しい',
          commentary:
            '二本鎖修復の際のDNA修復機構はHR:相同組み換え修復とNHEJ:非相同末端連結に分類されるが、特にNHEJは鋳型が無いため変異が起こりやすい。ゲノム編集技術に利用される。',
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
          answer: '誤り...三塩基リピート病ではない',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】Eisenmenger化とは、先天性深枝間により肺血管抵抗の低下から左→右シャントが優勢になった状態を指す。',
          answerImg: [],
          answer: '誤り..血管抵抗の低下ではない、左→右シャントではない.',
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
            '【正誤問題】Goodpasture症候群、溶血性貧血、Schoenlein-Henoch紫斑症はⅡ型アレルギーで起こる。',
          answerImg: [schoenleinHenoch],
          answer: '誤り...Hernoch-Schnlein紫斑症はIgAによるアレルギーが原因。',
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
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】Hirschsprung病では、神経節を欠損し、外来神経は過形成である。',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】HIVは感染後数週間で血中のRNA量が急上昇するが、その後の数年は安定した値に保たれる。',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】HMGB1が高値のエンドトキシンショックでは予後良好である。',
          answerImg: [],
          answer: '誤り...予後不良である',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】HMGB1は炎症性サイトカインのひとつでショックを憎悪する。',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】HNPCCは右側結腸に好発し、関連癌として大腸癌以外に腎盂・尿管癌や小腸癌などがある。',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】Hutchinson-Gilford症候群では大泉門の閉鎖不全による水頭症様の顔貌を呈する。',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】IgM抗体はB細胞表面に受容体として存在しており、血清中では五量体を形成している。',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】Ⅰ型アレルギーでは肥満細胞のFc受容体にIgE抗体が結合することで脱顆粒がおこる。',
          answerImg: [],
          answer: '誤り...',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】Kartagener症候群では内臓逆位を認め、線毛機能不全を呈し、巨大結腸症を合併する。',
          answerImg: [],
          answer: '誤り...巨大結腸症ではない',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】MELASやMERRFでは血中の尿酸やピルビン酸が高値となる。',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】MEN2AではRETの突然変異による発症し、副甲状腺機能亢進や褐色細胞腫を認める。',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】Menkes症候群は小腸での銅吸収障害をきたす伴性劣性遺伝病で、末期には肝硬変の像を呈する。',
          answerImg: [],
          answer: '誤り...肝硬変の像を呈さない',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】MLH1、MSH2、MGMTなどDNAミスマッチ修復遺伝子はエピジェネティックな影響を受ける。',
          answerImg: [MMR],
          answer: '誤り...MGMTはミスマッチ修復MMRの関連遺伝子ではない。',
          commentary:
            'ミスマッチ修復に関わるMLH1、MSH2、PMS2などはミューテーター遺伝子と呼ばれる。MGMTとはO⁶-メチルグアニンDNAメチルトランスフェラーゼで、メチル化グアニンをもとのグアニンに戻す働きをする（サーベイランス）修復酵素。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】NASHでは小滴性脂肪肝・水滴細胞出現・線維化・炎症細胞浸潤が見られる。',
          answerImg: [],
          answer: '誤り...小滴性脂肪肝ではない',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】P53は4量体であり4量体結合ドメインとDNA結合ドメインを持つ。これをもとに考えるとP53は4量体結合ドメインの片アレルの変異のみで1/16まで正常蛋白量が落ちることになる。',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },

        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】P53はDNA損傷に反応しp21などを誘導し細胞終期を停止し遺伝子を修復する。遺伝子が修復不能なほど損傷した場合はアポトーシスを誘導する。',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】P53やRbといったがん抑制遺伝子の欠損した家系が報告されており（P53欠損はLi-Fraumeni症候群、Rb欠損は家族性網膜芽細胞腫）悪性腫瘍を若年で発症する。',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】PARP阻害薬 は一本鎖切断修復酵素の阻害薬でありBRCA1、BRCA2に異常のある悪性腫瘍に適応がある。BRCA1、BRCA2に異常のある細胞はDNAを修復できず分裂致死となる。',
          answerImg: [PARP],
          answer: '正しい',
          commentary:
            'BRCA1・2は乳がん・卵巣がん細胞で異常があることが多く、相同組み換えHRに関連するがん抑制遺伝子である。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】Turner症候群では父親由来のX染色体が喪失していることが多く、卵巣は痕跡的である。',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】von Reclinghausen病では多発性の神経線維腫や皮膚にカフェオレ斑がみられる。',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】Warburg効果とは酵素存在下でも解糖系に偏ったエネルギー酸性を行うがん細胞の特性である。',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】Warburg効果により酸化ストレスの生成を低減できるとされる',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】αklothoはランゲルハンス島におけるインスリンの分泌を制御する。',
          answerImg: [],
          answer: '誤り...αklothoではない',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】α-リノレン酸はn-6系の不飽和脂肪酸でアラキドン酸を経てプロスタグランジンになる。',
          answerImg: [],
          answer: '誤り...α-リノレン酸ではなくリノール酸',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】アザシチジンはDNMT(DNAメチルトランスフェラーゼ)に結合し失活させることでDNAメチル化を促進する。',
          answerImg: [],
          answer: '誤り...DNAメチル化を抑制してしまう',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】アポトーシスの主な経路は1.デスレセプター、2.生存シグナルの除去、3.RIPK経路の活性化が挙げられる。',
          answerImg: [],
          answer: '誤り...RIPKの経路を活性化しない',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】アミロイド、ヒアリン、フィブリノイドはHE染色の染色性の違いから鑑別される。',
          answerImg: [],
          answer: '誤り...鑑別できない',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】アラキドン酸はシクロオキシゲナーゼCOX1・2によって代謝され、プロスタグランジンH2(PGH2)が産生される。これらはトロンボキサンや他のプロスタグランジンの基質になる。',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】インスリン抵抗性は動脈硬化を抑制する。',
          answerImg: [],
          answer: '誤り...動脈硬化を促進する',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】ウイルス性心筋炎は心筋細胞間にリンパ球浸潤がみられる。',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】ウェルシュ菌は食中毒菌であり腸内には常在しない',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】がんの経過中に高カルシウム血症をきたすと腎不全を引き起こす可能性がある。',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】がん幹細胞は、自己再生能と腫瘍を構成する様々な系統のがん細胞をつくり、一個から新しい集団をつくる多分化能をもつ。',
          answerImg: [cancerStemCell1],
          answer: '正しい',
          commentary: '→転移・再発（悪性度）に関与。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】がん幹細胞を標的とした治療にWNT経路やNOTCH経路のよう幹細胞性を維持するための経路の阻害や幹細胞マーカーに対する抗体治療などが挙げられる。',
          answerImg: [],
          answer: '正しい',
          commentary:
            'ただしがん細胞には可塑性があり、がん幹細胞だけをターゲットにしてもがん幹細胞が復活する結果も出てきている',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】がん細胞は伝的変化とクローン選択を受けながら不均一な細胞集団を作り出していると考えられているが、がん細胞の大部分を占める集団ではなく、がん幹細胞に生じた変化が主に形質として受け継がれていく。',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】クルーケンベルグ腫瘍が男性に生じることは無い',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】グルコースはアルドラーゼによりソルビトールを生成し細胞外浮腫の原因となる。',
          answerImg: [],
          answer: '誤り...アルドラーゼではなく、細胞外浮腫ではない',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】グルタミノリシスによるエネルギー産生は腫瘍細胞に特異的である。',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】グルタミンはDNA合成における窒素源となる',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】グルタミンはα-ケトグルタル酸に代謝されペントースリン酸経路に組み込まれる。',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】グルタミンはオキサロ酢酸からアセチルCoAによりクエン酸を生成する。',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】グルタミンはオキサロ酢酸からピルビン酸キナーゼによりピルビン酸になる。',
          answerImg: [],
          answer: '誤り...ピルビン酸キナーゼではない',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】グルタミンはグルタチオンの原料として細胞のレドックスに関与する',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】グルタミンはリンゴ酸に代謝されマリック・エンザイムによりピルビン酸になる。',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】コール酸はコレステロール排出に重要である',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】サーチュインは脈絡層におけるカルシウムイオンの輸送に関わる',
          answerImg: [],
          answer: '誤り...サーチュインではない',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】すべての酸化ストレスを消失させることにより寿命が著明に延長される',
          answerImg: [],
          answer: '誤り...寿命が著明に延長されるわけではない',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】たこつぼ型心筋症では心尖部の収縮能が亢進している',
          answerImg: [],
          answer: '誤り...亢進しない',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】トランス型脂肪酸はLDLを増加させ粥状動脈硬化を促進する',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】トランス型脂肪酸は人工的な合成によって生成し自然界には存在しない',
          answerImg: [],
          answer: '誤り...自然界にも存在する',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】トランス型脂肪酸は同じ炭素数のシス型脂肪酸よりも融点が高い',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】トリグリセリドはグリセロールと3個の脂肪酸からなる',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】ヒストンがHistone acetyl transferase(HAT) によってアセチル化されると転写の亢進が起きる。この逆反応はHDACが行う。',
          answerImg: [acetylationHistone],
          answer: '正しい',
          commentary:
            'ヒストンのアセチル化はリジン残基に対して行われ、転写活性化の役割を担うことがおおい。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】ヒストンにはヒストンテールと呼ばれるドメインが存在しアセチル化・リン酸化・メチル化・ユビキチン化の修飾を受ける。これをヒストン修飾と呼ぶ',
          answerImg: [coordinatedHistone],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】ヒストンのメチル化とアセチル化はどの部位に生じても対象の遺伝子の発現を活性化させる。',
          answerImg: [coordinatedHistone],
          answer:
            '誤り...ヒストンのメチル化は遺伝子発現を活性化する場合も抑制する場合も両方存在する。',
          commentary:
            'DNAメチル化とは異なり、ヒストンのメチル化はメチル化される場所によって転写を活性化も不活性化もする。例えばH3K4me3,H3K4me1,H3K36me3は転写を活性化、H3K27me3,H3K9me3は転写を不活性化させるといわれている。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】ヒストンのメチル化はリジン残基に生じる',
          answerImg: [coordinatedHistone],
          answer: '誤り...リジン残基だけでなくアルギニン残基にも生じる',
          commentary: 'リジン→K、アルギニン→R',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】ヒストンはH2A・H2B・H3・H4が2分子ずつ結合した8量体を形成しておりそれにDNAが巻き付く。巻き付いたDNAの外からH1が結合した構造をとり、ヒストンに巻き付いたDNAは転写抑制がかかっている。',
          answerImg: [histoneStructure],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】ヒトの悪性腫瘍のほとんどは体腔や消化管などの壁面や皮膚では体表の覆いとして一面に覆っている細胞の層である上皮から発生しており、癌と呼ばれる。',
          answerImg: [cancer],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】ヒドロキシラジカルは脳梗塞や心筋梗塞の病変拡大に関与する。',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】ビリルビン・メラニン・リポフスチン・胆汁はいずれもHE染色では褐色顆粒として認められる。',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】ビリルビンが小腸で吸収され肝臓に戻ることを腸肝循環という。',
          answerImg: [],
          answer: '誤り...ビリルビンではない',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】ビリルビンの直接型・間接型はvan Gieson反応の差である。',
          answerImg: [],
          answer: '誤り...van Gieson反応ではない',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '【正誤問題】ピルビン酸はLDHにより乳酸を生成する。',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】プロモーターDNAのメチル化ではMeCP複合体に含まれるHATにより脱アセチル化も生じる',
          answerImg: [acetylationHistone],
          answer: '誤り...ヒストン脱アセチル化はHDACによって行われる。',
          commentary:
            'プロモーターDNAのメチル化ではHDACによるヒストン脱アセチル化が誘導され、いずれも遺伝子発現を抑制する。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】プロモーターDNAのメチル化により転写因子の結合が阻害される',
          answerImg: [methylationDNA],
          answer: '正しい',
          commentary:
            'DNAメチル化により、1.転写因子の結合が阻害され、2.メチル化認識タンパクMBPを介した抑制が行われる。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】プロモーターDNAのメチル化はCpG islandのグアニンのメチル化を指す',
          answerImg: [maintenanceMethylationDNA],
          answer: '誤り...CpGのシトシン',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】ブロモドメインタンパク質はアセチル化ヒストンのアセチル基を認識しヒストンを除去する。これにより転写が促進される',
          answerImg: [BRD4],
          answer: '正しい',
          commentary:
            'BRD4はブロモドメインによるアセチル化ヒストンへの接触に依存したヒストンシャペロン活性を持ち転写伸長を促進する。ヒストンアセチル化→転写亢進',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】ベーチェット病では再発性のアフタ性口内炎やドライアイの症状が見られる。',
          answerImg: [],
          answer: '誤り...ドライアイではない',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】ポリオール代謝亢進により還元型グルタミンが減少し酸化ストレスが増加する',
          answerImg: [],
          answer: '誤り...グルタミンではなくGSH',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】マクロファージは RAGE やスカベンジャー受容体などを介し終末糖化産物による炎症作用を発現する',
          answerImg: [],
          answer: '誤り...抗炎症作用を発現させない',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】マクロファージは抗原提示細胞であり、Fc受容体とMHCクラスⅡ分子を有している。',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】ミューテーター遺伝子としてミスマッチ修復にかかわるMHLや一本鎖切断修復、二本鎖切断修復にかかわる BRCA1/2 がある',
          answerImg: [],
          answer: '誤り...MHLではない',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】リウマチ性心筋炎は溶連菌感染が関与している',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】リポフスチンなどの老廃物にも終末糖化産物が蓄積している',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】リンパ球はB細胞とT細胞に大別され、 B細胞は抗体産生を行い、 T細胞は他の白血球の活動を調節する',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】るいそう、低脂肪食、 野菜食は大腸癌のリスクファクターである',
          answerImg: [],
          answer: '誤り...リスクファクターではない',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】悪性腫瘍はDNAの配列や染色体の構造を伴っていることがほとんどでこの変化を突然変異と呼ぶ。これは遺伝子突然変異と染色体突然変異に大別される',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】悪性腫瘍は増殖シグナルの活性化や生存シグナルの活性化が生じており、 周囲組織と関係なく自立的に増殖する。良性腫瘍ではこのような現象が観察されることは無い。',
          answerImg: [],
          answer: '誤り...良性腫瘍でも観察される',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】悪性腫瘍は良性腫瘍と異なり周囲組織への浸潤転移を生じる。 癌では基底膜の破壊、 脈管侵襲として観察され、 肉腫では脈管への浸潤破壊の結果出血が見られる',
          answerImg: [carcinogenesis],
          answer: '正しい',
          commentary:
            '良性腫瘍は転移浸潤を起こさない。悪性腫瘍は血行（主として静脈）・リンパ管・腹腔胸腔骨髄腔を介して転移していく。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】異型狭心症は、冠動脈に血栓が一時的に生じて発症する',
          answerImg: [],
          answer: '誤り...血栓ではない',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】異型狭心症は、冠動脈の内腔が血栓により閉塞し生じる',
          answerImg: [],
          answer: '誤り...血栓ではない',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】遺伝子転座ではキメラ蛋白を生じることがあり、代表的なものに慢性骨髄性白血病のBCR/ABL遺伝子融合がある',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】遺伝子突然変異はDNAの配列に生じた変化であり、 一方染色体突然変異は染色体単位での大きな構造変化をさす',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】遺伝子突然変異は塩基の置換や挿入、 欠失があるが、 変異が生じた原因による特徴は特にない',
          answerImg: [],
          answer: '誤り...遺伝子突然変異は変異の原因による特徴がある',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】炎症の四徴のひとつである浮腫は間質に体液が漏れ出して組織が腫脹している。 血管の透過性が亢進している場合を炎症性浮腫と呼び比重の低い漏出液が見られる',
          answerImg: [],
          answer: '誤り...漏出液は比重が大きい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】炎症メディエーターはケモカイン、C5a、 リポキシゲナーゼ等の血管作動性メディエーターとヒスタミン、ブラジキニンなどの走化性因子に大別される',
          answerImg: [],
          answer: '誤り...ケモカインは走化性因子',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】炎症時の発赤、 発熱は毛細血管の開大による血流の増加を反映している。 また、血管透過性の亢進による滲出液 (transudate) が血管外に流出することにより腫脹が起きる',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】黄色のビリルビンは酸化されて青色のビリベルジンになる',
          answerImg: [],
          answer: '誤り...あおいろではない',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】加齢による発癌リスクの上昇は幹細胞分裂回数と関連する',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】家族性大腸腺腫症に脳腫瘍を合併するものを Gardner 症候群という。',
          answerImg: [],
          answer: '誤り...Gardner症候群ではない',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】過酸化脂質は脂肪内に蓄積し肥満にける遺伝子異常に関与する',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】過酸化水素は好中球などで細菌などの分解に用いられる',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】我々は常に自然放射線や活性酸素種、紫外線やアルコール、ベンツピレン等の変異原にさらされておりDNA損傷が生じている',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】拡張型心筋症では線維化がみられ、 拡張障害が主にみられる',
          answerImg: [],
          answer: '誤り...拡張障害ではない',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】活性化癌遺伝子よりも癌抑制遺伝子の失活のほうが家族性癌症候群の原因として多い',
          answerImg: [tumorSuppressorGene],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】活性酸素分子種の中で酵素的に分解されないのはスーパーオキサイドである',
          answerImg: [],
          answer: '誤り...スーパーオキサイドではなくヒドロキシラジカル',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】幹細胞はニッチシグナルに依存し幹細胞性を保っている。これらのシグナルは多段階発ガンで獲得すると考えられている変異に対応する',
          answerImg: [nicheSignalCancer],
          answer: '正しい',
          commentary:
            'ニッチシグナル経路に対応する変異：APC、KRAS、TP53、SMAD4はすべて多段階発がんにも影響している。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】肝では星細胞、 肺では肺胞マクロファージ、 骨髄では骨髄巨核球が線維化を惹起する',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】肝や膵の星細胞はエタノール (飲酒) により活性化される',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】肝細胞障害による脂肪肝では中心肝静脈周囲の肝細胞に脂肪滴を生じやすい',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】肝重量の70%以上のトリグリセリドの蓄積により脂肪肝が生じる',
          answerImg: [],
          answer: '誤り...70%以上ではなく7%以上',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】間接型ビリルビンはミトコンドリアの酸化的リン酸化を阻害する',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】間接型ビリルビンは血中では免疫グロブリンと結合して運搬される',
          answerImg: [],
          answer: '誤り...免疫グロブリンではなくグルクロン酸',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】がん幹細胞の性質として抗がん剤に耐性をもつ、 活性酸素の除去能力が強い (ALDH1 等の高発現) 足場非依存性の増殖 (スフェロイド形成能)、 幹細胞マーカーの発現があげられる ',
          answerImg: [cancerStemCell2],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】癌関連遺伝子には癌遺伝子、 癌抑制遺伝子があり Gatekeeper genes と呼ばれる。 他に遺伝子修復にかかわる Caretaker genes がある',
          answerImg: [gatekeeper],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】癌抑制遺伝子が完全に不活化されるためには両アレルに変異を生じる必要があるが突然変異の生じる確率から考えると理論上ほぼ起こりえないほど低い。 実際には片アレルの変異が生じてから有糸組み換えを生じることで両アレルの変異が形成されておりこの現象をヘテロ接合性の消失 (LOH) とよぶ',
          answerImg: [LOH],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】癌抑制遺伝子の代表的なものにP53,RAS,MYC等がある',
          answerImg: [tumorSuppressorGene],
          answer: '誤り...MYCはがん抑制遺伝子ではない',
          commentary:
            'MYCは転写因子（転写を制御する物質）を活性化する、がん遺伝子（oncogenes）である。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】急性炎症は炎症の急性期の反応で病原体と傷害された組織の除去、 炎症メディエーターの産生、 炎症細胞の動因が生じ、 最後に炎症メディエーターにたいする特異的阻害物質が働き炎症が終結する',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】牛肉の摂取は大腸癌のリスクファクターである',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】巨大化した脂肪細胞ではアディポネクチンが増加しインスリン耐性が低下する',
          answerImg: [],
          answer: '誤り...巨大化した脂肪細胞ではない',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】強皮症では抗 Scl-70 抗体陽性となり、 Raynaud現象や Gotton徴候を認める。',
          answerImg: [],
          answer: '誤り...Gotton徴候ではない',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】筋ジストロフィーでは、 骨格筋に神経原性萎縮を生じる',
          answerImg: [],
          answer: '誤り...神経原性萎縮ではない',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】筋ジストロフィーでは線維化や脂肪化により仮性肥大を起こすことがある',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】結合体とは二卵性双生児にみられることのある二重(重複)奇形である。',
          answerImg: [],
          answer: '誤り...二卵性ではない',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】血液の流入が増加してうっ血は起こり、小動脈が拡張する',
          answerImg: [hypermiaCongestion],
          answer: '誤り...うっ血ではなく充血',
          commentary: 'うっ血は流出障害で、拡張するのは小静脈。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】血中ビリルビンが2mg/dl以上になると顕在性の黄疸を生じる',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】血糖の急激な上昇は酸化的リン酸化から乳酸発酵への代謝変更をもたらす',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】血漿由来の炎症性メディエーターにキニンや補体 (C3a, C5a) があり細胞由来のものにヒスタミンやセロトニン NOがある',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】抗原提示を受けたB細胞は Th1 および Th2 サイトカインを分泌し形質細胞に分化する。',
          answerImg: [],
          answer: '誤り...抗原提示を受けたのではない',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】高カルシウム血症では不整脈、 神経炎、 意識障害などを生じる',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '【正誤問題】高血圧は心筋症の原因となる',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】高血圧は本態性高血圧と二次性高血圧に分けられ、二次性高血圧の方が圧倒的に多い',
          answerImg: [],
          answer: '誤り...二次高血圧は少ない',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】高血圧緊急症とは、血圧の著明な高値を示し、 臓器障害が生じる切迫した病態を指す',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】高血糖や酸化ストレスは蛋白質における終末糖化産物の形成を促進する',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】高脂肪食・高糖質食は大腸発癌・転移を促進する',
          answerImg: [],
          answer: '正しい',
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
            '【正誤問題】最も頻度が高い先天性心疾患は心房中隔欠損(ASD)である',
          answerImg: [],
          answer: '誤り...心房中隔欠損症ではない',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】細動脈硬化症には血管壁に硝子化が認められる',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】細胞性免疫においてTcはパーフォリンにより細胞膜を破壊し、 細胞に壊死を誘導する。',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】細胞内活性酸素の発生源としてミトコンドリアとNAD(P)H レダクターゼが重要である',
          answerImg: [],
          answer: '誤り...レダクターゼではない',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】細胞由来の炎症性メディエーターでもヒスタミンやHMGB1は細胞内で合成され貯蔵されている。 また、リン脂質やアラキドン酸の代謝に由来するものがある',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】酸化ストレスの一つである一酸化窒素は虚血性心疾患に抑制性に働く',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】酸化ストレスは蛋白変性やDNA損傷を惹き起こす',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】子宮頸部の生検で良性の変化を浸潤癌と誤って診断したために子宮全摘となったが、 病院長には報告しなかった。',
          answerImg: [],
          answer: '誤り',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '【正誤問題】脂質は酸化ストレスを蓄積する',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】脂肪過剰摂取では小葉辺縁性の脂肪肝を生じることが多い',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】脂肪過剰摂取では大滴性の脂肪肝を生じることが多い',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '【正誤問題】脂肪肝では肝間質の脂肪化生が見られる',
          answerImg: [],
          answer: '誤り...肝間質ではない',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】自己抗原に対して反応性を有するT細胞は胸腺組織において負の選択により排除される。',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】自然免疫とは感染や外来異物に対してその侵入前から体内に備わっている免疫システムで上皮による防御、好中球やマクロファージによる貪食細胞受容体を介した免疫システムがある',
          answerImg: [],
          answer: '誤り...貪食T細胞受容体ではない',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】実質とは問質組織以外の組織細胞であり、 線維組織・脂肪組織炎症細胞などが含まれる',
          answerImg: [],
          answer: '誤り...線維組織・脂肪組織などは間質組織',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】若年性の動脈硬化や早老性の白髪は Werner 症候群の主要徴候である。',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】腫瘍の間質は腫瘍細胞が生存するための重要な栄養供給源となる。',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】腫瘍形成は多段階からなる複雑なステップを経て生じる。 これらの変化には癌遺伝子の活性化と癌抑制遺伝子の不活化の両方が含まれる。 これを多段階発ガンとよぶ',
          answerImg: [carcinogenesisStep],
          answer: '正しい',
          commentary: 'たとえばRASはがん遺伝子、P53はがん抑制遺伝子である。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】収縮型心筋症では心筋細胞は肥大し、錯綜配列が認められる',
          answerImg: [],
          answer: '誤り...収縮型ではない',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】終末糖化産物は粥状動脈硬化、 脂肪肝、 糖尿病合併症、アルツハイマー病、発癌に関与する',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】終末糖化産物は受容体であるCAGE を介し細胞増殖、細胞運動、血管新生を促進する',
          answerImg: [],
          answer: '誤り...受容体はRAGE',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】終末糖化産物は蛋白等に酸化ストレス刺激により酵素反応により糖の修飾が生じたものである',
          answerImg: [],
          answer: '誤り...酵素反応ではない',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】終末糖化産物もHMGB1 も RAGE の受容体になる',
          answerImg: [],
          answer: '誤り...RAGEはAGEの受容体',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】終末糖化産物遺伝子は複数の転写 variant を有する',
          answerImg: [],
          answer: '誤り...終末糖化産物遺伝子は存在しない',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】上皮の発生源についてはすべて外胚葉由来でありそれゆえ、 癌という病理組織学的な分類は組織の発生学的な起源と連動している',
          answerImg: [cancer],
          answer:
            '誤り...上皮には外胚葉由来の表皮のほか、消化管の内側などの内胚葉由来の組織も含まれる。',
          commentary: '非上皮性腫瘍は中胚葉由来',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】上皮組織には共通した構造として基底膜を伴う。 基底膜は間質と呼ばれる支持結合織の層と上皮細胞の層を隔離している',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】常染色体優性遺伝病の患者が健常者と結婚した場合に子の2人に1人は保因者となる。',
          answerImg: [],
          answer: '誤り...優性遺伝病の場合は1人/4人',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】食道閉鎖・食道気管瘻で最も頻度が高いのは、 Gross C型で、 食道と気管に交通はない',
          answerImg: [],
          answer: '誤り...食道と気管は交通している',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】食物を加熱することにより発癌物質が発生する可能性がある',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】唇顎口蓋裂の発生機序は口唇と口蓋の低形成ないし無形成である。',
          answerImg: [],
          answer: '誤り...無形成ではない',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】心サルコイドーシスでは、胸の形成がみられる',
          answerImg: [],
          answer: '誤り...肉芽ではない',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】心筋梗塞の発症直後から、マクロファージが認められる',
          answerImg: [],
          answer: '誤り...直後ではない',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】心筋梗塞発症から約2日経過した症例では強い線維化がみられる',
          answerImg: [],
          answer: '誤り...二日ではない',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】心原性脳塞栓は心房細動により主に右房に形成された血栓がはがれることで生じる。',
          answerImg: [],
          answer: '誤り...右房ではない',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】心室中隔欠損 (VSD)では、 1歳ほどは自然閉鎖が期待でき経過観察が可能である',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】心臓粘液腫は殆どが心房中隔に発生し、 悪性化はまれである',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】心不全では血管透過性が亢進し浮腫を生じる',
          answerImg: [],
          answer: '誤り...心不全では拍出力が下がり血管透過性は下がる',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】真核生物のDNAは普段ヒストンという八量体のたんぱく質に巻きついて存在しており転写される際にはDNAがヒストンから乖離する。 これはDNAのメチル化とヒストン修飾によって制御されておりエビジェネティック制御と呼ばれている',
          answerImg: [histoneStructure],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '【正誤問題】真性動脈瘤では動脈壁の破綻がみられる ',
          answerImg: [aneurysmTypes],
          answer: '誤り...動脈壁の破綻がみられるのは仮性動脈瘤',
          commentary: '真性動脈瘤は梅毒性大動脈瘤など。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】神経芽腫は MYCN 遺伝子異常がある場合予後不良である',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】神経性筋萎縮では萎縮筋線維の束状の集族が見られる',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】腎癌の手術標本において、 今までにあまり見たことのない組織像であったため腎腫瘍病理の専門家にコンサルテーションを依頼した。',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】水素ガスにより効率よく酸化ストレスを除去できる',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '【正誤問題】成人胸腺は退縮しているのが正常である',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】正常幹細胞においてステムセルニッチから離れた細胞は分化を開始する。 がん細胞にも癌幹細胞ニッチが存在しその中に癌幹細胞が存在すると考えられている',
          answerImg: [nicheControlCancer],
          answer: '正しい',
          commentary:
            'ニッチによる制御から独立する→がん幹細胞が増え制御できなくなるにつれて悪性度（転移・再発リスク）が増す',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】正常幹細胞に遺伝子異常が入り、 癌幹細胞に変化する現象が確認されている。 自己複製能を持っていない前駆細胞などは癌幹細胞になれない',
          answerImg: [],
          answer: '誤り...がん細胞は比較的自由にがん幹細胞へと変化する',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】生成された終末糖化産物を分解する薬剤はまだ開発されていない',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】生体から完全に酸化ストレスを除去することががん予防のゴールのひとつである',
          answerImg: [],
          answer: '誤り...酸化ストレス（活性酸素）は殺菌などで必要である。',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】赤血球のエネルギー代謝は主にミトコンドリアによる',
          answerImg: [],
          answer: '誤り...赤血球のエネルギー代謝は解糖系のみ',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】染色体突然変異によって正常蛋白の発現量の変化が起きることがあるが、 この変化は腫瘍の悪性化には関与しない',
          answerImg: [],
          answer: '誤り...染色体突然変異と腫瘍の悪性化は密接に関係している',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】線維化にはTGF-β、bFGF、 アンギオテンシンII などの因子が抑制性に関与する',
          answerImg: [],
          answer: '誤り...抑制性ではない',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】組織幹細胞や生殖細胞ではhTERT によりテロメラーゼの活性化が抑えられている。',
          answerImg: [],
          answer: '誤り...これらの細胞ではテロメラーゼが活性化されている',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】組織型の分化度の低い悪性腫瘍はより分化しているものと比較してがん幹細胞の数が多く、多くの転移が形成される',
          answerImg: [cancerStemCell1],
          answer: '正しい',
          commentary:
            'がん幹細胞は転移・再発に関与していて、がん幹細胞が多いほど悪性度が高い。また、がん幹細胞はがん細胞と比べて分化度が低い（多分化能）。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】組織形態を決定している遺伝子が発見され遺伝子から形態を予測できる',
          answerImg: [],
          answer: '誤り...予測できていない',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】多くの癌ではアポトーシスを抑制する生存シグナルが活性化しており ERK 経路や Akt 経路がそれにあたる',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】大型血管にみられる粥状動脈硬化には、外膜にアテロームが形成される',
          answerImg: [atherosclerosis1],
          answer: '誤り...外膜ではなく内膜',
          commentary: '内膜が肥厚していくので外膜はむしろ薄くなる',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】大腸癌の手術標本において、リンパ管、静脈侵襲の有無を精査するために免疫染色と特殊染色を行った。',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】大腸発がんには COX2. iNOS. 終末糖化産物などによる慢性炎症が関与している',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】大動脈瘤の大半は、 粥状動脈硬化性で、 腹部大動脈に好発する',
          answerImg: [aneurysmTypes],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】単純性脂肪肝の10%がNASHになりその2%以下が肝硬変に進展すると言われる',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】短時間に最も多くのエネルギーを供給できるのはフォスファーゲンである',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】胆汁酸中のdeoxycholic acid には大腸発がん促進作用がある',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】胆道結石、胆道癌、 転移性肝癌、膵炎は閉塞性黄疸の原因となる',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】胆嚢癌、乳癌、子宮内膜癌、大腸癌は体重増加と伴にリスクが増大する',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】中型筋性動脈に生じる動脈硬化病変では、中膜の硝子化がみられる',
          answerImg: [moenckeberg],
          answer: '誤り...中膜の硝子化ではなく石灰化',
          commentary: 'Moenckeberg型中膜硬化症。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】腸管内常在菌は年齢とともにいわゆる善玉菌が減少する',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】腸内環境ではオピオイドが形成されやすく免疫系に影響を与える',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】腸内細菌の発酵作用によりブチル酸などのエピジェネティック阻害の抑制物質が生成する',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】腸内細菌の変化は大腸癌のリスクとは関係しない',
          answerImg: [],
          answer: '誤り...腸内細菌と大腸がんリスクは密接に関係している',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】直接型ビリルビンは血液脳関門を通過しやすい',
          answerImg: [],
          answer: '誤り...直接型は通過しにくい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】陳旧性心筋梗塞の症例では心筋間に線維性瘢痕が形成されている',
          answerImg: [],
          answer: '誤り...心筋間ではない',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】低形成とは組織や臓器が正常の大きさまで達しないものである ',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】低分化ながん細胞ほど核クロマチンは凝集しており、細胞の極性も保たれる。',
          answerImg: [],
          answer: '誤り...低分化ながん細胞は細胞の極性を失っている事が多い',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】糖が過剰な状況では acetyl CoA からトリグリセリドが合成され脂肪細胞に貯蔵される',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】糖尿病により最も発癌リスクが高まるのは胃癌である',
          answerImg: [],
          answer: '誤り...胃がんではない',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】糖尿病性神経障害では末期では激痛は消失することが多い',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】糖尿病性神経障害の原因として高血糖、 酸化ストレス、終末糖化産物、 PKCE 活性化が挙げられる',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】動物性脂肪は飽和脂肪酸に富み融点が植物性脂肪よりも低い',
          answerImg: [],
          answer: '誤り...動物性脂肪は融点が高い→常温で固体',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】動脈硬化は脳梗塞や虚血性心疾患のリスク因子である',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】動脈酸素分圧の上昇とプロスタグランジンの低下により、動脈管は閉鎖する',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】同じ個体に発癌物質・発癌プロモーターが同時に作用し発癌することを two hit theory という',
          answerImg: [],
          answer: '誤り...two hit theoryではない',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】同一のシグナル経路 (例えば KRAS と PI3K や Akt) 内での変異はそうでないもの (例えば KRAS とAPC) と比較して重複することが多い',
          answerImg: [],
          answer: '誤り...',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】二本鎖切断の修復機構には非相同末端連結と相同組み換え修復があるが後者ではエラーがおきやすい',
          answerImg: [NHEJ],
          answer: '誤り...エラーが起こりやすいのは非相同末端連結NHEJ',
          commentary:
            'エラーが起こりやすい性質はゲノム編集技術に利用されている',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '【正誤問題】日本人の約1/3が癌により死亡する',
          answerImg: [],
          answer: '正しい',
          commentary: '2/3ががんになり、1/3が死亡する時代',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '【正誤問題】乳酸は酸化的リン酸化を促進する',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】乳腺針生検で乳癌を見逃し数か月後に周囲組織への癌の浸潤とリンパ管侵襲をきたしたが、 主治医にはその事実を伝えなかった。',
          answerImg: [],
          answer: '誤り...伝えなければならない',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '【正誤問題】乳頭筋断裂は心筋梗塞の合併症である',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '【正誤問題】脳梗塞では凝固壊死を呈する',
          answerImg: [cerebralInfarction],
          answer: '誤り...凝固壊死ではなく融解壊死',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】排除が遅れたアポトーシス細胞は抗原性を示すことがある',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '【正誤問題】肺梗塞では、肺胞内に出血がみられる',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】梅毒では腹部大動脈に大動脈瘤を形成しやすく、栄養血管の炎症と中膜弾性板の破壊がみられる',
          answerImg: [aneurysmTypes],
          answer: '誤り...腹部大動脈ではない',
          commentary:
            '梅毒性大動脈瘤は胸部（上行大動脈・大動脈弓）に好発。中膜弾性繊維破壊消失を招く。腹部大動脈に好発するのは粥状大動脈瘤で、栄養血管vasa vasorumの炎症を招くのは梅毒性大動脈瘤。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '【正誤問題】白血病は出血傾向のリスクである',
          answerImg: [],
          answer: '正しい',
          commentary: '血小板が減少するため。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】白内障では水晶体に変性蛋白が蓄積することで視力低下をきたす。',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '【正誤問題】発癌物質はDNAに付加体を生じる',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】伴性劣性遺伝病 (X連鎖性劣性遺伝病) はいかなる場合でも女性に発症することはない。',
          answerImg: [],
          answer: '誤り...いかなる場合でも発生しないわけではない',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】晩期型の先天性梅毒では Hutchinson の歯、 伝令性難聴、角膜炎を認めることが多い。',
          answerImg: [],
          answer: '誤り...伝音性難聴ではない',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】肥大型心筋症では、 心室中隔が対称性に肥厚する',
          answerImg: [],
          answer: '誤り...対称ではない',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】肥満 糖尿病、高脂血症、高血圧は動脈硬化を助長する 「死の四重奏」である。',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】非上皮性の悪性腫瘍の中で体中のさまざまな結合組織から生じるものを肉腫と呼ぶ。 これらの組織は中胚葉起源である',
          answerImg: [cancer],
          answer: '正しい',
          commentary:
            '肉腫は結合組織由来・造血系由来・神経系由来に分類されるが、いずれも中胚葉由来である。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】非上皮性の悪性腫瘍の中で免疫担当細胞を含むさまざまな造血組織から発生する悪性腫瘍はリンパ系列の腫瘍と骨髄球系列の腫瘍に大別される。 これらの組織は中胚葉起源である',
          answerImg: [hematopoieticStemCell],
          answer: '正しい',
          commentary:
            'リンパ球も骨髄球も造血幹細胞由来で、造血幹細胞は中腎付近の臓側中胚葉（側板中胚葉）由来。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】病理専門医研修指導医でありながら、 レジデントから依頼された剖検標本のチェックを正当な理由なく怠った。',
          answerImg: [],
          answer: '誤り',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】父親由来の15q11-13 の欠失ではUBE3A の機能喪失によりAngelman症候群を発症する。',
          answerImg: [],
          answer: '誤り...Angelman症候群ではない',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】変異によってニッチシグナルの下流が恒常活性化するとニッチから独立することができる。ニッチシグナルから完全に独立した細胞はすべて悪性腫瘍細胞となる',
          answerImg: [nicheSignalCancer],
          answer: '正しい',
          commentary:
            '正常の幹細胞は周囲の微小環境（ニッチ）からシグナルを受けて増殖を制御されているが、ニッチシグナルの経路に遺伝子変異が蓄積することによって増殖に歯止めが効かなくなる。→この変異の蓄積が多段階発がんである',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】変性とは正常代謝物の異常蓄積や異常代謝物の蓄積が、 組織細胞内に生じることである',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】網膜芽細胞腫ではWT1遺伝子異常が認められ、 常染色体優性遺伝である',
          answerImg: [],
          answer: '誤り...WT1ではない',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】良性腫瘍は悪性腫瘍と比較して増殖能が乏しいために変性や壊死が生じやすい。',
          answerImg: [],
          answer: '誤り...変性や壊死は起こりにくい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】老人肺では弾性線維の減少により気腔が拡大するが肺胞は破壊されない。',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】顆粒白血球は貪食作用の強い好中球、 アレルギー性の炎症に関与する好酸球、ヒスタミンを放出する好塩基球がある',
          answerImg: [],
          answer: '正しい',
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
          answerImg: [hypertension],
          answer: '正しい',
          commentary:
            'フィブリノイド（フィブリン様物質）は、変形したコラーゲン、基質、フィブリンなどがにじみこんで見られる',
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
        {
          detailInfo: '4/24午前',
          questionImg: [],
          questionSentence: '炎症の特徴を4つ答えてください。          ',
          answerImg: [],
          answer: '発赤・熱感・腫脹・疼痛',
          commentary: '機能障害を含めて5徴とも。',
        },
        {
          detailInfo: '4/24午前',
          questionImg: [],
          questionSentence:
            '【正誤問題】獲得免疫で主に活躍するものは好中球やマクロファージを代表とする免疫細胞である。          ',
          answerImg: [],
          answer: '誤り...獲得免疫ではなく自然免疫',
          commentary: '',
        },
        {
          detailInfo: '4/24午前',
          questionImg: [],
          questionSentence:
            '【正誤問題】炎症にはさまざまな生理活性物質が関与するが、ヒスタミンは血管透過性を亢進させ疼痛をもたらす作用がある。',
          answerImg: [],
          answer: '誤り？...ヒスタミンには血管透過性亢進作用はあるが...',
          commentary: '',
        },
        {
          detailInfo: '4/24午前',
          questionImg: [],
          questionSentence:
            '【正誤問題】アラキドン酸カスケードのなかでNSAIDsが阻害するものはシクロオキシゲナーゼであり、プロスタグランジンなどの合成を抑制する。',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '4/24午前',
          questionImg: [],
          questionSentence: '肉芽組織を形成する過程について記述してください。',
          answerImg: [],
          answer:
            '組織が壊死して、そこに好中球マクロファージが集まり分解・貪食が進み、血管新生・線維芽細胞の活性化・増殖によって壊死病変を置換する',
          commentary: '',
        },
        {
          detailInfo: '4/24午前',
          questionImg: [],
          questionSentence: '結核の病理像の特徴を述べてください。',
          answerImg: [],
          answer:
            '核の無い乾酪壊死のまわりにマクロファージ由来の類上皮細胞があつまり、多核のラングハンス巨細胞もかくにんされる、肉芽腫性炎症が見られる。',
          commentary: '',
        },
        {
          detailInfo: '4/24午前',
          questionImg: [],
          questionSentence:
            '【正誤問題】甲状腺機能亢進症は甲状腺刺激ホルモン受容体に対する抗体が過剰に産生される疾患であり、III型アレルギーに代表とされる。',
          answerImg: [],
          answer: '誤り...バセドウ病はⅢ型ではなくⅡ型（5型）アレルギー。',
          commentary: '',
        },
        {
          detailInfo: '4/24午前',
          questionImg: [],
          questionSentence:
            '【正誤問題】酸化ストレスはミトコンドリアの酸化的リン酸化の過程で産生される一方で、SODやビタミンなどのスカベンジャーは酸化作用に抗う働きをする。',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '4/24午前',
          questionImg: [],
          questionSentence:
            '【正誤問題】アポトーシスとは、組織の損傷による病的な細胞死と定義される。',
          answerImg: [],
          answer:
            '誤り...アポトーシスは計画された細胞死に対して、病的な細胞死はネクローシスと定義される。',
          commentary: '',
        },
        {
          detailInfo: '4/24午前',
          questionImg: [],
          questionSentence:
            '【正誤問題】I型アレルギーの特徴について述べてください。          ',
          answerImg: [],
          answer:
            '数分から二時間程度で即時に反応し、抗原の連続曝露に対する脂肪細胞からのヒスタミン分泌によって平滑筋の収縮・仙分泌の増加・毛細血管の透過性亢進をひきおこす',
          commentary: '',
        },
        {
          detailInfo: '4/24午後',
          questionImg: [],
          questionSentence:
            '【正誤問題】COX2はアラキドン酸をプロスタグランジンへ変換する',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '4/24午後',
          questionImg: [],
          questionSentence:
            '【正誤問題】αリノレン酸はn6系の不飽和脂肪酸でアラキドン酸を経てプロスタグランジンになる',
          answerImg: [],
          answer: '誤り',
          commentary: '',
        },
        {
          detailInfo: '4/24午後',
          questionImg: [],
          questionSentence:
            '【正誤問題】ウェルシュ菌は食中毒菌であり腸内には常在しない',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '4/24午後',
          questionImg: [],
          questionSentence:
            '【正誤問題】ヒドロキシラジカルは脳梗塞や心筋梗塞の病変拡大に関与する',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '4/24午後',
          questionImg: [],
          questionSentence:
            '【正誤問題】加齢による発癌リスクの上昇は幹細胞分裂回数と関連する',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '4/24午後',
          questionImg: [],
          questionSentence:
            '【正誤問題】我々は常に自然放射線や活性酸素種、紫外線やアルコール、ベンツピレン等の変異原にさらされておりＤＮＡ損傷が生じている',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '4/24午後',
          questionImg: [],
          questionSentence:
            '【正誤問題】活性酸素分子種の中で酵素的に分解されないのはヒドロキシラジカルである',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '4/24午後',
          questionImg: [],
          questionSentence:
            '【正誤問題】赤身肉の摂取は大腸癌のリスクファクターである',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '4/24午後',
          questionImg: [],
          questionSentence:
            '【正誤問題】高脂肪食・高糖質食は大腸発癌・転移を促進する',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '4/24午後',
          questionImg: [],
          questionSentence:
            '【正誤問題】腫瘍形成は多段階からなる複雑なステップを経て生じる。これらの変化には癌遺伝子の活性化と癌抑制遺伝子の不活化の両方が含まれる。これを多段階発ガンとよぶ',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '4/24午後',
          questionImg: [],
          questionSentence:
            '【正誤問題】終末糖化産物は蛋白等に酸化ストレス刺激により酵素反応により糖の修飾が生じたものである',
          answerImg: [],
          answer: '誤り',
          commentary: '',
        },
        {
          detailInfo: '4/24午後',
          questionImg: [],
          questionSentence: '【正誤問題】成人胸腺は退縮しているのが正常である',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '4/24午後',
          questionImg: [],
          questionSentence:
            '【正誤問題】単純性脂肪肝の10%がNASHになりその2%以下が肝硬変に進展すると言われる',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '4/24午後',
          questionImg: [],
          questionSentence:
            '【正誤問題】直接型ビリルビンは血液脳関門を通過しやすい',
          answerImg: [],
          answer: '誤り',
          commentary: '',
        },
        {
          detailInfo: '4/24午後',
          questionImg: [],
          questionSentence:
            '【正誤問題】間接型ビリルビンはミトコンドリアの酸化的リン酸化を阻害する',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '4/24午後',
          questionImg: [],
          questionSentence:
            '【正誤問題】3価鉄はFenton反応によりヒドロキシラジカルを生成し発癌に関与する',
          answerImg: [],
          answer: '誤り',
          commentary: '',
        },
        {
          detailInfo: '4/24午後',
          questionImg: [],
          questionSentence:
            '【正誤問題】副甲状腺ホルモンは骨へのカルシウム沈着を促進する',
          answerImg: [],
          answer: '誤り',
          commentary:
            'PTHは血中のカルシウム濃度を上げるため、骨のカルシウムの分解を促進する',
        },
        {
          detailInfo: '4/24午後',
          questionImg: [],
          questionSentence: '【正誤問題】フィブリノイド壊死は動脈炎で見られる',
          answerImg: [hypertension],
          answer: '正しい',
          commentary:
            'フィブリノイド（フィブリン様物質）は変形したコラーゲン、基質、フィブリンなどがにじみこんで形成される。',
        },
        {
          detailInfo: '4/24午後',
          questionImg: [],
          questionSentence:
            '【正誤問題】アミロイドβはタンパク折り畳み障害により発生する',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '4/24午後',
          questionImg: [],
          questionSentence: '【正誤問題】細胞死は種々のものが併存して生じる',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '4/24午後',
          questionImg: [],
          questionSentence: '【正誤問題】ネクローシスは受動的な細胞死である',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '4/24午後',
          questionImg: [],
          questionSentence: '【正誤問題】アポトーシスは受動的な細胞死である',
          answerImg: [],
          answer: '誤り',
          commentary: '',
        },
        {
          detailInfo: '4/24午後',
          questionImg: [],
          questionSentence:
            '【正誤問題】細胞死は死細胞にのみ影響する現象である',
          answerImg: [],
          answer: '誤り',
          commentary: '',
        },
        {
          detailInfo: '4/24午後',
          questionImg: [],
          questionSentence:
            '【正誤問題】Programmed cell deathとはapoptosisのことである',
          answerImg: [],
          answer: '誤り',
          commentary: '',
        },
        {
          detailInfo: '4/24午後',
          questionImg: [],
          questionSentence:
            '【正誤問題】ApoptosisではATPを消費してDNAを切断するため細胞の自殺と言われる',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '4/24午後',
          questionImg: [],
          questionSentence: '【正誤問題】核融解はネクローシスの特徴である',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '4/24午後',
          questionImg: [],
          questionSentence:
            '【正誤問題】乾酪壊死は、結核菌を貪食したマクロファージの壊死である',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '4/24午後',
          questionImg: [],
          questionSentence:
            '【正誤問題】壊疽性虫垂炎では高度の化膿性炎症により既存の組織構築が消失している',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '4/24午後',
          questionImg: [],
          questionSentence:
            '【正誤問題】内在性アポトーシス経路ではミトコンドリア膜電位低下に伴うチトクロムC放出がトリガーとなる',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '4/25午前',
          questionImg: [],
          questionSentence:
            'ヌクレオソーム中にヒストンとDNAはそれぞれ何％含まれているか          ',
          answerImg: [],
          answer: 'ともに9%',
          commentary: '',
        },
        {
          detailInfo: '4/25午前',
          questionImg: [],
          questionSentence:
            '必ずしもタンパク質に大きな変異を示さない遺伝子変異を選べ。また、その理由を述べよ',
          answerImg: [],
          choices: ['ナンセンス変異', '挿入', 'ミスセンス変異', '欠失'],
          answer:
            'ミスセンス変異。理由：変異箇所のタンパク質は変化してしまうが、塩基のセットは変化せず終止コドンも挿入されないので他と比べると大きな変異とはならない',
          commentary: '',
        },
        {
          detailInfo: '4/25午前',
          questionImg: [],
          questionSentence:
            'SNP(一塩基多型)は人口の何パーセント以上のヒトがもつ変異のことを言うか。          ',
          answerImg: [],
          answer: '1％',
          commentary: '',
        },
        {
          detailInfo: '4/25午前',
          questionImg: [],
          questionSentence:
            '染色体変異のうち染色体の数の変化を示す異数性と倍数性があるが、この両者がどのような変異か簡潔に示せ。',
          answerImg: [],
          answer:
            '有性生殖を行う生物は両親から染色体のセットを2つ受け取るが、受精時などの異常により染色体のセットに過不足が生じている変異。対して異数性の染色体変異はヒトの23染色体のうちいずれかが2本1対より過不足が生じている変異。',
          commentary: '',
        },
        {
          detailInfo: '4/25午前',
          questionImg: [],
          questionSentence:
            '変異原のひとつに紫外線があるが、紫外線によって障害をうける塩基はどれか',
          answerImg: [],
          choices: ['アデニン', 'チミン', 'グアニン', 'シトシン'],
          answer: 'チミン',
          commentary: 'チミンダイマーを形成',
        },
        {
          detailInfo: '4/25午前',
          questionImg: [],
          questionSentence:
            'タバコに含まれるベンゾピレンは、生体内に取り込まれると肝臓に含まれるAと言う酵素によって発がん性をもつBになる。AとBの名称を答えよ',
          answerImg: [],
          answer: 'AはCYP1A1で、Bはジオールエポキシド',
          commentary: '',
        },
        {
          detailInfo: '4/25午前',
          questionImg: [],
          questionSentence:
            '喫煙者と非喫煙者の肺がんにおける遺伝子変異は同じか。          ',
          answerImg: [],
          answer: 'おなじではない',
          commentary: '',
        },
        {
          detailInfo: '4/25午前',
          questionImg: [],
          questionSentence:
            'ミスマッチ修復は新生鎖の合成の際に生じるミスを修正するものであるが、新生鎖であるということをなにで認識しているか。          ',
          answerImg: [],
          answer: 'タンパク質としてはMutSα',
          commentary: '',
        },
        {
          detailInfo: '4/25午前',
          questionImg: [],
          questionSentence:
            'ヒストンのアセチル化は転写を促進するか、抑制するか？またアセチル化を引き起こす酵素はなにか？',
          answerImg: [],
          answer:
            'アセチル化は転写を促進する。また、アセチル化を引き起こす酵素はHAT:Histone Acetyl Transferase',
          commentary: '',
        },
        {
          detailInfo: '4/25午前',
          questionImg: [],
          questionSentence:
            '新生児マススクリーニングは生後4-6日後に行なわれる。生後すぐに行なわないのはなぜか',
          answerImg: [],
          answer: '血小板の寿命が数日であるから。',
          commentary: '',
        },
        {
          detailInfo: '4/25午前',
          questionImg: [],
          questionSentence:
            'フェニルケトン尿症の20パーセントにみられるコドン408におこる変異の種類は？          ',
          answerImg: [],
          choices: [
            'ミスセンス変異',
            'ナンセンス変異',
            'サイレント変異',
            'フレームシフト',
          ],
          answer: 'ミスセンス変異',
          commentary: '',
        },
        {
          detailInfo: '4/25午前',
          questionImg: [],
          questionSentence: '次のうちX性染色体劣勢遺伝病を選べ          ',
          answerImg: [],
          choices: [
            '鎌状赤血球貧血症',
            'Fabry病',
            'フェニルケトン尿症',
            '糖原病（Ⅰ型）',
          ],
          answer: 'Fabry病',
          commentary: '',
        },
        {
          detailInfo: '4/25午前',
          questionImg: [],
          questionSentence:
            '脈管内侵入により血管に入ったがん細胞は他の細胞との接着を失う足場非依存的な状態になる。この状態は細胞死を引き起こすが、この細胞死の名前をなんというか',
          answerImg: [],
          answer: 'アノイキス',
          commentary: '',
        },
        {
          detailInfo: '4/25午前',
          questionImg: [],
          questionSentence:
            '大腸発がんにおいて初期に変異が最も高頻繁にみられる遺伝子はどれか          ',
          answerImg: [],
          choices: ['K-ras', 'APC', 'B-raf', 'P53'],
          answer: 'APC',
          commentary: '',
        },
        {
          detailInfo: '4/25午前',
          questionImg: [],
          questionSentence:
            'がんの変異には染色体変異あり、有名なものとして慢性骨髄性白血病がある。この原因は染色体の欠失によりBCR/ABL融合遺伝子をもったフィラデルフィア染色体が生じることである。BCR/ABL融合遺伝子はチロシンキナーゼを異常活性化する。',
          answerImg: [],
          answer: '染色体の欠失ではなく(9と22番染色体間の)転座。',
          commentary: '',
        },
        {
          detailInfo: '4/25午前',
          questionImg: [],
          questionSentence:
            'p53やp16、APCといった癌抑制遺伝子の欠損した家系が報告されており（p53欠損はLi-Fraumeni症候群、p16欠損は家族性網膜芽細胞腫、APCは家族性大腸ポリポーシス）悪性腫瘍を若年で発症する.。　この文章中で間違いがあればその部分を訂正し、なければ「なし｣と記入せよ',
          answerImg: [],
          answer: 'p16欠損は家族性悪性黒色腫と関連している',
          commentary: '',
        },
        {
          detailInfo: '4/25午前',
          questionImg: [],
          questionSentence:
            'すべてに当てはまるわけでないが、傾向として癌種では遺伝子異常が多く肉腫では染色体変異が多い。　この文章中で間違いがあればその部分を訂正し、なければ「なし｣と記入せよ',
          answerImg: [],
          answer: 'なし',
          commentary: '',
        },
        {
          detailInfo: '4/25午前',
          questionImg: [],
          questionSentence:
            '乳がんは受容体の有無によってタイプ分けされ、治療方針も変わる。そのうち治療抵抗性であり予後が不良なことが多い乳がんをトリプルネガティブ乳がんと言う。このトリプルネガティブ乳がんにおいて発現がみられない3つの受容体を述べよ',
          answerImg: [],
          answer: 'ER（エストロゲンR）、PgR（プロゲステロンR）、HER2',
          commentary: '',
        },
        {
          detailInfo: '4/25午前',
          questionImg: [],
          questionSentence:
            'Ink4ファミリーはCDK4/6に直接結合しその活性を阻害するが、Cip/KipファミリーはどのCDKにどのような形で活性を阻害するかを簡潔に述べよ',
          answerImg: [],
          answer: 'CDK4/6以外のCyc-CDK複合体自体に結合して、CDK活性を阻害する',
          commentary: '',
        },
        {
          detailInfo: '4/25午後',
          questionImg: [],
          questionSentence:
            '腫瘍崩壊症候群とはどういった病態か。100-200字でまとめてください。',
          answerImg: [],
          answer:
            '悪性腫瘍の治療の際に抗がん剤治療や放射線治療の硬化が優れており、腫瘍が急速に死滅するときに起きる。尿酸が増える・血液が酸性化する・電解質（カリウム・カルシウム・リンなど）など、様々な異常が出現する。小児がんの際に多い。水分を多く補給したり、重曹を服用したりすることによって予防できる。',
          commentary: '',
        },
        {
          detailInfo: '4/25午後',
          questionImg: [],
          questionSentence:
            'two-hit theoryについて調べ、100-200字でまとめてください。',
          answerImg: [LOH],
          answer:
            'Rb,P53,p16,APCなどのがん抑制遺伝子の不活化によってがん化するとき、対応する遺伝子の両アレルに変異が生じることが原因で欠損しているとする説。実際には偶然両アレルに別々の変異が発生する確率は著しく低く、片アレルの変異が組換え異常により正常なアレルに置き換わる、ヘテロ接合性の消失(LOH)が原因という説も唱えられている。',
          commentary: '',
        },
        {
          detailInfo: '4/25午後',
          questionImg: [],
          questionSentence:
            '次の選択肢のうち、正しいものを選んでください。            ',
          choices: [
            '神経芽腫は神経堤細胞由来で、MYCN遺伝子異常がある場合予後良好である',
            '腎芽腫はwilms tumorとも呼ばれ、p53遺伝子異常で生じる',
            '小児の脳腫瘍の好発部位は後頭蓋窩で、水頭症をきたすと脳圧亢進症状を認める',
            '網膜芽細胞腫ではWT1遺伝子異常が認められ、常染色体優性遺伝である',
            '上記選択肢は全て誤りである',
          ],
          answerImg: [],
          answer:
            '小児の脳腫瘍の好発部位は後頭蓋窩で、水頭症をきたすと脳圧亢進症状を認める',
          commentary:
            '予後不良・腎芽腫はWT1遺伝子の両アレル異常・網膜芽細胞腫はRb遺伝子の両アレル異常',
        },
        {
          detailInfo: '4/25午後',
          questionImg: [],
          questionSentence:
            '次の選択肢のうち、正しいものを選んでください。          ',
          answerImg: [],
          choices: [
            'Kartagener症候群では、腺毛の運動異常を認め、慢性副鼻腔炎、中耳炎、不妊などがみられる',
            'Hirschsprung病では、外来神経叢が欠損している ',
            '胎児循環でみられる動脈管、卵円孔は出生後に閉鎖し、先に閉鎖する動脈管では、動脈酸素分圧の低下とプロスタグランジン濃度上昇が関与している',
            'ダウン症候群では精神発達遅滞、先天性心疾患、消化管奇形、白血病、両眼近接、耳介変形、晩期Alzheimer病などがみられる',
            '上記選択肢は全て誤りである',
          ],
          answer:
            'Kartagener症候群では、腺毛の運動異常を認め、慢性副鼻腔炎、中耳炎、不妊などがみられる          ',
          commentary:
            'Hirschsprung病ではアウエルバッハ神経叢が欠損していて外来神経はむしろ過形成。動脈管が閉鎖するには（出生後循環移行に伴う）動脈酸素分圧の上昇とプロスタグランジン濃度低下が必要。Down症候群では早期Alzheimerや両眼解離が特徴的。',
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
      groupTag: '反転講義',
      groupContents: [
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '細胞死の分類について述べよ',
          answerImg: [cellDeath, cellDeathVariations],
          answer:
            'Accidental とRegulatedに大別される。アポトーシスはRegulated Cell Deathの一部分でしかない。細胞死は複雑で、アポトーシスやネクローシスが複雑に噛み合って進行する。',
          commentary:
            '最近ではアポトーシス（プログラム細胞死）とネクローシス（偶発的細胞死）の2種類というわけでは無くなってきている。細胞死の分野は研究が盛んで、内容が常に書き変わってきている。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: 'programmed cell deathとは何か？',
          answerImg: [programmedCellDeath, cellDeathVariations],
          answer:
            '発生過程での時期・部位があらかじめ決まっているような細胞死で、アポトーシスやオートファジー細胞死の機序で細胞死を誘導する。細胞死誘導に一切の刺激が関与しない（PCDではないRCDは刺激を受けたことが引き金となって誘導される制御された細胞死）',
          commentary:
            'たとえば手指形成。刺激に一切関係なく、成長過程で計画的に細胞死が誘導される。あらゆる臓器・組織の成長・形成は細胞増殖とPCDの組み合わせによるもの。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: 'ネクローシスの形態的特徴は何か？',
          answerImg: [necrosisApoptosis],
          answer:
            '細胞質内部に空胞ができ、細胞核が核濃縮→核融解し、細胞質がぐちゃぐちゃになる。ヒアリン（硝子）',
          commentary:
            '細胞膜の選択的透過性が破綻することにより細胞が丸く膨潤し、細胞膜は薄くなる。核やミトコンドリアなどの細胞小器官も膨潤し、最終的には細胞膜が破裂して細胞の内容物が飛散する。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: 'アポトーシスの形態的特徴は何か？',
          answerImg: [necrosisApoptosis],
          answer:
            '核が分断され、アポトーシス小体を形成する。アポトーシスの形態は細胞の種類によって異なる。細胞分裂期のクロマチンとよく似た像に見えることがあり、区別が必要。最終的にアポトーシス小体をマクロファージが貪食し、完全に貪食された段階でアポトーシスは終了する。',
          commentary:
            '細胞が四方八方に膨張して突起物を形成し、断片化されることによって最終的にアポトーシス小体を形成する。eat meシグナル',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '壊疽とは何か？',
          answerImg: [necrosis],
          answer:
            '基本的には乾性壊疽（血流障害によるミイラ化/今起こるとすれば糖尿病性ぐらい）、湿性壊疽（破傷風や嫌気性菌がガスを産生するので中で泡が発生する→握雪感/現在ではほとんど見られない）、壊疽性炎症（もともとあった組織が壊されてしまう、化膿性壊疽の強い状態）',
          commentary:
            '壊死の種類のひとつ。徐々に血流が無くなっていくので、凝固壊死に至らずミイラ状に黒変し硬化していき（乾性壊疽）、切断するしかなくなる。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '乾酪壊死とは何か？',
          answerImg: [necrosis],
          answer:
            '結核菌を貪食して死亡してしまったマクロファージの残骸（マクロファージは結核菌を殺すことができず、逆にマクロファージが利用されてしまう）がチーズ状に壊死した状態。チーズ状の元は脂肪。',
          commentary:
            '凝固性の壊死で黄色調のチーズ状の壊死物質を形成する。結核と一対一の関係。結核結節やランゲルハンスの巨細胞が特徴→結核結節（特徴的な組織像となる）。肉芽腫性の疾患は数が少なく、テストに出しやすい。',
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
