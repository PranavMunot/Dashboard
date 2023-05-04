import { createTheme } from "@mui/material/styles";

export const poppinsFont = `'Poppins', sans-serif;`
const interFont = `'Inter', sans-serif;`


export const customTheme = createTheme({
    palette: {
        primary: {
            main: '#3772ff',
            light: '#A3E3FF'
        },
        secondary: {
            main: '#242731',
            light: '#353945',
            dark: '#191B20'
        },
        text: {
            primary: '#FFFFFF',
            secondary: '#808191'
        },
    },
    typography: {
        fontFamily: [interFont].join(',')
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '10px',
                }
            }
        }
    },

})

