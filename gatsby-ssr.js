import React from 'react'
import GlobalStateProvider from './src/Theme/GlobalStateProvider'
import { ThemeProvider } from 'emotion-theming'
import {theme} from './src/Theme/theme'
import './src/styles/styles.css'

export const wrapRootElement = ({element}) => {
    return(
        <GlobalStateProvider>
            <ThemeProvider theme={theme}>
            {element}
            </ThemeProvider>
        </GlobalStateProvider>
)
}