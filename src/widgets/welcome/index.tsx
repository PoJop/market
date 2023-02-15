import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import cn from "classnames";
import Image from "next/image";





export const Welcome: React.FC = () => {



    return (
        <>
            <Swiper
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className={cn("w-full h-[70%]")}
            >
                {[1, 2, 3, 4, 5].map((elem, idx) => (
                    <SwiperSlide key={idx} className="relative w-full h-full">
                        <Image
                            width={1600}
                            height={1200}
                            src={"/welcome-bg.jpeg"}
                            alt=''
                            className="object-cover w-full h-full"
                        />
                        <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full">

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}