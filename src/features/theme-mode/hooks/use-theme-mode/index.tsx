import React from "react"

type TMode = "dark" | "light"


const changToOpposite = (mode: TMode) => mode === "dark" ? "light" : "dark"





export const useThemeMode = () => {

    const [mode, setMode] = React.useState<TMode>("dark")


    React.useEffect(() => {

        const storeMode = localStorage.theme
        const themeOfSystemMatches = window.matchMedia(`(prefers-color-scheme: ${mode})`).matches

        if (storeMode) {
            setMode(storeMode)
        } else if (!themeOfSystemMatches) {
            setMode(changToOpposite(mode))
        }

    }, [])

    React.useMemo(() => {
        if (typeof document === "object") {
            document.documentElement.setAttribute("data-mode", mode)
        }
    }, [mode])


    const changeMode = () => {
        const changeTo = changToOpposite(mode)
        localStorage.theme = changeTo
        setMode(changeTo)
    }

    return { mode, changeMode } as const
}




