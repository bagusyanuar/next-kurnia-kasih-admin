'use client'

import React, { useCallback, useEffect } from 'react'
import styled from 'styled-components'
import Datatable from '@/components/table/table'
import type { TColumn } from '@/components/table/util'
import type { MotorbikeCategory } from '@/model/motorbike.category'

import {
    MotorbikeCategoriesState,
} from '@/redux/motorbike-category/slice'
import { FindAll } from '@/redux/motorbike-category/action'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'

const Container = styled.div`
    width: 100%;
`
const Table: React.FC = () => {
    const StateMotorbikeCategory = useAppSelector(MotorbikeCategoriesState)
    const dispatch = useAppDispatch()

    const Columns: Array<TColumn<MotorbikeCategory>> = [
        {
            title: '#',
            selector: (row, index) => (index + 1),
            align: 'center',
            width: '5rem'
        },
        {
            title: 'Name',
            selector: (row) => row.Name,
            sort: true
        }
    ]

    const initialPage = useCallback(() => {
        dispatch(FindAll())
    }, [dispatch])

    useEffect(() => {
        initialPage()
        return () => { }
    }, [initialPage])

    return (
        <Container>
            <Datatable
                columns={Columns}
                data={StateMotorbikeCategory.MotorbikeCategories}
                pageLength={StateMotorbikeCategory.Pagination.PageLength}
                page={StateMotorbikeCategory.Pagination.Page}
                perPage={StateMotorbikeCategory.Pagination.PerPage}
                totalPage={StateMotorbikeCategory.Pagination.TotalPage}
                totalRows={StateMotorbikeCategory.Pagination.Rows}
                onProcess={StateMotorbikeCategory.OnDataFetching}
                onPageChange={(page) => { }}
                onPerpageChange={(perpage) => { }}
            />
        </Container>
    )
}

export default Table