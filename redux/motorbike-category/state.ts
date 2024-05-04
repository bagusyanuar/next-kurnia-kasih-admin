import { MotorbikeCategory } from '@/model/motorbike.category'
import { TPagination, InitialPagination } from '@/lib/redux'

type TEntity = {
    ID: string
    Name: string
}

const defaultEntity: TEntity = {
    ID: '',
    Name: '',
}

export type TState = {
    Pagination: TPagination
    MotorbikeCategories: Array<MotorbikeCategory>
    Entity: TEntity
    OnDataFetching: boolean
    OnConfirmation: boolean
    OnSaving: boolean
}

const initialState: TState = {
    Pagination: InitialPagination,
    MotorbikeCategories: [],
    Entity: defaultEntity,
    OnDataFetching: true,
    OnConfirmation: false,
    OnSaving: false
}

export default initialState