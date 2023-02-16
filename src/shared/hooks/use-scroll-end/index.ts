import { percentageOfNum, percentageOfNumFromAnotherNum } from "@/shared/utils";
import React from "react";


/**
 * Возвращает x, возведённое в n-ную степень.
 *
 * @param {number} x Возводимое в степень число.
 * @param {number} n Степень, должна быть натуральным числом.
 * @return {number} x, возведённое в n-ную степень.
 */


interface IUseScrollDirectionOptionsProps {
    trigger: number;
    pause?: boolean;
    interval?: number;
}


export const useScrollEnd = (callback: () => void, options: IUseScrollDirectionOptionsProps) => {

    const {
        trigger,
        pause = false,
        interval = 300
    } = options



    const reachedTargetRef = React.useRef<() => boolean>()
    let active = true
    let timeout: NodeJS.Timeout



    reachedTargetRef.current = () =>
        document.body.scrollHeight - (window.pageYOffset + window.innerHeight) < trigger



    const triggerFunc = () => {
        if (!active) return

        clearTimeout(timeout)
        active = false

        reachedTargetRef.current?.() && callback()


        Boolean(interval) && interval >= 0 &&
            setTimeout(() => { active = true }, interval)


        timeout = setTimeout(() => { reachedTargetRef.current?.() && callback() }, interval)
    }

    React.useEffect(() => {


        if (pause) {
            clearTimeout(timeout)
        } else {
            triggerFunc()
            window.addEventListener("scroll", triggerFunc)
        }

        return () => window.removeEventListener("scroll", triggerFunc)
    }, [pause])

}