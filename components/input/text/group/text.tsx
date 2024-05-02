'use client'

import React, { useId } from 'react'
import styled from 'styled-components'
import Label from '@/components/input/label/label'
import LabelRequired from '@/components/input/label/label.required'
import { ColorPallete } from '@/components/color'

const StyledInput = styled.input`
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    padding-right: 0.75rem;
    padding-left: 0.5rem;
    width: 100%;
    font-size: 0.8em;
    border-radius: 5px;
    color: ${ColorPallete.dark};

    &:focus {
        outline: none;
    }

    &::placeholder {
        color: ${ColorPallete.light};
    }
`

const StyledErrorText = styled.span`
    font-size: 0.7em;
    padding: 2px 2px;
    color: ${ColorPallete.danger};
`

const InputContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid ${ColorPallete.light};
    border-radius: 5px;
    width: 100%;
    transition: all ease-in-out 200ms;
    
    &:focus-within {
        border-color: ${ColorPallete.lightShades.shade20};

    }
`

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

interface IProps {
    value: string
    validator: string
    id?: string
    name?: string
    label?: React.ReactNode
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    className?: string
    placeholder?: string
    required?: boolean
    disabled?: boolean
}

const InputGroupText: React.FC<IProps> = ({
    value,
    validator,
    id,
    name,
    label,
    onChange = (e) => { },
    className = '',
    placeholder = '',
    required = false,
    disabled = false
}) => {
    const inputID = `input-field-${useId()}`
    return (
        <Container className={className}>
            {
                label ?
                    (
                        required ?
                            <LabelRequired htmlFor={id || inputID}>{label}</LabelRequired>
                            : <Label htmlFor={id || inputID}>{label}</Label>
                    )
                    : <></>
            }
            <InputContainer>
                <StyledInput
                    type='text'
                    id={id || inputID}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    required={required}
                    disabled={disabled}
                />
            </InputContainer>
            {
                validator !== ''
                    ?
                    <StyledErrorText>{validator}</StyledErrorText>
                    :
                    <></>
            }
        </Container>
    )
}

export default InputGroupText