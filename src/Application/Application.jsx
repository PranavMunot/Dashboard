import { Grid } from '@mui/material'
import Navigation from '../Components/Navigation/Navigation'
import ReferalSection from '../Components/Referal/ReferalSection'
import Sidebar from '../Components/Sidebar/Sidebar'


const MUI_CSS_Handlers = {
    rightDivider: {
        borderRight: '2px solid', borderColor: 'secondary.main',
        height: '100%'
    },
}


function Application() {
    return (
        <Grid container sx={{ height: '96vh', width: '100%' }}>
            <Grid item lg sx={MUI_CSS_Handlers.rightDivider} >
                <Navigation />
            </Grid>
            <Grid item lg={7} sx={MUI_CSS_Handlers.rightDivider}>

                {/* Referal section */}
                <ReferalSection />
            </Grid>
            <Grid item lg={3} >

                {/* Sidebar section */}
                <Sidebar />
            </Grid>

        </Grid>
    )
}

export default Application