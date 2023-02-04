import { render, screen } from '@testing-library/react'
import Home from '../index'
import '@testing-library/jest-dom'

describe('Home', () => {
    it('renders a main', () => {
        render(<Home />)

        const heading = screen.getByRole('main')

        expect(heading).toBeInTheDocument()
    })
})