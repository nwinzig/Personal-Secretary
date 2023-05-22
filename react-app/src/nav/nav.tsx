import './nav.css'
import { NavLink } from 'react-router-dom'

function Nav(){
    return(
        <div className='navContainer'>
            <NavLink to={'/'} className='page_title'>Personal Secretary</NavLink>
        </div>
    )
}

export default Nav
