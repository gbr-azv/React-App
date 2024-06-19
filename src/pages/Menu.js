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

            let result = [];

            if (isCategory(searchQuery)) {
                if (searchQuery === 'sushi') {
                    result = [
                        { name: 'Sushi Product 1', description: 'Description for Sushi Product 1', price: 10, image: 'sushi1.jpg' },
                        { name: 'Sushi Product 2', description: 'Description for Sushi Product 2', price: 12, image: 'sushi2.jpg' },
                        { name: 'Sushi Product 3', description: 'Description for Sushi Product 3', price: 15, image: 'sushi3.jpg' },
                        { name: 'Sushi Product 4', description: 'Description for Sushi Product 4', price: 18, image: 'sushi4.jpg' },
                        { name: 'Sushi Product 5', description: 'Description for Sushi Product 5', price: 20, image: 'sushi5.jpg' }
                    ];
                } else if (searchQuery === 'drinks') {
                    result = [
                        { name: 'Drink Product 1', description: 'Description for Drink Product 1', price: 5, image: 'drink1.jpg' },
                        { name: 'Drink Product 2', description: 'Description for Drink Product 2', price: 7, image: 'drink2.jpg' },
                        { name: 'Drink Product 3', description: 'Description for Drink Product 3', price: 8, image: 'drink3.jpg' },
                        { name: 'Drink Product 4', description: 'Description for Drink Product 4', price: 6, image: 'drink4.jpg' },
                        { name: 'Drink Product 5', description: 'Description for Drink Product 5', price: 9, image: 'drink5.jpg' }
                    ];
                } else if (searchQuery === 'massas') {
                    result = [
                        { name: 'Massa Product 1', description: 'Description for Massa Product 1', price: 20, image: 'massa1.jpg' },
                        { name: 'Massa Product 2', description: 'Description for Massa Product 2', price: 22, image: 'massa2.jpg' },
                        { name: 'Massa Product 3', description: 'Description for Massa Product 3', price: 25, image: 'massa3.jpg' },
                        { name: 'Massa Product 4', description: 'Description for Massa Product 4', price: 28, image: 'massa4.jpg' },
                        { name: 'Massa Product 5', description: 'Description for Massa Product 5', price: 30, image: 'massa5.jpg' }
                    ];
                } else if (searchQuery === 'hamburguer') {
                    result = [
                        { name: 'Hamburguer Product 1', description: 'Description for Hamburguer Product 1', price: 15, image: 'hamburguer1.jpg' },
                        { name: 'Hamburguer Product 2', description: 'Description for Hamburguer Product 2', price: 17, image: 'hamburguer2.jpg' },
                        { name: 'Hamburguer Product 3', description: 'Description for Hamburguer Product 3', price: 18, image: 'hamburguer3.jpg' },
                        { name: 'Hamburguer Product 4', description: 'Description for Hamburguer Product 4', price: 19, image: 'hamburguer4.jpg' },
                        { name: 'Hamburguer Product 5', description: 'Description for Hamburguer Product 5', price: 20, image: 'hamburguer5.jpg' }
                    ];
                }
            } else if (searchQuery === 'on-offer') {
                result = [
                    { name: 'Offer Product 1', description: 'Description 1', price: 5, image: 'image3.jpg' },
                    { name: 'Offer Product 2', description: 'Description 2', price: 15, image: 'image4.jpg' }
                ];
            } else {
                result = [
                    { name: 'Search Product 1', description: 'Description 1', price: 30, image: 'image5.jpg' },
                    { name: 'Search Product 2', description: 'Description 2', price: 40, image: 'image6.jpg' }
                ];
            }

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
