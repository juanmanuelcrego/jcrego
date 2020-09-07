import React, {useState, useContext} from "react"

import Moon from '../images/moon.png'

import {useTheme} from 'emotion-theming'
import {css} from "@emotion/core"
import Context from './context'

const ButtonToggle = () => {
    const {state, dispatch} = useContext(Context)
    const theme = useTheme()
    
    const button = state.isDark ? <button className='themebtn moon'></button> : <button className='themebtn moon'></button>

return (
        <div>
        <button className='themebtn' onClick={() => dispatch({type: "TOGGLE_DARK_MODE"})}>{button}</button>
        </div>
)
}

export default ButtonToggle




