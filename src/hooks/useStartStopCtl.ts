// スタート・ストップのコントロール
import { useCallback, useState } from 'react'
import { COLORS } from './../constants'

export const useStartStopCtl = () => {
  const [ballColor, setBallColor] = useState(COLORS.BALL)
  const [startFlag, setStartFlag] = useState<boolean>(false)

  const stStartFlag = useCallback(
    (bl: boolean) => {
      if (bl === false) {
        setBallColor('black')
      } else {
        setBallColor(COLORS.BALL)
      }
      setStartFlag(bl)
    },
    [setBallColor, setStartFlag]
  )

  return {
    ballColor,
    startFlag,
    stStartFlag,
  }
}
