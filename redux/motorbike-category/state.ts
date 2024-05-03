import { MotorbikeCategory } from '@/model/motorbike.category'
import { TPagination, InitialPagination } from '@/lib/redux'

type TEntity = {
    Name: string
}

const defaultEntity: TEntity = {
    Name: ''
}

export type TState = {
    Pagination: TPagination
    MotorbikeCategories: Array<MotorbikeCategory>
    Entity: TEntity
    OnDataFetching: boolean
    OnConfirmation: boolean
}

const initialState: TState = {
    Pagination: InitialPagination,
    MotorbikeCategories: [],
    Entity: defaultEntity,
    OnDataFetching: true,
    OnConfirmation: false,
}

export default initialState