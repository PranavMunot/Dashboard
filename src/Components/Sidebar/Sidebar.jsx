import { Box, Button, TextField, Typography } from '@mui/material'
import { DropDown, BackArrow, CustomLinkIcon, WalletIcon, ExitArror } from '../../Assets/SVGIcons'
import logo from '../../Assets/logo.png'
import { poppinsFont } from '../../utils/Theme'

function Sidebar() {
    return (
        <Box sx={{ m: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button fullWidth sx={{ backgroundColor: 'secondary.light', px: 1.5, mr: 2, '&:hover': { backgroundColor: 'secondary.light' } }} startIcon={<img src={logo} alt='i' />} endIcon={<DropDown />}>
                    <Typography sx={{ textTransform: 'none', color: 'text.primary', fontSize: '1rem', fontFamily: { poppinsFont } }}>
                        Avalanche
                    </Typography>
                </Button>

                <Button fullWidth variant='outlined' sx={{ textTransform: 'none', }} startIcon={<WalletIcon />} endIcon={<DropDown />}>
                    <Typography variant='caption' sx={{ fontWeight: 600, fontSize: '14px', color: 'text.primary' }} >
                        0xf6...1353
                    </Typography>
                </Button>
            </Box>
            <Box sx={{ mt: 2, mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <BackArrow />
                    <Typography sx={{ pl: 2, textTransform: 'none', color: 'text.primary', fontSize: '1rem' }}>
                        Custom Link
                    </Typography>
                </Box>
            </Box>

            <Typography sx={{ pl: 1, textTransform: 'none', color: 'text.primary', fontSize: '1rem', fontFamily: { poppinsFont } }}>
                https://testnet.xyz.xyz/trade?ref=
            </Typography>

            <TextField
                type='input'
                variant='outlined'
                fullWidth
                placeholder='Enter'
                sx={{
                    my: 2,
                    backgroundColor: 'secondary.main',
                    borderRadius: '12px',
                    '&:hover': {
                        borderRadius: '12px',
                        border: 'none'
                    }
                }}
            />

            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                <Button variant='contained' sx={{ textTransform: 'none', px: 3, mr: 2 }} startIcon={<CustomLinkIcon />}>
                    <Typography variant='caption' sx={{ fontWeight: 700, fontSize: '14px', color: 'text.primary' }} >
                        Custom link
                    </Typography>
                </Button>
                <Button
                    variant='outlined'
                    sx={{
                        textTransform: 'none',
                        borderColor: 'text.secondary',
                        px: 3,
                        '&:hover': {
                            borderColor: 'text.secondary',
                        }
                    }} startIcon={<ExitArror />}>
                    <Typography variant='caption' sx={{ fontWeight: 700, fontSize: '14px', color: 'text.primary' }} >
                        Cancel
                    </Typography>
                </Button>
            </Box>


        </Box>
    )
}

export default Sidebar