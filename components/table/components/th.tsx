'use client'

import React, { useState } from 'react'
import { TSORT, TSortOption, TAlignOption } from '../util'
import styled from 'styled-components'
import { ColorPallete } from '@/components/color'

type TContainerProps = {
    $width?: string
    $scroll?: boolean
}

const generateWidth = ({ $width, $scroll }: TContainerProps): string => {
    if ($width === undefined || $width === '') {
        return 'width: auto;'
    }
    if (!$scroll) {
        return `width: ${$width};`
    }
    return `min-width: ${$width};`
}


const Container = styled.th<TContainerProps>`
    font-size: 0.8em;
    font-weight: 600;
    color: ${ColorPallete.dark};
    ${generateWidth}
`

type TContainerContentProps = {
    $align?: TAlignOption
}

const ContainerContent = styled.div<TContainerContentProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;
  
    span {
        width: 100%;
        text-align: ${({ $align }) => $align ? $align : 'left'};
        padding: 0.5rem 0.75rem;
    }
`

interface IProps {
    children: React.ReactNode
    className?: string
    width?: string
    align?: TAlignOption
    sort?: TSORT
    scroll?: boolean
}

const TH: React.FC<IProps> = ({
    children,
    className = '',
    width,
    align = 'left',
    sort,
    scroll = false
}) => {

    const [direction, setDirection] = useState<TSortOption>(sort ? sort.defaultDirection : 'asc')

    const handleSort = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault()
        switch (direction) {
            case 'asc':
                if (sort) {
                    setDirection('desc')
                    sort.onSort(sort.key, 'desc')
                }
                break;
            case 'desc':
                if (sort) {
                    setDirection('asc')
                    sort.onSort(sort.key, 'asc')
                }
                break;
            default:
                break;
        }
    }

    return (
        <Container
            $width={width}
            $scroll={scroll}
            className={className}
        >
            <ContainerContent $align={align}>
                <span>{children}</span>
                {
                    sort !== undefined ? <a href='#' onClick={handleSort}>
                        <i className='bx bx-sort-alt-2'></i>
                    </a> : <></>
                }
            </ContainerContent>
        </Container>
    )
}

export default TH