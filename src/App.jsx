import React, {useEffect, useState} from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Demo from "./components/demo.jsx";
import Card from "./components/card.jsx";

const BASE_URL = "https://api.escuelajs.co/api/v1";
const App = () => {

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products")
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.error(err));
    }, []);

    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/categories")
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(err => console.log(err));
    }, []);


    return (
    <>
        <Navbar />
        <Card products={products} />
    </>
  )
}

export default App;

