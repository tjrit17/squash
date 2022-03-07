// メインルーチン

import { VFC, useState, useEffect, useCallback, useMemo } from 'react'
import { SIZES_PX, OTHERS } from './../constants'
import { PtitleAria } from './parts/PtitleAria'
import { PCourtAria } from './parts/PCourtAria'
import { PracketAria } from './parts/PracketAria'
import { PpanelAria } from './parts/PpanelAria'
import { useBallCtl } from './../hooks/useBallCtl'
import { useStartStopCtl } from './../hooks/useStartStopCtl'

export const App: VFC = () => {
  // ラケットの位置の定義
  const [raketPosX, setRaketPosX] = useState<number>(
    SIZES_PX.RACKET_MV_WIDTH / 2
  )
  const stRaketPosX = useCallback((n: number) => {
    setRaketPosX(n)
  }, [])

  // スタート・ストップをコントロールする
  const { ballColor, startFlag, stStartFlag } = useStartStopCtl()

  // ボール位置をコントロールする
  const { ballPos, calcMvBallPos } = useBallCtl()

  // 一定の時間が経過する毎にボールを動かす
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
      <PtitleAria>SQUASH</PtitleAria>
      <PCourtAria ballPos={ballPos} ballColor={ballColor}></PCourtAria>
      <PracketAria raketPosX={raketPosX}></PracketAria>
      <PpanelAria
        raketPosX={raketPosX}
        stRaketPosX={stRaketPosX}
        startFlag={startFlag}
        stStartFlag={stStartFlag}
      ></PpanelAria>
    </>
  )
}
