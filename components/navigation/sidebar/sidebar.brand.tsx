'use client'

import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import HorizontalLogo from '@/public/assets/horizontal-logo.png'

const Container = styled.div`
    height: 80px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 120px;
        height: auto;
    }
`

const SidebarBrand = () => {
    return (
        <Container>
            <Image src={HorizontalLogo} alt='img-logo' priority />
        </Container>
    )
}

export default SidebarBrand