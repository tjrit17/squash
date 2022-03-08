// 画面パーツのサイズを指定
export class SIZES_PX {
  static readonly COURT_WIDTH = 340
  static readonly COURT_HIGHT = 270
  static readonly BALL_DISP = 22
  static readonly WALL_THICKNESS = 7
  static readonly RACKET_WIDTH = 100
  static readonly RACKET_MOVE = 25
  static readonly BUTTON_WIDTH = 70
  static readonly BALL_BORADER = 2
  static readonly BALL_OUTLINE = this.BALL_DISP + this.BALL_BORADER * 2
  static readonly RACKET_MV_WIDTH = this.COURT_WIDTH - this.RACKET_WIDTH
  static readonly BALL_MV_WIDTH = this.COURT_WIDTH - this.BALL_OUTLINE
  static readonly BALL_MV_HEIGHT =
    this.COURT_HIGHT - this.BALL_OUTLINE + this.BALL_BORADER * 3 - 1
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
// ボール移動のタイマー設定値（ミリ秒単位）
export class OTHERS {
  static readonly INTERVAL = 5
}
