import ShopCard from "./shop-card";

function CardsView(props) {
    const { products } = props;
    return (
        <div className={'store-cards-view'}>
            {products.map((product, index) => <ShopCard key={'prod-' + index}product={product}/>)}
        </div>
    )
}

export default CardsView;
