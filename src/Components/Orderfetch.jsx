import React from 'react'
import Order from './Order'
import { Orderdata} from './Orderdata'

const Orderfetch = () => {
    return (
        <>
         <div className="current_fetch">
             <div className="container-fluid">
                <div className="row">
        {Orderdata.map((val,ind)=>{
            return(
                <Order
                key={ind}
                img={val.img}
                title={val.title}
                delete={val.delete}
                amount={val.amount}
                add={val.add}
                price={val.price}
                />
            )
        })}
         </div>
         </div>
        </div>
        </>
    )
}

export default Orderfetch
