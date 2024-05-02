'use client'

import React, { useState } from 'react'
import styled from 'styled-components'
import Divider from '@/components/divider'
import InputText from '@/components/input/text/group/text'
import InputFile from '@/components/input/file/group/dropzone'
import ButtonSave from '@/components/button/button.save'

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

const Form: React.FC = () => {
  const [icon, setIcon] = useState<File | null>(null)

  const onReceiveFiles = (files: File[]) => {
    if (files.length > 0) {
      setIcon(files[0])
    } else {
      setIcon(null)
    }
  }

  return (
    <Container>
      <InputText
        value=''
        label='Name'
        required
        validator=''
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
    </Container>
  )
}

export default Form