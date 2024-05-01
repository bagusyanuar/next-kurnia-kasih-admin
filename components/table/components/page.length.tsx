'use client'

import { ColorPallete } from '@/components/color'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    align-items: center;

    span {
        font-size: 0.8em;
        color: ${ColorPallete.dark};
    }

    select {
        cursor: pointer;
        padding: 0.25rem 0.75rem;
        border-width: 1px;
        border-radius: 0.375rem;
        font-size: 0.8em;
        color: ${ColorPallete.dark};
        background-color: inherit;

        &:focus {
            outline: none;
        }
        option {
            background-color: white;
            color: ${ColorPallete.dark};
        }
    }
`

interface IProps {
    length: Array<number>
    value: number
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
    className?: string
}

const PageLength: React.FC<IProps> = ({
    length,
    value,
    onChange,
    className = ''
}) => {
    return (
        <Container className={className}>
            <span className='me-2'>Show :</span>
            <select onChange={onChange} defaultValue={value}>
                {
                    length.map((v, i) => {
                        return (
                            <option key={i} value={v}>{v}</option>
                        )
                    })
                }
            </select>
            <span className='ms-2'>Entries</span>
        </Container>
    )
}

export default PageLength