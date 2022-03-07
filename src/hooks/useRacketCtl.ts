// ラケットの位置のコントロール
import { useCallback, useState } from 'react'
import { SIZES_PX } from './../constants'

export const useRacketCtl = () => {
  const [raketPosX, setRaketPosX] = useState<number>(
    SIZES_PX.RACKET_MV_WIDTH / 2
  )
  const stRaketPosX = useCallback(
    (n: number) => {
      setRaketPosX(n)
    },
    [setRaketPosX]
  )

  return {
    raketPosX,
    stRaketPosX,
  }
}
