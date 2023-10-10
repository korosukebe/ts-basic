export default function promiseSample (): void {
  const url = 'https://api.github.com/users/korosukebe'

  interface Profile {
    login: string
    id: number
  }

  type FetchProfile = () => Promise<Profile | null>

  const fetchProfile: FetchProfile = async () => {
    return await new Promise((resolve, reject) => {
      fetch(url)
        .then((res) => {
          // レスポンスのBodyをJSONで読み取った結果を返す
          res.json()
            .then((json: Profile) => {
              console.log('Asyncronouse Promise Sample 1:', json)
              resolve(json)
            })
            .catch((error) => {
              console.log(error)
              reject(null)
            })
        })
        .catch((error) => {
          console.log(error)
          reject(null)
        })
    })
  }

  fetchProfile()
    .then((profile: Profile | null) => {
      if (profile !== null && profile !== undefined) {
        console.log('Asyncronouse Promise Sample 2:', profile)
      }
    })
    .catch((error) => {
      console.log(error)
    })
}
