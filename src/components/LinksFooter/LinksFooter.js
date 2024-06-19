import './LinksFooter.css';

export const LinksFooter = (props) => {

    return (
        <div className={`links-footer ${props.context}`}>
            <h1>{props.title}</h1>
            <a href="link1">{props.link1}</a>
            <a href="link2">{props.link2}</a>
            <a href="link3">{props.link3}</a>
        </div>
    );
}
