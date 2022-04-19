function ShopCard(props) {
    const { product } = props;

    const style = {
        backgroundImage: `url(${product.img})`
    }

    return (
        <div className={'shop-card'} style={style}>
            <div className={'shop-card-header'}>
                <div className={'shop-card-name'}>{product.name}</div>
                <div className={'shop-card-color'}>{product.color}</div>
            </div>
            <div className={'shop-card-footer'}>
                <div className={'shop-card-price'}>${product.price}</div>
                <button className={'shop-card-add-button'}>ADD TO CART</button>
            </div>
        </div>
    )
}

export default ShopCard;
