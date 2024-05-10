import { Category } from '@/model/category'
import { TPagination, InitialPagination } from '@/lib/redux'

export type TEntity = {
    ID: string
    Name: string
    Thumbnail: string | null
    IsMainProduct: boolean
}

const defaultEntity: TEntity = {
    ID: '',
    Name: '',
    Thumbnail: null,
    IsMainProduct: false,
}

export type TState = {
    Pagination: TPagination
    Categories: Array<Category>
    Category: Category | null
    Entity: TEntity
    OnDataFetching: boolean
    OnConfirmation: boolean
    OnSaving: boolean
}

const initialState: TState = {
    Pagination: InitialPagination,
    Categories: [],
    Category: null,
    Entity: defaultEntity,
    OnDataFetching: true,
    OnConfirmation: false,
    OnSaving: false
}

export default initialState