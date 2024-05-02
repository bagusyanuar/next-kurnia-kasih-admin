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
    padding: 0.4rem 0.6rem;
    font-size: 0.8em;
    border-radius: 5px;
    transition: all ease-in-out 200ms;

    i {
        margin-right: 0.25rem;
    }

    &:hover {
        background-color: ${ColorPallete.primaryShades.shade20};
    }
`

interface IProps {
    text: string
    className?: string
    onClick?: () => void
}

const ButtonADD: React.FC<IProps> = ({
    text,
    onClick = () => { },
    className = ''
}) => {
    return (
        <StyledButton
            className={className}
            onClick={onClick}
        >
            <i className="ri-add-line"></i>
            <span>{text}</span>
        </StyledButton>
    )
}

export default ButtonADD