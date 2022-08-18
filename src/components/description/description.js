import '../css-copmponents/txt.css'
import './description.css'
import example from '../../visual-components/image/example-2.png'


function Description(){
    return(
        <div className="Description-bacground">
            <div className="Description-object">
                <div className='Description-object-text'>
                    <p className='MontBold Description-object-text-first'><span className="MontBold CM" >Psy</span>Plan позволяет увеличить эффективность коммуникации психотерапевта с клиентом</p>
                    <p className='MontSemiBold Description-object-text-second'>*За счёт ежедневного отслеживания ментального состояния пользователя с возможностью анализа состояния за выбранный период времени</p>
                </div>
                < div className='Description-object-img'><img className='Description-object-img-first' src={example} alt=''></img></div>
            </div>
        </div>
    )
}

export default Description;