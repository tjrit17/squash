import { VFC, memo } from 'react'
import styled from 'styled-components'
import { SIZES_PX, COLORS } from '../../constants'

type Props = {
  raketPosX: number
}

export const RacketAria: VFC<Props> = memo((props) => {
  const { raketPosX } = props
  const SRacketBarStyle = {
    transform: `translateX(${raketPosX}px) `,
  }
  return (
    <SRacketAria>
      <SRacketBar style={SRacketBarStyle} />
    </SRacketAria>
  )
})

const SRacketAria = styled.div`
  width: 100%;
  height: 20px;
  margin: 0px auto 0px auto;
  padding-top: 3px;
  background-color: ${COLORS.FLOOR};
`
const SRacketBar = styled.div`
  width: ${SIZES_PX.RACKET_WIDTH}px;
  height: 10px;
  background-color: ${COLORS.RACKET};
  box-shadow: 1px 1px 1px 0px rgba(255, 255, 255, 0.75) inset,
    -1px -1px 1px 0px rgba(0, 0, 0, 0.3) inset;
`
