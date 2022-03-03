import { VFC } from 'react'
import styled from 'styled-components'
import { SIZES_PX, COLORS } from './../constants'

type Props = {
  raketPosX: number
}

export const RacketAria: VFC<Props> = (props) => {
  const { raketPosX } = props

  const racketBarStyle = {
    margin: 'auto auto 10px ' + raketPosX + 'px',
  }
  return (
    <RRacketAria>
      <RacketBar style={racketBarStyle}></RacketBar>
    </RRacketAria>
  )
}
const RRacketAria = styled.div`
  width: ${SIZES_PX.COURT_WIDTH}px;
  height: 20px;
  margin: 0px auto 0px auto;
  border-left: ${SIZES_PX.WALL}px solid ${COLORS.COURT};
  border-right: ${SIZES_PX.WALL}px solid ${COLORS.COURT};
`
const RacketBar = styled.div`
  width: ${SIZES_PX.RACKET_WIDTH}px;
  height: 10px;
  background-color: ${COLORS.RACKET};
  margin-top: auto;
  margin-right: auto;
  margin-bottom: auto;
  border: none;
  box-shadow: 1px 1px 1px 0px rgba(255, 255, 255, 0.75) inset,
    -1px -1px 1px 0px rgba(0, 0, 0, 0.3) inset;
`
