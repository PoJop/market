import React from "react"
import Link, { LinkProps } from "next/link"


interface IPrimaryLinkProps extends LinkProps {
    children: React.ReactNode
}

export const PrimaryLink: React.FC<IPrimaryLinkProps> = ({ children, ...arg }) => {

    return (
        <Link {...arg} legacyBehavior>
            <a className="uppercase text-[15px] font-[400] opacity-60 hover:opacity-100 transition-all">
                {children}
            </a>
        </Link>
    )
}
export default PrimaryLink