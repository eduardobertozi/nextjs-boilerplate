import { render } from '@testing-library/react'
import HomePage from './page'

describe('<HomePage />', () => {
	test('should render Home', () => {
		const { getByText } = render(<HomePage />)
		expect(getByText('Home')).toBeInTheDocument()
	})
})
