import React, { useState } from 'react'
import style from '../styles/navbar.module.css';
const Navbar = () => {
    const [displayStyle, setDisplayStyle] = useState('none');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setDisplayStyle(isMenuOpen ? 'none' : 'block');
  };
  const togglenone = () => {
    setIsMenuOpen(false); // Ensure the menu is closed when togglenone is called
    setDisplayStyle('none');
  };

  return (
    <div id={style.container}>
        <div id={style.options} style={{ display: displayStyle}} >  
            <ul>
                <li onClick={togglenone}>
                    <svg width="28" height="30" xmlns="http://www.w3.org/2000/svg" ><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#FF0000" fill-rule="evenodd"/></svg>
                </li>
                <li>Help is here </li>
                <li>My Projects</li>
                <li>Sign in</li>
                <li>Cart</li>
                <li><hr /></li>
                <li>View All</li>
                <li>Visiting Cards</li>
                <li>Stationery, Letterheads & Notebooks</li>
                <li>Personalised Pens</li>
                <li>Stamps and Ink</li>
                <li>Signs, Posters & Marketing Materials</li>
                <li>Labels, Stickers & Packages</li>
                <li>Clothing, Caps & Bags</li>
                <li>Mugs, Albums & Gifts</li>
                <li>Drinkware</li>
                <li>Witerwera</li>
                <li>Calendars, Notebooks & Diaries</li>
            </ul>
        </div>
        <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg" id={style.menusimbol} onClick={toggleMenu}><path d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z" fill="#69707D" fill-rule="evenodd"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16" id={style.search}> <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/> </svg>
        
        <div><h1>Vistaprint</h1></div>
        <div><input type="search" placeholder=' 🔍  Search'/></div>
        <div id={style.menu} >
            <ul>
                <li>
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.5472 4C9.31915 4 5.04166 8.27749 5.04166 13.5055C5.04166 15.4066 5.59615 17.2285 6.62592 18.7336L5.04166 22.4566C4.88324 22.7734 5.20009 23.0903 5.59615 23.0111L9.31915 21.4268C10.8242 22.4566 12.6461 23.0111 14.5472 23.0111C19.7752 23.0111 24.0527 18.7336 24.0527 13.5055C24.0527 8.27749 19.7752 4 14.5472 4Z" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                        <ellipse cx="14.548" cy="17.4679" rx="0.792128" ry="0.792127" fill="black"></ellipse>
                        <path d="M14.5474 15.4073L14.4682 13.8231C15.7356 13.8231 16.8446 12.7933 16.8446 11.4467C16.8446 10.1001 15.8148 9.07031 14.4682 9.07031C13.1216 9.07031 12.0918 10.1001 12.0918 11.4467H12.171C12.171 10.1001 13.28 9.07031 14.5474 9.07031C15.8148 9.07031 16.9238 10.1793 16.9238 11.4467C16.9238 12.7933 15.894 13.8231 14.5474 13.8231V15.4073Z" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <span>Help is here <br />02522-669393</span>
                    </li>
                <li>
                    <svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M21.5 13.875C21.5 14.8694 21.0689 15.5634 20.4851 15.9837C19.9396 16.3764 19.3075 16.5 18.875 16.5H2.625C1.63056 16.5 0.936647 16.0689 0.516349 15.4851C0.123586 14.9396 0 14.3075 0 13.875V1.75C0 0.783502 0.783502 0 1.75 0H7.74469C8.30074 0 8.82369 0.264253 9.15354 0.711902L9.55003 1.25H19.75C20.7165 1.25 21.5 2.0335 21.5 3V13.875ZM1.5 1.75C1.5 1.61193 1.61193 1.5 1.75 1.5H7.74469C7.82413 1.5 7.89884 1.53775 7.94596 1.6017L10.8465 5.5381C11.1763 5.98575 11.6993 6.25 12.2553 6.25H19.75C19.8885 6.25 20 6.36192 20 6.49952V13.875C20 14.3806 19.8061 14.6241 19.6086 14.7663C19.3729 14.9361 19.0675 15 18.875 15H2.625C2.11944 15 1.87585 14.8061 1.73365 14.6086C1.56391 14.3729 1.5 14.0675 1.5 13.875V1.75ZM20 4.76772V3C20 2.86193 19.8881 2.75 19.75 2.75H10.6553L12.054 4.6483C12.1012 4.71225 12.1759 4.75 12.2553 4.75H19.75C19.8349 4.75 19.9183 4.75604 20 4.76772Z" fill="black"></path>
                    </svg>
                    <span>My Projects</span>
                </li>
                <li>
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="13.4197" cy="10.8738" r="4.37382" stroke="black" stroke-width="1.5"></circle>
                        <path d="M5.75586 22.5005C5.75586 21.5482 5.9541 20.6053 6.33925 19.7255C6.7244 18.8457 7.28893 18.0463 8.0006 17.3729C8.71227 16.6996 9.55715 16.1654 10.487 15.801C11.4168 15.4366 12.4134 15.249 13.4199 15.249C14.4263 15.249 15.4229 15.4366 16.3528 15.801C17.2826 16.1654 18.1275 16.6996 18.8392 17.3729C19.5509 18.0463 20.1154 18.8457 20.5005 19.7255C20.8857 20.6053 21.0839 21.5482 21.0839 22.5005" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <span>Sign in</span>
                </li>
                <li>
                    <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M22 8.09863H6V24.7986H22V8.09863Z" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11.5 10.6002V5.5002C11.5 4.8002 12.1 4.2002 12.8 4.2002H15.4C16.1 4.2002 16.7 4.8002 16.7 5.5002V10.7002" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0"><rect width="24" height="24" fill="white" transform="translate(2 2.5)"></rect></clipPath></defs></svg>
                    <span>Cart</span>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar