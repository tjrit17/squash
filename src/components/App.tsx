import { VFC, useState } from 'react'
import styled from 'styled-components'

export const App: VFC = () => {
  const [raketPosX, setRaketPosX] = useState<number>(325)
  const [ballPos, setBallPos] = useState({ x: 0, y: 0 })
  const [startFlg, setStartFlg] = useState<boolean>(false)

  const onClickLeftBtn = () => {
    setRaketPosX((c) => (c - 25 < 0 ? 0 : c - 25))
    console.log(raketPosX)
  }
  const onClickRightBtn = () => {
    setRaketPosX((c) => (c + 25 > 650 ? 650 : c + 25))
    console.log(raketPosX)
  }
  const onClickStart = () => {
    setStartFlg(true)
  }
  const onClickStop = () => {
    setStartFlg(false)
  }

  return (
    <div>
      <Sh1>SQUASH</Sh1>
      <CourtBox>
        <br />
        <RacketBar
          style={{ margin: 'auto auto 10px ' + raketPosX + 'px' }}
        ></RacketBar>
        <Sball></Sball>
      </CourtBox>
      <SwPanel>
        <Sbutton onClick={onClickLeftBtn}>&lt;</Sbutton>
        <Sbutton onClick={onClickRightBtn}>&gt;</Sbutton>
        <Sbutton onClick={onClickStart}>START</Sbutton>
        <Sbutton onClick={onClickStop}>STOP</Sbutton>
      </SwPanel>
    </div>
  )
}
const Sball = styled.div`
  border: 2px solid black;
`
const RacketBar = styled.div`
  height: 10px;
  width: 50px;
  background-color: blue;
  margin-top: auto;
  margin-right: auto;
  margin-bottom: auto;
  border: none;
`

const Sbutton = styled.button`
  width: 80px;
  height: 20px;
  margin: 5px 10px 10px 5px;
`

const CourtBox = styled.div`
  margin: 0px auto 0px auto;
  border: 5px solid gray;
  width: 700px;
  height: 500px;
  display: flex;
`

const Sh1 = styled.h1`
  text-align: center;
  background-color: #7f806a;
  width: 700px;
  border: 5px solid #7f806a;
  margin: 0px auto 0px auto;
  margin-bottom: 0px;
`

const SwPanel = styled.div`
  margin: 0px auto 0px auto;
  border: 5px solid gray;
  width: 700px;
  height: 100px;
`
