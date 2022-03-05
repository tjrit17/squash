// ラケットを表示する

import { VFC } from 'react'
import styled from 'styled-components'
import { SIZES_PX, COLORS } from '../../constants'

type Props = {
  raketPosX: number
}

export const PracketAria: VFC<Props> = (props) => {
  const { raketPosX } = props

  const racketBarStyle = {
    marginLeft: raketPosX + 'px',
  }

  return (
    <SPracketAria>
      <RacketBar style={racketBarStyle}></RacketBar>
    </SPracketAria>
  )
}
const SPracketAria = styled.div`
  margin: 0px auto 0px auto;
  width: ${SIZES_PX.COURT_WIDTH}px;
  height: 20px;
  padding-top: 3px;
  border-left: ${SIZES_PX.WALL}px solid ${COLORS.WALL};
  border-right: ${SIZES_PX.WALL}px solid ${COLORS.WALL};
  background-color: ${COLORS.FLOOR};
`
const RacketBar = styled.div`
  width: ${SIZES_PX.RACKET_WIDTH}px;
  height: 10px;
  background-color: ${COLORS.RACKET};
  box-shadow: 1px 1px 1px 0px rgba(255, 255, 255, 0.75) inset,
    -1px -1px 1px 0px rgba(0, 0, 0, 0.3) inset;
`
