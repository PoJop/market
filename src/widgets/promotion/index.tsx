import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import cn from "classnames";
import { UiKit } from "@/shared";
import { ProductCart } from "@/entities/product/ui";
import { useTranslation } from "next-i18next";

export const Promotion: React.FC = () => {

    const { t } = useTranslation("product")

    return (
        <>

            <section className="h-[430px] my-[100px]">
                <UiKit.Container>
                    <UiKit.SectionTitle title={t("common.promotion.title")} />
                </UiKit.Container>
                <UiKit.Container defaultStyle={false} className={"max-w-[1600px] w-full px-2 vsm:px-0 m-auto"}>
                    <Swiper
                        pagination={{
                            clickable: true,
                        }}
                        spaceBetween={60}
                        slidesPerView={"auto"}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: true,
                        }}
                        modules={[Autoplay, Pagination]}
                        className={cn("w-full pb-[60px] sm:px-[30px] ")}
                    >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((elem, idx) => (
                            <SwiperSlide key={idx} className="relative h-full w-[100vw] vsm:w-[280px] ">
                                <ProductCart data={product} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </UiKit.Container>
            </section>
        </>
    )
}

const product = {
    "__typename": "ProductEdge",
    "node": {
        "__typename": "Product",
        "id": "gid://shopify/Product/8119311302946",
        "title": "test",
        "handle": "test",
        "description": "fdsfsd",
        "images": {
            "__typename": "ImageConnection",
            "edges": [
                {
                    "__typename": "ImageEdge",
                    "node": {
                        "__typename": "Image",
                        "id": "gid://shopify/ProductImage/40586279321890",
                        "width": 1919,
                        "height": 968,
                        "url": "/image-error-load.jpg",
                        "altText": null
                    }
                }
            ]
        },
        "priceRange": {
            "__typename": "ProductPriceRange",
            "maxVariantPrice": {
                "__typename": "MoneyV2",
                "amount": "232.0",
                "currencyCode": "UAH"
            },
            "minVariantPrice": {
                "__typename": "MoneyV2",
                "amount": "232.0",
                "currencyCode": "UAH"
            }
        }
    }
}