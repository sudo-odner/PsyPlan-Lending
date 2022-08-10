import '../main.css'
import './through.css'
import first_1 from '../../deteils/image/first-1.png'
import first_2 from '../../deteils/image/first-2.png'
import second_1 from '../../deteils/image/second-1.png'
import second_2 from '../../deteils/image/second-2.png'

function Through() {
    return(
        <div className='Through-back'>
            <div className='Through-main'>
                <div className='Through-main-first'>
                    <img className='Through-main-img' src={first_1} alt=''></img>
                    <p className='MontMedium S26 Through-main-txt Through-main-txt-right'>Трекеру состояния</p>
                </div>
                <div className='Through-main-second'>
                    <p className='MontMedium S26 Through-main-txt'>Возможность специалисту проводить часть психотерапии дистанционно</p>
                    <img className='Through-main-img' src={second_1} alt=''></img>
                </div>
                <div className='Through-main-third'>
                    <img className='Through-main-img' src={first_2} alt=''></img>
                    <p className='MontMedium S26 Through-main-txt Through-main-txt-right'>Чат между специалистом и клиентом</p>
                </div>
                <div className='Through-main-fourth'>
                    <p className='MontMedium S26 Through-main-txt s'>Календарь плановых приёмов</p>
                    <img className='Through-main-img' src={second_2} alt=''></img>
                </div>
            </div>
        </div>
    )
}

export default Through;