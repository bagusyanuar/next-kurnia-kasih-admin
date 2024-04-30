'use client'

import React from 'react'
import styled from 'styled-components'



interface IProps {
    children: React.ReactNode
}


const StyledContainer = styled.div`
    padding-left: calc(250px + 1rem);
    padding-top: 1rem;
    padding-right: 1rem;
    padding-bottom: 1rem;
    height: 100vh;
    width: 100%;
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