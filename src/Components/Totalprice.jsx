import React from 'react'

const Totalprice = () => {
    return (
        <>
        <div className='total_price'>
            <div className="subtotal">
                <h6>Subtotal</h6>
                <h6>$35.25</h6>
            </div>
            <div className="discount">
                <h6>Discounts</h6>
                <h6>-$5.50</h6>
            </div>
            <div className="sale">
                <h6>Sales Tax</h6>
                <h6>$2.25</h6>
            </div>
            <hr />
            <div className="total">
                <h4>Total</h4>
                <h4>$37.50</h4>
            </div>
        </div>
        {/* <div className="credit">
            <div className="available_credit">
            <h6>CASHLESS CREDIT</h6>
            <h5>$32.50</h5>
            <span>Available</span>
            </div>
            <div className="cancel_button">
                <button className='btn cancel'>Cancel</button>
            </div>
        </div> */}

        <div className="cashless_button">
            <button className='btn cashless'>Pay With Cashless Credit</button>
        </div>
        {/* <div className="due_balance">
                <h6>Balance Due</h6>
                <h6>$5.00</h6>
            </div> */}
        </>
    )
}

export default Totalprice
