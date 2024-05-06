import MainContainer from '@/components/container/content.container'
import Content from '@/components/container/card.container'
import Divider from '@/components/divider'
import TitleSection from './section/title'
import HeaderSection from './section/header'
import FormSection from './section/form'
import axios, { AxiosError } from 'axios'
import { APIResponse } from "@/lib/util"
import { ErrorParser, AxiosInternalAPI } from "@/lib/axios"
import { notFound, redirect } from 'next/navigation'

export default async function UpdateMotorbikeCategoryPage({ params }: { params: { id: string } }) {
    const id: string = params.id
    
    return notFound()
    try {
        const response = await AxiosInternalAPI.get(`/motorbike-category/${id}`)
        
        console.log(response.status);
    } catch (error: any | AxiosError) {
        if (axios.isAxiosError(error)) {
            
            return
        }
    }



    return (
        <MainContainer>
            <TitleSection />
            <Content>
                <HeaderSection />
                <Divider />
                <FormSection />
            </Content>
        </MainContainer>
    )
}