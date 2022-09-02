import React from 'react'
import { useSelector } from 'react-redux'
import { IoMoonOutline, IoMoonSharp } from 'react-icons/io5'
import { StyledHeader } from './styles'

export const Header = () => {
    const stateApp = useSelector(state => state.app.themeMode)
    return (
        <StyledHeader>
            <div>
                <h1>Where in the world?</h1>
            </div>
            <div className="header__theme-mode">
                {stateApp === 'darkMode' ? (
                    <div>
                        <IoMoonSharp />
                        <p>Dark Mode</p>
                    </div>
                ) : (
                    <div>
                        <IoMoonOutline />
                        <p>Light Mode</p>
                    </div>
                )}
            </div>
        </StyledHeader>
    )
}
