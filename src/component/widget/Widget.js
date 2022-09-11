import React, { useEffect, useState } from 'react';
import './Widget.css';
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import { collection, getDoc, getDocs, query, where } from 'firebase/firestore';
import { database } from '../../firebase';


function Widget({type}) {

    const [ amount, setAmount] = useState(null)
    const [diff, setDiff] = useState(null)

    let data ;
    const collectionRef = collection(database, "users");

    switch (type) {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                query: "users",
                link:"See all users",
                icon: (
                    <PersonOutlinedIcon 
                        className='icon'
                        style={{
                            color: "crimson",
                            backgroundColor: "rgba(255,0,0,0.2)"
                        }}
                    />
                )
            }
            break;
        case "order":
            data = {
                title: "ORDERS",
                isMoney: false,
                link:"View all orders",
                icon: (
                    <ShoppingCartOutlinedIcon 
                        className='icon'
                        style={{
                            color: "goldenrod",
                            backgroundColor: "rgba(218,165,32,0.2)"
                        }}
                    />
                )
            }
            break;
        case "earning":
            data = {
                title: "EARNINGS",
                isMoney: true,
                link:"View net earnings",
                icon: (
                    <MonetizationOnOutlinedIcon 
                        className='icon'
                        style={{
                            color: "green",
                            backgroundColor: "rgba(0,128,0,0.2)"
                        }}
                    />
                )
            }
            break;
        case "product":
            data = {
                title: "PRODUCT",
                query: "products",
                link:"See details",
                icon: (
                    <AccountBalanceOutlinedIcon 
                        className='icon'
                        style={{
                            color: "purple",
                            backgroundColor: "rgba(128,0,128,0.2)"
                        }}
                    />
                )
            }
            break;
    
        default:
            break;
    }

    useEffect(() => {
        const fetchDatabase = async () => {
            const today = new Date();
            const lastMonth = new Date(new Date().setMonth(today.getMonth() - 1))
            const prevMonth = new Date(new Date().setMonth(today.getMonth() - 2))

            const lastMonthQuery = query(
                collection(database,data.query), 
                where("timeStamp", "<=", today),
                where("timeStamp", ">", lastMonth),
            );
            const prevMonthQuery = query(
                collection(database,data.query), 
                where("timeStamp", "<=", lastMonth),
                where("timeStamp", ">", prevMonth),
            );

            const lastMonthData = await getDocs(lastMonthQuery)
            const prevMonthData = await getDocs(prevMonthQuery)

            setAmount(lastMonthData.docs.length)
            setDiff(
                (lastMonthData.docs.length - prevMonthData.docs.length)
                 / (prevMonthData.docs.length) * 100
            )
        }
        fetchDatabase()
    },[])

    return (
        <div className='widget'>
            <div className='widget_left'>
                <span className='title'>{data.title}</span>
                <span className="counter">
                    {data.isMoney && "$"} {amount}
                </span>
                <span className="link">{data.link}</span>
            </div>
            <div className='widget_right'>
                <div className={`percentage ${diff < 0 ? "negative" : "positive"}`}>
                    {diff < 0 ? <KeyboardArrowDownIcon/> : <KeyboardArrowUpIcon/> }
                    {diff} %
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget