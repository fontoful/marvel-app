export interface IResponseAPI {
  attributionHTML: string
  attributionText: string
  code: number
  copyright: string
  data: IDataProps
}

export interface IResultProps {
  id: number
  name: string
  title: string
  description: ''
  modified: string
  resourceURI: string
  urls: IUrlsProps[]
  thumbnail: IThumbnailProps
  characters: any
  comics: IComicsProps
  stories: IStoriesProps
  series: ISeriesProps
}

//? These are not getting exported themselves as they're part (properties) of the ones that are getting exported
interface IStoriesProps {
  available: number
  returned: number
  collectionURI: string
  items: [{ resourceURI: string; name: string; type: string }]
}

interface ISeriesProps {
  available: number
  returned: number
  collectionURI: string
  items: [{ resourceURI: string; name: string }]
}

interface IDataProps {
  count: number
  limit: 20
  offset: 0
  results: IResultProps[]
}

interface IUrlsProps {
  type: string
  url: string
}

export interface IThumbnailProps {
  path: string
  extension: string
}

interface IComicsProps {
  available: number
  returned: number
  collectionURI: string
  items: [{ resourceURI: string; name: string }]
}
