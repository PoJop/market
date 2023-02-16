import cn from "classnames"
import React from "react"

interface IGridProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode,
    ref?: React.RefObject<HTMLDivElement>
}

export const Grid: React.FC<IGridProps> = ({ children, className, ...arg }) => {


    return (
        <>
            <div
                {...arg}
                className={cn(
                    "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 ",
                    className
                )}
                data-grid={4}
                data-gap={16}
            >
                {children}
            </div>
        </>
    )
}