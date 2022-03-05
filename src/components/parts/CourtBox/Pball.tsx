// ボールを表示する

import { VFC } from 'react'
import styled from 'styled-components'
import { SIZES_PX, COLORS } from '../../../constants'

type Props = {
  ballPos: { x: number; y: number }
  ballColor: string
}

export const Pball: VFC<Props> = (props) => {
  const { ballPos, ballColor } = props

  const PBallStyle = {
    margin: ballPos.y + 'px auto 10px ' + ballPos.x + 'px',
    background: ballColor,
  }

  return <SPball style={PBallStyle}></SPball>
}

const SPball = styled.div`
  width: ${SIZES_PX.BALL}px;
  height: ${SIZES_PX.BALL}px;
  border-radius: ${SIZES_PX.BALL / 2 + 3}px;
  border: 2px solid ${COLORS.FLOOR};
  font-weight: bold;
  font-size: ${SIZES_PX.BALL}px;
  color: #f5eed9;
`
