import { VFC, memo } from 'react'
import styled from 'styled-components'
import { SIZES_PX, COLORS } from '../../constants'

type Props = {
  children: React.ReactNode
}

export const TitleAria: VFC<Props> = memo((props) => {
  const { children } = props

  return <STitleAria>{children}</STitleAria>
})

const STitleAria = styled.h1`
  width: 100%;
  margin: 0px auto 0px auto;
  background-color: ${COLORS.TITLE_BACK};
  border-bottom: ${SIZES_PX.WALL_THICKNESS}px solid ${COLORS.WALL};
  box-shadow: 2px 2px 2px 0px rgba(255, 255, 255, 0.25) inset,
    -2px -2px 2px 0px rgba(0, 0, 0, 0.3) inset;
  text-align: center;
  color: ${COLORS.TITLE_TEXT};
  text-shadow: 0.04em 0.02em 0 #b0bec5, 0.08em 0.05em 0 rgba(0, 0, 0, 0.6);
`
