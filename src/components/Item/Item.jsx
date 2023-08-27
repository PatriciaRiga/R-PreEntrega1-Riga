import classes from "./Item.module.css"

const Item = ({ name, img, price}) => {
    return (
        <div className={classes.prodContainer}>
            <div className={classes.divProd}>
                <h3 className={classes.nombreProd}>{name}</h3>
                <img src={img} alt={name} className={classes.fotos}/>
                <p className={classes.precio}>Precio: ${price}</p>
                <button className={classes.boton}>Ver detalle</button>
            </div>
        </div>
    )
}

export default Item