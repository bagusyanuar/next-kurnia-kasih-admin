'use client'

import React from 'react'
import styled from 'styled-components'
import { ColorPallete } from '@/components/color'

const StyledButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${ColorPallete.primary};
    color: whitesmoke;
    padding: 0.5rem 1rem;
    font-size: 0.8em;
    border-radius: 5px;
    transition: all ease-in-out 200ms;

    &:hover {
        background-color: ${ColorPallete.primaryShades.shade20};
    }
`

interface IProps {
    children: React.ReactNode
    className?: string
    onClick?: () => void
}

const Button: React.FC<IProps> = ({
    children,
    onClick = () => { },
    className = ''
}) => {
    return (
        <StyledButton
            className={className}
            onClick={onClick}
        >
            children
        </StyledButton>
    )
}

export default Button