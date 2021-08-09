import React , {createContext , useState} from 'react'
/*
export const orderItems = []

export let addOrderItem = (product)=>{
    for( let el of orderItems)
    {
        if(el.item===product.item) //if newly added product already exists in array
        {
            el.price = (el.price/el.quantity)*(product.quantity+el.quantity) // multiply unit price by total quantity (a simpler solution exists but idc)
            el.quantity = el.quantity + product.quantity //update quantity
            return
        }
    }
    orderItems.push(product)
}*/


export const orderListContext = createContext()

export const OrderListProvider = props =>{
    const [orderItems,setOrderItems] = useState([])
    return(
        <orderListContext.Provider value={[orderItems,setOrderItems]}>
            {props.children}
        </orderListContext.Provider>
    )
}

