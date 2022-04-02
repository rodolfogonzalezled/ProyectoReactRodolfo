import { BsInstagram, BsFacebook, BsTwitter } from 'react-icons/bs';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <footer className='Footer'>
                <div className='FooterRow'>
                    <div className='FooterSocial'>
                        <BsInstagram className='FooterSocialItem' />
                        <BsFacebook className='FooterSocialItem' />
                        <BsTwitter className='FooterSocialItem' />
                    </div>
                </div>
                <div className="FooterFirm">
                    <h5> Rodolfo Gonzalez © 2022. Todos los derechos Reservados. </h5>
                </div>
            </footer>
        </div>
    );
}

export default Footer;