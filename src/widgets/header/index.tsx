import { ThemeMode } from "features"
import React from "react"



export const Header: React.FC = () => {

    return (
        <>
            <header>
                <ThemeMode />
            </header>
        </>
    )
}