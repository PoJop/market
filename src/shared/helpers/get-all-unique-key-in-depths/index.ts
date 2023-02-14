
type TObject = { [key: string]: any }
interface IArgs {
    object: TObject
}
type TGetAllUniqueKeyInDepths = ({ object }: IArgs) => string[]


/**
 * Returns an array of term unique object keys,
 * including nested objects and arrays 
*/

export const getAllUniqueKeysInDepths: TGetAllUniqueKeyInDepths = ({ object }) => {

    const recursion = (arr: TObject) => {
        let allKeys: string[] = []

        for (let index = 0; index < Object.keys(arr).length; index++) {
            const element = String(Object.keys(arr)[index]);
            allKeys.push(element)

            const hasDepth =
                typeof arr[element] === "object"
                && arr[element] !== null


            if (hasDepth) {

                const isArray = Array.isArray(arr[element])

                if (isArray) {
                    (arr[element] as any[]).forEach(e => {
                        let depthKeys = recursion(e);
                        allKeys = [...allKeys, ...depthKeys]
                    })

                } else if (Boolean(Object.keys(arr[element]))) {

                    const depthKeys = recursion((arr[element]))

                    allKeys = [...allKeys, ...depthKeys]
                }

            }

        }

        return allKeys
    }

    const uniqueKeys = Array.from(new Set(recursion(object)))
    return uniqueKeys.sort()
}