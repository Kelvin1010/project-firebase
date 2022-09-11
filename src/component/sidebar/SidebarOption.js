import React from 'react';
import './Sidebar.css'

function SidebarOption({Icon, title}) {
  return (
    <div className='sidebarOption'>
        <span className='icon'>{Icon}</span>
        <span>{title}</span>
    </div>
  )
}

export default SidebarOption