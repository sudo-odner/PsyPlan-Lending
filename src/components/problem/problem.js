import '../main.css'
import './problem.css'
import phone from '../../deteils/image/phone.svg'
import clock from '../../deteils/image/clock.svg'

function Problem(){
    return(
        <div className='Problem-back'>
            <div className='Problem-main'>
                <div className='MontBold S99 CW center-text down-100'>Проблема</div>
                <div className='MontSemiBold S20 CW center-text down-100'>В сфере лечения ментальных заболеваний, не подразумевающего под собой круглосуточного наблюдения над пациентом, существует проблема коммуникации.</div>
                <div className='first-problem down-60'>
                    <img className='down-15' src={phone} alt=''></img>
                    <div className='MontRegular S20 CW center-text'>Пациент не всегда может получить обратную связь от психотерапевта.</div>
                </div>
                <div className='second-problem down-60'>
                    <img className='down-15' src={clock} alt=''></img>
                    <div className='MontRegular S20 CW center-text'>Специалист может упустить какие-либо детали из-за ограниченного времени приёма. </div>
                </div>
            </div>
        </div>
    );
}

export default Problem;