'use client'

import React, { useEffect, useState, useCallback } from 'react'
import styled from 'styled-components'
import TableContent from './components/table'
import PageLength from './components/page.length'
import Pagination from './components/pagination'
import Header from './header'
import Body from './body'
import type { TColumn, HeaderSort, TSortOption } from './util'

const Container = styled.div`
    width: 100%;
`
const ExtensionContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
`

const TableContainer = styled.div`
    width: 100%;
    overflow-x: auto;
`

interface IProps<T> {
    columns: Array<TColumn<T>>
    data: Array<T>
    pageLength: Array<number>
    perPage: number
    page: number
    totalPage: number
    totalRows: number
    onPageChange: (page: number) => void
    onPerpageChange: (perPage: number) => void
    onProcess?: boolean
    onSort?: (key: string, direction: TSortOption) => void
    loadingComponent?: React.ReactNode
    scrollX?: boolean
    className?: string
}

const Table = <T,>({
    columns,
    data,
    pageLength,
    perPage,
    page,
    totalPage,
    totalRows,
    onPageChange,
    onPerpageChange,
    onProcess = false,
    onSort,
    loadingComponent = <div></div>,
    scrollX = false,
    className = ''
}: IProps<T>) => {
    const [columnSort, setColumnSort] = useState<Array<HeaderSort>>([])

    const initState = useCallback(() => {
        let cSort: Array<HeaderSort> = []
        columns.forEach((v) => {
            if (v.sort) {
                cSort.push({
                    key: v.title,
                    defaultDirection: 'desc',
                })
            }
        })
        setColumnSort(cSort)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        initState()
        return () => { }
    }, [initState])

    const onColumnSort = (key: string, direction: TSortOption) => {
        console.log(key, direction);

        let headerSort: Array<HeaderSort> = [...columnSort]
        const index: number = headerSort.findIndex((e) => e.key === key)
        headerSort[index].defaultDirection = direction
        setColumnSort(headerSort)
        if (onSort) {
            onSort(key, direction)
        }
    }

    const handleChangePerPage = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const perPage: number = parseInt(e.currentTarget.value)
        if (onPerpageChange) {
            onPerpageChange(perPage)
        }
    }

    return (
        <Container className={className}>
            <ExtensionContainer>
                <PageLength
                    length={pageLength}
                    value={perPage}
                    onChange={handleChangePerPage}
                />
            </ExtensionContainer>
            <TableContainer>
                <TableContent scroll={scrollX}>
                    <Header
                        columns={columns}
                        columnSort={columnSort}
                        onColumnSort={onColumnSort}
                        scroll={scrollX}
                    />
                    <Body
                        columns={columns}
                        data={data}
                    />
                </TableContent>
            </TableContainer>
            <Pagination
                page={page}
                totalPage={totalPage}
                totalRows={totalRows}
                onPageChange={onPageChange}
            />
        </Container>
    )
}

export default Table