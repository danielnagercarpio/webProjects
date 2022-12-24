import './ShoppingHistory.css';
const ShoppingItems = ({history}) => {
    console.log("hey",history.products);
    let product = [];
    for (let i = 0; i < history.products.length; i++) {
        product.push(
            <div className='shoppingTable-items'>
                <div><img src={history.products[i].image}></img></div>
                <div>Tomate frito Carrefour pack de 3 briks de 390 g. </div>
                <div>Tomate (157 g para elaborar 100 g de producto), aceite de girasol, azúcar, almidón modificado de maíz, hortalizas (cebolla y ajo), sal y acidulante: ácido cítrico.</div>
                <div>1,45 €</div>
                <div>14-12-2022</div>
            </div>
        );
    }
    return (
        <div id="s">
            {product}
        </div>
    );

}
export default ShoppingItems;