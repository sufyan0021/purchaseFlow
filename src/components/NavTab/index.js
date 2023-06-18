import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles.scss'

function NavTab({text, to}) {

    const navLinkStyles = ({isActive}) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            backgroundColor: isActive ? 'blue' : 'grey'
        }
    }

    return (
        <nav className='tabs'>
                <NavLink className='tab' style={navLinkStyles} to={to}>{text}</NavLink>
        </nav>
    )
}

export default NavTab