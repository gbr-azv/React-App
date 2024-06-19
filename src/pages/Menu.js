import '../styles/Menu.css';
import { isCategory } from '../utils/isCategorySearch';

import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Slider from '../components/Slider';
import Product from '../components/Product';
import Footer from '../components/Footer';

function Menu() {

    const location = useLocation();
    const [products, setProducts] = useState([]);

    useEffect(() => {

        const searchParams = new URLSearchParams(location.search);
        const searchQuery = searchParams.get('search');

        const fetchProducts = async () => {

            let url = '';
            if (isCategory(searchQuery)) {
                url = `http://localhost:8000/menu/categories?search=${searchQuery}`;
            } else if (searchQuery === 'on-offer') {
                url = `http://localhost:8000/menu/on-offer`;
            } else {
                url = `http://localhost:8000/menu/product?search=${searchQuery}`;
            }

            const response =  await fetch(url);
            const result = await response.json();

            setProducts(result);
        }

        fetchProducts();
    }, [location.search]);

    return (
        <div className="menu-products-container">
            <div className='menu-slider-container'>
                <Slider />
            </div>
            <div className='menu-container'>
                {products.length > 0 ? (
                    products.map((product, index) => (
                    <Product
                        key={index}
                        name={product.name} 
                        description={product.description} 
                        price={product.price}
                        image={product.image} 
                    />
                    ))
                ) : (
                    <div>Carregando...</div>
                )}
            </div>
            <div className='menu-footer-container'>
                <Footer
                    backFooter="logon-footer"
                    where="logon"
                />
            </div>
        </div>
    );
}

export default Menu;
