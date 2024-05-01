'use client'

import { ColorPallete } from '@/components/color'
import React from 'react'
import styled from 'styled-components'

const Container = styled.thead`
    border-bottom: 1px solid ${ColorPallete.darkTint.tint80};
    border-top: 1px solid ${ColorPallete.darkTint.tint80};
`

interface IProps {
    children: React.ReactNode
    className?: string
}

const Thead: React.FC<IProps> = ({
    children,
    className = ''
}) => {
    return (
        <Container className={className}>
            {children}
        </Container>
    )
}

export default Thead

