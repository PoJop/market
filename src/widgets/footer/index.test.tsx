import { render, screen } from '@testing-library/react'
import { Footer } from './index'
import '@testing-library/jest-dom'

describe('Footer', () => {
    it('renders a footer', () => {
        render(<Footer />)
    })
})