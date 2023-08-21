import { getProducts } from "../../asyncMock"
import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import classes from "./ItemListContainer.module.css"

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        getProducts().then(result => {
            console.log(result)
            setProducts(result)
        })
    }, [])

    console.log(products)

    return (
        <main>
            <h1 className={classes.bienvenida}>{greeting}</h1>
            <ItemList products={products}/>
        </main>
    )
}

export default ItemListContainer