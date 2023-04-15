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
            '【〇✖問題】仮性肥大では実質細胞数は増加するが、その容積は逆に減少している。',
          answerImg: [],
          answer: '✖...仮性肥大では間質の細胞数が増加し、容積は増加する。',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【〇✖問題】前立腺肥大では実質細胞は過形成だが間質細胞は肥大を示す。',
          answerImg: [prostaticHyperplasia],
          answer: '✖...間質細胞も過形成される',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '【〇✖問題】高血圧では左心室に労働性肥大を生じる',
          answerImg: [],
          answer: '〇',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【〇✖問題】萎縮とは正常の発達段階にあった組織や臓器の細胞数の減少である',
          answerImg: [],
          answer:
            '✖…萎縮には数的委縮と単純萎縮があり、この文章は数的委縮の説明である。',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '【〇✖問題】萎縮には機能障害は関連しない',
          answerImg: [],
          answer: '✖...機能障害は関連する',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【〇✖問題】低形成とは組織や臓器が正常の大きさまで達しないものである',
          answerImg: [],
          answer: '〇',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【〇✖問題】変性とは正常代謝物の異常蓄積や異常代謝物の蓄積が、組織・細胞内に生じることである',
          answerImg: [],
          answer: '〇',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【〇✖問題】グルコースはアルドラーゼによりソルビトールを生成し細胞浮腫の原因となる',
          answerImg: [],
          answer: '✖...アルドラーゼではなくアルドスリダクターゼ',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【〇✖問題】ポリオール代謝亢進により還元型グルタミンが減少し酸化ストレスが増加する',
          answerImg: [],
          answer: '✖...還元型グルタミンではなく還元型グルタチオン',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【〇✖問題】ポリオール代謝ではフルクトースから3-デオキシグルコソンが生成されAGE形成が著しい',
          answerImg: [],
          answer: '✖…ポリオール代謝ではなくフルクトース代謝',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '【〇✖問題】エンドセリンやNOは血管拡張因子である',
          answerImg: [],
          answer: '✖…エンドセリンは血管収縮因子',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '【〇✖問題】糖尿病は続発性拡張型心筋症の原因となる',
          answerImg: [],
          answer: '〇',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【〇✖問題】トリグリセリドはグリセロールと2個の脂肪酸からなる',
          answerImg: [],
          answer: '✖...脂肪酸は3つ',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【〇✖問題】血漿リポ蛋白の主成分はカイロミクロン、VLDL、LDL、HDLである',
          answerImg: [],
          answer: '〇',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【〇✖問題】アポ蛋白は脂質と結合してリポ蛋白を形成し脂質を可溶化する',
          answerImg: [],
          answer: '〇',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【〇✖問題】HDLはコレステロール密度が高く粥状動脈硬化を生じやすい',
          answerImg: [],
          answer: '✖…HDLではなくLDL',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【〇✖問題】糖が過剰な状況ではacetyl CoAからトリグリセリドが合成され脂肪細胞に貯蔵される',
          answerImg: [],
          answer: '〇',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【〇✖問題】巨大化した脂肪細胞ではアディポネクチンが減少しインスリン耐性が低下する　',
          answerImg: [],
          answer: '✖…インスリン耐性は増加する',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【〇✖問題】高糖質により増加する酸化ストレスはミトコンドリアの抑制により減少する',
          answerImg: [],
          answer: '〇',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【〇✖問題】過剰な遊離脂肪酸は膵β細胞のインスリン分泌を促進し肝での糖新生を亢進する',
          answerImg: [],
          answer: '✖…インスリン分泌を抑制する',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【〇✖問題】肝重量の70%以上のトリグリセライドの蓄積により脂肪肝が生じる',
          answerImg: [fattyLiver],
          answer: '✖…70%ではなく7%',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【〇✖問題】肝細胞障害による脂肪肝では中心肝静脈周囲の肝細胞に脂肪滴を生じやすい',
          answerImg: [fattyLiver],
          answer: '〇',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【〇✖問題】脂肪過剰摂取では小葉辺縁性の脂肪肝を生じることがある',
          answerImg: [],
          answer: '〇',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '【〇✖問題】脂肪肝では肝間質の脂肪化生が見られる',
          answerImg: [fattyLiver],
          answer: '✖…肝間質ではなく肝細胞で、脂肪化生ではなく脂肪変性',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【〇✖問題】NASHでは小滴脂肪肝、水滴細胞出現、線維化、炎症細胞浸潤が見られる',
          answerImg: [],
          answer: '✖…小滴脂肪肝ではなく大滴脂肪肝',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【〇✖問題】単純性脂肪肝の10%がNASHによりその2%以下が肝硬変に進展すると言われる',
          answerImg: [],
          answer: '〇',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【〇✖問題】高トリグリセリド血症ではlarge dense LDLが生成しやすい',
          answerImg: [],
          answer: '✖...small dense LDLやVLDL',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【〇✖問題】脂肪化生は間葉系幹細胞の脂肪細胞への分化により生ずる場合がある',
          answerImg: [],
          answer: '✖…脂肪化生という言葉は存在しない',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '【〇✖問題】心筋の脂肪化は致死的不整脈の原因になる',
          answerImg: [],
          answer: '〇',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '【〇✖問題】脳内には脂肪細胞は存在しない',
          answerImg: [],
          answer: '〇',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【〇✖問題】終末糖化産物は蛋白等にメーラード反応や酸化ストレスなどで非酵素的に糖の修飾が生じたものである',
          answerImg: [],
          answer: '〇',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【〇✖問題】終末糖化産物は粥状動脈硬化、脂肪肝、糖尿病合併症、アルツアイマー病、発癌に関与する',
          answerImg: [],
          answer: '〇',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【〇✖問題】終末糖化産物は受容体であるRAGEを介し細胞増殖、細胞運動、血管新生を促進する',
          answerImg: [],
          answer: '〇',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【〇✖問題】終末糖化産物はDNA付加体の増加をもたらす',
          answerImg: [],
          answer: '〇',
          commentary: '',
        },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence: '【〇✖問題】',
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence: '【〇✖問題】',
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence: '【〇✖問題】',
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
      groupTag: '正誤問題集１',
      groupContents: [
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '【〇✖問題】',
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
          questionSentence: '【〇✖問題】',
          answerImg: [],
          answer: '',
          commentary: '',
        },
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
