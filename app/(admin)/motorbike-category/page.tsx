import MainContainer from '@/components/container/content.container'
import Content from '@/components/container/card.container'
import Divider from '@/components/divider'
import TitleSection from './section/title'
import HeaderSection from './section/header'
import TableSection from './section/table'

export default function MotorbikeCategoryPage() {
    return (
        <MainContainer>
            <TitleSection />
            <Content>
                <HeaderSection />
                <Divider />
                <TableSection />
            </Content>
        </MainContainer>
    )
}