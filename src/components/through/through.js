import '../css-copmponents/txt.css'
import './through.css'
import through_1 from '../../visual-components/image/through-1.png'
import through_2 from '../../visual-components/image/through-2.png'
import through_3 from '../../visual-components/image/through-3.png'
import through_4 from '../../visual-components/image/through-4.png'


function Through(){
    return(
        <div className='Through-background'>
            <div className='Through-object'>
                <div className='Through-object-main'><p>Благодаря</p></div>
                <div className='Through-object-point'>
                    <img className='Through-main-img' src={through_1} alt=''></img>
                    <div className='Through-object-text-detail Through-object-text-fight'><p className='Through-object-text'>Трекеру состояния</p></div>
                </div>

                <div className='Through-object-point'>
                    <div className='Through-object-text-detail Through-object-text-left'><p className='Through-object-text'>Возможность специалисту проводить часть психотерапии дистанционно</p></div>
                    <img className='Through-main-img' src={through_2} alt=''></img>
                </div>

                <div className='Through-object-point'>
                    <img className='Through-main-img' src={through_3} alt=''></img>
                    <div className='Through-object-text-detail Through-object-text-fight'><p className='Through-object-text'>Чат между специалистом и клиентом</p></div>
                </div>

                <div className='Through-object-point'>
                    <div className='Through-object-text-detail Through-object-text-left'><p className='Through-object-text'>Календарь плановых приёмов</p></div>
                    <img className='Through-main-img' src={through_4} alt=''></img>
                </div>
            </div>
        </div>
    )
}

export default Through;