import { Card, Typography, Box, Chip, Button, Grid, Avatar } from '@mui/material'
import React from 'react'
import { poppinsFont } from '../../utils/Theme'
import { CustomLinkIcon, CopyIcon, MoneyBag } from '../../Assets/SVGIcons'

const MUI_CSS_Handlers = {

    fontStyle: (size, weight, height = 1) => ({
        fontFamily: poppinsFont,
        fontSize: size,
        fontWeight: weight,
        lineHeight: `${height}rem`
    }),
}

function RewardCard() {
    return (
        <>
            <Card sx={{
                backgroundColor: 'secondary.dark',
                p: 3,
                borderRadius: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <Box>
                    <Typography sx={MUI_CSS_Handlers.fontStyle('18px', 500, 2)}>
                        Your rewards
                    </Typography>
                    <Typography sx={{ ...MUI_CSS_Handlers.fontStyle('28px', 600, 3), my: 1 }}>
                        $ 0.26231428
                    </Typography>
                    <Box >
                        <Chip sx={{ backgroundColor: 'secondary.light', mr: 1 }}
                            label={
                                <Typography sx={MUI_CSS_Handlers.fontStyle('12px', 600, 1.2)}>
                                    $ 40 AVAX
                                </Typography>
                            }
                        />
                        <Chip sx={{ backgroundColor: 'secondary.light', mr: 1 }}
                            label={
                                <Typography sx={MUI_CSS_Handlers.fontStyle('12px', 600, 1.2)}>
                                    $ 10 BNB
                                </Typography>
                            }
                        />
                        <Chip sx={{ backgroundColor: 'secondary.light', mr: 1 }}
                            label={
                                <Typography sx={MUI_CSS_Handlers.fontStyle('12px', 600, 1.2)}>
                                    $ 210 BTC
                                </Typography>
                            }
                        />
                    </Box>
                </Box>
                <Button variant='contained' sx={{ textTransform: 'none', mr: 3 }} startIcon={<CustomLinkIcon />}>
                    <Typography variant='caption' sx={{ fontWeight: 700, fontSize: '14px', color: 'text.primary' }} >
                        Custom Link
                    </Typography>
                </Button>
            </Card >
            {/* Small grid section */}

            <Grid container gap={2.5} sx={{ pt: 2.5 }}>
                <Grid item lg>
                    <Card sx={{
                        backgroundColor: 'secondary.dark',
                        p: 3,
                        borderRadius: '24px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <Box sx={{ width: '100%' }}>
                            <Box display={'flex'} alignItems={'center'}>
                                <Avatar sx={{
                                    width: '1.5rem',
                                    height: '1.5rem',
                                    mr: 1,
                                    background: 'linear-gradient(135deg, #BBB5E2 0%, #9C92DF 100%)',
                                }}>
                                    <MoneyBag />
                                </Avatar>
                                <Typography sx={MUI_CSS_Handlers.fontStyle('20px', 500, 2)}>
                                    <b> 12.5%</b> of fee
                                </Typography>
                            </Box>
                            <Typography sx={{ ...MUI_CSS_Handlers.fontStyle('1rem', 500), mt: 2, mb: 1.8, color: 'text.secondary' }}>
                                Your Referral Link for xyz
                            </Typography>

                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                backgroundColor: 'secondary.light',
                                py: 1,
                                px: 2,
                                borderRadius: '8px'
                            }}>
                                <Typography sx={{ ...MUI_CSS_Handlers.fontStyle('1rem', 500), my: 1, color: 'text.primary' }}>
                                    https://unityexchange.design
                                </Typography>
                                <CopyIcon />
                            </Box>
                        </Box>

                    </Card >
                </Grid>
                <Grid item lg>
                    <Card sx={{
                        backgroundColor: 'secondary.dark',
                        p: 3,
                        borderRadius: '24px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <Box sx={{ width: '100%' }}>
                            <Box display={'flex'} alignItems={'center'}>
                                <Avatar sx={{
                                    width: '1.5rem',
                                    height: '1.5rem',
                                    mr: 1,
                                    background: 'linear-gradient(135deg, #BBB5E2 0%, #9C92DF 100%)',
                                }}>
                                    <MoneyBag />
                                </Avatar>
                                <Typography sx={MUI_CSS_Handlers.fontStyle('20px', 500, 2)}>
                                    <b> 12.5%</b> of fee
                                </Typography>
                            </Box>
                            <Typography sx={{ ...MUI_CSS_Handlers.fontStyle('1rem', 500), mt: 2, mb: 1.8, color: 'text.secondary' }}>
                                Your Referral Link for xyz
                            </Typography>

                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                backgroundColor: 'secondary.light',
                                py: 1,
                                px: 2,
                                borderRadius: '8px'
                            }}>
                                <Typography sx={{ ...MUI_CSS_Handlers.fontStyle('1rem', 500), my: 1, color: 'text.primary' }}>
                                    https://unityexchange.design
                                </Typography>
                                <CopyIcon />
                            </Box>
                        </Box>

                    </Card >
                </Grid>
            </Grid>

        </>
    )
}

export default RewardCard