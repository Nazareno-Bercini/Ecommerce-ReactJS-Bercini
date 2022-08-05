import './ItemDetail.css'
const ItemDetail = ({data}) => {

    const {title, image, price, stock} = data

    return(

        
        <div className="detailProduct">
            <div className="imgProd">
            <img src={`/assets/img/${image}`} alt=''></img>
            </div>

            <div className="infoProd">
                <h2>{title}</h2>
                <h2 className="price">$ {price}</h2>
                <span>Disponibles: {stock}</span>
            </div>

            <div className="talles">
                <h2>Talles</h2>
                <button>S</button>
                <button>M</button>
                <button>L</button>
                <button>XL</button>
            </div>

            <div className="botonProd">
                <button>Agregar al carrito</button>
            </div>


        </div>
)
}

export default ItemDetail