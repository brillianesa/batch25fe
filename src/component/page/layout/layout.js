import {Link, Outlet} from 'react-router-dom'

const Layout = () => {
    return (
        <>
        <nav>
            <ul>
                <li>
                    <Link to="/">Homepage</Link>
                </li>
                <li>
                    <Link to="/cards">Cards</Link>
                </li>
                <li>
                    <Link to="/page">Sharingan</Link>
                </li>
            </ul>
        </nav>
        
        <Outlet />
        </>
    )
}

export default Layout;