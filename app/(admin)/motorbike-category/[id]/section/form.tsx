'use client'

import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { ToastContainer } from 'react-toastify';
import Divider from '@/components/divider'
import InputText from '@/components/input/text/group/text'
import InputFile from '@/components/input/file/group/dropzone'
import Button from '@/components/button/button.save'
import ModalConfirmation from '@/components/modal/modal.confirmation'
import { showToast, ToastContent } from '@/components/toast'
import { APIResponse } from '@/lib/util'
//redux import
import {
  MotorbikeCategoriesState,
  SetEntity,
  SetConfirmation
} from '@/redux/motorbike-category/slice'
import { Create } from '@/redux/motorbike-category/action'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const ActionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`

const ButtonSave = styled(Button)`
    width: fit-content;
`

const Form: React.FC = () => {
  const StateMotorbikeCategory = useAppSelector(MotorbikeCategoriesState)
  const dispatch = useAppDispatch()

  const [thumbnail, setThumbnail] = useState<File | null>(null)

  const onReceiveFiles = (files: File[]) => {
    if (files.length > 0) {
      setThumbnail(files[0])
    } else {
      setThumbnail(null)
    }
  }

  const onChangeEntity = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(SetEntity({
      key: 'Name',
      value: e.currentTarget.value
    }))
  }

  const onSubmitEvent = () => {
    dispatch(SetConfirmation(true))
  }

  const onSubmit = () => {
    dispatch(Create({ thumbnail })).then(response => {
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
    })

  }

  return (
    <Container>
      <InputText
        value={StateMotorbikeCategory.Entity.Name}
        label='Name'
        required
        validator=''
        onChange={onChangeEntity}
      />
      <InputFile
        label='Thumbnail'
        onReceiveFiles={onReceiveFiles}
        multiple={false}
        maxSize={1000000}
      />
      <Divider />
      <ActionContainer>
        <ButtonSave onSave={StateMotorbikeCategory.OnSaving} onClick={onSubmitEvent} />
      </ActionContainer>
      <ModalConfirmation
        open={StateMotorbikeCategory.OnConfirmation}
        onAccept={() => { onSubmit() }}
        onDenied={() => {
          dispatch(SetConfirmation(false))
        }}
        text='Are you sure to create new category?'
      />
      <ToastContainer
        hideProgressBar
      />
    </Container>
  )
}

export default Form