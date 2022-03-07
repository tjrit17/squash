// メインルーチン

import { VFC, useEffect } from 'react'
import styled from 'styled-components'
import { SIZES_PX, COLORS, OTHERS } from './../constants'
import { PtitleAria } from './parts/PtitleAria'
import { PCourtAria } from './parts/PCourtAria'
import { PracketAria } from './parts/PracketAria'
import { PpanelAria } from './parts/PpanelAria'
import { useBallCtl } from './../hooks/useBallCtl'
import { useStartStopCtl } from './../hooks/useStartStopCtl'
import { useRacketCtl } from '../hooks/useRacketCtl'

export const App: VFC = () => {
  const { raketPosX, stRaketPosX } = useRacketCtl()
  const { ballColor, startFlag, stStartFlag } = useStartStopCtl()
  const { ballPos, calcMvBallPos } = useBallCtl()

  useEffect(() => {
    const interval = setInterval(() => {
      if (startFlag) {
        calcMvBallPos(raketPosX, stStartFlag)
      }
    }, OTHERS.INTERVAL)
    return () => clearInterval(interval)
  })

  return (
    <SMainContainer>
      <PtitleAria>SQUASH</PtitleAria>
      <PCourtAria ballPos={ballPos} ballColor={ballColor} />
      <PracketAria raketPosX={raketPosX} />
      <PpanelAria
        raketPosX={raketPosX}
        stRaketPosX={stRaketPosX}
        startFlag={startFlag}
        stStartFlag={stStartFlag}
      />
    </SMainContainer>
  )
}

const SMainContainer = styled.div`
  margin: 0px;
  padding: 0px;
  width: ${SIZES_PX.COURT_WIDTH}px;
  border: ${SIZES_PX.WALL}px solid ${COLORS.WALL};
  background-color: ${COLORS.WALL};
`
