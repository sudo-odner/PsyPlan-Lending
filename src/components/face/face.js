import '../css-copmponents/txt.css'
import './face.css'
import example from '../../visual-components/image/example-1.png'

function Face(){
    return(
        <div className='Face-background'>
            <div className='Face-object'>
                <div className='Face-left-object'>
                    <p className='Face-left-object-txt MontBold'>
                        <span className='CM'>Psy</span>
                        <span className='CW'>Plan</span>
                    </p>
                    <p className='Face-left-object-txt-mini MontSemiBold CW-70'>
                        Приложение для оптимизации контакта пациента с психотерапевтом
                    </p>
                </div>
                <div className='Face-right-object'>
                    <img className='Face-right-object-img' src={example} alt=''></img>
                </div>
            </div>
        </div>
    )
}

export default Face;