import { Box, Card, Typography } from '@mui/material'
import { WalletIcon } from '../../Assets/SVGIcons'
import { poppinsFont } from '../../utils/Theme'

function ReferalHeading() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography sx={{
                textTransform: 'none',
                fontSize: '18px',
                color: 'text.primary',
                pb: '7px',
                borderBottom: '2px solid',
                borderColor: 'primary.main'
            }}>Section</Typography>

            <Card sx={{
                display: 'flex',
                alignItems: 'center',
                py: 1,
                px: 2,
                backgroundColor: 'secondary.dark',
                borderRadius: '12px'

            }}>
                <WalletIcon />
                <Typography
                    fontFamily={poppinsFont}
                    variant='h6'
                    sx={{
                        fontSize: '16px', fontWeight: '500', pl: 1
                    }}
                >
                    0.2 $XYZ
                </Typography>
                <Box sx={{
                    backgroundColor: 'primary.light',
                    color: 'primary.main',
                    px: 0.5,
                    ml: 2,
                    borderRadius: '5px'
                }}>
                    <Typography variant='body' sx={{ fontSize: '12px', fontWeight: '600' }} fontFamily={poppinsFont} >
                        Tier 1
                    </Typography>
                </Box>
            </Card>
        </Box>
    )
}

export default ReferalHeading