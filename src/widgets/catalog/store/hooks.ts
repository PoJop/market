import { useSelector } from "react-redux"
import { TypedUseSelectorHook, useDispatch } from "react-redux"
import { AppDispatch, AppState } from "./store"

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useCatalogDispatch = () => useDispatch<AppDispatch>()

export const useCatalogSelector: TypedUseSelectorHook<AppState> = useSelector