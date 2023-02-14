import React from "react"


export const useNetworkConnection = () => {

    const [networkConnection, setNetworkConnection] = React.useState<null | boolean>(null)

    React.useEffect(() => {
        setNetworkConnection(navigator.onLine)

        function changeHandler() {
            setNetworkConnection(navigator.onLine)
        }

        window.addEventListener("online", changeHandler)
        window.addEventListener("offline", changeHandler)
        return () => {
            window.removeEventListener("online", changeHandler)
            window.removeEventListener("offline", changeHandler)
        }
    }, [])

    return { networkConnection } as const
}