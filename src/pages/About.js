import '../styles/About.css';

import Slider from "../components/Slider";
import Text from '../components/Text';
import Footer from '../components/Footer';

function About() {

    const backgroundImage = `${process.env.PUBLIC_URL}/images/About.png`;

    return (
        <div className="about-container">
            <div className='about-slider-container'>
                <Slider />
            </div>
            <div className='about-image-container' style={{backgroundImage : `url(${backgroundImage})`}}>
                <div className='about-headers-container'>
                    <h1>Bem-vindo à Mealmover!</h1>
                    <p>Aqui você irá nos conhecer um pouco mais de perto...</p>
                </div>
            </div>
            <Text 
                h1="Quem Somos?"
                p="A Mealmover nasceu da paixão por boa comida e da vontade de tornar o acesso a ela mais fácil e conveniente. 
                Somos um time de entusiastas gastronômicos, dedicados a oferecer um serviço de entrega que une tecnologia e um 
                atendimento excepcional." 
            />
            <Text 
                h1="O Que Fazemos?"
                p="Com uma ampla rede de parceiros, oferecemos uma diversidade de opções para todos os gostos e preferências. 
                Seja um prato caseiro, uma refeição gourmet ou aquele lanche rápido, na Mealmover você encontra a variedade e a 
                qualidade que procura. Tudo isso com a conveniência de um pedido simples e uma entrega ágil." 
            />
            <Text 
                h1="Nossa História"
                p="Desde a nossa fundação, trabalhamos para aprimorar nossos serviços e expandir nossa presença. 
                Hoje, orgulhamo-nos de ser uma referência em delivery, comprometidos em continuar a evoluir e a 
                superar as expectativas dos nossos clientes." 
            />
            <Footer />
        </div>
    );
}

export default About;