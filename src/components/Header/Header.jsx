import { Link, NavLink } from 'react-router-dom'
import './Header.scss'

export const Header = () => {
    return (
        <>
            <header className='header' id='header'>
                <div className="container header__container">
                    <div className="header__logo">
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_62246_55)">
                                <path d="M21.5169 22.6493L21.1587 20.9776C20.4207 17.5332 19.0683 14.2964 17.1387 11.3529V8.64058C18.0275 7.97178 18.6035 6.9084 18.6035 5.71289V4.24805C18.6035 3.84355 18.2756 3.51562 17.8711 3.51562H17.1387V0.732422C17.1387 0.32793 16.8107 0 16.4062 0C16.0018 0 15.6738 0.32793 15.6738 0.732422V3.52339C14.3584 3.6001 13.2059 4.29209 12.5 5.31528C11.7941 4.29209 10.6416 3.6001 9.32617 3.52339V0.732422C9.32617 0.32793 8.99824 0 8.59375 0C8.18926 0 7.86133 0.32793 7.86133 0.732422V3.51562H7.1289C6.72441 3.51562 6.39648 3.84355 6.39648 4.24805V5.71289C6.39648 6.9084 6.97246 7.97178 7.86133 8.64058V11.3529C5.93174 14.2964 4.57934 17.5332 3.84126 20.9776L3.48305 22.6493C3.40649 23.0066 3.60507 23.3658 3.94853 23.4909C6.69741 24.4923 9.57451 25 12.5 25C15.4255 25 18.3026 24.4923 21.0515 23.4909C21.3949 23.3658 21.5935 23.0067 21.5169 22.6493ZM15.918 4.98047H17.1387V5.71289C17.1387 6.92446 16.153 7.91016 14.9414 7.91016H13.2324V7.66602C13.2324 6.1852 14.4372 4.98047 15.918 4.98047ZM7.86133 4.98047H9.08203C10.5628 4.98047 11.7676 6.1852 11.7676 7.66602V7.91016H10.0586C8.84702 7.91016 7.86133 6.92446 7.86133 5.71289V4.98047ZM10.0586 9.375H14.9414C15.1922 9.375 15.4371 9.34956 15.6738 9.30132V10.8398H9.32617V9.30132C9.56289 9.34956 9.80781 9.375 10.0586 9.375ZM12.5 23.5352C9.95849 23.5352 7.45561 23.128 5.05073 22.3244L5.27353 21.2846C5.96118 18.0757 7.21054 15.0566 8.98901 12.3047L16.0109 12.3047C17.7894 15.0566 19.0388 18.0757 19.7264 21.2845L19.9492 22.3244C17.5444 23.128 15.0415 23.5352 12.5 23.5352Z" fill="black" />
                            </g>
                            <defs>
                                <clipPath id="clip0_62246_55">
                                    <rect width="25" height="25" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <Link className='header__logo-text' to='/'>Womazing</Link>
                    </div>
                    <nav className='header__nav'>
                        <NavLink className='header__link' to='/'>Главная</NavLink>
                        <NavLink className='header__link' to='/shop'>Магазин</NavLink>
                    </nav>
                    <aside className='header__aside'>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.7483 2.43513L11.8551 0.548477L7.92337 4.47367L9.44758 6.04781C9.19214 6.50125 8.6379 7.3699 7.69334 8.31447C6.74865 9.25918 5.87366 9.81971 5.41587 10.0792L3.87261 8.55562L0.0022583 12.4029L1.8851 14.2983C2.60485 15.0181 3.69998 15.2046 4.6102 14.7625C5.99921 14.0879 8.09546 12.8431 10.1943 10.7443C12.2931 8.64552 13.5379 6.54924 14.2125 5.16023C14.3723 4.83109 14.45 4.47787 14.45 4.12692C14.45 3.5072 14.2078 2.89464 13.7483 2.43513ZM13.1977 4.66732C12.5609 5.97846 11.3845 7.95865 9.39661 9.94658C7.40868 11.9345 5.42849 13.1109 4.11735 13.7477C3.63935 13.9799 3.06287 13.8806 2.6842 13.5019L1.59746 12.4079L3.87543 10.1436L5.19015 11.4415L5.5419 11.2849C5.59905 11.2595 6.95947 10.6438 8.49116 9.11215C10.0239 7.57947 10.6267 6.23054 10.6515 6.17386L10.8041 5.82683L9.50677 4.48705L11.8559 2.14178L12.9512 3.23327C13.3307 3.6133 13.4298 4.18952 13.1977 4.66732Z" fill="#6E9C9F" />
                        </svg>
                        <p className='header__phone'>+7 (495) 823-54-12</p>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_62246_76)">
                                <path d="M23.8454 8.2243C23.7281 8.10906 23.5642 8.05442 23.4012 8.07624H17.0343V5.26295C17.0343 2.4826 14.7804 0.228699 12.0001 0.228699C9.21971 0.228699 6.96582 2.4826 6.96582 5.26295V8.07624H0.598861C0.421164 8.07624 0.243523 8.07624 0.154646 8.2243C0.0352739 8.33902 -0.0201042 8.5051 0.00659291 8.66851L2.22761 20.81C2.53789 22.5037 4.00034 23.7431 5.72199 23.7713H18.278C20.0046 23.7289 21.464 22.4797 21.7724 20.7804L23.9934 8.66851C24.0201 8.5051 23.9648 8.33902 23.8454 8.2243ZM8.1503 5.26295C8.1503 3.13682 9.87388 1.41324 12 1.41324C14.1261 1.41324 15.8497 3.13682 15.8497 5.26295V8.07624H8.1503V5.26295ZM20.5879 20.6323C20.3884 21.7547 19.4179 22.5759 18.278 22.5868H5.72199C4.58212 22.5759 3.61161 21.7547 3.41215 20.6323L1.30959 9.26078H22.6904L20.5879 20.6323Z" fill="black" />
                                <path d="M16.4421 15.0354C16.7692 15.0354 17.0343 14.7702 17.0343 14.4431V12.6663C17.0343 12.3392 16.7692 12.074 16.4421 12.074C16.1149 12.074 15.8498 12.3392 15.8498 12.6663V14.4431C15.8497 14.7702 16.1149 15.0354 16.4421 15.0354Z" fill="black" />
                                <path d="M7.55803 15.0354C7.88514 15.0354 8.1503 14.7702 8.1503 14.4431V12.6663C8.1503 12.3392 7.88514 12.074 7.55803 12.074C7.23092 12.074 6.96576 12.3392 6.96576 12.6663V14.4431C6.96576 14.7702 7.23092 15.0354 7.55803 15.0354Z" fill="black" />
                            </g>
                            <defs>
                                <clipPath id="clip0_62246_76">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </aside>
                </div>
            </header>
        </>
    )
}