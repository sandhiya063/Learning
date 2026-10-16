import React from 'react';
import image from './asset/download.jpg';
import './Product1.css';
const Product1 = ({productSOCK}) => {
return (
    <div style={{ display: "flex" }}>
        {productSOCK.map((item) => {
            return (
                <>
                <div className="containerCard">
                <img src={item.image} className="imageSock" />
                <h3 className="headingSock">{item.name}</h3>
               <div className="priceContainerSock"> <h4 className="priceSock">${item.price}</h4> &nbsp;
                                <strike className="strikeSock">${item.strikePrice}</strike></div>
                 <button className="buttonSock">  BUY NOW</button>

                </div>
                 </>
                )
            })}
        </div>
    )
}

export default Product1;