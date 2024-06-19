import './Card.css';

import { useNavigate } from 'react-router-dom';

export const Card = (props) => {

    const backgroundImage = props.backImage === 'promo'
    ? `${process.env.PUBLIC_URL}/images/promo-mobile.png` 
    : `${process.env.PUBLIC_URL}/images/cadastro.png`;

    const navigate = useNavigate();

    function navigateTo (page) {

        if (page === "/cardapio") {
            const searchParams = new URLSearchParams({search : 'on-offer'});
            navigate(`${page}?${searchParams.toString()}`);
        } else {
            navigate(page);
        }
    }

    return (
        <div className={`cards ${props.backImage}`} style={{backgroundImage: `url(${backgroundImage})`}}>
            <h3 className="header3">{props.header3}</h3>
            <h1 className="header1">{props.header1}</h1>
            <p className="paragraph">{props.paragraph}</p>
            <button 
                className="button" 
                onClick={() => navigateTo(props.destiny)}
            >
                {props.button}
            </button>
        </div>
    );
}
