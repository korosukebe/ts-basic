export default function tupleSample(): void {
  // 一般的なタプル定義
  const response: [number, string] = [200, 'OK']
  // response = [400, "Bud Request", "Email parameter is missing"]
  // response = ["400", "Bud Request"]
  console.log('Array tuple sample 1', response)

  // 可変長引数を使ったタプル
  const girlfriends: [string, ...string[]] = ['Kana', 'Miku', 'Keiko']
  girlfriends.push('Misa')
  console.log('Array tuple sample 2', girlfriends)
}
