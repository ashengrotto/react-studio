// TODO: create a component that displays a single bakery item

const BakeryItem = ({name, price, image, desc, addToCart}) => {
    return(
        <div className="Bakery">
            <h2>{name}</h2>
            <h2>${price}</h2>
            <img src={image}></img>
            <p>{desc}</p>
            <button onClick={() => addToCart(BakeryItem)}>Add to Cart</button>
        </div>
    )
}

export default BakeryItem
