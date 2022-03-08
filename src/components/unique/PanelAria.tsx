import { VFC, useCallback, memo } from 'react'
import styled from 'styled-components'
import { SIZES_PX, COLORS } from '../../constants'
import { BasicButton } from '../common/BasicButton'

type Props = {
  raketPosX: number
  stRaketPosX: (n: number) => void
  startFlag: boolean
  stStartFlag: (bl: boolean) => void
}

export const PanelAria: VFC<Props> = memo((props) => {
  const { raketPosX, stRaketPosX, startFlag, stStartFlag } = props

  const onClickLeftBtn = useCallback(() => {
    if (startFlag) {
      stRaketPosX(
        raketPosX - SIZES_PX.RACKET_MOVE < 0
          ? 0
          : raketPosX - SIZES_PX.RACKET_MOVE
      )
    }
  }, [raketPosX, stRaketPosX, startFlag])

  const onClickRightBtn = useCallback(() => {
    if (startFlag) {
      stRaketPosX(
        raketPosX + SIZES_PX.RACKET_MOVE > SIZES_PX.RACKET_MV_WIDTH
          ? SIZES_PX.RACKET_MV_WIDTH
          : raketPosX + SIZES_PX.RACKET_MOVE
      )
    }
  }, [raketPosX, stRaketPosX, startFlag])

  const onClickStart = useCallback(() => {
    stStartFlag(true)
  }, [stStartFlag])

  const onClickStop = useCallback(() => {
    stStartFlag(false)
  }, [stStartFlag])

  const BasicButtonStyle = {
    sWidth: `${SIZES_PX.BUTTON_WIDTH}px`,
    sMargin: `10px 10px 10px 5px`,
    sBgColor: `#ececec`,
  }

  return (
    <SPanelArea>
      <BasicButton onClickBtn={onClickLeftBtn} {...BasicButtonStyle}>
        {`<`}
      </BasicButton>
      <BasicButton onClickBtn={onClickRightBtn} {...BasicButtonStyle}>
        {`>`}
      </BasicButton>
      <BasicButton onClickBtn={onClickStart} {...BasicButtonStyle}>
        START
      </BasicButton>
      <BasicButton onClickBtn={onClickStop} {...BasicButtonStyle}>
        STOP
      </BasicButton>
    </SPanelArea>
  )
})

const SPanelArea = styled.div`
  width: 100%;
  height: 35px;
  margin: 0px auto 0px auto;
  background: ${COLORS.WALL};
`
