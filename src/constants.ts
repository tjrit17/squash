export class SIZES_PX {
  static readonly BALL = 25
  static readonly WALL = 8
  static readonly COURT_WIDTH = 500
  static readonly COURT_HIGHT = 350
  static readonly RACKET_WIDTH = 100
  static readonly RACKET_MOVE = 25
  static readonly RACKET_MV_WIDTH = this.COURT_WIDTH - this.RACKET_WIDTH
  static readonly BALL_MV_WIDTH = this.COURT_WIDTH - this.BALL
  static readonly BALL_MV_HEIGHT = this.COURT_HIGHT - this.BALL
}

export class COLORS {
  static readonly BALL = '#b9f871'
  static readonly RACKET = '#40608a'
  static readonly TITLE_BACK = '#40608a'
  static readonly TITLE_TEXT = '#CCCCCC'
  static readonly COURT = '#978b57'
}

export class OTHERS {
  static readonly INTERVAL = 5
}
