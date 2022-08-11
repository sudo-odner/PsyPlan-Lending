import '../css-copmponents/txt.css'
import './header.css'
import logo from '../../visual-components/image/logo.svg'

function Header(){
    return(
        <div className='Header-background'>
            <div className='Header-object'>
                <dev className="Header-left-object">
                    <img className="Header-left-object-img" src={logo} alt=''></img>
                </dev>
                <dev className="Header-right-object">
                    <button className='Header-right-obgect-txt'>Команда</button>
                    <button className='Header-right-obgect-txt'>Описание</button>
                    <button className='Header-right-obgect-txt'>Контакты</button>
                </dev>
            </div>
        </div>
    )
}

export default Header;