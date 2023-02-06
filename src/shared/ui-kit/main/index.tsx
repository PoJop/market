import React from "react"
import cn from "classnames"



interface IMainProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode
}


export const Main: React.FC<IMainProps> = ({ children, className, ...arg }) => {

    return (
        <>
            <main className={cn("mt-[70px]", className)} {...arg}>
                {children}
            </main>
        </>
    )
}