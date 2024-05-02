'use client'

import React from 'react'
import Card from '@/components/card/card'
import styled from 'styled-components'

const StyledCard = styled(Card)`
    width: 100%;
`

interface IProps {
    children: React.ReactNode
}

const Container: React.FC<IProps> = ({ children }) => {
    return (
        <StyledCard>{children}</StyledCard>
    )
}

export default Container