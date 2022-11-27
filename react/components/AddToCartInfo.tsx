import React from 'react';
import { useProduct } from 'vtex.product-context';
import { useOrderForm } from 'vtex.order-manager/OrderForm'
import ButtonGroup from './ButtonGroup';
import ProductGroup from './ProductGroup';
import Totalizers from './Totalizers';
import { generateBlockClass } from '@vtex/css-handles';
import styles from './styles.css';

const AddToCartInfo  = ({blockClass}:{blockClass:string}) => {

    const container = generateBlockClass(styles.container, blockClass);

    const productInfo = useProduct();
    const {orderForm: 
        {
            items,                  // obtener la lista de items o productos seleccionado
            totalizers              // para ver cuanto de total se lleva
        }
    } = useOrderForm();
    console.log('Info del Producto:::', productInfo);
    console.log('Información de Items:::', items);
    console.log('Información de totalizers:::', totalizers);
    // console.log(items,totalizers);
    const total = {
        id : 10,
        name: "total",
        value: 1200000
    }
    return(
        <div className={container}>
            <ProductGroup products={items}/>
            {/* <Totalizers totalizers={totalizers[0]}/> */}
            <Totalizers totalizers={total} products={items}/>
            <ButtonGroup />
        </div>
    );
}

export default AddToCartInfo;

// <ProductGrup /> Obtener listado de los productos
// <Totalizers /> Obtener el valor total
// <ButtonGroup /> Va a manejar las acciones