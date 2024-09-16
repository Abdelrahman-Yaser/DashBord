import { Box, IconButton, useTheme } from '@mui/material'
import InputBase from '@mui/material/InputBase'
import { useContext } from 'react'
import { tokens, ColorModeContext } from '../../Theme'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchIcon from '@mui/icons-material/Search';

const TopeBar = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const colorMode = useContext(ColorModeContext)

    return (
        <>
            <Box display="flex" justifyContent="space-between" p={2}>
                <Box 
                    display="flex" 
                    sx={{ background: colors.primary[400], borderRadius: '3px', p: 2 }}
                >
                    <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                </Box>
                
                <Box display="flex">
                    <IconButton onClick={colorMode.toggleColorMode}>
                        {theme.palette.mode === "dark" 
                            ? <DarkModeOutlinedIcon /> 
                            : <LightModeOutlinedIcon />}
                    </IconButton>
                    <IconButton><DarkModeOutlinedIcon /></IconButton>
                    <IconButton><PersonOutlinedIcon /></IconButton>
                    <IconButton><SettingsOutlinedIcon /></IconButton>
                    <IconButton><NotificationsOutlinedIcon /></IconButton>
                </Box>
            </Box>
        </>
    )
}

export default TopeBar
