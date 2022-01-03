import React from 'react'

const Promobuttons = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="promo_buttons">
                    <div>
                    <h6>SELECT AVAILABLE PROMO TO APPLY</h6>
                    <button className='btn'>$5 Off Any Item</button>
                    </div>
                    <div>
                    <h6>(LIMIT 1 PER ORDER)</h6>
                        <button className='btn'>Free Beverage</button>
                    </div>
                    <div className='d-flex align-items-end'>
                    <h6></h6>
                        <button className='btn'>20% Off Entire Order</button>
                    </div>

                </div>


            {/* <div className="row">
                <div className="col-md-5">

                </div>
                <div className="col-md-7 col-12">
                    <div className="buttons">
                        <div>
                        <span>SELECT AVAILABLE PROMO TO APPLY</span>
                        <button className='btn item'>$5 Off Any Item</button>
                        </div>
                        <div>
                        <span>(LIMIT 1 PER ORDER)</span>
                        <button className='btn item'>Free Beverage</button>
                        </div>
                        <div>
                        <button className='btn item'>20% Off Entire Order</button>
                        </div>
                    </div>
                </div>
            </div> */}
            </div>
        </>
    )
}

export default Promobuttons
