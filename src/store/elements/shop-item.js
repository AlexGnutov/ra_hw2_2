function ShopItem(props) {
    const { product } = props;

    const style = {
        backgroundImage: `url(${product.img})`
    };

    return (
        <div className={'shop-item'}>
            <div className={'shop-image-container'} style={style}></div>
            <div className={'shop-item-name'}>{product.name}</div>
            <div className={'shop-item-color'}>{product.color}</div>
            <div className={'shop-item-price'}>${product.price}</div>
            <button className={'shop-item-add-button'}>ADD TO CART</button>
        </div>
    )
}

export default ShopItem;
