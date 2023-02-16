import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import cn from "classnames";
import Image from "next/image";

import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";
import gsap from "gsap-trial";





export const Welcome: React.FC = () => {

    React.useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to("[data-speed]", {
            y: (i, el) => (1 - parseFloat(el.getAttribute("data-speed"))) * ScrollTrigger.maxScroll(window),
            ease: "none",
            scrollTrigger: {
                start: 0,
                end: "max",
                invalidateOnRefresh: true,
                scrub: 0
            }
        });
    }, [])



    return (
        <>
            <section className="h-[100vw] min-h-[430px] sm:h-[640px]">
                <Swiper
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className={cn("w-full h-full ")}
                >
                    {[1, 2, 3, 4, 5].map((elem, idx) => (
                        <SwiperSlide
                            key={idx}
                            data-speed="0.50"
                            className="relative w-full h-full"
                        >
                            <Image
                                width={1600}
                                height={1200}
                                src={"/welcome-bg.jpeg"}
                                alt=''
                                className="object-cover w-full h-full box"
                            />
                            <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full">
                                <h1 className="text-[30px] text-white">Welcome</h1>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </>
    )
}