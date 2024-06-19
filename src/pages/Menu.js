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

            const products = [
                // Sushi
                { name: 'Sushi de Salmão', description: 'Sushi tradicional com fatias de salmão fresco.', price: 10.50, image: '/1.jpg' },
                { name: 'Sushi de Atum', description: 'Sushi com atum de alta qualidade.', price: 12.75, image: '/2.jpg' },
                { name: 'Dragon Roll', description: 'Rolo de sushi festivo com camarão tempurá, abacate, pepino e carne de caranguejo, coberto com mais abacate e molho unagi.', price: 14.00, image: '/3.jpg' },
                { name: 'California Roll', description: 'Rolo de sushi recheado com carne de caranguejo, pepino e abacate, normalmente servido ao contrário.', price: 8.50, image: '/4.jpg' },
                { name: 'Philadelphia Roll', description: 'Rolo de sushi com salmão, cream cheese Philadelphia e pepino.', price: 9.00, image: '/5.jpg' },
                { name: 'Caterpillar Roll', description: 'Rolo de sushi com enguia cozida e pepino, coberto com fatias de abacate.', price: 13.00, image: '/6.jpg' },
                { name: 'Beef Steak Sushi', description: 'Sushi de carne de bife marinado em molho japonês tradicional, servido com arroz de sushi.', price: 15.00, image: '/7.jpg' },
                { name: 'Ikura', description: 'Sushi com ovas de salmão, conhecido por seu sabor distinto e textura suculenta.', price: 18.00, image: '/8.jpg' },
                { name: 'Boston Roll', description: 'Rolo de sushi com camarão cozido, pepino e abacate, envolto em alga marinha e arroz.', price: 10.00, image: '/9.jpg' },
            
                // Hamburguer
                { name: 'Classic Cheeseburger', description: 'Hambúrguer clássico com queijo cheddar derretido, alface crocante, tomate fresco e picles.', price: 12.00, image: '/10.jpg' },
                { name: 'Bacon Onion Jam Burger', description: 'Hambúrguer suculento coberto com geleia de cebola e bacon, queijo cheddar branco e rúcula, em um pão tostado.', price: 14.00, image: '/11.jpg' },
                { name: 'Spicy and Smoky Bacon Burger', description: 'Hambúrguer com bacon caramelizado picante, anéis de cebola crocantes e molho especial defumado.', price: 15.00, image: '/12.jpeg' },
                { name: 'Hawaiian Burger', description: 'Hambúrguer suculento com abacaxi grelhado, presunto e queijo suíço, servido em um pão de brioche com molho teriyaki.', price: 13.50, image: '/13.jpg' },
                { name: 'Chorizo Burger', description: 'Hambúrguer de carne bovina misturado com chorizo picante, coberto com queso fresco, jalapeños e abacate.', price: 14.50, image: '/14.jpg' },
                { name: 'Healthy Greek Burger', description: 'Hambúrguer de carne moída misturada com espinafre, feta e tomate seco, regado com molho tzatziki.', price: 13.00, image: '/15.jpg' },
                { name: 'Falafel Burger', description: 'Hambúrguer vegetariano feito de grão-de-bico, ervas e especiarias, servido com molho tahini, alface, tomate e picles.', price: 12.00, image: '/16.png' },
                { name: 'Breakfast Burger', description: 'Combinação de hambúrguer com bacon, ovo frito e queijo, servido em um pão tostado ou muffin inglês.', price: 14.00, image: '/17.jpg' },
                { name: 'BBQ Crunch Burger', description: 'Hambúrguer com sabor de churrasco, coberto com cebolas crocantes e molho BBQ.', price: 13.00, image: '/18.jpg' },
            
                // Drinks
                { name: 'Old Fashioned', description: 'Coquetel clássico feito com bourbon, açúcar, bitters e água, decorado com uma fatia de laranja e cereja.', price: 12.00, image: '/19.jpg' },
                { name: 'Margarita', description: 'Tequila, triple sec e suco de limão servidos em copo com borda de sal.', price: 10.50, image: '/20.jpg' },
                { name: 'Moscow Mule', description: 'Vodka, cerveja de gengibre e suco de limão servidos em uma caneca de cobre.', price: 9.50, image: '/21.jpg' },
                { name: 'Espresso Martini', description: 'Vodka, licor de café e café espresso, criando um coquetel sofisticado e cremoso.', price: 11.00, image: '/22.jpg' },
                { name: 'Aperol Spritz', description: 'Aperol, vinho espumante e água com gás, perfeito para uma tarde de verão.', price: 8.00, image: '/23.jpg' },
                { name: 'Negroni', description: 'Gin, vermute doce e Campari, um coquetel refrescante e amargo.', price: 10.00, image: '/24.jpg' },
                { name: 'Mai Tai', description: 'Rum claro e escuro, suco de abacaxi, suco de laranja e grenadine, criando um sabor tropical.', price: 12.50, image: '/25.jpg' },
                { name: 'Mojito', description: 'Rum, hortelã, açúcar, suco de limão e água com gás, proporcionando um sabor refrescante.', price: 9.00, image: '/26.jpg' },
                { name: 'White Russian', description: 'Vodka, licor de café e creme ou leite, uma mistura deliciosa para os amantes de café.', price: 10.00, image: '/27.jpg' },
            
                // Massas
                { name: 'Spaghetti Carbonara', description: 'Massa tradicional italiana feita com ovos, queijo Pecorino Romano, guanciale e pimenta preta.', price: 15.00, image: '/28.jpg' },
                { name: 'Lasagna alla Bolognese', description: 'Lasagna em camadas com molho de carne, queijo ricota, mozzarella e Parmigiano Reggiano.', price: 18.00, image: '/29.jpg' },
                { name: 'Penne all\'Arrabbiata', description: 'Penne em um molho picante de tomate, alho, azeite de oliva e pimenta vermelha.', price: 12.00, image: '/30.jpg' },
                { name: 'Fettuccine Alfredo', description: 'Fettuccine servido com um rico molho cremoso de manteiga e Parmigiano Reggiano.', price: 14.50, image: '/31.jpg' },
                { name: 'Spaghetti alla Puttanesca', description: 'Spaghetti com molho de tomate, alcaparras, azeitonas, anchovas e alho.', price: 13.00, image: '/32.jpg' },
                { name: 'Gnocchi al Pesto', description: 'Nhoque de batata servido com molho pesto de manjericão, pinoli, alho e Parmigiano Reggiano.', price: 16.00, image: '/33.jpg' },
                { name: 'Tortellini en Brodo', description: 'Tortellini recheado com carne e queijo, servido em um caldo de carne saboroso.', price: 14.00, image: '/34.jpg' },
                { name: 'Pasta e Fagioli', description: 'Sopa italiana de massa e feijão com legumes em um caldo saboroso.', price: 12.50, image: '/35.jpg' },
                { name: 'Rigatoni alla Norma', description: 'Rigatoni com molho de tomate, berinjela frita, ricota salata e manjericão fresco.', price: 14.00, image: '/36.jpg' }
            ];

            function searchProducts(searchQuery) {
                const lowerCaseQuery = searchQuery.toLowerCase();
                return products.filter(product => 
                    product.name.toLowerCase().includes(lowerCaseQuery) ||
                    product.description.toLowerCase().includes(lowerCaseQuery)
                );
            }

            if (isCategory(searchQuery)) {
                if (searchQuery === 'sushi') {
                    result = [
                        { name: 'Sushi de Salmão', description: 'Sushi tradicional com fatias de salmão fresco.', price: 10.50, image: '/1.jpg' },
                        { name: 'Sushi de Atum', description: 'Sushi com atum de alta qualidade.', price: 12.75, image: '/2.jpg' },
                        { name: 'Dragon Roll', description: 'Rolo de sushi festivo com camarão tempurá, abacate, pepino e carne de caranguejo, coberto com mais abacate e molho unagi.', price: 14.00, image: '/3.jpg' },
                        { name: 'California Roll', description: 'Rolo de sushi recheado com carne de caranguejo, pepino e abacate, normalmente servido ao contrário.', price: 8.50, image: '/4.jpg' },
                        { name: 'Philadelphia Roll', description: 'Rolo de sushi com salmão, cream cheese Philadelphia e pepino.', price: 9.00, image: '/5.jpg' },
                        { name: 'Caterpillar Roll', description: 'Rolo de sushi com enguia cozida e pepino, coberto com fatias de abacate.', price: 13.00, image: '/6.jpg' },
                        { name: 'Beef Steak Sushi', description: 'Sushi de carne de bife marinado em molho japonês tradicional, servido com arroz de sushi.', price: 15.00, image: '/7.jpg' },
                        { name: 'Ikura', description: 'Sushi com ovas de salmão, conhecido por seu sabor distinto e textura suculenta.', price: 18.00, image: '/8.jpg' },
                        { name: 'Boston Roll', description: 'Rolo de sushi com camarão cozido, pepino e abacate, envolto em alga marinha e arroz.', price: 10.00, image: '/9.jpg' }
                    ];
                } else if (searchQuery === 'hamburguer') {
                    result = [
                        { name: 'Classic Cheeseburger', description: 'Hambúrguer clássico com queijo cheddar derretido, alface crocante, tomate fresco e picles.', price: 12.00, image: '/10.jpg' },
                        { name: 'Bacon Onion Jam Burger', description: 'Hambúrguer suculento coberto com geleia de cebola e bacon, queijo cheddar branco e rúcula, em um pão tostado.', price: 14.00, image: '/11.jpg' },
                        { name: 'Spicy and Smoky Candied Bacon Burger', description: 'Hambúrguer com bacon caramelizado picante, anéis de cebola crocantes e molho especial defumado.', price: 15.00, image: '/12.jpeg' },
                        { name: 'Hawaiian Burger', description: 'Hambúrguer suculento com abacaxi grelhado, presunto e queijo suíço, servido em um pão de brioche com molho teriyaki.', price: 13.50, image: '/13.jpg' },
                        { name: 'Chorizo Burger', description: 'Hambúrguer de carne bovina misturado com chorizo picante, coberto com queso fresco, jalapeños e abacate.', price: 14.50, image: '/14.jpg' },
                        { name: 'Healthy Greek Burger', description: 'Hambúrguer de carne moída misturada com espinafre, feta e tomate seco, regado com molho tzatziki.', price: 13.00, image: '/15.jpg' },
                        { name: 'Falafel Burger', description: 'Hambúrguer vegetariano feito de grão-de-bico, ervas e especiarias, servido com molho tahini, alface, tomate e picles.', price: 12.00, image: '/16.png' },
                        { name: 'Breakfast Burger', description: 'Combinação de hambúrguer com bacon, ovo frito e queijo, servido em um pão tostado ou muffin inglês.', price: 14.00, image: '/17.jpg' },
                        { name: 'BBQ Crunch Burger', description: 'Hambúrguer com sabor de churrasco, coberto com cebolas crocantes e molho BBQ.', price: 13.00, image: '/18.jpg' }
                    ];
                } else if (searchQuery === 'drinks') {
                    result = [
                        { name: 'Old Fashioned', description: 'Coquetel clássico feito com bourbon, açúcar, bitters e água, decorado com uma fatia de laranja e cereja.', price: 12.00, image: '/19.jpg' },
                        { name: 'Margarita', description: 'Tequila, triple sec e suco de limão servidos em copo com borda de sal.', price: 10.50, image: '/20.jpg' },
                        { name: 'Moscow Mule', description: 'Vodka, cerveja de gengibre e suco de limão servidos em uma caneca de cobre.', price: 9.50, image: '/21.jpg' },
                        { name: 'Espresso Martini', description: 'Vodka, licor de café e café espresso, criando um coquetel sofisticado e cremoso.', price: 11.00, image: '/22.jpg' },
                        { name: 'Aperol Spritz', description: 'Aperol, vinho espumante e água com gás, perfeito para uma tarde de verão.', price: 8.00, image: '/23.jpg' },
                        { name: 'Negroni', description: 'Gin, vermute doce e Campari, um coquetel refrescante e amargo.', price: 10.00, image: '/24.jpg' },
                        { name: 'Mai Tai', description: 'Rum claro e escuro, suco de abacaxi, suco de laranja e grenadine, criando um sabor tropical.', price: 12.50, image: '/25.jpg' },
                        { name: 'Mojito', description: 'Rum, hortelã, açúcar, suco de limão e água com gás, proporcionando um sabor refrescante.', price: 9.00, image: '/26.jpg' },
                        { name: 'White Russian', description: 'Vodka, licor de café e creme ou leite, uma mistura deliciosa para os amantes de café.', price: 10.00, image: '/27.jpg' }
                    ];
                } else if (searchQuery === 'massas') {
                    result = [
                        { name: 'Spaghetti Carbonara', description: 'Massa tradicional italiana feita com ovos, queijo Pecorino Romano, guanciale e pimenta preta.', price: 15.00, image: '/28.jpg' },
                        { name: 'Lasagna alla Bolognese', description: 'Lasagna em camadas com molho de carne, queijo ricota, mozzarella e Parmigiano Reggiano.', price: 18.00, image: '/29.jpg' },
                        { name: 'Penne Arrabbiata', description: 'Penne em um molho picante de tomate, alho, azeite de oliva e pimenta vermelha.', price: 12.00, image: '/30.jpg' },
                        { name: 'Fettuccine Alfredo', description: 'Fettuccine servido com um rico molho cremoso de manteiga e Parmigiano Reggiano.', price: 14.50, image: '/31.jpg' },
                        { name: 'Spaghetti alla Puttanesca', description: 'Spaghetti com molho de tomate, alcaparras, azeitonas, anchovas e alho.', price: 13.00, image: '/32.jpg' },
                        { name: 'Gnocchi al Pesto', description: 'Nhoque de batata servido com molho pesto de manjericão, pinoli, alho e Parmigiano Reggiano.', price: 16.00, image: '/33.jpg' },
                        { name: 'Tortellini en Brodo', description: 'Tortellini recheado com carne e queijo, servido em um caldo de carne saboroso.', price: 14.00, image: '/34.jpg' },
                        { name: 'Pasta e Fagioli', description: 'Sopa italiana de massa e feijão com legumes em um caldo saboroso.', price: 12.50, image: '/35.jpg' },
                        { name: 'Rigatoni alla Norma', description: 'Rigatoni com molho de tomate, berinjela frita, ricota salata e manjericão fresco.', price: 14.00, image: '/36.jpg' }
                    ];
                }                
            } else if (searchQuery === 'on-offer') {
                result = [
                    { name: 'Spaghetti Carbonara', description: 'Massa tradicional italiana feita com ovos, queijo Pecorino Romano, guanciale e pimenta preta.', price: 15.00, image: '/28.jpg' },
                    { name: 'Lasagna alla Bolognese', description: 'Lasagna em camadas com molho de carne, queijo ricota, mozzarella e Parmigiano Reggiano.', price: 18.00, image: '/29.jpg' },
                    { name: 'Old Fashioned', description: 'Coquetel clássico feito com bourbon, açúcar, bitters e água, decorado com uma fatia de laranja e cereja.', price: 12.00, image: '/19.jpg' },
                    { name: 'Margarita', description: 'Tequila, triple sec e suco de limão servidos em copo com borda de sal.', price: 10.50, image: '/20.jpg' },
                    { name: 'Classic Cheeseburger', description: 'Hambúrguer clássico com queijo cheddar derretido, alface crocante, tomate fresco e picles, servido em um pão macio com ketchup e mostarda.', price: 12.00, image: '/10.jpg' },
                    { name: 'Bacon Onion Jam Burger', description: 'Hambúrguer suculento coberto com geleia de cebola e bacon, queijo cheddar branco e rúcula, em um pão tostado.', price: 14.00, image: '/11.jpg' },
                    { name: 'Sushi de Salmão', description: 'Sushi tradicional com fatias de salmão fresco.', price: 10.50, image: '/1.jpg' },
                    { name: 'Sushi de Atum', description: 'Sushi com atum de alta qualidade.', price: 12.75, image: '/2.jpg' }
                ];
            } else {
                result = searchProducts(searchQuery);
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
