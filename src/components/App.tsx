// メインルーチン

import { VFC, useEffect } from 'react'
import styled from 'styled-components'
import { SIZES_PX, COLORS, OTHERS } from './../constants'
import { TitleAria } from './unique/TitleAria'
import { CourtAria } from './unique/CourtAria'
import { RacketAria } from './unique/RacketAria'
import { PanelAria } from './unique/PanelAria'
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
      <TitleAria>SQUASH</TitleAria>
      <CourtAria ballPos={ballPos} ballColor={ballColor} />
      <RacketAria raketPosX={raketPosX} />
      <PanelAria
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
  border: ${SIZES_PX.WALL_THICKNESS}px solid ${COLORS.WALL};
  background-color: ${COLORS.WALL};
`
