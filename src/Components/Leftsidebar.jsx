import React from 'react'
import '../assets/leftsidebar.css'
import Header from './Header'
import Menufetch from './Menufetch'
import Promobuttons from './Promobuttons'

const Leftsidebar = () => {
    return (
        <>
        <div className="leftsidebar">
            <Header/>
            <Menufetch/>
            {/* <Promobuttons/> */}
        </div>
        </>
    )
}

export default Leftsidebar