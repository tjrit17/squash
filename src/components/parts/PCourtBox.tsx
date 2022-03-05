// 四方を壁に囲まれたコートとその中で動くボールを表示する

import React, { VFC } from 'react'
import styled from 'styled-components'
import { SIZES_PX, COLORS } from '../../constants'
import { Pball } from './CourtBox/Pball'

type Props = {
  ballPos: { x: number; y: number }
  ballColor: string
}

export const PCourtBox: VFC<Props> = (props) => {
  const { ballPos, ballColor } = props
  return (
    <SCourtBox>
      <Pball ballPos={ballPos} ballColor={ballColor}></Pball>
    </SCourtBox>
  )
}

const SCourtBox = styled.div`
  margin: 0px auto 0px auto;
  width: ${SIZES_PX.COURT_WIDTH}px;
  height: ${SIZES_PX.COURT_HIGHT}px;

  border: ${SIZES_PX.WALL}px solid ${COLORS.WALL};
  background-color: ${COLORS.FLOOR};
  border-bottom: none;
  display: flex;
`
