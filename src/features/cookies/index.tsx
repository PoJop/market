import React from "react"
import cookie from "cookie"
import gsap from "gsap-trial"
import { UiKit } from "@/shared"





export const Cookies: React.FC = () => {

    const cookiesRef = React.useRef<HTMLElement>(null)


    React.useEffect(() => {
        const cookies = cookie.parse(document.cookie)

        if (!Boolean(cookies.cookiesAccept)) {
            gsap.to(cookiesRef.current, { y: `0%` })
        }
    }, [])

    const handlerAccept = () => {
        let date = new Date(Date.now() + (86400e3 * 7)).toUTCString();
        document.cookie = `cookiesAccept=1; path=/; expires=${date}`
        gsap.to(cookiesRef.current, { y: `150%` })
    }

    return (

        <>
            <article
                ref={cookiesRef}
                className="fixed bottom-0 left-0 w-full  z-[2000] bg-[#000] text-white py-3"
            >
                <UiKit.Container className="flex items-center justify-between">
                    <h1 className="mr-3">
                        This site uses cookies. They are solely necessary for the correct operation of the site.
                    </h1>
                    <button onClick={handlerAccept} className="px-6 py-4 border border-white hover:bg-[#fff] transition-all hover:text-[#000]">
                        Accept
                    </button>
                </UiKit.Container>
            </article>
        </>
    )
}

export default Cookies