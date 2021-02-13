export interface IResponseAPI {
  attributionHTML: string
  attributionText: string
  code: number
  copyright: string
  data: IDataProps
}

interface IDataProps {
  count: number
  limit: 20
  offset: 0
  results: IResultProps[]
}

export interface IResultProps {
  id: number
  name: string
  description: ''
  modified: string
}
