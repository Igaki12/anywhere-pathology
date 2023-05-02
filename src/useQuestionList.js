import { useState } from 'react'
import mitochondria from './img/answer/mitochondria.png'
import fattyAcid from './img/answer/fattyAcid.png'
import causeOfDeath from './img/answer/causeOfDeath.png'
import causeOfCancer from './img/answer/causeOfCancer.png'
import CancerFromAGE from './img/answer/CancerFromAGE.png'
import cancerDeathRate from './img/answer/cancerDeathRate.png'
import AGE from './img/answer/AGE.png'
import Wilson from './img/answer/Wilson.png'
import ReceptorOfAGE from './img/answer/ReceptorOfAGE.png'
import Hutchinson from './img/answer/Hutchinson.png'
import HNPCC from './img/answer/HNPCC.png'
import HMGB1 from './img/answer/HMGB1.png'
import HIV from './img/answer/HIV.png'
import HbA1c from './img/answer/HbA1c.png'
import glycolysisPathway from './img/answer/glycolysisPathway.png'
import dystrophy from './img/answer/dystrophy.png'
import ChediakHigashi from './img/answer/ChediakHigashi.png'
import NADPH from './img/answer/NADPH.png'
import myocarditis from './img/answer/myocarditis.png'
import MEN from './img/answer/MEN.png'
import glutaminolysis from './img/answer/glutaminolysis.png'
import cholestanol from './img/answer/cholestanol.png'
import cancerProduceCalcium from './img/answer/cancerProduceCalcium.png'
import Th from './img/answer/Th.png'
import TDimer from './img/answer/TDimer.png'
import rheumaticHeartDisease from './img/answer/rheumaticHeartDisease.png'
import macrophageReceptors from './img/answer/macrophageReceptors.png'
import macrophage from './img/answer/macrophage.png'
import HMGB1InhibitMacrophage from './img/answer/HMGB1InhibitMacrophage.png'
import AGEActivity from './img/answer/AGEActivity.png'

import produceROS from './img/answer/produceROS.png'
import Menkes from './img/answer/Menkes.png'
import MELAS from './img/answer/MELAS.png'
import jaundiceTissue from './img/answer/jaundiceTissue.png'
import jaundiceBrain from './img/answer/jaundiceBrain.png'
import jaundice from './img/answer/jaundice.png'
import bilirubinDifference from './img/answer/bilirubinDifference.png'
import bilirubin2 from './img/answer/bilirubin2.png'
import bilirubin from './img/answer/bilirubin.png'
import Wilms from './img/answer/Wilms.png'
import retinoblastoma from './img/answer/retinoblastoma.png'
import MYC from './img/answer/MYC.png'
import microorganismProducesEffectors from './img/answer/microorganismProducesEffectors.png'

