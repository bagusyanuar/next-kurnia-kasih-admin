'use client'

import React from 'react'
import styled from 'styled-components'
import { ColorPallete } from '../color'

const StyledText = styled.p`
    color: ${ColorPallete.darkTint.tint20};
    font-size: 1em;
    font-weight: 600;
`
interface IProps {
    text: string
    className?: string
}

const ContentTitle: React.FC<IProps> = ({
    text,
    className = ''
}) => {
    return (
        <StyledText className={className}>{text}</StyledText>
    )
}

export default ContentTitle