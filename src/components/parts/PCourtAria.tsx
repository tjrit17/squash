// 四方を壁に囲まれたコートとその中で動くボールを表示する

import React, { VFC } from 'react'
import styled from 'styled-components'
import { SIZES_PX, COLORS } from '../../constants'
import { Pball } from './CourtAria/Pball'

type Props = {
  ballPos: { x: number; y: number }
  ballColor: string
}

export const PCourtAria: VFC<Props> = (props) => {
  const { ballPos, ballColor } = props

  return (
    <SCourtAria>
      <Pball ballPos={ballPos} ballColor={ballColor}></Pball>
    </SCourtAria>
  )
}

const SCourtAria = styled.div`
  margin: 0px auto 0px auto;
  width: ${SIZES_PX.COURT_WIDTH}px;
  height: ${SIZES_PX.COURT_HIGHT}px;
  border: ${SIZES_PX.WALL}px solid ${COLORS.WALL};
  background-color: ${COLORS.FLOOR};
  border-bottom: none;
  display: flex;
`
