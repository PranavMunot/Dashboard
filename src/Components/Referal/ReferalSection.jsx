import { Box } from '@mui/material'
import ReferalHeading from './ReferalHeading'
import ClosableCard from './ClosableCard'
import RewardCard from './RewardCard'
import TabSection from './TabSection'


function ReferalSection() {
    return (
        <Box sx={{
            mx: 3,
            p: 2,
            mb: 0,
            height: '100%',
            overflow: 'hidden auto'
        }}>
            {/* section heading */}
            <ReferalHeading />
            <ClosableCard />
            <RewardCard />
            <TabSection />
        </Box>
    )
}

export default ReferalSection