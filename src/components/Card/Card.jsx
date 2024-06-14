
import './Card.scss'


export const Card = ({image, title}) => {

    return (
        <>
            <div className="card">
                <div className="card__img">
                    <img src={image} alt="" />
                </div>
                <h4 className='card__title'>{title}</h4>
            </div>
        </>
    )
}