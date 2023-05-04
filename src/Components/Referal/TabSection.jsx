import { Box, Tabs, Tab, Typography } from '@mui/material'
import { useState } from 'react'
import DataTable from './DataTable'

function TabSection() {

    const [currentTabIndex, setCurrentTabIndex] = useState(0)

    return (
        <Box sx={{ mt: 2.5 }}>
            <Tabs variant="standard" value={currentTabIndex} onChange={(evt, newSelection) => { setCurrentTabIndex(newSelection) }}>
                <Tab sx={{ mx: 1, pb: 0 }} label={
                    <Typography sx={{ textTransform: 'none', color: `${currentTabIndex === 0 ? 'text.primary' : 'text.secondary'}` }}>
                        First Tab
                    </Typography>
                } />
                <Tab sx={{ pb: 0, mx: 1 }} label={
                    <Typography sx={{ textTransform: 'none', color: `${currentTabIndex !== 0 ? 'text.primary' : 'text.secondary'}` }}>
                        Second Tab
                    </Typography>
                } />
            </Tabs>

            <DataTable />

        </Box>
    )
}

export default TabSection