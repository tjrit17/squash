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
    transform: `translateX(${ballPos.x}px) translateY(${ballPos.y}px)`,
    background: ballColor,
  }

  return <SPball style={PBallStyle} />
}

const SPball = styled.div`
  width: ${SIZES_PX.BALL_DISP}px;
  height: ${SIZES_PX.BALL_DISP}px;
  background-clip: padding-box;
  border-radius: ${SIZES_PX.BALL_OUTLINE / 2 + 3}px;
  border: ${SIZES_PX.BALL_SPC}px solid ${COLORS.FLOOR};
  margin: 0px auto auto 0px;
`
