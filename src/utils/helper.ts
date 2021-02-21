export const unifyString = (ob: { path: string; extension: string }): string =>
  `${ob.path}.${ob.extension}`

export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const checkArrEmpty = (arr: string[]): boolean => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return true
  }

  return arr.filter(item => item !== '').length === 0
}
