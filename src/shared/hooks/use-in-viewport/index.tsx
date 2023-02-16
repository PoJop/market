import React from "react";



export const useInViewport = ({ componentRef }: { componentRef: React.RefObject<HTMLElement> }) => {

    const [inViewport, setInViewport] = React.useState(false)

    React.useEffect(() => {
        if ("IntersectionObserver" in window && componentRef.current) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                if (entries?.[0].isIntersecting && !inViewport) {
                    setInViewport(true)
                } else {
                    setInViewport(false)
                }
            });
            imageObserver.observe(componentRef.current);
        } else {
            if (!componentRef.current) {
                setInViewport(true)
                return
            }
            let lazyloadThrottleTimeout: NodeJS.Timeout | undefined

            const lazyload = () => {
                if (lazyloadThrottleTimeout) {
                    clearTimeout(lazyloadThrottleTimeout);
                }

                lazyloadThrottleTimeout = setTimeout(function () {
                    let scrollTop = window.pageYOffset;
                    if (componentRef.current && componentRef.current.offsetTop < (window.innerHeight + scrollTop)) {
                        setInViewport(true)
                    } else {
                        setInViewport(false)
                    }
                }, 20);
            }

            document.addEventListener("scroll", lazyload);
            window.addEventListener("resize", lazyload);
            window.addEventListener("orientationChange", lazyload);

            return () => {
                document.removeEventListener("scroll", lazyload);
                window.removeEventListener("resize", lazyload);
                window.removeEventListener("orientationChange", lazyload);
            }
        }
    }, [componentRef])

    return { inViewport } as const
}