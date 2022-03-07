import { VFC, memo } from 'react'
import styled from 'styled-components'

type Props = {
  onClickBtn: () => void
  children: React.ReactNode
  sWidth: string
  sMargin: string
  sBgColor: string
}

export const Bbutton: VFC<Props> = memo((props) => {
  const { onClickBtn, children, sWidth, sMargin, sBgColor } = props
  const sBbuttonlStyle = {
    width: sWidth,
    margin: sMargin,
    background: sBgColor,
  }

  return (
    <SBbutton style={sBbuttonlStyle} onClick={onClickBtn}>
      {children}
    </SBbutton>
  )
})

// export default memo(Bbutton)

const SBbutton = styled.button`
  font-family: sans-serif;
  font-weight: bold;
  height: 22px;
  padding-top: 0px;
  border: none;
  box-shadow: 2px 2px 2px 0px rgba(255, 255, 255, 0.75) inset,
    -2px -2px 2px 0px rgba(0, 0, 0, 0.3) inset;
`
