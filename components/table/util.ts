export type TSortOption = 'asc' | 'desc'
export type TAlignOption = 'left' | 'center' | 'right'

export type TSORT = {
    key: string,
    defaultDirection: TSortOption
    onSort: (key: string, direction: TSortOption) => void
}

export type HeaderSort = {
    key: string,
    defaultDirection: TSortOption
}

export type TSearch = {
    value: string
    onSearch: (value: string) => void
    placeholder?: string
}

export interface TColumn<T> {
    title: string
    selector?: (row: T, index: number) => any
    align?: TAlignOption
    width?: string
    sort?: boolean
}

export interface ITableHeaderProps<T> {
    columns: Array<TColumn<T>>
    columnSort: Array<HeaderSort>
    onColumnSort?: (key: string, direction: TSortOption) => void
    scroll?: boolean
}

export interface ITableBodyProps<T> {
    columns: Array<TColumn<T>>
    data: Array<T>
}