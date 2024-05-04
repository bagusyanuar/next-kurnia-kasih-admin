'use client'

import React from 'react'
import ContentTitle from '@/components/typography/content.title'
import ContentSubTitle from '@/components/typography/content.sub.title'
import styled from 'styled-components'

const Container = styled.div`
    margin-bottom: 1rem;
`

const Title = () => {
    return (
        <Container>
            <ContentTitle text='Update Motorbike Category' />
            <ContentSubTitle text='Update data motorbike category' />
        </Container>
    )
}

export default Title