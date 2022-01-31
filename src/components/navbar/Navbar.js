import './navbar.css';
import { useState } from 'react';
import NavSubmenu from './NavSubmenu';

function Navbar() {

    const items = [
        {
            label: 'Home',
            path: '/',
        },
        {
            label: 'About Us',
            path: '/about-us',
        },
        {
            label: 'Blog',
            path: '/blog',
            subs: [
                {
                    label: 'Sub 1',
                    path: '/sub-1',
                },
                {
                    label: 'Sub 2',
                    path: '/sub-2',
                    subs: [
                        {
                            label: 'Sub 2.1',
                            path: '/sub-2-1',
                            subs: [
                                {
                                    label: 'Sub 2.1.1',
                                    path: '/sub-2-1-1',
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            label: 'Contat Us',
            path: '/contact-us',
            subs: [
                {
                    label: 'Sub 1',
                    path: '/sub-1',
                },
                {
                    label: 'Sub 2',
                    path: '/sub-2',
                }
            ]
        },
    ]

    const [clicked, setClicked] = useState(false);

    function handletoggler() {
        setClicked(!clicked);
    }

    return (
        <nav className="site-navbar">
            <a className="site-brand" href='#'><h1>Navbar</h1></a>
            <div className={clicked ? 'navbar-toggler active' : 'navbar-toggler'} onClick={handletoggler}>
                <span></span>
            </div>

            <ul className={clicked ? 'menu active' : 'menu'}>
                {items.map((item, index) => (
                    <li key={index} className={item.subs ? 'has-children nav-item' : 'nav-item'}>
                        <a className='nav-link' href={item.path}>{item.label} {item.subs && <span></span>}</a>
                        { item.subs && <NavSubmenu items={item.subs} /> }
                    </li>))
                }
            </ul>
        </nav>
    )
}

export default Navbar;