import { getAllUniqueKeysInDepths } from '.'


describe("get all unique key in depths", () => {

    let objectMock = {}
    let resultMock: string[] = []


    test("Checking on a simple object", () => {
        const object = { key1: 1, key2: 2 }
        const uniqueKeys = getAllUniqueKeysInDepths({ object })


        expect(uniqueKeys).not.toEqual([])
        expect(uniqueKeys).not.toBeUndefined()
        expect(uniqueKeys).not.toBeNull()
        expect(uniqueKeys).toEqual(["key1", "key2"].sort())

        objectMock = object
        resultMock = uniqueKeys
    })

    
    test("Check for uniqueness and lack of duplicates", () => {
        const object = { ...objectMock, key3: { key4: 3 }, key4: 3 }
        const uniqueKeys = getAllUniqueKeysInDepths({ object })


        expect(uniqueKeys).toEqual([...resultMock, "key3", "key4"].sort())
        expect(uniqueKeys).not.toEqual([...resultMock, "key3", "key4", "key3"])

        objectMock = object
        resultMock = uniqueKeys
    })


    test("Checking for key collection from an array", () => {

        const object = { ...objectMock, key5: [{ key6: 5, }], key7: [], }
        const uniqueKeys = getAllUniqueKeysInDepths({ object })


        expect(uniqueKeys).toEqual([...resultMock, "key5", "key6", "key7"].sort())

        objectMock = object
        resultMock = uniqueKeys
    })


    test("Check for key type number, and values undefined, null", () => {
        const object = {
            ...objectMock, key8: null, key9: {
                key10: undefined,
                1: [{ key11: NaN, }]
            },
        }
        const uniqueKeys = getAllUniqueKeysInDepths({ object })

        expect(uniqueKeys).toEqual([...resultMock, "key8", "key9", "key10", "1", "key11"].sort())
    })

    afterAll(() => {
        objectMock = {}
        resultMock = []
    })
})