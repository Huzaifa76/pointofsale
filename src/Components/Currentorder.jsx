import React from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
import Order from './Order'

const Currentorder = () => {
    return (
        <>
        <div className='current_orders m-0'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 col-6">
                        <h3 className='mt-2'>Current Order</h3>
                    </div>
                    <div className="col-md-4 col-4">
                        <button className='btn clear'>Clear All</button>
                    </div>
                    <div className="col-md-2 col-2">
                        <button className='btn setting'><SettingsIcon fontSize='medium'/></button>
                    </div>
                </div>
            </div>
        </div>
            
        </>
    )
}

export default Currentorder
