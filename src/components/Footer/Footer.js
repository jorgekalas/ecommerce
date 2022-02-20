import './Footer.css'
import logo from '../../assets/logo.png'

export const Footer = () => {
    return (
        <div className = "footer">
            <img src={logo}/>
            <p> Electroland S.A. </p>
            <p>Todos los derechos reservados</p>
        </div>
    )
}
