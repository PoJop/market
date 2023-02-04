import React from "react"
import { useThemeMode } from "./hooks/use-theme-mode"


export const ThemeMode: React.FC = () => {


    const { mode, changeMode } = useThemeMode()

    return (
        <>
            <button onClick={changeMode} >
                ThemeMode
            </button>
        </>
    )
}