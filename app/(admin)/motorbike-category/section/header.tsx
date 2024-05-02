'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import ContentTitle from '@/components/typography/content.title'
import Button from '@/components/button/button.add'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    
`
const Header: React.FC = () => {
    const router = useRouter()
    return (
        <Container>
            <ContentTitle text='Data Category' />
            <Button
                text='New Category'
                onClick={() => { 
                    router.push('/motorbike-category/new')
                }} />
        </Container>
    )
}

export default Header