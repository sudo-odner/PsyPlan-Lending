import '../main.css'
import './small_description.css'
import Example from '../../deteils/image/example.png'

function Small_Description() {
    return (
        <div className='Small_Description-back'>
            <div className='Small_Description-main'>
                <div className='Small_Description-left'>
                    <div className='name'>
                        <div className='MontBold S99 CM'>Psy</div>
                        <div className='MontBold S99 CW'>Plan</div>
                    </div>
                    <div className='MontBold S19 CW-70'>Приложение для оптимизации контакта пациента с психотерапевтом</div>
                </div>
                <div className='Small_Description-right'>
                    <img className='example-first' src={Example} alt=''></img>
                </div>
            </div>
        </div>
    );
}

export default Small_Description;