import Menu from "./Menu";
import React from "react";
import { Menudata } from "./Menudata";

const Menufetch = () => {
  return (
    <>
      <div className="menu">
        <div className="container-fluid">
          <div className="row">
              {Menudata.map((val,ind)=>{
                  return(
                      <Menu
                  title={val.title}
                  weight={val.weight}
                  price={val.price}
                  img={val.img}
                  />
                  )
              })}
          </div>
          <div className="promo">
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-3 col-4">
              <h6>SELECT AVAILABLE PROMO TO APPLY</h6>
          <button className='btn promo_buttons'>$5 Off Any Item</button>
          </div>
          <div className="col-md-3 col-4">
          <h6>(LIMIT 1 PER ORDER)</h6>
          <button className='btn promo_buttons'>Free Beverage</button>
          </div>
          <div className="col-md-3 col-4 d-flex align-items-end">
          <button className='btn promo_buttons'>20% Off Entire Order</button>
          </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menufetch;
