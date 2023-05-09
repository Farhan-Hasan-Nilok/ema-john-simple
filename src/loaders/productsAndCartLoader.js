import { getStoredCart } from "../utilities/fakedb";

export const productsAndCartLoader = async () =>{
    const productsData = await fetch('products.json');
    const products = await productsData.json();
    
    const savedCart = getStoredCart();
    const previousCart = [];

    for(const key in savedCart){
        const addedCart = products.find(product => product.id === key);
        if(addedCart){
            const quantity = savedCart[key];
            addedCart.quantity = quantity;
            previousCart.push(addedCart);
        }
    }

    return {products, previousCart};
}