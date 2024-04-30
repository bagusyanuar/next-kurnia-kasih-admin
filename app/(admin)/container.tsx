'use client'

import { ColorPallete } from '@/components/color'
import React from 'react'
import styled from 'styled-components'



interface IProps {
    children: React.ReactNode
}


const StyledContainer = styled.div`
    padding-left: 250px;
    height: 100vh;
    width: 100%;
    background-color: ${ColorPallete.lightTint.tint80};
`

const ContentContainer = styled.div``
const Container: React.FC<IProps> = ({ children }) => {
    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    )
}

export default Container