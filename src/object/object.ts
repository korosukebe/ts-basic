export default function objectSample(): void {
  const a: object = {
    name: 'Torahack',
    age: 28,
  }
  // xxx console.log(a.name)
  console.log(a)

  // オブジェクトリテラル記法で型定義
  let country: {
    language: string
    name: string
  } = {
    language: 'Japanese',
    name: 'Japan',
  }
  console.log(country.name)
  console.log('Object object sample 1:', country)

  country = {
    language: 'English',
    name: 'United States of America',
  }
  console.log('Object object sample 2:', country)

  // オプショナルとreadonly
  const torahack: {
    age: number
    lastName: string
    readonly firstName: string
    gender?: string
  } = {
    age: 28,
    lastName: 'Yamada',
    firstName: 'Tarou',
  }

  torahack.gender = 'male'
  torahack.lastName = 'Kamado'
  // torahack.firstName = 'Tanjiro'
  console.log('Object object sample 3:', torahack)

  // インデックスシグネチャ
  const capitals: Record<string, string> = {
    Japan: 'Tokyo',
    Korea: 'Seoul',
  }
  capitals.China = 'Beijing'
  capitals.Canada = 'Ottawa'
  console.log('Object object sample 4:', capitals)
}
