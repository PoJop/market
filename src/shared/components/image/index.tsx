import { Skeleton } from "@/shared/ui-kit"
import Image, { ImageProps } from "next/image"
import React from "react"


/**
 * Lazy loading of a with a skeletonpicture picture 
 *
 * @param {boolean} rounded The number in pixels by which the edges are rounded
 */


interface ILazyImageProps extends ImageProps {
    rounded?: boolean
}


export const LazyImage: React.FC<ILazyImageProps> = ({ rounded = false, onError, className, src, alt, ...arg }) => {

    const imageWrapperRef = React.useRef<HTMLImageElement>(null)

    const [url, setUrl] = React.useState(src)
    const [load, setLoad] = React.useState<boolean | null>(null)

    return (
        <>
            <Image
                {...arg}
                ref={imageWrapperRef}
                src={url}
                className={className + (rounded ? " rounded-lg" : "")}
                onError={() => setUrl('/image-error-load.jpg')}
                onLoad={() => setLoad(true)}
                loading="lazy"
                alt={alt}
            />
            {load === null && <Skeleton className={rounded ? " rounded-lg" : ""} />}
        </>
    )
}