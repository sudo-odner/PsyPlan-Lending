import '../main.css'
import './goal.css'
import lines from '../../deteils/image/lines.png'

function Goal(){
    return(
        <div className='Goal-back'>
            <div className='Goal-main'>
                <div className='Goal-first'>
                    <p className='MontBold S50'>Целевая аудитория проекта</p>
                    <p className='MontMedium S26'>Частные психотерапевты/психологи и их клиенты</p>
                    <p className='MontSemiBold S16 CB-70'>*в перспективе, частные и государственные психотерапевтические клиники</p>
                </div>
                <div className='Goal-second'>
                    <p className='MontBold S50 right-text'>Цели проекта</p>
                    <img className='Goal-second-img' src={lines} alt=''></img>
                    <div className='Goal-second-back'>
                        <p className='down-70 Goal-left g1 MontMedium S26'>Создание MVP – первой рабочей версии приложения</p>
                        <p className='down-120 Goal-right MontMedium S26 right-text'>Продвижение</p>
                        <p className='down-110 Goal-left g2 MontMedium S26'>Сотрудничество с практикующими специалистами в области психотерапии</p>
                        <p className='Goal-right g1 MontMedium S26 right-text gg'>Оптимизация связи специалистов с клиентами
                            <p className='MontSemiBold S16 CB-70 right-text'>*за счёт чего лечение будет происходить эффективнее</p>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Goal;