'use client'

import { ColorPallete } from '@/components/color'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 60px;
    padding-left: 1rem;
    padding-right: 1rem;
    /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); */
    background-color: white;
    border-bottom: 1px solid ${ColorPallete.lightTint.tint40};
`

const Navbar = () => {
    return (
        <Container></Container>
    )
}

export default Navbar