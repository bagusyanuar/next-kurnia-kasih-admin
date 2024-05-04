import MainContainer from '@/components/container/content.container'
import Content from '@/components/container/card.container'
import Divider from '@/components/divider'
import TitleSection from './section/title'
import HeaderSection from './section/header'
import FormSection from './section/form'

export default function UpdateMotorbikeCategoryPage() {
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