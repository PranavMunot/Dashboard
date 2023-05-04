import { Box, Button, IconButton, Typography } from '@mui/material'
import { poppinsFont } from '../../utils/Theme'
import { RemoveIcon } from '../../Assets/SVGIcons'
import closableCardImage from '../../Assets/closableCard.png'

function ClosableCard() {
    return (
        <Box sx={{
            my: 3,
            px: 3,
            py: 2,
            backgroundColor: 'primary.light',
            borderRadius: '10px',
            position: 'relative',
            display: 'flex',
            justifyContent: 'space-between',
            height: '90px',

        }}>
            <IconButton sx={{
                backgroundColor: 'text.primary',
                position: 'absolute',
                right: '-10px',
                top: '-10px',
                '&:hover': {
                    backgroundColor: 'text.primary',
                }
            }}
            >
                <RemoveIcon />
            </IconButton>
            <Box >
                <Typography sx={{ fontFamily: `${poppinsFont}`, }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </Typography>
                <Button
                    variant='contained'
                    sx={{
                        backgroundColor: 'white',
                        py: 0.5,
                        textTransform: 'none',
                        borderRadius: '6px',
                        mt: 1,
                        '&:hover': {
                            backgroundColor: 'text.primary',
                        }
                    }}
                >
                    <Typography sx={{ color: '#2b2557', fontSize: '12px', fontWeight: '600' }}>
                        Tutorial
                    </Typography>
                </Button>
            </Box>
            <img style={{ height: '90px' }} src={closableCardImage} alt='bitcoin' />
        </Box>
    )
}

export default ClosableCard