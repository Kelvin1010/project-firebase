import React, { useContext } from 'react';
import './Sidebar.css';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import StoreIcon from '@mui/icons-material/Store';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SidebarOption from './SidebarOption';
import { DarkModeContext } from '../../context/darkModeContext';
import { Link } from 'react-router-dom';


function Sidebar() {
    const { dispatch} = useContext(DarkModeContext)
    return (
        <div className='sidebar'>
            <div className='sidebar_top'>
                <Link to={'/'} className='link'>
                    <span className='logo'>KELVIN WARD</span>
                </Link>
            </div>
            <hr />
            <div className='sidebar_center'>
                <ul>
                    <p className='title'>MAIN</p>
                    <SidebarOption Icon={<DashboardIcon />} title={'Dashboard'}/>
                    <p className='title'>LISTS</p>
                    <Link to={'/users'} className='link'>
                        <SidebarOption Icon={<PersonOutlineIcon />} title={'Users'} />
                    </Link>
                    <Link to={'/products'} className='link'>
                        <SidebarOption Icon={<StoreIcon />} title={'Products'} />
                    </Link>
                    <SidebarOption Icon={<CreditCardIcon />} title={'Orders'} />
                    <SidebarOption Icon={<LocalShippingIcon />} title={'Delivery'} />
                    <p className='title'>USEFUL</p>
                    <SidebarOption Icon={<InsertChartIcon />} title={'Stats'} />
                    <SidebarOption Icon={<NotificationsNoneIcon />} title={'Notifications'} />
                    <p className='title'>SERVICE</p>
                    <SidebarOption Icon={<SettingsSystemDaydreamOutlinedIcon />} title={'System Health'} />
                    <SidebarOption Icon={<PsychologyOutlinedIcon />} title={'Logs'} />
                    <SidebarOption Icon={<SettingsApplicationsOutlinedIcon />} title={'Settings'} />
                    <p className="title">USER</p>
                    <SidebarOption Icon={<AccountCircleOutlinedIcon />} title={'Profile'} />
                    <SidebarOption Icon={<ExitToAppIcon />} title={'Logout'} />
                </ul>
            </div>
            <div className='sidebar_footer'>
                <div
                    className='colorOption'
                    onClick={() => dispatch({ type: "LIGHT" })}
                ></div>
                <div
                    className='colorOption'
                    onClick={() => dispatch({ type: "DARK" })}
                ></div>
            </div>
        </div>
    )
}

export default Sidebar