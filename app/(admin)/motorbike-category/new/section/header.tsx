'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import ContentTitle from '@/components/typography/content.title'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    
`

const Header: React.FC = () => {
    return (
        <Container>
            <ContentTitle text='Form Motorbike Category' />
        </Container>
    )
}

export default Header