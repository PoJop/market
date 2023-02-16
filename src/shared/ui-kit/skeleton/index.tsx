

export const Skeleton: React.FC<React.HTMLAttributes<HTMLElement>> = ({ className = "", ...arg }) => {
    return <span className={"block skeleton absolute top-0 left-0 w-full h-full " + className} {...arg} />
}