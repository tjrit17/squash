import { VFC } from 'react'
import styled from 'styled-components'
import { SIZES_PX, COLORS } from '../../constants'

type Props = {
  ballPos: { x: number; y: number }
  ballColor: string
}

export const BallElement: VFC<Props> = (props) => {
  const { ballPos, ballColor } = props

  const BallElementStyle = {
    transform: `translateX(${ballPos.x}px) translateY(${ballPos.y}px)`,
    background: ballColor,
  }

  return <SBallElement style={BallElementStyle} />
}

const SBallElement = styled.div`
  width: ${SIZES_PX.BALL_DISP}px;
  height: ${SIZES_PX.BALL_DISP}px;
  background-clip: padding-box;
  border-radius: ${SIZES_PX.BALL_OUTLINE / 2 + 3}px;
  border: ${SIZES_PX.BALL_BORADER}px solid ${COLORS.FLOOR};
  margin: 0px auto auto 0px;
`
