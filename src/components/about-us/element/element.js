import '../../css-copmponents/txt.css'
import './element.css'

function Element(id, color, position, first_name, second_name, image, status, about, txt_1, txt_2, txt_3){
    if (position === 0) {
        return(
            <a name={id} className="Element-object-left">
                <div className="Element-obgect-first-left" style={{background: color}}>
                    <p className="Element-object-text-main-w Element-left">{first_name}</p>
                    <p className='Element-object-text-main-s Element-left'>{second_name}</p>
                    <img className='Element-img'src={image} alt=''></img>
                </div>

                <div className="Element-obgect-second">
                    <div className="Element-person-status">
                        <p className="Element-object-text-main-s Element-left">{status}</p>
                        <p className='Element-object-text-main-w Element-left Element-down'>{about}</p>
                        <p className='Element-object-text-little-w-70 Element-left'>{txt_1}</p>
                    </div>
                    <div className="Element-person-status Element-object-text-little-w Element-left">{txt_2}</div>
                    <div className="Element-person-status Element-object-text-little-w Element-left">{txt_3}</div>
                </div>
            </a>
        );
    }
    else {
        return(
            <a id={id} className="Element-object-right">
                <div className="Element-obgect-first-right" style={{background: color}}>
                    <p className="Element-object-text-main-w Element-right">{first_name}</p>
                    <p className='Element-object-text-main-s Element-right'>{second_name}</p>
                    <img className='Element-img'src={image} alt=''></img>
                </div>

                <div className="Element-obgect-second">
                    <div className="Element-person-status">
                        <p className="Element-object-text-main-s Element-right">{status}</p>
                        <p className='Element-object-text-main-w Element-right Element-down'>{about}</p>
                        <p className='Element-object-text-little-w-70 Element-right'>{txt_1}</p>
                    </div>
                    <div className="Element-person-status Element-object-text-little-w Element-right">{txt_2}</div>
                    <div className="Element-person-status Element-object-text-little-w Element-right">{txt_3}</div>
                </div>
            </a>
        );
    }
}

export default Element;