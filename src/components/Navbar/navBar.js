import React, { useState } from 'react';
import style from './main.module.css';
import logoComplete from '../../assets/images/logos/aleph-complete.svg';
import logoIcon from '../../assets/images/logos/aleph-icon-black-back-none.svg'
import alephFoto from '../../assets/images/photo/aleph-perfil.svg';
import { AiFillSun, AiFillMoon, AiOutlineSearch, AiFillPhone } from "react-icons/ai";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";


function NavegationBar() {

    const [activeButton, setActiveButton] = useState('sun');
    const [themeText, setThemeText] = useState('');

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
        setThemeText(buttonName === 'sun' ? 'Tema claro' : 'Tema escuro');
    };

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
      
    const toggleSidebar = () => {
          setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <header className={style.navBar}>
                <figure>
                    <a href='#'>
                        <img src={logoComplete} alt='Logo' />
                    </a>
                </figure>
                <div className={style.navContainer}>
                    <nav>
                        <ul>
                            <li><a href='#'>Planos</a></li>
                            <li><a href='#'>Serviços</a></li>
                            <li><a href='#'>Contato</a></li>
                            <li><a href='#'>Sobre</a></li>
                            <li><a href='#'>Feedbacks</a></li>
                            <li><a href='#'>Resultados</a></li>
                            <li><a href='#'><img src={logoIcon} alt='icon da logo' /></a></li>
                        </ul>
                    </nav>
                    <div className={style.navTheme}>
                        <button
                            onClick={() => handleButtonClick('sun')}
                            className={activeButton === 'sun' ? style.active : ''}
                        >
                            <AiFillSun className={style.Sun} />
                        </button>
                        <span>{themeText || 'Tema'}</span>
                        <button
                            onClick={() => handleButtonClick('moon')}
                            className={activeButton === 'moon' ? style.active : ''}
                        >
                            <AiFillMoon className={style.Moon} />
                        </button>
                    </div>
                    <aside>
                        <button><AiOutlineSearch className={style.Search}/></button>
                        <input type='search' placeholder='Pesquisar'></input>
                    </aside>
                    <div className={style.navImage}>
                        <img src={alephFoto} alt='aleph foto' />
                    </div>
                </div>
                <article>
                    <h4>Tirar <b>minha dúvida.</b></h4>
                    <button> <AiFillPhone className={style.Phone}/> Contato já</button>
                </article>
            </header>
            <div className={style.miniBarContainer}>
                <p>Todos os Direitos Reservados</p>
                <p>Design by <b>Aleph Ramos</b></p>
                <a href="#">Politica de Privacidade</a>
            </div>

            <header className={style.mobileNavBar}>
                <picture>
                    <img src={logoComplete} alt='logo imagem' />
                </picture>
                <div> 
                    <button id='openMobileSidebar' onClick={toggleSidebar}> <FaBarsStaggered /> </button>
                </div>
            </header>
            <div className={style.mobileMiniBarContainer}>
                <p>Design by <b>Aleph Ramos</b></p>
            </div>

            <div className={`${style.navSidebar} ${isSidebarOpen ? style.open : ''}`}>

                <div className={style.closeSidebar}>
                    <button id='closeMobileSidebar' onClick={toggleSidebar}> <IoIosArrowForward  className={style.ArrowLeft} /> </button>
                </div>

                <div className={style.mobileNavTheme}>
                    <button
                        onClick={() => handleButtonClick('sun')}
                        className={activeButton === 'sun' ? style.active : ''}
                    >
                    <AiFillSun className={style.Sun} />
                    </button>

                    <span>{themeText || 'Tema claro'}</span>

                    <button
                        onClick={() => handleButtonClick('moon')}
                        className={activeButton === 'moon' ? style.active : ''}
                    >
                    <AiFillMoon className={style.Moon} />
                    </button>
                </div>

                <aside className={style.searchSidebar}>
                    <button><AiOutlineSearch className={style.Search}/></button>
                    <input type='search' placeholder='Pesquisar'></input>
                </aside>

                <nav className={style.navegationSidebar}>
                    <ul>
                        <li><a href='#'>Planos</a></li>
                        <li><a href='#'>Serviços</a></li>
                        <li><a href='#'>Contato</a></li>
                        <li><a href='#'>Sobre</a></li>
                        <li><a href='#'>Feedbacks</a></li>
                        <li><a href='#'>Resultados</a></li>
                        <li><a href='#'><img src={logoIcon} alt='icon da logo' /></a></li>
                    </ul>
                </nav>

                <article className={style.contactSidebar}>
                    <h4>Tirar <b>minha dúvida</b> agora mesmo!</h4>
                    <button> <AiFillPhone className={style.Phone}/> Contato já</button>
                </article>

            </div>  
        </>
    );
}

export default NavegationBar;