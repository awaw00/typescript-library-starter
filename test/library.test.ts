import gretting from '../src/index'

describe('Hello', () => {
  it('greeting', () => {
    expect(gretting).toBe('Hello World')
  })
})
