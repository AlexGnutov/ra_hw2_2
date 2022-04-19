import ShopItem from "./shop-item";

function ListView(props) {
    const { products } = props;
    return (
        <div className={'store-list-view'}>
            {products.map((product, index) => <ShopItem key={'prod-' + index} product={product}/>)}
        </div>
    )
}

export default ListView;
