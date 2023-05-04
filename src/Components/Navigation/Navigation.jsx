import { Box } from '@mui/material'
import NavigationHeading from './NavigationHeading'
import NavigationElements from './NavigationElements'
import NavigationButtons from './NavigationButtons'

const MUI_CSS_Handlers = {
    navigation: {
        height: '100%',
        mx: 3,
        py: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
}

function Navigation() {
    return (
        <Box sx={MUI_CSS_Handlers.navigation}>
            <Box>
                {/* navigation headers */}
                <NavigationHeading />
                {/* navigation elements */}
                <NavigationElements />
            </Box>
            {/* navigation theming */}
            <NavigationButtons />
        </Box>
    )
}

export default Navigation