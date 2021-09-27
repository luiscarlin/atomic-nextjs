import type { AppProps } from 'next/app'
import GlobalStyle from '../styles/Global'
import { ThemeProvider } from 'styled-components'
import {useState} from 'react'
import Light from '../styles/themes/Light'
import Dark from '../styles/themes/Dark'


function MyApp({ Component, pageProps }: AppProps) {


const [theme, setTheme] = useState("light") 

const toggleTheme = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light')
}


  return <>
  <ThemeProvider theme={theme === "light" ? Light : Dark}>
    <GlobalStyle/>
    <button onClick={toggleTheme}>Switch Theme</button>
    <Component {...pageProps} />
  </ThemeProvider>
  </>
}
export default MyApp
