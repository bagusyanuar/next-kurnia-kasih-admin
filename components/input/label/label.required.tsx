'use client'

import { ColorPallete } from '@/components/color'
import { FontSize } from '@/components/font'
import React from 'react'
import styled from 'styled-components'

const StyledLabel = styled.label`
    display: flex;
    font-size: ${FontSize.normal};
    color: ${ColorPallete.darkTint.tint20};
    margin-bottom:  0.25rem;

    .mark {
        margin-left: 0.25rem;
        color: ${ColorPallete.danger};
    }
`

interface IProps {
    htmlFor?: string
    children?: React.ReactNode
    className?: string
}

const InputLabelRequired: React.FC<IProps> = ({
    htmlFor,
    children,
    className = ''
}) => {
    return (
        <StyledLabel htmlFor={htmlFor} className={className}>
            {children}
            <span className='mark'>(*)</span>
        </StyledLabel>
    )
}

export default InputLabelRequired