import {useMode, ColorModeContext} from './Theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import TopeBar from './scoren/globle/Topbar'
const [theme,colorMode]=useMode()
export const App = () => {
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div className='app'>
          <main className='container'>
<TopeBar/>
          </main>

        </div>
      </ThemeProvider>
  </ColorModeContext.Provider>
    
  )
}
