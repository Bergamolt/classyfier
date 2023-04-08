import classyfier from '../index.js'

describe('classyfier', () => {
  test('should return a single class name as a string', () => {
    expect(classyfier('btn')).toBe('btn')
  })

  test('should return multiple class names as a space-separated string', () => {
    expect(classyfier('btn', 'btn-primary')).toBe('btn btn-primary')
  })

  test('should filter out falsey values', () => {
    expect(classyfier('btn', undefined, null, 'btn-primary', false)).toBe(
      'btn btn-primary'
    )
  })

  test('should allow objects to be used to conditionally include class names', () => {
    expect(
      classyfier('btn', { 'btn-primary': true, 'btn-disabled': false })
    ).toBe('btn btn-primary')
  })

  test('should allow arrays to be used as input', () => {
    expect(classyfier(['btn', 'btn-primary'])).toBe('btn btn-primary')
  })

  test('should allow an array and object to be used together as input', () => {
    expect(classyfier(['btn', 'btn-primary'], { 'btn-disabled': true })).toBe(
      'btn btn-primary btn-disabled'
    )
  })

  test('should allow a mix of arrays and strings to be used as input', () => {
    expect(classyfier('btn', ['btn-primary', { 'btn-disabled': true }])).toBe(
      'btn btn-primary btn-disabled'
    )
  })
})
