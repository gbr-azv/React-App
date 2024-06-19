import './Navbar.css'

import { Link } from 'react-router-dom';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {

    const navigate = useNavigate();
    const [search, setSearch] = useState('');

    const navigateTo = (e) => {
        e.preventDefault(); 
        const searchParams = new URLSearchParams({search : search});
        navigate(`/cardapio?${searchParams.toString()}`);
    }

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    return (
        <header className="navbar">
            <svg className="menu" xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#00000">
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
            </svg>
            <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="" className="logo"/>
            <svg className="search-mobile" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#fb6d48">
                <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/>
            </svg>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to={{pathname:"/cardapio",search:"?search=on-offer"}}>Promoções</Link>
                {/* <Link to="/">Como Funciona</Link> */}
                <Link to="/about">Quem Somos</Link>
            </div>
            <form className="search" onSubmit={navigateTo}>
                <button type="submit" onSubmit={navigateTo}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#fb6d48">
                        <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/>
                    </svg>
                </button>
                <input type="text" placeholder="Pesquisar por prato..." onChange={handleChange} />
                <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#c6c6c6">
                    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                </svg>
            </form>
            <div className="icons">
                <a href="cart" aria-label="Shopping Cart">
                    <svg className="cart" xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#000000">
                        <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Z"/>
                    </svg>
                </a>
                <a href="account" aria-label="Account Management">
                    <svg className="account" xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#000000">
                        <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM208-800h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Z"/>
                    </svg>
                </a>
            </div>
        </header>
    );
}
