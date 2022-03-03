import { VFC, useState, useEffect } from 'react'
import styled from 'styled-components'
import { OpPanel } from './OpPanel'
import { SIZES_PX, COLORS, OTHERS } from './../constants'
import { useBallCtl } from './../hooks/useBallCtl'
import { RacketAria } from './RacketAria'
import { Sball } from './Sball'

export const App: VFC = () => {
  const [startFlag, setStartFlag] = useState<boolean>(false)
  const [raketPosX, setRaketPosX] = useState<number>(
    SIZES_PX.RACKET_MV_WIDTH / 2
  )
  const { ballPos, calcMvBallPos } = useBallCtl()
  const [ballColor, setBallColor] = useState(COLORS.BALL)

  useEffect(() => {
    const interval = setInterval(() => {
      if (startFlag) {
        calcMvBallPos(raketPosX, stStartFlag)
      }
    }, OTHERS.INTERVAL)
    return () => clearInterval(interval)
  })

  const stStartFlag = (bl: boolean) => {
    if (bl === false) {
      setBallColor('black')
    } else {
      setBallColor(COLORS.BALL)
    }
    setStartFlag(bl)
  }
  const stRaketPosX = (n: number) => {
    setRaketPosX(n)
  }

  return (
    <>
      <Sh1>SQUASH</Sh1>
      <CourtBox>
        <Sball ballPos={ballPos} ballColor={ballColor}>
          ●
        </Sball>
      </CourtBox>
      <RacketAria raketPosX={raketPosX}></RacketAria>
      <OpPanel
        raketPosX={raketPosX}
        stRaketPosX={stRaketPosX}
        startFlag={startFlag}
        stStartFlag={stStartFlag}
      ></OpPanel>
    </>
  )
}

const Sh1 = styled.h1`
  width: ${SIZES_PX.COURT_WIDTH}px;
  text-align: center;
  border-bottom: none;
  margin: 0px auto 0px auto;

  color: ${COLORS.TITLE_TEXT};
  text-shadow: 0.04em 0.02em 0 #b0bec5, 0.08em 0.05em 0 rgba(0, 0, 0, 0.6);

  background-color: ${COLORS.TITLE_BACK};
  border: ${SIZES_PX.WALL}px solid ${COLORS.COURT};
  box-shadow: 2px 2px 2px 0px rgba(255, 255, 255, 0.25) inset,
    -2px -2px 2px 0px rgba(0, 0, 0, 0.3) inset;
`
const CourtBox = styled.div`
  width: ${SIZES_PX.COURT_WIDTH}px;
  height: ${SIZES_PX.COURT_HIGHT}px;
  margin: 0px auto 0px auto;
  border: ${SIZES_PX.WALL}px solid ${COLORS.COURT};
  border-bottom: none;
  display: flex;
`
