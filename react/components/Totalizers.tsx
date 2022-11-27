import React from 'react';

function Totalizers({totalizers, products}:any) {
    const {id,name,value} = totalizers;
    console.log('Id de total de producto::',id);
    console.log('Name de total de producto::',name);
    console.log('Value de total de producto::',value / 100);
    return (
        <div>
            <p>Tenemos {products.length} item en tu compra</p>
            <p>Total: ${value/100}</p>
        </div>
    );
}

export default Totalizers;