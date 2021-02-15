export const unifyString = (ob: { path: string; extension: string }): string =>
  `${ob.path}.${ob.extension}`
