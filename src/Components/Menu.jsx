import React from 'react'

const Menu = ({title,weight,price,img}) => {
    return (
        <>
                    <div className="col-md-4 col-sm-8 col-12 mx-auto pb-3">
                        <div className="menu_items">
                            <h3>{title}</h3>
                            <span>{weight}</span>
                            <div className="menu_img">
                            <span>{price}</span>
                            <img src={img} alt="Grilled Corn" />
                            </div>
                        </div>
                    </div>
        </>
    )
}

export default Menu
