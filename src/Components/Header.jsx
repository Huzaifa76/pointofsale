import React from 'react'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const Header = () => {
    return (
        <>
        <div className='header'>
            <div className="container-fluid">
                <div className="header_inner">
                    <div className="headings">
                        <h1>Simmons's BBQ Team</h1>
                        <p>Location ID# SIMON123</p>
                    </div>
                    <div className="buttons">
                        <h5 className='mt-1'>Last Synced <br/> <span>3 mins ago</span> </h5>
                        <button className='btn btn_help'> <span className='help_icon'><HelpOutlineIcon fontSize='medium'/></span> Help</button>
                    </div>
                </div>
                <div className="nav_button">
                    <button className='btn' id='btn_active'>All Items</button>
                    <button className='btn' id='btn_1'>Food</button>
                    <button className='btn' id='btn_1'>Alchocal</button>
                    <button className='btn' id='btn_1'>Cold Drinks</button>
                    <button className='btn' id='btn_1'>Hot Drinks</button>
                </div>
            </div>
        </div>
        </>
    )
}      

export default Header
