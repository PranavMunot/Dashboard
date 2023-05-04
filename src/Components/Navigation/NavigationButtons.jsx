import { Avatar, Box, Button, Typography } from '@mui/material'
import { poppinsFont } from '../../utils/Theme'


function NavigationButtons() {
    return (
        <Box>
            <Box>
                <Button variant='contained' sx={{
                    backgroundColor: 'secondary.light',
                    mr: 1,
                    '&:hover': {
                        backgroundColor: 'secondary.main'
                    }
                }}
                    startIcon={
                        <Avatar sx={{ backgroundColor: 'primary.main', width: '1rem', height: '1rem' }}>
                            <Typography variant='h6' fontFamily={poppinsFont} sx={{ fontWeight: 600, fontSize: '10px', color: 'text.primary' }} >
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
            <Box>

            </Box>
        </Box>
    )
}

export default NavigationButtons