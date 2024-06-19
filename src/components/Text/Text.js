import './Text.css';

export const Text = (props) => {
    return (
        <div className='info-container'>
            <div className='about-text-info'>
                <h1>{props.h1}</h1>
                <p className='about-paragraph'>{props.p}</p>
            </div>
        </div>
    );
}
