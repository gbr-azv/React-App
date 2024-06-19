import './Input.css';

export const Input = (props) => {

    return (
        <div className='input-container'>
            <label className='label' htmlFor={props.htmlFor}>{props.label}</label>
            <input
                id={props.htmlFor}
                className='input' 
                type={props.type}
                placeholder={props.placeholder}
                name={props.htmlFor}
                onChange={props.onChange}
                value={props.value}
                required
            />
        </div>
    );
}
