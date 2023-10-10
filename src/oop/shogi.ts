type Suji = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
type Dan = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'

// 駒の位置を表すクラス
class Position {
  constructor(
    private readonly suji: Suji,
    private readonly dan: Dan,
  ) {}

  // パラメータに渡された位置と現在の位置を比較するメソッド
  distanceFrom(position: Position, player: Player): { suji: number; dan: number } {
    if (player === 'first') {
      return {
        suji: Math.abs(position.suji - this.suji),
        dan: Math.abs(Number(position.dan) - Number(this.dan)),
      }
    } else {
      return {
        suji: Math.abs(position.suji - this.suji),
        dan: -Math.abs(Number(position.dan) - Number(this.dan)), // 段（数の位置）は正負反転
      }
    }
  }
}

// 駒の位置を表すクラス
abstract class Piece {
  // Pieceクラスとサブクラスでアクセスできる
  protected position: Position

  constructor(
    private readonly player: Player,
    suji: Suji,
    dan: Dan,
  ) {
    this.position = new Position(suji, dan)
  }

  // メソッドの定義
  // 駒の移動用メソッド
  moveTo(position: Position): void {
    this.position = position
  }

  // 移動できるかどうかを判定するメソッド
  abstract canMoveTo(position: Position, player: Player): boolean
}

class Osho extends Piece {
  // 王将のcanMoveToメソッドを具体的に実装する
  canMoveTo(position: Position, player: Player): boolean {
    const distance = this.position.distanceFrom(position, player)
    return distance.suji < 2 && distance.dan < 2
  }
}

class Game {
  private readonly peces = Game.makePieces()
  private static makePieces(): Piece[] {
    return [new Osho('first', 5, 1), new Osho('second', 5, 9)]
  }
}
const game: Game = new Game()
console.log(game)
