import '../../main.css'
import './element.css'


function Element(position, first_name, second_name, image, status, about, txt_1, txt_2, txt_3){
    if (position === 0) {
        return(
            <div className="Element">
                <div className="Element-first-left">
                    <p className="MontBold S36 CM">{first_name}</p>
                    <p className='down--40 MontBold S36 CW'>{second_name}</p>
                    <img className='Element-img'src={image} alt=''></img>
                </div>
                <div className="Element-second-left">
                    <div className="Element-person-status Element-down">
                        <p className="down-15 MontBold S36 CM">{status}</p>
                        <p className='down-30 MontBold S36 CW'>{about}</p>
                        <p className='MontMedium S14 CW-70'>{txt_1}</p>
                    </div>
                    <div className="Element-person-about-first Element-down MontMedium S14 CW">{txt_2}</div>
                    <div className="Element-person-about-second Element-down MontMedium S14 CW">{txt_3}</div>
                </div>
            </div>
        );
    }
    else {
        return(
            <div className="Element Element-right">
                <div className="Element-first-right">
                    <p className="MontBold S36 CM">{first_name}</p>
                    <p className='down--40 MontBold S36 CW'>{second_name}</p>
                    <img className='Element-img'src={image} alt=''></img>
                </div>
                <div className="Element-second-right">
                    <div className="Element-person-status Element-down Element-down-right">
                        <p className="down-15 MontBold S36 CM">{status}</p>
                        <p className='down-30 MontBold S36 CW'>{about}</p>
                        <p className='MontMedium S14 CW-70'>{txt_1}</p>
                    </div>
                    <div className="Element-person-about-first Element-down Element-down-right MontMedium S14 CW ">{txt_2}</div>
                    <div className="Element-person-about-second Element-down Element-down-right MontMedium S14 CW">{txt_3}</div>
                </div>
            </div>
        );
    }
}

export default Element;