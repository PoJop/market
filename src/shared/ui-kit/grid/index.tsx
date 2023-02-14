import React from "react"

interface IGridProps {
    children: React.ReactNode
}

export const Grid: React.FC<IGridProps> = ({ children }) => {


    return (
        <>
            <div className="grid grid-cols-1 gap-4 msm:grid-cols-2 lg:grid-cols-4 ">
                {children}
            </div>
        </>
    )
}