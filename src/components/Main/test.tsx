import { render, screen } from '@testing-library/react'

import Main from '.'

const props = {
  title: 'Título',
  description: 'Descrição',
  info: 'Info',
  url: '/url'
}

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = render(<Main {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: props.description })
    ).toBeInTheDocument()

    expect(screen.getByText(props.info)).toBeInTheDocument()

    expect(screen.getByText(props.url)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    const { container } = render(<Main {...props} />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
