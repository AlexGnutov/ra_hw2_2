import IconSwitch from "./elements/icon-switch";
import {useState} from "react";
import CardsView from "./elements/cards-view";
import ListView from "./elements/list-view";

function Store(props) {

    const { view, products } = props;

    const [state, setState] = useState(view);

    const switchHandler = () => {
        if (state === 'view_list') {
            setState('view_module')
        } else {
            setState('view_list')
        }
    }

    return (
        <>
            <div className={'store-toolbar'}>
                <IconSwitch icon={state === 'view_module' ? 'view_list' : 'view_module'} onSwitch={switchHandler}/>
            </div>
            {state === 'view_module' ?
                <CardsView products={products}/>
                : <ListView products={products}/>}
        </>
    )
}

export default Store;
