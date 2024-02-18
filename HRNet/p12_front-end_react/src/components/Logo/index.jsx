import logo from '../../assets/logo.png'
import logoTypo from '../../assets/logoTypo.png'

function Logo() {
    return (
        <div id='logo'>
            <img src={logo} alt="Logo" />
            <img src={logoTypo} alt="HR Net" />
        </div>
    )
}

export default Logo;