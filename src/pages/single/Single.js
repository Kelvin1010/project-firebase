import { List } from '@mui/material';
import './Single.css'
import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import Sidebar from '../../component/sidebar/Sidebar';
import Chart from '../../component/chart/Chart';
import TableList from '../../component/table/Table';

function Single() {
  return (
    <div className='single'>
        <Sidebar />
        <div className='singleContainer'>
            <Navbar />
            <div className='single_top'>
                <div className='left'>
                    <div className='editButton'>Edit</div>
                    <h1 className='title'>Information</h1>
                    <div className='item'>
                        <img
                            src='https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
                            alt=''
                            className='itemImg'
                        />
                        <div className='details'>
                            <h1 className='itemTitle'>Kelvin Ward</h1>
                            <div className='detailItem'>
                                <span className='itemKey'>Email:</span>
                                <span className='itemValue'>daoduyimp1010@gmail.com</span>
                            </div>
                            <div className="detailItem">
                                <span className="itemKey">Phone:</span>
                                <span className="itemValue">0383046231</span>
                            </div>
                            <div className="detailItem">
                                <span className="itemKey">Address:</span>
                                <span className="itemValue">
                                Elton St. 234 Garden Yd. NewYork
                                </span>
                            </div>
                            <div className="detailItem">
                                <span className="itemKey">Country:</span>
                                <span className="itemValue">USA</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='right'>
                    <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
                </div>
            </div>
            <div className='single_footer'>
                <h1 className='title'>Last Transactions</h1>
                <TableList />
            </div>
        </div>
    </div>
  )
}

export default Single