import React from "react"
import cn from "classnames"



interface IMainProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode
}


export const Main: React.FC<IMainProps> = ({ children, className, ...arg }) => {

    return (
        <>
            <main className={cn("py-[50px] min-h-[100vh]  flex-[1_1_100%]", className)} {...arg}>
                {children}
            </main>
        </>
    )
}