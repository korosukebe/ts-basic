interface Bread {
  calories: number
}

interface Bread {
  type: string
}

const francePan: Bread = {
  calories: 300,
  type: 'hard'
}
console.log(francePan)

// 型エイリアス
interface MaboDofu {
  calories: number
  spicyLevel: number
}

interface Rice {
  calories: number
  gram: number
}

type MaboDon = MaboDofu & Rice // 交差型(intersection)

const maboDon: MaboDon = {
  calories: 500,
  spicyLevel: 10,
  gram: 350
}
console.log(maboDon)

interface Book {
  page: number
  title: string
}

interface Magazine extends Book {
  cycle: 'daily' | 'weekly' | 'mothly' | 'yearly'
}

const jump: Magazine = {
  page: 300,
  title: '週間少年ジャンプ',
  cycle: 'weekly'
}
console.log(jump)

interface BookType {
  page: number
  title: string
}

interface Handbook extends BookType {
  theme: string
}

const cotrip: Handbook = {
  page: 120,
  title: 'ことりっぷ',
  theme: '旅行'
}
console.log(cotrip)

class Comic implements Book {
  page: number
  title: string

  constructor (
    page: number,
    title: string,
    private readonly publishYear: string
  ) {
    this.page = page
    this.title = title
  }

  getPublishYear (): string {
    return this.title + 'が発売されたのは' + this.publishYear + '年です。'
  }
}
const poplarComic = new Comic(200, '鬼滅の刃', '2020')
console.log(poplarComic.getPublishYear())
