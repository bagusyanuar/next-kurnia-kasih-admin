'use client'

import React from 'react'
import styled from 'styled-components'
import { ColorPallete } from '../color'

const Container = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
`

const ButtonEdit = styled.a`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;
    border-radius: 4px;
    color: ${ColorPallete.dark};
    background-color: ${ColorPallete.warning};
    transition: all ease-in-out 200ms;

    &:hover {
        background-color: ${ColorPallete.warningShades.shade20};
    }
`

const ButtonDelete = styled.a`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;
    border-radius: 4px;
    color: whitesmoke;
    background-color: ${ColorPallete.danger};
    transition: all ease-in-out 200ms;

    &:hover {
        background-color: ${ColorPallete.dangerShades.shade20};
    }
`

interface IProps {
    onEdit: () => void
    onDelete: () => void
    className?: string
}
const TableAction: React.FC<IProps> = ({
    onEdit,
    onDelete,
    className = ''
}) => {

    const handleEdit = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault()
        onEdit()
    }

    const handleDelete = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault()
        onDelete()
    }

    return (
        <Container className={className}>
            <ButtonEdit href='#' onClick={handleEdit}>
                <i className="ri-edit-2-line"></i>
            </ButtonEdit>
            <ButtonDelete href='#' onClick={handleDelete}>
                <i className="ri-delete-bin-line"></i>
            </ButtonDelete>
        </Container>
    )
}

export default TableAction