import { VFC } from 'react'
import styled from 'styled-components'
import { SIZES_PX } from '../constants'

type Props = {
  ballPos: { x: number; y: number }
  ballColor: string
  children: React.ReactNode
}

export const Sball: VFC<Props> = (props) => {
  const { ballPos, ballColor, children } = props

  const sBallStyle = {
    margin: ballPos.y + 'px auto 10px ' + ballPos.x + 'px',
    color: ballColor,
  }

  return <SSball style={sBallStyle}>{children}</SSball>
}

const SSball = styled.div`
  font-weight: bold;
  font-size: ${SIZES_PX.BALL}px;
  width: ${SIZES_PX.BALL}px;
  height: ${SIZES_PX.BALL}px;
`
