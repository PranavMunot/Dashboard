import { Avatar, Box, Button, IconButton, Typography } from '@mui/material'
import { poppinsFont } from '../../utils/Theme'
import { WorldIcon, MoonIcon } from '../../Assets/SVGIcons'


function NavigationButtons() {
    return (
        <Box>
            <Box sx={{ pb: 2 }}>
                <Button variant='contained' sx={{
                    backgroundColor: 'secondary.light',
                    mr: 1,
                    width: '95px',
                    px: 1,
                    '&:hover': {
                        backgroundColor: 'secondary.main'
                    }
                }}
                    startIcon={
                        <Avatar sx={{ backgroundColor: 'primary.main', width: '1rem', height: '1rem' }}>
                            <Typography fontFamily={poppinsFont} sx={{ fontWeight: 600, fontSize: '10px', color: 'text.primary' }} >
                                N
                            </Typography>
                        </Avatar>
                    }
                >
                    <Typography variant='body' sx={{ textTransform: 'none', fontWeight: 600, fontSize: '14px', color: 'text.primary' }} >
                        $0.90
                    </Typography>


                </Button>

                <Button variant='contained' sx={{
                    backgroundColor: 'primary.light',
                    color: 'primary.main',
                    width: '95px',
                    px: 1,
                    '&:hover': {
                        backgroundColor: 'primary.main',
                        color: 'primary.light'
                    }
                }}
                >
                    <Typography variant='body' sx={{ textTransform: 'none', fontWeight: 600, fontSize: '14px' }} >
                        Buy $XYZ
                    </Typography>

                </Button>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <IconButton sx={{ mr: 1 }}>
                    <WorldIcon />
                </IconButton>

                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '3.7rem', backgroundColor: 'secondary.light', p: 0.8, borderRadius: '50px' }}>
                    <MoonIcon />
                    <Box sx={{ borderRadius: '50%', width: '1.1rem', height: '1.1rem', backgroundColor: 'primary.main' }}></Box>
                </Box>


            </Box>
        </Box>
    )
}

export default NavigationButtons