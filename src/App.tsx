import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Landing } from './pages/Landing'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'



export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>

      <BrowserRouter>
      <Landing/>
      </BrowserRouter>
    </ThemeProvider>   
  )
}

