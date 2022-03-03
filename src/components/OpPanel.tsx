import styled from 'styled-components'
import { VFC } from 'react'
import { SIZES_PX, COLORS } from '../constants'
import { Sbutton } from './Sbutton'

type Props = {
  raketPosX: number
  stRaketPosX: (n: number) => void
  startFlag: boolean
  stStartFlag: (bl: boolean) => void
}

export const OpPanel: VFC<Props> = (props) => {
  const { raketPosX, stRaketPosX, startFlag, stStartFlag } = props

  const onClickLeftBtn = () => {
    if (startFlag) {
      stRaketPosX(
        raketPosX - SIZES_PX.RACKET_MOVE < 0
          ? 0
          : raketPosX - SIZES_PX.RACKET_MOVE
      )
    }
  }
  const onClickRightBtn = () => {
    if (startFlag) {
      stRaketPosX(
        raketPosX + SIZES_PX.RACKET_MOVE > SIZES_PX.RACKET_MV_WIDTH
          ? SIZES_PX.RACKET_MV_WIDTH
          : raketPosX + SIZES_PX.RACKET_MOVE
      )
    }
  }
  const onClickStart = () => {
    stStartFlag(true)
  }
  const onClickStop = () => {
    stStartFlag(false)
  }
  return (
    <SwPanel>
      <Sbutton onClickBtn={onClickLeftBtn}>{`<`}</Sbutton>
      <Sbutton onClickBtn={onClickRightBtn}>{`>`}</Sbutton>
      <Sbutton onClickBtn={onClickStart}>START</Sbutton>
      <Sbutton onClickBtn={onClickStop}>STOP</Sbutton>
    </SwPanel>
  )
}

const SwPanel = styled.div`
  color: #168108;
  background: ${COLORS.COURT};
  margin: 0px auto 0px auto;
  border: ${SIZES_PX.WALL}px solid ${COLORS.COURT};
  width: ${SIZES_PX.COURT_WIDTH}px;
  height: 30px;
`
