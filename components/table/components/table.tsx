'use client'

import React from 'react'
import styled from 'styled-components'

const Container = styled.table<{ $scroll: boolean }>`
    ${({ $scroll }) => $scroll ? '' : 'width: 100%;'}
    background: transparent;
`

interface IProps {
    children: React.ReactNode
    scroll?: boolean
    className?: string
}

const Table: React.FC<IProps> = ({
    children,
    scroll = false,
    className = ''
}) => {
    return (
        <Container $scroll={scroll} className={className}>
            {children}
        </Container>
    )
}

export default Table