import neuroblastoma from './img/answer/neuroblastoma.png'
import nephroblastoma from './img/answer/nephroblastoma.png'
import leukemia from './img/answer/leukemia.png'
import Kartagener from './img/answer/Kartagener.png'
import Hirschsprung from './img/answer/Hirschsprung.png'
import heartMiscreation from './img/answer/heartMiscreation.png'
import Fallot from './img/answer/Fallot.png'
import Down from './img/answer/Down.png'
import cancerFromDM from './img/answer/cancerFromDM.png'
import brainTumor from './img/answer/brainTumor.png'
import amyloidBeta from './img/answer/amyloidBeta.png'
import amyloid from './img/answer/amyloid.png'
import wherePylori from './img/answer/wherePylori.png'
import pyroliMakesDisease from './img/answer/pyroliMakesDisease.png'
import pyroliDamageMucous from './img/answer/pyroliDamageMucous.png'
import cancerFromVirus from './img/answer/cancerFromVirus.png'
import cancerAboutEBV from './img/answer/cancerAboutEBV.png'

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
import polyol from './img/answer/polyol.png'
import degeneration from './img/answer/degeneration.png'
import coagulation from './img/answer/coagulation.png'
import apo from './img/answer/apo.png'

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
import myocardialInfarctionSymptom from './img/answer/myocardialInfarctionSymptom.png'
import myocardialInfarctionComplication from './img/answer/myocardialInfarctionComplication.png'
import myocardialInfarctionalTissue from './img/answer/myocardialInfarctionalTissue.png'
import coronaryArteryDisease from './img/answer/coronaryArteryDisease.png'
import welsh from './img/answer/welsh.png'
import transFattyAcid from './img/answer/transFattyAcid.png'
import oxidativePhosphorylation from './img/answer/oxidativePhosphorylation.png'
import carcinomaSteps from './img/answer/carcinomaSteps.png'
import hypertrophy from './img/answer/hypertrophy.png'
import fattyLiverDestination from './img/answer/fattyLiverDestination.png'
import duchanne from './img/answer/duchanne.png'
import atrophy from './img/answer/atrophy.png'
import esophagobronchialFistula from './img/answer/esophagobronchialFistula.png'
import sarcoidosis from './img/answer/sarcoidosis.png'
import mediatorFromCell from './img/answer/mediatorFromCell.png'
import inflammatoryMediator from './img/answer/inflammatoryMediator.png'
import inflammation from './img/answer/inflammation.png'
import glanulomaTypes from './img/answer/glanulomaTypes.png'
import glanuloma from './img/answer/glanuloma.png'
import glanulationTissue from './img/answer/glanulationTissue.png'
import allergy5 from './img/answer/allergy5.png'
import allergy4 from './img/answer/allergy4.png'
import allergy3 from './img/answer/allergy3.png'
import allergy2 from './img/answer/allergy2.png'
import allergy1 from './img/answer/allergy1.png'
import acuteInflammation from './img/answer/acuteInflammation.png'
import scavenger from './img/answer/scavenger.png'
import necroptosis from './img/answer/necroptosis.png'
import granulocyte from './img/answer/granulocyte.png'
import ferroptosis from './img/answer/ferroptosis.png'
import apoptosisPathway from './img/answer/apoptosisPathway.png'
import Warburg from './img/answer/Warburg.png'
import synthesizeATP from './img/answer/synthesizeATP.png'
import pyroliInfectionFeature from './img/answer/pyroliInfectionFeature.png'

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
          answerImg: [hypertrophy],
          answer: '誤り...仮性肥大では間質の細胞数が増加し、容積が増加する。',
          commentary: '実質細胞の数が増えるのは過形成。前立腺肥大など。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】前立腺肥大では実質細胞は過形成だが間質細胞は肥大を示す。',
          answerImg: [hypertrophy],
          answer: '誤り...間質細胞も過形成される',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '【正誤問題】高血圧では左心室に労働性肥大を生じる',
          answerImg: [],
          answer: '正しい',
          commentary:
            '圧負荷に対しては心筋が肥大する（求心性肥大）。正常250~400gの心臓は高血圧症や虚血性心疾患の場合は600gに達することがある。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】萎縮とは正常の発達段階にあった組織や臓器の細胞数の減少である',
          answerImg: [atrophy],
          answer: '正しい',
          commentary:
            '細胞数が減少したり、実質細胞の大きさが縮小したりすることによって正常であった組織の重量や容積が減少することを萎縮という。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '【正誤問題】萎縮には機能障害は関連しない',
          answerImg: [atrophy],
          answer: '誤り...機能障害は関連する',
          commentary:
            '萎縮した組織は大きさ、重量が縮小しており、機能低下もみられる。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】低形成とは組織や臓器が正常の大きさまで達しないものである',
          answerImg: [atrophy],
          answer: '正しい',
          commentary:
            '正常の大きさまで達した組織が老化等の影響を受ける場合は萎縮とよばれる。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】変性とは正常代謝物の異常蓄積や異常代謝物の蓄積が、組織・細胞内に生じることである',
          answerImg: [degeneration],
          answer: '正しい',
          commentary:
            '細胞障害によって脂肪やフィブリノイド、胆汁（幹細胞）などが蓄積している状態',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】グルコースはアルドラーゼによりソルビトールを生成し細胞浮腫の原因となる',
          answerImg: [polyol],
          answer: '誤り...アルドラーゼではなくアルドスリダクターゼ',
          commentary:
            'ソルビトールは細胞へ浸透圧ストレスを生じさせることにより糖尿病合併症（網膜・腎臓・神経など）に関与している。グルコース→ソルビトールの代謝経路はポリオール経路/ソルビトール-アルドースレダクターゼ経路とも呼ばれ、NADPHを必要とする。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】ポリオール代謝亢進により還元型グルタミンが減少し酸化ストレスが増加する',
          answerImg: [polyol],
          answer: '誤り...還元型グルタミンではなく還元型グルタチオン',
          commentary:
            '糖尿病に関連した動脈硬化の促進因子として、インスリン作用不全にもとづくポリオール代謝経路の活性亢進が報告されている。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】ポリオール代謝ではフルクトースから3-デオキシグルコソンが生成されAGE形成が著しい',
          answerImg: [polyol],
          answer: '誤り...ポリオール代謝ではなくフルクトース代謝',
          commentary: 'ポリオール代謝はグルコース→フルクトースの代謝経路。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '【正誤問題】エンドセリンやNOは血管拡張因子である',
          answerImg: [coagulation],
          answer: '誤り...エンドセリンは血管収縮因子',
          commentary: '血管内皮細胞から分泌される。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】糖尿病は続発性拡張型心筋症の原因となる',
          answerImg: [],
          answer: '正しい',
          commentary:
            '糖尿病は冠動脈疾患や自律神経異常により心不全を招きやすい。',
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
          answerImg: [apo],
          answer: '正しい',
          commentary:
            'ApoB-48は腸管で合成され、HDLからApoCやApoEを受け取ることによりキロミクロンとして循環血中を流れる。',
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
          commentary:
            'アディポネクチンは小型脂肪細胞から分泌されインスリン耐性を低下させる。大型脂肪細胞からは主にレプチンが分泌される。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】高糖質により増加する酸化ストレスはミトコンドリアの抑制により減少する',
          answerImg: [mitochondria],
          answer: '正しい',
          commentary:
            'ミトコンドリアは最大のROS発生組織である。がん細胞では酸素豊富な状況でも酸化的リン酸化が抑制されていて、酸化ストレスの発生やそれに伴うアポトーシスを回避している。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】過剰な遊離脂肪酸は膵β細胞のインスリン分泌を促進し肝での糖新生を亢進する',
          answerImg: [],
          answer: '誤り...インスリン分泌を抑制する',
          commentary: '遊離脂肪酸は肝臓でケトン体に変換される、空腹時の物質。',
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
          commentary:
            '初期の脂肪肝は1.小葉中心脂肪化か2.小葉辺縁性脂肪化がみられるが、アルコールや薬物摂取では小葉中心脂肪化がみられやすい。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】脂肪過剰摂取では小葉辺縁性の脂肪肝を生じることがある',
          answerImg: [fattyLiver],
          answer: '正しい',
          commentary:
            '初期の脂肪肝は1.小葉中心脂肪化か2.小葉辺縁性脂肪化がみられるが、脂質異常症や高脂食では2.小葉辺縁性脂肪化がみられやすい',
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
          answerImg: [fattyLiver],
          answer: '誤り...小滴脂肪肝ではなく大滴脂肪肝',
          commentary: '悪化すると肝硬変、肝がんの原因となる。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】単純性脂肪肝の10%がNASHによりその2%以下が肝硬変に進展すると言われる',
          answerImg: [fattyLiverDestination],
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
            '【正誤問題】脂肪化生は間葉系肝細胞の脂肪細胞への分化により生ずる場合がある',
          answerImg: [fattyLiver],
          answer: '誤り...脂肪化生という言葉は存在しない',
          commentary: '脂肪肝では肝細胞の脂肪変性が生ずる',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】心筋の脂肪化は致死的不整脈の原因になる',
          answerImg: [],
          answer: '正しい',
          commentary: '心筋はほとんど再生しない',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '【正誤問題】脳内には脂肪細胞は存在しない',
          answerImg: [],
          answer: '正しい',
          commentary: 'エネルギーは血中からのグルコースかケトン体に依存',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】終末糖化産物は蛋白等にメーラード反応や酸化ストレスなどで非酵素的に糖の修飾が生じたものである',
          answerImg: [AGE],
          answer: '正しい',
          commentary:
            'ゆっくりと様々なタンパク・脂質を糖化していく。AGEとよばれ、発がん・がん進行の原因として重視される。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】終末糖化産物は粥状動脈硬化、脂肪肝、糖尿病合併症、アルツアイマー病、発癌に関与する',
          answerImg: [cancerFromDM],
          answer: '正しい',
          commentary: 'AGEはROSを生成する',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】終末糖化産物は受容体であるRAGEを介し細胞増殖、細胞運動、血管新生を促進する',
          answerImg: [CancerFromAGE],
          answer: '正しい',
          commentary:
            'RAGEの活性化が、がんの増殖・進展を助ける。AGEや糖化HMGB1はRAGEのリガンド。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】終末糖化産物はDNA付加体の増加をもたらす',
          answerImg: [CancerFromAGE],
          answer: '正しい',
          commentary: 'HMGB1（ヒストンの一部）を糖化させる',
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
          answerImg: [causeOfDeath],
          answer: '誤り...1981年以降',
          commentary:
            'それ以前は脳血管疾患、その前は結核。結核は特効薬ストレプトマイシンの発見によって治る病気に。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】1分子のグルコースから最も多くのATPを生成するのは解糖系である。',
          answerImg: [synthesizeATP],
          answer: '誤り...解糖系ではなく電子伝達系',
          commentary:
            '電子伝達系を稼働させるには酸素が必要で、また活性酸素を生成し細胞を傷害してしまう。がん細胞では電子伝達系は抑制されている(Warburg effect)',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】Ⅲ型アレルギーはTcやマクロファージにより好酸球が増殖することで生じる。',
          answerImg: [allergy4],
          answer: '誤り...Ⅲ型ではなくⅣ型',
          commentary:
            'Ⅲ型アレルギーは免疫複合体反応とよばれ、抗原抗体複合体が種々の臓器で沈着し（免疫複合体）、炎症が起き障害を起こす。血清病・SLEのループス腎炎・急性糸球体腎炎など、対してⅣ型アレルギーは遅延型反応と呼ばれ、感作T細胞から遊離する生理活性物質による組織障害。 ',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】Ⅳ型アレルギーでは免疫複合体の形成により補体が活性化されることで細胞が傷害される。',
          answerImg: [allergy3],
          answer: '誤り...Ⅳ型ではなくⅢ型アレルギー',
          commentary:
            'Ⅳ型アレルギーは遅延型反応とも呼ばれ、感作T細胞から遊離する様々な生理活性物質による組織障害が原因。ツベルクリン反応・接触性皮膚炎・移植片対宿主病など。対してⅢ型アレルギーは抗原抗体複合体が種々の臓器で沈着し（免疫複合体）、補体を活性化することによる炎症および障害。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】AA型アミロイドは血清アミロイドAA蛋白に由来する。',
          answerImg: [amyloid],
          answer: '誤り...AA蛋白ではなくA蛋白',
          commentary:
            'Serum amyloid A で血清アミロイドA蛋白由来。AA型アミロイドは急性期反応蛋白の一種で、急性・慢性疾患や加齢で増加し、肝細胞が産生する。血管壁に貯留しやすく、続発性アミロイドーシスの原因となる。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '【正誤問題】AGEの増加は大腸がんのリスクとなる',
          answerImg: [CancerFromAGE],
          answer: '正しい',
          commentary:
            'AGEによるRAGE活性化によって、細胞の増殖・活性酸素生成・血管新生・細胞運動が誘導され発がんリスクが高まる',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】Alzheimer病ではβアミロイドが沈着した老人斑により錐体外路障害を認める。',
          answerImg: [amyloidBeta],
          answer: '誤り...錐体外路障害ではなく認知症',
          commentary:
            'βアミロイドタンパクは老人斑に蓄積し、大脳はびまん性に萎縮する。大脳皮質の幅はせまくなり、脳回は狭く、脳溝が拡大し、認知症症状を示す。',
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
          answerImg: [ChediakHigashi],
          answer: '誤り...活性酸素の産生には問題ないが、輸送に問題がある',
          commentary:
            'チェディアック・ヒガシ症候群は、好中球・単球・NK細胞などの細胞質内に巨大な顆粒がみられる常染色体劣性遺伝病である。微小管に異常があり輸送障害によって細胞を貪食した好中球などがこれを死滅させることができないので病原体が拡散し炎症刺激が持続する事となる。',
        },

        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】COX1は外傷や炎症によって誘導され炎症を促進する。Coxib系はこれを阻害する。',
          answerImg: [mediatorFromCell],
          answer: '誤り...COX1ではなくCOX2',
          commentary: 'セレコキシブはCOX2選択阻害薬',
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
          answerImg: [mediatorFromCell],
          answer: '正しい',
          commentary:
            'COX1は胃粘膜保護などの役割を担っていて、NSAIDsはこれらも阻害してしまう。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】COX2はアラキドン酸をプロスタグランジンへ変換する。',
          answerImg: [mediatorFromCell],
          answer: '正しい',
          commentary: 'COX:シクロオキシゲナーゼ',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】COX2は常時様々な組織で発現しており血小板凝集の促進や肝血流の維持に関与している。',
          answerImg: [],
          answer: '誤り...常時ではない',
          commentary:
            'COX1は常時様々な組織で発現していて胃粘膜保護などに関与する',
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
          answerImg: [jaundice],
          answer: '正しい',
          commentary:
            '脂溶性の間接型ビリルビンは肝細胞でグルクロン酸抱合を受けて水溶性の直接型ビリルビンに代謝されるが、Criggler-Najar症候群ではグルクロン酸抱合障害により黄疸が発生する。間接型はBBBを通過し脳に沈着する核黄疸を合併してしまう。Crigler-Najiar症候群は予後不良。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】炎症とは障害刺激に対する組織と微小循環の反応で障害刺激は外傷や病原体、外来異物のほかにも脂質の蓄積や悪性新生物が挙げられる。炎症の目的は病原刺激を除去し組織を修復することである。',
          answerImg: [inflammation],
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
          commentary:
            '22番染色体長腕一部欠失：22q11の常染色体優性遺伝病。第3鰓嚢のや第4鰓嚢の先天的異常に起因し、胸腺の部分的あるいは完全な欠損がみられる。胸腺は低形成や無形成となり、Tリンパ球の量的・質的な欠損をきたす',
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
          commentary: 'CpGのメチル化は一般的に下流遺伝子の転写を抑制する。',
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
          answerImg: [maintenanceMethylationDNA],
          answer: '正しい',
          commentary:
            'DNAの脱メチル化は分化を逆行することであり、限られた時期（配偶子形成・受精直後の2度）にしか行われない。→異常が生じると腫瘍化を促進する',
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
          commentary:
            'デュシェンヌ型筋ジストロフィーはXp21.2のDMD遺伝子に原因をもつX伴性劣性遺伝。ジストロフィンをコードする遺伝子は全長200万塩基対に及ぶ大きさで、デュシェンヌ型筋ジストロフィーの患者の60％にエクソン領域の欠失、10%に重複のあることが判明した。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】Duchenne型筋ジストロフィーは三塩基リピート病である。',
          answerImg: [dystrophy],
          answer: '誤り...三塩基リピート病なのは筋緊張性ジストロフィー',
          commentary:
            'ジストロフィンをコードする遺伝子は非常に大きく、どこかで欠失（約6割）や重複（約1割）などの異常をきたすことでデュシェンヌ型筋ジストロフィーとなる（伴性劣性遺伝病）。一方筋緊張性ジストロフィーはミオトニン蛋白キナーゼ遺伝子内のCTGリピートの異常伸長によって発症する、常染色体優性遺伝病。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】Eisenmenger化とは、先天性深枝間により肺血管抵抗の低下から左→右シャントが優勢になった状態を指す。',
          answerImg: [],
          answer:
            '誤り..血管抵抗の低下ではなく増大、左→右シャントではなく右→左シャント',
          commentary:
            'Eisenmenger化は心房中隔欠損、心室中隔欠損などでみられる。静脈血が左心室に流入しチアノーゼなどを起こすようになる',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】Fallot四徴症の症状は、左室肥大・心室中隔欠損・騎乗大動脈・肺動脈閉鎖であり、チアノーゼを伴わない。',
          answerImg: [Fallot],
          answer: '誤り...左室肥大ではなく右室',
          commentary:
            '肺動脈狭窄により右室が肥大する。動脈管が開存していることが多く、R-Lシャントによって肺血流を保とうとする。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】Goodpasture症候群、溶血性貧血、Schoenlein-Henoch紫斑症はⅡ型アレルギーで起こる。',
          answerImg: [allergy5],
          answer: '誤り...Hernoch-Schnlein紫斑症はIgAによるアレルギーが原因。',
          commentary:
            '免疫性血小板減少性紫斑病はⅡ型アレルギー。Ⅱ型アレルギーの中でも、細胞ではなく受容体に対する抗体で細胞機能を制御してしまうようなアレルギー反応はⅤ型アレルギーともよばれる。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '【正誤問題】HbA1cは終末糖化産物ではない',
          answerImg: [HbA1c],
          answer: '誤り...終末糖化産物である',
          commentary:
            'HbA（ヘモグロビン：タンパク質）に高血糖下で還元糖が付着し、長い時間をかけて非酵素的に糖化される。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】HIF-1αは転写因子であり低酸素時にVEGF,GLUT1などの発現を誘導する。',
          answerImg: [glycolysisPathway],
          answer: '正しい',
          commentary: 'HIF-1αは解糖系代謝を促進する',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】Hirschsprung病では、神経節を欠損し、外来神経は過形成である。',
          answerImg: [Hirschsprung],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】HIVは感染後数週間で血中のRNA量が急上昇するが、その後の数年は安定した値に保たれる。',
          answerImg: [HIV],
          answer: '正しい',
          commentary: 'HIVは逆転写酵素を有するRNAウイルス。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】HMGB1が高値のエンドトキシンショックでは予後良好である。',
          answerImg: [macrophage],
          answer: '誤り...予後不良である',
          commentary:
            'HMGB1はマクロファージ系細胞にアポトーシスを誘導し、エンドトキシンショックに対処できなくする。活性化マクロファージは貪食した微生物を殺したり、傷害された組織の細胞を破壊・免疫担当細胞の動員などを促進する生理活性物質を産生することでエンドトキシンショックに対処する。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】HMGB1は炎症性サイトカインのひとつでショックを増悪する。',
          answerImg: [HMGB1InhibitMacrophage],
          answer: '正しい',
          commentary:
            'HMGB1はRAGEを活性化させ増殖・活性酸素生成を行うほか、ショックに対処するマクロファージ系細胞にアポトーシスを誘導するのでショックが増悪される。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】HNPCCは右側結腸に好発し、関連癌として大腸癌以外に腎盂・尿管癌や小腸癌などがある。',
          answerImg: [HNPCC],
          answer: '正しい',
          commentary:
            'HNPCC:遺伝性非ポリポーシス大腸癌Hereditary non-polyposis colorectal cancer。HNPCCでみられる大腸癌は組織学的に、低分化腺癌、印環細胞癌、粘液癌の割合が高く、flat adenomaや結節壊死集簇様病変が後発する',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】Hutchinson-Gilford症候群では大泉門の閉鎖不全による水頭症様の顔貌を呈する。',
          answerImg: [Hutchinson],
          answer: '正しい',
          commentary:
            '先天的遺伝子異常を原因とする早老症のひとつ。身長・体重の発育が乏しく、皮膚老化・脱毛・骨格・歯の形成不良をもたらす。外形的には頭頂部の大泉門の閉鎖不全を起こし、総じて小人症様となる。症状が進むと、皮膚の老化・高コレステロール血症・動脈硬化の亢進・糖尿病・骨粗鬆症などの早老変性が顕著となる。老化の進行は、本症患者の1年間の老化が、健常者の10年以上に相当するといわれている。根本的な病因は突然変異性の強い染色体異常といわれていて、基本的には家族内発症しない。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】IgM抗体はB細胞表面に受容体として存在しており、血清中では五量体を形成している。',
          answerImg: [allergy1],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】Ⅰ型アレルギーでは肥満細胞のFc受容体にIgE抗体が結合することで脱顆粒がおこる。',
          answerImg: [allergy1],
          answer:
            '誤り...肥満細胞と結合したIgE抗体に抗原抗体反応が起こることが必須',
          commentary:
            'IgE抗体が肥満細胞に付着→抗原抗体反応→ヒスタミンなどの脱顆粒の流れ。数分～2時間程度の即時型アレルギー/アナフィラキシー。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】Kartagener症候群では内臓逆位を認め、線毛機能不全を呈し、巨大結腸症を合併する。',
          answerImg: [Kartagener],
          answer:
            '誤り...巨大結腸症ではなく慢性副鼻腔炎・中耳炎・不妊症・水頭症など',
          commentary: '線毛の異常によって左右内臓逆位が説明できる。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】MELASやMERRFでは血中の尿酸やピルビン酸が高値となる。',
          answerImg: [MELAS],
          answer: '誤り...尿酸ではなく乳酸',
          commentary:
            'MELASもMERRFもミトコンドリア病で、ミトコンドリアDNAの変異が主な原因。母系遺伝で、小児～成人で発症（先天疾患だが、蓄積すると発症しやすい）。ミトコンドリアはTCA回路以降の糖代謝に関わっているので、解糖系産物であるピルビン酸や乳酸が増える。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】MEN2AではRETの突然変異による発症し、副甲状腺機能亢進や褐色細胞腫を認める。',
          answerImg: [MEN],
          answer: '正しい',
          commentary:
            '多発性内分泌腫瘍症2型：MEN(Multiple Endocrine Neoplasia) type2は甲状腺髄様癌、複甲状腺機能亢進症、褐色細胞腫を合併する遺伝性腫瘍症。消化管の機能異常、骨格異常などを合併する。2A型（合併症なし）と2B型（合併症あり）に分類されるが、いずれもRETに原因遺伝子を持つ常染色体優性遺伝病。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】Menkes症候群は小腸での銅吸収障害をきたす伴性劣性遺伝病で、末期には肝硬変の像を呈する。',
          answerImg: [Menkes, Wilson],
          answer:
            '誤り...Menkes病は銅の代謝障害で、主に脳の神経細胞の壊死がみられる',
          commentary:
            'そのほか、Wilson病は常染色体劣性遺伝の銅排泄障害による過剰症であり、肝臓などの全身臓器に銅が沈着して肝硬変の像を呈する。',
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
          answerImg: [fattyLiver],
          answer: '誤り...小滴性脂肪肝ではなく大滴性',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】P53は4量体であり4量体結合ドメインとDNA結合ドメインを持つ。これをもとに考えるとP53は4量体結合ドメインの片アレルの変異のみで1/16まで正常蛋白量が落ちることになる。',
          answerImg: [],
          answer: '正しい',
          commentary:
            '4量体を構成するタンパク質は50:50で変異型と正常型が混合している。ここから正常型のみが4量体を形成する確率は1/2の4乗',
        },

        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】P53はDNA損傷に反応しp21などを誘導し細胞終期を停止し遺伝子を修復する。遺伝子が修復不能なほど損傷した場合はアポトーシスを誘導する。',
          answerImg: [apoptosisPathway],
          answer: '正しい',
          commentary: 'がん抑制遺伝子',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】P53やRbといったがん抑制遺伝子の欠損した家系が報告されており（P53欠損はLi-Fraumeni症候群、Rb欠損は家族性網膜芽細胞腫）悪性腫瘍を若年で発症する。',
          answerImg: [tumorSuppressorGene],
          answer: '正しい',
          commentary:
            'がん抑制遺伝子は両アレル欠損によって発がんリスクが極めて高くなる→LOH理論',
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
          answerImg: [chromosomalMutation],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】von Recklinghausen病では多発性の神経線維腫や皮膚にカフェオレ斑がみられる。',
          answerImg: [],
          answer: '正しい',
          commentary:
            '神経線維腫症：von Recklinghausenは遺伝性腫瘍症で最も頻度が高く、出生4000人に1患者と推定されている。末梢神経の多発性神経腫を特色とする腫瘍症であり、皮膚のカフェオレ斑が診断に重要。褐色細胞腫や神経膠腫、白血病、骨腫瘍を合併する。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】Warburg効果とは酵素存在下でも解糖系に偏ったエネルギー酸性を行うがん細胞の特性である。',
          answerImg: [Warburg],
          answer: '正しい',
          commentary:
            '電子伝達系に伴う活性酸素の生成を抑制することで、アポトーシスしてしまう事をふせいでいる。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】Warburg効果により酸化ストレスの生成を低減できるとされる',
          answerImg: [Warburg],
          answer: '正しい',
          commentary:
            'がん細胞では、酸素を利用しない解糖系に偏ったエネルギー代謝を行っている→Warburg effect。これにより、酸化ストレス生成によるアポトーシスが起こってしまうことを防いでいる。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】αklothoはランゲルハンス島におけるインスリンの分泌を制御する。',
          answerImg: [],
          answer: '誤り...αklothoではない',
          commentary: 'Klotho（クロトー）は日本人が見つけた抗老化分子。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】α-リノレン酸はn-6系の不飽和脂肪酸でアラキドン酸を経てプロスタグランジンになる。',
          answerImg: [fattyAcid],
          answer: '誤り...α-リノレン酸ではなくリノール酸',
          commentary:
            'α-リノレン酸はEPA・DHAに変換され、動脈硬化・血栓を予防する作用をもつ。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】アザシチジンはDNMT(DNAメチルトランスフェラーゼ)に結合し失活させることでDNAメチル化を促進する。',
          answerImg: [maintenanceMethylationDNA],
          answer: '誤り...DNAメチル化を抑制してしまう',
          commentary: 'DNMTはDNAメチル化酵素である。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】アポトーシスの主な経路は1.デスレセプター、2.生存シグナルの除去、3.RIPK経路の活性化が挙げられる。',
          answerImg: [necroptosis],
          answer: '誤り...RIPKの経路活性化はネクロプトーシスの経路の一つ。',
          commentary:
            'ネクロプトーシスは最母内外の恒常性の乱れによって引き起こされるRegulated Cell Death。MLKL,RIPK3,RIPK1のキナーゼ活性に依存する。制御された細胞死という点ではアポトーシスと共通しているが、機構は異なりネクローシスのように細胞膜が崩壊する細胞死。その他、1.デスレセプター、2.生存シグナルの除去はそれぞれアポトーシスの1.外来性経路と2.内在性経路に対応している。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】アミロイド、ヒアリン、フィブリノイドはHE染色の染色性の違いから鑑別される。',
          answerImg: [],
          answer: '誤り...鑑別できない',
          commentary:
            'すべてHE染色で好酸性。アミロイドはCongo red染色で赤橙色、フィブリノイドはvan Gieson染色で黄色を呈する。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】アラキドン酸はシクロオキシゲナーゼCOX1・2によって代謝され、プロスタグランジンH2(PGH2)が産生される。これらはトロンボキサンや他のプロスタグランジンの基質になる。',
          answerImg: [mediatorFromCell],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】インスリン抵抗性は動脈硬化を抑制する。',
          answerImg: [atherosclerosis1],
          answer: '誤り...動脈硬化を促進する',
          commentary: '終末糖化産物が炎症を引き起こす',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】ウイルス性心筋炎は心筋細胞間にリンパ球浸潤がみられる。',
          answerImg: [myocarditis],
          answer: '正しい',
          commentary:
            '先進国では心筋炎はウイルス感染によるものが最も多い。原因ウイルスはコクサッキーウイルス・エコーウイルス・インフルエンザウイルスなど。多くの症例で心臓は拡張していて、心筋層の間質に単核細胞（特にリンパ球）が主体の炎症細胞浸潤がみられ、治癒期には部分的に線維化も起こる',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】ウェルシュ菌は食中毒菌であり腸内には常在しない',
          answerImg: [welsh],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】がんの経過中に高カルシウム血症をきたすと腎不全を引き起こす可能性がある。',
          answerImg: [cancerProduceCalcium],
          answer: '正しい',
          commentary:
            '肺がんなどに随伴して高カルシウム血症を引き起こすことがある。高カルシウム血症は急性腎不全を招く。',
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
          answerImg: [cancerStemCell1],
          answer: '正しい',
          commentary: 'がん幹細胞はがんの再発・転移と深く関係している。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】クルーケンベルグ腫瘍が男性に生じることは無い',
          answerImg: [],
          answer: '正しい',
          commentary:
            '胃がんなどが一側ないし両側卵巣へ転移することをクルーケンベルグ腫瘍:Krukenbergs tumorという。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】グルコースはアルドラーゼによりソルビトールを生成し細胞外浮腫の原因となる。',
          answerImg: [polyol],
          answer:
            '誤り...アルドラーゼではなくアルドースレダクターゼ、細胞外浮腫ではなく浸透圧ストレス',
          commentary: 'ポリオール経路と呼ばれる。糖尿病合併症の原因。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】グルタミノリシスによるエネルギー産生は腫瘍細胞に特異的である。',
          answerImg: [glutaminolysis],
          answer: '正しい',
          commentary:
            'グルタミノリシスはリンパ球や胸腺細胞、結腸細胞、脂肪細胞、そしてとくに腫瘍細胞といった全ての増殖している細胞で起こる。腫瘍細胞ではTCA回路が阻害されているため、解糖系に加えてグルタミノリシスがもうひとつの大きなエネルギー産生の柱である。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】グルタミンはDNA合成における窒素源となる',
          answerImg: [glutaminolysis],
          answer: '正しい',
          commentary:
            'グルタミンおよびその分解生成物であるグルタミン酸およびアスパラギン酸は、核酸およびセリンの前駆体である。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】グルタミンはα-ケトグルタル酸に代謝されペントースリン酸経路に組み込まれる。',
          answerImg: [glutaminolysis],
          answer: '誤り...ペントースリン酸経路ではなくTCA回路(クエン酸回路)',
          commentary:
            'Glu → α-KG → TCA回路。グルタミノリシスで生成されるNADPHは抗酸化作用をもち酸化ストレスから腫瘍細胞を守るはたらきがある。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】グルタミンはオキサロ酢酸からアセチルCoAによりクエン酸を生成する。',
          answerImg: [glutaminolysis],
          answer: '正しい',
          commentary: 'クエン酸回路',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】グルタミンはオキサロ酢酸からピルビン酸キナーゼによりピルビン酸になる。',
          answerImg: [glutaminolysis],
          answer:
            '誤り...ピルビン酸キナーゼ(PKMなど)はホスホエノールピルビン酸PEPをピルビン酸へリン酸化する酵素',
          commentary:
            'グルタミノリシスではグルタミンはリンゴ酸に代謝されMEによってピルビン酸に変換される。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】グルタミンはグルタチオンの原料として細胞のレドックスに関与する',
          answerImg: [NADPH],
          answer: '正しい',
          commentary: 'グルタチオン:GSH、レドックス:酸化還元',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】グルタミンはリンゴ酸に代謝されマリック・エンザイムによりピルビン酸になる。',
          answerImg: [glutaminolysis],
          answer: '正しい',
          commentary:
            'ME1:マリック・エンザイム。がん細胞ではTCA回路が阻害されており、必要なアミノ酸の合成をグルタミンから行っている（→グルタミノリシス）。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】コール酸はコレステロール排出に重要である',
          answerImg: [cholestanol],
          answer: '正しい',
          commentary:
            'コレステロールはエネルギーとして利用されず、胆汁として排出される。胆汁酸塩はコレステロールの代謝産物であり、またコレステロール胆汁排泄の安定剤でもある。',
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
          answerImg: [produceROS],
          answer: '誤り...寿命が著明に延長されるわけではない',
          commentary:
            'ROSは白血球の殺菌作用に寄与していて、全く必要ないわけではない。',
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
          answerImg: [transFattyAcid],
          answer: '正しい',
          commentary:
            'トランス脂肪酸はマーガリン・ショートニングに多く含まれる',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】トランス型脂肪酸は人工的な合成によって生成し自然界には存在しない',
          answerImg: [transFattyAcid],
          answer: '誤り...自然界にも存在する',
          commentary:
            '牛乳・バター・牛肉などの反芻動物由来の食品中には天然型トランス脂肪酸が含まれる。それ以外の多くの加工食品中に含まれるトランス脂肪酸は植物油からの合成。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】トランス型脂肪酸は同じ炭素数のシス型脂肪酸よりも融点が高い',
          answerImg: [transFattyAcid],
          answer: '正しい',
          commentary:
            'トランス脂肪酸の多くは植物油を水素化処理したものだが、植物油とは異なり常温で固体。',
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
          commentary: 'ヒドロキシラジカルは分解酵素が存在しない活性酸素',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】ビリルビン・メラニン・リポフスチン・胆汁はいずれもHE染色では褐色顆粒として認められる。',
          answerImg: [jaundiceTissue],
          answer: '正しい',
          commentary: 'メラニン→褐色色素、リポフスチン→褐色萎縮',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】ビリルビンが小腸で吸収され肝臓に戻ることを腸肝循環という。',
          answerImg: [bilirubin],
          answer: '誤り...ビリルビンではなくウロビリノーゲン',
          commentary:
            '胆汁として小腸へ排出されたビリルビンは腸内細菌によってウロビリノーゲンへ変換され、ウロビリノーゲンの形で小腸から一部吸収される→腸肝循環。このウロビリノーゲンは一部尿中へ排出され、尿の色のもととなる。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】ビリルビンの直接型・間接型はvan Gieson反応の差である。',
          answerImg: [bilirubinDifference],
          answer:
            '誤り...van Gieson反応ではなくvan den Bergh反応。直接型ビリルビンが水溶性であるのに対して間接型ビリルビンは脂溶性なのでメタノールによる前処置がないと発色しない→間接型といわれる。',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '【正誤問題】ピルビン酸はLDHにより乳酸を生成する。',
          answerImg: [glycolysisPathway],
          answer: '正しい',
          commentary:
            'Pyruvate → Lactate。HIF-1αやC-MYCによって誘導される酵素。C-MYCは解糖系代謝を誘導するのでがん細胞で発現亢進している。',
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
          answerImg: [polyol],
          answer: '誤り...グルタミンではなくGSH',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】マクロファージは RAGE やスカベンジャー受容体などを介し終末糖化産物による抗炎症作用を発現する',
          answerImg: [AGEActivity],
          answer: '誤り...抗炎症作用ではなく炎症誘導',
          commentary:
            'その他、AGEによって増えたHMGB1はショックに対応する各組織のマクロファージ系細胞にアポトーシスを誘導したりもする。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】マクロファージは抗原提示細胞であり、Fc受容体とMHCクラスⅡ分子を有している。',
          answerImg: [macrophageReceptors],
          answer: '正しい',
          commentary:
            '抗原提示能は樹状細胞の方が高い。外来性抗原をヘルパーT細胞に提示するためにFc受容体とMHC ClassⅡ分子が必要。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】ミューテーター遺伝子としてミスマッチ修復にかかわるMHLや一本鎖切断修復、二本鎖切断修復にかかわる BRCA1/2 がある',
          answerImg: [MMR],
          answer: '誤り...MHLではなくMLH1',
          commentary:
            '二本鎖のミスマッチをMutSαやMutLαが認識して新生鎖を除去する→ミスマッチ修復',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】リウマチ性心筋炎は溶連菌感染が関与している',
          answerImg: [rheumaticHeartDisease],
          answer: '正しい',
          commentary:
            'リウマチ熱はA群β溶血性連鎖球菌の感染による咽頭炎後、2～3週間の間隔をおいて生じる炎症性疾患（発熱・心筋炎・多関節炎など）。発生機序として、溶連菌感染に伴い連鎖球菌のある株のM蛋白に対する抗体が作られ、その抗体が心臓の糖タンパクとの交差反応を起こし急性炎症反応がひきおこされるためといわれている。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】リポフスチンなどの老廃物にも終末糖化産物が蓄積している',
          answerImg: [AGE],
          answer: '正しい',
          commentary: 'リポフスチン沈着による褐色萎縮は老化の原因となる。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】リンパ球はB細胞とT細胞に大別され、 B細胞は抗体産生を行い、 T細胞は他の白血球の活動を調節する',
          answerImg: [Th],
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
          answerImg: [mutationType],
          answer: '正しい',
          commentary:
            '上皮性がんには遺伝子突然変異、非上皮性がんには染色体突然変異が多い。',
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
          answerImg: [coronaryArteryDisease],
          answer: '誤り...血栓ではなく動脈攣縮',
          commentary:
            '異型狭心症は、軽度の冠動脈動脈硬化と動脈攣縮（ホルモンなどによる一過性の血管の異常収縮）が原因の狭心症。血栓が形成される場合は心筋梗塞となる。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】異型狭心症は、冠動脈の内腔が血栓により閉塞し生じる',
          answerImg: [coronaryArteryDisease],
          answer: '誤り...異型狭心症ではなく心筋梗塞',
          commentary:
            '異型狭心症は、軽度の冠動脈動脈硬化と動脈攣縮（ホルモンなどによる一過性の血管の異常収縮）が原因の狭心症。血栓が形成される場合は心筋梗塞となる。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】遺伝子転座ではキメラ蛋白を生じることがあり、代表的なものに慢性骨髄性白血病のBCR/ABL遺伝子融合がある',
          answerImg: [leukemia],
          answer: '正しい',
          commentary:
            '慢性骨髄性白血病における（相互）転座は9番染色体の断片と22番染色体の断片が入れ替わって結合する構造異常で、上皮癌によくみられる塩基配列のエラーではないが、結合部分から翻訳される融合タンパク質が異常をもたらす。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】遺伝子突然変異はDNAの配列に生じた変化であり、 一方染色体突然変異は染色体単位での大きな構造変化をさす',
          answerImg: [leukemia],
          answer: '正しい',
          commentary:
            '塩基の置換・挿入・欠失などの変異は遺伝子突然変異とよばれ、上皮性がんに多い。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】遺伝子突然変異は塩基の置換や挿入、欠失があるが、変異が生じた原因による特徴は特にない',
          answerImg: [TDimer],
          answer: '誤り...遺伝子突然変異は変異の原因による特徴がある',
          commentary:
            '例えば紫外線は隣接するチミンを二量体に変化させてしまう（チミンダイマー）。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】炎症の四徴のひとつである浮腫は間質に体液が漏れ出して組織が腫脹している。 血管の透過性が亢進している場合を炎症性浮腫と呼び比重の低い漏出液が見られる',
          answerImg: [inflammation],
          answer: '誤り...漏出液は比重が大きい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】炎症メディエーターはケモカイン、C5a、 リポキシゲナーゼ等の血管作動性メディエーターとヒスタミン、ブラジキニンなどの走化性因子に大別される',
          answerImg: [inflammatoryMediator],
          answer: '誤り...ケモカインは走化性因子',
          commentary: 'ヒスタミン・ブラジキニンは血管作動性メディエーター。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】炎症時の発赤、 発熱は毛細血管の開大による血流の増加を反映している。 また、血管透過性の亢進による滲出液 (transudate) が血管外に流出することにより腫脹が起きる',
          answerImg: [inflammation],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】黄色のビリルビンは酸化されて青色のビリベルジンになる',
          answerImg: [bilirubin2],
          answer: '誤り...青色ではなく緑色',
          commentary:
            '直接型ビリルビンは一部酸化して緑色のビリベルジンとなる。ビリベルジンはヘムから間接ビリルビンとなる中間産物としても生成される。',
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
          answerImg: [fattyLiver],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】肝重量の70%以上のトリグリセリドの蓄積により脂肪肝が生じる',
          answerImg: [fattyLiver],
          answer: '誤り...70%以上ではなく7%以上',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】間接型ビリルビンはミトコンドリアの酸化的リン酸化を阻害する',
          answerImg: [jaundiceBrain],
          answer: '正しい',
          commentary:
            'Criggler-Najar症候群などで異常に増えた間接型ビリルビンは脂溶性で血液脳関門を容易に通過し核黄疸を引き起こす。アルブミン非結合型間接ビリルビンは細胞膜中のリン脂質やガングリオシドに結合し、神経細胞の酸素消費や酸化的リン酸化を阻害し脳を傷害する。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】間接型ビリルビンは血中では免疫グロブリンと結合して運搬される',
          answerImg: [bilirubin],
          answer: '誤り...免疫グロブリンではなくグルクロン酸',
          commentary:
            '肝細胞によって脂溶性の間接型から水溶性の直接型にグルクロン酸抱合され、胆汁へ排出される',
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
            '【正誤問題】急性炎症は炎症の急性期の反応で病原体と傷害された組織の除去、 炎症メディエーターの産生、 炎症細胞の動因が生じ、 最後に炎症メディエーターに対する特異的阻害物質が働き炎症が終結する',
          answerImg: [acuteInflammation],
          answer: '正しい',
          commentary:
            '急性炎症でうまく治癒できない場合慢性炎症へ移行し、肉芽組織などを形成し始める。',
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
          answerImg: [duchanne],
          answer: '正しい',
          commentary:
            'デュシェンヌ型筋ジストロフィーは遺伝子疾患で、初期症状としてふくらはぎの仮性肥大がみられる事が多い。',
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
          answerImg: [jaundiceBrain],
          answer: '正しい',
          commentary:
            '2mg/dlを超えると眼球結膜が黄染し、目に見えてわかるようになる。',
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
          answerImg: [AGE],
          answer: '正しい',
          commentary:
            '高血糖 + (酸化ストレス or 加熱)　によってAGEは形成される。AGEはがん発生・進行の原因として重視される。',
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
          answerImg: [mitochondria],
          answer: '正しい',
          commentary:
            'ミトコンドリアでの酸化的リン酸化がROSを発生させる。がん細胞ではROSの発生やそれに伴うアポトーシスを回避するため、酸素が豊富な条件下でも酸化的リン酸化が抑制されている。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】最も頻度が高い先天性心疾患は心房中隔欠損(ASD)である',
          answerImg: [heartMiscreation],
          answer: '誤り...心房中隔欠損症ASDではなく心室中隔欠損VSD',
          commentary:
            '心臓は左心房左心室のほうが拍出力が大きいため、ASDもVSDも最初はL-Rシャントだが悪化するとR-Lシャントに変わり（Eisenmenger化）、チアノーゼなど重篤な症状を引き起こす。',
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
          answerImg: [produceROS],
          answer: '誤り...NAD(P)Hレダクターゼではなく、NAD(P)Hオキシダーゼ',
          commentary:
            '活性酸素は1.ミトコンドリアにおける酸化的リン酸化、2.ペルオキシソームや小胞体、3.好中球の細胞膜のNADPHオキシダーゼによって産生される。活性酸素は様々な疾患の原因であるが、病原体の殺菌・薬物の解毒において重要な役割を果たす側面も持っている。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】細胞由来の炎症性メディエーターでもヒスタミンやHMGB1は細胞内で合成され貯蔵されている。 また、リン脂質やアラキドン酸の代謝に由来するものがある',
          answerImg: [mediatorFromCell],
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
          answerImg: [hypertrophy],
          answer: '誤り...収縮型ではない',
          commentary:
            '拡張型心筋症は心筋の肥大をおこす難病。収縮型心筋症は存在しない？',
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
          answerImg: [CancerFromAGE],
          answer: '誤り...受容体はRAGE',
          commentary:
            'RAGEはAGEや糖化HMGB1の受容体で、RAGEの活性化ががんの増殖・進行に寄与する。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】終末糖化産物は蛋白等に酸化ストレス刺激により酵素反応により糖の修飾が生じたものである',
          answerImg: [AGE],
          answer: '誤り...酵素反応ではない',
          commentary:
            'AGEは比酵素的な糖の修飾で、様々なタンパク・脂質から形成される。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】終末糖化産物もHMGB1 も RAGE の受容体になる',
          answerImg: [CancerFromAGE],
          answer: '正しい',
          commentary:
            'AGEもHMGB1もRAGEのリガンド。いずれもRAGEを活性化し、がん細胞の増殖・活性酸素生成・血管新生・細胞運動を助ける。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】終末糖化産物遺伝子は複数の転写 variant を有する',
          answerImg: [AGE],
          answer: '誤り...終末糖化産物遺伝子は存在しない',
          commentary: 'AGEはタンパクや脂質に対する、非酵素的な糖化。',
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
          answerImg: [esophagobronchialFistula],
          answer: '誤り...食道と気管は交通している',
          commentary:
            '日本人は比較的少ないとされる奇形。約9割を占めるC型は上部食道が盲端となってしまっている。食道から発生する気管が上手く分離しないことが原因。',
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
            '【正誤問題】心サルコイドーシスでは、肉芽組織の形成がみられる',
          answerImg: [sarcoidosis],
          answer: '誤り...肉芽組織ではなく肉芽腫',
          commentary:
            'サルコイド肉芽腫はサルコイドーシス患者のリンパ節・肺・皮膚・心臓・肝臓・脾臓・唾液腺・網膜などに認められる。結核結節とは異なり中心部に壊死はほとんど認められない。ラングハンス型巨細胞と異物型巨細胞の両方が認められ、星状小体やシャウマン小体が見られることがある。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】心筋梗塞の発症直後から、マクロファージが認められる',
          answerImg: [myocardialInfarctionSymptom],
          answer: '誤り...直後ではなく数日後～数週間後',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】心筋梗塞発症から約2日経過した症例では強い線維化がみられる',
          answerImg: [myocardialInfarctionSymptom],
          answer: '誤り...2日後ではなく数週間後',
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
          answerImg: [neuroblastoma],
          answer: '正しい',
          commentary:
            'MYCNは細胞増殖・タンパク合成などに関わるがん遺伝子。MYCN遺伝子が増幅され過剰発現することにより神経芽腫・髄芽腫の原因となる。',
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
          commentary: '→がん幹細胞だけを標的にした治療はうまくいかない',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】生成された終末糖化産物を分解する薬剤はまだ開発されていない',
          answerImg: [AGE],
          answer: '正しい',
          commentary:
            '様々なタンパク・脂質に対する非酵素的な糖の修飾によってAGEは生成されるので、これら全てを分解する薬剤は開発されていない。AGEが生成されにくくする薬剤は開発されてきている。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】生体から完全に酸化ストレスを除去することががん予防のゴールのひとつである',
          answerImg: [produceROS],
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
          answerImg: [apoptosisPathway],
          answer: '正しい',
          commentary:
            '生存シグナルによって制御されるアポトーシスの経路を内在性経路と呼ぶ。',
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
          answerImg: [fattyLiverDestination],
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
          answerImg: [bilirubin],
          answer: '正しい',
          commentary:
            '直接型ビリルビンは胆汁として排出されるが、胆道が閉塞されることで黄疸を発症する。膵炎や膵癌が胆道を圧迫することもある。',
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
          answerImg: [bilirubinDifference],
          answer: '誤り...直接型は通過しにくい',
          commentary:
            '脂溶性で核黄疸の原因となる間接型とは異なり、グルクロン酸抱合を受けた直接型は水溶性でBBBを通過しにくい。胆汁中に排出される。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【正誤問題】陳旧性心筋梗塞の症例では心筋間に線維性瘢痕が形成されている',
          answerImg: [myocardialInfarctionalTissue],
          answer: '誤り...心筋間ではない',
          commentary:
            '心筋細胞は殆ど再生しないため、死んだ心筋細胞に置き換わる',
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
          answerImg: [coronaryArteryDisease],
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
          answerImg: [myocardialInfarctionComplication],
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
          commentary:
            '肥大型心筋症は、心肥大を起こす原因となる高血圧や弁膜症などの病気が無いにもかかわらず、通常左室、ときに右室の心筋の肥大がおこる病気。',
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
          answerImg: [retinoblastoma],
          answer: '誤り...WT1ではなくRb遺伝子の異常',
          commentary:
            'Rb遺伝子はがん抑制遺伝子で、高発癌家系では片側のアレルが不活化されていて、もう一方のアレルに何らかの障害が起こると修復することができない。→がん抑制遺伝子は両アレルが不活化されると機能を失うが、片アレルが不活化された状態が遺伝するので遺伝形式は優性遺伝となる。',
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
          answerImg: [granulocyte],
          answer: '正しい',
          commentary:
            '顆粒白血球は多型核白血球ともよばれ、分葉核が組織像で確認される。単球・リンパ球・NK細胞は含まれない。',
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
          answerImg: [fattyAcid],
          answer:
            '誤り...α-リノレン酸はn3系不飽和脂肪酸で、DHA・EPAに変換され動脈硬化や血栓の抑止にはたらくといわれている。',
          commentary: '',
        },
        {
          detailInfo: '4/18午前',
          questionImg: [],
          questionSentence:
            '【正誤問題】ウェルシュ菌は食中毒菌であり腸内には常在しない。',
          answerImg: [welsh],
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
          answerImg: [cancerDeathRate],
          answer: '正しい',
          commentary: 'がん細胞は組織幹細胞から生まれると考えられている。',
        },
        {
          detailInfo: '4/18午前',
          questionImg: [],
          questionSentence:
            '【正誤問題】我々は常に自然放射線や活性酸素種、紫外線やアルコール、ベンツピレン等の変異原にさらされておりDNA損傷が生じている。',
          answerImg: [],
          answer: '正しい',
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
          answerImg: [causeOfCancer],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '4/18午前',
          questionImg: [],
          questionSentence:
            '【正誤問題】高脂肪食・高糖質食は大腸発がん・転移を促進する。',
          answerImg: [causeOfCancer],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '4/18午前',
          questionImg: [],
          questionSentence:
            '【正誤問題】腫瘍形成は多段階からなる複雑なステップを経て生じる。これらの変化にはがん遺伝子の活性化とがん抑制遺伝子の不活化の両方が含まれる。これを多段階発がんと呼ぶ。',
          answerImg: [carcinomaSteps],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '4/18午前',
          questionImg: [],
          questionSentence:
            '【正誤問題】終末糖化産物は蛋白などに酸化ストレス刺激により酵素反応により糖の修飾が生じたものである。',
          answerImg: [AGE],
          answer: '誤り...非酵素的。',
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
          answerImg: [fattyLiverDestination],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '4/18午前',
          questionImg: [],
          questionSentence:
            '【正誤問題】直接型ビリルビンは血液脳関門を通過しやすい',
          answerImg: [bilirubinDifference],
          answer: '誤り...直接型ではなく間接型',
          commentary:
            '間接型ビリルビンはBBBを通過し核黄疸の原因となる。Criggler-Najar症候群など。',
        },
        {
          detailInfo: '4/18午前',
          questionImg: [],
          questionSentence:
            '【正誤問題】間接型ビリルビンはミトコンドリアの酸化的リン酸化を阻害する',
          answerImg: [jaundiceBrain],
          answer: '正しい',
          commentary:
            'Criggler-Najar症候群などで異常に増えた間接型ビリルビンは脂溶性で血液脳関門を容易に通過し核黄疸を引き起こす。アルブミン非結合型間接ビリルビンは細胞膜中のリン脂質やガングリオシドに結合し、神経細胞の酸素消費や酸化的リン酸化を阻害し脳を傷害する。',
        },
        {
          detailInfo: '4/18午前',
          questionImg: [],
          questionSentence:
            '【正誤問題】3価鉄はFenton反応によりヒドロキシラジカルを生成し発がんに関与する',
          answerImg: [mitochondria],
          answer: '誤り...3価鉄ではなく2価鉄',
          commentary:
            'ミトコンドリアで酸化的リン酸化の過程で酸化ストレスが生成される。',
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
          answerImg: [amyloidBeta],
          answer: '正しい',
          commentary: 'アルツハイマー病の原因。',
        },
        {
          detailInfo: '4/24午前',
          questionImg: [],
          questionSentence: '炎症の特徴を4つ答えてください。          ',
          answerImg: [inflammation],
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
          commentary:
            '獲得免疫では主にリンパ球（T 細胞、B 細胞）や形質細胞が担います。好中球やマクロファージが活躍するのは⾃然免疫です',
        },
        {
          detailInfo: '4/24午前',
          questionImg: [],
          questionSentence:
            '【正誤問題】炎症にはさまざまな生理活性物質が関与するが、ヒスタミンは血管透過性を亢進させ疼痛をもたらす作用がある。',
          answerImg: [inflammatoryMediator],
          answer: '正しい',
          commentary:
            'ヒスタミンは⾎管透過性を亢進させたり内因性疼痛物質として痛みをもたらして炎症を促進させます。他炎症性メディエーターのセロトニンやブラジキニンも同様の作⽤があります。',
        },
        {
          detailInfo: '4/24午前',
          questionImg: [],
          questionSentence:
            '【正誤問題】アラキドン酸カスケードのなかでNSAIDsが阻害するものはシクロオキシゲナーゼであり、プロスタグランジンなどの合成を抑制する。',
          answerImg: [],
          answer: '正しい',
          commentary:
            'NSAIDs の副作⽤のひとつに胃腸障害（胃潰瘍）があります。COX には COX1 と COX2 のサブタイプがありますが、それぞれで作⽤は異なります。炎症や痛みに関連するのは主に COX2 のほうで、COX1 は胃粘膜保護作⽤をもっています。ロキソニンやアスピリン、イブプロフェンなど⼀般的な NSAIDs は COX1 と COX2どちらも阻害する（⾮選択的）ため、COX1 の胃粘膜保護作⽤も阻害してしまい、胃潰瘍のリスクを⽣じます。そこで、COX2 のみを阻害する「選択的 COX2 阻害薬：セレコキシブ」などが開発され、胃潰瘍の副作⽤を抑えながら抗炎症作⽤を保つことが可能となりました。しかし、選択的 COX2 阻害薬は⼼⾎管イベントを増加させる副作⽤の報告もあり、背景疾患に注意して投与する必要があります。',
        },
        {
          detailInfo: '4/24午前',
          questionImg: [],
          questionSentence: '肉芽組織を形成する過程について記述してください。',
          answerImg: [glanulationTissue],
          answer:
            '：組織において壊死が⽣じたところを好中球やマクロファージが分解・貪⾷し、これに対して⾎管や線維芽細胞が活性化して増⽣することで壊死病変を置換し⾁芽組織が形成される。',
          commentary:
            '⾁芽組織は創傷治癒過程でみられる変化です。⾁芽腫とは区別して認識してください。',
        },
        {
          detailInfo: '4/24午前',
          questionImg: [],
          questionSentence: '結核の病理像の特徴を述べてください。',
          answerImg: [],
          answer:
            '結核菌を処理できなかった好中球を取り囲むようにマクロファージが誘導され類上⽪細胞となり、多核巨細胞も集まり、周囲にはリンパ球や単核球、形質細胞が浸潤する。そして中央に乾酪壊死を伴う⾁芽腫を形成する。',
          commentary:
            '類上⽪細胞、多核巨細胞、乾酪壊死を伴う⾁芽腫を形成する がポイントです。',
        },
        {
          detailInfo: '4/24午前',
          questionImg: [],
          questionSentence:
            '【正誤問題】甲状腺機能亢進症は甲状腺刺激ホルモン受容体に対する抗体が過剰に産生される疾患であり、Ⅲ型アレルギーに代表とされる。',
          answerImg: [allergy5],
          answer: '誤り...バセドウ病はⅢ型ではない',
          commentary:
            '甲状腺機能亢進症（バセドウ病）は V 型（II 型の亜型）です。III 型アレルギーは免疫複合体によって組織障害をもたらす反応です。',
        },
        {
          detailInfo: '4/24午前',
          questionImg: [],
          questionSentence:
            '【正誤問題】酸化ストレスはミトコンドリアの酸化的リン酸化の過程で産生される一方で、SODやビタミンなどのスカベンジャーは酸化作用に抗う働きをする。',
          answerImg: [mitochondria, scavenger],
          answer: '正しい',
          commentary:
            'ミトコンドリアの電子伝達系、複合体Ⅲで酸素分子と電子が反応する。ビタミンE、ビタミンCは抗酸化作用を持つ',
        },
        {
          detailInfo: '4/24午前',
          questionImg: [],
          questionSentence:
            '【正誤問題】アポトーシスとは、組織の損傷による病的な細胞死と定義される。',
          answerImg: [necrosisApoptosis],
          answer:
            '誤り...アポトーシスは計画された細胞死に対して。問題⽂はネクローシスの説明です。',
          commentary: '',
        },
        {
          detailInfo: '4/24午前',
          questionImg: [],
          questionSentence:
            '【正誤問題】I型アレルギーの特徴について述べてください。          ',
          answerImg: [allergy1],
          answer:
            '即時型アレルギーであり、数分から 2 時間で反応する。IgE の関与が特徴で、肥満細胞に付着した後抗原が再侵⼊することで抗原抗体反応がおこる。ヒスタミンやロイコトリエンなどが分泌され、蕁⿇疹や呼吸困難、粘液分泌亢進による⿐⽔といった症状が出現する。',
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
          answerImg: [fattyAcid],
          answer: '誤り',
          commentary: 'α-リノレン酸ではなくリノール酸',
        },
        {
          detailInfo: '4/24午後',
          questionImg: [],
          questionSentence:
            '【正誤問題】ウェルシュ菌は食中毒菌であり腸内には常在しない',
          answerImg: [welsh],
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
          answerImg: [AGE],
          answer: '誤り',
          commentary: '非酵素的な糖化',
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
          answerImg: [fattyLiverDestination],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '4/24午後',
          questionImg: [],
          questionSentence:
            '【正誤問題】直接型ビリルビンは血液脳関門を通過しやすい',
          answerImg: [bilirubinDifference],
          answer: '誤り...直接型ではなく間接型',
          commentary: '',
        },
        {
          detailInfo: '4/24午後',
          questionImg: [],
          questionSentence:
            '【正誤問題】間接型ビリルビンはミトコンドリアの酸化的リン酸化を阻害する',
          answerImg: [jaundiceBrain],
          answer: '正しい',
          commentary:
            'Criggler-Najar症候群などで異常に増えた間接型ビリルビンは脂溶性で血液脳関門を容易に通過し核黄疸を引き起こす。アルブミン非結合型間接ビリルビンは細胞膜中のリン脂質やガングリオシドに結合し、神経細胞の酸素消費や酸化的リン酸化を阻害し脳を傷害する。',
        },
        {
          detailInfo: '4/24午後',
          questionImg: [],
          questionSentence:
            '【正誤問題】3価鉄はFenton反応によりヒドロキシラジカルを生成し発癌に関与する',
          answerImg: [mitochondria],
          answer: '誤り...3価鉄ではなく2価鉄',
          commentary:
            'ヒドロキシラジカルなどのROSの大部分はミトコンドリアで合成される。',
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
          answerImg: [amyloidBeta],
          answer: '正しい',
          commentary: 'アルツハイマー病の原因',
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
          answerImg: [apoptosisPathway],
          answer: '正しい',
          commentary:
            'まずミトコンドリアが変化することによって、チトクロムCが放出され、様々なカスパーゼが活性化され、細胞死を誘導する。',
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
          answer: '血小板の寿命が数日であるから？',
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
          answerImg: [carcinomaSteps],
          choices: ['K-ras', 'APC', 'B-raf', 'P53'],
          answer: 'APC',
          commentary: '',
        },
        {
          detailInfo: '4/25午前',
          questionImg: [],
          questionSentence:
            'がんの変異には染色体変異あり、有名なものとして慢性骨髄性白血病がある。この原因は染色体の欠失によりBCR/ABL融合遺伝子をもったフィラデルフィア染色体が生じることである。BCR/ABL融合遺伝子はチロシンキナーゼを異常活性化する。',
          answerImg: [leukemia],
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
            'Rb,P53,p16,APCなどのがん抑制遺伝子への変異によってがん化するとき、対応する遺伝子の両アレルに変異が生じることが原因で欠損しているとする説。実際には偶然両アレルに別々の変異が発生する確率は著しく低く、片アレルの変異が組換え異常により正常なアレルに置き換わる、ヘテロ接合性の消失(LOH)が原因という説も唱えられている。',
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
          answerImg: [brainTumor, Wilms, neuroblastoma],
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
          answerImg: [Kartagener, Hirschsprung, Down],
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
        {
          detailInfo: '5/01午前',
          questionImg: [],
          questionSentence:
            '低酸素を感知するHIF-1αはなんと言う物質を誘導して、血管新生を引き起こすか？',
          answerImg: [],
          answer: 'LDHA1',
          commentary: '',
        },
        {
          detailInfo: '5/01午前',
          questionImg: [],
          questionSentence:
            'メラノーマでよくみられる細胞一つ一つの運動能の亢進による浸潤の形式をなんと言う？            ',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '5/01午前',
          questionImg: [],
          questionSentence:
            '細胞骨格のリモデリングを行なうときに関与するシグナルは？            ',
          answerImg: [],
          answer: 'KRASかC-Src',
          commentary: '',
        },
        {
          detailInfo: '5/01午前',
          questionImg: [],
          questionSentence: '腫瘍毛細血管の特徴を簡潔に述べよ',
          answerImg: [],
          answer: '管径が太く、中皮細胞がまばら',
          commentary: '腫瘍が転移しやすいように作り変えられている',
        },
        {
          detailInfo: '5/01午前',
          questionImg: [],
          questionSentence:
            'TECと転移が関与することが明らかとなってきている。TECはアンジオクラインファクターを放出するが、転移に関わるアンジオクラインファクターはどれか。',
          answerImg: [],
          choices: ['IL-6', 'プロテオグリカンA', 'VGEF', 'CDCL12'],
          answer: 'プロテオグリカンA',
          commentary: '',
        },
        {
          detailInfo: '5/01午前',
          questionImg: [],
          questionSentence:
            'TANの転移にNETsが関与するが、転移する臓器に先に到達しているのはどちらか？',
          answerImg: [],
          choices: ['腫瘍', 'NETs'],
          answer: 'NETs',
          commentary: '',
        },
        {
          detailInfo: '5/01午前',
          questionImg: [],
          questionSentence:
            '腫瘍細胞はPD-L1を発現し、CD8+Tcellが発現しているPD-1と結合しCD8+Tcellの抗腫瘍活性を抑制する。この結合を阻害する薬剤を免疫チェックポイント阻害剤といい本庶佑先生が開発した。間違いがなければなし、あれば間違いを訂正して記入せよ',
          answerImg: [],
          answer: 'ニボルマブ',
          commentary: '',
        },
        {
          detailInfo: '5/01午前',
          questionImg: [],
          questionSentence:
            '幹細胞、がん幹細胞の共通する性質を２つ述べよ            ',
          answerImg: [],
          answer: '自己複製能・多分化能',
          commentary: '',
        },
        {
          detailInfo: '5/01午前',
          questionImg: [],
          questionSentence:
            'がん幹細胞は活性酸素(ROS)を除去する能力が亢進している。このとき活性化するものはなにか？',
          answerImg: [],
          answer: 'ALDH1',
          commentary: '',
        },
        {
          detailInfo: '5/01午前',
          questionImg: [],
          questionSentence:
            '大腸がん幹細胞に特異的に高発現がみられる遺伝子はどれか？',
          answerImg: [],
          choices: ['CD44', 'CD133', 'LGR5', 'SOX2'],
          answer: 'LGR5',
          commentary: '',
        },
        {
          detailInfo: '5/01午前',
          questionImg: [],
          questionSentence:
            'ATPは生体内ですぐに消費されてしまうため、別の形でストックされている。その物質とはなにか',
          answerImg: [],
          answer: 'クレアチンリン酸',
          commentary: '',
        },
        {
          detailInfo: '5/01午前',
          questionImg: [],
          questionSentence:
            '代謝によって異化・同化がおこる。物質の例をあげて異化・同化についてそれぞれ簡潔に説明せよ',
          answerImg: [],
          answer: '適当に',
          commentary: '',
        },
        {
          detailInfo: '5/01午前',
          questionImg: [],
          questionSentence:
            'ASCT2は何を取り込むトランスポーターであるか？            ',
          answerImg: [],
          choices: ['グルコース', '必須アミノ酸', 'グルタミン酸', 'グルタミン'],
          answer: 'グルタミン酸',
          commentary: '',
        },
        {
          detailInfo: '5/01午前',
          questionImg: [],
          questionSentence:
            'がんは不足する栄養を補うためにさまざまな方法で栄養を取り込む。その一つに細胞そのものを取り込む機構が存在する。これをなんと言う？',
          answerImg: [],
          answer: 'エントーシス',
          commentary: '',
        },
        {
          detailInfo: '5/01午前',
          questionImg: [],
          questionSentence:
            'ミトコンドリアから生じたO2・―はスーパーオキシドジスムターゼ(SOD)によってH2O2に変換される。H2O2は鉄や銅と反応してヒドロキシラジカルを生成する。ヒドロキシラジカルは強い細胞障害性をもつが、GSHよって除去される。　間違いがなければなし、訂正があれば正して下さい',
          answerImg: [],
          answer: 'ヒドロキシラジカルはGSHでは除去できない',
          commentary: '',
        },
        {
          detailInfo: '5/01午前',
          questionImg: [],
          questionSentence:
            '増殖状態にある細胞は酸化的リン酸化よりも解糖系による代謝を亢進させる。この代謝の変化は解糖系中間体に増殖に必要な分子が多数存在するからである。またこの解糖系を制御している遺伝子にPGC-1αがある。 間違いがなければなし、訂正があれば正して下さい。',
          answerImg: [MYC],
          answer: 'PGC-1αではなくC-MYC',
          commentary: '',
        },
        {
          detailInfo: '5/01午前',
          questionImg: [],
          questionSentence:
            'PKM1とPKM2の違いについて代謝の観点から簡潔に説明して下さい。',
          answerImg: [],
          answer:
            'PKM1はTCA回路を活性化するピルビン酸キナーゼだが、PKM2はTCA回路を活性化させずにグルタミンから必要なアミノ酸や脂肪酸を合成させるように促進するピルビン酸キナーゼ',
          commentary: '',
        },
        {
          detailInfo: '5/01午前',
          questionImg: [],
          questionSentence:
            'ミトコンドリアDNAには呼吸鎖複合体であるcomplex1,2,4,5の一部がコードされており、核DNAと異なりヒストンが存在しない。間違いがなければなし、訂正があれば正して下さい。',
          answerImg: [],
          answer: 'complex1,3,4,5',
          commentary: 'スライドに加筆',
        },
        {
          detailInfo: '5/01午前',
          questionImg: [],
          questionSentence:
            '筋線維内に赤色ぼろ線維をみとめるミトコンドリア病は？            ',
          choices: ['MERRF', 'MELAS', 'Leigh症候群'],
          answerImg: [MELAS],
          answer: 'MERRF',
          commentary: '',
        },
        {
          detailInfo: '5/01午前',
          questionImg: [],
          questionSentence:
            'ミトコンドリアが別の細胞に移行する現象をなんと言う？            ',
          answerImg: [],
          answer: 'ミトコンドリアトランスファー',
          commentary: '',
        },
        {
          detailInfo: '5/01午後',
          questionImg: [],
          questionSentence: '【正誤問題】微生物は発癌における大きな要因である',
          answerImg: [cancerFromVirus],
          answer: '正しい',
          commentary:
            '感染症が原因のがん：胃がん（ピロリ菌）・子宮頸がん（ヒトパピローマウイルス）・肝がん（B型C型肝炎ウイルス）など',
        },
        {
          detailInfo: '5/01午後',
          questionImg: [],
          questionSentence:
            '【正誤問題】EBV感染による2大悪性疾患は胃癌とバーキットリンパ腫である',
          answerImg: [cancerAboutEBV],
          answer: '誤り...胃がんではなく鼻咽頭がん',
          commentary: '',
        },
        {
          detailInfo: '5/01午後',
          questionImg: [],
          questionSentence: '【正誤問題】発癌に関係するウイルスは６種類である',
          answerImg: [cancerFromVirus],
          answer: '誤り',
          commentary: 'もっと多い？',
        },
        {
          detailInfo: '5/01午後',
          questionImg: [],
          questionSentence:
            '【正誤問題】細菌による発癌は外界に接した臓器に限定される',
          answerImg: [],
          answer: '誤り',
          commentary: '',
        },
        {
          detailInfo: '5/01午後',
          questionImg: [],
          questionSentence:
            '【正誤問題】細菌による大腸癌発生促進には、細菌の産生する短鎖脂肪酸が挙げられる',
          answerImg: [microorganismProducesEffectors],
          answer: '誤り',
          commentary: '毒素',
        },
        {
          detailInfo: '5/01午後',
          questionImg: [],
          questionSentence: '【正誤問題】ピロリ菌は単独で胃癌発癌をもたらす',
          answerImg: [],
          answer: '誤り',
          commentary:
            'ピロリ菌は発がんプロモーターで、発がん性物質と組み合わさることで発癌を誘導する',
        },
        {
          detailInfo: '5/01午後',
          questionImg: [],
          questionSentence:
            '【正誤問題】モンゴロイドに感染しているピロリ菌は毒性が高い',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '5/01午後',
          questionImg: [],
          questionSentence:
            '【正誤問題】乳幼児期に感染したピロリ菌は持続感染する',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        {
          detailInfo: '5/01午後',
          questionImg: [],
          questionSentence: '【正誤問題】CagAはピロリ菌から粘液内に分泌される',
          answerImg: [],
          answer: '誤り',
          commentary: '',
        },
        {
          detailInfo: '5/01午後',
          questionImg: [],
          questionSentence:
            '【正誤問題】血小板減少性紫斑病はピロリ菌除菌より改善する',
          answerImg: [],
          answer: '正しい',
          commentary: '',
        },
        // {
        //   detailInfo: '5/01午後',
        //   questionImg: [],
        //   questionSentence: '【正誤問題】',
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },

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
        {
          detailInfo: '5/01反転講義',
          questionImg: [],
          questionSentence: 'EBVに関連するがんを述べよ',
          answerImg: [cancerAboutEBV],
          answer: '鼻咽頭癌・Burkittリンパ腫など',
          commentary:
            'EBV:ヘルペスウイルスのひとつ。上皮細胞に感染し、上咽頭がん、平滑筋肉腫、唾液腺がん、胃がんに見られる。リンパ球などにも感染し、Tリンパ腫、NKリンパ腫、白血病、慢性活動性EBV感染症',
        },
        {
          detailInfo: '5/01反転講義',
          questionImg: [],
          questionSentence: 'ヒト発癌に関連するウイルスを述べよ',
          answerImg: [cancerFromVirus],
          answer:
            'EBV:Epstein-Barr virus、HPV:Human Papillomavirus virus、B型肝炎ウイルス、C型肝炎ウイルス、ヒトTリンパ好性ウイルスⅠ型',
          commentary:
            'EBV、HPV、B型肝炎ウイルスはDNAウイルス。ヒトTリンパ好性ウイルスⅠ型HTLV-1はレトロウイルス。',
        },
        {
          detailInfo: '5/01反転講義',
          questionImg: [],
          questionSentence: 'ピロリ菌の世界的分布の特徴は？',
          answerImg: [wherePylori],
          answer:
            '日本・韓国・中国東側（→東アジア）、南米（モンゴロイド系や日本移民が家系内で持ち続けている）',
          commentary: '欧米では少ない。',
        },
        {
          detailInfo: '5/01反転講義',
          questionImg: [],
          questionSentence: 'ピロリ菌感染の特徴は？',
          answerImg: [pyroliInfectionFeature],
          answer:
            'ピロリ菌 + 発がん性物質が両方組み合わされないと胃がんにならない。',
          commentary:
            'ピロリ菌が感染する生物は非常に限られている。ピロリ菌は発がんプロモーターの役割を担っていて、発がん性物質の影響を強めている。2歳までにピロリ菌が侵入するとピロリ菌を自力で排除できなくなる（持続感染）。グラフでは1986年 → 1998年で12年分平行移動した = 一度陽性になったら戻らない。ピロリ菌は弱いので感染経路が限られている→家系で感染する？',
        },
        {
          detailInfo: '5/01反転講義',
          questionImg: [],
          questionSentence: 'ピロリ菌による粘膜障害機構を述べよ。',
          answerImg: [pyroliDamageMucous],
          answer:
            'ピロリ菌は毒素を粘液細胞に打ち込み空洞を作ってしまう。この毒素は好中球遊走因子を誘導したり増殖シグナルを誘導したりする。また、ピロリ菌がウレアーゼによって産生するアンモニアによって直接障害も起こす（アンモニアは発がん物質でもある）。アンモニア + 次亜塩素酸でモノクロラミンを産生したりもする。',
          commentary:
            '慢性的な炎症が胃がんを招く。遊走白血球は活性酸素を産生する。',
        },
        {
          detailInfo: '5/01反転講義',
          questionImg: [],
          questionSentence: 'ピロリ菌に関連する疾患を挙げよ。',
          answerImg: [pyroliMakesDisease],
          answer:
            '胃潰瘍・慢性胃炎・十二指腸潰瘍　→胃癌・MALTリンパ腫　慢性蕁麻疹・自己免疫疾患（血小板減少性紫斑病・関節リウマチ・シェーグレン症候群）・消化性潰瘍（胆道性疾患・膵炎）・機能性消化不良（胃もたれ・胸やけ）・心筋梗塞',
          commentary:
            'ピロリ菌は十二指腸へも移動する。反復性胃潰瘍はピロリ菌を除菌することでしか完治しない。→現在ではほぼ完治する。MALTリンパ腫はほとんどピロリ菌が原因で、悪性リンパ腫の特徴を持っているのに、ピロリ菌を除菌すると自然治癒する。胃下垂はピロリ菌が原因。特に若い人でピロリ菌を除菌すると胃酸分泌が亢進されて逆に胸焼けすることがある。心筋梗塞の壊死細胞からピロリ菌の遺伝子が検出された。血小板減少性紫斑病もピロリ菌を除菌すれば治ることもある。シェーグレン症候群の原因はピロリ菌のウレアーゼではないかと提起されている。ピロリ菌は早いうちに除菌したほうがリスクは低い。',
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
