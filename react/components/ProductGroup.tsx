import React from 'react';
import { generateBlockClass } from '@vtex/css-handles';
import styles from './styles.css';

function ProductGroup({products, blockClass}:any) {
    const container__item = generateBlockClass(styles.container__item, blockClass);
    console.log('Mis productos en product group son: ', products);
    return (
        <>
            {
                products.map((product:any,index:number)=>{
                    return(
                        <div key={index} className={container__item}>
                            <div>
                                <img src={product.imageUrls.at1x} alt={product.name} />
                            </div>
                            <div>
                                <p>Name: {product.name}</p>
                                <p>id: {product.id}</p>
                                <p>Price: {product.price / 100}</p>
                                <p>Cantidad: {product.quantity}</p>
                            </div>
                            <hr/>
                        </div>
                    )
                })
            }
        </>
    );
}

export default ProductGroup;