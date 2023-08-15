import classes from "./NavBar.module.css"
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav className={classes.container}>
            <h1 className={classes.bienvenida}>Productos Ecoargento</h1>
            <section>
                <button className={classes.boton}>Billeteras</button>
                <button className={classes.boton}>Organizadores</button>
                <button className={classes.boton}>Accesorios</button>
                <button className={classes.boton}>Mascoteras</button>
                <button className={classes.boton}>Posavasos</button>
                <CartWidget/>
            </section>
        </nav>
    )
}

export default NavBar