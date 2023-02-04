import { render, screen } from '@testing-library/react'
import { Header } from './index'
import '@testing-library/jest-dom'

describe('Header', () => {
    it('renders a header', () => {
        render(<Header />)
    })
})