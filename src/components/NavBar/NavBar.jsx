import classes from "./NavBar.module.css"
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav className={classes.container}>
            <h1 className={classes.bienvenida}>Productos Ecoargento</h1>
            <section>
                <button className={classes.boton}>Billeteras</button>
                <button className={classes.boton}>Accesorios</button>
                <button className={classes.boton}>Para el hogar</button>
                <button className={classes.boton}>Urbanos</button>
                <CartWidget/>
            </section>
        </nav>
    )
}

export default NavBar