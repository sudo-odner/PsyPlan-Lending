import '../main.css'
import './description.css'
import phones from '../../deteils/image/phones.png'

function Description(){
    return(
        <div className='Description-back'>
            <div className='Description-main'>
                <div className='Description-txt'>
                    <p className="Description-txt-1 MontBold S50"><span className="MontBold S50 CM">Psy</span>Plan позволяет увеличить эффективность коммуникации психотерапевта с клиентом</p>
                    <p className="Description-txt-2 MontSemiBold S16 CB-70">
                        *За счёт ежедневного отслеживания ментального состояния пользователя с возможностью анализа состояния за выбранный период времени
                    </p>
                </div>
                <img className='Description-img' src={phones} alt=''></img>
            </div>
        </div>
    );
}

export default Description;