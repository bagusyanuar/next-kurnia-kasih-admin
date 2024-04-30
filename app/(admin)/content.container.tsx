'use client'

import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    min-height: calc(100vh - 60px);
`
interface IProps {
    children: React.ReactNode
}

const ContentContainer: React.FC<IProps> = ({
    children
}) => {
    return (
        <Container>{children}</Container>
    )
}

export default ContentContainer