export default function classyfier(...args) {
  return args
    .flat(Infinity)
    .reduce((classes, className) => {
      if (className && typeof className !== 'boolean') {
        if (typeof className === 'object' && className !== null) {
          console.log(className)
          Object.entries(className).forEach(([key, value]) => {
            if (value) classes.push(key)
          })
        } else {
          classes.push(className)
        }
      }
      return classes
    }, [])
    .join(' ')
}
