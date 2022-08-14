import '../css-copmponents/txt.css'
import './problem.css'
import phone from '../../visual-components/image/phone.svg'
import clock from '../../visual-components/image/clock.svg'


function Problem(){
    return(
        <div className='Problem-background'>
            <div className='Problem-object'>
                <p className='MontBold S20 Problem-object-main'>Проблема</p>
                <p className='MontSemiBold Problem-object-main-little'>В сфере лечения ментальных заболеваний, не подразумевающего под собой круглосуточного наблюдения над пациентом, существует проблема коммуникации.</p>
                <div className='Problem-object-point'>
                    <img src={phone} alt=''></img>
                    <p className='MontRegular Problem-object-little'>Пациент не всегда может получить обратную связь от психотерапевта.</p>
                </div>
                <div className='Problem-object-point'>
                    <img src={clock} alt=''></img>
                    <p className='MontRegular Problem-object-little'>Специалист может упустить какие-либо детали из-за ограниченного времени приёма.</p>
                </div>
            </div>
        </div>
    )
}

export default Problem;