import { faker } from "@faker-js/faker"
import { IProductCard } from "../types"

type TCreateRandomProductCard = ({ length }: { length: number }) => IProductCard[]

export const createRandomProductCard: TCreateRandomProductCard = ({ length }) => {

    const fakeProductsData: IProductCard[] = []

    const createFake = () => {
        const title = faker.random.word()
        return {
            node: {
                id: faker.datatype.uuid(),
                title: title,
                handle: title,
                description: faker.random.words(),
                images: {
                    edges: [
                        {
                            node: {
                                url: "/image-error-load.jpg",
                                width: 400,
                                height: 400,
                                id: "string",
                                altText: null,
                            }
                        }
                    ]
                },
                priceRange: {
                    maxVariantPrice: {
                        amount: faker.random.numeric(2),
                        currencyCode: "UAH",
                    },
                    minVariantPrice: {
                        amount: faker.random.numeric(2),
                        currencyCode: "UAH",
                    }
                }
            }
        }
    }

    Array.from({ length }).forEach(() => {
        fakeProductsData.push(createFake());
    });

    return fakeProductsData
}