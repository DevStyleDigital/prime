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
                <a className="whatsapp" target='blank' href="https://api.whatsapp.com/send?phone=5515991343172">
                    <WhatsappIcon />
                    Compre pelo Whatsapp
                </a>
                <a href="https://www.facebook.com/primemotopecasoficial?mibextid=LQQJ4d" target='blank'>
                    <FacebookIcon />
                </a>
                <a href="https://instagram.com/primemotopecasoficial?igshid=MmJiY2I4NDBkZg==" target='blank'>
                    <Instagram />
                </a>
            </div>
        </HeaderStyle>
    )
}

export default Header