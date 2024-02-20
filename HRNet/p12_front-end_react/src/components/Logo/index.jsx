import logo from '../../assets/logo.png'
import logoTypo from '../../assets/logoTypo.png'

function Logo() {
    return (
        <header id='logo'>
            <h1>
                <img src={logo} alt="Logo" />
                <img src={logoTypo} alt="HR Net" />
            </h1>
        </header>
    )
}

export default Logo;