export default async function asyncAwaitSample () {
  const url = 'https://api.github.com/users/korosukebe'

  interface Profile {
    login: string
    id: number
  }

  type FetchProfile = () => Promise<Profile | null>

  const fetchProfile: FetchProfile = async () => {
    const response = await fetch(url)
      .then((res) => res)
      .catch((error) => {
        console.error(error)
        return null
      })

    if (response === null || response === undefined) {
      return null
    }

    const json = await response.json()
      .then((json: Profile) => {
        console.log('Asyncronouse async/await Sample 1:', json)
        return json
      })
      .catch((error) => {
        console.error(error)
        return null
      })

    if (json === null || json === undefined) {
      return null
    }

    return json
  }

  const profile = await fetchProfile()
  if (profile !== null && profile !== undefined) {
    console.log('Asyncronouse async/await Sample 2:', profile)
  }
}
