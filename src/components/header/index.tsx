import { HeaderStyle } from "./style"
import Logo from "../../assets/svg/logo.svg"
import WhatsappIcon from "../../assets/svg/whatsapp"
import FacebookIcon from "../../assets/svg/facebook"
import Instagram from "../../assets/svg/instagram"

const Header = () => {
    return (
        <HeaderStyle>
            <img src={Logo} alt="logo" />
            <div className="buttons">
                <a className="whatsapp">
                    <WhatsappIcon />
                    Compre pelo Whatsapp
                </a>
                <FacebookIcon />
                <Instagram />
            </div>
        </HeaderStyle>
    )
}

export default Header