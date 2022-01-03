import React from 'react'
import Currentorder from './Currentorder'
import '../assets/rightsidebar.css'
import Orderfetch from './Orderfetch'
import Totalprice from './Totalprice'

const Rightsidebar = () => {
    return (
        <>
        <div className="rightsidebar d-flex flex-column">
            <div className="flex-0">
        <Currentorder/>
        </div>
        <div className="flex-1 order_fetch">
        <Orderfetch/>
        </div>
        <div className='flex-0'>
        <Totalprice/>
        </div>
        </div>
        </>
    )
}

export default Rightsidebar
