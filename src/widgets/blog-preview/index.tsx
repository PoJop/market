import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import cn from "classnames";
import Image from "next/image";
import { UiKit } from "@/shared";
import { useTranslation } from "next-i18next";
import { ArticleCart } from "@/entities/article";





export const BlogPreview: React.FC = () => {


    const { t } = useTranslation('blog')

    return (
        <section className="py-[100px] ">
            <UiKit.Container>

                <UiKit.SectionTitle title={t("common.preview.title")} />

                <UiKit.Grid>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((elem, idx) => <ArticleCart key={idx} data={elem} />

                    )}
                </UiKit.Grid>

            </UiKit.Container>
        </section>
    )
}