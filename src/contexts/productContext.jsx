import { createContext, useContext, useState } from "react";

const ProductContext = createContext();

const ProductContext = ({children , , products: initialProducts = [], setProducts: setInitialProductsproducts: initialProducts = [], setProducts: setInitialProducts}) => {

    const [cart, setCart] = useState([]);

    return (
        <div>
            d
        </div>
    );
};

export default ProductContext;