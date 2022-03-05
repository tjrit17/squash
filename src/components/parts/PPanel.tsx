// 操作パネルと操作した時の処理を表示する

import { VFC } from 'react'
import styled from 'styled-components'
import { SIZES_PX, COLORS } from '../../constants'
import { Bbutton } from '../basic/Bbutton'

type Props = {
  raketPosX: number
  stRaketPosX: (n: number) => void
  startFlag: boolean
  stStartFlag: (bl: boolean) => void
}

export const PPanel: VFC<Props> = (props) => {
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

  const BbuttonStyle = {
    sWidth: SIZES_PX.BUTTON + 'px',
    sMargin: '5px 10px 10px 5px',
    sBgColor: '#ececec',
  }

  return (
    <SwPanel>
      <Bbutton onClickBtn={onClickLeftBtn} {...BbuttonStyle}>{`<`}</Bbutton>
      <Bbutton onClickBtn={onClickRightBtn} {...BbuttonStyle}>{`>`}</Bbutton>
      <Bbutton onClickBtn={onClickStart} {...BbuttonStyle}>
        START
      </Bbutton>
      <Bbutton onClickBtn={onClickStop} {...BbuttonStyle}>
        STOP
      </Bbutton>
    </SwPanel>
  )
}

const SwPanel = styled.div`
  margin: 0px auto 0px auto;
  width: ${SIZES_PX.COURT_WIDTH}px;
  background: ${COLORS.WALL};
  border: ${SIZES_PX.WALL}px solid ${COLORS.WALL};
  height: 30px;
`
