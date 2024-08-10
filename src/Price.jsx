import React from 'react'

function Price(props) {
    const {name,price} = props;
    // Props Destructing Örneği

    return (
        <div>
            <div><h1>Ürün Hakkında</h1></div>
            <div><h3>İsim = {name}</h3>
            </div>
            <div><h5>Fiyat = {price}</h5></div>
        </div>
    )
}

export default Price