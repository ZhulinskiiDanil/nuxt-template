type FetchOptions = Parameters<typeof $fetch>['1']

export const request = async <T = any>(
  path: string,
  opts: FetchOptions
): Promise<T | null> => {
  const baseURL = useApiBaseURL()
  const options = opts || {}
  const token = useCookie('token')

  options.baseURL = baseURL
  options.ignoreResponseError = true
  options.headers = options.headers || {}
  options.headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token.value}`
  }

  try {
    return new Promise(res => {
      $fetch(path, options)
        .then(data => res(data as T))
        .catch(_ => res(null))
    })
  } catch(err) {
    return null
  }
}