import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"

interface ISectionTitleProps {
    title: string | React.ReactNode
}

export const SectionTitle: React.FC<ISectionTitleProps> = ({ title }) => {

    const titleRef = React.useRef<HTMLDivElement>(null)

    const goToAnchor = () => {
        const topGap = titleRef.current?.offsetTop
        const HEADER_GAP = 100
        window.scrollTo({
            top: topGap ? topGap - HEADER_GAP : 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    return (
        <>
            <div ref={titleRef} className="text-[24px] my-10 w-full">
                <button role={"anchor"} onClick={goToAnchor} className="link-low">
                    {title}
                </button>
            </div>
        </>
    )
}