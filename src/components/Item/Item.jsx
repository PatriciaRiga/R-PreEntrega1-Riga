const Item = ({ name, img, price}) => {
    return (
        <div>
            <h3>{name}</h3>
            <img src={img} alt={name}/>
            <p>Precio: ${price}</p>
            <button>Ver detalle</button>
        </div>
    )
}

export default Item