export const unifyString = (ob: { path: string; extension: string }): string =>
  `${ob.path}.${ob.extension}`

export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
