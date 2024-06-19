import './Categories.css'

import { useNavigate } from 'react-router-dom';

export const Categories = (props) => {

    const imageUrls = {
        hamburguer: `${process.env.PUBLIC_URL}/images/categories-burguer.webp`,
        sushi: `${process.env.PUBLIC_URL}/images/categories-sushi.webp`,
        massas: `${process.env.PUBLIC_URL}/images/categories-pasta.webp`,
        drinks: `${process.env.PUBLIC_URL}/images/categories-drinks.webp`,
    };

    const backgroundImage = imageUrls[props.id] || '';

    const navigate = useNavigate();

    const navigateTo = () => {
        const searchParams = new URLSearchParams({ search : props.id });
        navigate(`/cardapio?${searchParams.toString()}`);
    }

    return (
        <div className="card" onClick={navigateTo}>
            <div className={props.id} style={{backgroundImage : `url(${backgroundImage})`}}></div>
            <div className="gradient"></div>
            <p className="title">{props.id}</p>
        </div>
    );
}
