import { useState } from 'react'

// import from './img/answer/.png'

export const useQuestionList = () => {
  const appName = 'anywhere-pathology'
  const jpName = '病理学'
  const [questionList, setQuestionList] = useState([
    // ここに問題のリストを記述(選択式の場合は[0]に正解択をいれた配列をつくる)
    {
      groupTag: '2021本試',
      groupContents: [
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '活動電位の発生について、脱分極してから静止電位に戻るまでの過程を説明しなさい。',
          answerImg: [],
          answer:
            '脱分極を誘導した電位依存性Na⁺チャネルがすぐに不活化され、電位依存性（遅延整流性）K⁺チャネルが開き、再分極し静止電位付近に戻る。',
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
