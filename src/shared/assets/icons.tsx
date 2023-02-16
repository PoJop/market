import React from "react";
interface IIconProps extends React.HTMLAttributes<SVGElement> {
}

export const BagIcon: React.FC<IIconProps> = ({ ...arg }) => {

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            {...arg}
            viewBox="0 0 512 512"
        >
            <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
                d="M80 176a16 16 0 00-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 00-16-16zm80 0v-32a96 96 0 0196-96h0a96 96 0 0196 96v32"
            ></path>
        </svg>
    )
}
export const CheckmarkIcon: React.FC<IIconProps> = ({ ...arg }) => {

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            {...arg}
            viewBox="0 0 512 512"
        >
            <path
                fill="none"
                stroke="currentColor"
                strokeMiterlimit="10"
                strokeWidth="32"
                d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
            ></path>
            <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
                d="M352 176L217.6 336 160 272"
            ></path>
        </svg>
    )
}
export const SearchkIcon: React.FC<IIconProps> = ({ ...arg }) => {

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            {...arg}
            viewBox="0 0 512 512"
        >
            <path
                fill="none"
                stroke="currentColor"
                strokeMiterlimit="10"
                strokeWidth="32"
                d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
            ></path>
            <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="32"
                d="M338.29 338.29L448 448"
            ></path>
        </svg>
    )
}
export const InfiniteIcon: React.FC<IIconProps> = ({ ...arg }) => {

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            {...arg}
            viewBox="0 0 512 512"
        >
            <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="32"
                d="M256 256s-48-96-126-96c-54.12 0-98 43-98 96s43.88 96 98 96c37.51 0 71-22.41 94-48m32-48s48 96 126 96c54.12 0 98-43 98-96s-43.88-96-98-96c-37.51 0-71 22.41-94 48"
            ></path>
        </svg>
    )
}
export const EllipsisHorizontalIcon: React.FC<IIconProps> = ({ ...arg }) => {

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            {...arg}
            viewBox="0 0 512 512"
        >
            <circle
                cx="256"
                cy="256"
                r="32"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit="10"
                strokeWidth="32"
            ></circle>
            <circle
                cx="416"
                cy="256"
                r="32"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit="10"
                strokeWidth="32"
            ></circle>
            <circle
                cx="96"
                cy="256"
                r="32"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit="10"
                strokeWidth="32"
            ></circle>
        </svg>
    )
}
export const ChevronIcon: React.FC<IIconProps> = ({ ...arg }) => {

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            {...arg}
            viewBox="0 0 512 512"
        >
            <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="48"
                d="M328 112L184 256l144 144"
            ></path>
        </svg>
    )
}