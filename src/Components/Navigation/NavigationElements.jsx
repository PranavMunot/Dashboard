import {
    NavigationHomeIcon,
    NavigationSection1Icon,
    NavigationSection2Icon,
    NavigationSection3Icon,
    NavigationSection4Icon,
    NavigationSection5Icon,
    NavigationSection6Icon,
    NavigationSection7Icon,
    NavigationSection8Icon,
    NavigationDocumentationIcon
} from "../../Assets/SVGIcons"
import { Box, Typography } from "@mui/material"

const elementsData = [{
    key: 1,
    icon: <NavigationHomeIcon />,
    elementName: 'Home'
},
{
    key: 2,
    icon: <NavigationSection1Icon />,
    elementName: 'Section 1'
},
{
    key: 3,
    icon: <NavigationSection2Icon />,
    elementName: 'Section 2'
},
{
    key: 4,
    icon: <NavigationSection3Icon />,
    elementName: 'Section 3'
},
{
    key: 5,
    icon: <NavigationSection4Icon />,
    elementName: 'Section 4'
},
{
    key: 6,
    icon: <NavigationSection5Icon />,
    elementName: 'Section'
},
{
    key: 7,
    icon: <NavigationSection6Icon />,
    elementName: 'Section 6'
},
{
    key: 8,
    icon: <NavigationSection7Icon />,
    elementName: 'Section 7'
},
{
    key: 9,
    icon: <NavigationSection8Icon />,
    elementName: 'Section 8'
},
{
    key: 10,
    icon: <NavigationDocumentationIcon />,
    elementName: 'Documentation'
},

]

function NavigationElements() {
    return (
        <>
            <Box>
                {elementsData.map((element) => (
                    <Box sx={{
                        display: 'flex',
                        py: 1.2,
                        borderRadius: '10px',
                        alignItems: 'center',
                        color: 'text.secondary',
                        '&:hover': {
                            px: 2,
                            backgroundColor: 'secondary.light',
                            stroke: '#ffffff',
                            cursor: 'pointer',
                            color: 'text.primary',
                        },
                    }}>
                        {element.icon}
                        <Typography sx={{ pl: 2 }}>
                            {element.elementName}
                        </Typography>

                    </Box>
                ))}
            </Box>

        </>
    )
}

export default NavigationElements