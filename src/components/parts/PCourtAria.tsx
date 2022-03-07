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
    <SPcourtAria>
      <Pball ballPos={ballPos} ballColor={ballColor} />
    </SPcourtAria>
  )
}

const SPcourtAria = styled.div`
  width: 100%;
  height: ${SIZES_PX.COURT_HIGHT}px;
  margin: 0px auto 0px auto;
  background-color: ${COLORS.FLOOR};
  display: flex;
`
