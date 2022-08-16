import '../css-copmponents/txt.css'
import './header.css'
import logo from '../../visual-components/image/logo.svg'
import menu from '../../visual-components/image/menu.svg'
import close from '../../visual-components/image/close.svg'
import { createRef, useEffect } from 'react'

function Header(){
    const burger_on = () => {
        var elem_back = document.querySelector('#burger-back');
        var elem = document.querySelector('#burger');
        elem.className = 'Header-burger-on';
        elem_back.className = 'Header-burger-background-on'
    }
    const burger_off = () => {
        var elem_back = document.querySelector('#burger-back');
        var elem = document.querySelector('#burger');
        elem.className = 'Header-burger';
        elem_back.className = 'Header-burger-background'
    }
    const parentRef = createRef();

    useEffect(() => {
        window.parent = parentRef.current.getBoundingClientRect();
    })

    return(
        <div ref={parentRef} className='Header-background'>
            <div className='Header-object'>
                <dev className="Header-left-object">
                    <img className="Header-left-object-img" src={logo} alt=''></img>
                </dev>
                <dev className="Header-right-object">
                    <button className='Header-right-obgect-txt'>Команда</button>
                    <button className='Header-right-obgect-txt'>Описание</button>
                    <button className='Header-right-obgect-txt'>Контакты</button>
                    <button className='Header-right-obgect-phone' onClick={burger_on}><img src={menu} alt=''></img></button>
                </dev>
            </div>
            <div id='burger-back' className='Headbackground'></div>
            <div id='burger-back' className='Header-burger-background'></div>
            <div id='burger' className="Header-burger">
                <button onClick={burger_off}><img className='Header-close' src={close} alt=''></img></button>
                <button className='Header-txt'>Команда</button>
                <button className='Header-txt'>Описание</button>
                <button className='Header-txt'>Контакты</button>
            </div>
        </div>
    )
}

export default Header;