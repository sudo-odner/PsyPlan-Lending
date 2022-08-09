import '../main.css'
import './header.css'
import logo from "../../deteils/image/logo.svg"

function Header() {
    const goToTop = (value=0) => {
        window.scrollTo({
            top: value,
            behavior: "smooth",
        });
    };

    return(
        <div className='Header_beck'>
            <div className="Header_main">
                <div className="left"><img className="logo" src={logo}></img></div>
                <div className="rigth">
                    <button className="MontRegular S19 CW">Команда</button>
                    <button className="MontRegular S19 left-indent CW">Описание</button>
                    <button className="MontRegular S19 left-indent CW">Контакты</button>
                </div>
            </div>
        </div>
    );
}

export default Header;