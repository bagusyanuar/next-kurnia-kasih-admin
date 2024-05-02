'use client'

import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import Card from '@/components/card/card'
import ImageQuestion from '@/public/assets/question.svg'
import ImageRemove from '@/public/assets/remove.svg'
import { ColorPallete } from '@/components/color'
import { FontSize } from '@/components/font'

const Backdrop = styled.div<{$open: boolean}>`
    display: ${({ $open }) => $open ? 'flex' : 'none'};
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(2px);
    z-index: 100;
`

const ModalContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ModalContent = styled(Card)`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    position: absolute;
    top: 45%;
    transform: translate(0, -50%);
    opacity: 0;
    transition: opacity 200ms ease-in-out, top 200ms ease-in-out, visibility 200ms linear;

    &.open {
        visibility: visible;
        opacity: 1;
        top: 50%;
        transform: translate(0, -50%);
    }

    img {
        width: 150px;
        height: auto;
        margin-bottom: 1.5rem;
    }
`

const ModalTitle = styled.p`
    width: 100%;
    text-align: center;
    color: ${ColorPallete.darkTint.tint20};
    font-size: ${FontSize.large};
    font-weight: 600;
`

const ModalText = styled.p`
    width: 100%;
    text-align: center;
    color: ${ColorPallete.darkTint.tint20};
    font-size: 0.9em;
    margin-bottom: 1.5rem;
`

const ActionWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
`

// const ButtonAccept = styled(Button)`
//     font-size: 0.7em;
//     i{
//         font-size: 1.5em;
//         margin-right: 0.15rem;
//     }
// `

// const ButtonDenied = styled(ButtonOutlineDanger)`
//     font-size: 0.7em;
//     i{
//         font-size: 1.5em;
//         margin-right: 0.15rem;
//     }
// `
const ModalConfirmation = () => {
  return (
    <div>ModalConfirmation</div>
  )
}

export default ModalConfirmation