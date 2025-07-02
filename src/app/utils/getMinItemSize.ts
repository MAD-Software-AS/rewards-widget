const getMinItemSize = (sizes: number[], containerWidth: string) => {
  const breakpoints = [1454, 768, 568, 0]
  const index = breakpoints.findIndex((breakpoint) => {
    return parseInt(containerWidth) >= breakpoint
  })
  return index === -1 ? sizes.at(-1) : sizes[index]
}

export default getMinItemSize
