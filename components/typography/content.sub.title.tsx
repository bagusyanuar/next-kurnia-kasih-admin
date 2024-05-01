'use client'

import React from 'react'
import styled from 'styled-components'
import { ColorPallete } from '../color'

const StyledText = styled.p`
    line-height: 1;
    color: ${ColorPallete.darkTint.tint40};
    font-size: 1em;
`
interface IProps {
    text: string
    className?: string
}

const ContentSubTitle: React.FC<IProps> = ({
    text,
    className = ''
}) => {
    return (
        <StyledText className={className}>{text}</StyledText>
    )
}

export default ContentSubTitle