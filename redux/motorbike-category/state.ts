import { MotorbikeCategory } from '@/model/motorbike.category'
import { TPagination, InitialPagination } from '@/lib/redux'

export type TState = {
    Pagination: TPagination
    OnDataFetching: boolean
    MotorbikeCategories: Array<MotorbikeCategory>
}

const initialState: TState = {
    Pagination: InitialPagination,
    OnDataFetching: true,
    MotorbikeCategories: []
}

export default initialState