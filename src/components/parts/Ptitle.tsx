// タイトルバーを表示する

import { VFC } from 'react'
import styled from 'styled-components'
import { SIZES_PX, COLORS } from '../../constants'

type Props = {
  children: React.ReactNode
}

export const Ptitle: VFC<Props> = (props) => {
  const { children } = props
  return <SPtitle>{children}</SPtitle>
}

const SPtitle = styled.h1`
  margin: 0px auto 0px auto;
  width: ${SIZES_PX.COURT_WIDTH}px;
  text-align: center;

  color: ${COLORS.TITLE_TEXT};
  text-shadow: 0.04em 0.02em 0 #b0bec5, 0.08em 0.05em 0 rgba(0, 0, 0, 0.6);
  background-color: ${COLORS.TITLE_BACK};
  border: ${SIZES_PX.WALL}px solid ${COLORS.WALL};
  border-bottom: none;
  box-shadow: 2px 2px 2px 0px rgba(255, 255, 255, 0.25) inset,
    -2px -2px 2px 0px rgba(0, 0, 0, 0.3) inset;
`
