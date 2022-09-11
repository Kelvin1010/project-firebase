import React, { useContext } from 'react';
import './Navbar.css';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import NavbarOption from './NavbarOption';
import { DarkModeContext } from '../../context/darkModeContext';


function Navbar() {
  const {dispatch} = useContext(DarkModeContext)
  return (
    <div className='navbar'>
        <div className='wrapper'>
            <div className='search'>
                <input type={'text'} placeholder="Search..." />
                <SearchOutlinedIcon />
            </div>
            <div className='items'>
              <NavbarOption Icon={<LanguageOutlinedIcon />} title='English'/>
              <div className="item">
                <DarkModeOutlinedIcon
                  className="icon"
                  onClick={() => dispatch({ type: "TOGGLE" })}
                />
              </div>
              <NavbarOption Icon={<FullscreenExitOutlinedIcon />} />
              <div className="item">
                <NotificationsNoneOutlinedIcon className="icon" />
                <div className="counter">1</div>
              </div>
              <div className="item">
                <ChatBubbleOutlineOutlinedIcon className="icon" />
                <div className="counter">2</div>
              </div>
              <NavbarOption Icon={<ListOutlinedIcon />} />
              <div className='item'>
                <img 
                  src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                  className="avatar"
                />
              </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar