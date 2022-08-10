import '../main.css'
import './small_described.css'
import Example from '../../deteils/image/example.png'

function Small_Described() {
    return (
        <div className='Small_Described_back'>
            <div className='Small_Described_main'>
                <div className='left'>
                    <div className='name'>
                        <div className='MontBold S99 CM'>Psy</div>
                        <div className='MontBold S99 CW'>Plan</div>
                    </div>
                    <div className='MontBold S1 CW-70'>Приложение для оптимизации контакта пациента с психотерапевтом</div>
                </div>
                <div className='right'>
                    <img className='example-first' src={Example} alt=''></img>
                </div>
            </div>
        </div>
    );
}

export default Small_Described;