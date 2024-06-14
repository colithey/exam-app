import './Main.scss'
import heroImg from '../../assets/images/hero-img.png'

export const Main = () => {
    return (
        <>
            <section className='main' id='main'>
                <div className="container main__container">
                    <div className="main__left">
                        <h2 className='main__title'>Новые поступления в этом сезоне</h2>
                        <p className='main__subtitle'>Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время исследовать.</p>
                        <div className="main__btn">
                            <svg width="67" height="68" viewBox="0 0 67 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="67" height="67" transform="translate(0 0.5)" fill="#6E9C9F" fill-opacity="0.1" />
                                <path d="M33 20V48M33 48L26 40.8108M33 48L40 40.8108" stroke="#6E9C9F" />
                            </svg>
                            <button className='main__button'>Открыть магазин</button>
                        </div>
                    </div>
                    <div className="main__right">
                        <div className="main__img">
                            <img src={heroImg} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}