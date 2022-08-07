import React, {useEffect, useState} from 'react'
import { db } from './firebase';
import "./Orders.css";
import { useStateValue } from './StateProvider';
import {query, collection, onSnapshot, orderBy} from 'firebase/firestore'
import Order from "./Order"; 

function Orders() {
  const [orders , setOrders] = useState([]);
  const [{ basket, user }, dispatch] = useStateValue();
  useEffect(() => {
    if(user){
    const ref = collection(db, 'users', user?.uid, 'orders')
    const orderedOrders = query(ref, orderBy('created', 'desc'))
    onSnapshot(orderedOrders, snapshot => {
         setOrders(snapshot.docs.map(doc => ({
           id: doc.id,
           data: doc.data()
         })))
      })
    } else {
      setOrders([])
    }
  }, [user])
  return (
    <div className='orders'>
        <h1>Your Orders</h1>
        <div className='orders__order'>
          {orders?.map(order => (
            <Order order={order} />
          )) }
        </div>
    </div>
  )
}

export default Orders