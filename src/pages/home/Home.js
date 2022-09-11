import React from 'react';
import './Home.css'
import Chart from '../../component/chart/Chart'
import Featured from '../../component/featured/Featured'
import Navbar from '../../component/navbar/Navbar'
import Sidebar from '../../component/sidebar/Sidebar'
import TableList from '../../component/table/Table'
import Widget from '../../component/widget/Widget'

function Home() {
  return (
    <div className='home'>
        <Sidebar />
        <div className='homeContainer'>
            <Navbar />
            <div className='widgets'>
                <Widget type={'user'} />
                <Widget type={'product'} />
                <Widget type={'order'} />
                <Widget type={'earning'} />
            </div>
            <div className='charts'>
                <Featured />
                <Chart title={'Last 6 Mouths (Revenue)'} aspect={2 / 1} />
            </div>
            <div className="listContainer">
                <div className="listTitle">Latest Transactions</div>
                <TableList />
            </div>
        </div>
    </div>
  )
}

export default Home