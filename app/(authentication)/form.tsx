'use client'

import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { ToastContainer } from 'react-toastify';
import Card from '@/components/card/card'
import InputText from '@/components/input/text/group/text.icon'
import InputPassword from '@/components/input/password/group/password.icon'
import ButtonLoading from '@/components/button/button.loading'
import VerticalLogo from '@/public/assets/vertical-logo.png'

//redux import
import {
  LoginState,
  SetEmail,
  SetPassword
} from '@/redux/login/slice'
import { submit } from '@/redux/login/action'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { APIResponse } from '@/lib/util'
import { showToast, ToastContent } from '@/components/toast'

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

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(SetEmail(e.currentTarget.value))
  }

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(SetPassword(e.currentTarget.value))
  }

  const onSubmit = () => {
    dispatch(submit()).then(response => {
      const payload: APIResponse = response.payload as APIResponse
      switch (payload.code) {
        case 200:
          showToast(<ToastContent theme='success' text={payload.message} />,
            {
              timeToClose: 2000,
            })
          break;
        default:
          showToast(<ToastContent theme='error' text={payload.message} />,
            {
              timeToClose: 2000,
            })
          break;
      }

      console.log(payload);
    })
  }

  return (
    <Container>
      <Image src={VerticalLogo} alt='img-logo' priority />
      <InputContainer>
        <InputText
          value={StateLogin.Email}
          icon='bx bx-envelope'
          validator=''
          placeholder='email'
          onChange={onChangeEmail}
        />
        <InputPassword
          value={StateLogin.Password}
          onChange={onChangePassword}
          icon='bx bx-lock-alt'
          placeholder='password'
          validator=''
          withShowPassword
        />
        <Button
          onLoading={StateLogin.LoadingLogin}
          onClick={onSubmit}
        >
          <span>Login</span>
        </Button>
      </InputContainer>
      <ToastContainer
        hideProgressBar
      />
    </Container>
  )
}

export default Form