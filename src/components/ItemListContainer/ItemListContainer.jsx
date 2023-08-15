import classes from "./ItemListContainer.module.css"

const ItemListContainer = ({ greeting }) => {
    
    return (
        <main>
            <h1 className={classes.bienvenida}>{greeting}</h1>
        </main>
    )
}

export default ItemListContainer