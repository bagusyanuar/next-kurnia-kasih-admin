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
import { MotorbikeCategory, mapToMotorbikeCategory } from '@/model/motorbike.category'

export default async function UpdateMotorbikeCategoryPage({ params }: { params: { id: string } }) {
    const id: string = params.id
    let category: MotorbikeCategory = {
        ID: '',
        Name: ''
    }
    try {
        const response = await AxiosInternalAPI.get(`/motorbike-category/${id}`)
        const data: any = response.data.data
        category = mapToMotorbikeCategory(data)
        console.log(response.data);
    } catch (error: any | AxiosError) {
        if (axios.isAxiosError(error)) {

            return notFound()
        }
    }

    return (
        <MainContainer>
            <TitleSection />
            <Content>
                <HeaderSection />
                <Divider />
                <FormSection category={category} />
            </Content>
        </MainContainer>
    )
}