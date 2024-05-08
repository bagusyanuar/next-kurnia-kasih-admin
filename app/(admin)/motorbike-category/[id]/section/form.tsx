'use client'

import React, { useState, useCallback, useEffect } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { ToastContainer } from 'react-toastify';
import Divider from '@/components/divider'
import Label from '@/components/input/label/label'
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
import { Update } from '@/redux/motorbike-category/action'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { MotorbikeCategory } from '@/model/motorbike.category';
import { ColorPallete } from '@/components/color';

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

const GridContainer = styled.div`
    width: 100%;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
`

const PreviewContainer = styled.div`
    width: 100%;
    min-height: 200px;
`

const ThumbnailContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-width: 2px;
    border-radius: 2px;
    border-style: dashed;
    background-color: #fafafa;
    color: #bdbdbd;
    outline: none;
    border-color: ${ColorPallete.light};
    min-height: 200px;
`

const InnerThumbnailContainer = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    border: 1px solid #eaeaea;
    width: 80px;
    height: 80px;
    padding: 4px;
    box-sizing: border-box;
    position: relative;
`

const Thumbnail = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 0;
    overflow: hidden;

    img {
        display: block;
        width: auto;
        height: 100%;
    }
`

interface IProps {
  category: MotorbikeCategory
}

const Form: React.FC<IProps> = ({ category }) => {
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
    dispatch(Update({ thumbnail })).then(response => {
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

  const initialPage = useCallback(() => {

    dispatch(SetEntity({
      key: 'Name',
      value: category.Name
    }))
    dispatch(SetEntity({
      key: 'ID',
      value: category.ID
    }))

  }, [category, dispatch])

  useEffect(() => {
    initialPage()
    return () => { }
  }, [initialPage])

  return (
    <Container>
      <InputText
        value={StateMotorbikeCategory.Entity.Name}
        label='Name'
        required
        validator=''
        onChange={onChangeEntity}
      />
      <GridContainer>
        <PreviewContainer>
          <Label>Current Thumbnail</Label>
          <ThumbnailContainer>
            <InnerThumbnailContainer>
              {
                category.Thumbnail ? <Image
                  alt='img-preview'
                  src={category.Thumbnail}
                  priority
                  width={76}
                  height={76}
                /> : <></>
              }

            </InnerThumbnailContainer>
          </ThumbnailContainer >
        </PreviewContainer>
        <InputFile
          label='Thumbnail'
          onReceiveFiles={onReceiveFiles}
          multiple={false}
          maxSize={1000000}
        />
      </GridContainer>

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