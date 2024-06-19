import './Footer.css';

import LinksFooter from '../LinksFooter';

export const Footer = (props) => {

    const backgroundImage = props.backFooter === 'logon-footer'
    ? `${process.env.PUBLIC_URL}/images/footer.png` 
    : '';

    return (
        <div className={`footer ${props.backFooter}`} style={{backgroundImage: `url(${backgroundImage})`}}>
            <div className="inner-footer">
                <LinksFooter 
                    title="Contatos"
                    link1="mealmover@mail.com"
                    link2="(61) 99999-9999"
                    link3="Rua Pau Brasil Lote 8, Setor Norte"
                    context={props.where}
                >
                </LinksFooter>
                <LinksFooter 
                    title="Nosso Menu"
                    link1="Principais"
                    link2="Aperitivos"
                    link3="Bebidas"
                    context={props.where}
                >
                </LinksFooter>
                <LinksFooter 
                    title="Links Úteis"
                    link1="Sobre Nós"
                    link2="Feedbacks"
                    link3="Blog"
                    context={props.where}
                >
                </LinksFooter>
                <LinksFooter 
                    title="Informações"
                    link1="Serviços"
                    link2="Ajuda e Suporte"
                    link3="Termos e Condições"
                    context={props.where}
                >
                </LinksFooter>
                <LinksFooter 
                    title="Redes Sociais"
                    link1="Fabebook"
                    link2="Instagram"
                    link3="Youtube"
                    context={props.where}
                >
                </LinksFooter>
            </div>
        </div>
    );
}
