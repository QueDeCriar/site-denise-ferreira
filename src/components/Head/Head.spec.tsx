import {Head} from './Head'
import {render} from '@testing-library/react'

describe('Head', () => {
  it('Deve conter título informado em propriedade', () => {
    const mockTitle = 'Tìtulo teste'

    render(<Head titulo={mockTitle} />)

    expect(mockTitle).toStrictEqual(mockTitle)
  })
})
