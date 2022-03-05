// メインルーチン

import { VFC, useState, useEffect } from 'react'
import { SIZES_PX, COLORS, OTHERS } from './../constants'
import { Ptitle } from './parts/Ptitle'
import { PCourtBox } from './parts/PCourtBox'
import { PracketAria } from './parts/PracketAria'
import { PPanel } from './parts/PPanel'
import { useBallCtl } from './../hooks/useBallCtl'

export const App: VFC = () => {
  // スタート・ストップフラグの定義
  const [startFlag, setStartFlag] = useState<boolean>(false)
  const stStartFlag = (bl: boolean) => {
    if (bl === false) {
      setBallColor('black')
    } else {
      setBallColor(COLORS.BALL)
    }
    setStartFlag(bl)
  }

  // ラケットの位置の定義
  const [raketPosX, setRaketPosX] = useState<number>(
    SIZES_PX.RACKET_MV_WIDTH / 2
  )
  const stRaketPosX = (n: number) => {
    setRaketPosX(n)
  }

  const { ballPos, calcMvBallPos } = useBallCtl()
  const [ballColor, setBallColor] = useState(COLORS.BALL)

  // 一定間隔でタイマー処理を行う
  useEffect(() => {
    const interval = setInterval(() => {
      if (startFlag) {
        calcMvBallPos(raketPosX, stStartFlag)
      }
    }, OTHERS.INTERVAL)
    return () => clearInterval(interval)
  })

  // 全体表示
  return (
    <>
      <Ptitle>SQUASH</Ptitle>
      <PCourtBox ballPos={ballPos} ballColor={ballColor}></PCourtBox>
      <PracketAria raketPosX={raketPosX}></PracketAria>
      <PPanel
        raketPosX={raketPosX}
        stRaketPosX={stRaketPosX}
        startFlag={startFlag}
        stStartFlag={stStartFlag}
      ></PPanel>
    </>
  )
}
