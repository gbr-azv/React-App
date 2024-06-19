import './Banner.css'

export const Banner = () => {

    return (
        <div className="image-container">
            <img src={`${process.env.PUBLIC_URL}/images/banner.png`} alt="Banner Promocional" className="image"></img>
        </div>
    );
}