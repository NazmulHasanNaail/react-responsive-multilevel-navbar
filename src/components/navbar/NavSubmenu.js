function NavSubmenu(props) {
    const {items}= props
    return (
        <>
        <ul className="sub-menu">
            {items.map((item, index) => (
                <li key={index} className={item.subs ? 'has-children nav-item' : 'nav-item'}>
                    <a className='nav-link' href={item.path}>{item.label} {item.subs && <span></span>}</a>
                    { item.subs && <NavSubmenu items={item.subs} /> }
            </li>))
            }
        </ul>
        </>
    )
}

export default NavSubmenu;