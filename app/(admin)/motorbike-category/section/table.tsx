'use client'

import React, { useCallback, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import styled from 'styled-components'
import { ToastContainer } from 'react-toastify';
import Datatable from '@/components/table/table'
import TableAction from '@/components/table/action'
import type { TColumn } from '@/components/table/util'
import type { MotorbikeCategory } from '@/model/motorbike.category'
import ModalConfirmation from '@/components/modal/modal.confirmation'
import { showToast, ToastContent } from '@/components/toast'
import { APIResponse } from '@/lib/util'

import {
    MotorbikeCategoriesState,
    SetConfirmation,
    SetEntity
} from '@/redux/motorbike-category/slice'
import { FindAll, Delete } from '@/redux/motorbike-category/action'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'

const Container = styled.div`
    width: 100%;
`
const Table: React.FC = () => {
    const StateMotorbikeCategory = useAppSelector(MotorbikeCategoriesState)
    const dispatch = useAppDispatch()
    const router = useRouter()

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
        },
        {
            title: 'Action',
            selector: (row, index) => {
                const id: string = row.ID
                return <TableAction
                    onEdit={() => {
                        router.push(`/motorbike-category/${id}`)
                    }}
                    onDelete={() => {
                        dispatch(SetEntity({
                            key: 'ID',
                            value: id
                        }))
                        dispatch(SetConfirmation(true))
                    }}
                />
            },
            align: 'center',
            width: '10rem'
        }
    ]

    const onDelete = () => {
        dispatch(Delete()).then(response => {
            const payload: APIResponse = response.payload as APIResponse
            switch (payload.code) {
                case 200:
                    showToast(<ToastContent theme='success' text={payload.message} />,
                        {
                            timeToClose: 2000,
                        })
                    break;
                default:
                    showToast(<ToastContent theme='error' text={payload.message} />,
                        {
                            timeToClose: 2000,
                        })
                    break;
            }
        })
    }

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
            <ModalConfirmation
                type='delete'
                open={StateMotorbikeCategory.OnConfirmation}
                onAccept={() => { onDelete() }}
                onDenied={() => {
                    dispatch(SetConfirmation(false))
                }}
                text='Are you sure to delete category?'
            />
            <ToastContainer
                hideProgressBar
            />
        </Container>
    )
}

export default Table