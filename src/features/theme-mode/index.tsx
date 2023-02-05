import React from "react"
import { MoonIcon } from "./assets/moon-icon"
import { SunIcon } from "./assets/sun-icon"
import { useThemeMode } from "./hooks/use-theme-mode"


export const ThemeMode: React.FC = () => {


    const { mode, changeMode } = useThemeMode()

    const modeIcon = {
        "dark": <SunIcon className="w-[20px] h-[20px]" />,
        "light": <MoonIcon className="w-[20px] h-[20px]" />
    }

    return (
        <>
            <button
                onClick={changeMode}
                className="p-2"
            >
                {modeIcon[mode]}
            </button>
        </>
    )
}