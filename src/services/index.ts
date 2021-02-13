const endpoint: string = 'https://gateway.marvel.com/v1/public/'

export const url = (urlPath: string, query: string = ''): string => {
  return `${endpoint}${urlPath}?apikey=${process.env.REACT_APP_API_KEY}${query}`
}
