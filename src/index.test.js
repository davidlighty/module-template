import theoretically from 'jest-theories'
import { fun } from '.'

describe('module tests', () => {
  describe('fun tests', () => {
    it('will return a fun string', () => {
      const expected = 'fun is fun.'
      const output = fun('fun')
      expect(output).toBe(expected)
    })

    const theories = [
      { input: null, expected: 'null is fun.' },
      { input: ' ', expected: '  is fun.' },
      { input: 'Theories', expected: 'Theories is fun.' }
    ]

    theoretically('the {input} beomes a fun string', theories, theory => {
      const output = fun(theory.input)
      expect(output).toBe(theory.expected)
    })
  })
})
