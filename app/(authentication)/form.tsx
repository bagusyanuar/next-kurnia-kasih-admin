'use client'

import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import Card from '@/components/card/card'
import InputText from '@/components/input/text/group/text.icon'
import InputPassword from '@/components/input/password/group/password.icon'
import ButtonLoading from '@/components/button/button.loading'
import VerticalLogo from '@/public/assets/vertical-logo.png'

//redux import
import {
  LoginState,
  SetUsername,
  SetPassword
} from '@/redux/login/slice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'

const Container = styled(Card)`
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    img {
        width: 120px;
        height: auto;
        margin-bottom: 1.5rem;
    }
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 100%;
  gap: 0.75rem;
`

const Button = styled(ButtonLoading)`
    width: 100%;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
`

const Form: React.FC = () => {
  const StateLogin = useAppSelector(LoginState)
  const dispatch = useAppDispatch()

  const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(SetUsername(e.currentTarget.value))
  }

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(SetPassword(e.currentTarget.value))
  }

  return (
    <Container>
      <Image src={VerticalLogo} alt='img-logo' priority />
      <InputContainer>
        <InputText
          value={StateLogin.Username}
          icon='bx bx-envelope'
          validator=''
          placeholder='email'
          onChange={onChangeUsername}
        />
        <InputPassword
          value={StateLogin.Password}
          onChange={onChangePassword}
          icon='bx bx-lock-alt'
          placeholder='password'
          validator=''
          withShowPassword
        />
        <Button onLoading={false}>
          <span>Login</span>
        </Button>
      </InputContainer>
    </Container>
  )
}

export default Form