export default function classyfier(...args) {
  return args
    .flat(Infinity)
    .reduce((classes, className) => {
      if (className && typeof className !== 'boolean') {
        if (typeof className === 'object' && className !== null) {
          for (const [key, value] of Object.entries(className)) {
            if (value) classes.push(key)
          }
        } else {
          classes.push(className)
        }
      }
      return classes
    }, [])
    .join(' ')
}
