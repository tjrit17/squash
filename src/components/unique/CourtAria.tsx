// 四方を壁に囲まれたコートとその中で動くボールを表示する
import React, { VFC } from 'react'
import styled from 'styled-components'
import { SIZES_PX, COLORS } from '../../constants'
import { BallElement } from './BallElement'

type Props = {
  ballPos: { x: number; y: number }
  ballColor: string
}

export const CourtAria: VFC<Props> = (props) => {
  const { ballPos, ballColor } = props

  return (
    <SCourtAria>
      <BallElement ballPos={ballPos} ballColor={ballColor} />
    </SCourtAria>
  )
}

const SCourtAria = styled.div`
  width: 100%;
  height: ${SIZES_PX.COURT_HIGHT}px;
  margin: 0px auto 0px auto;
  background-color: ${COLORS.FLOOR};
  display: flex;
`
