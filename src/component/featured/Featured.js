import { CircularProgress } from '@mui/material';
import React from 'react';
import './Featured.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FeaturedOption from './FeaturedOption';

function Featured() {
  return (
    <div className='featured'>
        <div className='featured_top'>
            <h1 className='title'>Total Revenue</h1>
            <MoreVertIcon fontSize='small' />
        </div>
        <div className='featured_footer'>
            <div className="featuredChart">
            <CircularProgress value={70} text={"70%"} strokeWidth={5} />
            </div>
            <p className="title">Total sales made today</p>
            <p className="amount">$420</p>
            <p className="desc">
            Previous transactions processing. Last payments may not be included.
            </p>
            <div className='summary'>
                <FeaturedOption color={'red'} title={'Target'} Icon={<KeyboardArrowDownIcon />} resultAmount='$12.4k' />
                <FeaturedOption color={'green'} title={'Last Week'} Icon={<KeyboardArrowUpOutlinedIcon />} resultAmount='$12.4k' />
                <FeaturedOption color={'green'} title={'Last Month'} Icon={<KeyboardArrowUpOutlinedIcon />} resultAmount='$12.4k' />
            </div>
        </div>
    </div>
  )
}

export default Featured