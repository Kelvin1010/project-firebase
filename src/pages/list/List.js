import React from 'react';
import Datatable from '../../component/datatable/Datatable';
import Navbar from '../../component/navbar/Navbar';
import Sidebar from '../../component/sidebar/Sidebar';
import './List.css';
import { collection, getDocs } from "firebase/firestore";

function List() {
  return (
    <div className='list'>
        <Sidebar />
        <div className='listContainer'>
            <Navbar />
            <Datatable />
        </div>
    </div>
  )
}

export default List