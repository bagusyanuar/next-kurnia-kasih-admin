'use client'

import React from 'react'
import ContentTitle from '@/components/typography/content.title'
import ContentSubTitle from '@/components/typography/content.sub.title'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
`
const Header = () => {
    return (
        <Container>
            <ContentTitle text='Data Category' />
        </Container>
    )
}

export default Header