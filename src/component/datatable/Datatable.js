import React, { useEffect, useState } from 'react';
import './Datatable.css';
import { userRows, userColumns} from '../../datatablesource'
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import { database } from '../../firebase';
import { collection, deleteDoc, getDocs, doc, onSnapshot } from 'firebase/firestore';
import { async } from '@firebase/util';

function Datatable({typeoff}) {

    const [data,setData] = useState([]);
    const collectionRef = collection(database, "users");


    useEffect(() => {
        // const fetchData = async () => {
        //     let list = []
        //     try {
        //         const querySnapshot = await getDocs(collectionRef);
        //         querySnapshot.forEach((doc) => {
        //             list.push({...doc.data(), id: doc.id})
        //         });
        //         setData(list)
        //     } catch (error) {
        //         alert(error.message)
        //     }
        // }
        // fetchData()

        //Listen data realtime
        const unsub = onSnapshot(collectionRef,(snapshot) =>{
            let list = [];
            snapshot.docs.forEach(doc => {
                list.push({...doc.data(), id: doc.id})
            })
            setData(list)
        },(error) => {
            alert(error.message)
        })
        return () => {
            unsub()
        }
    },[])

    const handleDelete = async (id) => {
        try {
            await deleteDoc(doc(collectionRef,id))
            setData(data.filter((item) => item.id !== id))
        } catch (error) {
            alert(error.message)
        }
    }

    const actionColumn = [
        {
            field: 'action',
            headerName: 'Action',
            width: 200,
            renderCell: (params) => {
                return (
                    <div className='cellAction'>
                        <Link to={'/users/test'} className='link'>
                            <div className='viewButton'>View</div>
                        </Link>
                        <div
                            className='deleteButton'
                            onClick={() => handleDelete(params.row.id)}
                        >
                            Delete
                        </div>
                    </div>
                )
            }
        }
    ]

    return (
        <div className='datatable'>
            <div className='datatableTitle'>
                Add New User 
                <Link to={'/users/new'} className='link'>
                    Add New
                </Link>
            </div>
            <DataGrid 
                className='datagrid'
                rows={data}
                columns={userColumns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
            />
        </div>
    )
}

export default Datatable