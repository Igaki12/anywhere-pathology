import { useState } from 'react'

export const useTechnicalTerm = () => {
  const [technicalTerm, setTechnicalTerm] = useState([
    // term[0]が代表名として大きく表示される。
    {
      term: ['概日リズム', 'circadian rhythm', 'フリーランリズム'],
      explanation:
        '周期が24時間の内因性リズム。ヒトの場合は24.48hr。環境因子（主に青色の光）に同調させて昼夜変化に一致させる。ヒトの場合は朝6時前後に約3～6時間の光照射(5000ルクス～10000ルクス)を受けることで、実時間と一致するようになる。※食事により末梢時計（例えば膵臓）は同調されるが、視交叉上核は同調されない。',
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
