'use client'

import React from 'react'
import styled from 'styled-components'
import { ColorPallete } from '@/components/color'

const StyledContainer = styled.main`
    height: 100vh;
    width: 100%;
    background-color: ${ColorPallete.lightTint.tint80};
    display: flex;
    align-items: center;
    justify-content: center;
`

const Container = () => {
  return (
    <StyledContainer>
      {/* <Card></Card> */}
    </StyledContainer>
  )
}

export default Container