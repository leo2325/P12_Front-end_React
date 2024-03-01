import logo from '../../assets/logo.WebP'

function Logo() {
    return (
        <header id='logo'>
            <h1>
                <img src={logo} alt="Logo" />
                HR Net
            </h1>
        </header>
    )
}

export default Logo;