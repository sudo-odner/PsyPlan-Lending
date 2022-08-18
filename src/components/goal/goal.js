import '../css-copmponents/txt.css'
import './goal.css'


function Goal(){
    return(
        <div className='Goal-background'>
            <div className='Goal-object'>
                <div className='Goal-object-text'>
                    <p className='MontBold Goal-object-text-1'>Целевая аудитория проекта</p>
                    <p className='MontSemiBold Goal-object-text-2'>Частные психотерапевты/психологи и их клиенты.</p>
                    <p className='MontSemiBold Goal-object-text-3'>*в перспективе, частные и государственные психотерапевтические клиники.</p>
                </div>
            </div>
        </div>
    )
}

export default Goal;