import React from 'react'
import './styles.scss';
import NavTab from '../NavTab';

function Header() {
  return (
    <div className='commonHeader'>
        <span className='sideHeader'>Purchase Order</span>
        <div className='tabsContainer'>
            <NavTab text='Form' to='/form'/>
            <NavTab text='Workflow' to='/workflow'/>
            <NavTab text='Permissions' to='/permissions'/> 
        </div>
    </div>
  )
}

export default Header