import React from 'react'
import './SideBarChats.css'
import { Avatar } from '@mui/material'

function SideBarChats() {
  return (
    <div className="sidebarChat">
      <Avatar />
      <div className='sidebarChat__info'>
        <h2>Room Name</h2>
        <p>This is the Last Message</p>
      </div>

    </div>
  );
}

export default SideBarChats
