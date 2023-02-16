import { ChevronIcon } from "@/shared/assets/icons";
import { integrateUrlParams } from "@/shared/helpers";
import Link from "next/link";
import React from "react"

interface IPaginationProps {
    pages: number;
    currentPage: number;
    urlParamName: string;
}

export const Pagination: React.FC<IPaginationProps> = (props) => {
    const { pages, currentPage, urlParamName } = props


    return (
        <>
            <div className="flex items-center gap-5 py-4">
                {pages > 1 && <PrevBtn {...props} />}
                <Items {...props} />
                {pages > 1 && <NextBtn {...props} />}
            </div>
        </>
    )
}

const Items: React.FC<IPaginationProps> = ({ pages, ...arg }) => {


    const list = Array.from({ length: pages }).map((_, idx) => idx + 1)



    return (
        <>
            <ul className="flex">
                {list.map((elem, idx) => <Item key={idx} number={elem} {...arg} />)}
            </ul>
        </>
    )
}

interface IItemProps {
    number: number;
    currentPage: number;
    urlParamName: string;
}

const Item: React.FC<IItemProps> = ({ number, urlParamName }) => {

    

    return (
        <>
            <li className="text-[18px] cursor-pointer">
                <Link href={integrateUrlParams({ param: `${urlParamName}=${number}` })} className="p-3 ">
                    {number}
                </Link>
            </li>
        </>
    )
}



const NextBtn: React.FC<IPaginationProps> = ({ pages, currentPage, urlParamName }) => {

    return (
        <>
            <button
                // onClick={() => callback(currentPage + 1)}
                disabled={pages <= currentPage}
                className="w-[30px] h-[30px] border p-1 rounded-md  btn-w-them-bg"
            >
                <ChevronIcon className="rotate-180" />
            </button>
        </>
    )
}
const PrevBtn: React.FC<IPaginationProps> = ({ pages, currentPage, urlParamName }) => {

    return (
        <>
            <button
                // onClick={() => callback(currentPage + 1)}
                disabled={1 <= currentPage}
                className="w-[30px] h-[30px] border p-1 rounded-md  btn-w-them-bg"
            >
                <ChevronIcon />
            </button>
        </>
    )
}