
import FacebookIcon from "../../assets/svg/facebook"
import Instagram from "../../assets/svg/instagram"
import Pattern from "../../assets/svg/pattern"
import WhatsappIcon from "../../assets/svg/whatsapp"
import { FooterStyle } from "./style"
import Logo from "../../assets/svg/logo.svg"

const Footer = () =>{
    return (
        <FooterStyle>
            <div className="wrap">
                <div className="logo">
                    <img src={Logo} alt="logo" />
                    <div className="text">
                        <span>Rua Francisco Paulo Braio, 39 
                            <br />  Jd Belvedere • Sorocaba/SP</span>
                        <h1>15 99134.3172</h1>
                    </div>
                </div>
                <div className="icons">
                    <div className="buttons">
                        <a className="whatsapp" target='blank' href="https://api.whatsapp.com/send?phone=5515991343172">
                            <WhatsappIcon />
                            Compre pelo Whatsapp
                        </a>
                        <div className="content">
                            <FacebookIcon />
                            <Instagram />
                        </div>
                    </div>
                    <Pattern />
                </div>
            </div>
            <div className="credit">
                <a href="/">Intelligence by Core.Ag</a>
            </div>
        </FooterStyle>
    )
}

export default Footer