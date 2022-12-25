import './ShoppingHistory.css';
import Modal from './Modal';
const ShoppingItems = ({history}) => {
    let product = [];
    let modals = [];
    for (let i = 0; i < history.products.length; i++) {
        modals.push(<Modal imgLink={history.products[i].image} />)
        product.push(
            <div className='shoppingTable-items'>
                <div
                onClick={e => {
                    function showModal() {
                        document.getElementById(history.products[i].image).style.display = "block";
                    }
                    showModal()
                }}
                
                ><img src={history.products[i].image}></img>
                </div>
                <div><p>Tomate frito Carrefour pack de 3 briks de 390 g. </p></div>
                <div><p>Tomate (157 g para elaborar 100 g de producto), aceite de girasol, azúcar, almidón modificado de maíz, hortalizas (cebolla y ajo), sal y acidulante: ácido cítrico.</p></div>
                <div><p>1,45 €</p></div>
                <div><p>14-12-2022</p></div>
            </div>
        );
    }
    return (
        <>
        {modals}

        <div id="products">
            {product}
        </div>

        </>
    );

}
export default ShoppingItems;