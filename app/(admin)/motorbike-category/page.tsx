import ContentTitle from '@/components/typography/content.title'
import ContentSubTitle from '@/components/typography/content.sub.title'
import Table from './table'

export default function MotorbikeCategoryPage() {
    return (
        <main>
            <ContentTitle text='Motorbike Category' />
            <ContentSubTitle text='Manage motorbike categories' />
            <Table />
        </main>
    )
}