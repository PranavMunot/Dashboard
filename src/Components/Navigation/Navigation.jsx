import { Box } from '@mui/material'
import NavigationHeading from './NavigationHeading'
import NavigationElements from './NavigationElements'
import NavigationButtons from './NavigationButtons'

const MUI_CSS_Handlers = {
    navigation: {
        height: '100%',
        p: 3,
    },
}

function Navigation() {
    return (
        <Box sx={MUI_CSS_Handlers.navigation}>
            {/* navigation headers */}
            <NavigationHeading />
            {/* navigation elements */}
            <NavigationElements />
            {/* navigation theming */}
            <NavigationButtons />
        </Box>
    )
}

export default Navigation