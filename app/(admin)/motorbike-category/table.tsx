'use client'

import React from 'react'
import Datatable from '@/components/table/table'
import type { TColumn } from '@/components/table/util'
import type { MotorbikeCategory } from '@/model/motorbike.category'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
`
const Table: React.FC = () => {
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
    return (
        <Container>
            <Datatable 
                columns={Columns}
                data={[]}
                onPageChange={(page) => {}}
                onPerpageChange={(perpage) => {}}
                page={1}
                pageLength={[5, 10, 25]}
                perPage={10}
                totalPage={10}
                totalRows={120}
            />
        </Container>
    )
}

export default Table