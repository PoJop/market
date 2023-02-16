import { percentageOfNum, percentageOfNumFromAnotherNum } from "@/shared/utils"
import React from "react"



const events = ["mouseup", "touchend", "scroll", "resize", "orientationChange"]


interface IUseInfinityProps {
    limit?: number;
    direction: "down" | "up"
    items: any[];
}

export const useInfinity = ({ limit = 30, items }: IUseInfinityProps) => {

    const [calc, setCalc] = React.useState(false)


    const timeRef = React.useRef<NodeJS.Timeout>()

    

    const handler = () => {
        clearTimeout(timeRef.current)
        // setCalc(false)

        timeRef.current = setTimeout(() => {
            // setCalc(true)
            console.log(percentageOfNum(document.body.scrollHeight, percentageOfNumFromAnotherNum(window.pageYOffset + window.innerHeight, document.body.scrollHeight)))
        }, 400)
    }

    React.useEffect(() => {


        events.forEach(e => window.addEventListener(e, handler))

        return () => events.forEach(e => window.removeEventListener(e, handler))

    }, [])

    return { calc }
}