import React from "react"
import { useRouter } from "next/router"
import { PrimaryLink } from "@/shared/ui-kit"



export const Locales: React.FC = () => {

    const { pathname, locales, locale } = useRouter()
   
    return (
        <>
            <div className="flex gap-2">
                {locales?.filter(e => e !== locale)?.map((elem, idx) =>
                    <PrimaryLink key={idx} href={pathname} locale={elem} >
                        {elem}
                    </PrimaryLink>
                )}
            </div>
        </>
    )
}