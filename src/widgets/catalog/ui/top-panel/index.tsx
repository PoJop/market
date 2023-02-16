import { EllipsisHorizontalIcon, InfiniteIcon } from "@/shared/assets/icons"
import { Search } from "@/shared/ui-kit"
import { useCatalogDispatch, useCatalogSelector } from "../../store/hooks"
import { changeViewTypeReduce } from "../../store/slice/catalog-slice"

export const TopPanel = () => {

    const dispatch = useCatalogDispatch()
    const { viewType } = useCatalogSelector(state => state.catalog)


    return (
        <>
            <div className=" mb-[30px] p-3 theme-mode-content h-[60px] flex justify-end" >
                {/* <Search /> */}
                <div className="flex items-center gap-4">
                    <button
                        title="infinity items"
                        data-active={Number(viewType === "infinity")}
                        className="p-1 btn-w-them-bg"
                        onClick={() => dispatch(changeViewTypeReduce({ viewType: "infinity" }))}
                    >
                        <InfiniteIcon className="w-[25px] h-[25px]" />
                    </button>
                    <button
                        title="pagination items"
                        data-active={Number(viewType === "pagination")}
                        className="p-1 btn-w-them-bg"
                        onClick={() => dispatch(changeViewTypeReduce({ viewType: "pagination" }))}
                    >
                        <EllipsisHorizontalIcon className="w-[25px] h-[25px]" />
                    </button>
                </div>
            </div>
        </>
    )
}