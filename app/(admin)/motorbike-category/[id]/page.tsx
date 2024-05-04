import MainContainer from '@/components/container/content.container'
import Content from '@/components/container/card.container'
import Divider from '@/components/divider'
import TitleSection from './section/title'
import HeaderSection from './section/header'
import FormSection from './section/form'
import axios from 'axios'

export default async function UpdateMotorbikeCategoryPage({ params }: { params: { id: string } }) {
    const id: string = params.id
    const response = await axios.get(`http://localhost:3000/api/motorbike-category/${id}`)
    console.log(response);
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