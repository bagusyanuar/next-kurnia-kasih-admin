'use client'

import React from 'react'
import styled from 'styled-components'
import { TAlignOption } from '../util'
import { ColorPallete } from '@/components/color'

const Container = styled.td`
  font-size: 0.8em;
  color: ${ColorPallete.dark};
  border-bottom: 1px solid ${ColorPallete.darkTint.tint80};
`
type TContainerContentProps = {
    $align?: TAlignOption
}

const ContainerContent = styled.div<TContainerContentProps>`
  width: 100%;
  text-align: ${({ $align }) => $align ? $align : 'left'};
  padding: 0.5rem 0.75rem;
`

interface IProps {
    children: React.ReactNode
    align?: TAlignOption
    className?: string
}

const TD: React.FC<IProps> = ({
    children,
    align = 'left',
    className = ''
}) => {
    return (
        <Container className={className}>
            <ContainerContent $align={align}>
                {children}
            </ContainerContent>
        </Container>
    )
}

export default TD

