


export const integrateUrlParams = ({ param }: { param: string }) => {
    if (typeof window === "object" && window.location.pathname.includes("?")) {
        const [paramName, _] = param.split("=")
        const params = window.location.pathname
            .substring(window.location.pathname.indexOf("?") + 1)
            .split("&")
            .filter(e => e.split("=")[0] !== paramName)
        return `?${[...params, param].join("&")}`
    } else {
        return `?${param}`
    }
}