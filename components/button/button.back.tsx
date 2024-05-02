'use client'

import React from 'react'
import styled from 'styled-components'
import { ColorPallete } from '@/components/color'

const Container = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover {
        color: ${ColorPallete.dark};
    }

    i {
        font-size: 1.25em;
        line-height: 0;
        color: ${ColorPallete.darkTint.tint20};
    }
`

interface IProps {
    onClick: () => void
    className?: string
}

const ButtonBack: React.FC<IProps> = ({
    onClick,
    className = ''
}) => {
    return (
        <Container className={className} onClick={onClick}>
            <i className="ri-arrow-left-line"></i>
        </Container>
    )
}

export default ButtonBack

