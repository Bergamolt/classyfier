export function classyfier(...a) {
  return a
    .flat(9)
    .reduce(
      (a, b) =>
        b && typeof b != 'boolean'
          ? (typeof b == 'object' && b != null
              ? Object.entries(b).forEach(([c, d]) => d && a.push(c))
              : a.push(b),
            a)
          : a,
      []
    )
    .join(' ')
}

export default classyfier
