// パーツのサイズを指定
export class SIZES_PX {
  static readonly BALL = 24
  static readonly BALL_SPC = 2
  static readonly BALL_DISP = this.BALL - this.BALL_SPC * 2
  static readonly WALL = 7
  static readonly COURT_WIDTH = 340
  static readonly COURT_HIGHT = 270
  static readonly RACKET_WIDTH = 100
  static readonly RACKET_MOVE = 25
  static readonly BUTTON = 70
  static readonly RACKET_MV_WIDTH = this.COURT_WIDTH - this.RACKET_WIDTH
  static readonly BALL_MV_WIDTH =
    this.COURT_WIDTH - this.BALL + this.BALL_SPC * 2 - 1
  static readonly BALL_MV_HEIGHT =
    this.COURT_HIGHT - this.BALL + this.BALL_SPC * 3 - 1
}

// 色を指定
export class COLORS {
  static readonly BALL = '#8fce48'
  static readonly RACKET = '#40608a'
  static readonly TITLE_BACK = '#40608a'
  static readonly TITLE_TEXT = '#CCCCCC'
  static readonly WALL = '#6b4b21'
  static readonly FLOOR = '#f5eed9'
}

// ボール移動のタイマーの時間（ミリ秒単位）
export class OTHERS {
  static readonly INTERVAL = 15
}
