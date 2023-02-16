import { SearchkIcon } from "@/shared/assets/icons"
import React from "react"



export const Search: React.FC = () => {

    const id = React.useId()

    return (
        <>

            <div className="flex h-full ">
                <label htmlFor={id} className="flex items-center ">
                    <span className="w-[25px] h-[25px] mx-3">
                        <SearchkIcon />
                    </span>
                </label>
                <div className="w-full h-full ">
                    <input
                        title="search"
                        id={id}
                        className="w-full h-full px-4 outline-none input-base"
                        placeholder="Search ..."
                    />
                </div>
            </div>

        </>
    )
}