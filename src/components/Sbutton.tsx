import styled from 'styled-components'
import { VFC } from 'react'

type Props = {
  onClickBtn: () => void
  children: React.ReactNode
}

export const Sbutton: VFC<Props> = (props) => {
  const { onClickBtn, children } = props

  return <SSbutton onClick={onClickBtn}>{children}</SSbutton>
}

const SSbutton = styled.button`
  font-family: sans-serif;
  font-weight: bold;
  width: 80px;
  height: 22px;
  margin: 5px 10px 10px 5px;
  padding-top: 0px;
  border: none;
  box-shadow: 2px 2px 2px 0px rgba(255, 255, 255, 0.75) inset,
    -2px -2px 2px 0px rgba(0, 0, 0, 0.3) inset;
`
