import './Product.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faStar  } from '@fortawesome/free-solid-svg-icons';

import { formatPrice } from '../../utils/formatBRL';

export const Product = (props) => {

    return (
        <div className="product">
            <div className="img-container">
                <img 
                    src={`${process.env.PUBLIC_URL}/menu/${props.image}`} 
                    alt='product' width='100px' 
                    className='product-img'>   
                </img>
            </div>
            <div className='text-container'>
                <h1 className='product-name'>{props.name}</h1>
                <div className='stars-container'>
                    <FontAwesomeIcon icon={faStar} className='star-icon' />
                    <FontAwesomeIcon icon={faStar} className='star-icon' />
                    <FontAwesomeIcon icon={faStar} className='star-icon' />
                </div>
                <p className='product-description'>{props.description}</p>
            </div>
            <div className='buy-button-container'>
                <button className='product-buy-button'>
                    <div>Comprar</div>
                    <div><FontAwesomeIcon icon={faCartShopping} className='cart-icon'/></div>
                </button>
                <span className='buy-price'>{formatPrice(props.price)}</span>
            </div>
        </div>
    );
}
