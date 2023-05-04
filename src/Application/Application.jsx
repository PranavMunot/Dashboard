import { Grid } from '@mui/material'
import Navigation from '../Components/Navigation/Navigation'


function Application() {
    return (
        <Grid container sx={{ height: '100%', width: '100%' }}>
            <Grid item lg={'250px'} >
                {/* Navigation Section */}
                <Navigation />
            </Grid>
            <Grid item lg={7} >
                {/* Referal section */}
            </Grid>
            <Grid item lg={3} >
                {/* Sidebar section */}
            </Grid>

        </Grid>
    )
}

export default Application