'use client'

import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { ColorPallete } from '@/components/color'
import { FontSize } from '@/components/font'

const Container = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    width: 100%;
    color: ${ColorPallete.darkTint.tint20};
    transition: background-color ease-in-out 200ms, color ease-in-out 250ms;
    border-radius: 10px;
    padding: 0.75rem 0.75rem;
    font-size: ${FontSize.large};

    &:hover {
        background-color: ${ColorPallete.primary};
        color: white;
    }

    &.active {
        background-color: ${ColorPallete.primary};
        color: white;
    }

    i {
        margin-right: 1rem;
    }

    span {
        font-weight: 500;
        line-height: 1px;
    }
`

interface IProps {
    to: string
    text: string
    icon: string
    className?: string
}

const SidebarItem: React.FC<IProps> = ({
    to,
    icon,
    text,
    className = ''
}) => {
    return (
        <Container href={to} className={className}>
            <i className={icon}></i>
            <span>{text}</span>
        </Container>
    )
}

export default SidebarItem