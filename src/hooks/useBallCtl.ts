// ボールがラケットにあたったかの判定と跳ね返りを計算する

import { useCallback, useState } from 'react'
import { SIZES_PX } from './../constants'

export const useBallCtl = () => {
  const [ballPos, setBallPos] = useState({ x: 0, y: 0 })
  const [ballDirection, setBallDirection] = useState({ x: 1, y: 1 })

  const calcMvBallPos = useCallback(
    (raketPosX: number, stStartFlag) => {
      ballPos.x += ballDirection.x
      ballPos.y += ballDirection.y

      if (ballPos.y <= 0) {
        ballDirection.y = ballDirection.y * -1
      } else if (ballPos.y >= SIZES_PX.BALL_MV_HEIGHT) {
        ballDirection.y = ballDirection.y * -1
        if (
          raketPosX > ballPos.x + SIZES_PX.BALL ||
          raketPosX + SIZES_PX.RACKET_WIDTH < ballPos.x
        ) {
          stStartFlag(false)
        }
      }

      if (ballPos.x <= 0 || ballPos.x >= SIZES_PX.BALL_MV_WIDTH) {
        ballDirection.x = ballDirection.x * -1
      }

      setBallPos({ x: ballPos.x, y: ballPos.y })
      setBallDirection({ x: ballDirection.x, y: ballDirection.y })
    },
    [ballPos, ballDirection]
  )
  return {
    ballPos,
    calcMvBallPos,
  }
}
