'use client'

import React, { useState } from 'react'
import styled from 'styled-components'
import Divider from '@/components/divider'
import InputText from '@/components/input/text/group/text'
import InputFile from '@/components/input/file/group/dropzone'
import Button from '@/components/button/button.save'
import ModalConfirmation from '@/components/modal/modal.confirmation'

//redux import
import {
  MotorbikeCategoriesState,
  SetEntity,
  SetConfirmation
} from '@/redux/motorbike-category/slice'
// import { createNewCategory } from '@/redux/categories/action'
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

  const [icon, setIcon] = useState<File | null>(null)

  const onReceiveFiles = (files: File[]) => {
    if (files.length > 0) {
      setIcon(files[0])
    } else {
      setIcon(null)
    }
  }

  const onChangeEntity = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(SetEntity({
      key: 'Name',
      value: e.currentTarget.value
    }))
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
        <ButtonSave onSave={false} />
      </ActionContainer>
      <ModalConfirmation
        open={StateMotorbikeCategory.OnConfirmation}
        onAccept={() => { }}
        onDenied={() => { }}
        text='Are you sure to create new category?'
      />
    </Container>
  )
}

export default Form