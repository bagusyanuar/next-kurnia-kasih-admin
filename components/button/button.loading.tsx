'use client'

import React from 'react'
import styled from 'styled-components'
import { ColorPallete } from '../color'

const Spinner = () => {
    return (
        <div role="status" className='me-2'>
            <svg
                aria-hidden="true"
                className="w-4 h-4 text-gray-200 animate-spin fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
            </svg>
            <span className="sr-only">Loading...</span>
        </div>
    )
}

const StyledButton = styled.button<{ $theme: TTheme, $fill: TFill }>`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ $theme, $fill }) => generateColor($theme, $fill).background};
    color: whitesmoke;
    padding: 0.4rem 0.6rem;
    font-size: 0.8em;
    border-radius: 5px;
    transition: all ease-in-out 200ms;
    border: 1px solid ${({ $theme, $fill }) => generateColor($theme, $fill).border};

    &:hover {
        background-color: ${({ $theme, $fill }) => generateColor($theme, $fill).hoverBackground};
        color: ${({ $theme, $fill }) => generateColor($theme, $fill).hoverColor};
    }
`

type TBackground = {
    background: string
    hoverBackground: string
    border: string
    color: string
    hoverColor: string
}

const generateColor = ($theme: TTheme, $fill: TFill): TBackground => {
    let background: TBackground = {
        background: ColorPallete.primary,
        hoverBackground: ColorPallete.primaryShades.shade20,
        border: ColorPallete.primary,
        color: 'white',
        hoverColor: 'white'
    }

    if ($fill === 'outline') {
        background = {
            background: 'white',
            hoverBackground: ColorPallete.primary,
            border: ColorPallete.primary,
            color: ColorPallete.primary,
            hoverColor: ColorPallete.primary
        }
    }
    switch ($theme) {
        case 'accent':
            if ($fill === 'outline') {
                background = {
                    background: 'white',
                    hoverBackground: ColorPallete.accent,
                    border: ColorPallete.accent,
                    color: ColorPallete.accent,
                    hoverColor: ColorPallete.accent
                }
            } else {
                background = {
                    background: ColorPallete.accent,
                    hoverBackground: ColorPallete.accentShades.shade20,
                    border: ColorPallete.accent,
                    color: 'white',
                    hoverColor: 'white'
                }
            }
            break;
        case 'danger':
            if ($fill === 'outline') {
                background = {
                    background: 'white',
                    hoverBackground: ColorPallete.danger,
                    border: ColorPallete.primary,
                    color: ColorPallete.primary,
                    hoverColor: ColorPallete.primary
                }
            } else {
                background = {
                    background: ColorPallete.danger,
                    hoverBackground: ColorPallete.dangerShades.shade20,
                    border: ColorPallete.danger,
                    color: 'white',
                    hoverColor: 'white'
                }
            }
            break;
        case 'success':
            if ($fill === 'outline') {
                background = {
                    background: 'white',
                    hoverBackground: ColorPallete.success,
                    border: ColorPallete.success,
                    color: ColorPallete.success,
                    hoverColor: ColorPallete.success
                }
            } else {
                background = {
                    background: ColorPallete.success,
                    hoverBackground: ColorPallete.successShades.shade20,
                    border: ColorPallete.success,
                    color: 'white',
                    hoverColor: 'white'
                }
            }
            break;
        case 'info':
            if ($fill === 'outline') {
                background = {
                    background: 'white',
                    hoverBackground: ColorPallete.info,
                    border: ColorPallete.info,
                    color: ColorPallete.info,
                    hoverColor: ColorPallete.info
                }
            } else {
                background = {
                    background: ColorPallete.info,
                    hoverBackground: ColorPallete.infoShades.shade20,
                    border: ColorPallete.info,
                    color: 'white',
                    hoverColor: 'white'
                }
            }
            break;
        case 'warning':
            if ($fill === 'outline') {
                background = {
                    background: 'white',
                    hoverBackground: ColorPallete.warning,
                    border: ColorPallete.warning,
                    color: ColorPallete.warning,
                    hoverColor: ColorPallete.warning
                }
            } else {
                background = {
                    background: ColorPallete.warning,
                    hoverBackground: ColorPallete.warningShades.shade20,
                    border: ColorPallete.warning,
                    color: 'white',
                    hoverColor: 'white'
                }
            }
            break;
        default:
            break;
    }
    return background
}

type TTheme = 'primary' | 'accent' | 'info' | 'success' | 'warning' | 'danger'
type TFill = 'fill' | 'outline'

interface IProps {
    children: React.ReactNode
    onLoading: boolean
    type?: TTheme
    fill?: TFill
    className?: string
    onClick?: () => void
}

const ButtonLoading: React.FC<IProps> = ({
    children,
    onLoading,
    type = 'primary',
    fill = 'fill',
    onClick = () => { },
    className = ''
}) => {
  return (
    <StyledButton
            disabled={onLoading}
            className={className}
            onClick={onClick}
            $theme={type}
            $fill={fill}
        >
            {
                onLoading ?
                    <>
                        <Spinner />
                        <span>loading...</span>
                    </>
                    :
                    children
            }
        </StyledButton>
  )
}

export default ButtonLoading