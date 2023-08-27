const products = [
    {
        id: '1',
        name: 'Billetera de bolsillo',
        price: 3500,
        category: 'Billeteras',
        img : '../src/Media/billetera.jpg',
        stock: 25,
        description: 'Billetera de bolsillo cosida de 8 cm x 11cm. Incluye división para billetes y 2 tarjeteros con 4 divisiones c/u. Con o sin grabado.'
    },
    {id: '2', name: 'Organizador', price: 2000, category: 'Organizadores', img: '../src/Media/organizador.jpg', stock: 40, description: 'Organizador con remaches. Medidas: 21 cm, 18 cm, 15 cm de lado.'},
    {id: '3', name: 'Pulsera', price: 2000, category: 'Accesorios', img: '../src/Media/pulsera.jpg', stock: 100, description: 'Pulsera de diseño propio con detalles en metal'},
    {id: '4', name: 'Cama para mascotas', price: 4000, category: 'Mascoteras', img: '../src/Media/mascotera.jpg', stock: 10, description: 'Cama para mascotas de 55 cm a 62 cm de diámetro. Incluye colchón con funda desmontable.'},
    {id: '5', name: 'Posavaso', price: 350, category: 'Posavasos', img: '../src/Media/posavasos.jpeg', stock: 30, description: 'Posavaso cuadrado 12 cm de lado. Circular de 12 cm de diámetro.'},
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
    }, 1000)
    })
}