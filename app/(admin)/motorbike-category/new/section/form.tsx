'use client'

import React from 'react'
import InputText from '@/components/input/text/group/text'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
const Form: React.FC = () => {
  return (
    <Container>
      <InputText 
        value=''
        label='Name'
        required
        validator=''
      />
    </Container>
  )
}

export default Form