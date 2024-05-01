'use client'

import React from 'react'
import styled from 'styled-components'

const Container = styled.tbody`
    background-color: inherit;
    width: 100%;
`

interface IProps {
    children: React.ReactNode
    className?: string
}

const TBody: React.FC<IProps> = ({
    children,
    className = ''
}) => {
    return (
        <Container className={className}>
            {children}
        </Container>
    )
}

export default TBody