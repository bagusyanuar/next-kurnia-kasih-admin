'use client'

import React from 'react'
import styled from 'styled-components'
import { FontSize } from '@/components/font'
import { ColorPallete } from '@/components/color'

interface IProps {
    htmlFor?: string
    children?: React.ReactNode
    className?: string
}

const StyledLabel = styled.label`
    display: flex;
    font-size: ${FontSize.normal};
    color: ${ColorPallete.dark};
    margin-bottom: 0.25rem;
`
const InputLabel: React.FC<IProps> = ({
    htmlFor,
    children,
    className = ''
}) => {
    return (
        <StyledLabel htmlFor={htmlFor} className={className}>
            {children}
        </StyledLabel>
    )
}

export default InputLabel