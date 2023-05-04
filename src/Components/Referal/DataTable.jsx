import { Box, Typography, CircularProgress } from '@mui/material'
import { useEffect, useState } from 'react'

const MUI_CSS_Handlers = {
    headerText: {
        color: 'text.secondary',
        textTransform: 'uppercase',
        fontSize: '10px',
        fontWeight: 600,
        width: '100%',
        textAlign: 'center',
        mx: 0.5,

    },
    row: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'secondary.dark',
        p: 2,
        mt: 2.5,
        borderRadius: 2,

    }
}

function DataTable() {

    const [apiData, setApiData] = useState({ isLoading: false, data: [] })

    useEffect(() => {
        setApiData({ ...apiData, isLoading: true })
        fetch('https://raw.githubusercontent.com/akshita151199/APIs/main/data')
            .then((res) => (res.json()))
            .then((({ data }) => { setApiData({ isLoading: false, data }); console.log(data); }))
            .catch((error) => { console.log(error); setApiData({ isLoading: false, data: [] }) })
    }, [])

    return (
        <Box>
            <Box sx={MUI_CSS_Handlers.row}>
                <Typography sx={MUI_CSS_Handlers.headerText}>
                    Assets
                </Typography>
                <Typography sx={MUI_CSS_Handlers.headerText}>
                    Amount
                </Typography>
                <Typography sx={MUI_CSS_Handlers.headerText}>
                    User Account
                </Typography>
                <Typography sx={MUI_CSS_Handlers.headerText}>
                    Referal Earnings
                </Typography>
            </Box>

            {apiData.isLoading && <Box sx={{ display: 'flex', justifyContent: 'center', pt: 2 }}>
                <CircularProgress size={'2rem'} />
            </Box>}
            <Box sx={{
                height: '100px',
                overflow: 'auto'
            }}>
                {apiData.data && apiData.data.map((data, index) => (
                    <Box key={index} sx={{
                        ...MUI_CSS_Handlers.row,
                        m: 0.5,
                        borderRadius: '5px',
                        backgroundColor: 'rgba(36, 39, 49, 0.4)',

                    }}>
                        <Box sx={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Box sx={{ pr: 1 }}>
                                <img src={data.img} alt='logo' />
                            </Box>
                            <Box>
                                <Typography sx={{ color: 'text.primary', fontSize: '14px', fontWeight: 600 }}>
                                    {data.asset}
                                </Typography>
                                <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
                                    <Typography sx={{ color: 'text.secondary', fontSize: '12px', mr: 0.5 }}>
                                        {data.type}
                                    </Typography>
                                    <Box
                                        sx={{
                                            backgroundColor: 'secondary.light',
                                            display: 'flex',
                                            p: 0.5,
                                            alignItems: 'center',
                                            borderRadius: '25px'
                                        }}

                                    >
                                        <img style={{ width: '0.5rem', height: '0.5rem' }} alt='chain_logo' src={data.chain.img} />
                                        <Typography sx={{ lineHeight: 1, fontWeight: 600, fontSize: '8px', color: 'text.primary', pl: 0.5 }}>{data.chain.name}</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}>
                            <Typography sx={{ color: 'text.primary', fontSize: '14px', fontWeight: 600 }}>
                                {data.amount} BNB
                            </Typography>
                            <Typography sx={{ color: 'text.secondary', fontSize: '14px', fontWeight: 500 }}>
                                {data.state}
                            </Typography>
                        </Box>
                        <Box sx={{
                            width: '100%',
                            textAlign: 'center'
                        }}>
                            <Typography sx={{ color: 'text.primary', fontSize: '14px', fontWeight: 600 }}>
                                {data.user.length > 14 ?
                                    data.user.substring(0, 4) + '...' + data.user.substring('0x0ewoiwejfioewjfojewifjefwojfewfiojwef'.length - 4) :
                                    data.user}
                            </Typography>
                        </Box>
                        <Box sx={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}>
                            <Typography sx={{ color: 'text.primary', fontSize: '14px', fontWeight: 600 }}>
                                {data.referral_earnings} BNB
                            </Typography>
                            <Typography sx={{ color: 'text.secondary', fontSize: '14px', fontWeight: 500 }}>
                                View on BNS Scan
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Box>

        </Box>
    )
}

export default DataTable