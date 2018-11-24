import { fun } from '.'

describe('module tests', () => {
  describe('fun tests', () => {
    it('will return a fun string', () => {
      const expected = 'fun is fun.'
      const test = fun('fun')
      expect(test).toBe(expected)
    })
  })
})
