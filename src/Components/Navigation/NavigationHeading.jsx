import { Avatar, Box, Typography } from '@mui/material'
import { poppinsFont } from '../../utils/Theme'
import { NavigationBackIcon } from '../../Assets/SVGIcons'


const MUI_CSS_Handlers = {
    navigation_heading: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
}

function NavigationHeading() {
    return (
        <Box sx={MUI_CSS_Handlers.navigation_heading}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar sx={{ backgroundColor: 'primary.main', width: '30px', height: '30px', mr: 1 }}>
                    <Typography variant='h6' fontFamily={poppinsFont} sx={{ fontWeight: 600, fontSize: '15px', color: 'text.primary' }} >
                        N
                    </Typography>
                </Avatar>
                <Typography variant='h6' fontFamily={poppinsFont} sx={{ fontWeight: 600, fontSize: '24px', color: 'text.primary', py: 0.5 }} >
                    Name
                </Typography>
            </Box>
            <NavigationBackIcon />
        </Box>
    )
}

export default NavigationHeading