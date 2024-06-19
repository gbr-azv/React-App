import './Form.css';

export const Form = ({ children, onSubmit }) => {

    const backgroundImage = `${process.env.PUBLIC_URL}/images/logon.png`;

    return (
        <form className='form' onSubmit={onSubmit} style={{backgroundImage : `url(${backgroundImage})`}}>
            <div className='outter-div'>
                { children }    
            </div> 
        </form>
    );
}
