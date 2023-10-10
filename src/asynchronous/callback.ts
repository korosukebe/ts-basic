export default function callbackSample (): void {
  const url = 'https://api.github.com/users/korosukebe'

  // コールバックで呼び出す非同期処理
  const fetchProfile = () => {
    fetch(url)
      .then((res) => {
        // レスポンスのBodyをJSONで読み取った結果を返す
        res.json()
          .then((json) => {
            console.log('Asyncronouse Callback Sample 1:', json)
            return json
          })
          .catch((error) => {
            console.log(error)
          })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const profile = fetchProfile()
  console.log('Asyncronouse Callback Sample 2:', profile)
}
