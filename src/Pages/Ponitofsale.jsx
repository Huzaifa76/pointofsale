import React from 'react'
import Leftsidebar from '../Components/Leftsidebar'
import Rightsidebar from '../Components/Rightsidebar'

const Ponitofsale = () => {
    return (
        <>
        <div class="container-fluid">

        <div className="row">
            <div className="col-md-8 col-12">
                <Leftsidebar/>
            </div>
            <div className="col-md-4 col-12">
                <Rightsidebar/>
            </div>
        </div>
        </div>
        </>
    )
}

export default Ponitofsale
